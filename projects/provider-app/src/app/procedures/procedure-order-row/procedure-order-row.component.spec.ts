import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';


import { OrderStateEnum } from '../../common/enums';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { ProcedureOrderRowComponent } from './procedure-order-row.component';

@Component({selector: 'pa-mock-procedure-order', template: '', changeDetection: ChangeDetectionStrategy.OnPush})
class MockProcedureOrderRowComponent extends ProcedureOrderRowComponent<BusinessInjection, InjectionOrderItem> {
  constructor(fb: FormBuilder, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, cdRef, dialogService);
  }
}

describe('ProcedureOrderRowComponent', generateSpecs({
  componentType: MockProcedureOrderRowComponent,
  declarations: [MockProcedureOrderRowComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: DialogService, useValue: jasmine.createSpyObj('DialogService', ['open']) },
  ],
  beforeEachDetectChanges: false
}, (context: TestContext<MockProcedureOrderRowComponent>) => {
  let dialogServiceSpy: jasmine.SpyObj<DialogService>;
  let component: MockProcedureOrderRowComponent;
  let fixture: ComponentFixture<MockProcedureOrderRowComponent>;

  beforeEach(async(() => {
    component = context.component;
    fixture = context.fixture;
    dialogServiceSpy = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    component.businessProcedure = { dosages: ['1ml', '2ml', '3ml'], name: 'Test Injection Order', dilutions: [], id: null, routes: [] };
    fixture.detectChanges();
    context.component.writeValue({ state: OrderStateEnum.NONE, toleratedWell: true, noDifficulty: true, name: 'Test Injection Order', dosage: null, route: null });
    dialogServiceSpy.open.and.returnValue(of([true, { input: '12' }]));
  });

  it('should toggle valid and disabled state', async(() => {
    const dosageField = component.orderForm.get('dosage');
    expect(dosageField.disabled).toBeTruthy();
    component.toggleOrder(new UIEvent('click'));
    expect(component.orderForm.get('state').value).toEqual(OrderStateEnum.ORDERED);
    expect(dosageField.disabled).toBeFalsy();
    expect(dosageField.valid).toBeFalsy();
    component.toggleOrder(new UIEvent('click'));
    expect(dosageField.disabled).toBeTruthy();
    expect(dosageField.invalid).toBeFalsy();
  }));

  it('should register callbacks', () => {
    const onTouched = jasmine.createSpy();
    const onChanges = jasmine.createSpy();
    component.registerOnChange(onChanges);
    component.registerOnTouched(onTouched);
    component.orderForm.get('dosage').patchValue('12');
    fixture.detectChanges();
    expect(onChanges).toHaveBeenCalled();
  });

  it('should revert dosage value on dialog cancel', async(() => {
    dialogServiceSpy.open.and.returnValue(of(false));
    const dosage = component.orderForm.get('dosage');
    expect(dosage.value).toBeNull();
    dosage.patchValue('Other');
    expect(dosage.value).toBeNull();
  }));

  it('Should open dialogService on Other option selected', async(() => {
    context.component.orderForm.get('dosage').patchValue('Other');
    expect(dialogServiceSpy.open).toHaveBeenCalled();
    expect(component.orderForm.get('dosage').value).toEqual('12');
    expect(component.businessProcedure.dosages.includes('12')).toBeTruthy();
  }));
}));


