import { SubsystemResultsEditableComponent } from './subsystem-results-editable.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { testPESystem } from '../../patient-core/test.constants';
import { clone } from 'ramda';

describe('SubsystemResultsEditableComponent', generateSpecs({
  componentType: SubsystemResultsEditableComponent,
  imports: [ ],
  declarations: [
    SubsystemResultsEditableComponent
  ],
  beforeEachDetectChanges: false
}, (context: TestContext<SubsystemResultsEditableComponent>) => {
  let component: SubsystemResultsEditableComponent;

  beforeEach(() => {
    component = context.component;
    component.PESubsystem = clone(testPESystem.descriptionsArray[1]);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on blur', () => {
    spyOn(component.examResultChange, 'emit');
    const ev = {
      srcElement: {
        childNodes: [{ id: 1, textContent: 'text' }]
      }
    };
    component.onBlur(ev);
    expect(component.examResultChange.emit).toHaveBeenCalledTimes(1);
  });

  it('should change on modal change', () => {
    component.onModelChange([{ key: 'testKey1', value: ['test'] }]);
    component.onModelChange([{ key: 'test', value: ['test'] }]);
  });
}));
