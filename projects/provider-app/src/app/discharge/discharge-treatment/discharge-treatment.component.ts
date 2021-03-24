import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

import { PVDischarge } from '../discharge.interface';
import { PVTherapiesType } from '../discharge.type';

const notDigits = RegExp('\\D+', 'g');
const zeroPattern = RegExp('\^0+', 'g');
const maxTimeAmount = 51;

@Component({
  selector: 'pa-discharge-treatment',
  templateUrl: './discharge-treatment.component.html',
  styleUrls: ['./discharge-treatment.component.scss']
})
export class DischargeTreatmentComponent {
  @Input() discharge: PVDischarge;
  @Input() viewOnly: boolean;
  @Output() informationUpdated = new EventEmitter<{ discharge: PVDischarge, invalid: boolean }>();

  public readonly timeOptions = [{value: 'days', label: 'days'}, {value: 'weeks', label: 'weeks'}, {value: 'months', label: 'months'}];
  public readonly otherReasonOptions = [
    {value: 'Released from care for this condition', label: 'Released from care for this condition'},
    {value: 'Emergency Department Transfer', label: 'Emergency Department Transfer'},
    {value: 'Patient left before discharge', label: 'Patient left before discharge'},
    {value: 'Hospital Admission', label: 'Hospital Admission'}
  ];
  public readonly therapiesOptions = [{value: 'OCCUPATIONAL', label: 'OCCUPATIONAL'}, {value: 'SPEECH', label: 'SPEECH'}, {value: 'PHYSICAL', label: 'PHYSICAL'}];
  constructor(
    private renderer: Renderer2
  ) { }

  get isReturnTypeSelected(): boolean {
    return this.discharge.returnIn || this.discharge.followUp;
  }

  get isTimeUnitSelected(): boolean {
    return this.discharge.time && !!this.discharge.time.length;
  }

  get isTimeAmountOutOfRange(): boolean {
    return this.discharge.amountOf && this.discharge.amountOf > maxTimeAmount;
  }

  get isInvalidTimeAmountField(): boolean {
    return this.isReturnTypeSelected && !this.discharge.amountOf;
  }

  get isInvalidTimeUnitField(): boolean {
    return ((this.isReturnTypeSelected || !!this.discharge.amountOf)) && !this.isTimeUnitSelected;
  }

  private get isInvalidDischargeDispositionForm(): boolean {
    return this.isInvalidTimeAmountField || this.isTimeAmountOutOfRange || this.isInvalidTimeUnitField;
  }

  private clearMainReason(): void {
    this.discharge.returnIn = false;
    this.discharge.followUp = false;
    this.discharge.amountOf = null;
    this.discharge.time = null;
    this.discharge.ifNotBetter = false;
    this.discharge.followUpWith = null;
  }

  private clearOtherReason(): void {
    this.discharge.otherReason = '';
  }

  public checkForValidNumberValue(inputElement: HTMLInputElement): void {
    const inputString = inputElement.value;
    if (inputString.length) {
      const filteredString = inputString.replace(notDigits, '').replace(zeroPattern, '');
      this.renderer.setProperty(inputElement, 'value', this.getNumberValue(filteredString));
      this.discharge.amountOf = this.getNumberValue(filteredString);
    }
  }

  public update(field: keyof PVDischarge, value: any, additional?: any, elementToFocus?: HTMLElement) {
    if (this.viewOnly) return;
    // @ts-ignore
    this.discharge[field] = additional && value ? additional : (additional && !value) ? null : value;
    if (value) {
      switch (field) {
        case 'followUp': {
          this.clearOtherReason();
          this.discharge.returnIn = false;
          break;
        }
        case 'returnIn': {
          this.clearOtherReason();
          this.discharge.followUp = false;
          this.discharge.followUpWith = null;
          break;
        }
        case 'followUpWith':
        case 'amountOf':
        case 'time':
        case 'ifNotBetter': {
          this.clearOtherReason();
          break;
        }
        case 'otherReason': {
          this.clearMainReason();
          break;
        }
      }
      if (elementToFocus) {
        elementToFocus.focus();
      }
    } else {
      switch (field) {
        case 'followUp': {
          this.clearMainReason();
          this.discharge.followUpWith = null;
          break;
        }
        case 'returnIn': {
          this.clearMainReason();
        }
      }
    }
    this.informationUpdated.emit({discharge: this.discharge, invalid: this.isInvalidDischargeDispositionForm});
  }

  public therapiesUpdate(value: PVTherapiesType, addToArray: boolean): void {
    if (this.viewOnly) return;
    let updateValue = this.discharge.therapies || [];
    if (addToArray) updateValue.push(value);
    else updateValue = updateValue.filter(item => item !== value);
    this.update('therapies', updateValue);
  }

  public getNumberValue(numberString: string): number {
    return parseInt(numberString, 10) || null;
  }

  // iOS/iPadOS element focus support
  public setFocusToElement(elementToFocus: HTMLElement, checked: boolean): void {
    if (!checked) elementToFocus.focus();
  }
}
