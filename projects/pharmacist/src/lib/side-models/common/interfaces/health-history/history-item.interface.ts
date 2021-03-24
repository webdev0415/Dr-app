import { MedicationRefill } from './medication-refill.interface';

export interface MedicationData {
  name: string;
  tty: string;
  brand: string;
}

export interface HistoryItem {
  dateAdded: string;
  dateDetected: string;
  externalID: string;
  familyRelationship: string;
  historyItem: string | MedicationData;
  historyType: string;
  historyValue: boolean;
  itemType: string;
  symptomID: string;
  customFields?: { key: string; value: string }[];
  id?: number;
  details?: MedicationRefill;
}
