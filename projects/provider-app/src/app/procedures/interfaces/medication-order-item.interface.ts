import { InjectionOrderItem } from './injection-order-item.interface';

export interface MedicationOrderItem extends InjectionOrderItem {
  form: string;
}
