import { inject } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';

import { CryptographicService } from './cryptographic.service';

describe('CryptographicService', generateSpecs({
    imports: [],
    providers: [CryptographicService]
  },
  () => {
    let service: CryptographicService;

    beforeEach(inject([CryptographicService], (cryptographicService: CryptographicService) => {
      service = cryptographicService;
    }));

    it('should create', () => {
      expect(service).toBeTruthy();
    });
  }
));
