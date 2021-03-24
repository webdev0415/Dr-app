import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { uniq, flatten } from 'ramda';

import { BusinessLab } from '../business-lab.model';
import { LabsOrdersEnum } from '../enums/labs-orders.enum';

@Injectable({
  providedIn: 'root'
})
export class LabsStateService {
  private BusinessLabs: BehaviorSubject<BusinessLab[]> = new BehaviorSubject<BusinessLab[]>(null);

  public orderLabState: string[] = [];
  public orderMeasurementsState: string[] = [];
  public businessLabsIds: string[] = [];

  public get businessLabs(): BusinessLab[] {
    return this.BusinessLabs.getValue();
  }

  public set businessLabs(labs: BusinessLab[]) {
    this.BusinessLabs.next(labs);
  }

  public orderLab(orders: Array<keyof typeof LabsOrdersEnum | string>): void {
    this.orderLabState = uniq([
      ...this.orderLabState,
      ...flatten(
        orders.map((item: keyof typeof LabsOrdersEnum | string) => {
          return (LabsOrdersEnum[item] || item).split(', ');
        })
      )
    ]);
  }

  public wipe(): void {
    this.BusinessLabs.next([]);
    this.orderLabState = [];
    this.orderMeasurementsState = [];
  }

  public removeLabOrder(orders: string[]): void {
    this.orderLabState = this.orderLabState.filter(item => !orders.includes(item));
  }

  public orderMeasurements(orders: Array<string>): void {
    this.orderMeasurementsState = uniq([
      ...this.orderMeasurementsState,
      ...orders
    ]);
  }

  public removeMeasurementOrder(orders: string[]): void {
    this.orderMeasurementsState = this.orderMeasurementsState.filter(item => !orders.includes(item));
  }

}
