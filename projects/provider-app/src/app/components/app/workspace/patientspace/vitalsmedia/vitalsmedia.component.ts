import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Select, Store } from '@ngxs/store';
import * as R from 'ramda';
import { Observable, Subscription } from 'rxjs';

import { pagesTitles } from 'static/static.pages';
import { Data, PhysicalExam } from 'common/models/data.model';
import { DataService } from 'services/data.service';
import { StateService } from 'services/state.service';
import { Utils } from 'utils/utils';
import {
  audits as defaultAudits,
  AuditsDat,
  mediaCollapsed,
  mediaDefault,
  specificMediaReviewed
} from 'static/static.vitals';
import { PhysicalFindingsService } from '../../../../../physical-exam/physical-findings.service';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';
import { ContinueButton } from '../continue-button/continue-button';
import { PhysicalExamPanelState } from '../stores/physical-exam-panel/physical-exam-panel.state';
import { filter, first, mergeMap } from 'rxjs/operators';
import { MediaModel } from 'common/models/media.model';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '../../../../notifications/notifications.service';
import { NavigationService, SymptomsService } from '../../../../../services';
import { PESystem } from '../../../../../common/interfaces/physical-exam-panel.interfaces';
import { ClearEmpty, SwitchSystemNormalStatus } from '../stores/physical-exam-panel/physical-exam-panel.actions';
import {
  NavigationType,
  PhysicalExamMediaCollapsed,
  PhysicalExamsType
} from '../../../../../common/types/physical-exams.type';
import { BodyPartsEnum } from '../../../../../common/enums';
import { MediaSectionComponent } from '../../../../shared/media-section/media-section.component';
import { UserService } from 'user/user.service';
import { FindingsEditableCardComponent } from '../../../../../physical-exam/findings-editable-card/findings-editable-card.component';
import { SplitToBodyPartsPipe } from '../../../../../physical-exam/split-to-body-parts.pipe';
import { CustomSubSystem, indexesForSubSystems } from '../../../../../physical-exam/physical-exams.constants';
import { MeasurementsMediaService } from 'services/measurements-media.service';
import { PatientdataService } from '../../../../../services/patientdata.service';
import {InitAccordion} from '../stores/diagnosis-accordion/diagnosis-accordion.actions';
import {TreatmentsService} from '../../../../../treatments/treatments.service';

