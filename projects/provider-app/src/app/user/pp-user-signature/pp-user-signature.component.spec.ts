import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';

import { PpUserSignatureComponent } from './pp-user-signature.component';
import { UserModule } from '../user.module';

// tslint:disable-next-line:component-selector
@Component({selector: 'canvas-whiteboard', template: `MOCK CANVAS WHITEBOARD`})
class MockCanvasWhiteboardComponent {
  @Input() options;
  @Output() onBatchUpdate = new EventEmitter();
}

xdescribe('PpUserSignatureComponent', generateSpecs({
    componentType: PpUserSignatureComponent,
    imports: [
      UserModule,
      DialogsTestModule
    ],
    providers: [
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} }
    ],
    entryComponents: [PpUserSignatureComponent],
    declarations: [MockCanvasWhiteboardComponent]
  },
  (context: TestContext<PpUserSignatureComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
