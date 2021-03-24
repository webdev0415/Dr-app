import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { clone } from 'ramda';


import { TreatmentsService } from '../../../../../treatments/treatments.service';
import { PpSelectBaseComponent } from '../pp-select-base/pp-select-base.component';
import { PpSelectHealthHistoryInputData } from '../../../../../common/interfaces/pp-select.interface';
import { ViewSymptom } from '../../../../../common/interfaces/patient-data.interface';
import {NewTreatmentsService} from '../../../../../treatments/treatments.new.service';

@Component({
  selector: 'pa-pp-add-health-history-item',
  templateUrl: './pp-add-health-history.component.html',
  styleUrls: ['./pp-add-health-history.component.scss']
})
export class PpAddHealthHistoryComponent extends PpSelectBaseComponent implements OnInit {
  public otherInputControl: FormControl = null;
  public formInputControl: FormControl = null;

  public waitingCounter = 0;

  constructor(
    public dialogRef: MatDialogRef<PpAddHealthHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PpSelectHealthHistoryInputData,
    private treatmentsService: TreatmentsService,
    private newTreatmentService: NewTreatmentsService
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.otherInputControl = new FormControl(this.data.otherInputText, [
      Validators.maxLength(40),
      Validators.pattern(/^\S+|\s+\S+\s*$/),
    ]);
    this.list = clone(this.data.list);
    this.formInputControl = this.inputControl;
    this.formInputControl.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(this.data.type === 'drugs' ? 1000 : 0), distinctUntilChanged(), tap(() => {
      this.onClickSearch();
    })).subscribe();
    this.checkBackdropClick();
  }

  get inputControl(): FormControl {
    if (this.formInputControl === null) {
      const validators = [
        Validators.required
      ];
      if (this.data.type === 'drugs') validators.push(Validators.pattern(/^[ a-zA-Z0-9%._,\-]+( [a-zA-Z0-9%._\-]+)*$/), Validators.minLength(3));
      const form = new FormControl('',
        {
          validators: validators,
          updateOn: 'change'
        }
      );
      this.formInputControl = form;
      return form;
    }
    return this.formInputControl;
  }

  removeOtherInfo(): void {
    this.otherInputControl.setValue('');
  }

  searchAsync(): Observable<ViewSymptom[]> {
    const searchTerm = this.formInputControl.value.trim().toLowerCase();
    this.selected = [];
    if (!this.formInputControl.valid) return of(this.data.type === 'drugs' ? this.data.list : this.list);
    if (this.data.type === 'drugs') {
      this.waitingCounter += 1;
      return this.newTreatmentService.quickDrugSearch(searchTerm)
        .pipe(catchError(() => []), map(drugs => drugs.filter(item => !this.data.excluded.includes(item)).map((item, index) => ({name: item, index: index}))), tap(() => this.waitingCounter -= 1));
    }
    return of(this.list.filter(item => item.name.toLowerCase().includes(searchTerm)));
  }

  get confirmButtonDisabled(): boolean {
    const otherInputValid = this.data.showOtherInput && this.otherInputControl.valid && this.otherInputControl.dirty;
    return !otherInputValid && !this.selected.length;
  }

  public confirmSelected(): void {
    this.closeDialog(this.selected, this.otherInputControl.value);
  }

  public cancelDialog(): void {
    this.confirmSelected();
  }

  public closeDialog(historyItems: number[], otherInfo?: string): void {
    const result = this.data.type === 'drugs' ? historyItems : historyItems.map(item => this.data.list[item].name).map(item => this.list.findIndex(listItem => listItem.name === item));
    const viewList = [];
    this.data.list.forEach((item, index) => viewList[index] = item);
    this.dialogRef.close({ selected: result, otherInfo: otherInfo, viewList: viewList });
  }

}
