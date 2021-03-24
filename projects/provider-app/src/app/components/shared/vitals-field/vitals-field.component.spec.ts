import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { VitalsFieldComponent } from './vitals-field.component';
import { MeasurementsService } from 'services/measurements.service';
import { testCompletedPatient } from 'static/test.constants';
import { MDBModule } from 'mdb.module';
import { MockPaMdbWrapperComponent } from '../../../treatments/drug-treatment/drug-treatment.component.spec';
import { SymptomsService } from '../../../services';
import { MockSymptomService } from '../../app/workspace/patientspace/main/main.component.spec';


describe('VitalsFieldComponent', generateSpecs({
    componentType: VitalsFieldComponent,
    imports: [
      BrowserAnimationsModule,
      NetworkTestModule,
      DialogsTestModule,
      MDBModule,
      FormsModule
    ],
    declarations: [
      VitalsFieldComponent,
      MockPaMdbWrapperComponent
    ],
    providers: [
      MeasurementsService,
      { provide: SymptomsService, useClass: MockSymptomService }
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<VitalsFieldComponent>) => {
    beforeEach(() => {
      const component = context.component;
      component.value = ['10', '20'];
      component.name = 'bp';
      component.patient = testCompletedPatient;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
