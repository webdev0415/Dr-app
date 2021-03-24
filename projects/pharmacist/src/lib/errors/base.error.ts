export type ErrorLevel = 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug' | 'critical';

export interface PAErrorInterface {
  name: string;
  level: ErrorLevel;
  extraData?: any;
}


export class PAError extends Error implements PAErrorInterface {
  name = 'PA Error';
  level = <ErrorLevel>'error';

  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, PAError.prototype);
  }
}
