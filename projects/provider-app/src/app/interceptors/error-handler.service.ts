import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Configuration } from 'app.config';
import { Observable, throwError } from 'rxjs';
import { DataService, NavigationService, StateService } from 'services';
import { isBackendFault, isResponseError } from 'services/network';
import { NotificationsService } from 'components/notifications/notifications.service';

import { handlerUrls, notLoggedUrls } from 'static/network';
import { forceLogoutNotifications } from '../static/static.auth';
import { SentryErrorHandler } from '../utils/sentryErrorHandler';
import { UserService } from 'user/user.service';
import { environment } from '../../environments/environment';
import { PatientListService } from '../patient-list/services/patient-list.service';


enum AccessErrorMessages {
  INVALID_OR_EXPIRED_TOKEN = 'Invalid or expired token',
  INCORRECT_SESSION_FORMAT = 'Incorrect session format',
  SESSION_EXPIRED = 'This session is expired.',
  SESSION_NOT_FOUND = 'User session not found.',
  WRONG_TOKEN_FORMAT = 'Wrong token format. Must be \'Bearer <token>\'',
  TOKEN_KEY_WRONG = 'provided token_key is wrong.',
  TOKEN_NOT_PROVIDED = 'Token not provided.',
  USER_IS_NOT_ASSIGNED = 'User is not assigned to this patient.'
}

const customThrowError = (msg: string | any[] ): Observable<never> => {
  const msgString = Array.isArray(msg) ? msg.join() : msg.toString();
  return throwError(new Error(msgString));
};


@Injectable()
export class ErrorHandlerService {

  constructor(
    private stateService: StateService,
    private cfg: Configuration,
    private errorHandler: SentryErrorHandler,
    private navigationService: NavigationService,
    private notificationService: NotificationsService,
    private dataService: DataService,
    private userService: UserService,
    private patientListService: PatientListService
  ) {
  }
  /**
   * Handle frontend errors
   * @param error ErrorEvent
   */
  private static handleFrontendError(error: ErrorEvent) {
    console.error('DoctorApp client error (PA)');
  }

  public handlerUrlsCheck(keyHandlerUrls: keyof typeof handlerUrls, url: string, exact = false): boolean {
    return exact
      ? handlerUrls[keyHandlerUrls].some(item => url.split('/').some(i => i === item))
      : handlerUrls[keyHandlerUrls].some((item: string) => url.includes(item));
  }

