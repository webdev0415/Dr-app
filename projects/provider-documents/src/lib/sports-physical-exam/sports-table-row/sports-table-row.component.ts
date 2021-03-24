import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[doc-sports-table-row]',
  templateUrl: './sports-table-row.component.html',
  styleUrls: ['./sports-table-row.component.scss']
})
export class SportsTableRowComponent {

  @Input() examName: string;
  @Input() normal: boolean;
  @Input() abnormal: string;

  constructor() { }

}
