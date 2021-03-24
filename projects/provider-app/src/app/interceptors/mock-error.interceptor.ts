import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()

export class MockErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.match(/[\d]{6}\/$/) && req.method === 'PATCH') {
      const mockErrorResponse = new HttpErrorResponse({url: req.url, status: 502, headers: req.headers, error: {message: 'fail'}, statusText: 'fail fail fail'});
      return throwError(mockErrorResponse);
    } else return next.handle(req);
  }
}
