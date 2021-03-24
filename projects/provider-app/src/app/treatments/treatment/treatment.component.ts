import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';

import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  first as rxjsFirst,
  map,
  switchMap
} from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { CollapseComponent, MdbAutoCompleterComponent } from 'ng-uikit-pro-standard';
import * as R from 'ramda';
import { Store } from '@ngxs/store';


import { DiagnosisAccordionState } from '../../components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.state';

import { DataService } from 'services/data.service';
import { StateService } from 'services/state.service';
import { DialogService } from 'services/app/dialog.service';
import { NavigationService, NotificationsService } from 'services';
import { SymptomsService } from 'services/symptoms.service';
import {
  conflictList,
  conflictPreposition,
  hiddenTreatments as defaultHiddenTreatments,
  initialTreatments,
  maleHiddenTreatments,
  nonTreatmentTypes
} from 'treatments/static/static.treatments';
import { Data } from 'common/models/data.model';
import {
  BackendTreatment,
  Detail,
  DrugConflictInformation,
  Treatment,
  TreatmentTypesItem,
  DrugInformation
} from 'treatments/treatments.interface';
import { DiagnosisTabsEnum } from 'common/enums';
import { AddTreatmentEvent } from '../store-events/add-treatment.event';
import { BuildBackendTreatments } from '../store-events/build-backend-treatments.event';
import { ChangeTreatmentGroup } from '../store-events/change-treatment-group.event';
import { DischargeInstructionsUpdate } from '../store-events/discharge-instructions-update.event';
import { DischargeUpdate } from '../store-events/discharge-update.event';
import { RemoveDrugTreatmentEvent } from '../store-events/remove-drug-treatment.event';
import { RemoveTreatmentEvent } from '../store-events/remove-treatment.event';
import { RTWSUpdate } from '../store-events/rtws-update.event';
import { ToggleGroupEvent } from '../store-events/toggle-group.event';
import { TypeClickEvent } from '../store-events/type-click.event';
import { UpdateDrugInformationEvent } from '../store-events/update-drug-information.event';

import { TreatmentType } from '../treatments.type';
import { PpAddTreatmentsComponent } from '../../components/shared/popups/pp-select/pp-add-treatments/pp-add-treatments.component';
import { DrugTreatmentComponent } from '../drug-treatment/drug-treatment.component';
import { drugNameMap } from '../../../assets/drug-name-map';
import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { PpSelectTreatmentsListItem } from '../../common/interfaces/pp-select.interface';
import { TreatmentsService } from '../treatments.service';

import { DiagnosticEngine } from '../../common/interfaces/diagnostic-engine.interface';
import { UserService } from '../../user/user.service';
import { DischargeInstruction, PVDischarge, ReturnToSchoolWork } from '../../discharge/discharge.interface';
import { GenderEnum } from '../../../../../patient-profile/src/lib/enums';
import { RTSDaysEnum } from '../../discharge/discharge.enum';
import { SocialCard } from '../../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';
import { PatientDataFacadeService } from '../../patient-core/patient-data-facade.service';
import {
  BottomButtonsControl,
  StateBottomButtons
} from '../../components/app/workspace/patientspace/bottom-space/interfaces';
import { ContinueButton } from '../../components/app/workspace/patientspace/continue-button/continue-button';
import { NewTreatmentsService } from 'treatments/treatments.new.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';

