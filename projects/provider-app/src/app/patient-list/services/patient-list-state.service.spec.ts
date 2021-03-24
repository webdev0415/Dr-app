import { inject } from '@angular/core/testing';

import { PatientListStateService } from './patient-list-state.service';
import { generateSpecs } from '@pa-tests/test-context';

describe('PatientListStateService', generateSpecs({
  componentType: PatientListStateService,
  imports: [],
  providers: [
    PatientListStateService
  ],
  beforeEachDetectChanges: false,
  beforeComponentFixtureCreated: false
},  () => {

  let service: PatientListStateService;

  beforeEach(inject([PatientListStateService], (serviceTemp: PatientListStateService) => {
    service = serviceTemp;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}));
