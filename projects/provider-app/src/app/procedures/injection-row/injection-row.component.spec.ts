import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';


import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { SelectOptionsPipe } from '../select-options.pipe';
import { USER_ROLE } from '../tokens/user-role.token';

import { InjectionRowComponent } from './injection-row.component';

describe('InjectionRowComponent', generateSpecs({
  componentType: InjectionRowComponent,
  declarations: [InjectionRowComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: USER_ROLE, useValue: UserRolesEnum.PRACTITIONER },
    { provide: DialogService, useValue: jasmine.createSpyObj('DialogService', ['open']) },
    SelectOptionsPipe
  ],
  beforeEachDetectChanges: true
}, (context: TestContext<InjectionRowComponent>) => {
  let userRole: UserRolesEnum;
  let dialogServiceSpy: jasmine.SpyObj<DialogService>;
  let component: InjectionRowComponent;
  let fixture: ComponentFixture<InjectionRowComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}));
