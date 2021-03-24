import { PatientListEntity } from './patient-list-entity.model';
import { EhrStateEnum } from '../ehr-state.enum';

export type PatientListGroup = 'assigned' | 'completed' | 'test' | 'telemedicine' | 'waiting';

export interface PreparedPatientListEntity extends Omit<PatientListEntity, 'edb_state'> {
  statusString: string;
  waitingTime: string;
  completedTime: string;
  provider: string;
  appointmentTime: string;
  telemedicineStatus: 'awaiting' | 'notified' | 'offline';
  labs_ordered: boolean;
  labs_completed: boolean;
  vitals_ordered: boolean;
  vitals_completed: boolean;
  injections_ordered: boolean;
  injections_completed: boolean;
  medications_ordered: boolean;
  medications_completed: boolean;
  edb_state: keyof typeof EhrStateEnum;
  patientListGroup: PatientListGroup;
  locationNameToDisplay?: string;
  clinicName: string;
}
