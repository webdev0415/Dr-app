import { FindingsEditableCardComponent } from './findings-editable-card.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { testPESystem } from '../../patient-core/test.constants';
import { clone } from 'ramda';
import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import SpyObj = jasmine.SpyObj;

describe('FindingsEditableCardComponent', generateSpecs({
    componentType: FindingsEditableCardComponent,
    imports: [
      FormsModule,
      BrowserAnimationsModule,
      DialogsTestModule,
      UserTestModule,
      StoreTestModule
    ],
    declarations: [
      FindingsEditableCardComponent
    ],
    beforeEachDetectChanges: false
  }, (context: TestContext<FindingsEditableCardComponent>) => {
  let component: FindingsEditableCardComponent;
  let store: SpyObj<Store>;

  beforeEach(() => {
    component = context.component;
    component.PESystem = clone(testPESystem);
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.PESystem = null;
    component.ngOnInit();
    expect(component.subsystemsMapping).toEqual({});
    component.PESystem = clone(testPESystem);
    component.ngOnInit();
    expect(component.subsystemsMapping).toEqual({test: ['testCode', 'testCode2'], 'Tympanic membrane': ['testCode1']});
  });

  it('should change exam result', () => {
    const testEvent = {
      findings: [
        {
          text: 'notEmptyText'
        }, {
          text: ''
        }
      ]
    };
    spyOn(store, 'dispatch');
    component.examResultChange(testEvent);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should return subSystem description', () => {
    expect(component.getSubSystemDescription(component.PESystem.descriptionsArray[0])).toEqual('TEST');
    expect(component.getSubSystemDescription(component.PESystem.descriptionsArray[1])).toEqual('TYMPANIC MEMBRANE');
  });
}));
