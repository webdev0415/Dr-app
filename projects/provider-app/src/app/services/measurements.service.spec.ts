import { inject } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';

import { MeasurementsService } from './measurements.service';


describe('MeasurementsMediaService', generateSpecs({
    imports: [],
    providers: [MeasurementsService]
  },
  () => {
    let measurementsService: MeasurementsService;

    beforeEach(inject([MeasurementsService], (measurementsServiceProvider: MeasurementsService) => {
      measurementsService = measurementsServiceProvider;
    }));

    it('should create', () => {
      expect(measurementsService).toBeTruthy();
    });

  }
));
