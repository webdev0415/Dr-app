import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BehaviorSubject, Observable, of } from 'rxjs';


import { AvatarIconsEnum, OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { Injection } from '../interfaces/injection.interface';
import { NOTIFICATIONS_PROVIDER, NotificationsProvider } from '../tokens/notifications-provider.token';
import { PATIENT_DATA_SERVICE, PatientDataService } from '../tokens/patient-data.token';
import { PROCEDURES_UPDATE_SERVICE, ProceduresUpdateService } from '../tokens/procedures-update.token';
import { USER_ROLE } from '../tokens/user-role.token';

import { BaseProceduresComponent } from './base-procedures.component';

@Component({ selector: 'pa-mock-base-procedures', template: '', changeDetection: ChangeDetectionStrategy.OnPush })
class MockBaseProceduresComponent extends BaseProceduresComponent<InjectionOrderItem, Injection, BusinessInjection, 'injections'> {
  protected readonly procedureType = 'injections';
  constructor(
    @Inject(PROCEDURES_UPDATE_SERVICE) proceduresService,
    @Inject(PATIENT_DATA_SERVICE) patientDataService,
    @Inject(USER_ROLE) userRole,
    @Inject(NOTIFICATIONS_PROVIDER) notificationsService,
    fb: FormBuilder,
    cdRef: ChangeDetectorRef
  ) {
    super(proceduresService, patientDataService, userRole, notificationsService, fb, cdRef);
  }

  protected getBusinessProcedures(): BusinessInjection[] {
    return this.proceduresService.getBusinessInjections();
  }
}

describe('BaseProceduresComponent', generateSpecs({
  beforeEachDetectChanges: false,
  componentType: MockBaseProceduresComponent,
  declarations: [MockBaseProceduresComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: PROCEDURES_UPDATE_SERVICE,
      useValue: jasmine.createSpyObj('ProceduresService', ['order', 'update', 'getBusinessInjections'])
    },
    {
      provide: PATIENT_DATA_SERVICE, useValue: jasmine.createSpyObj('PatientDataService', ['getPatient', 'updatePatient'])
    },
    {
      provide: USER_ROLE, useValue: UserRolesEnum.PRACTITIONER
    },
    {
      provide: NOTIFICATIONS_PROVIDER, useValue: jasmine.createSpyObj('NotificationsProvider', ['success', 'error'])
    }
  ]
}, ((context: TestContext<MockBaseProceduresComponent>) => {
  let component: MockBaseProceduresComponent;
  let fixture: ComponentFixture<MockBaseProceduresComponent>;
  let proceduresService: jasmine.SpyObj<ProceduresUpdateService<InjectionOrderItem, Injection>>;
  let patientDataService: jasmine.SpyObj<PatientDataService>;
  let notificationsService: jasmine.SpyObj<NotificationsProvider>;
  const injections = new BehaviorSubject<{injections: Injection[]}>({injections: []});

  beforeEach(async(() => {
    component = context.component;
    fixture = context.fixture;
    notificationsService = TestBed.get(NOTIFICATIONS_PROVIDER);

    patientDataService = TestBed.get(PATIENT_DATA_SERVICE);
    // todo: @types/jasmine update error
    // @ts-ignore
    patientDataService.getPatient.and.returnValue(injections.asObservable());
    // todo: @types/jasmine update error
    // @ts-ignore
    patientDataService.updatePatient.and.callFake((data) => injections.next(data));

    proceduresService = TestBed.get(PROCEDURES_UPDATE_SERVICE);
    proceduresService.getBusinessInjections.and.returnValue([{
      id: 0,
      name: 'injection 0',
      dosages: ['1', '2', '3'],
      dilutions: [],
      routes: ['intramuscular']
    }, {
      id: 1,
      name: 'injection 1',
      dosages: ['1', '2', '3'],
      dilutions: [],
      routes: ['intramuscular']
    }, {
      id: 2,
      name: 'injection 2',
      dosages: ['10', '20', '30'],
      dilutions: [],
      routes: ['intravenous']
    }]);
    proceduresService.update.and.returnValue(of('ok'));
    proceduresService.order.and.callFake((procedure, data: InjectionOrderItem[]): Observable<Injection[]> => {
      return of(data.map((item, index) => {
        return {
          ...item,
          diluent: '',
          needleSize: '',
          concentration: '',
          orderedBy: null,
          givenBy: null,
          brandName: '',
          NDC: '',
          lotNumber: '',
          timeWaited: null,
          expiration: '',
          toleratedWell: true,
          noDifficulty: true,
          complications: '',
          id: index
        };
      }));
    });
    injections.next({injections: []});
    fixture.detectChanges();
  }));

  it('should order procedures', async(() => {
    let orderFormControl = (component.orderForm.get('orders') as FormArray).get('0');
    orderFormControl.patchValue({...orderFormControl.value, state: OrderStateEnum.ORDERED});
    expect(component.orderForm.invalid).toBeTruthy();
    orderFormControl.patchValue({...orderFormControl.value, dosage: '12', route: 'oral'});
    expect(component.orderForm.invalid).toBeFalsy();
    expect(component.getDisabledBottomButtons().save).toBeFalsy();
    component.onClickBottomButton('save');
    expect(proceduresService.order).toHaveBeenCalled();
    expect(component.orderForm.get('procedures').value.length).toEqual(1);
    expect(component.orderForm.get('procedures').pristine).toBeTruthy();
    expect(component.orderForm.get('orders').value.length).toEqual(2);
    expect(component.orderForm.get('orders').pristine).toBeTruthy();
    expect(component.getDisabledBottomButtons().save).toBeTruthy();
    orderFormControl = (component.orderForm.get('orders') as FormArray).get('0');
    orderFormControl.patchValue({...orderFormControl.value, state: OrderStateEnum.ORDERED, dosage: '12', route: 'oral'});
    const orderedProcedureFormControl = (component.orderForm.get('procedures') as FormArray).get('0');
    orderedProcedureFormControl.patchValue({...orderedProcedureFormControl.value, state: OrderStateEnum.CANCELLED});
    expect(component.getDisabledBottomButtons().save).toBeFalsy();
  }));

  it('should sort patient\'s procedures', () => {
    // @ts-ignore
    injections.next({ injections: [{ state: OrderStateEnum.CANCELLED, id: 0, name: 'injection 0' }, { state: OrderStateEnum.ORDERED, id: 1, name: 'injection 1' }, { state: OrderStateEnum.COMPLETED, id: 2, name: 'injection 2' }] as Injection[] });
    fixture.detectChanges();
    const procedures: Injection[] = component.orderForm.get('procedures').value;
    expect(procedures.findIndex(item => item.id === 0)).toEqual(2);
    expect(procedures.findIndex(item => item.id === 1)).toEqual(0);
    expect(procedures.findIndex(item => item.id === 2)).toEqual(1);
  });

  it('should display avatar icon', () => {
    expect(component.avatarIcon).toEqual(AvatarIconsEnum.PRACTITIONER);
    component.userRole = UserRolesEnum.OFFICE_CLERK;
    expect(component.avatarIcon).toEqual(AvatarIconsEnum.CLERK_OR_OM);
    expect(component.getShownBottomButtons().save).toBeTruthy();
  });
})));
