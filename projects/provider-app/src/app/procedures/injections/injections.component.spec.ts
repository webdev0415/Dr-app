import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { Injection } from '../interfaces/injection.interface';
import { InjectionOrderRowComponent } from '../injection-order-row/injection-order-row.component';
import { InjectionRowComponent } from '../injection-row/injection-row.component';
import { IvInjectionOrderComponent } from '../iv-injection-order/iv-injection-order.component';
import { IvInjectionComponent } from '../iv-injection/iv-injection.component';
import { IVInjection } from '../procedures.static';
import { SelectOptionsPipe } from '../select-options.pipe';
import { NOTIFICATIONS_PROVIDER, NotificationsProvider } from '../tokens/notifications-provider.token';
import { PATIENT_DATA_SERVICE, PatientDataService } from '../tokens/patient-data.token';
import { PROCEDURES_UPDATE_SERVICE, ProceduresUpdateService } from '../tokens/procedures-update.token';
import { USER_ROLE } from '../tokens/user-role.token';

import { InjectionsComponent } from './injections.component';


describe('InjectionsComponent', generateSpecs({
  beforeEachDetectChanges: false,
  componentType: InjectionsComponent,
  declarations: [InjectionsComponent, InjectionRowComponent, InjectionOrderRowComponent, SelectOptionsPipe, IvInjectionComponent, IvInjectionOrderComponent],
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
    },
    {
      provide: DialogService, useValue: {}
    },
    SelectOptionsPipe
  ],
}, ((context: TestContext<InjectionsComponent>) => {
  let component: InjectionsComponent;
  let fixture: ComponentFixture<InjectionsComponent>;
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
      // todo: @types/jasmine update error
      // @ts-ignore
      forms: ['Tablet'],
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
    }, IVInjection]);
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

  it('should validate injection order', async(() => {
    // @ts-ignore
    injections.next({ injections: [{ name: IVInjection.name, id: 123 }, { id: 124, name: 'injection 0' }] });
    fixture.detectChanges();
    const orderFormControl = (component.orderForm.get('orders') as FormArray).get('0');
    orderFormControl.patchValue({...orderFormControl.value, state: OrderStateEnum.ORDERED});
    expect(component.orderForm.invalid).toBeTruthy();
    orderFormControl.patchValue({...orderFormControl.value, dosage: '12'});
    expect(component.orderForm.invalid).toBeTruthy();
    orderFormControl.patchValue({...orderFormControl.value, route: 'intramuscular'});
    expect(component.orderForm.invalid).toBeFalsy();
  }));
})));
