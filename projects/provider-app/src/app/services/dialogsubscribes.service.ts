import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';


import { Observable, of } from 'rxjs';

import { NotesTabs } from 'common/models/data.model';
import { AdditionalDoctorNotes } from 'common/models/additional-doctor-notes.interface';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { PpdrnotesComponent } from 'components/shared/popups/ppdrnotes/ppdrnotes.component';
import { PpprefinalizeComponent } from 'components/shared/popups/ppprefinalize/ppprefinalize.component';
import { PpEhrAuthComponent } from 'components/shared/popups/pp-ehr-auth/pp-ehr-auth.component';
import { stdDialogConfig } from 'static/app.constants';
import { DataService } from './data.service';
import { StateService } from './state.service';
import { StorageService } from './storage.service';
import { DialogService } from 'services/app/dialog.service';
import { NavigationService } from './navigation.service';
import { NotificationsService } from 'components/notifications/notifications.service';
import { TheDisclaimerDialog } from '../components/app/workspace/patientspace/main/constants';
import { DiagnosisTabsEnum } from 'common/enums';
import { UserService } from '../user/user.service';
import { PpSeverityConfirmationComponent } from '../components/shared/popups/pp-severity-confirmation/pp-severity-confirmation.component';
import { OtherdataService } from './otherdata.service';
import { TreatmentsService } from '../treatments/treatments.service';
import { DocumentsService } from '../../../../provider-documents/src/lib/services/documents.service';
import { UnassignData } from '../common/interfaces/patient-data.interface';
import { PatientDataFacadeService } from '../patient-core/patient-data-facade.service';
import { UserRolesEnum } from '../common/enums/user-roles.enum';
import { SeverityConfirmationInterface } from '../components/shared/popups/pp-severity-confirmation/severity-confirmation.interface';

@Injectable()
export class DialogSubscribesService {
  private subscribes = [];
  private readonly stdDialogConfig = stdDialogConfig;

  constructor(
    private stateService: StateService,
    private navigationService: NavigationService,
    private dataService: DataService,
    private otherDataService: OtherdataService,
    private storageService: StorageService,
    private notificationService: NotificationsService,
    private userService: UserService,
    private treatmentsService: TreatmentsService,
    public dialogService: DialogService,
    private documentsService: DocumentsService,
    private patientDataService: PatientDataFacadeService
  ) { }

