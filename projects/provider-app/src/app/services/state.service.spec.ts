import { inject } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';

import { StateService } from './state.service';


describe('StateService', generateSpecs({
    providers: [
      StateService
    ]
  },
  () => {
    it('should be created', inject([StateService], (service: StateService) => {
      expect(service).toBeTruthy();
    }));
  }
));
