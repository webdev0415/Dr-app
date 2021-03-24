import { InjectionOrderItem } from './injection-order-item.interface';
import { Medication } from './medication.interface';

export interface Injection extends InjectionOrderItem, Omit<Medication, 'form'> {
  diluent: string;
  needleSize: string;
  concentration: string;
  orderedBy: number;
  givenBy: number;
}
