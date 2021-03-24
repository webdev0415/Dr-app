import { generateSpecs, TestContext } from 'tests/test-context';

import { QuestionnaireService } from '../questionnaire.service';
import { FluTreatmentComponent } from './flu-treatment.component';

xdescribe('FluTreatmentComponent', generateSpecs({
    componentType: FluTreatmentComponent,
    imports: [],
    declarations: [],
    providers: [{provide: QuestionnaireService, useValue: {}}]
  },
  (context: TestContext<FluTreatmentComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
