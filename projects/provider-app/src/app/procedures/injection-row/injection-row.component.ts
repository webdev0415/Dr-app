import { ChangeDetectorRef, Component, forwardRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { keys, pick } from 'ramda';


import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { Injection } from '../../common/interfaces/procedures.interface';
import { DialogService } from '../../services/app/dialog.service';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { ProcedureRowComponent } from '../procedure-row/procedure-row.component';
import { USER_ROLE } from '../tokens/user-role.token';

@Component({
  selector: 'pa-injection-row',
  templateUrl: './injection-row.component.html',
  styleUrls: ['./injection-row.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InjectionRowComponent),
    multi: true
  }]
})
export class InjectionRowComponent extends ProcedureRowComponent<Injection, BusinessInjection> {
  constructor(fb: FormBuilder, @Inject(USER_ROLE) userRole: UserRolesEnum, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, userRole, cdRef, dialogService);
  }

  protected get initialFormGroup(): FormGroup {
    return this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control(''),
      state: this.fb.control(''),
      route: this.fb.control(''),
      dosage: this.fb.control(''),
      form: this.fb.control(''),
      brandName: this.fb.control(''),
      NDC: this.fb.control(''),
      lotNumber: this.fb.control(''),
      timeWaited: this.fb.control(null),
      expiration: this.fb.control(''),
      toleratedWell: this.fb.control(null),
      noDifficulty: this.fb.control(null),
      complications: this.fb.control(''),
      diluent: this.fb.control(''),
      needleSize: this.fb.control(''),
      concentration: this.fb.control(''),
      orderedBy: this.fb.control(null),
      givenBy: this.fb.control(null)
    });
  }

  writeValue(procedure: Partial<Injection>) {
    super.writeValue({
      ...this.procedureForm.value,
      ...pick(keys(procedure).filter(key => procedure[key] !== undefined), procedure)
    });
  }
}
