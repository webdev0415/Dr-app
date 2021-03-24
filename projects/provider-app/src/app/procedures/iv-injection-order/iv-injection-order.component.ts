import { AfterViewInit, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';


import { DialogService } from '../../services/app/dialog.service';
import { InjectionOrderRowComponent } from '../injection-order-row/injection-order-row.component';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';

@Component({
  selector: 'pa-iv-injection-order',
  templateUrl: './iv-injection-order.component.html',
  styleUrls: ['./iv-injection-order.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IvInjectionOrderComponent),
    multi: true
  }]
})
export class IvInjectionOrderComponent extends InjectionOrderRowComponent implements AfterViewInit {
  constructor(fb: FormBuilder, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, cdRef, dialogService);
  }

  ngAfterViewInit(): void {
    ['dosage', 'route'].forEach((field: keyof MedicationOrderItem) => {
      const formField = this.orderForm.get(field);
      formField.setValue('N/A');
    });
  }
}
