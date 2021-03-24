import { DialogsTestModule } from '@pa-tests/dialogs-test.module';

import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PpSelectBaseComponent } from './pp-select-base.component';
import { PopupsModule } from '../../popups.module';

describe('PpSelectBaseComponent', generateSpecs({
  componentType: PpSelectBaseComponent,
  imports: [PopupsModule, DialogsTestModule],
}, (context: TestContext<PpSelectBaseComponent>) => {

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
