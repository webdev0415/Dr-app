import { SilentError } from './silent.error';

export class DdxExplanationError extends SilentError {
  name = 'Ddx Explanation Error';
  extraData: string;

  constructor(m: string, sessionId: string) {
    super(m);
    this.extraData = sessionId;
    Object.setPrototypeOf(this, DdxExplanationError.prototype);
  }

}
