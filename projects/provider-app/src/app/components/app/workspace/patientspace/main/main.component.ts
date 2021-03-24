import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


import { StateService } from 'services/state.service';
import { DataService } from 'services/data.service';
import { DialogService } from 'services/app/dialog.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { UserService } from 'user/user.service';

import { Data } from 'common/models/data.model';
import {
  Contributor,
  DDXRequest,
  DiagnosisAccordionGroup,
  DiagnosticEngine,
  IllnessesPOSTRequest,
  SelectedIllness
} from 'common/interfaces/diagnostic-engine.interface';
import { pagesTitles } from 'static/static.pages';
import { IllnessPresentationTypesEnum } from 'common/enums/illness-presentation-types.enum';
import { ChecklistEnum } from 'common/enums/checklist.enum';

import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';

import { Utils } from 'utils/utils';
import { Helpers } from 'utils/helpers';
import { PpselectComponent } from 'components/shared/popups/ppselect/ppselect.component';
import { NavigationService } from 'services/navigation.service';
import { PatientdataService, SymptomsService } from 'services';
import { PpPeMediaComponent } from '../../../../../physical-exam/pp-pe-media/pp-pe-media.component';
import { PpreviewComponent } from '../../../../shared/popups/ppreview/ppreview.component';
import { DiagnosisTabsEnum } from 'common/enums/tabs.enum';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';
import { ContinueButton } from '../continue-button/continue-button';
import { audioParts, imagesParts, mediaDefault, partNames, specificMediaAvailable } from 'static/static.vitals';
import { HistoryTypesEnums } from 'common/enums';
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';
import {
  filter,
  finalize,
  last,
  map,
  pairwise,
  take,
  takeUntil,
  tap
} from 'rxjs/operators';

import * as R from 'ramda';
import { EditableTextComponent } from '../../../../shared/editable-text/editable-text.component';
import { MediaModel } from '../../../../../common/models/media.model';
import { Select, Store } from '@ngxs/store';
import { DiagnosisAccordionState } from '../stores/diagnosis-accordion/diagnosis-accordion.state';
import {
  AddIllness,
  RenameIllness,
  SelectPrimary,
  SelectWorkupPlanned,
  ToggleGroup,
  ToggleSelection
} from '../stores/diagnosis-accordion/diagnosis-accordion.actions';
import { ICD10Link } from '../../../../../static/network';
import { HpiSummaryComponent } from 'components/shared/hpi-summary/hpi-summary.component';
import { DDX } from 'common/models/additional-doctor-notes.interface';
import { compose, not } from 'ramda';

type OrderDirection = 'asc' | 'desc';

