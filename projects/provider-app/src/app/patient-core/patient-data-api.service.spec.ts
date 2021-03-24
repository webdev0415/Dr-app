import { inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { generateSpecs } from '@pa-tests/test-context';

import { PatientDataApiService } from './patient-data-api.service';

describe('PatientDataApiService', generateSpecs({
  imports: [HttpClientTestingModule],
  providers: [PatientDataApiService]
}, () => {
  let patientDataApiService: PatientDataApiService;
  beforeEach(inject([PatientDataApiService,
  ], (service: PatientDataApiService,
  ) => {
    patientDataApiService = service;
  }));
  it('should be created', () => {
    expect(patientDataApiService).toBeTruthy();
  });
}));
