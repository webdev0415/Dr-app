import { inject } from '@angular/core/testing';

import { generateSpecs } from '@pa-tests/test-context';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { of } from 'rxjs';
import { PatientProfileService } from '../../../../patient-profile/src/lib/services/patient-profile.service';

import { PatientDataService } from './patient-data.service';
import { TreatmentsService } from 'treatments/treatments.service';
import { StateService } from 'services';
import { DocumentsService } from '../../../../provider-documents/src/lib/services/documents.service';
import { PatientDataApiService } from './patient-data-api.service';

describe('PatientDataApiService', generateSpecs({
  imports: [
    DialogsTestModule,
    UserTestModule,
    NavigationTestModule,
    NotificationsTestModule,
    StoreTestModule
  ],
  providers: [
    PatientDataService,
    { provide: TreatmentsService, useValue: {} },
    { provide: StateService, useValue: {} },
    { provide: DocumentsService, useValue: {} },
    { provide: PatientDataApiService, useValue: {} },
    { provide: PatientProfileService, useValue: { completeTelemedicineSession: (...args) => of(true) } }
  ]
}, () => {
  let patientDataService: PatientDataService;
  beforeEach(inject([PatientDataService,
  ], (service: PatientDataService,
  ) => {
    patientDataService = service;
  }));
  it('should be created', () => {
    expect(patientDataService).toBeTruthy();
  });
}));