  public handle(error): void | Observable<never> {
    this.stateService.app.workers.erase();
    if (error.status === 403 && error.error.message && (error.error.message === AccessErrorMessages.SESSION_EXPIRED || error.error.message === AccessErrorMessages.INVALID_OR_EXPIRED_TOKEN))
      this.handleAccessError(error, true);
    else if (error.status === 400 && error.error.detail === AccessErrorMessages.USER_IS_NOT_ASSIGNED) this.handleAssignError();
    else if (this.handlerUrlsCheck('removeAssign', error.url)) {
      this.handleRemoveAssign(error);
    } else if (this.handlerUrlsCheck('assign', error.url, true)) {
      this.handleAssign(error);
    } else if (this.handlerUrlsCheck('visitData', error.url, true)) {
      this.handleVisitData(error);
    } else if (this.handlerUrlsCheck('illness', error.url, true)) {
      this.illnessVisitData(error);
    } else if (this.handlerUrlsCheck('assignRoom', error.url, true)) {
      return this.handleRoomAssign(error);
    } else if (this.handlerUrlsCheck('unassign', error.url)) {
      this.handleUnassign(error);
    } else if (this.handlerUrlsCheck('resetPassword', error.url)) {
      return this.handleResetPassword(error);
    } else if (this.handlerUrlsCheck('changePassword', error.url)) {
      this.handlePassword(error);
    } else if (this.handlerUrlsCheck('patientsSearch', error.url, true)) {
      this.silentErrorHandler(error, false, true);
    } else if (this.handlerUrlsCheck('other', error.url)) {
      this.handleOther(error);
    } else if (this.handlerUrlsCheck('labs', error.url)) {
      this.handleLabs(error);
    } else if (this.handlerUrlsCheck('measurements', error.url) || this.handlerUrlsCheck('alerts', error.url)) {
      return throwError(error);
    } else if (this.handlerUrlsCheck('login', error.url)) {
      return this.handleLogin(error);
    } else if (this.handlerUrlsCheck('ehrAuth', error.url)) {
      return this.handleEhrAuth(error);
    } else if (this.handlerUrlsCheck('nodeSearch', error.url)) {
      this.silentErrorHandler(error);
    } else if (this.handlerUrlsCheck('utilities', error.url)) {
      this.silentErrorHandler(error);
      return throwError(error);
    } else if (this.handlerUrlsCheck('services', error.url)) {
      this.stateService.app.setParsedSymptomsState('fail');
      this.silentErrorHandler(error);
    } else if (this.handlerUrlsCheck('notesUpload', error.url)) {
      return throwError(error);
    } else if (this.handlerUrlsCheck('documentUpload', error.url)) {
      this.handleDocumentUpload(error);
    } else if (this.handlerUrlsCheck('procedures', error.url)) {
      return throwError(error);
    } else if (this.handlerUrlsCheck('rerunDE', error.url)) {
      return this.handleRerunDiagnosisEngineError(error);
    } else if (this.handlerUrlsCheck('treatments', error.url)) {
      return this.handleTreatmentsError(error);
    } else if (this.handlerUrlsCheck('cntApiDemo', error.url)) {
      return throwError(error);
    } else if (this.handlerUrlsCheck('signature', error.url)) {
      this.silentErrorHandler(error, false, true);
      return throwError(error);
    } else if (this.handleChangePatientInfo(error)) {
      this.silentErrorHandler(error, false, true);
    } else if (this.handlerUrlsCheck('patientDataModification', error.url) || this.handlerUrlsCheck('ddx', error.url)) {
      return this.handlePatientDataModificationRequestError(error);
    } else if (this.handlerUrlsCheck('recommendationEngine', error.url)) {
      return this.handleERError(error);
    } else if (this.handlerUrlsCheck('telemedecine', error.url)) {
      this.silentErrorHandler(error, false, false);
      return throwError(error);
    } else if (isResponseError(error)) {
      if (isBackendFault(error)) {
        if (!notLoggedUrls.some(notLogUrl => error.url.indexOf(notLogUrl) > -1) && !(environment.forProd && environment.production)) {
          console.log('the err', error);
        }
        if (Math.trunc(error.status / 100) === 5 || error.status === 0) this.handleServerError(error);
        else if ((error.status === 401 || error.status === 403)) this.handleAccessError(error);
        else if (error.status === 400 || error.status === 404) this.handleServerError(error);
      } else {
        ErrorHandlerService.handleFrontendError(error.error as ErrorEvent);
        this.stateService.app.workers.erase();
      }
    }
  }

  handleSaml(response) {
    if (isResponseError(response)) {
      switch (response.status) {
        case 400: {
          this.userService.auth.setAuthError({title: null, message: 'Invalid token provided', priority: 3});
          this.navigationService.navigate('login', { queryParams: { r: 'r' }});
          break;
        }
        default: {
          this.errorHandler.handleError(response);
          this.navigationService.navigate('login');
        }
      }
    }
  }

  handleVisitData(response) {
    const url = response.url;
    const id = url.slice(url.indexOf('patients/') + 9 , url.indexOf('/visit-data'));
    this.stateService.patient.getUnassignEvent().emit({
      patient: { patient_id: id },
      force: true,
      cb: () => this.navigationService.navigateToPatients()
    });
    this.notificationService.error('Error retrieving patient data, Unable to open patient.');
  }

