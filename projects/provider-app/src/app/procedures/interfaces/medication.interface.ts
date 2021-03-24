import { MedicationOrderItem } from './medication-order-item.interface';

export interface Medication extends MedicationOrderItem {
  id: number;
  brandName: string;
  NDC: string;
  lotNumber: string;
  timeWaited: number;
  expiration: string;
  toleratedWell: boolean;
  noDifficulty: boolean;
  complications: string;
}
