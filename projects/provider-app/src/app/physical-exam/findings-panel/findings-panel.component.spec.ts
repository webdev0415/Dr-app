import { FindingsPanelComponent } from './findings-panel.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { CustomSubSystem } from '../physical-exams.constants';
import { Store } from '@ngxs/store';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { testPESystem } from '../../patient-core/test.constants';
import { clone } from 'ramda';

describe('FindingsPanelComponent', generateSpecs({
    componentType: FindingsPanelComponent,
    imports: [
      FormsModule,
      BrowserAnimationsModule,
      DialogsTestModule,
      UserTestModule,
      StoreTestModule
    ],
    declarations: [
      FindingsPanelComponent
    ],
    beforeEachDetectChanges: false
  }, (context: TestContext<FindingsPanelComponent>) => {
  let component: FindingsPanelComponent;

  beforeEach(() => {
    component = context.component;
    component.system = clone(testPESystem);
    component.bodyPartIndex = 0;
    component.activeSubsystemIndex = 0;
    component.store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.system.examName = 'Eyes';
    expect(component.ngOnInit()).toBe();
    expect(component.bodyPart).toBeUndefined();
    component.system.examName = 'ENT';
    expect(component.ngOnInit()).toBe();
    expect(component.bodyPart).toEqual( 'left ear');
  });

  it('should return button text font size by length', () => {
    expect(component.getButtonTextFontSize('less than 15')).toEqual('1rem');
    expect(component.getButtonTextFontSize('more than 15 and less than 30')).toEqual('0.75rem');
    expect(component.getButtonTextFontSize('more than 30 and less than 35  ')).toEqual('0.68rem');
    expect(component.getButtonTextFontSize('longest message which more than 35  ')).toEqual('0.6rem');
  });

  it('should return subsystem button text', () => {
    const subSystem = { ...component.system.descriptionsArray[0] };
    expect(component.getSubsystemButtonText(subSystem)).toEqual(subSystem.buttonText);
    subSystem.buttonText = null;
    expect(component.getSubsystemButtonText(subSystem)).toEqual(subSystem.description);
  });

  it('should check on tm description subsystem', () => {
    const subSystem = { ...component.system.descriptionsArray[0] };
    subSystem.description = CustomSubSystem.TMDescription;
    expect(component.isTmDescriptionSubsystem(subSystem)).toBeTruthy();
    subSystem.description = 'test';
    expect(component.isTmDescriptionSubsystem(subSystem)).toBeFalsy();
  });

  it('should check is subsystem abnormal', () => {
    const subSystem = { ...component.system.descriptionsArray[0] };
    expect(component.subsystemAbnormal(subSystem)).toBeTruthy();
    subSystem.mod = [];
    expect(component.subsystemAbnormal(subSystem)).toBeNull();
  });

  it('should return active subsystem', () => {
    expect(component.activeSubsystem).toEqual(component.system.descriptionsArray[component.activeSubsystemIndex]);
  });

  it('should return specific findings by codes', () => {
    component.system.descriptionsArray[component.activeSubsystemIndex].mod[0].code = 'testCode';
    expect(component.getSpecificFindingsByCodes(['testCode']).length).toEqual(component.system.descriptionsArray[component.activeSubsystemIndex].mod.length);
    expect(component.getSpecificFindingsByCodes(['not code'])).toEqual([]);
  });

  it('should action on subSystem select', fakeAsync(() => {
    spyOn(component.store, 'dispatch');
    component.onSubsystemSelect(0);
    tick();
    component.onSubsystemSelect(0, true);
    tick();
    expect(component.store.dispatch).toHaveBeenCalled();
  }));

  it('should action on finding select', fakeAsync(() => {
    spyOn(component.store, 'dispatch');
    component.onFindingSelect(component.system.descriptionsArray[component.activeSubsystemIndex].mod[0]);
    tick();
    expect(component.store.dispatch).toHaveBeenCalled();
  }));

  it('should need to select', () => {
    component.system.descriptionsArray[component.activeSubsystemIndex].mod[0].defaultNormal = false;
    expect(component.needToToSelect(component.system.descriptionsArray[component.activeSubsystemIndex].mod[0], true)).toBeFalsy();
    component.system.descriptionsArray[component.activeSubsystemIndex].mod[0].code = 'edl-5-4n';
    expect(component.needToToSelect(component.system.descriptionsArray[component.activeSubsystemIndex].mod[0], false)).toBeTruthy();
  });
}));
