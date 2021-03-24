import { generateSpecs } from '@pa-tests/test-context';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { inject } from '@angular/core/testing';
import { StateService } from '../../services';
import { UserService } from '../../user/user.service';
import { PatientListApiService } from './patient-list-api.service';

describe('PatientListApiService', generateSpecs({
  imports: [
    NetworkTestModule,
  ],
  providers: [
    PatientListApiService,
    { provide: StateService, useValue: { app: { getEhrLocationId: () => 'location' } } },
    { provide: UserService, useValue: { isPICModeBusiness: false } }
  ],
  beforeEachDetectChanges: false,
  beforeComponentFixtureCreated: false
},  () => {
  let service: PatientListApiService;

  beforeEach(inject([PatientListApiService], (serviceTemp: PatientListApiService) => {
    service = serviceTemp;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}));
