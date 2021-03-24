import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.config';
import { StateService } from './state.service';
import { NetworkService } from './network';
import { BehaviorSubject, concat, interval, Observable, of as ObservableOf, of } from 'rxjs';
import { catchError, first, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { Alert } from '../common/interfaces/alert';
import { UserService } from '../user/user.service';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService extends NetworkService {

  private alertsData: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>(null);

  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler,
    protected userService: UserService,
    private navigationService: NavigationService
  ) {
    super(http, cfg, stateService, errorHandler);
  }

  public getAlertsData(): Observable<Alert[]> {
    return this.alertsData.asObservable();
  }

  public sendAlerts(patient_id: number | string, data, update = false, alert_id?): Observable<any> {
    if (update && alert_id) {
      return this.send('patients', data, update, String(patient_id), `alerts/${alert_id}`, { urlType: 'api', splitAction: false});
    } else {
      return this.send('patients', data, false, String(patient_id), 'alerts', {urlType: 'api'});
    }
  }

  private getAlertsList(addWorker: boolean = false): Observable<any> {
    return this.show('patients', null, 'alerts', { urlType: 'api', addWorker }).pipe(catchError(() => of([])));
  }

  public getAlerts(repeat?: boolean) {
    if (repeat) {
      const refreshTimer = interval(300000)
        .pipe(
          startWith(0),
          switchMap(() => {
            if (!this.navigationService.isPatientsLocation && this.navigationService.isAnyHistory()) return ObservableOf(null);
            return this.getAlertsList();
          }),
          takeUntil(this.userService.isAuthenticated$.pipe(first(logged => logged === false)))
        );
      concat(refreshTimer).subscribe((response: any) => {
        if (response && !response.error) {
          this.alertsData.next(response);
        }
      });
    } else {
      this.getAlertsList().subscribe(item => {
        this.alertsData.next(item);
      });
      return;
    }
  }

  public getAlertByCode(patientId, code: string): Alert {
    return this.alertsData.getValue().find((alert) => (alert.patient === Number(patientId)) && (alert.code === code));
  }

  public removeAlert(patientId, alertId): Observable<any> {
    return this.delete('patients', null, patientId, `alerts/${alertId}`, { urlType: 'api', splitAction: false });
  }

  public checkShowByTarget(isDoctor: boolean, alert: Alert): boolean {
    if (alert.target === 'Provider') {
      return isDoctor;
    }
    if (alert.target === 'MA') {
      return !isDoctor;
    }
    return true;
  }
}
