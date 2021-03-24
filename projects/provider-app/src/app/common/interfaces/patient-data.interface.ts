import { HistoryItem } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { PatientDataSectionNameEnum } from '../enums/patient-data-section.enum';

export interface PatientDataSection {
  name: PatientDataSectionNameEnum;
  data: HistoryItem[];
  list?: any[];
  personalHistory?: boolean;
}

export interface UnassignData {
  patient: PatientListEntity;
  force?: boolean;
  customMessage?: string;
  cb?: Function;
  doNotSendUnassignedRequest?: boolean;
}

export interface ViewSymptom {
  name: string;
  index: number;
}

export interface FinalNotesResponse {
  detail: string;
  doctor_note: string;
  doctor_note_id: number;
}
