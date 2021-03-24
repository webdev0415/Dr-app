import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { SymptomsService } from '../services/symptoms.service';
import { DataService, StateService } from '../services';
import { CanComponentDeactivate } from './changes.guard';
import { Observable, of } from 'rxjs';
import { PatientDataComponent } from '../components/app/workspace/patientspace/patientdata/patient-data.component';
import { SymptomsComponent } from '../components/app/workspace/patientspace/symptoms/symptoms.component';
import { catchError, concatAll, map, tap } from 'rxjs/operators';
import { RerunDiagnosticEngine } from '../components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.actions';
import { Store } from '@ngxs/store';

@Injectable()
export class SymptomsUpdateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private symptomsService: SymptomsService, private dataService: DataService, private stateService: StateService, private store: Store) {}

  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> {
    if (nextState.url.includes('/login')) {
      return of(true);
    } else {
      let updateHealthHistory: boolean;
      let symptomsAdded: boolean;
      let triggerRerunTriage = true;
      let symptomRemoved: boolean;
      if (component instanceof PatientDataComponent) {
        updateHealthHistory = component.shouldSave;
        triggerRerunTriage = component.isOnlyReasonEdited;
      }

      if (component instanceof SymptomsComponent && component.hpiSummary.isEditable) {
        component.hpiSummary.showNotSavedWarning();
      }

      let updatedSymptoms = this.symptomsService.addedSymptoms;
      if (updatedSymptoms.length) {
        symptomsAdded = true;
      }

      const removedSymptoms = this.symptomsService.removedSymptoms;
      if (removedSymptoms.length) {
        symptomRemoved = true;
      }

      const patient = this.dataService.getPatientLastValue();
      const patientId = patient.patientInformation.patientId;
      const changes = updateHealthHistory || symptomsAdded || symptomRemoved;

      const historyUpdate: Observable<any> = changes ? this.dataService.saveHealthHistory(patientId, !this.stateService.patient.getVisitCreationIssueState()).pipe(tap(() => {
        if (this.stateService.patient.getVisitCreationIssueState()) this.stateService.patient.setVisitCreationIssueState(false);
        if (component instanceof PatientDataComponent) component.updateRawHealthHistory(patient.patientHealthHistory);
      })) : of(null);
      let rerunHpi = false;
      const rerunRos = false;
      updatedSymptoms = this.symptomsService.addedSymptoms.filter(item => {
        const categoryName = this.symptomsService.getHistoryItemCategory(item.SymptomID);
        if (categoryName === 'Surgical History') rerunHpi = true;
        if (this.symptomsService.isHealthHistoryItem(item.SymptomID, categoryName) && item.SymptomName.toLowerCase().includes('diabete')) rerunHpi = true;
        return !this.symptomsService.isHealthHistoryItem(item.SymptomID, categoryName);
      });
      const rerunDE: Observable<any> = (changes && triggerRerunTriage) ? symptomRemoved ? this.dataService.removeLabs(removedSymptoms, patientId) : this.dataService.rerunTriage(updatedSymptoms, patientId, rerunHpi, rerunRos) : of(null);

      return historyUpdate.pipe(
        catchError(error => of(null)),
        map((result) => {
          if (result) return rerunDE.pipe(catchError(error => of(null)));
          else return of(null);
        }),
        concatAll()
      ).map(result => {
        if (result && result.triage) {
          this.store.dispatch(new RerunDiagnosticEngine(result.diagnosticEngine, result.unlikelyDiagnosticEngine || [], result.triage));
          this.symptomsService.wipeUpdatedSymptomsData();
        }
        this.stateService.app.workers.erase();
        return true;
      });
    }
  }
}
