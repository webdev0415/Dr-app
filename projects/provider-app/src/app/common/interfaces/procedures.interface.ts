import { OrderStateEnum } from '../enums';

export interface ProcedureField {
  label: string;
  model: string;
  options?: any;
  cb?: (itemName: string, value: string | number | boolean) => void;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  hidden?: (itemName: string, label?: string, type?: string) => boolean;
}

export interface Medication {
  name: string;
  state: OrderStateEnum;
  route: string;
  dosage: string;
  form: string;
  brandName: string;
  NDC: string;
  lotNumber: string;
  timeWaited: number;
  expiration: string;
  toleratedWell: boolean;
  noDifficulty: boolean;
  complications: string;
  id: number;
}

export interface Injection extends Medication {
  needleSize: string;
  diluent: 'sterile water' | 'lidocaine 1%' | 'lidocaine 2%';
  orderedBy: number;
  givenBy: number;
  attempts_description?: string;
  catheter_gauge?: number;
  concentration?: string;
  consent?: string;
  infusion_by?: string;
  infusion_name?: string;
  insertion_by?: string;
  manufacturer?: string;
  rate?: string;
  site?: string;
  solution?: string;
  time?: number;
  time_units?: string;
  unsuccessful_attempts?: number;
}