@Component({
  selector: 'pa-vitalsmedia',
  templateUrl: './vitalsmedia.component.html',
  styleUrls: ['./vitalsmedia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VitalsmediaComponent extends ContinueButton implements OnDestroy, BottomButtonsControl, OnInit, AfterViewInit {
  public readonly title = pagesTitles.physicalExam;
  public viewOnly: boolean;
  public userRole: string;
  public Patient: Data;

  private subs: Subscription[] = [];

  // TODO: move all this initial structs to a separate file
  public media = R.clone(mediaDefault);
  public specificMediaReviewed = R.clone(specificMediaReviewed);
  public audits: AuditsDat = R.clone(defaultAudits);
  public membraneExamError = {
    rightFilled: false,
    rightSelected: false,
    leftFilled: false,
    leftSelected: false,
  };

  isTelemedPIC: boolean;

  private rawExams: PhysicalExam[] = [null];
  @Select(PhysicalExamPanelState.viewModelExams) physicalExamResultViewModel$: Observable<PhysicalExam[]>;
  @Select(PhysicalExamPanelState.systems) system$: Observable<PESystem[]>;
  @Select(PhysicalExamPanelState.exams) physicalExamResult$: Observable<PESystem[]>;
  @Select(PhysicalExamPanelState.navigation) PENavigationTree$: Observable<NavigationType>;
  public mediaCollapsed: PhysicalExamMediaCollapsed = R.clone(mediaCollapsed);

  @ViewChildren('mediaSection') mediaSections: QueryList<MediaSectionComponent>;
  @ViewChildren(FindingsEditableCardComponent) findingsEditable: QueryList<FindingsEditableCardComponent>;

  public showFindingsPanel: PhysicalExamMediaCollapsed = R.clone(mediaCollapsed);

  get isMembraneError(): boolean {
    return (!this.membraneExamError.rightFilled && this.membraneExamError.rightSelected)
      || (!this.membraneExamError.leftFilled && this.membraneExamError.leftSelected);
  }

  constructor(
    private dataService: DataService,
    private stateService: StateService,
    protected userService: UserService,
    private titleService: Title,
    private changeDetector: ChangeDetectorRef,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationsService,
    private navigationService: NavigationService,
    private bodyPartsPipe: SplitToBodyPartsPipe,
    private measurementsMediaService: MeasurementsMediaService,
    private physicalFindingsService: PhysicalFindingsService,
    private patientDataService: PatientdataService,
    private symptomsService: SymptomsService,
    private treatmentsService: TreatmentsService,
  ) {
    super(userService);

    this.titleService.setTitle(this.title);
    this.stateService.app.header.setData(this.title);
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    this.userRole = this.userService.getUserRole;

    /*
      TODO: update getVitals and move all search stuff to a separate service
      and implement one and only interface for patient media and audits
      (vital values and photos, body parts audits and photos)
    */
    this.subs.push(this.dataService.getPatient().subscribe(patient => {
      if (!patient) return;
      this.Patient = patient;
      if (patient.mediaReviewed) Object.assign(this.specificMediaReviewed, patient.mediaReviewed);
    }));

    const mediaModel: MediaModel = this.activatedRoute.snapshot.data.media;
    this.media = mediaModel.media;
    this.audits = mediaModel.audits;
  }

  ngOnInit() {
    this.physicalExamResultViewModel$.pipe(first(exams => !!exams)).subscribe(exams => {
      this.rawExams = Utils.clone(exams);
    });
    this.Patient.mediaReviewed.Edited = true;
    if (this.isAllReviewed) {
      this.stateService.patient.setExamReviewed(true);
    }
    this.subs.push(this.physicalExamResultViewModel$.pipe(filter(exams => !!exams)).subscribe((exams: PhysicalExam[]) => {
      this.Patient.additionalInformation.physicalExam = exams;
      this.dataService.updatePatient(this.Patient);
    }));
    this.subs.push(this.measurementsMediaService.getMeasurements().subscribe(measurements => {
      const {specificMedia, mediaArray} = this.measurementsMediaService.getMedia(measurements);
      const mediaModel = new MediaModel(mediaArray, this.audits, specificMedia);
      this.media = mediaModel.media;
      this.changeDetector.detectChanges();
    }));
    this.subs.push(this.patientDataService.isPICTelemedicinePatient().subscribe(value => this.isTelemedPIC = value));
    this.checkForMembraneError();
  }

  ngAfterViewInit(): void {
    const fragment = this.activatedRoute.snapshot.fragment;
    if (!fragment) return;
    const id = BodyPartsEnum[fragment];
    setTimeout(() => this.mediaSections.find(item => item.type === id).openTabForReview());
  }

  private hasAnyMediaData(type: string) {
    let sectionData = [];
    switch (type) {
      case 'Cardiovascular': sectionData = [this.media.heart]; break;
      case 'Respiratory': sectionData = [this.media.lungs]; break;
      case 'GI': sectionData = [this.media.abdomen]; break;
      case 'ENT': sectionData = [this.media.ears[0], this.media.ears[1], this.media.mouth[0], this.media.nose[0], this.media.nose[1]]; break;
      case 'Skin': sectionData = [this.media.skin[0]]; break;
    }
    return this.hasMediaData(sectionData);
  }

  private hasMediaData(section) {
    let data = false;
    section.forEach(item => {
      if (
        (!R.isNil(item.data) && !R.isEmpty(item.data))
        || (item.video && item.video.length)
        || Object.keys(item).some(key => !R.isNil(item[key].data) && !R.isEmpty(item[key].data.raw))
      ) {
        data = true;
      }
    });
    return data;
  }

  public isAbnormal(system: PESystem): boolean {
    return system.descriptionsArray.some(item => !R.isNil(item.normal) && !item.normal);
  }

  public isNormal(system: PESystem): boolean {
    const defaultNormalSubsystems = system.descriptionsArray.filter(item => item.defaultNormal);
    const selectedSubsystems = system.descriptionsArray.filter(item => item.selected);
    const everySelectedIsNormal = selectedSubsystems.length && selectedSubsystems.every(item => item.normal);
    const everyDefaultNormalIsSelected = defaultNormalSubsystems
      .every(defaultNormal => selectedSubsystems.some(item => item.description === defaultNormal.description));
    return everySelectedIsNormal && everyDefaultNormalIsSelected;
  }

  checkForMembraneError(): void {
    this.subs.push(this.system$.subscribe(system => {
      const entPanel = system.find(exam => exam.examName === 'ENT');
      if (entPanel && entPanel.descriptionsArray && !this.isTelemedPIC) {
        const membraneExam = entPanel.descriptionsArray.find(subSystem => subSystem.description === CustomSubSystem.TMDescription);
        const selectedFindings = membraneExam.mod.filter(finding => finding.selected);
        this.membraneExamError.leftFilled = selectedFindings.some(finding => finding.relatedBodyPart.includes('left'));
        this.membraneExamError.rightFilled = selectedFindings.some(finding => finding.relatedBodyPart.includes('right'));
      } else {
        this.membraneExamError.leftFilled = true;
        this.membraneExamError.rightFilled = true;
      }
    }));
    this.subs.push(this.PENavigationTree$.subscribe(navigation => {
      const entSelectedSub = navigation['ENT'];
      this.membraneExamError.leftSelected = Boolean(entSelectedSub[0] && entSelectedSub[0] === indexesForSubSystems[CustomSubSystem.TMDescription]);
      this.membraneExamError.rightSelected = Boolean(entSelectedSub[1] && entSelectedSub[1] === indexesForSubSystems[CustomSubSystem.TMDescription]);
    }));
  }

  setReviewed(name: string) {
    const rObj = this.Patient.mediaReviewed || {};
    rObj[name] = true;
    let allReviewed = true;
    for (const exam in rObj) {
      if (!rObj[exam]) allReviewed = false;
    }
    if (allReviewed) this.stateService.patient.setExamReviewed(true);
    this.dataService.updatePatient({ mediaReviewed: rObj });
    this.changeDetector.detectChanges();
  }

  findExamResult(name) {
    const hasExamData = this.Patient && this.Patient.additionalInformation;
    return hasExamData ? this.Patient.additionalInformation.physicalExam.find(existingExamResult => existingExamResult.examName === name) : null;
  }

  closeAllExamBars(): void {
    Object.keys(this.mediaCollapsed).forEach(examName => {
      const examTab = this.mediaSections.find(item => item.type === examName);
      if (examTab) {
        this.mediaCollapsed[examName] = true;
        examTab.closeTab();
      }
    });
  }

  /**
   * physicalExams saving
   */
  savePhysicalExam(): void {
    if (this.viewOnly || this.userRole !== 'practitioner') return;
    if (!this.isAllReviewed) {
      this.notificationService.info('Your changes are not saved. You need to review all media to save it', 'Not saved');
      return;
    }

    if (this.isMembraneError) {
      this.notificationService.error('Please select the item for Membrane Description', 'Not saved');
      return;
    }

    this.rawExams = this.rawExams.filter(item => !R.isNil(item));
    this.physicalExamResultViewModel$.pipe(first(), mergeMap(physicalExams => {
      this.rawExams = Utils.clone(physicalExams);
      return this.physicalFindingsService.savePEChanges(physicalExams);
    })).subscribe(() => {
      this.rerunTriage();
    });
  }


  getShownBottomButtons(): StateBottomButtons {
    return {
      previous: this.isPractitionerUserRole(),
      ...this.getShownContinueButton()
    };
  }

  rerunTriage(): void {
    const patient = this.dataService.getPatientLastValue();
    const patientId = patient.patientInformation.patientId;

    let rerunHpi = false;
    const rerunRos = false;


    // Need to extract the symptoms from this.rawExams
    const updatedSymptoms = this.physicalFindingsService.physicalExamToSymptoms(this.rawExams);

    this.dataService.rerunTriage(updatedSymptoms, patientId, rerunHpi, rerunRos).subscribe((response) => {
      this.store.dispatch(new InitAccordion(response.diagnosticEngine, patient.illnessInformation, response.triage)).subscribe(() => {
        this.treatmentsService.restoreTreatments(patient, this.patientDataService.getPatientIllness().illness, this.patientDataService.getPatientIllness().primary);
      });
    });
  }

  onClickBottomButton(nameButton: string): void {
    this.savePhysicalExam();
    if (nameButton === 'continue') {
      if (this.isAllReviewed)
        this.stateService.app.setWorkingDiagnosisView('illnesstable');
    }
    if (nameButton === 'previous') {
      this.stateService.app.setWorkingDiagnosisView('contributortable');
    }
    this.navigationService.navigate([
      'patients',
      this.stateService.patient.getCurrentId(),
      'diagnosis'
    ]);
  }

  private get isAllReviewed(): boolean {
    const rObj = this.Patient.mediaReviewed || {};
    let allReviewed = true;
    for (const exam in rObj) {
      if (!rObj[exam]) allReviewed = false;
    }

    return allReviewed;
  }

  public changeExamType(examType: string) {
    this.patientDataService.refreshPhysicalExam(examType);
  }

  public onSystemButtonClick(system: PESystem, clickOnNormalButton: boolean): void {
    if (clickOnNormalButton) {
      if (this.mediaCollapsed[system.examName]) this.toggleMediaSection(system.examName);
      setTimeout(() => this.store.dispatch(new SwitchSystemNormalStatus(system.examName, !this.isNormal(system))).subscribe(() => {
        this.store.dispatch(new ClearEmpty());
      }));
    } else {
      this.toggleMediaSection(system.examName);
    }
  }

  public toggleMediaSection(examName: PhysicalExamsType): void {
    this.mediaCollapsed[examName] = !this.mediaCollapsed[examName];
    this.mediaSections.find(item => item.type === examName).openTabForReview();
  }


  public getSystem(examName: string, systems: PESystem[], bodyPartIndex?: number): PESystem {
    const system = systems.find(item => item.examName === examName);
    if (R.isNil(bodyPartIndex) || R.isNil(system)) return system;
    return this.bodyPartsPipe.transform(system)[bodyPartIndex];
  }

  identify(index, item) {
    return index;
  }

  ngOnDestroy() {
    for (const sub of this.subs) sub.unsubscribe();
  }
}
