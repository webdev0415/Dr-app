import { Component, Input } from '@angular/core';
import { PaymentInfo } from 'common/models/data.model';

@Component({
  selector: 'doc-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent {

  @Input() paymentInfo: PaymentInfo;
  @Input() date: string;

  constructor() { }

}
