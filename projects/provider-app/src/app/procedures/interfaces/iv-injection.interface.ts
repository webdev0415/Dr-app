import { Injection } from './injection.interface';

export interface IVInjection extends Injection {
  consent: string;
  time: number;
  time_units: string;
  site: string;
  insertion_by: string;
  catheter_gauge: string;
  unsuccessful_attempts: number;
  attempts_description: string;
  solution: string;
  manufacturer: string;
  rate: string;
  infusion_by: string;
  infusion_name: string;
}

