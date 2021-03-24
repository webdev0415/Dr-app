import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { GiCocktailOrderComponent } from '../gi-cocktail-order/gi-cocktail-order.component';
import { GiCocktailComponent } from '../gi-cocktail/gi-cocktail.component';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';
import { Medication } from '../interfaces/medication.interface';
import { MedicationOrderRowComponent } from '../medication-order-row/medication-order-row.component';
import { MedicationRowComponent } from '../medication-row/medication-row.component';
import { GICocktail } from '../procedures.static';
import { SelectOptionsPipe } from '../select-options.pipe';
import { NOTIFICATIONS_PROVIDER, NotificationsProvider } from '../tokens/notifications-provider.token';
import { PATIENT_DATA_SERVICE, PatientDataService } from '../tokens/patient-data.token';
import { PROCEDURES_UPDATE_SERVICE, ProceduresUpdateService } from '../tokens/procedures-update.token';
import { USER_ROLE } from '../tokens/user-role.token';

import { MedicationsComponent } from './medications.component';


describe('MedicationsComponent', generateSpecs({
  beforeEachDetectChanges: false,
  componentType: MedicationsComponent,
  declarations: [MedicationsComponent, MedicationRowComponent, MedicationOrderRowComponent, SelectOptionsPipe, GiCocktailComponent, GiCocktailOrderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: PROCEDURES_UPDATE_SERVICE,
      useValue: jasmine.createSpyObj('ProceduresService', ['order', 'update', 'getBusinessMedications'])
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
}, ((context: TestContext<MedicationsComponent>) => {
  let component: MedicationsComponent;
  let fixture: ComponentFixture<MedicationsComponent>;
  let proceduresService: jasmine.SpyObj<ProceduresUpdateService<MedicationOrderItem, Medication>>;
  let patientDataService: jasmine.SpyObj<PatientDataService>;
  let notificationsService: jasmine.SpyObj<NotificationsProvider>;
  const medications = new BehaviorSubject<{medications: Medication[]}>({medications: []});

  beforeEach(async(() => {
    component = context.component;
    fixture = context.fixture;
    notificationsService = TestBed.get(NOTIFICATIONS_PROVIDER);

    patientDataService = TestBed.get(PATIENT_DATA_SERVICE);
    // todo: @types/jasmine update error
    // @ts-ignore
    patientDataService.getPatient.and.returnValue(medications.asObservable());
    // todo: @types/jasmine update error
    // @ts-ignore
    patientDataService.updatePatient.and.callFake((data) => medications.next(data));

    proceduresService = TestBed.get(PROCEDURES_UPDATE_SERVICE);
    proceduresService.getBusinessMedications.and.returnValue([{
      id: 0,
      name: 'medication 0',
      dosages: ['1', '2', '3'],
      forms: ['Tablet'],
      routes: ['intramuscular']
    }, {
      id: 1,
      name: 'medication 1',
      dosages: ['1', '2', '3'],
      // todo: @types/jasmine update error
      // @ts-ignore
      dilutions: [],
      routes: ['intramuscular']
    }, {
      id: 2,
      name: 'medication 2',
      dosages: ['10', '20', '30'],
      // todo: @types/jasmine update error
      // @ts-ignore
      dilutions: [],
      routes: ['intravenous']
    }, GICocktail]);
    proceduresService.update.and.returnValue(of('ok'));
    proceduresService.order.and.callFake((procedure, data: MedicationOrderItem[]): Observable<Medication[]> => {
      return of(data.map((item, index) => {
        return {
          ...item,
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
    medications.next({medications: []});
    fixture.detectChanges();
  }));

  it('should validate medication order', async(() => {
    // @ts-ignore
    medications.next({ medications: [{ id: 123, name: GICocktail.name }, { id: 124, name: 'medication 0' }] });
    fixture.detectChanges();
    const orderFormControl = (component.orderForm.get('orders') as FormArray).get('0');
    orderFormControl.patchValue({...orderFormControl.value, state: OrderStateEnum.ORDERED});
    expect(component.orderForm.invalid).toBeTruthy();
    orderFormControl.patchValue({...orderFormControl.value, dosage: '12', route: 'oral'});
    expect(component.orderForm.invalid).toBeTruthy();
    orderFormControl.patchValue({...orderFormControl.value, form: 'tablet'});
    expect(component.orderForm.invalid).toBeFalsy();
  }));
})));
