import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as R from 'ramda';


import { StateService } from 'services/state.service';
import { DataService } from 'services/data.service';
import { UserService } from 'user/user.service';

import { DateTime, DatetimeDifference } from 'utils/dateTime';
import { SymptomsService } from 'services';
import { GroupByDatePipe } from './group-by-date.pipe';
import { ContinueButton } from '../continue-button/continue-button';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';

import * as DataModel from 'common/models/data.model';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { HealthHistory } from 'common/models/healthHistory.model';
import { HistoryTypesEnums } from 'common/enums';
import { PatientDataSection } from '../../../../../common/types/patient-data-section.type';
import { NodeSearchTypeEnum } from '../../../../../common/enums/node-search-type.enum';


@Component({
  selector: 'pa-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent extends ContinueButton implements OnInit, OnDestroy, BottomButtonsControl {

  public symptomCategories = [];
  public patient: DataModel.Data;
  public viewOnly: boolean;
  public previousVisits = [];
  public groupedPreviousVisits = [];
  public isPreviousVisitsShownMore = false;
  private readonly userRole: string;
  private subscribes = [];
  private maxPreviousVisits = 2;
  private uniqPreviousVisitsSymptom = [];
  private icd10NodeSearchResponse = [];
  private patientListEntity: PatientListEntity;

  public readonly title = 'Patient Data';

  public sections: PatientDataSection;

  private oldHealthHistory: HealthHistory;

  constructor(
    private titleService: Title,
    private stateService: StateService,
    protected userService: UserService,
    private dataService: DataService,
    private symptomsService: SymptomsService,
    private dateTimeUtils: DateTime
  ) {
    super(userService);

    this.viewOnly = this.stateService.patient.getLastViewOnly();
    this.userRole = this.userService.getUserRole;
    this.titleService.setTitle(this.title);

    this.subscribes.push(this.symptomsService.getParsedSymptoms().subscribe(parsedSymptoms => {
      if (parsedSymptoms) {
        this.symptomCategories = this.symptomsService.getSymptomCategories();
        this.sections = this.symptomsService.healthHistorySections;
        this.loadPatient();
      }
    }));
    this.subscribes.push(this.stateService.patient.getCurrent().subscribe((currentPatient: PatientListEntity) => {
      this.patientListEntity = currentPatient;
    }));
  }

  loadPatient() {
    this.subscribes.push(this.dataService.getPatient().subscribe(data => {
      if (data) {
        this.patient = data;
        const healthHistory = this.patient.patientHealthHistory;
        const historyItems = healthHistory.historyItem;
        if (!this.oldHealthHistory && this.patient.patientHealthHistory) this.oldHealthHistory = R.clone(healthHistory);

        Object.keys(this.sections).forEach(key => {
          if (!['drugAllergies', 'medications', 'nonDrugAllergies'].includes(key)) {
            this.sections[key].data = historyItems.filter(item => this.sections[key].list.find(listItem => listItem.symptomID === item.symptomID));
          } else {
            let symptomID = '';
            switch (key) {
              case 'drugAllergies':
                symptomID = HistoryTypesEnums['MEDICATION-ALLERGIES'];
                break;
              case 'medications':
                symptomID = HistoryTypesEnums.MEDICATION;
                break;
              case 'nonDrugAllergies':
                symptomID = HistoryTypesEnums.ALLERGIES;
                break;
            }
            this.sections[key].data = historyItems.filter(item => item.symptomID === symptomID);
          }
        });

        this.uniqPreviousVisitsSymptom = R.uniqBy(
          symptom => [symptom.historyItem, symptom.dateAdded].join(),
          historyItems.filter(item => item.symptomID === HistoryTypesEnums['PREVIOUS-HISTORY'])
        );
        if (!this.previousVisits.length) this.loadPreviousVisits(this.uniqPreviousVisitsSymptom);
        this.uniqSectionsData();
        this.stateService.app.workers.rm();

        if (this.userRole === 'office_clerk' || this.userRole === 'operations_manager') {
          const pendingMessage = [];
          ['injections', 'medications'].forEach(procedure => {
            const procedureData = this.patient[procedure];
            if (procedureData && procedureData.some(item => item.state === 'ordered')) {
              pendingMessage.push(`${procedure}`);
            }
          });
        }
      }
    }));
  }

  /**
   * return how long ago date was
   * @param date
   */

  getDateAgo(date) {
    const dateDiff: DatetimeDifference = DateTime.diff(date, this.dateTimeUtils.currentDate(true));
    const years = (dateDiff.years ? `${String(dateDiff.years)}y ` : '');
    const months = (dateDiff.months ? `${String(dateDiff.months)}m ` : '');
    const days = (dateDiff.days ? `${String(dateDiff.days)}d ` : '');
    return  years + months + days;
  }

  /**
   * delete duplicates in sections data
   */
  private uniqSectionsData(): void {
    Object.values(this.sections).forEach((section) => {
      section.data = R.uniq(section.data);
    });
  }


  togglePreviousVisits() {
    const transformVisits = visits => {
      return this.groupedPreviousVisits = new GroupByDatePipe()
        .transform(visits, 'date')
        .sort((a, b) => new Date(b.key).getTime() - new Date(a.key).getTime());
    };

    if (this.isPreviousVisitsShownMore) {
      transformVisits(this.previousVisits);
      this.isPreviousVisitsShownMore = false;
    } else {
      transformVisits(this.previousVisits.slice(0, this.maxPreviousVisits));
      this.isPreviousVisitsShownMore = true;
    }
    return this.groupedPreviousVisits;
  }

  /**
   * load array of symptom objects by icd10codes
   * @param visits
   */
  private loadPreviousVisits(visits) {
    const icd10CodeArray = [];
    visits.forEach(item => {
      if (item.hasOwnProperty('historyItem')) icd10CodeArray.push(item.historyItem);
    });

    if (!icd10CodeArray.length) return;

    this.subscribes.push(this.dataService.nodeSearch(icd10CodeArray, NodeSearchTypeEnum.ICD, true, true).subscribe(response => {
      if (!response || !response.nodes || !response.nodes.length) return;
      this.icd10NodeSearchResponse = R.uniqBy(v => [v.icd10Code].join(), response.nodes);
      this.previousVisits = visits.map(item => {
        const icd10Node = this.icd10NodeSearchResponse.find(node => node.icd10Code === item.historyItem);
          return {
            name: icd10Node ? icd10Node.name : 'No data available',
            icd10code: item.historyItem,
            date: new Date(item.dateAdded).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })
          };
      });
      this.previousVisits.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.togglePreviousVisits();
    }));
  }

  public otherInformationUpdate(event) {
    if (R.isNil(event.key)) return;
    if ('historyItem' in event && event.historyItem !== undefined) {
      this.patient.patientHealthHistory.historyItem.find(
        item => item.historyItem === event.historyItem.historyItem && item.historyType === event.historyItem.historyType
      ).customFields = [...event.historyItem.customFields];
    } else {
      this.patient.patientHealthHistory[event.key] = event.value;
    }
    this.dataService.updatePatient({patientHealthHistory: this.patient.patientHealthHistory});
  }

  ngOnInit() {
    this.stateService.app.header.setData(this.title);
  }

  getShownBottomButtons(): StateBottomButtons {
    return this.getShownContinueButton();
  }

  onClickBottomButton(nameButton: string): void {

  }

  public get shouldSave(): boolean {
    return !R.equals(this.patient.patientHealthHistory, this.oldHealthHistory) && !this.viewOnly;
  }

  public get isOnlyReasonEdited(): boolean {
    const test = R.clone(this.oldHealthHistory);
    test.historyItem.forEach((item, index) => {
      if (item && item.details && this.patient.patientHealthHistory.historyItem[index] && this.patient.patientHealthHistory.historyItem[index].details)
        item.details = this.patient.patientHealthHistory.historyItem[index].details;
    });
    return !R.equals(this.patient.patientHealthHistory, test) && !this.viewOnly;
  }

  public updateRawHealthHistory(healthHistory: HealthHistory) {
    this.oldHealthHistory = R.clone(healthHistory);
  }

  ngOnDestroy() {
    this.subscribes.forEach(sub => sub.unsubscribe());
  }
}
