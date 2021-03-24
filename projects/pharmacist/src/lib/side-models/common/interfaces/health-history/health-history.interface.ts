import { PharmacyData } from './pharmacy-data.interface';
import { HistoryItem } from './history-item.interface';

export interface HealthHistory {
  drinkingStartDate: string;
  drinkingEndDate: string;
  lastDrinkDate: string;
  smokingStartDate: string;
  smokingEndDate: string;
  familyOtherCancer?: string;
  patientOtherCancer?: string;
  otherSurgery?: string;
  otherDrugs?: string;
  medsAllergyReactions?: string;
  historyItem: HistoryItem[];
  version: string;
  pharmacies: PharmacyData[];
}
