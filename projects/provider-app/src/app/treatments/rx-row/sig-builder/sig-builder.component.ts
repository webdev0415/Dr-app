import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Prescription } from 'treatments/prescription/prescription.component';
import { Option } from 'treatments/rx-row/rx-row.component';
import { units, PVAmount, PVFrequency } from '../../static/static.drugs';

@Component({
  selector: 'pa-sig-builder',
  templateUrl: './sig-builder.component.html',
  styleUrls: ['./sig-builder.component.scss']
})
export class SigBuilderComponent implements OnInit, OnChanges {

  /* * * * * * *
  *
  * SIG Builder should combine all fields to create a SIG code which is used by doctors as a short order of a
  * prescription. The code indicates the amount, units, form, frequency, duration, time, and indication.
  * The doctor should have the ability to add a row to the SIG which will allow for added directions.
  *
  * Example SIG - `T 1g q 24h x 10D`
  *
  * Example with Added Row - `500mg q24h x 1D, 250mg q24h x 4 D`
  *
  * - Still missing -
  * Adding Second row, and something if of with the values that are supposed to be available below. David Grayson
  * provided a document that outlines the values and how they should be used to create a SIG but when using the values
  * data is still missing to properly create a SIG. A string needs to be generated to read in the prescription notes as
  * well and I believe that the format needs to be modified from { label: string , value: string } to include values for
  * both singular and plural cases. Practice Velocity is taking the string to then run the automation so formatting must
  * be precise. The new dropdown options should follow { label: string, value: string, plural: string, singular: string }
  *
  * * * * * * * */

  @Input() prescription: Prescription;
  @Input() routes: Option[];
  @Input() freqs: Option[];
  @Input() units: Option[];
  @Input() route: string;
  @Output() sigCreated: EventEmitter<string> = new EventEmitter<string>();
  @Output() optionChanged = new EventEmitter<{ key: string; option: Option; rowIndex: number; }>();
  @Output() prescriptionSave: EventEmitter<string> = new EventEmitter<string>();

  PVAmounts = PVAmount;
  timeDurations = ['Day', 'Week', 'Month', 'Year'];

  constructor() { }

  ngOnInit(): void {
    if (!this.prescription.dosageHelper) {
      this.prescription.dosageHelper = {
        rows: [{}],
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngchange', changes);
    if (changes.route && !changes.route.firstChange) {
      console.log('route changed');
      this.buildSig();
    }
  }

  addRow() {
    this.prescription.dosageHelper.rows.push({});
  }

  buildItem(item, start = '') {
    return item ? `${start}${item}` : '';
  }

  buildSig() {
    const hFirst = this.prescription.dosageHelper.rows[0];

    const sig =
      `${this.buildItem(
        hFirst.amount, 'Take ')} ${this.buildItem(
          hFirst.unit)} ${this.buildItem(
            this.prescription.route)}${this.buildItem(
              hFirst.freq, ', ')}${this.buildItem(
                hFirst.durationAmount, ', for ')} ${this.buildItem(
                  hFirst.durationUnit)}${hFirst.durationAmount === 1 ? '' : 's'}`
                   +
      this.prescription.dosageHelper.rows
        .slice(1)
        .map(row =>
          `${this.buildItem(
            row.amount, ', then take ')} ${this.buildItem(
              row.unit)}${this.buildItem(
                row.freq, ', ')}${this.buildItem(
                  row.durationAmount, ', for ')} ${this.buildItem(
                    row.durationUnit)}${row.durationAmount === 1 ? '' : 's'}`);

    this.prescription.dosageHelper.sig = sig;
  }

  sendSig() {
    this.sigCreated.emit(this.prescription.dosageHelper.sig);
  }

  savePrescription() {
    this.prescriptionSave.emit(this.prescription.dosageHelper.sig);
  }

  onOptionChange(key: string, option: Option, rowIndex: number = -1) {
    this.optionChanged.emit({ key, option, rowIndex });
  }

  compareFn(selOpt: Option, option: Option): boolean {
    return selOpt && option && selOpt.value === option.value;
  }
}
