import { BusinessInjection } from './business-injection.interface';

export interface IVBusinessInjection extends BusinessInjection {
  consent: {[key in 'value' | 'label']: string}[];
  timeUnits: string[];
  site: string[];
  insertionBy: string[];
  catheterGauge: string[];
  unsuccessfulAttempts: string[];
  solution: string[];
  rate: string[];
  infusionBy: string[];
}
