import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PopupsModule } from '../popups.module';

import { PpprefinalizeComponent } from './ppprefinalize.component';


describe('PpprefinalizeComponent', generateSpecs({
    componentType: PpprefinalizeComponent,
    imports: [
      PopupsModule,
      BrowserAnimationsModule
    ],
    providers: [
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} }
    ]
  },
  (context: TestContext<PpprefinalizeComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
