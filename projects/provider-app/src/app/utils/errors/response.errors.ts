import { ErrorLevel, PAError, PAErrorInterface } from './base.error';
import { HttpErrorResponse } from '@angular/common/http';

export class ResponseError extends PAError implements PAErrorInterface {
  name = 'Response Error';
  level = <ErrorLevel>'warning';
  extraData: HttpErrorResponse;

  constructor(m: string, error: HttpErrorResponse) {
    super(m);
    this.extraData = error;
    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}
