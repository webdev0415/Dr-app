import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as Sentry from '@sentry/browser';

import { environment, versions } from '../../environments';
import { StateService } from 'services/state.service';
import { isResponseError } from 'services/network';
import { DialogService } from 'services/app/dialog.service';
import { NotificationsService } from 'components/notifications/notifications.service';
import { PatientdataService } from '../services/patientdata.service';
import { NavigationService } from '../services/navigation.service';
import { UserService } from '../user/user.service';
import { ResponseError, SymptomError } from './errors';
import { SilentError } from './errors/silent.error';
import { PharmacistAssessmentsError } from '../../../../pharmacist/src/public-api';

const getObjectFromStorage = (storage: Storage): any => {
  const currentStringStorage = storage.getItem(environment.storagePrefix);

  if (currentStringStorage) {
    let currentStorageObject;
    try {
      currentStorageObject = JSON.parse(currentStringStorage);
    } catch (e) {
      return null;
    }
    if (currentStorageObject) {
      return currentStorageObject;
    }
  }
  return null;
};

const getEnvName = (): string => {
  if ('name' in environment) {
    if (environment.name !== '') return environment.name;
  }
  return 'local';
};

Sentry.init({
  dsn: environment.sentry,
  environment: getEnvName(),
  release: versions.app,
  attachStacktrace: true,
  ignoreErrors: ['ResizeObserver loop limit exceeded', 'Snomed code with name is NULL'],
  blacklistUrls: ['http://localhost:4200', 'http://127.0.0.1:4200'],
  maxValueLength: 250 * 10,
  beforeBreadcrumb(crumb: Sentry.Breadcrumb) {
    if (crumb.category === 'console' && crumb.level === Sentry.Severity.Log) return null;
    if (crumb.category === 'console' && crumb.level === Sentry.Severity.Error) {
      if (crumb.data.extra.arguments && crumb.data.extra.arguments.length === 0) {
        // noinspection JSAnnotator
        delete crumb.data.extra;
        delete crumb.data.logger;
      }
    }
    return crumb;
  }
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  private sendRequestOnPatientsEndpointDown = true;
  private errorList = [];

  constructor(private serviceInjector: Injector) { }

  getIsPatientsEndpointDown(error): boolean {
    if (error.extraData && error.extraData.status === 0 && error.extraData.url.endsWith('api/patients/')) {
      const result = this.sendRequestOnPatientsEndpointDown;
      this.sendRequestOnPatientsEndpointDown = false;
      return result;
    }
    return true;
  }

  handleError(error: any, silent = false, goback = true, showNotification = false, customMessage?: string): void {
    const stateService = this.serviceInjector.get(StateService);
    if (isResponseError(error)) {
      if (!silent) {
        error = new ResponseError(error.message, error);
        const dialogService = this.serviceInjector.get(DialogService);
        const navigationService = this.serviceInjector.get(NavigationService);
        stateService.app.workers.erase();
        stateService.app.pdf.emitPdfClosed();
        dialogService.dialog.closeAll();
        if (goback) navigationService.goBack();
      }
      if (showNotification || !silent) {
        const errorMessage = customMessage || 'Unable to fulfill your request. Please try again later';
        const notificationService = this.serviceInjector.get(NotificationsService);
        notificationService.error(errorMessage);
      }
    }
    if (!(error instanceof Error)) {
      if (error.error && error.error instanceof Error) {
        error = error.error;
      } else if (error.message && typeof error.message === 'string') {
        error = error.message;
      }
    }
    if (environment.useSentryAndLog && this.getIsPatientsEndpointDown(error) && !this.isInErrorList(error)) {
      this.addInErrorLIst(error);
      const currentLSObject = getObjectFromStorage(localStorage);
      const currentSSObject = getObjectFromStorage(sessionStorage);
      const userService = this.serviceInjector.get(UserService);
      const currentPatientId = stateService.patient.getCurrentId();
      const patientDataService = this.serviceInjector.get(PatientdataService);

      Sentry.withScope((scope: Sentry.Scope) => {
        if (currentLSObject && currentSSObject) {
          scope.setTag('login', currentLSObject['last_login']);
          scope.setUser({username: userService?.getUserData?.full_name});
          scope.setTag('role', currentSSObject['role']);
          scope.setTag('illness_presentation', currentLSObject['illness_presentation']);
        }
        if (error.hasOwnProperty('extraData')) scope.setExtra('extraData', error.extraData);
        if (error.hasOwnProperty('level')) scope.setLevel(Sentry.Severity.fromString(error.level));

        if (currentPatientId && patientDataService) {
          scope.setExtra('visit-data', patientDataService.visitDataContext);
        }
        Sentry.captureException(error);
      });
    }

    if (!(environment.forProd && environment.production) && !(error instanceof SilentError)) {
      console.error(error);
    }
  }

  addInErrorLIst(error: any): void {
    switch (error.constructor) {
      case PharmacistAssessmentsError: {
        const token = error.name + error.extraData.problem;
        this.errorList.push(token);
        break;
      }

      case SymptomError: {
        const token = error.name + error.extraData.symptomID;
        this.errorList.push(token);
        break;
      }

      default:
        this.errorList.push(error.message);
        break;
    }
  }

  isInErrorList(error: any): boolean {
    switch (error.constructor) {
      case PharmacistAssessmentsError: {
        const token = error.name + error.extraData.problem;
        if (!this.errorList.includes(token)) {
          return false;
        }
        break;
      }

      case SymptomError: {
        const token = error.name + error.extraData.symptomID;
        if (!this.errorList.includes(token)) {
          return false;
        }
        break;
      }

      default:
        if (!this.errorList.includes(error.message)) {
          return false;
        }
        break;
    }
    return true;
  }

  eraseErrorList(): void {
    this.errorList = [];
  }
}
