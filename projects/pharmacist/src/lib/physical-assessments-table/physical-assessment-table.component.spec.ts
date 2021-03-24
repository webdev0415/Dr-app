import { generateSpecs, TestContext } from 'tests/test-context';

import { PhysicalAssessmentTableComponent } from './physical-assessment-table.component';
import { PatientDataFacadeService } from '../../../../provider-app/src/app/patient-core/patient-data-facade.service';

xdescribe('PhysicalAssessmentTableComponent', generateSpecs({
    componentType: PhysicalAssessmentTableComponent,
    imports: [],
    declarations: [],
    providers: [{provide: PatientDataFacadeService, useValue: {}}]
  },
  (context: TestContext<PhysicalAssessmentTableComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
