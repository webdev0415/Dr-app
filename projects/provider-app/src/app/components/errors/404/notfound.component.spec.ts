import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { NotfoundComponent } from './notfound.component';


describe('NotfoundComponent', generateSpecs({
    componentType: NotfoundComponent,
    declarations: [
      NotfoundComponent
    ]
  },
  (context: TestContext<NotfoundComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
