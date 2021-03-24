import { Medication } from './medication.interface';

export interface GICocktailMedication extends Medication {
  catheter_gauge: string;
  unsuccessful_attempts: number;
}
