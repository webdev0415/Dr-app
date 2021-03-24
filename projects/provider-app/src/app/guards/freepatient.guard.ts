import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

import { PatientListEntity } from '../patient-list/interfaces/patient-list-entity.model';
import { StateService } from '../services/state.service';
import { UserService } from 'user/user.service';
import { NotificationsService } from '../components/notifications/notifications.service';
import { CriticalSymptomsAlerts } from '../components/app/workspace/patientspace/main/constants';
import { UnassignData } from '../common/interfaces/patient-data.interface';
import { SentryErrorHandler } from '../utils/sentryErrorHandler';

@Injectable()
export class FreePatientGuard implements CanActivate, CanLoad {

  constructor(private stateService: StateService,
              private userService: UserService,
              private notificationsService: NotificationsService,
              private sentryErrorHandler: SentryErrorHandler) { }

  canFreePatient(): Observable<boolean> {
    return combineLatest([this.stateService.patient.getCurrent(), this.userService.getIsTheDisclaimerSuccess])
      .map(([patient, isSuccess]: [PatientListEntity, boolean]) => {
        if (Boolean(patient)) {
          if (!this.isAllCriticalAlertsDismissed()) {
            this.notificationsService.error('You need to dismiss all critical alerts!', 'You can\'t release the patient');
            return false;
          }
          const data: UnassignData = {
            patient: patient,
            force: !isSuccess
          };
          this.stateService.patient.getUnassignEvent().emit(data);
          return typeof isSuccess === 'boolean' ? !isSuccess : false;
        }
        return true;
      }).map(result => {
        if (result) {
          this.sentryErrorHandler.eraseErrorList();
        }
        return result;
      }).pipe(take(1));
  }

  isAllCriticalAlertsDismissed() {
    const toasts = this.notificationsService.getToasts();
    return !toasts.some(toast => CriticalSymptomsAlerts.some(item => item.message === toast.message));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canFreePatient();
  }

  canLoad() {
    return this.canFreePatient();
  }
}
