import { ReturnToWorkComponent } from './return-to-work.component';
import { ReturnToSchoolComponent } from '../return-to-school/return-to-school.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { MockInlineDatePickerComponent } from '../return-to-school/return-to-school.component.spec';
import { MDBModule } from '../../mdb.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ReturnToWorkComponent', generateSpecs({
  componentType: ReturnToWorkComponent,
  declarations: [ReturnToWorkComponent, ReturnToSchoolComponent, MockInlineDatePickerComponent],
  imports: [MDBModule, FormsModule, ReactiveFormsModule],
  beforeEachDetectChanges: false
}, (context: TestContext<ReturnToWorkComponent>) => {
  let component: ReturnToWorkComponent;

  beforeEach(() => {
    component = context.component;
    context.detectChanges();
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
