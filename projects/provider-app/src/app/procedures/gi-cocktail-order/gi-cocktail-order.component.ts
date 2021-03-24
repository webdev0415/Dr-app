import { AfterViewInit, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


import { DialogService } from '../../services/app/dialog.service';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';
import { MedicationOrderRowComponent } from '../medication-order-row/medication-order-row.component';

@Component({
  selector: 'pa-gi-cocktail-order',
  templateUrl: './gi-cocktail-order.component.html',
  styleUrls: ['./gi-cocktail-order.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GiCocktailOrderComponent),
    multi: true
  }]
})
export class GiCocktailOrderComponent extends MedicationOrderRowComponent implements AfterViewInit {
  constructor(fb: FormBuilder, cdRef: ChangeDetectorRef, dialogService: DialogService) {
    super(fb, cdRef, dialogService);
  }

  ngAfterViewInit(): void {
    ['form', 'dosage', 'route'].forEach((field: keyof MedicationOrderItem) => {
      const formField = this.orderForm.get(field);
      formField.setValue('N/A');
    });
  }
}
