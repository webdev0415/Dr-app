import { generateSpecs, TestContext } from 'tests/test-context';
import { DischargeNotesComponent } from '../../../../provider-documents/src/lib/discharge-notes/discharge-notes.component';
import { DocumentsModule } from '../../../../provider-documents/src/lib/documents.module';
import { testCompletedPatient } from 'static/test.constants';


describe('DischargeNotesComponent', generateSpecs({
    componentType: DischargeNotesComponent,
    imports: [
      DocumentsModule
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<DischargeNotesComponent>) => {
    beforeEach(() => {
      context.component.patient = testCompletedPatient;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
