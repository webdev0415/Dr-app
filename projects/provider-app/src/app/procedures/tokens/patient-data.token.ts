import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';


import { Medication } from '../interfaces/medication.interface';
import { Injection } from '../interfaces/injection.interface';

export interface PatientData {
  medications: Medication[]; injections: Injection[];
}

export interface PatientDataService {
  getPatient: () => Observable<PatientData>;
  updatePatient: (data: Partial<PatientData>) => void;
}

export const PATIENT_DATA_SERVICE: InjectionToken<PatientDataService> = new InjectionToken('PROCEDURES PATIENT DATA TOKEN');
