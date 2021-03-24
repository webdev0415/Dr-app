import { AsthmaRefillComponent } from './asthma-refill.component';
import { generateSpecs, TestContext } from 'tests/test-context';
import { DocumentsModule } from '../../../../provider-documents/src/lib/documents.module';
import { QuestionnaireService } from '../questionnaire.service';
import { PatientDataFacadeService } from '../../../../provider-app/src/app/patient-core/patient-data-facade.service';
import { DialogsTestModule } from 'tests/dialogs-test.module';

xdescribe('AsthmaRefillComponent', generateSpecs({
    componentType: AsthmaRefillComponent,
    imports: [
      DocumentsModule,
      DialogsTestModule
    ],
    providers: [
      QuestionnaireService,
      PatientDataFacadeService
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<AsthmaRefillComponent>) => {

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
