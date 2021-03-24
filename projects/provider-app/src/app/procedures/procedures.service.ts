import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Configuration } from 'app.config';
import { Injection, Medication } from 'common/interfaces/procedures.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { catchError, map, pluck } from 'rxjs/operators';

import { NetworkService } from 'services/network';
import { StateService } from 'services/state.service';
import { UserService } from 'user/user.service';
import { BusinessInjection } from './interfaces/business-injection.interface';
import { BusinessMedication } from './interfaces/business-medication.interface';
import { InjectionOrderItem } from './interfaces/injection-order-item.interface';
import { MedicationOrderItem } from './interfaces/medication-order-item.interface';
import { GICocktail, IVInjection } from './procedures.static';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService extends NetworkService {
  private BusinessMedications: BehaviorSubject<BusinessMedication[]> = new BehaviorSubject<BusinessMedication[]>(null);
  private BusinessInjections: BehaviorSubject<BusinessInjection[]> = new BehaviorSubject<BusinessInjection[]>(null);

  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler,
    private userService: UserService
  ) {
    super(http, cfg, stateService, errorHandler);
  }

  public getBusinessMedications(): BusinessMedication[] {
    return this.BusinessMedications.getValue();
  }
  public getBusinessInjections(): BusinessInjection[] { return this.BusinessInjections.getValue(); }

  update<T extends Medication | Injection>(procedureType: string, procedures: T[]): Observable<any> {
    return this.send('patients', procedures, true, this.patientId, procedureType, { urlType: 'api' });
  }

  order<T extends MedicationOrderItem | InjectionOrderItem>(procedureType: string, procedures: T[]): Observable<any> {
    return this.send('patients', procedures, false, this.patientId, procedureType, { urlType: 'api' });
  }

  getProcedures(procedure: string): Observable<any> {
    return this.show('patients', this.patientId, procedure, { urlType: 'api' }).pipe(catchError(() => of([])));
  }

  getBusinessProcedures<T>(procedure: string): Observable<T[]> {
    if (this.userService.getUserRole !== 'practitioner') return of([]);
    return this.show<{ [key: string]: T[] }>('businesses', null, procedure, { urlType: 'api' }).pipe(pluck(procedure), catchError(() => of([])));
  }

  getMedicationsData(): void {
    this.getBusinessProcedures<BusinessMedication>('medications').pipe(map(medications => {
      if (medications) medications.push(GICocktail);
      return medications;
    })).subscribe(medications => {
      this.BusinessMedications.next(medications);
    });
  }

  getInjectionsData(): void {
    this.getBusinessProcedures<BusinessInjection>('injections').pipe(map(medications => {
      if (medications) medications.push(IVInjection);
      return medications;
    })).subscribe(injections => {
      this.BusinessInjections.next(injections);
    });
  }

  private get patientId(): string {
    return String(this.stateService.patient.getCurrentId());
  }
}
