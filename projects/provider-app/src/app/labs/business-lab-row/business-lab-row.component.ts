import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input
} from '@angular/core';
import { isNil } from 'ramda';

import { BaseLabRowComponent } from '../base-lab-row.component';
import { BusinessLab } from '../business-lab.model';

@Component({
  selector: '[pa-business-lab-row]',
  templateUrl: './business-lab-row.component.html',
  styleUrls: ['./business-lab-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessLabRowComponent {
  @Input() lab: BusinessLab;
  @Input() isOrdered: boolean;
  @Input() viewOnly: boolean;
  @ContentChild('labComponent', { static: false }) labComponent: BaseLabRowComponent<any>;
  public isNil = isNil;

  removeLabResult(): void {
    if (this.viewOnly) return;
    this.lab.updateLabResult(null);
  }

}
