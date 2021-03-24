import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';


import { UserService } from 'user/user.service';
import { environment } from '../../environments/environment';

@Injectable()

export class AddHeaderInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApi = req.url.includes(environment.apiDomain) || req.url.includes(environment.fastMedAPI);
    const jsonReq: HttpRequest<any> = isApi && this.userService.isAuthenticated ?
      req.clone( { setHeaders: {'Authorization': 'Bearer ' + this.userService.getToken}}) :
      req.clone( { headers: req.headers.append('Content-Type', 'application/json') });

    return next.handle(jsonReq);
  }
}
