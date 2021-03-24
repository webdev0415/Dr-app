import { NgModule } from '@angular/core';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { environment } from '../../environments';

import { AddHeaderInterceptor } from './add-header.interceptor';
import { ChangeApiInterceptor } from './change-api.interceptor';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { ErrorHandlerService } from './error-handler.service';
import { MockErrorInterceptor } from './mock-error.interceptor';
import { ReqresLoggerInterceptor } from './reqres-logger.interceptor';
import { LoaderInterceptor } from './loader.interceptor';
import { PharmacistRecommendationAppInterceptor } from './pharmacist-recommendation-app.interceptor';

@NgModule({
  providers: [
    { provide: 'ENVIRONMENT', useValue: environment },
    MDBSpinningPreloader,
    ErrorHandlerService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ChangeApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ReqresLoggerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: PharmacistRecommendationAppInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: MockErrorInterceptor, multi: true },
    /*{ provide: HTTP_INTERCEPTORS, useClass: SentryHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UserNotificationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogJournalInterceptor, multi: true }*/
  ]
})

export class InterceptorsModule {}
