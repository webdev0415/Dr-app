import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ChangeApiInterceptor implements HttpInterceptor {
  constructor(@Inject('ENVIRONMENT') private environment: { [key in 'apiDomain' | 'fastMedDomain' | 'fastMedAPI' | 'picDomain' | 'picAPI']: string; }) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const path = req.url.replace(this.environment.apiDomain, '');
    let newReq = req;
    if (req.url.includes(this.environment.apiDomain)) {
      if (this.location.hostname === this.environment.fastMedDomain) {
        newReq = req.clone({ url: this.environment.fastMedAPI + path, method: req.method });
      } else if (this.location.hostname === this.environment.picDomain) {
        newReq = req.clone({ url: this.environment.picAPI + path, method: req.method });
      }
    }
    return next.handle(newReq);
  }

  get location(): typeof location { return location; }
}
