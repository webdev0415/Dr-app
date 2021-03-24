import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { concat, valuesIn } from 'ramda';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


import { ProtocolKeys } from '../enum/protocol-keys.enum';

@Component({
  selector: 'pa-pp-save-protocol',
  templateUrl: './pp-save-protocol.component.html',
  styleUrls: ['./pp-save-protocol.component.scss']
})
export class PpSaveProtocolComponent implements OnInit, OnDestroy {
  public keysOptions: { label: string; value: ProtocolKeys|string }[] = [];
  public entirePlanSaveControl: FormControl = this.fb.control(true);
  public protocolDetailsForm: FormGroup = this.fb.group({
    alias: this.fb.control('', Validators.required),
    entirePlanSave: this.fb.control(true),
    keys: this.fb.control([], Validators.required)
  });
  private _destroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: { icdCodes: { [key in 'label'|'value']: string }[]; treatments: string[] },
    private matDialogRef: MatDialogRef<PpSaveProtocolComponent>,
    private fb: FormBuilder
  ) {
    const treatmentsFormArray = this.dialogData.treatments.map(item => this.fb.group({ isSelected: this.fb.control(true), name: this.fb.control(item) }));
    this.protocolDetailsForm.registerControl('treatments', this.fb.array(treatmentsFormArray, { validators: this.protocolsSelectionValidator }));

    this.entirePlanSaveControl.valueChanges.pipe(
      takeUntil(this._destroy$),
      tap((entirePlanSave: boolean) => (this.protocolDetailsForm.get('treatments') as FormArray).controls.forEach(control => control.get('isSelected').patchValue(entirePlanSave)))
    ).subscribe();

    this.protocolDetailsForm.get('treatments').valueChanges.pipe(
      takeUntil(this._destroy$),
      map((treatmentsSelection: { isSelected: boolean }[]): boolean => !treatmentsSelection.some(item => !item.isSelected)),
      tap(entirePlanSave => this.entirePlanSaveControl.setValue(entirePlanSave, { emitEvent: false }))
    ).subscribe();
  }

  ngOnInit(): void {
    this.keysOptions = concat(this.dialogData.icdCodes, valuesIn(ProtocolKeys).map((key: ProtocolKeys) => {
      return {
        value: key,
        label: (key as string).replace(/_/g, ' ')
      };
    }));
  }

  public closeDialog(): void {
    this.matDialogRef.close(this.protocolDetailsForm.value);
  }

  private protocolsSelectionValidator(treatmentsArray: FormArray): ValidationErrors {
    if (treatmentsArray.value.filter(item => item.isSelected).length) return null;
    return { noProtocolsSelected: true };
  }

  public get treatmentsFormArray(): FormArray {
    return this.protocolDetailsForm.get('treatments') as FormArray;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
