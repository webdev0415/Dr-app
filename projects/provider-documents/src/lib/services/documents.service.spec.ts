import { inject } from '@angular/core/testing';
import { generateSpecs } from 'tests/test-context';

// todo: @types/jasmine update error
// @ts-ignore
import { DocumentsService } from '../../../provider-documents/src/lib/services/documents.service';


describe('DocumentsGenerationService', generateSpecs({
    providers: [
      DocumentsService
    ]
  },
  () => {
    it('should be created', inject([DocumentsService], (service: DocumentsService) => {
      expect(service).toBeTruthy();
    }));
  }
));
