import { Component, Inject, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'pa-pp-load-protocol',
  templateUrl: './pp-load-protocol.component.html',
  styleUrls: ['./pp-load-protocol.component.scss']
})
export class PpLoadProtocolComponent implements OnDestroy {
  public protocolLoadForm: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: { protocolName: string; treatments: { name: string; toTreat: string[] }[]; selectedIllnesses: { [key in 'label'|'value']: string }[]; nonTreatmentType: boolean },
    private dialogRef: MatDialogRef<PpLoadProtocolComponent>,
    private fb: FormBuilder
  ) {
    const formArrayControls = this.dialogData.treatments.map(item => this.fb.group({
      name: this.fb.control(item.name),
      isSelected: this.fb.control(!this.dialogData.nonTreatmentType),
      toTreat: this.fb.control(item.toTreat)
    }, { validators: this.toTreatValidation }));
    if (this.dialogData.nonTreatmentType) formArrayControls.forEach(
      (control, index) => control.get('isSelected').valueChanges
        .pipe(
          takeUntil(this._destroy$),
          filter(isSelected => isSelected),
          tap((isSelected: boolean) => {
            formArrayControls.filter((controlItem, itemIndex) => itemIndex !== index).forEach(controlItem => controlItem.get('isSelected').setValue(false));
          })
        ).subscribe()
    );
    this.protocolLoadForm = this.fb.group({
      treatments: this.fb.array(formArrayControls, this.treatmentsSelectedValidation)
    });

  }

  private treatmentsSelectedValidation(treatmentsArray: FormArray): ValidationErrors {
    return (treatmentsArray.value as { isSelected: boolean }[]).some(item => item.isSelected) ? null : { nothingSelected: true };
  }

  private toTreatValidation(protocolFormGroup: FormGroup): ValidationErrors {
    const protocol: { isSelected: boolean; toTreat: string[] } = protocolFormGroup.value;
    return !protocol.isSelected || protocol.toTreat.length ? null : { nothingSelected: true };
  }

  public get treatmentsFormArray(): FormArray {
    return this.protocolLoadForm.get('treatments') as FormArray;
  }

  public submitProtocols(): void {
    this.dialogRef.close(this.protocolLoadForm.value.treatments.filter(item => item.isSelected));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
