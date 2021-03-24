import { FormsModule } from '@angular/forms';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { ExamPanelComponent } from './exampanel.component';
import { NgxsModule, Store } from '@ngxs/store';
import { PhysicalExamPanelState } from '../stores/physical-exam-panel/physical-exam-panel.state';
import { inject } from '@angular/core/testing';


describe('ExamPanelComponent', generateSpecs({
    componentType: ExamPanelComponent,
    imports: [
      FormsModule,
      NgxsModule.forRoot([PhysicalExamPanelState])
    ],
    declarations: [
      ExamPanelComponent
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<ExamPanelComponent>) => {
      beforeEach(inject([Store], (store: Store) => {
        context.component.store = store;
        context.detectChanges();
      }));

      it('should create', () => {
        expect(context.component).toBeTruthy();
      });
  }
));
