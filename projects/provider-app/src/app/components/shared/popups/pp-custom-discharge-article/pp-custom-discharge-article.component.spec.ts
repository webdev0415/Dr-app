import { PpCustomDischargeArticleComponent } from './pp-custom-discharge-article.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { PopupsModule } from '../popups.module';

describe('PpCustomDischargeArticleComponent', generateSpecs({
    componentType: PpCustomDischargeArticleComponent,
    imports: [
      PopupsModule,
      DialogsTestModule
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<PpCustomDischargeArticleComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));

