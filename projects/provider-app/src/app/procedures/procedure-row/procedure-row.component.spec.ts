import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { Injection } from '../interfaces/injection.interface';
import { SelectOptionsPipe } from '../select-options.pipe';
import { USER_ROLE } from '../tokens/user-role.token';

import { ProcedureRowComponent } from './procedure-row.component';

@Component({ selector: 'pa-mock-procedure-row', template: '', changeDetection: ChangeDetectionStrategy.OnPush })
class MockProcedureRowComponent extends ProcedureRowComponent<Injection, BusinessInjection> {
  constructor(fb: FormBuilder, @Inject(USER_ROLE) userRole: UserRolesEnum, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, userRole, cdRef, dialogService);
  }
}

describe('ProcedureRowComponent', generateSpecs({
  componentType: MockProcedureRowComponent,
  declarations: [MockProcedureRowComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: USER_ROLE, useValue: UserRolesEnum.PRACTITIONER },
    { provide: DialogService, useValue: jasmine.createSpyObj('DialogService', ['open']) },
    SelectOptionsPipe
  ],
  beforeEachDetectChanges: true
}, (context: TestContext<MockProcedureRowComponent>) => {
  let userRole: UserRolesEnum;
  let dialogServiceSpy: jasmine.SpyObj<DialogService>;
  let component: MockProcedureRowComponent;
  let fixture: ComponentFixture<MockProcedureRowComponent>;

  beforeEach(async(() => {
    component = context.component;
    fixture = context.fixture;
    userRole = TestBed.get(USER_ROLE);
    dialogServiceSpy = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    context.component.writeValue({ dosage: null, state: OrderStateEnum.ORDERED, noDifficulty: true, toleratedWell: true, complications: '' });
    dialogServiceSpy.open.and.returnValue(of([true, { input: '12' }]));
    component.businessProcedure = { dosages: ['1ml', '2ml', '3ml'], name: 'Test', dilutions: [], id: null, routes: [] };
  });

  it('Should open dialogService on Other option selected', async(() => {
    context.component.procedureForm.get('dosage').patchValue('Other');
    expect(dialogServiceSpy.open).toHaveBeenCalled();
    expect(component.procedureForm.get('dosage').value).toEqual('12');
    expect(component.businessProcedure.dosages.includes('12')).toBeTruthy();
  }));

  it('should disable form', async(() => {
    component.procedureForm.reset({ ...component.procedureForm.value, state: OrderStateEnum.COMPLETED });
    expect(component.procedureForm.disabled).toBeTruthy();
  }));

  it('should assign required validator to complicated field', async(() => {
    const state = component.procedureForm.get('state');
    expect(state.dirty).toBeFalsy();
    const complications = component.procedureForm.get('complications');
    expect(complications.valid).toBeTruthy();
    component.orderStateChange(OrderStateEnum.COMPLETED);
    expect(state.dirty).toBeTruthy();
    expect(complications.valid).toBeTruthy();
    component.procedureForm.get('toleratedWell').patchValue(false);
    fixture.detectChanges();
    expect(complications.valid).toBeFalsy();
    component.orderStateChange(OrderStateEnum.ORDERED);
    expect(state.dirty).toBeFalsy();
    expect(complications.valid).toBeTruthy();
  }));

  it('should disable dosage fields for MA user', async(() => {
    component.userRole = UserRolesEnum.OPERATIONS_MANAGER;
    fixture.detectChanges();
    component.orderStateChange(OrderStateEnum.CANCELLED);
    expect(component.procedureForm.get('dosage').disabled).toBeTruthy();
  }));

  it('should revert dosage value on dialog cancel', async(() => {
    dialogServiceSpy.open.and.returnValue(of(false));
    const dosage = component.procedureForm.get('dosage');
    expect(dosage.value).toBeNull();
    dosage.patchValue('Other');
    expect(dosage.value).toBeNull();
  }));

  it('should register callbacks', () => {
    const onTouched = jasmine.createSpy();
    const onChanges = jasmine.createSpy();
    component.registerOnChange(onChanges);
    component.registerOnTouched(onTouched);
    component.procedureForm.get('dosage').patchValue('12');
    fixture.detectChanges();
    expect(onChanges).toHaveBeenCalled();
  });
}));
