import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';


import { BaseLabRowComponent } from '../base-lab-row.component';

@Component({
  selector: 'pa-boolean-lab-row',
  templateUrl: './boolean-lab-row.component.html',
  styleUrls: ['./boolean-lab-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooleanLabRowComponent extends BaseLabRowComponent<boolean> {
}
