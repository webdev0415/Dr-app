import { generateSpecs, TestContext } from 'tests/test-context';

import { AuthorizationToWorkSchoolComponent } from '../../../provider-documents/src/lib/authorization-to-work-school/authorization-to-work-school.component';
import { DocumentsModule } from '../../../provider-documents/src/lib/documents.module';
import { defaultDischargeNotes } from 'static/patient.constants';
import { initialTreatments } from 'treatments/static/static.treatments';
import { MockAuthorizationNotes } from '../../../provider-documents/src/lib/final-notes/final-notes.component.spec';


describe('AuthorizationToWorkSchoolComponent', generateSpecs({
    componentType: AuthorizationToWorkSchoolComponent,
    imports: [
      DocumentsModule
    ],
  declarations: [
    MockAuthorizationNotes
  ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<AuthorizationToWorkSchoolComponent>) => {
    beforeEach(() => {
      context.component.dischargeNotes = defaultDischargeNotes;
      context.component.RTWSInfo = initialTreatments.returnToWorkSchool;
      context.component.RTWSInfo.returnTo = 'WORK';
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
