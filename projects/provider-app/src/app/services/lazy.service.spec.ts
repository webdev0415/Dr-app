import { async, inject } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';

import { of as ObservableOf } from 'rxjs';
import { Value } from '../../../../shared-models/src/public-api';

import { testPatientDataMeasurements } from '../static/test.constants';
import { LazyService } from './lazy.service';


describe('LazyService', generateSpecs({
    imports: [NotificationsTestModule],
    providers: [
      LazyService
    ]
  },
  () => {
    let service: LazyService;
    let spyFetch: jasmine.SpyObj<any>;

    beforeEach(inject([LazyService], (lazyService: LazyService) => {
      service = lazyService;

      const body = {
        blob: () => ObservableOf({}).toPromise()
      };
      // todo: @types/jasmine update error
      // @ts-ignore
      spyFetch = spyOn(window, 'fetch').and.returnValue(ObservableOf(body).toPromise());
    }));

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should lazy load measurements', async(() => {
      service.lazyLoadMeasurements(testPatientDataMeasurements).subscribe(() => expect(spyFetch).toHaveBeenCalled());
    }));

    it('should test no measurements', async(() => {
      service.lazyLoadMeasurements([{
        trustabilityScore: 123, measureType: 'TEMPERATURE', timestamp: '', value: {file: ''} as Value
      }]).subscribe(() => expect(spyFetch).toHaveBeenCalledTimes(0));
    }));

    it('should lazy load audits', async(() => {
      service.lazyLoadAudits([{s3: 'url'}]).subscribe(() => {
        expect(spyFetch).toHaveBeenCalled();
      });
    }));

    it('should test no audits', async(() => {
      service.lazyLoadAudits([{}]).subscribe(() => {
        expect(spyFetch).toHaveBeenCalledTimes(0);
      });
    }));

    it('should lazy load audits empty', async(() => {
      service.lazyLoadAudits([{s3: ''}]).subscribe(() => {
        expect(spyFetch).toHaveBeenCalledTimes(0);
      });
    }));
  }
));
