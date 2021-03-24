import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { clone } from 'ramda';

import { of } from 'rxjs';


import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { IVInjection } from '../procedures.static';
import { SelectOptionsPipe } from '../select-options.pipe';
import { USER_ROLE } from '../tokens/user-role.token';

import { IvInjectionComponent } from './iv-injection.component';

xdescribe('IvInjectionComponent', () => {
  let component: IvInjectionComponent;
  let fixture: ComponentFixture<IvInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('IvInjectionComponent', generateSpecs({
  componentType: IvInjectionComponent,
  declarations: [IvInjectionComponent, SelectOptionsPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: USER_ROLE, useValue: UserRolesEnum.PRACTITIONER },
    { provide: DialogService, useValue: jasmine.createSpyObj('DialogService', ['open']) },
    SelectOptionsPipe
  ],
  beforeEachDetectChanges: true
}, (context: TestContext<IvInjectionComponent>) => {
  let userRole: UserRolesEnum;
  let dialogServiceSpy: jasmine.SpyObj<DialogService>;
  let component: IvInjectionComponent;
  let fixture: ComponentFixture<IvInjectionComponent>;

  beforeEach(async(() => {
    component = context.component;
    fixture = context.fixture;
    userRole = TestBed.get(USER_ROLE);
    dialogServiceSpy = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    context.component.writeValue({ dosage: null, state: OrderStateEnum.ORDERED, noDifficulty: true, toleratedWell: true, complications: '' });
    dialogServiceSpy.open.and.returnValue(of([true, { input: '12' }]));
    component.businessProcedure = clone(IVInjection);
  });

  it('should add options on Other select', async(() => {
    expect(component.businessProcedure.catheterGauge.find(item => item === '12')).toBeUndefined();
    component.procedureForm.get('catheter_gauge').patchValue('Other');
    expect(component.businessProcedure.catheterGauge.find(item => item === '12')).not.toBeUndefined();
    expect(component.businessProcedure.unsuccessfulAttempts.find(item => item === '12')).toBeUndefined();
    component.procedureForm.get('unsuccessful_attempts').patchValue('Other');
    expect(component.businessProcedure.unsuccessfulAttempts.find(item => item === '12')).not.toBeUndefined();
  }));
}));
