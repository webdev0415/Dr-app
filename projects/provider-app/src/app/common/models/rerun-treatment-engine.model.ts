import { Measurement } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { DiagnosticEngine } from '../interfaces/diagnostic-engine.interface';
import { HealthHistory } from './healthHistory.model';
import { PatientProfile } from '../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-profile.interface';

type RerunTETriage = Pick<Triage, 'response' | 'values' | 'symptomId'>;
type RerunTEDiagnosticEngine = Pick<DiagnosticEngine, 'icd10' | 'icdGroup' | 'isSelected'>;
type RerunTEPatientInformation = Pick<PatientProfile, 'gender' | 'birthDate' | 'pregnancyStatus' | 'patientId'>;
type RerunTEHealthHistory = Pick<HealthHistory, 'smokingStartDate' | 'smokingEndDate' | 'historyItem' | 'version'>;

export interface RerunTreatmentEngineData {
  triage: RerunTETriage[];
  diagnosticEngine: RerunTEDiagnosticEngine[];
  patientInformation: RerunTEPatientInformation;
  measurements: Measurement[];
  patientHealthHistory: RerunTEHealthHistory;
}