  subscribeDialogs() {
    this.subscribes.push(this.userService.auth.getLogoutEvent().subscribe(event => {
      if (event) {
        const config = this.getConfig({
          message: 'Are you sure you want to logout? All of your changes will be lost.',
          isDialog: true
        });
        this.dialogService.open(PpcustomdialogComponent, config).subscribe(logoutConfirmed => {
          if (logoutConfirmed) {
            this.userService.logout();
          }
          this.userService.auth.dismissLogout();
        });
      }
    }));

    this.subscribes.push(this.userService.auth.getForceLogoutEvent().subscribe(event => {
      this.userService.logout(event, true);
    }));

    this.subscribes.push(this.stateService.patient.getUnassignEvent().subscribe((data: UnassignData) => {
      if (data.force) {
        this.stateService.patient.setShowRoomAssignmentDialog(false);
        this.exitPatient(data);
        return;
      }

      const isViewOnly: boolean = this.stateService.patient.getLastViewOnly();
      const editMsg = 'Are you sure you want to unassign current patient and exit?';
      const viewMsg = 'Are you sure you want to exit to patients list?';
      const config = this.getConfig({
        message: data.customMessage ? data.customMessage : isViewOnly ? viewMsg : editMsg,
        isDialog: true
      });
      this.dialogService.open(PpcustomdialogComponent, config).subscribe((result: boolean) => {
        if (result) {
          this.exitPatient(data);
        } else this.navigationService.setExitPatientRoute('/patients');
        if (data.cb !== undefined) data.cb(result);
      });
    }));

    this.subscribes.push(this.stateService.patient.watchPrefinalize().subscribe((treatments: string[]) => {

      const config = this.getConfig({
        treatments: treatments,
        isPicBusiness: this.userService.isPICModeBusiness
      }, {
        minWidth: '40%',
        width: 'auto'
      });
      (this.userService.businessAvailableTreatments.length && !this.isPharmacistUserRole ? this.dialogService.open(PpprefinalizeComponent, config) : of(true)).subscribe(result => {
        if (result) {
          if (!this.isPharmacistUserRole) {
            this.dialogService.open(PpSeverityConfirmationComponent, config).subscribe((severity: SeverityConfirmationInterface) => {
              if (severity) {
                const patient_id = this.stateService.patient.getCurrentId();
                this.patientDataService.sendSeverity(patient_id.toString(), severity).subscribe(() => {
                  this.patientDataService.severityConfirmation = severity;
                  console.log('Criticality Updated');
                });
                this.navigateToFinalProviderNotes();
              }
            });
          } else this.navigationService.navigate(['patients', this.stateService.patient.getCurrentId(), 'docs', 'intake-form'], {queryParams: {section: 'summary', prefinalized: true}});
        }
      });
    }));

    this.subscribes.push(this.stateService.app.message.get().subscribe(message => {
      if (message) {
        this.dialogService.open(PpcustomdialogComponent, this.getConfig({ message: message })).subscribe(() => {
          this.stateService.app.message.erase();
        });
      }
    }));

    this.subscribes.push(this.stateService.patient.watchEditNotesEv().subscribe((which) => {
      const additionalFields = ['additionalDoctorNotes', 'diagnosticDoctorNotes', 'medicationInstructions', 'treatmentDoctorNotes'];
      const lastPatientValue = this.dataService.getPatientLastValue();
      const lastAdditionalInfo = lastPatientValue.additionalInformation;
      const updateAdditionalInfo: boolean = !!additionalFields.filter(field => !!lastAdditionalInfo[field]).length;
      const config = this.getConfig({
          ...lastAdditionalInfo,
          which: which
        },
        {
          width: 'auto',
          panelClass: 'top-mat-dialog-container',
          maxHeight: '80%',
        });
      this.dialogService.open(PpdrnotesComponent, config).subscribe(result => {
        if (Array.isArray(result)) {
          const additionalNotes: AdditionalDoctorNotes = {
            additionalDoctorNotes: result[NotesTabs.Other],
            treatmentDoctorNotes: result[NotesTabs.Treatment],
            diagnosticDoctorNotes: result[NotesTabs.Diagnostic],
            medicationInstructions: result[NotesTabs.MedicationInstructions],
            schoolNotes: result[NotesTabs.SchoolNotes],
            workNotes: result[NotesTabs.WorkNotes],
            therapyOrders: result[NotesTabs.TherapyOrders],
            doc2doc: result[NotesTabs.Doc2Doc]
          };
          this.dataService.saveAdditionalInfo(lastPatientValue.patientInformation.patientId, additionalNotes, updateAdditionalInfo).subscribe(response => {
            if (response) {
              if (additionalFields.every(field => field in response)) {
                this.dataService.updatePatient({
                  additionalInformation: {
                    ...lastAdditionalInfo,
                    additionalDoctorNotes: result[NotesTabs.Other],
                    treatmentDoctorNotes: result[NotesTabs.Treatment],
                    diagnosticDoctorNotes: result[NotesTabs.Diagnostic],
                    medicationInstructions: result[NotesTabs.MedicationInstructions],
                    schoolNotes: result[NotesTabs.SchoolNotes],
                    workNotes: result[NotesTabs.WorkNotes],
                    therapyOrders: result[NotesTabs.TherapyOrders],
                    doc2doc: result[NotesTabs.Doc2Doc],
                    sportsPhysical: result[NotesTabs.SportsPhysical],
                    sportsCleared: result[NotesTabs.SportsCleared]
                  }
                });
                this.notificationService.success('Provider notes successfully saved.');
              } else if (!!response.status) switch (response.status) {
                default:
                  this.notificationService.error('Additional information save failed. Please, try again later.');
              }
            }
          });
        }
      });
    }));

  }

