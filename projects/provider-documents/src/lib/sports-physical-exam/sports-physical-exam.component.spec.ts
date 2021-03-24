import { generateSpecs, TestContext } from 'tests/test-context';

import { SportsPhysicalExamComponent } from '../../../../provider-documents/src/lib/sports-physical-exam/sports-physical-exam.component';
import { DocumentsModule } from '../../../../provider-documents/src/lib/documents.module';
import { testPatientDataMeasurements, testVisitData } from 'static/test.constants';
import { Vitals } from 'common/models/vitals.model';
import { defaultSportsExam } from 'static/patient.constants';
import { testPatientProfile } from '../../../../patient-profile/src/lib/test.constants';


describe('SportsPhysicalExamComponent', generateSpecs({
    componentType: SportsPhysicalExamComponent,
    imports: [
      DocumentsModule
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<SportsPhysicalExamComponent>) => {
    let component: SportsPhysicalExamComponent;

    beforeEach(() => {
      component = context.component;
      component.sportsExam = defaultSportsExam;
      component.patientAdditionalInformation = testVisitData.additionalInformation;
      component.patientInformation = testPatientProfile;
      component.vitals = new Vitals(testPatientDataMeasurements);
      context.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
);
