import { generateSpecs, TestContext } from 'tests/test-context';

import { FluShotComponent } from './flu-shot.component';
import { QuestionnaireService } from '../questionnaire.service';

xdescribe('FluShotComponent', generateSpecs({
    componentType: FluShotComponent,
    imports: [],
    declarations: [],
    providers: [{provide: QuestionnaireService, useValue: {}}]
  },
  (context: TestContext<FluShotComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
