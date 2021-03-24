import { inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';


import { generateSpecs } from '@pa-tests/test-context';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { environment } from '../../environments/environment';
import { UserService } from '../user/user.service';

class UserServiceMock {
  get isAuthenticated(): boolean { return false; }
  get getToken(): string { return 'Bearer token'; }
}

describe('AddHeaderInterceptor', generateSpecs({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AddHeaderInterceptor,
        multi: true
      }, {
        provide: UserService, useClass: UserServiceMock
      }
    ]
  },
  () => {
    let httpMock: HttpTestingController;
    let http: HttpClient;
    let user: UserService;

    beforeEach(inject([HttpTestingController, HttpClient, UserService],
      (httpMockController: HttpTestingController, httpClient: HttpClient, userService: UserService) => {
        httpMock = httpMockController;
        http = httpClient;
        user = userService;
    }));

    it('should add an Authorization header if logged', () => {
      spyOnProperty(user, 'isAuthenticated').and.returnValue(true);
      http.request('GET', 'https://testing2.advinow.net/patients').subscribe(response => {
        expect(response).toBeTruthy();
      });
      const httpRequest = httpMock.expectOne(`${environment.apiDomain}/patients`);
      expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    });

    it('should not add an Authorization header if not logged', () => {
      spyOnProperty(user, 'isAuthenticated').and.returnValue(false);
      http.request('GET', 'https://testing2.advinow.net/patients').subscribe(response => {
        expect(response).toBeTruthy();
      });
      const httpRequest = httpMock.expectOne(`${environment.apiDomain}/patients`);
      expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
    });
  })
);
