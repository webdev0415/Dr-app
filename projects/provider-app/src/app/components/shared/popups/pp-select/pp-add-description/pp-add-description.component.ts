import { Component, Inject } from '@angular/core';
import { PpSelectBaseComponent } from '../pp-select-base/pp-select-base.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PpSelectSymptomInputData } from 'common/interfaces/pp-select.interface';
import { StateService } from '../../../../../services';


@Component({
  selector: 'pa-pp-add-description',
  templateUrl: './pp-add-description.component.html',
  styleUrls: ['./pp-add-description.component.scss']
})
export class PpAddDescriptionComponent extends PpSelectBaseComponent {
  public startedButtons: { value: [string, string], label: string }[] = [
    {label: 'Less than 1 Day', value: ['Less than 1', 'Day']},
    {label: 'A Few Days', value: ['1-3', 'Days']},
    {label: 'Less than 1 Week', value: ['Less than 1', 'Week']},
    {label: 'A Few Weeks', value: ['1-3', 'Weeks']},
    {label: 'Less than 1 Month', value: ['Less than 1', 'Month']},
    {label: 'A Few Months', value: ['1-3', 'Months']},
    {label: 'Longer', value: [null, null]}
  ];

  public range: [number, number] = [90, 365];

  public rangeOptions = ['Days', 'Weeks', 'Months', 'Years'].map(item => ({value: item.toLowerCase(), label: item}));

  public rangeType = 'days';

  public rangeSelection = false;

  public rangeSelected = '90';

  public timeSelected: [string, string] = [null, null];

  public description = [];
  public selected: number[] = [];

  public desktopLayout = false;

  constructor(
    public dialogRef: MatDialogRef<PpAddDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PpSelectSymptomInputData,
    private stateService: StateService
  ) {
    super(dialogRef, data);
    this.desktopLayout = this.stateService.app.mediaResp().xl.matches;
  }

  toggleItem(index: number, presenting?: boolean): void {
    super.toggleItem(index, presenting);
    if (!this.selected.length) {
      this.timeSelected = [null, null];
      this.rangeSelection = false;
    }
  }

  public adjustRange(type: string): void {
    switch (type) {
      case 'days': this.range = [90, 365]; break;
      case 'months': this.range = [4, 12]; break;
      case 'weeks': this.range = [12, 52]; break;
      case 'years': this.range = [1, this.data.patientAge]; break;
    }
    this.rangeSelected = String(this.range[0]);
  }

  public buttonClick(value: [string, string]): void {
    if (!value[1]) {
      this.startedButtons[this.startedButtons.length - 1].label = 'Longer';
      this.rangeSelection = !this.rangeSelection;
      return;
    }
    this.timeSelected = value;
    this.startedButtons[this.startedButtons.length - 1].label = this.manuallyEntered ? `${this.timeSelected[0]} ${this.timeSelected[1]}` : 'Longer';
    this.rangeSelection = false;
  }

  public buttonSelected(value: [string, string]): boolean {
    if (!value[1]) return this.manuallyEntered;
    const numbersEqual = this.timeSelected[0] === value[0];
    const unitsEqual = this.timeSelected[1] === value[1];
    return numbersEqual && unitsEqual;
  }

  private get manuallyEntered(): boolean {
    const valueEntered = this.timeSelected[0];
    const valueEnteredNumber = Number(valueEntered);
    if (!valueEntered || isNaN(valueEnteredNumber)) return false;
    switch (this.timeSelected[1]) {
      case 'years': return true;
      case 'months': return valueEnteredNumber > 3;
      case 'weeks': return valueEnteredNumber > 11;
      case 'days': return valueEnteredNumber > 89;
    }
    return false;
  }

  confirmSelected(): void {
    const descriptions = this.data.symptomDescriptions;
    this.selected = this.selected.map(index => descriptions[index].name);
    this.closeDialog(this.selected);
  }

  cancelDialog(): void {
    this.timeSelected = ['1', 'weeks'];
    super.cancelDialog();
  }

  closeDialog(result: any[]): void {
    this.dialogRef.close({selected: result, duration: this.timeSelected});
  }

  get confirmButtonDisabled(): boolean {
    return !this.timeSelected[0];
  }
}
