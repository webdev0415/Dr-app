import { ChangeDetectionStrategy, Component } from '@angular/core';

import { mergeMap, first, filter, map } from 'rxjs/operators';


import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogService } from '../../services/app/dialog.service';
import { DialogSubscribesService } from '../../services/dialogsubscribes.service';
import { BaseLabRowComponent } from '../base-lab-row.component';

@Component({
  selector: 'pa-rate-lab-row',
  templateUrl: './rate-lab-row.component.html',
  styleUrls: ['./rate-lab-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateLabRowComponent extends BaseLabRowComponent<number> {
  constructor(private dialogService: DialogService, private dialogSubscribesService: DialogSubscribesService) {
    super();
  }

  public changeLabValue(ruleKey: 'High' | 'Low' | 'Negative'): void {
    if (this.viewOnly) return;
    this.businessLab.value.pipe(
      first(),
      mergeMap((value: number) => {
        let message: string;
        let inputMin: number = null;
        let inputMax: number = null;

        switch (ruleKey) {
          case 'High':
            message = `High value is above ${this.businessLab.limits.upperLimit} ${this.businessLab.units}`;
            inputMin = this.businessLab.limits.upperLimit;
            break;
          case 'Low':
            message = `Low value is below ${this.businessLab.limits.lowerLimit} ${this.businessLab.units}`;
            inputMin = 1;
            inputMax = this.businessLab.limits.lowerLimit;
            break;
          case 'Negative':
            message = `Normal value is between ${this.businessLab.limits.lowerLimit} ${this.businessLab.units} and ${this.businessLab.limits.upperLimit - 1} ${this.businessLab.units}`;
            inputMin = this.businessLab.limits.lowerLimit;
            inputMax = this.businessLab.limits.upperLimit;
            break;
        }

        const defaultValue: number = this.isActive(ruleKey) ? value : null;
        return this.dialogService.open<[boolean, { input: string }]>(
          PpcustomdialogComponent,
          this.dialogSubscribesService.getConfig({
              isDialog: true,
              title: 'Enter a value',
              message: message,
              input: defaultValue,
              inputMin: inputMin,
              inputMax: inputMax,
              returnValue: true,
              okText: 'Ok',
              validatorRegExp: /^\s*[0-9]{1,10}\s*$/
            },
            {
              ...this.stdDialogConfig
            })
        );
      }),
      filter(result => result && result[0]),
      map(result => +result[1].input),
    ).subscribe((result: number) => {
      this.updateLabResult(result);
    });
  }
}
