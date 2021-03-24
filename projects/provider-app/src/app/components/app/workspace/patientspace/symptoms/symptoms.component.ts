import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StateService } from 'services/state.service';
import { DataService } from 'services/data.service';
import { Title } from '@angular/platform-browser';
import * as DataModel from 'common/models/data.model';
import { Data, Vitals } from 'common/models/data.model';
import { MatDialogConfig } from '@angular/material/dialog';
import { PpAddSymptomComponent } from 'components/shared/popups/pp-select/pp-add-symptom/pp-add-symptom.component';
import { ActivatedRoute, Router } from '@angular/router';
import { physicalGroups } from 'static/app.constants';
import { pagesTitles } from 'static/static.pages';
import { historyCategories } from 'static/patient.constants';
import { measurementTypes } from 'static/measurement-types.constant';
import { DialogService } from 'services/app/dialog.service';
import { NavigationService } from 'services/navigation.service';
import { SymptomsService } from 'services';
import { staticLabs } from '../../../../../labs/static/labs.static';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';
import { HistoryTypesEnums } from 'common/enums';
import { filter, first, tap } from 'rxjs/operators';
import { HpiSummaryComponent } from 'components/shared/hpi-summary/hpi-summary.component';
import { PpAddDescriptionComponent } from 'components/shared/popups/pp-select/pp-add-description/pp-add-description.component';
import { MeasurementsService } from 'services/measurements.service';

import * as R from 'ramda';
import { ContinueButton } from '../continue-button/continue-button';
import { UserService } from '../../../../../user/user.service';


