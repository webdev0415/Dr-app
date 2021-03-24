import { ErrorLevel } from '../../../../pharmacist/src/lib/errors/base.error';
import { SilentError } from '../../../../pharmacist/src/lib/errors/silent.error';

export class OpentokUnhandledRejection extends SilentError {
  name = 'Opentok unhandled rejection';
  level = 'warning' as ErrorLevel;
  public extraData: string;

  constructor(error: Error) {
    super(error.message);
  }
}
