import { SilentError } from './silent.error';

interface ExtraDataInterface {
  [key: string]: string;
}

export class SymptomError extends SilentError {
  name = 'Symptom Error';
  extraData: ExtraDataInterface;

  constructor(m: string, data: ExtraDataInterface) {
    super(m);
    this.extraData = data;
    this.level = 'log';
    Object.setPrototypeOf(this, SymptomError.prototype);
  }
}
