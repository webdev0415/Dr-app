import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of as ObservableOf } from 'rxjs';
import { StateService, NavigationService } from 'services';
import 'rxjs/add/observable/from';

@Injectable()
export class HistoryPatientGuard implements CanActivate, CanLoad {
  constructor(private stateService: StateService,
              private navigationService: NavigationService,
              private router: Router) { }

  private checkHistory(): Observable<boolean> {
    const viewOnly = this.stateService.patient.getLastViewOnly();

    if (viewOnly) return ObservableOf(true);

    return this.stateService.patient.getCurrent().map(patient => {
      if (Boolean(patient)) {
        const history = this.navigationService.routeState.history;
        const previousUrl = history[history.length - 2];
        const previousPageIsTreatments = this.navigationService.treatmentUrlRegexp.test(previousUrl);
        const isConfirmDiagnosis = this.stateService.patient.getIsConfirmDiagnosis();

        if (previousPageIsTreatments && !isConfirmDiagnosis) {
          const illness = this.stateService.patient.getIllnessSelected();
          const isIllnessSelected: boolean = illness.length !== 0;
          const queryParams = this.router.parseUrl(previousUrl).queryParams;
          let queryParamIllness: Array<string> | string = queryParams['illness'];

          if (!Array.isArray(queryParamIllness)) {
            queryParamIllness = [queryParamIllness, ];
          }

          const isEqIllness = illness.every((icd10: string) => {
            return queryParamIllness.includes(icd10);
          }) && illness.length === queryParamIllness.length;

          if (!isIllnessSelected || !isEqIllness) {
            this.navigationService.nativeBackNavigationStop(this.router.url);
          }

          return isIllnessSelected && isEqIllness;
        }
      }
      return true;
    }).pipe();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkHistory();
  }

  canLoad(route: Route): Observable<boolean> {
    return this.checkHistory();
  }
}
