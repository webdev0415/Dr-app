import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StateService } from 'services/state.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { DialogService } from 'services/app/dialog.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { stdDialogConfig } from 'static/app.constants';
import { concatMap, take, tap } from 'rxjs/operators';
import { WorkingDiagnosisComponent } from '../components/app/workspace/patientspace/working-diagnosis/working-diagnosis.component';
import { isNil } from 'ramda';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ChangesGuard implements CanDeactivate<WorkingDiagnosisComponent> {
  private readonly stdDialogConfig = stdDialogConfig;

  constructor(private stateService: StateService,
              public dialogService: DialogService) { }


  getConfig(data: any, customProperties: any = null): MatDialogConfig {
    return Object.assign(new MatDialogConfig(), { ...this.stdDialogConfig, data: data, ...customProperties });
  }

  getConfirmed(wdComponent: WorkingDiagnosisComponent, next): Observable<boolean> {
    const viewOnly = this.stateService.patient.getLastViewOnly();
    if (isNil(viewOnly)) return of(true);

    const component = wdComponent.diagnosisSection;

    const getReviewed: Observable<string> = this.stateService.patient.getReviewed();

    return getReviewed.pipe(take(1), concatMap(review => {
      if (component.hpiSummary && component.hpiSummary.isEditable) {
        component.hpiSummary.saveSummary();
      }
      const confirmed = review === 'confirmed';
      const reviewed = review === 'reviewed' || review === 'confirmed';
      if (confirmed || !reviewed || (!component.rerunTETrigger) || component.viewOnly) {
        return of(true);
      } else {
        return wdComponent.rerunTE(false, false).pipe(tap(() => this.stateService.app.workers.erase())).map(result => true);
      }
    }), take(1));
  }

  canDeactivate(component: WorkingDiagnosisComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> {
    if (nextState.url.includes('/login')) {
      return of(true);
    } else {
      return this.getConfirmed(component, nextState);
    }
  }
}
