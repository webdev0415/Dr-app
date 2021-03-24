import { ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '../../services/app/dialog.service';


import { BusinessInjection } from '../interfaces/business-injection.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { ProcedureOrderRowComponent } from '../procedure-order-row/procedure-order-row.component';

@Component({
  selector: 'pa-injection-order-row',
  templateUrl: './injection-order-row.component.html',
  styleUrls: ['./injection-order-row.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InjectionOrderRowComponent),
    multi: true
  }]
})
export class InjectionOrderRowComponent extends ProcedureOrderRowComponent<BusinessInjection, InjectionOrderItem> {
  constructor(fb: FormBuilder, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, cdRef, dialogService);
  }
}
