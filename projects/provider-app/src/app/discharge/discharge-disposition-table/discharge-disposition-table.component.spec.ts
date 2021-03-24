import { DischargeDispositionTableComponent } from './discharge-disposition-table.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { MDBModule } from '../../mdb.module';
import { initialTreatments } from '../../treatments/static/static.treatments';
import { TreatmentsService } from '../../treatments/treatments.service';

class MockTreatmentsService {
  selectSnapshot() {
    return initialTreatments;
  }
}

describe('DischargeDispositionTableComponent', generateSpecs({
    componentType: DischargeDispositionTableComponent,
    declarations: [DischargeDispositionTableComponent],
    imports: [MDBModule],
    providers: [
      {
        provide: TreatmentsService, useClass: MockTreatmentsService
      }
    ],
    beforeEachDetectChanges: false
  }, (context: TestContext<DischargeDispositionTableComponent>) => {
    let component: DischargeDispositionTableComponent;

    beforeEach(() => {
      component = context.component;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
