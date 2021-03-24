import { PpAddDescriptionComponent } from './pp-add-description.component';
import { PopupsModule } from '../../popups.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { MockPaMdbWrapperComponent } from '../../../../../treatments/drug-treatment/drug-treatment.component.spec';

describe('PpAddDescriptionComponent', generateSpecs({
    componentType: PpAddDescriptionComponent,
    imports: [PopupsModule, DialogsTestModule],
    declarations: [ MockPaMdbWrapperComponent ]
  }, (context: TestContext<PpAddDescriptionComponent>) => {

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
