import { SilentError } from './silent.error';

interface ExtraDataInterface {
  [key: string]: string;
}

export class PharmacistAssessmentsError extends SilentError {
  name = 'Pharmacist Assessments Error';
  extraData: ExtraDataInterface;

  constructor(m: string, data: ExtraDataInterface) {
    super(m);
    this.level = 'log';
    this.extraData = data;
    Object.setPrototypeOf(this, PharmacistAssessmentsError.prototype);
  }
}
