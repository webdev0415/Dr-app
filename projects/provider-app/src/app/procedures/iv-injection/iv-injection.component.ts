import { ChangeDetectorRef, Component, forwardRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { keys, pick } from 'ramda';


import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { GICocktailMedication } from '../interfaces/gi-coctail.interface';
import { IVBusinessInjection } from '../interfaces/iv-business-injection.interface';
import { IVInjection } from '../interfaces/iv-injection.interface';
import { ProcedureRowComponent } from '../procedure-row/procedure-row.component';
import { USER_ROLE } from '../tokens/user-role.token';

@Component({
  selector: 'pa-iv-injection',
  templateUrl: './iv-injection.component.html',
  styleUrls: ['./iv-injection.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IvInjectionComponent),
    multi: true
  }]
})
export class IvInjectionComponent extends ProcedureRowComponent<IVInjection, IVBusinessInjection> {
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
      givenBy: this.fb.control(null),
      consent: this.fb.control(''),
      time: this.fb.control(null),
      time_units: this.fb.control(''),
      site: this.fb.control(''),
      insertion_by: this.fb.control(''),
      catheter_gauge: this.fb.control(null),
      unsuccessful_attempts: this.fb.control(''),
      attempts_description: this.fb.control(''),
      solution: this.fb.control(''),
      manufacturer: this.fb.control(''),
      rate: this.fb.control(''),
      infusion_by: this.fb.control(''),
      infusion_name: this.fb.control(''),
    });
  }

  writeValue(procedure: Partial<GICocktailMedication>) {
    super.writeValue({
      ...this.procedureForm.value,
      ...pick(keys(procedure).filter(key => procedure[key] !== undefined), procedure)
    });
  }

  protected get changeableFieldsControls(): string[] {
    return ['catheter_gauge', 'unsuccessful_attempts'];
  }

  protected getControlOptionsField(controlName: string): string {
    switch (controlName) {
      case 'catheter_gauge':
        return 'catheterGauge';
      case 'unsuccessful_attempts':
        return 'unsuccessfulAttempts';
    }
  }

  protected dialogTitle(controlName): string {
    switch (controlName) {
      case 'catheter_gauge':
        return 'Catheter gauge';
      case 'unsuccessful_attempts':
        return 'Unsuccessful attempts';
    }
  }

  protected get dialogValidationRegExp(): RegExp {
    return /^\d+$/;
  }
}
