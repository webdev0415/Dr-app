import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';

import { compose, prop, sortBy, zipObj } from 'ramda';
import { forkJoin, Subject } from 'rxjs';
import { map, mapTo, pluck, takeUntil, tap } from 'rxjs/operators';


import { AvatarIconsEnum, OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { Injection } from '../interfaces/injection.interface';
import { Medication } from '../interfaces/medication.interface';
import {
  BottomButtonsControl,
  StateBottomButtons
} from '../../components/app/workspace/patientspace/bottom-space/interfaces';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { BusinessMedication } from '../interfaces/business-medication.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';
import { NotificationsProvider } from '../tokens/notifications-provider.token';
import { PatientDataService } from '../tokens/patient-data.token';
import { ProceduresUpdateService } from '../tokens/procedures-update.token';
import { ComponentCanDeactivate } from 'guards/can-deactivate.guard';

export abstract class BaseProceduresComponent<T extends MedicationOrderItem | InjectionOrderItem,
  R extends Medication | Injection, K extends BusinessMedication | BusinessInjection, P extends 'medications' | 'injections'> implements ComponentCanDeactivate, OnInit, OnDestroy, BottomButtonsControl {
  public readonly title: string;
  protected readonly abstract procedureType: 'medications' | 'injections';
  public readonly UserRolesEnum = UserRolesEnum;
  public businessProcedures: K[];
  public unusedProcedures: K[] = [];
  public patientProcedures: R[] = [];
  public orderedProceduresDataDictionary: { [procedureName: string]: K };
  public orderForm: FormGroup = this.fb.group({
    orders: this.fb.array([]),
    procedures: this.fb.array([])
  });

  private _destroy$: Subject<void> = new Subject<void>();

  static getStateOrder = (state: OrderStateEnum): number => {
    // @ts-ignore
    const ordering: {[key in OrderStateEnum]: number} = { [OrderStateEnum.ORDERED]: 1, [OrderStateEnum.COMPLETED]: 2, [OrderStateEnum.CANCELLED]: 3 };
    return ordering[state];
  }

  protected constructor(
    protected proceduresService: ProceduresUpdateService<T, R>,
    private patientDataService: PatientDataService,
    public userRole: UserRolesEnum,
    private notificationsService: NotificationsProvider,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.patientDataService.getPatient().pipe(takeUntil(this._destroy$), pluck(this.procedureType), tap(() => {
      const procedures = this.orderForm.get('procedures') as FormArray;
      procedures.clear();
      procedures.markAsPristine();
      procedures.markAsUntouched();
      const orders = this.orderForm.get('orders') as FormArray;
      orders.clear();
      orders.markAsPristine();
      orders.markAsUntouched();
      this.cdRef.detectChanges();
      // @ts-ignore
    })).subscribe((data: R[]) => {
      this.patientProcedures = sortBy(compose(BaseProceduresComponent.getStateOrder, prop('state')), data);
      this.businessProcedures = sortBy(prop('name'), this.getBusinessProcedures());
      this.orderedProceduresDataDictionary = zipObj(this.patientProcedures.map(item => item.name), this.patientProcedures.map(item => this.businessProcedures.find(procedure => procedure.name === item.name)));
      this.unusedProcedures = this.businessProcedures.filter(item => !this.orderedProceduresDataDictionary[item.name]);

      this.patientProcedures.forEach(item => (this.orderForm.get('procedures') as FormArray).push(this.fb.control(item)));
      this.unusedProcedures.forEach(procedure => {
        (this.orderForm.get('orders') as FormArray).push(this.fb.control(this.getDefaultOrderState(procedure), this.validateOrder));
      });
      this.cdRef.detectChanges();
    });
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      save: true
    };
  }

  getDisabledBottomButtons(): StateBottomButtons {
    const state = this.orderForm.valid && (!this.orderForm.get('procedures').pristine || this.orderForm.get('orders').value.some(item => item.state === OrderStateEnum.ORDERED));
    return {
      save: !state
    };
  }

  onClickBottomButton(nameButton: string): void {
    this.bottomButtonActions[nameButton]();
  }

  private get bottomButtonActions(): { [button: string]: () => any } {
    return {
      save: () => this.saveProcedures()
    };
  }

  public get avatarIcon(): string {
    if (this.userRole === UserRolesEnum.OFFICE_CLERK) {
      return AvatarIconsEnum.CLERK_OR_OM;
    }
    return AvatarIconsEnum.PRACTITIONER;
  }

  protected validateOrder(data: AbstractControl): ValidationErrors {
    const order: Partial<R> = data.value;
    if (order && order.state === OrderStateEnum.ORDERED && !(order.route && order.dosage)) {
      return { invalid: true };
    }
    return null;
  }

  public saveProcedures(): void {
    forkJoin([
      this.proceduresService.order(this.procedureType, this.orderForm.get('orders').value.filter(item => item.state === OrderStateEnum.ORDERED)),
      this.proceduresService.update(this.procedureType, this.orderForm.get('procedures').value).pipe(mapTo(this.orderForm.get('procedures').value))
    ]).pipe(map(([ordered, updated]) => [...ordered, ...updated])).subscribe((procedures: R[]) => {
      this.patientDataService.updatePatient({ [this.procedureType]: procedures });
      this.notificationsService.success('Procedures have been saved.');
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  canDeactivate() {
    return this.orderForm.get('orders').valid && this.orderForm.get('procedures').valid;
  }

  protected getBusinessProcedures(): K[] {
    return [];
  }

  protected getDefaultOrderState(procedure: K): Partial<R> {
    return {
      name: procedure.name,
      state: OrderStateEnum.NONE,
      dosage: '',
      route: '',
      toleratedWell: true,
      noDifficulty: true
    } as Partial<R>;
  }

}
