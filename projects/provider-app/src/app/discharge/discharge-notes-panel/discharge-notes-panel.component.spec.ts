import { DischargeNotesPanelComponent } from './discharge-notes-panel.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { MDBModule } from '../../mdb.module';

describe('DischargeNotesPanelComponent', generateSpecs({
  componentType: DischargeNotesPanelComponent,
  declarations: [DischargeNotesPanelComponent],
  imports: [MDBModule],
  beforeEachDetectChanges: false
}, (context: TestContext<DischargeNotesPanelComponent>) => {
    let component: DischargeNotesPanelComponent;

    beforeEach(() => {
      component = context.component;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
