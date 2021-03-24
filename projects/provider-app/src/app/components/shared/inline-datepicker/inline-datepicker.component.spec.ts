import { InlineDatepickerComponent } from './inline-datepicker.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { MDBModule } from '../../../mdb.module';
import { FormsModule } from '@angular/forms';

describe('InlineDatepickerComponent', generateSpecs({
  componentType: InlineDatepickerComponent,
  declarations: [InlineDatepickerComponent],
  imports: [MDBModule, FormsModule],
  beforeEachDetectChanges: false
}, (context: TestContext<InlineDatepickerComponent>) => {
  let component: InlineDatepickerComponent;

  beforeEach(() => {
    component = context.component;
    component.date = new Date().toLocaleDateString();
    context.detectChanges();
  });

}));