  public openTheDisclaimerDialog(unassigned?: boolean, patient?: PatientListEntity): void {
    let unassignedEventSubscription;
    if (unassigned) {
      unassignedEventSubscription = this.stateService.patient.getUnassignEvent().subscribe((event: UnassignData) => {
        if (event) {
          const disclaimerResultSubscription = this.userService.getIsTheDisclaimerSuccess.subscribe((result: boolean) => {
            if (result === false) {
              this.dialogService.dialog.closeAll();
              disclaimerResultSubscription.unsubscribe();
            }
          });
        }
      });
    }
    const showDisclaimer = this.userService.userSettings.load()['isTheDisclaimerDialogInLocalStorage'];
    if (showDisclaimer) {
      if (unassigned) unassignedEventSubscription.unsubscribe();
      this.userService.setIsTheDisclaimerSuccess(true);
      // if (!this.dataService.getPatientLastValue()) this.showEhrAuthModal();
    }
    if (!showDisclaimer) {
      this.dialogService.open(PpcustomdialogComponent, this.getConfig({
        isWarningDialog: true,
        descriptionWarning: TheDisclaimerDialog.description,
        message: TheDisclaimerDialog.message
      }, {
        width: '550px',
        autoFocus: false,
        closeOnNavigation: true,
        disableClose: true
      })).subscribe((result: boolean) => {
        if (unassigned) unassignedEventSubscription.unsubscribe();
        this.userService.setIsTheDisclaimerSuccess(result);
        let isTheDisclaimerDialogInLocalStorage = {isTheDisclaimerDialogInLocalStorage: true};
        if (result) {
          this.userService.userSettings.set(isTheDisclaimerDialogInLocalStorage);
          // this.showEhrAuthModal();
        }
        if (!result) {
          let unassignEvent: UnassignData;
          if (unassigned) {
            unassignEvent = {
              patient: patient,
              force: true,
              cb: () => this.navigationService.navigateToPatients()
            };
          }
          isTheDisclaimerDialogInLocalStorage = {isTheDisclaimerDialogInLocalStorage: false};
          this.userService.userSettings.set(isTheDisclaimerDialogInLocalStorage);
          if (unassigned) this.stateService.patient.getUnassignEvent().emit(unassignEvent);
        }
      });
    }
  }

  getConfig(data: any, customProperties: any = null): MatDialogConfig {
    return Object.assign(new MatDialogConfig(), { ...this.stdDialogConfig, data: data, ...customProperties });
  }

  unsubscribeDialogs() {
    this.subscribes.forEach(s => s.unsubscribe());
  }

  /**
   * show alert and popup dialog informing that patient was unassigned
   * @param event
   * @param patientListEntity
   */
  public patientUnassigned(event: PatientListEntity, patientListEntity: PatientListEntity): void {
    if (patientListEntity.patient_id === event.patient_id) {
      const data: UnassignData = {
        patient: patientListEntity,
        force: true,
        doNotSendUnassignedRequest: true
      };
      this.stateService.patient.getUnassignEvent().emit(data);
    }
  }

  public showEhrAuthModal(location?: string, requiredForPatient: boolean = false): Observable<any> {
    const isPICBusiness = this.userService.isPICModeBusiness;
    const locations = this.userService.getUserData.locations;
    if (this.userService.getUserData.has_ehr_auth) {
      return this.dialogService.open<{ skipped: boolean }>(PpEhrAuthComponent, this.getConfig({}, {
        width: '350px',
        closeOnNavigation: false,
        data: { isPICBusiness, locations, location, requiredForPatient }
      }));
    }
    return of(null);
  }

  private exitPatient(data: UnassignData): void {
    const patient: PatientListEntity = data.patient;
    if (patient && data.doNotSendUnassignedRequest) {
      this.dialogService.open(PpcustomdialogComponent, this.getConfig({
        isDialog: false,
        message: `Patient ${patient.patient_name} was unassigned from you. You have been moved to the patient list.`
      }, { disableClose: true })).subscribe();
      this.cleanPatient();
      return;
    }
    if (patient) {
      this.patientDataService.unassign(patient.patient_id).subscribe(answer => {
        this.cleanPatient();
        return;
      });
    } else this.cleanPatient();
  }

  private cleanPatient(): void {
    this.stateService.app.workers.add();
    this.navigationService.clearHistory();
    this.stateService.patient.setAssignment(false);
    this.stateService.app.header.setData(null);
    this.userService.setIsTheDisclaimerSuccess(null);
    this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
    const exitPatientRoute = this.navigationService.getExitPatientRoute();
    this.navigationService.navigate(exitPatientRoute.route, exitPatientRoute.extras);
    this.stateService.app.setWorkingDiagnosisView('contributortable');
    this.stateService.patient.erase();
    this.stateService.app.workers.erase();
  }

  private get isPharmacistUserRole(): boolean {
    return this.userService.getUserRole === UserRolesEnum.PHARMACIST;
  }

  private navigateToFinalProviderNotes(): void {
    this.navigationService.navigate(['patients', this.stateService.patient.getCurrentId(), 'docs', 'practitioner'], {
      queryParams: {
        section: 'summary',
        prefinalized: true
      }
    });
  }
}
