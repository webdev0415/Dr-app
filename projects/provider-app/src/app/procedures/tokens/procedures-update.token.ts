import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Injection } from '../interfaces/injection.interface';
import { Medication } from '../interfaces/medication.interface';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { BusinessMedication } from '../interfaces/business-medication.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';

export interface ProceduresUpdateService<K extends MedicationOrderItem | InjectionOrderItem,
  R extends Medication | Injection> {
  order: (procedureType: 'medications' | 'injections', orders: K[]) => Observable<R[]>;
  update: (procedureType: 'medications' | 'injections', procedures: R[]) => Observable<any>;
  getBusinessMedications: () => BusinessMedication[];
  getBusinessInjections: () => BusinessInjection[];
}

export const PROCEDURES_UPDATE_SERVICE: InjectionToken<ProceduresUpdateService<any, any>> = new InjectionToken<ProceduresUpdateService<any, any>>('PROCEDURES UPDATE SERVICE INJECTION TOKEN');
