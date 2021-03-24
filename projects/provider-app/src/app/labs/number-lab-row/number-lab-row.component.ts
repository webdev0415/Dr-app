import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';
import { filter, first, map, mergeMap } from 'rxjs/operators';


import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogService } from '../../services/app/dialog.service';
import { DialogSubscribesService } from '../../services/dialogsubscribes.service';
import { BaseLabRowComponent } from '../base-lab-row.component';

@Component({
  selector: 'pa-number-lab-row',
  templateUrl: './number-lab-row.component.html',
  styleUrls: ['./number-lab-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberLabRowComponent extends BaseLabRowComponent<number> {
  constructor(private dialogService: DialogService, private dialogSubscribesService: DialogSubscribesService) {
    super();
  }

  public get buttonColor(): Observable<'red' | 'green' | 'primary'> {
    return this.labValue.pipe(map((value: number) => {
      switch (true) {
        case this.isNil(value):
          return 'primary';
        case this.businessLab.updateRules['High'].predicate(value):
        case this.businessLab.updateRules['Low'].predicate(value):
          return 'red';
        case this.businessLab.updateRules['Normal'].predicate(value):
          return 'green';
      }
    }));
  }

  public changeLabValue(): void {
    if (this.viewOnly) return;
    this.businessLab.value.pipe(
      first(),
      mergeMap((value: number) => {
        return this.dialogService.open<[boolean, { input: string }]>(
          PpcustomdialogComponent,
          this.dialogSubscribesService.getConfig({
              isDialog: true,
              title: 'Enter a value',
              input: value,
              returnValue: true,
              okText: 'Ok',
              validatorRegExp: /^\s*\d+(([,.])\d+)?\s*$/
            },
            {
              ...this.stdDialogConfig
            })
        );
      }),
      filter(result => result && result[0]),
      map(result => +result[1].input.replace(',', '.')),
    ).subscribe((result: number) => {
      this.updateLabResult(result);
    });
  }

  public get buttonActive(): Observable<boolean> {
    return this.labValue.pipe(map(value => !this.isNil(value)));
  }
}
