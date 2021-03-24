import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { FormControl, Validators } from '@angular/forms';

import * as R from 'ramda';


import { DataService } from 'services/data.service';
import { StateService, SymptomsService } from 'services';
import { DialogService } from 'services/app/dialog.service';
import { HistoryItem } from '../../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';

import { PpAddHealthHistoryComponent } from '../popups/pp-select/pp-add-health-history/pp-add-health-history.component';

import { Utils } from 'utils/utils';

import { PatientDataSection, ViewSymptom } from 'common/interfaces/patient-data.interface';
import { Data } from 'common/models/data.model';
import { ImmunizationByHistoryType } from 'common/models/healthHistory.model';
import { OtherInformationEnum } from 'common/enums/patient-other-information.enum';
import { HistoryTypesEnums } from 'common/enums';
import { symptomSections } from 'static/patient.constants';
import { ParsedSymptom } from '../../../common/interfaces/symptoms.interface';


const additionalModalSymptoms = [HistoryTypesEnums.DIABETES, HistoryTypesEnums['DIABETES-FAMILY'], HistoryTypesEnums.CANCER, HistoryTypesEnums['CANCER-FAMILY'], HistoryTypesEnums['HEART-DISEASE']] as string[];

@Component({
  selector: 'pa-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: {
        showDelay: 500,
        hideDelay: 100
      }
    }
  ]
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() section: PatientDataSection;
  @Input() patient: Data;
  @Input() symptomCategories;
  @Input() viewOnly: boolean;
  @Input() maxItems: number;
  @Input() cardTitleBackground = true;
  @Output() change = new EventEmitter();

  @ViewChild('otherInfoInput') otherInfoInput: ElementRef;

  public isMinimized = false;

  public otherPatientInformationHeader: string;
  public otherPatientInformation = '';
  public showOtherInformationInput = false;
  public otherInformationInputControl: FormControl;

  public familyHistorySection: HistoryItem[] = [];
  public presentationalData: HistoryItem[] = [];

  public drugReactions: string[] = [
    'Select option',
    'Rash',
    'Hives',
    'Itching of the skin or eyes',
    'Angioedema',
    'Swelling of the lips, tongue, or face',
    'Anaphylaxis',
    'Shortness of breath/wheezing',
    'Abdominal pain or cramping',
    'Nausea / Vomiting',
    'Heart palpitations',
    'Dizziness / Confusion',
    'Unknown reaction',
  ];

  private currentReactionHistoryItem: HistoryItem;

  private stdDialogAddConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    height: '80%',
    width: '60%'
  };

  static isDiabetesSymptom(symptomID: string): boolean {
    return ([HistoryTypesEnums.DIABETES, HistoryTypesEnums['DIABETES-FAMILY']] as string[]).includes(symptomID);
  }

  static additionalViewOtherInput(symptomID: string): boolean {
    return !ItemListComponent.isDiabetesSymptom(symptomID) && symptomID !== HistoryTypesEnums['HEART-DISEASE'];
  }

  get isData(): boolean {
    return Boolean(this.presentationalData.length || (this.otherPatientInformation && this.otherPatientInformation.length));
  }

  constructor(
    private dataService: DataService,
    private symptomsService: SymptomsService,
    public dialogService: DialogService,
    private stateService: StateService
  ) {
    if (!this.section) this.section = {name: null, data: [], list: []};
  }

  ngOnInit() {
    if (!this.symptomCategories) this.symptomCategories = this.symptomsService.getSymptomCategories();
    if (this.maxItems) this.isMinimized = true;
    if (OtherInformationEnum[this.section.name]) this.otherPatientInformation = this.patient.patientHealthHistory[OtherInformationEnum[this.section.name]] || '';
    this.setOtherInformationHeader();
    this.otherInformationInputControl = new FormControl('', [
      Validators.maxLength(200),
      Validators.pattern(/^\S+|\s+\S+\s*$/),
    ]);
  }

  ngOnChanges() {
    this.presentationalData = this.section.data.filter(item => item.historyValue !== false && item.symptomID !== HistoryTypesEnums['CANCER-BASIC']);
    this.filterFamilySymptoms();
  }

  getList(): ParsedSymptom[] {
    if (!this.section.list) return [];
    let list = this.section.list.filter(item => {
      const exists = this.section.data.find(hItem => [hItem.historyItem, hItem.symptomID]
        .some((element) => item.listValue ? element === item.listValue : element === item.symptomID));
      const additionalView = additionalModalSymptoms.includes(item.symptomID) && (this.additionalViewList(item).length || ItemListComponent.additionalViewOtherInput(item.symptomID));
      return (!exists || additionalView) && !item['blacklisted'] && item.symptomID !== HistoryTypesEnums['PREVIOUS-HISTORY'] && item.symptomID !== HistoryTypesEnums['CANCER-BASIC'];
    });
    if (this.section.name === 'Immunization') {
      list = this.section.list.filter(item => {
        const exists = this.section.data.find(hItem => hItem.historyItem === item.historyItem);
        return !exists && !item['blacklisted'];
      });
    }
    if (['Personal History', 'Family History'].includes(this.section.name))
      list = list.filter(item => item.symptomID !== HistoryTypesEnums.ALLERGIES && item.symptomID !== HistoryTypesEnums['FAMILY-ALLERGIES']);
    return list;
  }

  getViewList(list: Array<ParsedSymptom>): Array<ViewSymptom> {
    const sectionName = this.section.name;
    const replaces = {
      'Personal History': ['History of', 'History Of'],
      'Family History': ['Family History of', 'Family History Of']
    };
    return list.map((symptom, index) => {
      const viewSymptom: ViewSymptom = {
        name: symptom.name,
        index: index
      };
      if (['Personal History', 'Family History'].includes(sectionName)) {
        replaces[sectionName].forEach((item) => {
          viewSymptom.name = viewSymptom.name.replace(item, '').trim();
        });
      }
      return viewSymptom;
    });
  }

  showMore() {
    this.isMinimized = !this.isMinimized;
  }

  private get excludedList(): string[] {
    return this.section.data.map(item => (item.historyItem as string));
  }

  add(): void {
    const list = this.getList();
    const viewList = this.getViewList(list);

    const excludedList = this.excludedList;

    this.dialogService.open<{selected: number[], otherInfo: string, viewList: ViewSymptom[]}>(PpAddHealthHistoryComponent, Object.assign(new MatDialogConfig(), {
      ...this.stdDialogAddConfig,
      data: {
        list: viewList,
        type: list.length ? 'listmultiple' : 'drugs',
        name: `Add ${this.section.name}`,
        excluded: excludedList,
        search: this.section.name !== 'Immunization',
        showOtherInput: this.section.name === 'Surgical History',
        otherInputText: this.otherPatientInformation
      }
    })).subscribe(result => {
      const patient = this.patient;
      if (result.otherInfo !== this.otherPatientInformation) this.onOtherInformationEdit(result.otherInfo);
      result.selected.forEach(symptomIndex => {
        const symptom = list.length ? list[symptomIndex] : result.viewList[symptomIndex].name as unknown as ParsedSymptom;
        if (additionalModalSymptoms.includes(symptom.symptomID)) {
          const additionalViewList = this.additionalViewList(symptom, excludedList);
          this.dialogService.open<{selected: string[], otherInfo: string, viewList: ViewSymptom[]}>(PpAddHealthHistoryComponent, Object.assign(new MatDialogConfig(), {
            ...this.stdDialogAddConfig,
            data: {
              list: additionalViewList,
              type: 'listmultiple',
              name: `Choose ${symptom.name} Type`,
              excluded: [],
              search: additionalViewList.length,
              showOtherInput: ItemListComponent.additionalViewOtherInput(symptom.symptomID),
              otherInputText: this.otherPatientInformation,
              isTablet: !this.stateService.app.mediaResp().xl.matches
            }
          })).subscribe(additionalResult => {
            if (additionalResult.otherInfo !== this.otherPatientInformation) this.onOtherInformationEdit(additionalResult.otherInfo);
            this.addSymptom(patient, additionalResult.selected.map(historyItemIndex => {
              const historyItem = additionalViewList[historyItemIndex];
              return { ...symptom, historyItem: historyItem.name };
            }));
          });
        } else {
          this.addSymptom(patient, [symptom]);
        }
      });
    });
  }

  private additionalViewList(symptom: ParsedSymptom, excludedList: string[] = this.excludedList): ViewSymptom[] {
    let additionalViewList;
    additionalViewList = symptom.snomedCodes.filter(item => !!item.listValue).map(item => item.listValue);
    if (!additionalViewList.length) {
      if (ItemListComponent.isDiabetesSymptom(symptom.symptomID)) {
        additionalViewList = this.symptomsService.getSymptomDescriptions('Diabetes').map(item => item.name);
      } else if (symptom.symptomID === HistoryTypesEnums['HEART-DISEASE']) {
        additionalViewList = this.symptomsService.getSymptomDescriptions('HeartDisease').map(item => item.name);
      }
    }
    return additionalViewList.filter(item => !excludedList.includes(item)).map((item, index) => ({name: item, index: index}));
  }

  remove(symptom, forceDelete = false) {
    this.closeOtherInfoInput();
    const symptomToDelete = {values: [[symptom]], symptomId: symptomSections[this.section.name]};
    this.section.data = this.section.data.filter(item => item.historyItem !== symptom.historyItem);
    if (this.section.name === 'Immunization') {
      this.section.data = this.section.data.filter(item => item.historyType !== symptom.historyType);
    }
    this.removeSymptom(this.patient, [symptom.symptomID ? symptom : symptomToDelete], forceDelete);
  }

  removeFamilySymptom(symptom) {
    this.familyHistorySection = this.familyHistorySection.filter(item => item.symptomID !== symptom.symptomID || item.historyItem !== symptom.historyItem);
    R.difference(this.section.data, this.familyHistorySection).forEach(symptomToRemove => this.remove(symptomToRemove));
  }

  filterFamilySymptoms() {
    if (this.section.name !== 'Family History') return;
    const sectionData = Utils.clone(this.presentationalData);

    this.familyHistorySection = [];
    sectionData.forEach(item => {
      const findSameSymptom = (sectionItem) =>
                              (sectionItem.symptomID === item.symptomID) && (sectionItem.historyItem === item.historyItem);

      if (!this.familyHistorySection.find(symptom => findSameSymptom(symptom))) this.familyHistorySection.push(item);
    });
  }

  personalHistoryName(symptomID: string): string {
    return this.section.list.length ? this.section.list.find(item => item.symptomID === symptomID).name : '';
  }

  private needsRefill(item): boolean {
    return item.details && item.details.needsRefill;
  }

  private setOtherInformationHeader(): void {
    let header = '';
    switch (this.section.name) {
      case 'Family History':
        header = 'Family History of Cancer - OTHER';
        break;
      case 'Personal History':
        header = 'History of Cancer - OTHER';
        break;
      case 'Surgical History':
        header = 'OTHER';
        break;
      case 'Drug Allergies':
        header = 'Drug Reaction';
        break;
    }
    this.otherPatientInformationHeader = header;
  }

  public onAddOtherInformationItem(source: string, data?: string): void {
    const foundHistoryItem = this.presentationalData
      .find(item => item.historyItem === this.currentReactionHistoryItem.historyItem);
    if (source === 'Drug Allergies') {
      const removeReaction = this.drugReactions[0] === data;
      foundHistoryItem.customFields = removeReaction ? [] : [{key: 'reaction', value: data}];
    }
    if (source === 'Medications') {
      foundHistoryItem.details.reason = this.otherInfoInput.nativeElement.value.length
        ? this.otherInfoInput.nativeElement.value.trim()
        : '';
    }
    this.closeOtherInfoInput();
    this.onOtherInformationEdit(data ? data : this.otherInfoInput.nativeElement.value.trim(), foundHistoryItem);
  }

  public onOtherInformationEdit(event: string, historyItem?: HistoryItem): void {
    if (!historyItem) this.otherPatientInformation = event;
    this.change.emit({
      key: OtherInformationEnum[this.section.name],
      value: this.otherPatientInformation.trim(),
      historyItem
    });
  }

  public showOtherInfoInput(item: HistoryItem, source: string): void {
    this.currentReactionHistoryItem = item;
    if (source === 'Medications') {
      this.otherInformationInputControl.setValue(item.details ? item.details.reason : '');
      this.showOtherInformationInput = true;
      setTimeout(() => this.otherInfoInput.nativeElement.focus());
    }
  }

  public closeOtherInfoInput(): void {
    this.showOtherInformationInput = false;
  }

  public showOtherInfoButton(source: string, item: HistoryItem): boolean {
    return Boolean(source === 'Medications' && item.details && item.details.reason);
  }

  getImmunizationLabel(historyItem: string): string {
    return ImmunizationByHistoryType[historyItem];
  }

  private addSymptom(patient: Data, symptoms: Array<ParsedSymptom & { historyItem?: string }>): void {
    symptoms.forEach(symptom => {
      patient = this.symptomsService.addSymptom(patient, symptom, true, this.section.name);
    });
    if (symptoms.some(item => item.symptomID === HistoryTypesEnums.CANCER) && !patient.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums['CANCER-BASIC'])) {
      patient = this.symptomsService.addSymptom(patient, { symptomID: HistoryTypesEnums['CANCER-BASIC'] }, true, this.section.name);
    }
    this.dataService.updatePatient(patient);
  }

  private removeSymptom(patient: Data, symptoms: HistoryItem[], forceDelete: boolean): void {
    symptoms.forEach(symptom => {
      patient = this.symptomsService.removeSymptom(patient, symptom, 'PD', forceDelete);
    });
    if (symptoms.some(item => item.symptomID === HistoryTypesEnums.CANCER) && !patient.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums.CANCER)) {
      const basicCancerItem = patient.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums['CANCER-BASIC']);
      if (basicCancerItem) patient = this.symptomsService.removeSymptom(patient, basicCancerItem, 'PD', forceDelete);
    }
    this.dataService.updatePatient(patient);
  }
}
