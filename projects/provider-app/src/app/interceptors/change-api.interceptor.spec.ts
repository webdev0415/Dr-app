import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Inject, Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';


import { ChangeApiInterceptor } from './change-api.interceptor';

import { environment } from '../../environments';
import { DomainsEnum } from '../../environments/domains.enum';

@Injectable()
class TestService {
  constructor(
    private http: HttpClient,
    @Inject('ENVIRONMENT') private appEnvironment: { [key in 'apiDomain' | 'utilityDomain']: string; }
    ) {
  }
  public sendAPITestRequest(): void {
    this.http.get(`${this.appEnvironment.apiDomain}/some/id?sort=asc`).subscribe();
  }
  public sendUtilityTestRequest(): void {
    this.http.get(`${this.appEnvironment.utilityDomain}/some/id?sort=desc`).subscribe();
  }
}

describe('ChangeApiInterceptor', () => {
  let httpMock: HttpTestingController;
  let testService: TestService;
  let interceptor: ChangeApiInterceptor;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ChangeApiInterceptor, multi: true },
        TestService,
        { provide: 'ENVIRONMENT', useValue: { ...environment, picDomain: DomainsEnum.PIC_DOMAIN, picAPI: DomainsEnum.PIC_PROD_API } }
      ]
    });
  }));

  beforeEach(inject([HttpTestingController, TestService, HTTP_INTERCEPTORS], (testingController: HttpTestingController, testingMockService: TestService, interceptors: HttpInterceptor[]) => {
    httpMock = testingController;
    testService = testingMockService;
    interceptor = interceptors.find(item => item instanceof ChangeApiInterceptor) as ChangeApiInterceptor;
  }));

  it('should change api domain for PIC', () => {
    spyOnProperty(interceptor, 'location', 'get').and.returnValue({ hostname: DomainsEnum.PIC_DOMAIN });
    testService.sendAPITestRequest();
    httpMock.expectOne(`${DomainsEnum.PIC_PROD_API}/some/id?sort=asc`);
  });

  it('should change api domain for FASTMED', () => {
    spyOnProperty(interceptor, 'location', 'get').and.returnValue({ hostname: environment.fastMedDomain });
    testService.sendAPITestRequest();
    httpMock.expectOne(`${environment.fastMedAPI}/some/id?sort=asc`);
  });

  it('should not change api domain for ADVINOW', () => {
    testService.sendAPITestRequest();
    httpMock.expectOne(`${environment.apiDomain}/some/id?sort=asc`);
  });

  it('should pass request to UTILITY domain without changes', () => {
    testService.sendUtilityTestRequest();
    httpMock.expectOne(`${environment.utilityDomain}/some/id?sort=desc`);
  });
});
