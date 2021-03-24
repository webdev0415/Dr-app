import { ProtocolKeys } from '../enum/protocol-keys.enum';
import { BackendTreatment, TreatmentPrescriptions } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';

export interface TreatmentProtocolItem extends Pick<BackendTreatment, 'name' | 'rank' | 'dosage' | 'priority'> {
  groupName: string;
  longName: string;
  nameDetails: string;

  id: number | null;
  keys: Array<string | ProtocolKeys>;
  // todo: possible deprecated
  directions: string[];
  prescriptions: Omit<TreatmentPrescriptions, 'direction_object'|'EMR_med_name'|'EMR_med_desc'>;

  type: TreatmentType;
  icdDesc: string;
  icdCode: string;
  isIllness: boolean;
  businessId: number|null;
  doctorId: number|null;
}

