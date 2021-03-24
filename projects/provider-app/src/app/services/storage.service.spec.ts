import { inject } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';

import { StorageService } from './storage.service';


describe('StorageService', generateSpecs({
    providers: [
      StorageService
    ]
  },
  () => {
    it('should be created', inject([StorageService], (service: StorageService) => {
      expect(service).toBeTruthy();
    }));
  }
));
