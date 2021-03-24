import {
  ChangeDetectorRef,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';

import { clone, keysIn, uniq } from 'ramda';
import { Subject } from 'rxjs';
import {
  concatMap,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
  tap, withLatestFrom
} from 'rxjs/operators';


import { OrderStateEnum } from '../../common/enums';
import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogService } from '../../services/app/dialog.service';
import { stdDialogConfig } from '../../static/app.constants';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { BusinessMedication } from '../interfaces/business-medication.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';

export abstract class ProcedureOrderRowComponent<T extends BusinessMedication | BusinessInjection, K extends MedicationOrderItem | InjectionOrderItem>
  implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() businessProcedure: T;
  public orderForm: FormGroup;

  private _destroy$ = new Subject<void>();
  private readonly stdDialogConfig = stdDialogConfig;

  private onChange = (value: K) => {};
  private onTouched = () => {};

  protected constructor(protected fb: FormBuilder, private cdRef: ChangeDetectorRef, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.orderForm = this.initialFormGroup;
    this.orderForm.get('state').valueChanges.pipe(
      takeUntil(this._destroy$),
      map((orderState: OrderStateEnum) => orderState !== OrderStateEnum.NONE),
      distinctUntilChanged(),
      tap((value: boolean) => {
        this.changeableFieldsControls
          .map(([controlName, control]) => control)
          .forEach(control => {
            control.setValidators(value ? Validators.required : null);
            control.updateValueAndValidity();
          });
        this.setDisabledState(!value);
        this.orderForm.get('state').enable();
      }),
    ).subscribe();
    this.orderForm.valueChanges.pipe(takeUntil(this._destroy$), tap(value => this.onChange(value))).subscribe();

    this.changeableFieldsControls.filter(([controlName, control]) => controlName === 'dosage').forEach(
      ([controlName, control]) => control.valueChanges.pipe(
        takeUntil(this._destroy$),
        filter(val => val?.toLowerCase() === 'other'),
        withLatestFrom(control.valueChanges.pipe(filter(val => val?.toLowerCase() !== 'other'))),
        concatMap(([currentValue, prevValue]: [string, string]) => this.dialogService.open<false | [true, { input: string }]>(PpcustomdialogComponent, {
          ...new MatDialogConfig(), ...this.stdDialogConfig, data: {
            isDialog: true,
            title: 'Enter a dosage (mg or ml units)',
            input: 0,
            validatorRegExp: /\d+(\.\d+)*(\s){0,1}(mg|ml|gram|mcg)/,
            returnValue: true,
            okText: 'Ok'
          }
        }).pipe(map(dialogValue => {
          let dialogInput: string = null;
          if (dialogValue) {
            dialogInput = dialogValue[1].input;
            this.businessProcedure[`${controlName}s`] = uniq([...clone(this.businessProcedure[`${controlName}s`]), dialogInput]);
            this.cdRef.detectChanges();
          }
          return [prevValue, dialogInput];
        }))),
        tap((values: string[]) => {
          const [prevValue, dialogValue] = values;
          control.patchValue(dialogValue || prevValue);
        })
      ).subscribe()
    );

    this.cdRef.detectChanges();
  }

  protected get initialFormGroup(): FormGroup {
    return this.fb.group({
      name: this.fb.control(this.businessProcedure.name),
      state: this.fb.control(null),
      dosage: this.fb.control(''),
      route: this.fb.control(''),
      toleratedWell: this.fb.control(true),
      noDifficulty: this.fb.control(true),
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.orderForm[isDisabled ? 'disable' : 'enable']();
  }

  writeValue(order: K): void {
    this.orderForm.setValue(order);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public get isOrdered(): boolean {
    return this.orderForm.get('state').value === OrderStateEnum.ORDERED;
  }

  public toggleOrder(event: UIEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.orderForm.get('state').patchValue(this.isOrdered ? OrderStateEnum.NONE : OrderStateEnum.ORDERED);
  }

  protected get changeableFields(): string[] {
    return ['dosage', 'route'];
  }

  private get changeableFieldsControls(): Array<[string, AbstractControl]> {
    return this.changeableFields.map(controlName => [controlName, this.orderForm.get(controlName)]);
  }
}
