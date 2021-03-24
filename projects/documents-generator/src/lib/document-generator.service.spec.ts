import { TestBed } from '@angular/core/testing';

import { DocumentGeneratorService } from './document-generator.service';

describe('DocumentGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentGeneratorService = TestBed.inject(DocumentGeneratorService);
    expect(service).toBeTruthy();
  });
});
