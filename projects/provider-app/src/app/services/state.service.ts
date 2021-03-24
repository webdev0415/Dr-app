import { EventEmitter, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { Observable } from 'rxjs/Observable';
import { first, pluck } from 'rxjs/operators';

import { initialState, State } from './state';
import { PaymentInfo } from 'common/models/data.model';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { StorageService } from './storage.service';
import { DiagnosisTabsEnum } from '../common/enums/tabs.enum';
import { ParsedSymptomsState } from 'common/types/parsed-symptoms-state.type';
import { environment } from '../../environments/environment';
import { DevbarPanelViewType } from '../common/types/devbar-panel-view.type';


@Injectable()
export class StateService {
  private readonly state: State;

  constructor(
    private router: Router,
    private media: MediaMatcher,
    private location: Location,
    private storageService: StorageService,
  ) {
    this.state = Object.assign({}, initialState);
    this.readStorageData();

    this.state.app.mediaResp.s = this.media.matchMedia('(min-width: 576px)');
    this.state.app.mediaResp.m = this.media.matchMedia('(min-width: 768px)');
    this.state.app.mediaResp.l = this.media.matchMedia('(min-width: 992px)');
    this.state.app.mediaResp.xl = this.media.matchMedia('(min-width: 1200px)');
    this.state.app.mediaResp.xxl = this.media.matchMedia('(min-width: 1440px)');
    this.state.app.mediaResp.xxxl = this.media.matchMedia('(min-width: 1600px)');
  }

  private localStorageRead(key: string): string | null {
    let result;
    if ((result = this.storageService.local.getItem(key)) !== undefined) { return result; }
    return null;
  }

  private readStorageData() {
    const debugMode = this.localStorageRead('debug_mode');
    if (debugMode) {
      this.state.app.debug = JSON.parse(debugMode);
    } else {
      this.storageService.local.setItem('debug_mode', JSON.stringify(environment.devBar));
      this.state.app.debug = environment.devBar;
    }
  }

  view(): State { return this.state; }

  public get app() {
    return {
      sideBar: {
        toggle: (): void => {
          const notIsShown = !this.state.app.sideBar.isShown;
          this.state.app.sideBar.shownEvent.emit(notIsShown);
          this.state.app.sideBar.toggleEvent.emit(notIsShown);
        },
        isShown: (): boolean => this.state.app.sideBar.isShown,
        setShown: (value: boolean): void => {
          this.state.app.sideBar.isShown = value;
          this.state.app.sideBar.shownEvent.emit(value);
          },
        watchShown: (): Observable<boolean> => this.state.app.sideBar.shownEvent.asObservable(),
        watchToggle: (): Observable<boolean> => this.state.app.sideBar.toggleEvent.asObservable()
      },
      examPanel: {
        toggle: (): void => { this.state.app.examPanel.toggler.emit(); },
        open: (type = null): void => { this.state.app.examPanel.closer.emit(); this.state.app.examPanel.opener.emit(type); },
        close: (): void => { this.state.app.examPanel.closer.emit(); },
        getStateEv: () => this.state.app.examPanel
      },
      developmentBar: {
        toggle: (view: DevbarPanelViewType): void => { this.state.app.developmentBar.toggler.emit(view); },
        getStateEv: () => this.state.app.developmentBar,
        toggleAdditionalDischarge: (): void => { this.state.app.additionalDischarge = !this.state.app.additionalDischarge; },
        additionalDischargeEnabled: (): boolean => this.state.app.additionalDischarge
      },
      mediaResp: () => this.state.app.mediaResp,
      header: {
        setData: (data: any): void => { this.state.app.header.data.next(data); },
        getData: (): Observable<any> => this.state.app.header.data.asObservable()
      },
      workers: {
        get: (): Observable<number> => this.state.app.workers.worker.asObservable(),
        add: (): void => { this.state.app.workers.worker.next(++this.state.app.workers.wval); },
        rm: (): void => { this.state.app.workers.worker.next(this.state.app.workers.wval === 0 ? 0 : (--this.state.app.workers.wval)); },
        erase: (): void => { this.state.app.workers.worker.next(this.state.app.workers.wval = 0); },
        loading: {
          getTotal: (): Observable<number> => this.state.app.workers.loadingTotal.asObservable(),
          getLoaded: (): Observable<number> => this.state.app.workers.loadedNow.asObservable(),
          setTotal: (val: number): void => { this.state.app.workers.loadingTotal.next(val); },
          setLoaded: (val: number): void => { this.state.app.workers.loadedNow.next(val); },
          erase: (): void => { this.state.app.workers.loadedNow.next(0); this.state.app.workers.loadingTotal.next(0); },
          whatLoading: (): Observable<string> => this.state.app.workers.whatLoading.asObservable().pipe(first()),
          setWhatLoading: (what: string): void => { this.state.app.workers.whatLoading.next(what); }
        }
      },
      message: {
        get: (): Observable<string | string[] | null> => this.state.app.customUserMessage.asObservable(),
        send: (msg: string, err?: string): void => { this.state.app.customUserMessage.next(err ? [msg, err] : msg); },
        erase: (): void => { this.state.app.customUserMessage.next(null); }
      },
      pdf: {
        watchPdfEvent: (): Observable<string> => this.state.app.pdf.PDFEvent.asObservable(),
        emitPdfEvent: (link: string): void => { this.state.app.pdf.PDFEvent.next(link); },
        watchPdfClosed: (): Observable<void> => this.state.app.pdf.isPdfClosed.asObservable(),
        emitPdfClosed: (): void => {
          this.state.app.pdf.isPdfClosed.emit();
          this.state.app.pdf.isPdfOpen = false;
        },
        getIsPdfOpen: (): boolean => this.state.app.pdf.isPdfOpen,
        setIsPdfOpen: (status: boolean): void => { this.state.app.pdf.isPdfOpen = status; },
      },
      getDebug: (): boolean => this.state.app.debug,
      toggleDebug: () => {
        this.state.app.debug = !(JSON.parse(this.localStorageRead('debug_mode')));
        this.storageService.local.setItem('debug_mode', String(this.state.app.debug));
        this.state.app.debugToggleEvent.emit(this.state.app.debug);
      },
      getToggleDebugEvent: (): EventEmitter<boolean> => this.state.app.debugToggleEvent,
      dialog: {
        getDialogOpenedStatus: (): Observable<boolean> => this.state.app.dialogStatus.asObservable(),
        setDialogOpenedStatus: (status: boolean) => { this.state.app.dialogStatus.next(status); },
        // TODO: instead of returning status, return number of opened dialogs
        pushOverlayName: (name: string) => { this.state.app.overlays.push(name); },
        getLastOverlayName: (): string => this.state.app.overlays[this.state.app.overlays.length - 1],
        popOverlayName: (): string => this.state.app.overlays.pop()
      },
      getWorkingDiagnosisView: (): string => this.state.app.workingDiagnosisView.getValue(),
      setWorkingDiagnosisView: (view: string) => { this.state.app.workingDiagnosisView.next(view); },
      workingDiagnosisView: (): Observable<string> => this.state.app.workingDiagnosisView.asObservable(),
      getParsedSymptomsState: (): ParsedSymptomsState => this.state.app.parsedSymptomsState,
      setParsedSymptomsState: (state: ParsedSymptomsState) => { this.state.app.parsedSymptomsState = state; },
      ddx: (): boolean => this.state.app.ddx,
      getEhrLoggedStatus: (locationId: string): Observable<boolean> => this.state.app.ehrLoggedStatus.pipe(pluck(locationId)),
      setEhrLoggedStatus: (locationId: string) => this.state.app.ehrLoggedStatus.next({ ...this.state.app.ehrLoggedStatus.getValue(), [locationId]: true }),
    };
  }


  public get patient() {
    return {
      getAssignViewEvent: (): Observable<PatientListEntity | null> => this.state.patient.assignOrViewEvent.asObservable(),
      getUnassignEvent: (): EventEmitter<any> => this.state.patient.unassignEvent,
      assignOrView: (patient: any): void => { this.state.patient.assignOrViewEvent.next(patient); },
      setCurrent: (patient: PatientListEntity | null): void => { this.state.patient.current.next(patient); },
      getCurrent: (): Observable<PatientListEntity | null> => this.state.patient.current.asObservable(),
      getCurrentId: (): number => {
        const currentPatientValue = this.state.patient.current.getValue();
        return currentPatientValue ? currentPatientValue.patient_id : null;
      },
      erase: (): void => {
        const p = this.state.patient;
        p.current.next(null);
        p.assigned = false;
        p.showRoomAssignmentDialog.next(true);
        p.viewOnly.next(null);
        p.isConfirmDiagnosis = false;
        p.changedVitals = [];
        p.tabs.wdSubject.next(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
        p.isPrimary = false;
        p.isConfirmDiagnosis = false;
        p.visitCreationIssue = false;
      },
      editNotes: (which?: string): void => { this.state.patient.editNotesEvent.next(which ? which : ''); },
      watchEditNotesEv: (): Observable<any> => this.state.patient.editNotesEvent.asObservable(),
      setAssignment: (assign: boolean): void => { this.state.patient.assigned = assign; },
      setShowRoomAssignmentDialog: (roomAssignment: boolean): void => { this.state.patient.showRoomAssignmentDialog.next(roomAssignment); },
      getShowRoomAssignmentDialog: (): Observable<boolean> => this.state.patient.showRoomAssignmentDialog.asObservable(),
      emitPrefinalize: (treatments: string[]): void => { this.state.patient.prefinalizeEvent.next(treatments); },
      watchPrefinalize: (): Observable<any> => this.state.patient.prefinalizeEvent.asObservable(),
      emitFinalizeProcessSucceed: (success = true): void => { this.state.patient.finalizeSuccessEvent.emit(success); },
      watchFinalizeProcessSucceed: (): Observable<boolean> => this.state.patient.finalizeSuccessEvent.asObservable(),
      getReviewed: (): Observable<string> => this.state.patient.reviewed.asObservable(),
      setReviewed: (state: string): void => {
        this.state.patient.isConfirmDiagnosis = state === 'confirmed';
        this.state.patient.reviewed.next(state);
        },
      getExamReviewed: (): Observable<any> => this.state.patient.examReviewed.asObservable(),
      setExamReviewed: (state: boolean): void => { this.state.patient.examReviewed.next(state); },
      getViewOnly: (): Observable<boolean> => this.state.patient.viewOnly.asObservable(),
      setViewOnly: (VO: boolean) => { this.state.patient.viewOnly.next(VO); },
      getLastViewOnly: (): boolean => this.state.patient.viewOnly.getValue(),
      getPaymentAvailable: (): Observable<boolean> => this.state.patient.paymentAvailable.asObservable(),
      setPaymentAvailable: (status: boolean): void => { this.state.patient.paymentAvailable.next(status); },
      getPaymentInfo: (): Observable<PaymentInfo> => this.state.patient.paymentInfo.asObservable(),
      setPaymentInfo: (info: PaymentInfo): void => { this.state.patient.paymentInfo.next(info); },
      getIllnessSelected: (): Array<string> => this.state.patient.illnessSelected,
      setIllnessSelected: (selected: Array<string>): void => { this.state.patient.illnessSelected = selected; },
      getIsConfirmDiagnosis: (): boolean => this.state.patient.isConfirmDiagnosis,
      setIsConfirmDiagnosis: (status: boolean): void => { this.state.patient.isConfirmDiagnosis = status; },
      getHasIllness: (): boolean => this.state.patient.hasIllness,
      setHasIllness: (status: boolean): void => { this.state.patient.hasIllness = status; },
      setIsPrimary: (state: boolean): void => { this.state.patient.isPrimary = state; },
      getIsPrimary: (): boolean => this.state.patient.isPrimary,
      getPatientArrivedEvent: (): EventEmitter<any> => this.state.patientsList.patientArrivedEvent,
      getPatientCompletedEvent: (): EventEmitter<any> => this.state.patientsList.patientCompletedEvent,
      tabs: {
        setWorkingDiagnosis: (value: number): void => { this.state.patient.tabs.wdSubject.next(value); },
        getWorkingDiagnosis: (): number => this.state.patient.tabs.wdSubject.getValue(),
        workingDiagnosis: (): Observable<number> => this.state.patient.tabs.wdSubject.asObservable(),
        getScreenings: (): number => this.state.patient.tabs.screenings,
        setScreenings: (index: number): void => { this.state.patient.tabs.screenings = index; },
      },
      setVisitCreationIssueState: (state: boolean): void => { this.state.patient.visitCreationIssue = state; },
      getVisitCreationIssueState: (): boolean => this.state.patient.visitCreationIssue
    };
  }
}