@Component({
  selector: 'pa-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent extends ContinueButton implements OnInit, OnDestroy, BottomButtonsControl {
  @ViewChild(HpiSummaryComponent) hpiSummary: HpiSummaryComponent;
  @Input() pharmacistMode = false;

  public readonly title = pagesTitles.symptoms;

  public parsedSymptoms = [];
  public currentSymptomFilter = 'all';
  public triage = [];
  public Patient: DataModel.Data;
  public inReview = false;
  public editable = [];
  public tabActivated = false;
  public vitals: Vitals;

  public viewOnly: boolean;

  public symptomCategories = [];
  public symptomCategoriesRaw = [];
  public labsSymptomIds: string[] = R.uniq(R.flatten(staticLabs.map(item => item.ids)));
  public count = 0;

  private subscribes = [];
  private symptomSubscription;
  private stdDialogAddConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    height: '80%',
    width: '60%'
  };
  private excludedSymptoms;

  constructor(
    public stateService: StateService,
    private navigationService: NavigationService,
    private titleService: Title,
    private dataService: DataService,
    private symptomsService: SymptomsService,
    public dialogService: DialogService,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private activeRoute: ActivatedRoute,
    protected userService: UserService
  ) {
    super(userService);
    this.titleService.setTitle(this.title);
    this.vitals = <Vitals>{
      PULSE: 0,
      BLOOD_OXYGEN: 0,
      HEIGHT: 0,
      TEMPERATURE: 0,
      WEIGHT: 0,
      BP: { SYSTOLIC: 0, DIASTOLIC: 0 }
    };
    this.subscribes.push(this.symptomsService.getParsedSymptoms().subscribe(ps => {
      if (!ps) return;
      const measureSymptoms = [];
      this.symptomCategories = [
        {
          name: 'General',
          data: [],
        }, {
          name: 'Physical',
          data: [],
        }
      ];
      this.symptomsService.getSymptomCategories()
        .filter(category => !historyCategories.includes(category.categoryName) || category.groupName !== 'Measurements')
        .forEach(item => {
          this.symptomCategoriesRaw.push(item);
          if (physicalGroups.includes(item.groupName.toLowerCase())) return;
          const existing = this.symptomCategories[0].data.find(category => category.categoryName === item.categoryName);
          if (existing) {
            existing.categoryID = R.union(existing.categoryID, item.categoryID);
          } else {
            this.symptomCategories[0].data.push(item);
          }
        });
      this.symptomsService.getBodyParts()
        .forEach(item => {
          const symptomCategory = this.symptomCategoriesRaw.find(symptomCategoryItem =>
            symptomCategoryItem.categoryID.some(id => item.bodyPartsCodes.includes(id))
          );
          const category = {
            categoryName: item.name,
            categoryID: item.bodyPartsCodes,
            expandedNonPresenting: true,
            expandedPresenting: true,
            nonPresenting: [],
            presenting: [],
            groupName: symptomCategory.groupName
          };
          this.symptomCategories[1].data.push(category);
        });

      Object.keys(measurementTypes).forEach(key => {
        measureSymptoms.push(key);
      });

      this.excludedSymptoms = [].concat(measureSymptoms, this.labsSymptomIds, ['SYMPTCG14', 'SYMPTCG22', 'SYMPTCG24', 'SYMPTCG26'], [HistoryTypesEnums['PREVIOUS-HISTORY']]);

      this.parsedSymptoms = ps
        .filter(item => !this.labsSymptomIds.includes(item.symptomID))
        .filter(item => !measureSymptoms.includes(item.name))
        .filter(item => !['SYMPTCG14', 'SYMPTCG22', 'SYMPTCG24', 'SYMPTCG26'].includes(item.categoryID));
      this.loadSymptoms();
      this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    }));
  }

  getSymptomsByFilter(data: Data, value = 'all') {
    this.currentSymptomFilter = value;
    this.Patient = data;
    this.vitals = MeasurementsService.getVitals(this.Patient.measurements);
    this.triage = this.symptomsService.getSymptomsCategoriesByFilter(this.symptomCategories, data.triage, this.excludedSymptoms, this.currentSymptomFilter).triage;
    this.setVitalValues(this.triage);
  }

  loadSymptoms() {
    this.dataService.getPatient().subscribe(data => {
      if (!data) return;
      this.stateService.patient.getReviewed()
        .pipe(first())
        .subscribe(reviewed => this.inReview = reviewed !== 'reviewed' && reviewed !== 'confirmed');
      this.getSymptomsByFilter(data);
    });
  }

  getGroupSymptoms(data) {
    return data.filter(item => item.presenting.length || item.nonPresenting.length);
  }

  getSymptoms(lab) {
    return this.triage.filter(item => lab.ids.includes(item.symptomId));
  }

  getLabValue(lab) {
    const normal = lab.negative ? 'Negative' : lab.normal ? lab.normal : 'Normal';
    const symptoms = this.getSymptoms(lab);
    let returnValue = '';
    if (symptoms.length > 1) {
      returnValue = normal;
      symptoms.forEach(symptom => {
        if (!(symptom.values && symptom.values[0])) return 'Test not complete';
        if (!(symptom.values[0][0] === null && symptom.measurement === null)) returnValue = 'Positive';
      });
    } else {
      if (!(symptoms[0].values && symptoms[0].values[0])) return 'Test not complete';
      returnValue = symptoms[0].values[0][0] === null && symptoms[0].measurement === null ? normal : symptoms[0].values[0][0];
    }
    return returnValue;
  }

  getValue(lab) {
    const value = this.getLabValue(lab);
    const measurement = this.getSymptoms(lab).length > 1 ? null : this.getSymptoms(lab)[0].measurement;
    const returnValue = (value ? value : '') + (value && measurement ? ' - ' : '') + (measurement ? measurement : '');
    return returnValue;
  }

  setVitalValues(symptoms) {
    symptoms.filter(symptom => symptom.symptomSource === 'Measurement').forEach(symptom => {
      const symName = symptom.symptomName.toUpperCase();
      switch (true) {
        case symName.indexOf('HEIGHT') > -1:
          symptom['vitalValue'] = this.vitals.HEIGHT + ' inch';
          break;
        case symName.indexOf('PULSE') > -1:
          symptom['vitalValue'] = this.vitals.PULSE + ' bpm';
          break;
        case symName.indexOf('WEIGHT') > -1:
          symptom['vitalValue'] = this.vitals.WEIGHT + ' lbs';
          break;
        case symName.indexOf('TEMPERATURE') > -1:
          symptom['vitalValue'] = this.vitals.TEMPERATURE + ' °F';
          break;
        case symName.indexOf('BLOOD OXYGEN') > -1:
          symptom['vitalValue'] = this.vitals.BLOOD_OXYGEN + ' %';
          break;
        case symName.indexOf('BLOOD PRESSURE') > -1:
          symptom['vitalValue'] = this.vitals.BP.SYSTOLIC + '/' + this.vitals.BP.DIASTOLIC + ' mmHg';
          break;
      }
    });
  }

  getVitalValue(symptom) {
    const prefix = this.getTriageValue(symptom.symptomId) ? ' ' : ': ';
    return symptom['vitalValue'] ? prefix + symptom['vitalValue'] : '';
  }

  ngOnInit() {
    this.stateService.app.header.setData(this.title);
  }

  edit(group, category) {
    const edit = group === 'Physical' ? group : category;
    if (this.editable.includes(edit)) {
      this.editable = this.editable.filter(item => item !== edit);
    } else {
      this.editable.push(edit);
    }
  }

  ngOnDestroy() {
    if (this.symptomSubscription) {
      this.symptomSubscription.unsubscribe();
    }
    this.subscribes.forEach(s => s.unsubscribe());
  }

  addSymptom() {
    if (this.tabActivated) return;
    this.tabActivated = true;
    let symptomCategories = [];
    this.symptomCategories.forEach(item => {
      symptomCategories = symptomCategories.concat(item.data);
    });
    this.dialogService.open<{selected: {symptomID: string, presenting: boolean, hasMultipleValue: boolean}[]}>(PpAddSymptomComponent, Object.assign(new MatDialogConfig(), {
      ...this.stdDialogAddConfig,
      data: {
        parsedSymptoms: this.parsedSymptoms.filter(symptom => symptom['displayDrApp'] && !symptom['blacklisted']),
        symptomCategories: symptomCategories,
        excluded: this.triage.map(item => item.symptomId),
        type: 'symptoms',
        name: `Add symptoms`,
        searchName: 'symptom',
        search: true,
        filters: ['groupName', 'categoryName']
      }
    })).pipe(tap(() => this.tabActivated = !this.tabActivated), filter(result => !!result)).subscribe(result => {
      result.selected.forEach(symptom => {
        const parsedSymptom = this.parsedSymptoms.find(symptomMultipleValues => symptomMultipleValues.symptomID === symptom.symptomID);
        const descriptions = symptom.hasMultipleValue ? this.symptomsService.getSymptomDescription(parsedSymptom) : null;
        if (symptom.presenting === true && descriptions && descriptions.values.length) {
          this.dialogService.open<{selected: any[]; duration: [string, string]}>(PpAddDescriptionComponent, Object.assign(new MatDialogConfig(), {
            ...this.stdDialogAddConfig,
            data: {
              parsedSymptoms: [parsedSymptom],
              symptomCategories: symptomCategories,
              name: `Add symptoms description`,
              symptomDescriptions: descriptions.values,
              patientAge: this.Patient.patientInformation.age.years
            }
          }, {disableClose: true})).subscribe(description => {
            if (description.selected.length) {
              let patient = this.symptomsService.addSymptom(this.Patient, {symptomID: symptom.symptomID}, symptom.presenting, '', description.selected || [], description.duration);
              if (symptom.symptomID === HistoryTypesEnums.CANCER && !patient.triage.find(item => item.symptomId === HistoryTypesEnums['CANCER-BASIC'])) {
                patient = this.symptomsService.addSymptom(patient, { symptomID: HistoryTypesEnums['CANCER-BASIC'] }, symptom.presenting);
              }
              this.dataService.updatePatient(patient);
            }
          });
        } else {
          const patient = this.symptomsService.addSymptom(this.Patient, {symptomID: symptom.symptomID}, symptom.presenting, '');
          this.dataService.updatePatient(patient);
        }
      });
    });
  }

  removeSymptom(symptom) {
    let symptoms = [symptom];
    if (symptom.categoryID === HistoryTypesEnums.FAMILY) {
      symptoms = this.Patient.triage.filter(item => item.symptomId === symptom.symptomId);
    } else if (symptom.symptomId === HistoryTypesEnums.CANCER) {
      const basicCancer = this.Patient.triage.find(item => item.symptomId === HistoryTypesEnums['CANCER-BASIC']);
      if (basicCancer) symptoms.push(basicCancer);
    }
    let patient;
    symptoms.forEach(item => {
      patient = this.symptomsService.removeSymptom(this.Patient, item, 'HPI');
      this.dataService.updatePatient(patient);
    });
  }

  removeGroup(symptom) {
    let removeArray;
    if (symptom.groupedSymptom && ['Cough', 'Rash', 'ChangeRash'].includes(symptom.groupedSymptom.type)) {
      removeArray = this.triage.filter(item => item.categoryID === symptom.categoryID && this.symptomsService.getGroupedSymptomType(item) === symptom.groupedSymptom.type);
    } else {
      removeArray = this.triage.filter(item => item.categoryID === symptom.categoryID);
    }
    R.clone(removeArray).forEach(item => this.removeSymptom(item));
  }

  getTriageValue(symptomId: string) {
    return this.dataService.getTriageValue(symptomId, this.triage);
  }

  continueReview() {
    this.navigationService.navigate([
      'patients',
      this.activeRoute.parent.snapshot.params['id'],
      'vm'
    ]);
  }

  public test(): boolean {
    return this.inReview && !this.viewOnly;
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      'continue': true,
      'previous': true
    };
  }

  onClickBottomButton(nameButton: string): void {
    if (nameButton === 'continue') {
      if (this.isPharmacistUserRole()) {
        this.navigationService.navigate([
          'patients',
          this.activeRoute.parent.snapshot.params['id'],
          'diagnosis'
        ]);
      } else
        this.continueReview();
    }
    if (nameButton === 'previous')
      this.navigationService.navigate([
        'patients',
        this.activeRoute.parent.snapshot.params['id'],
        'diagnosis'
      ]);
  }

  sholdSymptomBeDisplayed(symptom): boolean {
    const femaleSymptomNotApplies = this.Patient.patientInformation.gender === 'Male' && ['SYMPT0007658'].includes(symptom.symptomId);
    return symptom.symptomId !== 'SYMPT0002070' && !symptom.hidden && !femaleSymptomNotApplies;
  }
}
