import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';

import { Observable, of as ObservableOf } from 'rxjs';


import { PpSearchPatientsComponent } from './pp-search-patients.component';
import { PopupsModule } from '../../popups.module';
import { DataService, StateService } from 'services';
import { PatientListService } from '../../../../../patient-list/services/patient-list.service';

class MockDataService {
  constructor() {}
  public searchCompletedPatients(payload) {
    return ObservableOf([]);
  }
  public getCompletedPatientNotesPDF(sessionKey): Observable<any> {
    return ObservableOf();
  }
}

describe('PpSearchPatientsComponent', generateSpecs({
  componentType: PpSearchPatientsComponent,
  imports: [PopupsModule, DialogsTestModule],
  providers: [
    { provide: DataService, useClass: MockDataService },
    { provide: StateService, useValue: jasmine.createSpyObj('StateService', ['app'])},
    { provide: PatientListService, useValue: jasmine.createSpyObj('PatientListService', ['searchCompletedPatients'])},
  ],
}, (context: TestContext<PpSearchPatientsComponent>) => {

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
