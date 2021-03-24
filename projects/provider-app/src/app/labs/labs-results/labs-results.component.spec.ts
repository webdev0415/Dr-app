import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { LabsResultsComponent } from './labs-results.component';
import { LabsService } from '../services/labs.service';
import { testCompletedPatient } from '../../static/test.constants';

describe('LabsResultsComponent', generateSpecs({
    componentType: LabsResultsComponent,
    declarations: [
      LabsResultsComponent
    ],
    providers: [
      {
        provide: LabsService, useValue: { businessLabs: [{ currentValue: false, labResult: true }] }
      }
    ],
    beforeEachDetectChanges: false
  },
(context: TestContext<LabsResultsComponent>) => {
  let component: LabsResultsComponent;

  beforeEach(() => {
    component = context.component;
    component.patient = testCompletedPatient;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.patient = null;
    component.ngOnInit();
    expect(component.patientId).toBeUndefined();
    component.patient = testCompletedPatient;
    component.ngOnInit();
    expect(component.patientId).toEqual(component.patient.patientInformation.patientId);
  });

  it('should return link', () => {
    component.patientId = component.patient.patientInformation.patientId;
    expect(component.getLink('test')).toEqual([
      '/patients',
      component.patient.patientInformation.patientId,
      'test'
    ]);
  });

  it('should change on changes', () => {
    component.ngOnChanges();
    expect(component.labs.length).toEqual(1);
  });
}));
