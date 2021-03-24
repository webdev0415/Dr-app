import { HttpEventType } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { of as ObservableOf } from 'rxjs';

import { testTriage, testVisitData } from 'static/test.constants';

import { KludgesService } from './kludges.service';


describe('KludgesService', generateSpecs({
    imports: [
      NetworkTestModule
    ],
    providers: [
      KludgesService
    ]
  },
  () => {
    const requestValue = ObservableOf({body: {results: []}, type: HttpEventType.Response});
    let service: KludgesService;

    beforeEach(inject([KludgesService], (kludgesService: KludgesService) => {
      service = kludgesService;
    }));

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should refresh treatments', () => {
      const request = spyOn<any>(service, 'send').and.returnValue(requestValue);
      service.refreshTreatment(JSON.parse(JSON.stringify(testVisitData)));
      expect(request).toHaveBeenCalled();
    });

    it('should rerun triage', () => {
      const request = spyOn<any>(service, 'send').and.returnValue(requestValue);
      service.rerunTriage(JSON.parse(JSON.stringify(testTriage)), 123);
      expect(request).toHaveBeenCalled();
    });

    it('should view final notes', () => {
      const request = spyOn<any>(service, 'show').and.returnValue(requestValue);
      service.viewFinalNotes(123);
      expect(request).toHaveBeenCalled();
    });

    it('should put vitals', () => {
      const request = spyOn<any>(service, 'send').and.returnValue(requestValue);
      service.putVitals(123, {});
      expect(request).toHaveBeenCalled();
    });

    it('should get payment info', () => {
      const request = spyOn<any>(service, 'show').and.returnValue(requestValue);
      service.getPaymentInfo(123);
      expect(request).toHaveBeenCalled();
    });

  }
));
