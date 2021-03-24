import { inject } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { Configuration } from '../app.config';
import { StateService } from '../services';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { throwError } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';


describe('ErrorHandlerInterceptor', generateSpecs({
    imports: [
      NetworkTestModule,
      HttpClientTestingModule,
      UserTestModule
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true,
      },
      {
        provide: ErrorHandlerService, useValue: jasmine.createSpyObj('ErrorHandlerService', [
          'handlerUrlsCheck',
          'handle'
        ])
      }
    ]
  },
  () => {
    let errorInterceptor: ErrorHandlerInterceptor;

    beforeEach(inject([ErrorHandlerService, Configuration, StateService],
      (errorHandler: ErrorHandlerService, cfg: Configuration, stateService: StateService) => {
        errorInterceptor = new ErrorHandlerInterceptor(stateService, cfg, errorHandler);
    }));

    describe('intercept', () => {
      let httpRequestSpy;
      let httpHandlerSpy;

      it('should auto logout if 401 response returned from api', () => {
        const error = new HttpErrorResponse({
          status: 403,
          statusText: 'error',
          url: 'some/url',
          error: { message: 'This session is expired.' }
        });
        httpRequestSpy = jasmine.createSpyObj('HttpRequest', [ 'doesNotMatter' ]);
        httpHandlerSpy = jasmine.createSpyObj('HttpHandler', [ 'handle' ]);
        httpHandlerSpy.handle.and.returnValue(throwError(error));
        httpRequestSpy.url = 'req/url';

        errorInterceptor.intercept(httpRequestSpy, httpHandlerSpy)
        .subscribe(result => {
        }, err => {
          expect(err).toEqual(error);
        });
      });
    });
  })
);
