import { PatientListEntity } from './patient-list-entity.model';

export interface OpenPatientInterface {
  patientData: PatientListEntity;
  viewOnly: boolean;
  notAssigned: boolean;
}
