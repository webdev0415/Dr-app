import { AfterViewInit, Component, Inject, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/observable/of';
import { tap } from 'ramda';
import { ISubscription } from 'rxjs/Subscription';
import { TabsetComponent } from 'ng-uikit-pro-standard';
import { Select, Store } from '@ngxs/store';


import { StateService } from 'services/state.service';
import { Configuration } from 'app.config';
import { RerunTreatmentsEngineEvent } from '../../../../../treatments/store-events/rerun-treatments-engine.event';
import { TreatmentsService } from '../../../../../treatments/treatments.service';
import { pagesTitles } from 'static/static.pages';
import { MainComponent } from '../main/main.component';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';
import { DiagnosisTabsEnum } from 'common/enums/tabs.enum';
import { NotificationsService } from 'components/notifications/notifications.service';
import { ContinueButton } from '../continue-button/continue-button';
import { BehaviorSubject, iif, Observable, of } from 'rxjs';
import { catchError, concatAll, concatMap, distinctUntilChanged, finalize, map, takeUntil } from 'rxjs/operators';
import { UserService } from 'user/user.service';
import { DiagnosisAccordionState } from '../stores/diagnosis-accordion/diagnosis-accordion.state';
import { DiagnosticEngine, SelectedIllness } from 'common/interfaces/diagnostic-engine.interface';
import { DataService, NavigationService } from '../../../../../services';
import { TreatmentEngine } from '../../../../../treatments/treatments.interface';
import { MeasurementsService } from 'services/measurements.service';
import { SelectedIllnessesComponent } from '../../../../shared/selected-illnesses/selected-illnesses.component';
import { UpdatePharmacyDiagnosis } from '../stores/diagnosis-accordion/diagnosis-accordion.actions';
import { PharmacistSummaryComponent } from '../pharmacist-summary/pharmacist-summary.component';
import { DE_INFORMATION } from '../../../../../../../../pharmacist/src/lib/providers';
import { NewTreatmentsService } from 'treatments/treatments.new.service';
import { NewTreatmentGroup } from 'treatments/treatments.new.interface';

// New rerun te event

const bottomControlsData: {[key in DiagnosisTabsEnum]: keyof WorkingDiagnosisComponent} = {
  [DiagnosisTabsEnum.WORKING_DIAGNOSIS]: 'diagnosisSection',
  [DiagnosisTabsEnum.SELECTED_ILLNESSES]: 'illnessSection',
  [DiagnosisTabsEnum.PHARMACIST_SUMMARY]: 'pharmacySummarySection'
};

@Component({
  selector: 'pa-working-diagnosis',
  templateUrl: './working-diagnosis.component.html',
  styleUrls: ['./working-diagnosis.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: DE_INFORMATION, useFactory: () => new BehaviorSubject<DiagnosticEngine[]>([])}
  ]
})
export class WorkingDiagnosisComponent extends ContinueButton implements AfterViewInit, BottomButtonsControl, OnDestroy {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  @ViewChild('diagnosisSection', { static: true }) diagnosisSection: MainComponent;
  @ViewChild('pharmacySummarySection') pharmacySummarySection: PharmacistSummaryComponent;
  @ViewChild('illnessSection', {static: true}) illnessSection: SelectedIllnessesComponent;

  public readonly titles = [pagesTitles.main, pagesTitles.illnessesSelection];
  @Select(DiagnosisAccordionState.diagnosticEngine) diagnosticEngine$: Observable<DiagnosticEngine[]>;
  @Select(DiagnosisAccordionState.selectedIllnesses) selectedIllnesses$: Observable<SelectedIllness[]>;

  private tabsInit = false;
  public viewOnly: boolean;
  private subs: ISubscription[] = [];
  private invalidAlert: number;

  constructor (
    public stateService: StateService,
    protected userService: UserService,
    private titleService: Title,
    private notificationService: NotificationsService,
    private configuration: Configuration,
    public dataService: DataService,
    private navigationService: NavigationService,
    private store: Store,
    private treatmentsService: TreatmentsService,
    // -- New Treatment Service
    private newTreatmentService: NewTreatmentsService,
    private measurementsService: MeasurementsService,
    @Inject(DE_INFORMATION) private diagnosisInformation: BehaviorSubject<DiagnosticEngine[]>
  ) {
    super(userService);
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
  }

  private get getWDView(): string {
    return this.stateService.app.getWorkingDiagnosisView();
  }

  private changeWDView(view): void {
    this.stateService.app.setWorkingDiagnosisView(view);
    if (this.isIllnessTableView && this.diagnosisSection.hasRefillRequests) {
      this.notificationService.info(
        'If you\'re approving a refill, don\'t forget to add a diagnosis.',
        undefined,
        {
          ...this.configuration.notificationsConfiguration.info,
          timeOut: 10000
        }
      );
    }
  }

  private getActiveWorkingDiagnosisTab(): number {
    return this.stateService.patient.tabs.getWorkingDiagnosis();
  }

  ngAfterViewInit() {
    this.tabsInit = true;
    this.staticTabs.setActiveTab(this.stateService.patient.tabs.getWorkingDiagnosis());
    this.subs.push(this.stateService.patient.tabs.workingDiagnosis().pipe(distinctUntilChanged()).subscribe( working => {
      if (working) {
        this.changeTab(working);
      }
    }));
    this.subs.push(this.stateService.app.workingDiagnosisView().pipe(distinctUntilChanged(), takeUntil(this.diagnosisSection.destroy$)).subscribe(view => {
      this.diagnosisSection.changesDetector.detectChanges();
    }));
    this.store.select(DiagnosisAccordionState.diagnosticEngine).pipe(map(data => data.filter(item => item.icdGroup !== 'Doctor added' && item.icdGroup !== 'Defined Illnesses')), takeUntil(this.diagnosisSection.destroy$), finalize(() => this.diagnosisInformation.complete())).subscribe(data => this.diagnosisInformation.next(data));
  }

  ngOnDestroy() {
    this.subs.forEach(subs => subs.unsubscribe());
  }

  onTabSelect(event) {
    if (!event || !this.tabsInit) return;
    const activeWorkingDiagnosisTab = this.getActiveWorkingDiagnosisTab();
    switch (event.activeTabIndex) {
      case 0: {
        if (activeWorkingDiagnosisTab === DiagnosisTabsEnum.WORKING_DIAGNOSIS) break;
        document.querySelector('.page-container').scrollTo(0, 0);
        this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
        this.titleService.setTitle(this.titles[0]);
        break;
      }
      case 1:
        this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.SELECTED_ILLNESSES);
        break;
    }
  }

  private toTreatments() {
    this.navigationService.navigate([
      'patients',
      this.stateService.patient.getCurrentId(),
      'treatments'
    ]);
  }

  changeTab(index) {
    if (this.isPharmacist && DiagnosisTabsEnum.WORKING_DIAGNOSIS === index) {
      this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.PHARMACIST_SUMMARY);
      return;
    }
    this.staticTabs.setActiveTab(index);
  }

  get rerunTreatments(): boolean {
    return (this.diagnosisSection.rerunTETrigger || !this.treatmentsService.selectSnapshot().patientTreatments.length) && !this.viewOnly;
  }

  get newRerunTreatments(): boolean {
    // return (this.diagnosisSection.rerunTETrigger || !this.newTreatmentService.treatmentGroups$.getValue().length) && !this.viewOnly;
    return true;
  }

  get treatmentsTabDisabled() {
    return !this.viewOnly && (this.diagnosisSection.disallowConfirm
                              || !this.diagnosisSection.examReviewed
                              || !this.stateService.patient.getIsConfirmDiagnosis());
  }

  get isIllnessTableView(): boolean {
    return this.getWDView === 'illnesstable';
  }

  get isContributorTableView(): boolean {
    return this.getWDView === 'contributortable';
  }

  private get isSelectedIllnessesView(): boolean {
    return this.getActiveWorkingDiagnosisTab() === DiagnosisTabsEnum.SELECTED_ILLNESSES;
  }

  // ---- Adapting to the new rerun_te endpoint
  // public rerunTE(updateTreatments = false, diagnosisConfirmed = true): Observable<boolean> {
  //   // @ts-ignore
  //   const illnessesSaving: Observable<any> = this.diagnosisSection.edited ? this.diagnosisSection.save() : of(true);
  //   const rerunTE: Observable<any> = this.treatmentsService.refreshTreatment(this.diagnosisSection.Patient).pipe(finalize(() => this.diagnosisSection.edited = false), catchError(error => of({
  //     output: [],
  //     additionalInformation: this.treatmentsService.selectSnapshot().drugConflictInformation
  //   })));

  //   return illnessesSaving.pipe(
  //     tap(() => {
  //       if (diagnosisConfirmed) this.stateService.patient.setReviewed('confirmed');
  //     }),
  //     catchError(error => {
  //       const message = 'Illnesses changes failed to save.';
  //       if (updateTreatments) this.notificationService.error(message);
  //       else this.notificationService.warning(message);
  //       this.stateService.patient.setIsConfirmDiagnosis(false);
  //       this.stateService.patient.setReviewed('reviewed');
  //       this.diagnosisSection.edited = true;
  //       return of(null);
  //     }),
  //     concatMap(
  //       result => iif(
  //         () => Boolean(result) && updateTreatments && Boolean(this.userService.businessAvailableTreatments.length),
  //         rerunTE,
  //         of(true)
  //       )
  //     )
  //   ).pipe(map((response: { output: TreatmentEngine[], additionalInformation: any }) => {
  //     this.stateService.app.workers.erase();
  //     const availableTreatmentTypes = this.userService.businessAvailableTreatments;
  //     if (response.output) {
  //       response.output = response.output.map(TE => {
  //         TE.treatments = TE.treatments.filter(treatment => availableTreatmentTypes.includes(treatment.type));
  //         return TE;
  //       });
  //       response.output.forEach(group => {
  //         group.treatments.forEach(treatment => {
  //           const autoSelectedTreatments = ['Discharge Disposition', 'Return to Work/School Status'];
  //           if (!autoSelectedTreatments.includes(treatment.type)) {
  //             treatment.details = treatment.details.map(detail => {
  //               detail.isSelected = false;
  //               return detail;
  //             });
  //           }
  //         });
  //       });
  //       const illness = this.dataService.getPatientIllness();
  //       this.treatmentsService.dispatch(new RerunTreatmentsEngineEvent({
  //         treatments: response.output,
  //         additionalInformation: response.additionalInformation,
  //         illness: illness.illness,
  //         availableTreatmentTypes: this.userService.businessAvailableTreatments,
  //         primaryIllness: illness.primary
  //       })).then(() => {
  //         if (this.userService.getIsFastmedBusiness) this.treatmentsService.buildFastmedDrugInfo();
  //       });
  //     } else return !updateTreatments || response instanceof Error ? false : !availableTreatmentTypes.length;
  //     return true;
  //   }));
  // }

  public rerunTE(updateTreatments = false, diagnosisConfirmed = true): Observable<boolean> {
    // @ts-ignore
    const illnessesSaving: Observable<any> = this.diagnosisSection.edited ? this.diagnosisSection.save() : of(true);
    const rerunTE: Observable<any> = this.treatmentsService.refreshTreatment(this.diagnosisSection.Patient).pipe(finalize(() => this.diagnosisSection.edited = false), catchError(error => of({
      TreatmentGroups: [],
    })));

    return illnessesSaving.pipe(
      tap(() => {
        if (diagnosisConfirmed) this.stateService.patient.setReviewed('confirmed');
      }),
      catchError(error => {
        const message = 'Illnesses changes failed to save.';
        if (updateTreatments) this.notificationService.error(message);
        else this.notificationService.warning(message);
        this.stateService.patient.setIsConfirmDiagnosis(false);
        this.stateService.patient.setReviewed('reviewed');
        this.diagnosisSection.edited = true;
        return of(null);
      }),
      concatMap(
        result => iif(
          () => Boolean(result) && updateTreatments && Boolean(this.userService.businessAvailableTreatments.length),
          rerunTE,
          of(true)
        )
      )
    ).pipe(map((response: { TreatmentGroups: NewTreatmentGroup[] }) => {
      this.stateService.app.workers.erase();
      const availableTreatmentTypes = this.userService.businessAvailableTreatments;
      if (response.TreatmentGroups) {
        this.newTreatmentService.refreshTreatmentGroups(response.TreatmentGroups);
      } else return !updateTreatments || response instanceof Error ? false : !availableTreatmentTypes.length;
      return true;
    }));
  }

  getDisabledBottomButtons(): StateBottomButtons {
    if (this.getActiveWorkingDiagnosisTab() === DiagnosisTabsEnum.PHARMACIST_SUMMARY && this.isPharmacist && this.tabsInit) return this[bottomControlsData[this.getActiveWorkingDiagnosisTab()]].getDisabledBottomButtons();
    return {
      continue: (this.isIllnessTableView && this.diagnosisSection.disallowConfirm && !this.viewOnly) || (this.staticTabs.getActive() === 2),
      previous: this.isContributorTableView && this.getActiveWorkingDiagnosisTab() === DiagnosisTabsEnum.WORKING_DIAGNOSIS,
      editNotes: false
    };
  }

  getShownBottomButtons(): StateBottomButtons {
    if (this.getActiveWorkingDiagnosisTab() === DiagnosisTabsEnum.PHARMACIST_SUMMARY && this.isPharmacist && this.tabsInit) return this[bottomControlsData[this.getActiveWorkingDiagnosisTab()]].getShownBottomButtons();
    return {
      previous: this.isPractitionerUserRole(),
      editNotes: this.isSelectedIllnessesView,
      ...this.getShownContinueButton()
    };
  }

  getShownContinueButton(): StateBottomButtons {
    return {
      'continue': this.isPractitionerUserRole() || (this.isPharmacist && this.isContributorTableView)
    };
  }

  onClickBottomButton(nameButton: string): void {
    if (this.getActiveWorkingDiagnosisTab() === DiagnosisTabsEnum.PHARMACIST_SUMMARY) {
      this[bottomControlsData[this.getActiveWorkingDiagnosisTab()]].onClickBottomButton(nameButton);
      return;
    }

    switch (nameButton) {

      case 'continue': {
        if (this.isIllnessTableView && !this.isSelectedIllnessesView && !this.viewOnly && !this.diagnosisSection.disallowConfirm) {
          this.diagnosisSection.confirmDiagnosis();
        } else if (this.isSelectedIllnessesView || this.isIllnessTableView && this.viewOnly) {
          this.continueWithTreatments();
        } else if (!this.isIllnessTableView) {
          if (this.isPharmacist) {
            this.navigationService.navigate([
              'patients',
              this.stateService.patient.getCurrentId(),
              'order-labs'
            ]);
            break;
          }
          if (this.measurementsService.getIsVitalsChanged) this.notificationService.info('Your changes are not saved.', 'Vitals');
          this.navigationService.navigate([
            'patients',
            this.stateService.patient.getCurrentId(),
            'vm'
          ]);
        }
        break;
      }

      case 'previous': {
        switch (this.getActiveWorkingDiagnosisTab()) {
          case DiagnosisTabsEnum.WORKING_DIAGNOSIS:
            this.navigationService.navigate([
              'patients',
              this.stateService.patient.getCurrentId(),
              'vm'
            ]);
            break;
          case DiagnosisTabsEnum.SELECTED_ILLNESSES: {
            if (this.isPractitionerUserRole()) {
              this.changeTab(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
              this.changeWDView('illnesstable');
            }
            break;
          }
        }
        break;
      }

      case 'editNotes': this.stateService.patient.editNotes('diagnostic'); break;
    }
  }

  public updatePharmacyDiagnosis(diagnosis: { icd10Code: string, name: string }): void {
    this.store.dispatch(new UpdatePharmacyDiagnosis(diagnosis.icd10Code, diagnosis.name));
  }

  public exitPatientFile(force = false): void {
    if (force) {
      this.stateService.patient.getUnassignEvent().emit({force: true});
      return;
    }
    this.navigationService.navigateToPatients();
  }

  public continueWithTreatments(): void {
    if (this.newRerunTreatments) {
      this.rerunTE(true).subscribe((isSuccess: boolean) => {
        if (!isSuccess) {
          this.staticTabs.setActiveTab(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
          return;
        }
        this.diagnosisSection.edited = false;
        this.toTreatments();
      });
    } else this.toTreatments();
  }

  public get isPharmacist(): boolean {
    return this.isPharmacistUserRole();
  }
}
