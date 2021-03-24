import { PpAddSymptomComponent } from './pp-add-symptom.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PopupsModule } from '../../popups.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';

describe('PpAddSymptomComponent', generateSpecs({
    componentType: PpAddSymptomComponent,
    imports: [PopupsModule, DialogsTestModule],
  }, (context: TestContext<PpAddSymptomComponent>) => {

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
