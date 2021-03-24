import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PopupsModule } from '../popups.module';

import { PpdrnotesComponent } from './ppdrnotes.component';
import {DataService} from '../../../../services';
import {of as ObservableOf} from 'rxjs';


class MockDataService {
  public getSummary() {
    return ObservableOf([]);
  }
}

describe('PpdrnotesComponent', generateSpecs({
    componentType: PpdrnotesComponent,
    imports: [
      PopupsModule,
      BrowserAnimationsModule,
    ],
    providers: [
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      {provide: DataService, useClass: MockDataService}
    ]
  },
  (context: TestContext<PpdrnotesComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