@Component({
  selector: 'pa-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentComponent extends ContinueButton implements OnInit, BottomButtonsControl, OnDestroy, AfterViewInit {
  @ViewChild(MdbAutoCompleterComponent) completer: MdbAutoCompleterComponent;

  private customDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minHeight: '150px',
    width: '350px'
  };

  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  @ViewChildren(DrugTreatmentComponent) drugTreatments: DrugTreatmentComponent[];

  public viewModelTreatment$: Observable<Treatment[]> = this.treatmentsService.observe(state => state.viewModelTreatments.filter(item => this.userService.businessAvailableTreatments.includes(item.type)));
  public selectedTreatment$: Observable<Treatment[]> = this.viewModelTreatment$.pipe(map((treatments: Treatment[]) => {
    return treatments.filter(item => this.typeSelected(item));
  }));
  public collapsedAll$: Observable<boolean> = this.selectedTreatment$.pipe(map(treatments => treatments.reduce( (result, group) => {
    return result && !group.expanded;
  }, true)));
  public prescriptionDrugsFilter$: Observable<string[]> = this.viewModelTreatment$.pipe(map((treatments: Treatment[]) => {
    if (!this.userService.businessAvailableTreatments.includes('Prescription Drugs')) return [];
    const drugs = treatments.find(treatment => treatment.type === 'Prescription Drugs').details;
    return this.prescriptionDrugsFilters = R.sort((a, b) => a.localeCompare(b), R.uniq(drugs.map(group => group.groupName)));
  }));

  public drugInformation$: Observable<DrugInformation[]> = this.treatmentsService.observe(state => state.drugInformation);

  public treatmentTypes: TreatmentTypesItem[];

  private stdDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    height: '80%',
    panelClass: ['rounded'],
    width: '60%'
  };

  private treatmentsPerScreenSize: { desktop: number, tablet: number } = {
    desktop: 12,
    tablet: 6
  };

  public sortTreatments = TreatmentComponent.sortTreatments;

  public treatmentsPagination: number;
  public patient: Data;
  public finalizeDisabled = true;
  public showDrugMsg: boolean;
  public subscribes = [];
  public treatmentsListLimit: number;
  public prescriptionDrugsFilters: string[];
  public prescriptionDrugsSelectedGroup = '';

  private resultsSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public results: Observable<any[]> = this.resultsSubject.asObservable();
  public searchGroup: Treatment;
  public searchAutoCompleter: MdbAutoCompleterComponent;
  private handleSearchSubject: Subject<HTMLInputElement> = new Subject();
  private isInvalidDischargeForm = false;

  public viewOnly: boolean;
  public showFinalize = false;

  public validationErrorLog: {drug: DrugInformation, amount: string, route: string, form: string, quantity: string, strength: string, direction: string, invalid: boolean, frequency: string, dispenseForm: string}[] = [];

  constructor(
    private dataService: DataService,
    private symptomsService: SymptomsService,
    public stateService: StateService,
    public userService: UserService,
    public dialogService: DialogService,
    private notificationsService: NotificationsService,
    private store: Store,
    private treatmentsService: TreatmentsService,
    private newTreatmentService: NewTreatmentsService,
    public changeDetector: ChangeDetectorRef,
    private patientDataService: PatientDataFacadeService,
    private navigationService: NavigationService,
    private dialogSubscribesService: DialogSubscribesService
  ) { super(userService); }

  static sortTreatments(first, second) {
    const a = first.shortName;
    const b = second.shortName;
    if (/^(return in)/i.test(a) && /^(return in)/i.test(b)) {
      const numA = /(\d+)\s+(\S+)/g.exec(a)[1];
      const numB = /(\d+)\s+(\S+)/g.exec(b)[1];
      const timeA = /(\d+)\s+(\S+)/g.exec(a)[2];
      const timeB = /(\d+)\s+(\S+)/g.exec(b)[2];
      if (timeA[0] === timeB[0]) {
        return Number(numA) > Number(numB) ? 1 : -1;
      } else {
        return /(month)/i.test(timeA) ? 1 : /(day)/i.test(timeA) ? -1 : /(month)/i.test(timeB) ? -1 : 1;
      }
    } else if (/^(return in)/i.test(a)) {
      return 1;
    } else if (/^(return in)/i.test(b)) {
      return -1;
    }
    return a['shortName'] > b['shortName'] ? 1 : -1;
  }

  private get hiddenTreatments(): string[] {
    return defaultHiddenTreatments.concat(this.patient ? this.patient.patientInformation.gender === GenderEnum.MALE ? maleHiddenTreatments : [] : maleHiddenTreatments);
  }

  /**
   * Get if current type have selected treatments
   * @param {Treatment} group
   */
  public typeSelected(group: Treatment) {
    return (group.details.some(treatment => treatment.isSelected || !treatment.doctorAdded) || group.forceShow) && !group.forceHide;
  }

  private get viewModelTreatments(): Treatment[] {
    return this.treatmentsService.selectSnapshot().viewModelTreatments;
  }

  private get selectedTreatments(): Treatment[] {
    return this.viewModelTreatments.filter(item => this.typeSelected(item));
  }

  private get drugInformation(): DrugInformation[] {
    return this.treatmentsService.selectSnapshot().drugInformation;
  }

  /**
   * format TreatmentEngine[] to BackendTreatments[]
   * @returns {BackendTreatment[]}
   */
  public get prepareTreatmentsToSave() {
    this.treatmentsService.dispatch(new BuildBackendTreatments(this.diagnosticEngine));
    return this.treatmentsService.selectSnapshot().backendTreatments.filter(item => {
      return this.diagnosticEngine.find(de => item.contributor.icd_code === de.icd10) && this.diagnosticEngine.find(de => item.contributor.icd_code === de.icd10).isSelected;
    });
  }

  /**
   * Hide/Show selected treatment group
   * @param {TreatmentType} treatmentType
   */
  onTypeClick(treatmentType: TreatmentType) {
    if (this.viewOnly) return;
    this.treatmentsService.dispatch(new TypeClickEvent(treatmentType, this.selectedIllnessesCodes, this.treatmentTypes));
  }

  /**
   * Load and set up treatments/illness data
   */
  loadData() {
    this.dataService.getPatient().pipe(filter(patient => !!patient), distinctUntilChanged((a, b) => R.equals(a.patientHealthHistory, b.patientHealthHistory))).subscribe(patient => {
      this.patient = patient;
      this.changeDetector.markForCheck();
    });
  }

  public toggleAll() {
    this.collapsedAll$.pipe(rxjsFirst()).subscribe(collapsed => this.selectedTreatments.forEach(treatment => this.treatmentsService.dispatch(new ToggleGroupEvent(treatment.type, collapsed))));
  }

  /**
   * Finalize patient
   */
  finalize() {
    this.showDrugMsg = false;
    this.showFinalize = true;
    this.treatmentsService.dispatch(new BuildBackendTreatments(this.diagnosticEngine));

    // this.stateService.patient.emitPrefinalize(this.treatmentsService.prefinalizedTreatmentsList);
    this.stateService.patient.emitPrefinalize(this.treatmentsService.prefinalizedTreatmentsList.concat(this.newTreatmentService.selectedTreatments));
  }

  ngOnInit(): void {
    if (this.userService.isPICModeBusiness) {
      this.stateService.patient.getCurrent().pipe(first()).subscribe(patient => {
        if (patient) {
          this.stateService.app.getEhrLoggedStatus(patient.ehr_location).pipe(first()).subscribe(logged => {
            if (!logged) {
              this.dialogSubscribesService.showEhrAuthModal(patient.ehr_location, true).subscribe();
            }
          });
        }
      });
    }

    this.subscribes.push(this.symptomsService.getTreatmentTypes().subscribe(treatmentsTypes => this.treatmentTypes = treatmentsTypes));
    this.loadData();
    this.treatmentsPagination = this.stateService.app.mediaResp().xxxl.matches ? this.treatmentsPerScreenSize.desktop : this.treatmentsPerScreenSize.tablet;
    this.treatmentsListLimit = this.treatmentsPagination;
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    this.changeDetector.detectChanges();
    this.subscribes.push(this.handleSearchSubject.pipe(
      debounceTime(1000),
      switchMap(value => this.search(this.searchGroup, value, this.searchAutoCompleter))
    ).subscribe());
    this.subscribes.push(this.userService.auth.getLogoutEvent().subscribe(event => {
      if (this.treatmentsService.shouldSaveTreatments) this.saveTreatments().subscribe();
    }));
  }

  ngAfterViewInit(): void {
    if (!this.isClerkOrOMUserRole()) {
      setTimeout(() => this.stateService.patient.setIsConfirmDiagnosis(true));
      this.changeDetector.detectChanges();
    }
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe());
  }

  /**
   * Deselect all treatments
   */
  deselectTreatments() {
    this.selectedTreatment$.pipe(rxjsFirst()).subscribe(treatments => {
      treatments.forEach(treat => this.onTypeClick(treat.type));
    });
  }

  /**
   * Get patientHealthHistory section
   * @param {string} section
   */
  getSection(section) {
    return this.patient ? this.patient.patientHealthHistory.historyItem.filter(item => item.historyType === section && item.historyValue) : [];
  }

  /**
   * Get treatments of selected type, ai chosen or selected
   * @param {Treatment} group
   * @param {boolean} descs
   */
  getTypeTreatments(group: Treatment, descs = false): Detail[] {
    return descs ? group.details.filter(item =>  item.isSelected) : group.details;
  }

  /**
   * Get names of illness this treatments is selected for
   * @param {TreatmentType} treatmentType
   * @param {Detail} treatment
   */
  getIllnessesNames(treatmentType: TreatmentType, treatment: Detail) {
    const illnesses = this.getTreatmentIllnesses(treatmentType, treatment.name);
    const selectedIllnesses: string[] = [];
    const unselectedIllnesses: string[] = [];

    treatment.toTreat.forEach(icdCode => {
      const illness = illnesses.find(item => item.icdCode === icdCode);
      illness ? selectedIllnesses.push(illness.icdName) : unselectedIllnesses.push(icdCode);
    });
    if (unselectedIllnesses.length) {
      this.treatmentsService.dispatch(new AddTreatmentEvent(treatment.toTreat.filter(item => !unselectedIllnesses.includes(item)), treatmentType, treatment.name, this.treatmentTypes));
    }

    return selectedIllnesses.join(', ');
  }

  public drugSearch(): (keyword: string) => Observable<string[] | { [key in 'label' | 'value']: string }[]> {
    return (keyword: string) => {
      return keyword.length >= 3 ? this.treatmentsService.getDrugsByName(keyword) : of([]);
    };
  }

  public drugSelected(treatmentType: TreatmentType, drug: {text: string | { label: string; value: string }, element: any}): void {
    // todo: split into 2 separate methods
    if (this.isFastmed) {
      // @ts-ignore
      this.optionSelected(treatmentType, drug);
    } else {
      // @ts-ignore
      this.treatmentsService.getCombinationDrugs(drug.text.value).subscribe((drugCombination) => {
        // @ts-ignore
        this.selectSymptoms(treatmentType, drug.text.label, false, drugCombination.header.atcgroups[0]?.micaGroupName, `${drug.text.value}-pid`);
      });
    }
  }

  public treatmentsSearch(group: Treatment): (keyword: string) => Observable<string[]> {
    return (keyword: string) => {
      let treatmentList = this.treatmentTypes.find(item => item.name === group.type).treatmentTypeDesc;
      treatmentList = treatmentList
        .filter((item) => !this.hiddenTreatments.includes(item['shortName']))
        .filter((item) => !this.viewModelTreatments.find(type => type.type === group.type).details.find(detail => detail.name === item['shortName']))
        .filter((item) => item.shortName.toLowerCase().includes(keyword.toLowerCase()))
        .sort(this.sortTreatments);
      const result = [];
      treatmentList.forEach(treatment => {
        if (!result.includes(treatment.shortName)) result.push(treatment.shortName);
      });
      return of(result);
    };
  }

  /**
   * search treatment by text
   * @param {Treatment} group
   * @param {HTMLInputElement} input
   * @param {MdbAutoCompleterComponent} auto
   * @param {FocusEvent} event
   */
  search(group: Treatment, input: HTMLInputElement, auto: MdbAutoCompleterComponent, event?): Observable<Array<any>> {
    const fromModal = event && event.relatedTarget && (event.relatedTarget['textContent'] === 'Cancel' || event.relatedTarget['textContent'] === 'Confirm');
    if (fromModal) input.blur();
    if (group.type.endsWith('Drugs')) {
      input.value = input.value.trim();
      if (input.value.length >= 3) {
        this.treatmentsService.getDrugsByName(encodeURIComponent(input.value)).subscribe((response: any[]) => {
          if (!response) return;
          this.resultsSubject.next(response);
          return this.results;
        });
      } else {
        this.resultsSubject.next([]);
        return this.results;
      }
    } else {
      let treatmentList = this.treatmentTypes.find(item => item.name === group.type).treatmentTypeDesc;
      treatmentList = treatmentList
        .filter((item) => !this.hiddenTreatments.includes(item['shortName']))
        .filter((item) => !this.viewModelTreatments.find(type => type.type === group.type).details.find(detail => detail.name === item['shortName']))
        .filter((item) => item.shortName.toLowerCase().includes(input.value.toLowerCase()))
        .sort(this.sortTreatments);
      const result = [];
      treatmentList.forEach(treatment => {
        if (!result.includes(treatment.shortName)) result.push(treatment.shortName);
      });
      this.resultsSubject.next(result);
      return this.results;
    }
    return of([]);
  }

  /**
   * handle search input key up
   * @param {Treatment} group
   * @param {HTMLInputElement} input
   * @param {MdbAutoCompleterComponent} auto
   */
  onSearchKeyUp(group: Treatment, input: HTMLInputElement, auto: MdbAutoCompleterComponent) {
    this.handleSearchSubject.next(input);
    this.searchGroup = group;
    this.searchAutoCompleter = auto;
  }

  /**
   * handle option selected
   * @param {TreatmentType} treatmentType
   * @param {{text: string}} data
   * @param {HTMLInputElement} input
   */
  optionSelected(treatmentType: TreatmentType, data: {text: string, element: any}) {
    if (data.text) this.selectSymptoms(treatmentType, data.text);
  }

  checkTreatmentConflicts(treatmentType: TreatmentType, treatmentName: string, groupName: string, rxcui: string): boolean {
    if (!treatmentType.includes('Drug')) return false;
    const commonName = drugNameMap[treatmentName.toUpperCase()] || treatmentName.toUpperCase();
    const currentlyAddedDrugs: Array<Detail & {type: number}> = this.viewModelTreatments[0].details.map(item => Object.assign(item, {type: 0})).concat(this.viewModelTreatments[1].details.map(item => Object.assign(item, {type: 1})));
    const existingDrug = currentlyAddedDrugs.find(addedDrug => {
      const addedDrugCommonName = drugNameMap[addedDrug.name.toUpperCase()] || addedDrug.name.toUpperCase();
      return addedDrugCommonName === commonName;
    });

    if (existingDrug && existingDrug.isSelected && !this.viewModelTreatments[existingDrug.type].forceHide) {
      this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
        ...this.customDialogConfig,
        data: {
          message: `Drug "${treatmentName}" is already added by the name of "${existingDrug.name}". You can't add multiple drugs with the same common name.`
        }
      })).subscribe(() => this.changeDetector.detectChanges());
      return true;
    } else if (existingDrug) {
      this.treatmentsService.dispatch(new ChangeTreatmentGroup(treatmentType, existingDrug.name, treatmentName)).then(() => this.selectSymptoms(treatmentType, treatmentName));
      return true;
    } else {
      const conflictInfo = this.conflictInformation;
      let conflictMessage: Observable<boolean>;
      conflictList.find((key, index) => {
        const conflictedItem = conflictInfo[key].find(item => Array.isArray(item.potentialDrugs) && item.potentialDrugs.includes(commonName));
        if (conflictedItem) conflictMessage = this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
          ...this.customDialogConfig,
          data: {
            isDialog: true,
            message: `WARNING: Patient has indicated they ${conflictPreposition[index]} ${conflictedItem.conflict} and ${treatmentName} contraindicates that. Do you want to proceed?`
          }
        }));
        return Boolean(conflictedItem);
      });
      if (conflictMessage) {
        conflictMessage.pipe(rxjsFirst(), filter(result => !!result)).subscribe(() => {
          this.treatmentsService.dispatch(new AddTreatmentEvent([], treatmentType, treatmentName, this.treatmentTypes, false, [], [], groupName, rxcui)).then(() => this.selectSymptoms(treatmentType, treatmentName));
        });
        return true;
      } else return false;
    }
  }

  clickSymptoms(treatmentType: TreatmentType, detail: Detail, diagnosisChange = false) {
    this.selectSymptoms(treatmentType, detail.name, diagnosisChange, '', detail.rxcui);
  }

  selectSymptoms(treatmentType: TreatmentType, treatmentName: string, diagnosisChange = false, groupPlaceholder?: string, rxcui?: string) {
    if (this.viewOnly) {
      return;
    }

    this.updateDrugInformation();

    const list = this.getTreatmentIllnesses(treatmentType, treatmentName);
    let selected = [];

    const detail = this.viewModelTreatments.find(item => item.type === treatmentType).details.find(item => item.name.toLowerCase() === treatmentName.toLowerCase());
    if (detail) {
      selected = detail.toTreat.map(icdCode => list.findIndex(item => item.icdCode === icdCode));
    } else {
      if (this.checkTreatmentConflicts(treatmentType, treatmentName, groupPlaceholder, rxcui)) return;
      this.treatmentsService.dispatch(
        new AddTreatmentEvent(
          [], treatmentType, treatmentName,
          this.treatmentTypes, this.isFastmed, [],
          [], groupPlaceholder, rxcui
        )
      );
    }

    if (nonTreatmentTypes.includes(treatmentType) || (list.length === 1 && !diagnosisChange)) {
      if (detail && detail.isSelected && !diagnosisChange) {
        this.removeTreatment(treatmentType, treatmentName);
        return;
      }
      const toTreatments = list.map(item => item.icdCode);
      this.treatmentsService.dispatch(
        new AddTreatmentEvent(
          toTreatments, treatmentType, treatmentName,
          this.treatmentTypes, this.isFastmed, [],
          [], groupPlaceholder
        )
      );
      return;
    }

    this.dialogService.open<{selected: number[]}>(PpAddTreatmentsComponent, {
      ...this.stdDialogConfig,
      data: {
        list: list,
        name: 'Diagnosis',
        selection: selected
      }
    }).subscribe(result => {
      if (!result.selected.length) return;
      const toTreatments = result.selected.map(index => list[index].icdCode);
      this.treatmentsService.dispatch(new AddTreatmentEvent(toTreatments, treatmentType, treatmentName, this.treatmentTypes));
      this.changeDetector.detectChanges();
    });
  }

  removeTreatment(treatmentType: TreatmentType, treatmentName: string) {
    const event = treatmentType.match(/drugs$/i) ? RemoveDrugTreatmentEvent : RemoveTreatmentEvent;
    this.treatmentsService.dispatch(new event(treatmentType, treatmentName)).then(() => {
      if (!this.viewModelTreatments.find(item => item.type === treatmentType).details.some(item => item.isSelected)) this.onTypeClick(treatmentType);
    });
  }

  drugUnviable(drug: DrugInformation) {
    const prescriptionTreatments = this.selectedTreatments.find(item => item.type === 'Prescription Drugs');
    const isPrescription = Boolean(prescriptionTreatments && prescriptionTreatments.details.find(item => drug.drugName.toLowerCase() === item.name.toLowerCase()));
    const nan = (isNaN(+drug.quantity) || String(Number(drug.quantity)) !== String(drug.quantity)) && isPrescription;
    const routeInvalid = isPrescription && (!drug.route || drug.route.length <= 0);
    const strengthInvalid = !drug.strength || drug.strength.length <= 0;
    const quantityInvalid = +drug.quantity <= 0 && isPrescription;
    const amountInvalid = isPrescription && (!drug.amount || drug.amount.length <= 0);
    const formInvalid = isPrescription && (!drug.form || drug.form.length <= 0);
    const missingParams = routeInvalid || strengthInvalid || quantityInvalid || amountInvalid || formInvalid;
    const directionInvalid = (!drug.directionsString.trim().length || drug.directionsString.trim().length > 140) && isPrescription;
    const fastmedDrugSpecified = !this.isFastmed || this.drugTreatments.find(item => item.drug.drugName.toLowerCase() === drug.drugName.toLowerCase()).drugSpecified;
    const dispenseFormInvalid = !drug.dispenseForm && isPrescription;
    const frequencyInvalid = !drug.frequency && isPrescription;

    this.validationErrorLog.push({
      drug: drug,
      quantity: nan ? 'quantity is NaN' : quantityInvalid ? 'quantity invalid' : 'valid',
      amount: amountInvalid ? 'drug amount invalid' : 'valid',
      form: formInvalid ? 'drug form invalid' : 'valid',
      route: routeInvalid ? 'drug route invalid' : 'valid',
      strength: strengthInvalid ? 'drug strength invalid' : 'valid',
      direction: directionInvalid ? 'drug direction invalid' : 'valid',
      frequency: frequencyInvalid ? 'drug frequency invalid' : 'valid',
      dispenseForm: dispenseFormInvalid ? 'drug dispense form invalid' : 'valid',
      invalid: nan || missingParams || directionInvalid || !fastmedDrugSpecified || frequencyInvalid || dispenseFormInvalid
    });

    return nan || missingParams || directionInvalid || !fastmedDrugSpecified || frequencyInvalid || dispenseFormInvalid;
  }

  /**
   * Filtering prescription drugs
   * @param {string} [drugFilter]
   */
  filterPrescriptionDrugs(drugFilter?: string): void {
    this.prescriptionDrugsSelectedGroup = drugFilter || '';
  }

  /**
   * Get is group belongs prescription drugs treatment
   * @param {string} groupType
   * @param {string} filterName
   */
  isPrescriptionDrugsGroup(groupType: TreatmentType, filterName?: string): boolean {
    const result = groupType === 'Prescription Drugs';
    return filterName
      ? result && (this.prescriptionDrugsSelectedGroup.length ? this.prescriptionDrugsSelectedGroup === filterName : true)
      : result;
  }

  /**
   * Returns style of prescription drugs filter buttons
   * @param {string} [drugFilter]
   */
  prescriptionDrugsFilterBtnStyle(drugFilter?: string): string {
    if (drugFilter) {
      return drugFilter === this.prescriptionDrugsSelectedGroup ? 'prescriptionDrugsBtnActive' : 'prescriptionDrugsBtnInactive';
    }
    return this.prescriptionDrugsSelectedGroup.length ? 'prescriptionDrugsBtnInactive' : 'prescriptionDrugsBtnActive';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.treatmentsPagination = event.target.innerWidth >= 1600 ? this.treatmentsPerScreenSize.desktop : this.treatmentsPerScreenSize.tablet;
    this.treatmentsListLimit = this.treatmentsPagination;
  }

  showMoreTreatments() {
    const treatmentsListRestLength = this.viewModelTreatments.slice(this.treatmentsPagination).length;
    this.treatmentsListLimit = this.treatmentsPagination + treatmentsListRestLength;
  }

  showLessTreatments() {
    this.treatmentsListLimit = this.treatmentsPagination;
  }

  getNotTiedTreatments(group): boolean {
    return !nonTreatmentTypes.includes(group.type);
  }

  disableButton() {
    this.validationErrorLog = [];
    let drugsArray = [];
    this.selectedTreatments
      .filter(item => item.type.includes('Drugs'))
      .forEach(item => drugsArray = drugsArray.concat(item.details.filter(detail => detail.isSelected)));
    const selectedDrugsInformation = this.drugInformation.filter(item => drugsArray.find(drug => item.drugName.toLowerCase() === drug.name.toLowerCase()));

    console.groupCollapsed('TreatmentComponent.viewModelTreatments drug treatments');
    console.dir(drugsArray);
    console.groupEnd();

    console.groupCollapsed('TreatmentComponent.viewModelTreatments selected drugs DrugInformation');
    console.dir(selectedDrugsInformation);
    console.groupEnd();

    const drugsViable = selectedDrugsInformation.map(drug => this.drugUnviable(drug)).filter(y => y).length === 0;
    const dischargeInfoInvalid = this.treatmentsService.dischargeSelected && this.isInvalidDischargeForm;
    const RTWSInfo = this.treatmentsService.selectSnapshot().returnToWorkSchool;
    const RTWSInfoInvalid = this.treatmentsService.RTWSSelected &&
      ((RTWSInfo.returnTo === 'WORK' && ((RTWSInfo.rtwRestrictionType === 'Restricted' && !RTWSInfo.rtwRestrictions) || (RTWSInfo.rtwWasIll && !RTWSInfo.rtwSeenFor)))
        || (((RTWSInfo.rtsDays === RTSDaysEnum.Other || RTWSInfo.rtwRestrictionType === 'DateRange') && ((!RTWSInfo.rtswStop || !RTWSInfo.rtswStart) || new Date(RTWSInfo.rtswStart) >= new Date(RTWSInfo.rtswStop)))));

    if (!selectedDrugsInformation.length && this.isPharmacistUserRole()) {
      this.finalizeDisabled = true;
      this.notificationsService.error('None drugs selected.');
      return;
    }

    if ((!selectedDrugsInformation.length && !dischargeInfoInvalid && !RTWSInfoInvalid)) {
      this.finalizeDisabled = false;
    } else {
      this.finalizeDisabled = !drugsViable || dischargeInfoInvalid || RTWSInfoInvalid;
      this.filterPrescriptionDrugs();
    }
  }

  // public saveTreatments(): Observable<any> {
  //   return this.treatmentsService.saveTreatments(this.patient.visitInformation.sessionId, this.prepareTreatmentsToSave).pipe(catchError(error => {
  //     console.error(error);
  //     this.notificationsService.warning('Treatments changes failed to save.');
  //     return of(null);
  //   }), map(result => true));
  // }

  public saveTreatments(): Observable<any> {
    return this.treatmentsService.saveTreatments(this.patient.visitInformation.sessionId, this.newTreatmentService.prepareTreatmentsForSaving).pipe(catchError(error => {
      console.error(error);
      this.notificationsService.warning('Treatments changes failed to save.');
      return of(null);
    }), map(result => true));
  }

  public prescriptionDrugsGroupFilter(groupName: string): boolean {
    if (this.prescriptionDrugsSelectedGroup === '') return true;
    return groupName === this.prescriptionDrugsSelectedGroup;
  }

  public toggleGroup(type: TreatmentType, state: boolean): void {
    if (R.isNil(state)) return;
    this.treatmentsService.dispatch(new ToggleGroupEvent(type, !state));
  }

  public updateDrugInformation(): void {
    this.drugInformation$.pipe(rxjsFirst()).subscribe(drugInformation => {
      const editedInformation = this.drugTreatments.map(item => item.drug);
      this.treatmentsService.dispatch(new UpdateDrugInformationEvent(drugInformation.map(drug => {
        const editedDrug = editedInformation.find(item => item.drugName === drug.drugName && item.description === drug.description);
        return editedDrug || drug;
      })));
    });
  }

  public get diagnosticEngine(): DiagnosticEngine[] {
    return this.store.selectSnapshot(DiagnosisAccordionState.diagnosticEngine);
  }

  public get selectedIllnessesCodes(): { illnesses: string[], primary: string, primaryName: string } {
    const primary = this.diagnosticEngine.find(item => item.isPrimary);
    return { illnesses: this.diagnosticEngine.filter(item => item.isSelected).map(item => item.icd10), primary: primary.icd10, primaryName: primary.icdName };
  }

  private get conflictInformation(): DrugConflictInformation {
    return this.treatmentsService.selectSnapshot().drugConflictInformation;
  }

  private getTreatmentIllnesses(treatmentType: TreatmentType, treatmentName: string): PpSelectTreatmentsListItem[] {
    return this.diagnosticEngine.filter(item => item.isSelected).map(illness => {
      const selectedIllness: PpSelectTreatmentsListItem = {
        icdCode: illness.icd10,
        icdName: illness.icdName,
        sources: []
      };
      const diagnosisTreatments = this.treatmentsService.selectSnapshot().patientTreatments.find(item => item.icdCode === illness.icd10);
      if (diagnosisTreatments) {
        const treatment = diagnosisTreatments.treatments.find(item => item.type === treatmentType);
        if (treatment && treatment.details) {
          const detail = treatment.details.find(item => item.name === treatmentName);
          if (detail && detail.sources) {
            const sources: string[] = [];
            detail.sources.forEach(sourceArray => sourceArray.filter(source => !!source && !source.includes('no ')).forEach(source => sources.push(source)));
            selectedIllness.sources = sources;
          }
        }
      }
      return selectedIllness;
    });
  }

  public dischargeUpdate(dischargeInfo: { discharge: PVDischarge, invalid: boolean }): void {
    this.treatmentsService.dispatch(new DischargeUpdate(dischargeInfo.discharge));
    this.isInvalidDischargeForm = dischargeInfo.invalid;
  }

  public get dischargeInstruction$(): Observable<{ dischargeInstructions: DischargeInstruction[], customInstructions: string }> {
    return this.treatmentsService.observe(state => ({customInstructions: state.customInstructions, dischargeInstructions: state.dischargeInstructions}));
  }

  public dischargeInstructionsUpdate(documentType: 'customInstructions' | 'dischargeInstructions', payload: string | DischargeInstruction[]): void {
    this.treatmentsService.dispatch(new DischargeInstructionsUpdate(documentType, payload))
      .then(() => {
        if (documentType === 'customInstructions')
          this.notificationsService.success('Successfully saved');
      }
    );
  }

  public get RTSWData$(): Observable<ReturnToSchoolWork> {
    return this.treatmentsService.observe(state => state.returnToWorkSchool);
  }

  public RTWSUpdate(data: Partial<ReturnToSchoolWork>, reset?: boolean): void {
    if (this.viewOnly) return;
    if (reset) data = { ...initialTreatments.returnToWorkSchool, ...data };
    this.treatmentsService.dispatch(new RTWSUpdate(data));
  }

  public get additionalDischargeEnabled(): boolean {
    return this.stateService.app.developmentBar.additionalDischargeEnabled();
  }

  trackByIndex(index, item) {
    return index;
  }

  trackByName(index, item) {
    return item.name || item.drugName;
  }

  trackByGroupType(index, item: Treatment) {
    return item.type;
  }

  public get isFastmed(): boolean {
    return this.userService.getIsFastmedBusiness;
  }

  public get socialCard$(): Observable<SocialCard> {
    return this.patientDataService.socialCard$;
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      previous: !this.isClerkOrOMUserRole(),
      finalize: Boolean(!this.viewOnly && this.patient)
    };
  }

  getDisabledBottomButtons(): StateBottomButtons {
    return {
      previous: false,
      finalize: this.finalizeDisabled,
    };
  }

  get protocolRelatedPatientInfo(): Observable<{ gender: GenderEnum; weight: number }> {
    return this.socialCard$.pipe(filter(socialCard => !!socialCard), map(socialCard => ({ gender: socialCard.gender as GenderEnum, weight: +socialCard.patientWeight })));
  }

  onClickBottomButton(nameButton: string): void {
    switch (nameButton) {
      case 'previous': {
        this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
        this.navigationService.navigate([
          'patients',
          this.patient.patientInformation.patientId,
          'diagnosis'
        ]);
        break;
      }

      case 'finalize': {
        this.disableButton();
        if (this.finalizeDisabled) {

          console.groupCollapsed(`%cInvalid Drugs List (Selected drugs count: ${this.validationErrorLog.length}):`, 'color:#f00');
          this.validationErrorLog.filter(item => item.invalid).forEach(item => {
            console.groupCollapsed(item.drug.drugName);
            console.groupCollapsed('Drug Info');
            console.log(JSON.stringify(item.drug, null, 2));
            console.groupEnd();

            console.groupCollapsed('Validation Errors');
            Object.keys(item).forEach(key => {
              if (key === 'invalid' || key === 'drug') return;
              if (item[key] !== 'valid') {
                console.log(`%c${item[key]}`, 'color:#f00');
              }
            });
            console.groupEnd();
            console.groupEnd();
          });
          console.groupEnd();

        } else {
          this.finalize();

        }
        break;
      }
    }
  }
}
