import { PeNormalButtonComponent } from './pe-normal-button.component';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { StoreTestModule } from '../../tests/ngxs-store-test.module';
import { MDBModule } from 'mdb.module';
import { StateService } from '../../services';
import { of } from 'rxjs';
import { PhysicalExamsType } from '../../common/types/physical-exams.type';
import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { testPESystem } from '../../patient-core/test.constants';
import { clone } from 'ramda';
import SpyObj = jasmine.SpyObj;

class MockStateService {
  public get app() {
    return {
      examPanel: {
        toggle: (): void => {},
        open: (item: PhysicalExamsType): void => {}
      }
    };
  }
}

describe('PeNormalButtonComponent', generateSpecs({
  componentType: PeNormalButtonComponent,
  imports: [
    StoreTestModule,
    MDBModule
  ],
  providers: [
    { provide: StateService, useClass: MockStateService }
  ],
  declarations: [PeNormalButtonComponent],
  beforeEachDetectChanges: false
}, (context: TestContext<PeNormalButtonComponent>) => {
  let component: PeNormalButtonComponent;
  let store: SpyObj<Store>;

  beforeEach(() => {
    store = TestBed.get(Store);
    const testFinding = clone(testPESystem.descriptionsArray[0].mod[0]);
    testFinding.defaultNormal = true;
    spyOn(store, 'select').and.returnValue(of([{finding: testFinding, system: 'systemTest', subsystem: 'subSystemTest'}]));
    spyOn(store, 'dispatch').and.returnValue(of(null));
    component = context.component;
    component.bodyPart = 'left sinus';
    context.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    spyOn(component.isNormal, 'next');
    component.ngOnInit();
    expect(store.select).toHaveBeenCalled();
    expect(component.isNormal.next).toHaveBeenCalled();
  });

  it('should change on normal button click', () => {
    component.isNormal.next(false);
    expect(component.onNormalButtonClick()).toBe();
    component.isNormal.next(true);
    expect(component.onNormalButtonClick()).toBe();
    expect(store.select).toHaveBeenCalledTimes(5);
    expect(store.dispatch).toHaveBeenCalledTimes(3);
  });

  it('should destroy', () => {
    component.ngOnDestroy();
  });

  it('should change on abnormal button click', () => {
    const abnormalClickSpy = spyOn(component.abnormalClick, 'emit');
    component.onAbnormalButtonClick();
    component.onAbnormalButtonClick();
    component.abnormalClick.subscribe();
    component.bodyPart = 'skin exam';
    component.onAbnormalButtonClick();
    expect(abnormalClickSpy).toHaveBeenCalledTimes(1);
  });
}));
