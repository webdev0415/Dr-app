import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { ContinueButtonComponent } from './continue-button.component';


describe('ContinueButtonComponent', generateSpecs({
    componentType: ContinueButtonComponent,
    imports: [
      NavigationTestModule,
      UserTestModule
    ],
    declarations: [
      ContinueButtonComponent
    ]
  },
  (context: TestContext<ContinueButtonComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
