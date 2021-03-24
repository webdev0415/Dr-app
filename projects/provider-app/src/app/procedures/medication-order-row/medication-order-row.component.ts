import { ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '../../services/app/dialog.service';


import { BusinessMedication } from '../interfaces/business-medication.interface';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';
import { ProcedureOrderRowComponent } from '../procedure-order-row/procedure-order-row.component';

@Component({
  selector: 'pa-medication-order-row',
  templateUrl: './medication-order-row.component.html',
  styleUrls: ['./medication-order-row.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MedicationOrderRowComponent),
    multi: true
  }]
})
export class MedicationOrderRowComponent extends ProcedureOrderRowComponent<BusinessMedication, MedicationOrderItem> {
  constructor(fb: FormBuilder, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, cdRef, dialogService);
  }

  protected get initialFormGroup(): FormGroup {
    const form = super.initialFormGroup;
    form.registerControl('form', this.fb.control(''));
    return form;
  }

  protected get changeableFields(): string[] {
    return ['dosage', 'route', 'form'];
  }
}
