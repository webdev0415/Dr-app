import { PaMdbWrapperComponent } from './pa-mdb-wrapper.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { FormsModule } from '@angular/forms';
import { MDBModule } from '../../../mdb.module';

describe('PaMdbSelectComponent', generateSpecs({
  componentType: PaMdbWrapperComponent,
  imports: [
    BrowserAnimationsModule,
    DialogsTestModule,
    FormsModule,
    MDBModule
  ],
  declarations: [
    PaMdbWrapperComponent
  ],
  beforeEachDetectChanges: false

}, (context: TestContext<PaMdbWrapperComponent>) => {
  beforeEach(() => {
    context.component.disabledRule = false;
    context.component.inputInstance = null;
    context.component.mdbInstance = null;
    context.detectChanges();
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