  illnessVisitData(response) {
    const url = response.url;
    const id = url.slice(url.indexOf('patients/') + 9 , url.indexOf('/illness'));
    this.stateService.patient.getUnassignEvent().emit({
      patient: { patient_id: id },
      force: true,
      cb: () => this.navigationService.navigateToPatients()
    });
    this.notificationService.error('Error retrieving patient data, Unable to open patient.');
  }

  handleRemoveAssign(response) {
    switch (response.status) {
      case(403):
        this.notificationService.error('This function available only for Operations Manager.');
        break;
      case(405):
        console.error('Remove assignment request incorrect method.');
        break;
      default:
        this.errorHandler.handleError(response);
    }
  }

  handleRoomAssign(response: HttpErrorResponse) {
    switch (response.status) {
      case 400: {
        const errMessage = response.error.detail ? response.error.detail : 'This patient is already assigned to another provider!';
        this.notificationService.error(errMessage);
        this.stateService.patient.setShowRoomAssignmentDialog(false);
        break;
      }
      case 403: {
        this.notificationService.error('You have no permission to perform this action - MA user only');
        this.stateService.patient.setShowRoomAssignmentDialog(false);
        break;
      }
      case 409: {
        const errMessage = response.error.detail ? response.error.detail : 'This room is occupied by another patient!';
        this.notificationService.warning(errMessage);
        this.stateService.patient.setShowRoomAssignmentDialog(true);
        return throwError(response);
        break;
      }
      default:
        this.stateService.patient.setShowRoomAssignmentDialog(true);
        this.errorHandler.handleError(response, true, false, true);
    }
  }

  handleAssign(response) {
    switch (response.status) {
      case 400: {
        this.stateService.patient.erase();
        this.notificationService.error('This patient is already assigned to another provider!');
        this.stateService.patient.setAssignment(false);
        this.patientListService.getPatientList(true, true);
        break;
      }
      case 404: {
        this.stateService.patient.erase();
        this.notificationService.error('Patient session doesn\'t exist');
        break;
      }
      default:
        this.stateService.patient.erase();
        this.errorHandler.handleError(response);
    }
  }

  handleUnassign(response) {
    switch (response.status) {
      case 400:
        this.stateService.patient.getUnassignEvent().emit({
          force: true,
          patient: null
        });
        break;
      default:
        this.errorHandler.handleError(response);
    }
  }

  handlePassword(response) {
    if (isResponseError(response)) {
      this.stateService.app.workers.rm();
      switch (response.status) {
        case 400:
          if (Array.isArray(response.error)) {
            response.error.forEach(error => {
              this.notificationService.error(error);
            });
          } else {
            const errorKeys = Object.keys(response.error);
            errorKeys.forEach((key: string) => {
              const message = response.error[key].map((errorMessage: string) => errorMessage.split('_').join(' ')).join('\n');
              let title = key.split('_').map((keyPart: string) => keyPart.charAt(0).toUpperCase() + keyPart.slice(1)).join(' ');
              title = (['Password', 'Non Field Errors'].includes(title)) ? 'Password change failed.' : `Password change failed: ${title}.`;
              this.notificationService.error(message, title);
            });
          }
          break;
        default:
          this.errorHandler.handleError(response);
          this.userService.logout(['', 'Unable to fulfill your request. Please try again later', 5], true);
      }
    }
  }

  handleResetPassword(response): void | Observable<never> {
    if (isResponseError(response)) {
      this.stateService.app.workers.rm();
      return customThrowError(Object.values(response.error).map(value => value));
    }
  }

  handleOther(response) {
    if (isResponseError(response)) {
      this.errorHandler.handleError(response);
    }
  }

  handleLabs(response) {
    if (isResponseError(response)) {
      switch (response.status) {
        case 404:
          console.log('No labs for current user');
          break;
        default:
          this.errorHandler.handleError(response, false, false);
      }
    }
  }

