import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of as ObservableOf, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StateService } from '../services/state.service';
import { Configuration } from '../app.config';
import { handlerUrls } from '../static/network';
import { ErrorHandlerService } from './error-handler.service';

const URL_EXCEPTIONS = ['versions.json?t='];

@Injectable()

export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    protected stateService: StateService,
    protected cfg: Configuration,
    protected handleService: ErrorHandlerService
  ) { }

  static urlForLogging(reqUrl: string): boolean {
    return URL_EXCEPTIONS.every(url => !reqUrl.includes(url));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (ErrorHandlerInterceptor.urlForLogging(req.url)) {
      return next.handle(req).pipe(catchError((error: any) => {
        console.log(`ErrorInterceptor - ${req.url}`);
        if (['nodeSearch'].some((url: keyof typeof handlerUrls) => this.handleService.handlerUrlsCheck(url, req.url))) return throwError(error);
        return this.handleService.handle(error) || ObservableOf(error);
      }));
    }
    return next.handle(req);
  }
}
