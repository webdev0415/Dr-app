import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { StateService } from '../services';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private stateService: StateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const showLoader = req.params.has('addWorker');

    if (showLoader) this.stateService.app.workers.add();

    const reqWithoutAddWorkerParam = req.clone({ params: req.params.delete('addWorker') });

    return next.handle(reqWithoutAddWorkerParam)
      .pipe(
        finalize(() => {
          if (showLoader) this.stateService.app.workers.rm();
        })
      );
  }

}
