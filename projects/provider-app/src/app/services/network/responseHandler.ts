/* tslint:disable */

import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseHandler {
  Handler<T>(url: string, response: HttpEvent<any>, caught: Observable<T>): any;
}
