import { inject } from '@angular/core/testing';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs } from '@pa-tests/test-context';

import { PatientListService } from './patient-list.service';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';

describe('PatientListService', generateSpecs({
  imports: [
    NetworkTestModule,
    UserTestModule,
    NavigationTestModule
  ],
  providers: [
    PatientListService
  ],
  beforeEachDetectChanges: false,
  beforeComponentFixtureCreated: false
},  () => {
  let service: PatientListService;

  beforeEach(inject([PatientListService], (serviceTemp: PatientListService) => {
    service = serviceTemp;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}));
