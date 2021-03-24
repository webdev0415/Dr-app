import { SystemsPanelComponent } from './systems-panel.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { testPESystem } from '../../patient-core/test.constants';
import { clone } from 'ramda';

describe('SystemsPanelComponent', generateSpecs({
  componentType: SystemsPanelComponent,
  imports: [ ],
  declarations: [
    SystemsPanelComponent
  ],
  beforeEachDetectChanges: false
}, (context: TestContext<SystemsPanelComponent>) => {
  let component: SystemsPanelComponent;

  beforeEach(() => {
    component = context.component;
    component.system = clone(testPESystem);
    component.isNormal = false;
    component.hasMedia = true;
    component.media = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.buttonClick, 'emit');
    component.onClick(true);
    expect(component.buttonClick.emit).toHaveBeenCalledTimes(1);
  });

  it('should change on changes', () => {
    expect(component).toBeTruthy();
    component.system.examName = 'Male GU';
    component.system.descriptionsArray.forEach(item => item.normal = true);
    component.ngOnChanges(null);
    expect(component.isNormal).toBeTruthy();
    expect(component.media).toBeTruthy();
    component.system = null;
    component.hasMedia = false;
    component.ngOnChanges(null);
    expect(component.isNormal).toBeFalsy();
    expect(component.media).toBeFalsy();
    component.system = testPESystem;
  });
}));
