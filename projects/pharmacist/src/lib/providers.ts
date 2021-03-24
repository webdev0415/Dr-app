import { InjectionToken } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


import { SocialCard } from './side-models/patient-profile/social-card.model';
import {
  PatientContactInformation, PatientInsuranceCard,
  PatientProfile,
  PatientProfileData,
  PatientUserData
} from './side-models/patient-profile/interfaces';

import { DiagnosticEngine } from './side-models/common/interfaces/diagnostic-engine/diagnostic-engine.interface';
import { BehaviorData } from './side-models/common/interfaces/behavior-data/behavior-data.interface';
import { Measurement } from './side-models/common/interfaces/measurement/measurement.interface';
import { DrugInformation } from './side-models/common/interfaces/treatment/drug-information.interface';
import { Triage } from './side-models/common/interfaces/triage/triage';

import { PharmacistRecommendations } from './interfaces/pharmacist-recommendations.interface';

export interface PatientDataService {
  socialCard$: Observable<SocialCard>;
  triage$: Observable<Triage[]>;
  pharmacistRecommendation$: Observable<PharmacistRecommendations>;
  measurement$: Observable<Measurement[]>;
  patientQuestionnaire$: Observable<BehaviorData[]>;
}
export const PATIENT_DATA_PROVIDER = new InjectionToken<PatientDataService>('Patient medicine information provider');

export interface PatientProfileService {
  patientProfileData$: (which?: keyof PatientProfileData) => Observable<PatientProfile | PatientContactInformation | PatientProfileData | PatientUserData>;
  patientInsurance$: Observable<Readonly<PatientInsuranceCard[]>>;
}
export const PATIENT_PROFILE_SERVICE = new InjectionToken<PatientProfileService>('Patient profile data provider');

export interface DrugInformationService {
  drugInformation$: Observable<DrugInformation[]>;
}
export const DRUG_INFORMATION = new InjectionToken<DrugInformationService>('Drug information provider');

export const DE_INFORMATION = new InjectionToken<BehaviorSubject<DiagnosticEngine[]>>('Diagnostic engine information');
