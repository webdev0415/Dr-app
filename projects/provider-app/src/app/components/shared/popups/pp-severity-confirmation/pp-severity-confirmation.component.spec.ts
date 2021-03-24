import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PopupsModule } from '../popups.module';

import { PpSeverityConfirmationComponent } from './pp-severity-confirmation.component';


describe('PpseverityconfirmationComponent', generateSpecs({
  componentType: PpSeverityConfirmationComponent,
  imports: [
    PopupsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
},
  (context: TestContext<PpSeverityConfirmationComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
  ));
