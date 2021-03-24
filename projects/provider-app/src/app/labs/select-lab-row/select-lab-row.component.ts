import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IOption } from 'ng-uikit-pro-standard';


import { BaseLabRowComponent } from '../base-lab-row.component';

@Component({
  selector: 'pa-select-lab-row',
  templateUrl: './select-lab-row.component.html',
  styleUrls: ['./select-lab-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectLabRowComponent extends BaseLabRowComponent<string> implements OnInit {
  public options: IOption[] = [];

  ngOnInit(): void {
    this.options = this.businessLab.multipleValues.map(item => ({ value: item, icon: '', label: item }));
  }
}