@Component({
  selector: 'pa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('0ms')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent extends ContinueButton implements OnInit, OnDestroy, BottomButtonsControl {
  @ViewChild('definedTable') definedTable: MatTable<any>;
  @ViewChild(EditableTextComponent) editableText: EditableTextComponent;
  @ViewChild(HpiSummaryComponent) hpiSummary: HpiSummaryComponent;
  @Output() changeTab = new EventEmitter();
  @Output() navigateToTreatments = new EventEmitter<null>();

  public readonly title = pagesTitles.main;

  public Patient: Data;
  public layoutSize;
  public DiagnosisAccordion: DiagnosisAccordionGroup[] = [];
  public definedCodes: string[] = [];
  public definedICDs: DiagnosticEngine[] = [];
  public selectedIllness: SelectedIllness[] = [];
  public reviewed = false;
  public confirmed = false;
  public examReviewed = false;
  public topIllnessQuantity = 5;
  public helpers = Helpers;
  public viewOnly: boolean;
  public illnessPresentationEnum: typeof IllnessPresentationTypesEnum =  IllnessPresentationTypesEnum;
  public illnessPresentation  = IllnessPresentationTypesEnum[this.userService.getUserData.environment.illness_presentation];
  public selection = new SelectionModel(false, []);
  public isPrimary = false;
  private _edited = new BehaviorSubject<boolean>(false);
  private _rerunTETrigger = new BehaviorSubject<boolean>(false);

  public media = R.clone(mediaDefault);
  public specificMediaAvailable = R.clone(specificMediaAvailable);
  public imagesParts = imagesParts;
  public audioParts = audioParts;
  public images = [];
  public audio = [];
  public mediaModel: MediaModel;

  public historyCardSections = {
    personalHistory: {
      name: 'Personal History',
      data: [],
      list: [],
      showPersonalHistory: true
    },
    drugAllergies: {
      name: 'Drug Allergies',
      data: []
    }
  };
  public symptomCategories = [];
  public pharmacistSymptomsList = [];

  public checklist = [
    { key: ChecklistEnum.SYMPTOMS, title: 'General Symptoms', reviewed: false, visible: true },
    { key: ChecklistEnum.PHYSICAL_EXAMS, title: 'Physical Exam / Media', reviewed: false, visible: false }
  ];

  public expandedElements: {[key: string]: boolean} = {};
  public currentSort: {key: IllnessPresentationTypesEnum; direction: OrderDirection};
  private subs = [];
  private isIllnessTable = false;
  private ddxRequest: DDXRequest[] = [];

  private stdDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '520px',
    minHeight: '180px',
    maxHeight: '80%',
    width: '55%'
  };

  private addDiagnosisConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    minHeight: '380px',
    height: '70vh',
    width: '75%'
  };
  private scrollElement: Element;

  @Select(DiagnosisAccordionState.diagnosisAccordion) storeAccordion: Observable<DiagnosisAccordionGroup[]>;
  @Select(DiagnosisAccordionState.definedICDList) storeDefinedICDs: Observable<DiagnosticEngine[]>;
  @Select(DiagnosisAccordionState.selectedIllnesses) storeSelectedIllnesses: Observable<SelectedIllness[]>;
  @Select(DiagnosisAccordionState.expandedElements) storeExpandedElements: Observable<{[key: string]: boolean}>;
  @Select(DiagnosisAccordionState.diagnosticEngine) storeDiagnosticEngine: Observable<DiagnosticEngine[]>;

  public diagnosticEngine: DiagnosticEngine[] = [];
  public definedEngine$: Observable<DiagnosticEngine[]> = this.storeDiagnosticEngine.pipe(map(DE => DE.filter(item => item.icdGroup === 'Defined Illnesses')));

  public accordionGroups$: Observable<{[icdGroup: string]: DiagnosticEngine[]}>;
  public sortedGroup$: Observable<string[]>;

  public chronicGroup$: Observable<{[icdGroup: string]: DiagnosticEngine[]}>;
  public sortedChronicGroup$: Observable<string[]>;

  public otherPossibilitiesGroup$: Observable<{[icdGroup: string]: DiagnosticEngine[]}>;
  public sortedOtherPossibilitiesGroup$: Observable<string[]>;

  public groupedContributor$: Observable<{[icdGroup: string]: Contributor[]}>;
  public selectedIllnesses: Observable<DiagnosticEngine[]> = this.storeDiagnosticEngine.pipe(filter(data => !!data), map(data => data.filter(item => item.isSelected && item.icdGroup !== 'Defined Illnesses')), tap(data => this.stateService.patient.setIsPrimary(data.some(item => item.isPrimary))));
  public definedIllnesses: Observable<DiagnosticEngine[]> = this.storeDiagnosticEngine.pipe(filter(data => !!data), map(data => data.filter(item => item.icdGroup === 'Defined Illnesses')));

  public destroy$: Subject<null> = new Subject();

  get hasRefillRequests(): boolean {
    const historyItems = this.Patient.patientHealthHistory.historyItem;
    const needsRefill = historyItems.some(item => item.details && item.details.needsRefill);
    return needsRefill;
  }

  constructor (
    private stateService: StateService,
    private navigationService: NavigationService,
    private dataService: DataService,
    private symptomsService: SymptomsService,
    private activeRoute: ActivatedRoute,
    private dialogSubscribesService: DialogSubscribesService,
    public dialogService: DialogService,
    private titleService: Title,
    protected userService: UserService,
    private store: Store,
    public changesDetector: ChangeDetectorRef,
  ) {
    super(userService);
    this.currentSort = { key: this.illnessPresentation, direction: this.illnessPresentation === IllnessPresentationTypesEnum.CONFIDENCE ? 'desc' : 'asc' };
    this._edited.asObservable().pipe(takeUntil(this.destroy$), pairwise(), map(([prev, current]: boolean[]): boolean => !this.viewOnly && current || (prev && !current))).subscribe(val => this._rerunTETrigger.next(val));
  }

  getPartName(part) {
    return partNames[part];
  }

  /**
   * Show full image in Viewmedia overlay
   * @param value value of measurement
   */
  showFullImg(value, video, index) {
    const data = [];
    let dialogData;
    let actualUrl = '';
    const bodyPart = value.bodyPart;
    this.setReviewed('ENT');
    if (video) {
      value = value.video[0].value;
      if (value.fileBlob) actualUrl = value.fileBlob;
      else actualUrl = value.file;
      data.push({url: actualUrl });
      dialogData = {
        media: data,
        showButtons: false,
        video
      };
    } else {
      for (const bp of value.data) {
        if (bp.value.fileBlob) actualUrl = bp.value.fileBlob;
        else actualUrl = bp.value.file;
        const name = value.bodyPart;
        data.push({ name: name, url: actualUrl });
      }
      dialogData = {
        media: data,
        index: index,
        switch: value.audits[0],
        showButtons: !this.viewOnly
      };
    }
    this.dialogService.custom(PpPeMediaComponent, { ...dialogData, bodyPart, viewOnly: this.viewOnly }, null, 'viewmedia');
  }

  setReviewed(name: string) {
    const rObj = this.Patient.mediaReviewed || {};
    rObj[name] = true;
    let allReviewed = true;
    for (const exam in rObj) {
      if (!rObj[exam]) allReviewed = false;
    }
    if (allReviewed) {
      this.stateService.patient.setExamReviewed(true);
      this.examReviewed = true;
    }
    this.dataService.updatePatient({ mediaReviewed: rObj });
  }

  toBodyPart(name) {
    this.navigationService.navigate([
      'patients',
      this.activeRoute.parent.snapshot.params['id'],
      'vm'
    ], {fragment: name});
  }

  getPhysicalExamLink() {
    return [
      '/patients',
      this.activeRoute.parent.snapshot.params['id'],
      'vm'
    ];
  }

  ngOnInit() {
    this.accordionGroups$ = this.store.select(DiagnosisAccordionState.accordionGroups(this.topIllnessQuantity, compose(not, DiagnosisAccordionState.isChronicOrCritical)));
    this.sortedGroup$ = zip(this.store.select(DiagnosisAccordionState.accordionSortedGroupsNames(this.currentSort, compose(not, DiagnosisAccordionState.isChronicOrCritical))), this.accordionGroups$).pipe(map(([groupNames, groups]) => groupNames.filter(item => Boolean(groups[item]))));

    this.chronicGroup$ = this.store.select(DiagnosisAccordionState.accordionGroups(this.topIllnessQuantity, DiagnosisAccordionState.isChronic));
    this.sortedChronicGroup$ = zip(this.store.select(DiagnosisAccordionState.accordionSortedGroupsNames(this.currentSort, DiagnosisAccordionState.isChronic, false)), this.chronicGroup$).pipe(map(([groupNames, groups]) => groupNames.filter(item => Boolean(groups[item]))));

    this.otherPossibilitiesGroup$ = this.store.select(DiagnosisAccordionState.accordionGroups(this.topIllnessQuantity, DiagnosisAccordionState.isCritical));
    this.sortedOtherPossibilitiesGroup$ = zip(this.store.select(DiagnosisAccordionState.accordionSortedGroupsNames(this.currentSort, DiagnosisAccordionState.isCritical, false)), this.otherPossibilitiesGroup$).pipe(map(([groupNames, groups]) => groupNames.filter(item => Boolean(groups[item]))));

    this.groupedContributor$ = this.store.select(DiagnosisAccordionState.groupedContributors).pipe(map(data => R.clone(data)));

    this.subs.push(this.storeAccordion.pipe(filter(data => !R.isNil(data))).subscribe(accordion => {
      if (this.DiagnosisAccordion.length) this.edited = true;
      this.DiagnosisAccordion = accordion;
    }));

    this.subs.push(this.storeDefinedICDs.pipe(filter(data => !R.isNil(data))).subscribe(icds => {
      this.definedICDs = icds;
      this.definedCodes = icds.map(item => item.icd10);
      if (this.Patient) this.changesDetector.markForCheck();
    }));

    this.subs.push(this.storeSelectedIllnesses.pipe(filter(data => !R.isNil(data))).subscribe(illnesses => {
      this.selectedIllness = illnesses;
      if (this.Patient) this.changesDetector.markForCheck();
    }));

    this.subs.push(this.storeExpandedElements.pipe(filter(data => !R.isNil(data))).subscribe(elements => {
      this.expandedElements = R.clone(elements);
      if (this.Patient) this.changesDetector.markForCheck();
    }));

    this.subs.push(this.storeDiagnosticEngine.pipe(filter(data => !R.isNil(data))).subscribe(DE => {
      this.diagnosticEngine = DE;
      const illness = DE.filter(item => item.isSelected).map(item => item.icd10);

      this.dataService.updatePatient({
        diagnosticEngine: DE,
        illnessInformation: {
          defined_illnesses: DE.filter(item => item.icdGroup === 'Defined Illnesses' && item.isSelected).map(item => ({code: item.icd10})),
          selected_illnesses: DE.filter(item => item.isSelected && item.icdGroup !== 'Defined Illnesses').map(item => ({
            icd10_code: item.icd10,
            icd10_name: item.icdName,
            is_primary: item.isPrimary,
            workup_planned: item.workupPlanned
          })),
          is_edited_by_doctor: true,
          illness: illness,
          hasIllness: Boolean(illness.length)
        }
      });
    }));

    this.mediaModel = this.activeRoute.snapshot.data.media;
    this.stateService.app.header.setData('Working Diagnosis');
    this.scrollElement = document.getElementsByClassName('page-container')[0];
    this.layoutSize = this.stateService.app.mediaResp();

    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    this.titleService.setTitle(this.title);
    this.subs.push(this.symptomsService.getParsedSymptoms().pipe(filter(data => !!data)).subscribe(parsedSymptoms => {
      this.subs.push(this.dataService.getPatient().subscribe(patient => {
        if (patient) {
          const healthHistory = patient.patientHealthHistory;
          const historyItems = healthHistory.historyItem;
          this.historyCardSections.personalHistory.list = parsedSymptoms.filter(item => item['categoryID'] === HistoryTypesEnums.PERSONAL && item.symptomID !== HistoryTypesEnums['PREVIOUS-HISTORY']);
          this.historyCardSections.personalHistory.data = historyItems
            .filter(item => this.historyCardSections.personalHistory.list.find(listItem => listItem.symptomID === item.symptomID));
          this.historyCardSections.drugAllergies.data = historyItems.filter(item => item.symptomID === HistoryTypesEnums['MEDICATION-ALLERGIES']);
          this.symptomCategories = this.symptomsService.getSymptomCategories();
        }
        if (patient && !R.equals(this.Patient, patient)) {
          this.Patient = R.clone(patient);
          this.pharmacistSymptomsList = this.symptomsService.pharmacistSymptomsList(this.Patient.triage);
          if (this.viewOnly) {
            this.setChecklistItemReviewed(ChecklistEnum.SYMPTOMS);
            this.setChecklistItemVisibility(ChecklistEnum.PHYSICAL_EXAMS, Boolean(this.images.length || this.audio.length));
          } else {
            this.setChecklistItemVisibility(ChecklistEnum.PHYSICAL_EXAMS, !this.examReviewed);
          }
          // if (this.Patient['reviewIllness'] && this.reviewed && this.examReviewed) {
          //   if (this.Patient['reviewIllness'].action === 'select') {
          //     this.selectedIllness.push(this.Patient['reviewIllness'].icd);
          //   } else {
          //     this.removeDefined(this.Patient['reviewIllness'].icd);
          //   }
          //   delete this.Patient['reviewIllness'];
          // }
        }
      }));

      this.media = this.mediaModel.media;
      this.specificMediaAvailable = this.mediaModel.specificMedia;
      this.images = [];
      this.audio = [];
      const availableImages = this.imagesParts.filter(part => this.specificMediaAvailable[part]);
      const availableAudios = this.audioParts.filter(part => this.specificMediaAvailable[part]);
      availableImages.forEach(part => {
        this.images.push({name: part, sides: this.media[part]});
      });
      availableAudios.forEach(part => {
        this.audio.push({name: part});
      });

      this.subs.push(this.stateService.patient.getReviewed().subscribe(reviewed => {
        this.reviewed = reviewed === 'reviewed' || reviewed === 'confirmed';
        this.confirmed = reviewed === 'confirmed';
        if (this.reviewed) this.setChecklistItemReviewed(ChecklistEnum.SYMPTOMS);
      }));
      this.subs.push(this.stateService.patient.getExamReviewed().subscribe(reviewed => {
        this.examReviewed = reviewed;
        if (reviewed) this.setChecklistItemReviewed(ChecklistEnum.PHYSICAL_EXAMS);
      }));
    }));
    this.prepareDifferentialDiagnosisForRequest();
  }

  private prepareDifferentialDiagnosisForRequest(): void {
    this.subs.push(this.dataService.getDifferentialDiagnosis().subscribe((ddx: DDX) => {
      this.ddxRequest = [];
      if (ddx) {
        Object.keys(ddx).map(icdCode => this.ddxRequest.push(PatientdataService.createDDXForRequest(icdCode, ddx[icdCode])));
      }
    }));
  }

  save(saveIllness = true): Observable<any> {
    this.updateTable();
    if (this.viewOnly) return of(false);
    this.Patient.additionalInformation.definedIcdCodes = this.definedCodes;
    this.Patient.diagnosticEngine = this.diagnosticEngine;
    const payload: IllnessesPOSTRequest = {
      selected_illnesses: this.selectedIllness,
      defined_illnesses: this.definedCodes,
      is_edited_by_doctor: true,
      ddxs: this.ddxRequest.length ? this.ddxRequest : undefined
    };
    return this.dataService.saveDiagnosis(payload, this.Patient.patientInformation.patientId).pipe(finalize(() => this.edited = false));
  }

  onToggleRow(event: {icdGroupName: string, opened: boolean}) {
    this.store.dispatch(new ToggleGroup(event.icdGroupName, event.opened));
  }

  updateTable() {
    if (this.reviewed && this.Patient['illness']) {
      this.stateService.patient.setReviewed('reviewed');
    }
  }

  reviewDialog(icd?, action?) {
    const reviewType = !this.reviewed ? !this.examReviewed ? 'ReviewBoth' : 'ReviewSymptoms' : 'ReviewExams';
    this.dialogService.open<string>(PpreviewComponent, this.dialogSubscribesService.getConfig({
      type: reviewType
    },
      {
        ...this.stdDialogConfig,
      }
    )).subscribe(result => {
      if (result) {
        this.toReview(icd, action, result);
      }
    });
  }

  toReview(icd?, action?, link = 'symptoms') {
    this.navigationService.navigate([
      'patients',
      this.activeRoute.parent.snapshot.params['id'],
      link
    ]);
    if (icd) this.dataService.updatePatient({reviewIllness: {icd: icd, action: action}});
  }

  isDoctorAdded(item: DiagnosticEngine): boolean {
    return item.icdGroup === 'Doctor added';
  }

  getSelected() {
    const response = this.diagnosticEngine.filter(de => this.selectedIllness.find(item => item.icd10_code === de.icd10));
    if (!this.stateService.patient.getIsPrimary()) {
      return response.sort((a, b) => {
        const manualA = this.isDoctorAdded(a);
        const manualB = this.isDoctorAdded(b);
        return manualA === manualB ? 0 : manualA ? -1 : 1;
      });
    }
    return response.sort((a, b) => {
      const primaryA = a.isPrimary;
      const primaryB = b.isPrimary;
      return primaryA === primaryB ? 0 : primaryA ? -1 : 1;
    });
  }

  getConfidence(row) {
    return Utils.preciseRound(Number(row.confidence * 100), 1) + '%';
  }

  public confirmDiagnosis() {
    if ((!this.reviewed || !this.examReviewed) && !this.viewOnly) {
      this.reviewDialog();
      return;
    }
    if (!this.stateService.patient.getIsPrimary()) {
      const config = this.dialogSubscribesService.getConfig({
        message: `None of the selected illnesses has been set as "Primary". Please select one.`,
        isDialog: false
      }, {width: '350px'});
      this.dialogService.open(PpcustomdialogComponent, config).subscribe();
    } else {
      if (this.viewOnly) this.toTreatment();
      else this.showSelectedIllnesses();
    }
  }

  private showSelectedIllnesses(): void {
    if (this.stateService.app.ddx()) {
      this.dataService.getDifferentialDiagnosis().pipe(take(2), last()).subscribe((ddx) => {
        if (!ddx) {
          this.confirmed = true;
          this.toTreatment();
        } else this.changeTab.emit(DiagnosisTabsEnum.SELECTED_ILLNESSES);
      });
      this.save().pipe(tap(() => this.dataService.updateDifferentialDiagnosis())).subscribe();
      return;
    } else this.openConfirmDialog();
  }

  openConfirmDialog() {
    const illnessName = this.selectedIllness.map(item => item.icd10_name).concat(this.definedICDs.map(item => item.icdName));

    if (!this.confirmed && !this.viewOnly) {
      this.dialogService.open(PpcustomdialogComponent, this.dialogSubscribesService.getConfig({
          list: illnessName,
          title: 'Illness Selection',
          message: illnessName.length + (illnessName.length > 1 ? ' Illnesses Selected:' : ' Illness Selected:'),
          isDialog: true,
          diagnosisConfirm: true
        },
        {
          ...this.stdDialogConfig,
        }
      )).subscribe(result => {
        if (result) {
          this.confirmed = true;
          this.toTreatment();
        }
      });
    } else this.toTreatment();
  }

  toTreatment() {
    this.navigateToTreatments.emit();
  }

  addDiagnosisDialog() {
    if (!this.reviewed || !this.examReviewed) {
      this.reviewDialog();
      return;
    }
    this.dialogService.open(PpselectComponent, this.dialogSubscribesService.getConfig({
      type: 'diagnosis',
      name: 'Add Diagnosis',
      search: true,
      searchPlaceholder: 'Search Name, or ICD-10 Code',
      link: {name: 'ICD10 Code Tree', link: ICD10Link}
    },
      {
        ...this.addDiagnosisConfig,
      }
    )).subscribe(result => {
      if (result && result[1] && result[1]['selected'] !== undefined) {
        const illness = result[0].list[result[1]['selected']];
        this.store.dispatch(new AddIllness(illness.icd10Code, illness.name));
        this.edited = true;
        this.stateService.patient.setReviewed('reviewed');
      }
    });
  }

  toggleSelection(icd10: string): void {
    if (this.viewOnly) return;
    if (!this.reviewed || !this.examReviewed) {
      this.reviewDialog(icd10, 'remove');
      return;
    }
    this.store.dispatch(new ToggleSelection(icd10));
    this.stateService.patient.setReviewed('reviewed');
    this.edited = true;
    return;
  }

  onRename(data: string, row: DiagnosticEngine) {
    this.store.dispatch(new RenameIllness(row.icd10, data));
    this.edited = true;
    this.stateService.patient.setReviewed('reviewed');
  }

  private setChecklistItemReviewed(checklistItem: string): void {
    this.checklist.find(item => item.key === checklistItem).reviewed = true;
  }

  private setChecklistItemVisibility(checklistItem: string, visible: boolean): void {
    this.checklist.find(item => item.key === checklistItem).visible = visible;
  }

  get checkListVisible(): boolean {
    // TODO: uncomment this return statement and delete 'return false' when checklist card will be needed
    return false;
  }

  setPrimary(row: DiagnosticEngine, event) {
    event.preventDefault();
    if (this.viewOnly) return;
    if (this.reviewed && this.examReviewed) {
      const config = this.dialogSubscribesService.getConfig({ message: `Change primary to ${row.icdName}?`, isDialog: true });
      this.dialogService.open(PpcustomdialogComponent, config).subscribe(result => {
        if (result) {
          this.store.dispatch(new SelectPrimary(row.icd10));
          this.edited = true;
          this.stateService.patient.setReviewed('reviewed');
        }
      });
    } else {
      this.reviewDialog();
      return false;
    }
  }

  isChronicGroup(row): Boolean {
    return row.data.every(item => item.source === 'Chronic');
  }

  changeWDView(view): void {
    this.stateService.app.setWorkingDiagnosisView(view);
  }

  getWDView() {
    return this.stateService.app.getWorkingDiagnosisView();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.changesDetector.detach();
    this.subs.forEach(sub => sub.unsubscribe());
    if (!this.isIllnessTable) {
      this.stateService.app.setWorkingDiagnosisView('contributortable');
    }
    if ((document as any).pictureInPictureEnabled && (document as any).pictureInPictureElement) {
      (document as any).exitPictureInPicture();
    }
    this.symptomsService.setSourceInfo(null);
  }

  public get disallowConfirm(): boolean {
    return Boolean(!this.getSelected().length && !this.definedICDs.length) || this.viewOnly;
  }

  public get isIllnessTableView(): boolean {
    return this.getWDView() === 'illnesstable';
  }

  public get isContributorTableView(): boolean {
    return this.getWDView() === 'contributortable';
  }

  getDisabledBottomButtons(): StateBottomButtons {
    return {
      'continue': this.isIllnessTableView,
      'previous': this.isContributorTableView
    };
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      'previous': this.isPractitionerUserRole() || this.isPharmacistUserRole(),
      ...this.getShownContinueButton()
    };
  }

  onClickBottomButton(nameButton: string): void {
    if (nameButton === 'continue') {
      this.changeWDView('illnesstable');
    }
    if (nameButton === 'previous') {
      this.changeWDView('contributortable');
    }
    this.scrollElement.scroll(0, 0);
  }

  showAll(section: string) {
    if (section === ChecklistEnum.SYMPTOMS) {
      this.stateService.patient.setReviewed('reviewed');
      this.checklist.find(item => item.key === section).reviewed = true;
    }
  }

  getLink(link: string) {
    return [
      '/patients',
      this.activeRoute.parent.snapshot.params['id'],
      link
    ];
  }

  workupPlannedTrigger(row, value) {
    if (this.viewOnly || value === row.workupPlanned) return;
    if (this.reviewed && this.examReviewed) {
      this.store.dispatch(new SelectWorkupPlanned(row.icd10));
      this.edited = true;
      this.stateService.patient.setReviewed('reviewed');
    } else {
      this.reviewDialog();
      return;
    }
  }

  trackBySymptomName(index: number, item: any): number {
    return item.name;
  }

  public isPharmacistUserRole(): boolean {
    return super.isPharmacistUserRole();
  }

  public get edited(): boolean {
    return this._edited.getValue();
  }

  public set edited(editedState: boolean) {
    this._edited.next(editedState);
  }

  public get rerunTETrigger(): boolean {
    return this._rerunTETrigger.getValue();
  }
}
