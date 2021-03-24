import { Photo } from './photo.interface';

export interface PatientIdCard {
  cardId: number;
  patientId: number;
  images: Array<Photo & { side: 'FRONT' | 'BACK' }>;
  idType: 'LICENSE' | 'PASSPORT' | 'PASSPORT_CARD' | 'IDENTIFICATION' | 'MILITARY_ID' | 'VISA';
  isPatient: boolean;
}
