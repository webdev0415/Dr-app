import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StateService } from '../services';
import { TreatmentsService } from '../treatments/treatments.service';
import { TreatmentComponent } from '../treatments/treatment/treatment.component';
import { isNil } from 'ramda';

@Injectable()
export class TreatmentsGuard implements CanDeactivate<TreatmentComponent> {
  constructor(private stateService: StateService, private treatmentsService: TreatmentsService) {}
  canDeactivate(component: TreatmentComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): Observable<boolean> {
    const treatmentsComponent: TreatmentComponent = component;
    const viewOnly = this.stateService.patient.getLastViewOnly();
    if (isNil(viewOnly)) return of(true);
    if (this.treatmentsService.shouldSaveTreatments) {
      treatmentsComponent.updateDrugInformation();
      return treatmentsComponent.saveTreatments();
    }
    return of(true);
  }
}
