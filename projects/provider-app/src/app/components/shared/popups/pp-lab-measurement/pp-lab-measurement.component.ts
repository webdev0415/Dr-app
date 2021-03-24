import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'pa-pp-lab-measurement',
  templateUrl: './pp-lab-measurement.component.html',
  styleUrls: ['./pp-lab-measurement.component.scss']
})
export class PpLabMeasurementComponent implements OnInit {
  public formInputNumberControl: FormControl = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { hint: string; inputMin: number; inputMax: number; presetValue: number; },
    public dialogRef: MatDialogRef<PpLabMeasurementComponent>
  ) { }

  ngOnInit(): void {
    const validators: ValidatorFn[] = [Validators.required, Validators.pattern(/^\s*[0-9]{1,10}\s*$/), Validators.min(this.data.inputMin), Validators.max(this.data.inputMax)];
    this.formInputNumberControl = new FormControl(this.data.presetValue, validators);
  }

  public closeDialog(result: number = null): void {
    this.dialogRef.close(+result);
  }


}
