import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { EditableTextComponent } from './editable-text.component';


describe('EditableTextComponent', generateSpecs({
    componentType: EditableTextComponent,
    imports: [
      NavigationTestModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      EditableTextComponent
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<EditableTextComponent>) => {
    beforeEach(() => {
      context.debugComponent.currentPatient = {};
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
