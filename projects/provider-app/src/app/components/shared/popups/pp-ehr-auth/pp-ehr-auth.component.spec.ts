import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { PatientListService } from '../../../../patient-list/services/patient-list.service';
import { StateService } from '../../../../services';

import { PpEhrAuthComponent } from './pp-ehr-auth.component';
import { PopupsModule } from '../popups.module';
import createSpyObj = jasmine.createSpyObj;
import createSpy = jasmine.createSpy;

describe('PpEhrAuthComponent', generateSpecs({
  componentType: PpEhrAuthComponent,
  imports: [
    PopupsModule,
    DialogsTestModule,
    UserTestModule,
    NotificationsTestModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: { } },
    { provide: Store, useValue: createSpyObj(['dispatch']) },
    { provide: MAT_DIALOG_DATA, useValue: { locations: [] } },
    { provide: StateService, useValue: { app: { setEhrLocationId: () => null } } },
    { provide: PatientListService, useValue: { getPatientList: createSpy() } }
  ],
}, (context: TestContext<PpEhrAuthComponent>) => {

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
