import { PreparedPatientListEntity } from './prepared-patient-list-entity.interface';

export interface PatientListInterface {
  panelHeaderLabel: string;
  isHiddenOnEmpty: boolean;
  patients: PreparedPatientListEntity[];
  isExpanded: boolean;
  type: 'waiting' | 'telemedicine' | 'provider' | 'completed' | 'test';
}

