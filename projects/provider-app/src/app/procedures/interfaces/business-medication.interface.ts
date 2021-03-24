import { BusinessInjection } from './business-injection.interface';

export interface BusinessMedication extends Omit<BusinessInjection, 'dilutions'> {
  forms: string[];
}
