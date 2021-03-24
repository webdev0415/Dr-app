import { ChangeDetectorRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';

import { clone, uniq } from 'ramda';
import { combineLatest, Subject } from 'rxjs';
import { concatMap, distinctUntilChanged, filter, map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';


import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { Medication } from '../interfaces/medication.interface';
import { Injection } from '../interfaces/injection.interface';
import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogService } from '../../services/app/dialog.service';
import { stdDialogConfig } from '../../static/app.constants';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { BusinessMedication } from '../interfaces/business-medication.interface';

export abstract class ProcedureRowComponent<T extends Medication | Injection, K extends BusinessMedication | BusinessInjection> implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() businessProcedure: K;

  public procedureForm: FormGroup;

  public readonly OrderStateEnum = OrderStateEnum;
  public readonly UserRoleEnum = UserRolesEnum;
  private readonly stdDialogConfig = stdDialogConfig;

  private _destroy$ = new Subject<void>();

  private onChange = (value: T) => {};
  private onTouched = () => {};

  protected constructor(protected fb: FormBuilder, public userRole: UserRolesEnum, private cdRef: ChangeDetectorRef, private dialogService: DialogService) {
    this.procedureForm = this.initialFormGroup;
  }

  ngOnInit(): void {
    this.procedureForm.get('state').valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this._destroy$), map(orderState => [orderState, this.procedureForm.get('state').pristine]))
      .subscribe(([state, pristine]: [OrderStateEnum, boolean]) => {
        this.setDisabledState(state !== OrderStateEnum.ORDERED && pristine);
      });
    this.procedureForm.valueChanges.pipe(takeUntil(this._destroy$), tap(value => this.onChange(value))).subscribe();

    this.changeableFieldsControls.map((controlName): [string, FormControl] => [controlName, this.procedureForm.get(controlName) as FormControl]).forEach(
      ([controlName, control]) => this.trackOtherOptionSelection(controlName, control)
    );
    combineLatest([
      this.procedureForm.get('noDifficulty').valueChanges,
      this.procedureForm.get('toleratedWell').valueChanges,
      this.procedureForm.get('state').valueChanges.pipe(map((state: OrderStateEnum) => state === OrderStateEnum.COMPLETED)),
    ]).pipe(
      map(([noDifficulty, toleratedWell, completed]) => !(noDifficulty && toleratedWell) && completed),
      takeUntil(this._destroy$),
      tap(complicationsRequired => {
        const complications = this.procedureForm.get('complications');
        complications.setValidators(complicationsRequired ? Validators.required : null);
        complications.updateValueAndValidity();
      })
    ).subscribe();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.procedureForm[isDisabled ? 'disable' : 'enable']();
    if (this.userRole !== UserRolesEnum.PRACTITIONER) this.changeableFieldsControls.forEach(item => {
      this.procedureForm.get(item).disable();
    });
  }

  writeValue(procedure: Partial<T>): void {
    this.procedureForm.setValue(procedure);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public orderStateChange(orderState: OrderStateEnum): void {
    const state = this.procedureForm.get('state');
    state[orderState === OrderStateEnum.ORDERED ? 'markAsPristine' : 'markAsDirty']();
    state.patchValue(orderState);
  }

  protected get initialFormGroup(): FormGroup {
    return this.fb.group({
      state: this.fb.control(''),
      noDifficulty: this.fb.control(null),
      toleratedWell: this.fb.control(null),
      complications: this.fb.control(''),
      dosage: this.fb.control('')
    });
  }

  protected get changeableFieldsControls(): string[] {
    return ['dosage'];
  }

  protected getControlOptionsField(controlName: string): string {
    return `${controlName}s`;
  }

  protected get dialogValidationRegExp(): RegExp {
    return /\d+(\.\d+)*(\s){0,1}(mg|ml|gram|mcg)/;
  }

  protected dialogTitle(controlName?: string): string {
    return 'Enter a dosage (mg or ml units)';
  }

  private trackOtherOptionSelection(controlName: string, control: FormControl): void {
    control.valueChanges.pipe(
      takeUntil(this._destroy$),
      filter(val => val?.toLowerCase() === 'other'),
      withLatestFrom(control.valueChanges.pipe(filter(val => val?.toLowerCase() !== 'other'))),
      concatMap(([currentValue, prevValue]: [string, string]) => this.dialogService.open<false | [true, { input: string }]>(PpcustomdialogComponent, {
        ...new MatDialogConfig(), ...this.stdDialogConfig, data: {
          isDialog: true,
          title: this.dialogTitle(controlName),
          input: 0,
          validatorRegExp: this.dialogValidationRegExp,
          returnValue: true,
          okText: 'Ok'
        }
      }).pipe(map(dialogValue => {
        let dialogInput = '';
        if (dialogValue) {
          dialogInput = dialogValue[1].input;
          this.businessProcedure[this.getControlOptionsField(controlName)] = uniq([...clone(this.businessProcedure[this.getControlOptionsField(controlName)]), dialogInput]);
        }
        return [prevValue, dialogInput];
      }))),
      tap((values: string[]) => {
        const [prevValue, dialogValue] = values;
        control.patchValue(dialogValue || prevValue);
        this.cdRef.detectChanges();
      })
    ).subscribe();
  }
}
