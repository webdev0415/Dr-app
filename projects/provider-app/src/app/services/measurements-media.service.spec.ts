import { inject } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';

import { Observable, of } from 'rxjs';

import { MeasurementsMediaService } from './measurements-media.service';
import { KludgesService } from './kludges.service';
import { testAudit } from '../static/test.constants';
import { LazyService } from './lazy.service';
import { Audit } from '../common/models/data.model';

class MockKludgesService {
  getAuditList(): Observable<any> {
    return of({results: []});
  }
}

class MockLazyService {
  public lazyLoadAudits(results): Observable<Audit[]> {
    return of([]);
  }
}

describe('MeasurementsMediaService', generateSpecs({
    imports: [],
    providers: [
      MeasurementsMediaService,
      { provide: KludgesService, useClass: MockKludgesService },
      { provide: LazyService, useClass: MockLazyService }
    ]
  },
  () => {
    let measurementsMediaService: MeasurementsMediaService;

    beforeEach(inject([MeasurementsMediaService], (measurementsMediaServiceProvider: MeasurementsMediaService) => {
      measurementsMediaService = measurementsMediaServiceProvider;
    }));

    it('should create', () => {
      expect(measurementsMediaService).toBeTruthy();
    });

    it('should get audit images', () => {
      const audits = measurementsMediaService.getAuditImages(testAudit);
      expect(audits).toBeDefined();
    });

    it('should get empty audit images', () => {
      const audits = measurementsMediaService.getAuditImages(null);
      expect(audits).toEqual(null);
    });

    it('should get audit', () => {
      expect(measurementsMediaService.getAudit()).toEqual(jasmine.any(Observable));
    });

    it('should get audit list', () => {
      const audit = spyOn<any>(measurementsMediaService, 'getAuditList');
      measurementsMediaService.getAuditList(123);
      expect(audit).toHaveBeenCalled();
    });
  }
));
