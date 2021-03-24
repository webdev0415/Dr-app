import { PAError } from './base.error';

export class SilentError extends PAError {
  name = 'Silent Error';

  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, SilentError.prototype);
  }
}