  handleLogin(response): void | Observable<never> {
    if (isResponseError(response)) {
      this.stateService.app.workers.rm();
      switch (response.status) {
        case 500:
        case 0:
          console.error(response.error);
          return customThrowError('Cannot perform request. Try again later.');
        case 400:
        case 401:
        case 403:
          let msg: string;
          if (response.error.message && response.error.message.toLowerCase().includes('blocked')) {
            msg = 'User is blocked. Please contact your administrator';
          } else {
            msg = 'Invalid user credentials';
          }
          return customThrowError(msg);
      }
    }
  }

  handleChangePatientInfo(error: HttpErrorResponse) {
    const splitedUrl = error.url.split('/').filter(i => i !== '');
    return /^[0-9]*$/.test(splitedUrl[splitedUrl.length - 1]);
  }

  /**
   * Handle 5xx errors
   * @param error HttpErrorResponse
   */
  private handleServerError(error: HttpErrorResponse) {
    const goBack = !['other', 'utilities', 'labs'].some((key: keyof typeof handlerUrls) => this.handlerUrlsCheck(key, error.url));
    this.errorHandler.handleError(error, false, goBack);
  }

  /**
   * Handle requests that modifying patient data
   * Requests always should be wrapped into catchError
   * @param {HttpErrorResponse} error
   * @returns {Observable<never>}
   */
  private handlePatientDataModificationRequestError(error: HttpErrorResponse): Observable<never> {
    this.errorHandler.handleError(error, true, false);
    return throwError(error);
  }


  /**
   * Handle 401, 403 errors
   * @param error HttpErrorResponse
   * @param forceLogout boolean
   */
  private handleAccessError(error: HttpErrorResponse, forceLogout?: boolean) {
    console.log('access error!!!', error.status, error.statusText);
    if (forceLogout) {
      this.stateService.app.workers.rm();
      let data;
      switch (error.error.message) {
        case AccessErrorMessages.SESSION_EXPIRED: {
          data = forceLogoutNotifications.sessionIsExpired;
          break;
        }
        case AccessErrorMessages.INVALID_OR_EXPIRED_TOKEN: {
          data = forceLogoutNotifications.invalidOrExpiredToken;
          break;
        }
      }
      this.userService.auth.emitForceLogout(data);
    }
  }

  private handleAssignError() {
    this.stateService.patient.getPatientArrivedEvent().emit({patient_id: this.stateService.patient.getCurrentId()});
    this.stateService.app.workers.erase();
  }

  private handleRerunDiagnosisEngineError(error: HttpErrorResponse) {
    this.errorHandler.handleError(error, false, false, true, 'Unable to rerun diagnosis engine.');
    return throwError(error);
  }

  private handleTreatmentsError(error: HttpErrorResponse) {
    this.errorHandler.handleError(error, true, false);
    return throwError(error);
  }

  private silentErrorHandler(response, goBack = true, showNotification = false) {
    this.errorHandler.handleError(response, true, goBack, showNotification);
  }

  private handleDocumentUpload(response: HttpErrorResponse) {
    switch (response.status) {
      case 400: {
        this.notificationService.error('Document upload failed.', 'Upload Document');
        break;
      }
      case 404: {
        this.notificationService.error('PDF not found!', 'Document');
        break;
      }
      default:
        this.errorHandler.handleError(response, true, false, true);
    }
  }

  private handleEhrAuth(error: HttpErrorResponse) {
    switch (error.status) {
      case 400:
        return customThrowError(error.error.message || error.error.msg);
      case 401:
        return customThrowError('We are unable to validate your credentials.  Please try again');
      default:
        this.silentErrorHandler(error, false, true);
        return throwError(new Error('Unknown'));
    }
  }

  private handleERError(error: HttpErrorResponse): Observable<never> {
    this.notificationService.error('Recommendations Engine request failed.');
    return throwError(error);
  }
}
