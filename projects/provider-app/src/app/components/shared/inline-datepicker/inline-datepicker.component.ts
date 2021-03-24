import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges,
  Output, SimpleChanges, ViewChild,
} from '@angular/core';

import { Date as Sugar } from 'sugar';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { equals } from 'ramda';

@Component({
  selector: 'pa-inline-datepicker',
  templateUrl: './inline-datepicker.component.html',
  styleUrls: ['./inline-datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineDatepickerComponent implements OnChanges {
  @Input() date: string;
  @Input() disabled: boolean;
  @Input() dateOptions;
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('picker') picker: MatDatepicker<Date>;

  public pickerDate: Date;
  public minDate: Date;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dateOptions && !equals(changes.dateOptions.previousValue, changes.dateOptions.currentValue))
    this.pickerDate = Sugar.create(this.date);
    this.minDate = Sugar.create(this.dateOptions.disableUntil);
  }

  public onDateChange(date: Moment): void {
    const newDate = new Sugar(date.toDate()).short().raw;
    this.update.emit(newDate);
  }

  public onInputClick(): void {
    if (!this.disabled) this.picker.open();
  }

}
