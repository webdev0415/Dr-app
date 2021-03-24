import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DateTime } from 'utils/dateTime';
import { SanitizerPipe } from '../../../utils/sanitizer.pipe';
import { PatientcardComponent } from './patientcard.component';
import { testSocialCard } from '../../../patient-core/test.constants';


describe('PatientcardComponent', generateSpecs({
    componentType: PatientcardComponent,
    imports: [
      DialogsTestModule
    ],
    declarations: [
      PatientcardComponent,
      SanitizerPipe
    ],
    providers: [
      DateTime
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<PatientcardComponent>) => {
    beforeEach(() => {
      context.component.socialCard = testSocialCard;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
