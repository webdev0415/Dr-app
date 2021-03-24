import { inject } from '@angular/core/testing';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { Observable, of as ObservableOf } from 'rxjs';
import { testAudit, testPatientData, testPatientDataMeasurements, testSymptom } from 'static/test.constants';
import { LazyService } from './lazy.service';

import { OtherdataService } from './otherdata.service';


export class MockLazyService {

  constructor() { }

  public lazyLoadAudits(results): Promise<any> {
    return Promise.resolve(results);
  }
}


describe('OtherdataService', generateSpecs({
    imports: [
      NetworkTestModule
    ],
    providers: [
      OtherdataService,
      {
        provide: LazyService, useClass: MockLazyService
      },
    ]
  },
  () => {
    let otherService: OtherdataService;

    beforeEach(inject([OtherdataService], (service: OtherdataService) => {
      otherService = service;
    }));

    it('should be created', () => {
      expect(otherService).toBeTruthy();
    });

    it('should get triage value', () => {
      const triage = otherService.getTriageValue('SYMPT0003325', [testSymptom]);
      expect(triage).toBeDefined();
    });

    it('should get triage value empty', () => {
      const symptom = testSymptom;
      expect(otherService.getTriageValue('SYMPT0003324', [symptom])).toEqual('');
      symptom.values = [];
      expect(otherService.getTriageValue('SYMPT0003325', [symptom])).toEqual('');
      symptom.values = [[null, null, null]];
      expect(otherService.getTriageValue('SYMPT0003325', [symptom])).toEqual('');
    });

  }
));
