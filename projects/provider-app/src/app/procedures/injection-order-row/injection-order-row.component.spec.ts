import { CommonModule } from '@angular/common';
import { async, ComponentFixture } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OrderStateEnum } from '../../common/enums';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { SelectOptionsPipe } from '../select-options.pipe';

import { InjectionOrderRowComponent } from './injection-order-row.component';

describe('InjectionOrderRowComponent', generateSpecs({
  componentType: InjectionOrderRowComponent,
  declarations: [InjectionOrderRowComponent, SelectOptionsPipe],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  providers: [
    { provide: DialogService, useValue: jasmine.createSpyObj('DialogService', ['open']) },
    SelectOptionsPipe
  ],
  beforeEachDetectChanges: false
}, ((context: TestContext<InjectionOrderRowComponent>) => {
  let component: InjectionOrderRowComponent;
  let fixture: ComponentFixture<InjectionOrderRowComponent>;

  beforeEach(async(() => {
    component = context.component;
    fixture = context.fixture;
  }));

  beforeEach(() => {
    component.businessProcedure = { dosages: ['1ml', '2ml', '3ml'], name: 'Test Medication Order', dilutions: [], id: null, routes: [] };
    fixture.detectChanges();
    context.component.writeValue({ state: OrderStateEnum.NONE, toleratedWell: true, noDifficulty: true, name: 'Test Injection Order', dosage: null, route: null });
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
})));
