import { FormsModule } from '@angular/forms';

import { DischargeTreatmentComponent } from './discharge-treatment.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { MDBModule } from '../../mdb.module';
import { TreatmentsModule } from '../../treatments/treatments.module';

import { defaultPVDischarge } from '../../treatments/static/static.treatments';


describe('DischargeTreatmentComponent', generateSpecs({
    componentType: DischargeTreatmentComponent,
    imports: [
      MDBModule,
      FormsModule,
      TreatmentsModule.forRoot()
    ],
    beforeEachDetectChanges: false,
    noErrorsSchema: true,
  },
  (context: TestContext<DischargeTreatmentComponent>) => {
    let component: DischargeTreatmentComponent;

    beforeEach(() => {
      component = context.component;
      component.discharge = defaultPVDischarge;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
