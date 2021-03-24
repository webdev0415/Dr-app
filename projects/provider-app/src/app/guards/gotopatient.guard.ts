import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';

import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { catchError, distinctUntilChanged, take, takeWhile } from 'rxjs/operators';

import { Data} from 'common/models/data.model';
import {
  CriticalSymptomsAlertDialogTitle,
  CriticalSymptomsAlerts
} from 'components/app/workspace/patientspace/main/constants';
import { DataService } from 'services/data.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { StateService } from 'services/state.service';
import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { StorageService } from '../services/storage.service';
import { isSymptomPresenting } from 'utils/symptoms';
import { DialogService } from 'services/app/dialog.service';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { NavigationService } from 'services/navigation.service';
import { NotificationsService } from '../components/notifications/notifications.service';
import { SymptomsService } from '../services/symptoms.service';
import { UserService } from 'user/user.service';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { of } from 'rxjs';
import { PatientListService } from '../patient-list/services/patient-list.service';

@Injectable()
export class GoToPatientGuard implements CanActivate, CanLoad {
  private userRole: string;
  private patient: PatientListEntity;

  private stdDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minHeight: '250px',
    maxHeight: '80vh',
    width: '400px'
  };

  constructor(
    private stateService: StateService,
    private storageService: StorageService,
    private navigationService: NavigationService,
    private dialogSubscribesService: DialogSubscribesService,
    private dialogService: DialogService,
    private dataService: DataService,
    private patientListService: PatientListService,
    private symptomsService: SymptomsService,
    private notificationService: NotificationsService,
    private userService: UserService
  ) { }

  checkGotPatient() {
    return this.stateService.patient.getCurrent().map(patient => {
      if (Boolean(patient)) {
        return true;
      } else {
        this.navigationService.navigateToPatients();
        return false;
      }
    }).pipe(take(1));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.userRole = this.userService.getUserRole;
      const isShowns = {
        patientCompletedAlert: false,
        alerts: false
      };

      return this.stateService.patient.getCurrent().map(patient => {
        const ifPatientChosen = Boolean(patient);
        if (ifPatientChosen) {

          if (this.stateService.app.getParsedSymptomsState() !== 'success') {
            this.notificationService.error('Unable to fulfill your request. Please  try again later');
            this.symptomsService.getSymptoms();
            this.stateService.patient.getUnassignEvent().emit({
              patient: { patient_id: this.stateService.patient.getCurrentId() },
              force: true
            });
            return false;
          }

          this.patient = patient;
          const viewOnly = this.stateService.patient.getLastViewOnly();

          if (this.userService.getIsFastmedBusiness && this.isClerkOrOMUserRole && !viewOnly && !patient.room.length) {
            this.stateService.patient.getShowRoomAssignmentDialog()
              .pipe(takeWhile((showDialog: boolean) => showDialog))
              .subscribe(() => {
                this.openRoomAssignmentDialog().subscribe(result => {
                  const [resultSuccess, resultData] = result;
                  if (resultSuccess) {
                    this.patientListService.assignRoom( { session: patient.session_key, room: resultData.selectRoom })
                      .pipe(catchError(() => of()))
                      .subscribe(assigned => {
                      if (assigned) {
                        this.stateService.patient.setShowRoomAssignmentDialog(false);
                        this.notificationService.success(`Patient ${patient.patient_id} is assigned to ${resultData.selectRoom}`);
                      }
                    });
                  } else {
                      this.stateService.patient.setShowRoomAssignmentDialog(false);
                      this.navigationService.navigateToPatients().then();
                      return false;
                  }
                });
              });
          }

          if (!viewOnly && !this.isClerkOrOMUserRole) {
            this.dialogSubscribesService.openTheDisclaimerDialog(true, this.patient);
          }
          if (viewOnly && !isShowns.patientCompletedAlert) {
            this.notificationService.warning('Patient Diagnostic Data is Completed');
            isShowns.patientCompletedAlert = true;
          }
          this.userService.getIsTheDisclaimerSuccess.subscribe((isSuccess: boolean) => {
            if (isSuccess && !isShowns.alerts) {
              this.alertsForCriticalSymptoms();
              isShowns.alerts = true;
            }
          });
          return true;
        } else {
          this.navigationService.navigateToPatients();
          return false;
        }
      });
  }

  private get isClerkOrOMUserRole(): boolean {
    return this.userRole === 'office_clerk' || this.userRole === 'operations_manager';
  }

  private alertsForCriticalSymptoms(): void {
    this.dataService.getPatient().pipe(takeWhile((patient: Data | null) => patient !== null),
      distinctUntilChanged((p: Data | null, q: Data | null) => {
        return p.patientInformation.patientId === q.patientInformation.patientId;
      })
    ).subscribe((patient: Data) => {

      if (!patient) return;

      const allCriticalSymptoms = [];

      CriticalSymptomsAlerts.forEach((criticalSymptoms: any) => {
        allCriticalSymptoms.push(...criticalSymptoms['symptoms']);
      });

      const triageArray: Array<Triage> = patient.triage;

      const filteredCriticalSymptomsAlerts = triageArray.filter((triage: Triage) => {
        return isSymptomPresenting(triage) && allCriticalSymptoms.includes(triage.symptomId);
      }).map((triage: Triage) => {
        return CriticalSymptomsAlerts.find((criticalSymptoms: any) => {
          return criticalSymptoms['symptoms'].includes(triage.symptomId);
        });
      });

      const uniqueFilteredCriticalSymptomsAlerts = filteredCriticalSymptomsAlerts
        .filter((val, index, array: Array<any>) => {
          return array.indexOf(val) === index;
      });

      uniqueFilteredCriticalSymptomsAlerts.forEach((criticalSymptomAlert) => {
        this.notificationService.error(criticalSymptomAlert['message'], CriticalSymptomsAlertDialogTitle);
      });
    });
  }

  private openRoomAssignmentDialog(): Observable<any> {
    return this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
      ...this.stdDialogConfig,
      data: {
        title: 'Choose the room',
        isDialog: true,
        selectRoom: true,
        returnValue: true
      }
    }, { disableClose: true }));
  }

  canLoad(r: Route) {
    return this.checkGotPatient();
  }
}
