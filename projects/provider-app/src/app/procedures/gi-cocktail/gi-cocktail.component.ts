import { ChangeDetectorRef, Component, forwardRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { keys, pick } from 'ramda';


import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { BusinessMedication } from '../interfaces/business-medication.interface';
import { GICocktailMedication } from '../interfaces/gi-coctail.interface';
import { ProcedureRowComponent } from '../procedure-row/procedure-row.component';
import { USER_ROLE } from '../tokens/user-role.token';

@Component({
  selector: 'pa-gi-cocktail',
  templateUrl: './gi-cocktail.component.html',
  styleUrls: ['./gi-cocktail.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GiCocktailComponent),
    multi: true
  }]
})
export class GiCocktailComponent extends ProcedureRowComponent<GICocktailMedication, BusinessMedication> {
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
      catheter_gauge: this.fb.control(''),
      unsuccessful_attempts: this.fb.control(null),
    });
  }

  writeValue(procedure: Partial<GICocktailMedication>) {
    super.writeValue({
      ...this.procedureForm.value,
      ...pick(keys(procedure).filter(key => procedure[key] !== undefined), procedure)
    });
  }
}
