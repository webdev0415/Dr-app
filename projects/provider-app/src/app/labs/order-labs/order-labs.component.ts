import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { clone, compose, isNil, prop, sortBy } from 'ramda';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';


import { Measurement } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { AuditMeasurementsTypes } from '../../../../../pharmacist/src/lib/side-models/common/types/audit-measurement.type';
import { OrderStateEnum } from '../../common/enums';
import { Lab } from '../../common/interfaces/labs.interface';
import { orderedMeasurementsToVitals } from '../../common/models/vitals.model';
import { PatientDataFacadeService } from '../../patient-core/patient-data-facade.service';
import { NotificationsService, StateService } from '../../services';
import { measurementTypes } from '../../static/measurement-types.constant';
import { OrderedStateSorting } from '../enums/ordered-state-sorting.enum';
import { LabsOrdersEnum } from '../enums/labs-orders.enum';
import { LabsService } from '../services/labs.service';


@Component({
  selector: 'pa-order-labs',
  templateUrl: './order-labs.component.html',
  styleUrls: ['./order-labs.component.scss']
})
export class OrderLabsComponent implements OnInit, OnDestroy {
  public viewOnly: boolean;

  public rapidLabs: Lab[] = this.labsService.orderLabsPreset;
  public measurementTypes: { measurement: string, state: OrderStateEnum }[] = Object.keys(measurementTypes).map(measurement => ({ measurement, state: OrderStateEnum.NONE }));

  public readonly OrderStateEnum = OrderStateEnum;

  private patientMeasurements: Measurement[] = [];

  // @ts-ignore
  private labsRelatedSymptoms: { [p in keyof typeof LabsOrdersEnum ]: string[] } = {};

  private _destroy$ = new Subject<void>();


  constructor(
    private labsService: LabsService,
    private stateService: StateService,
    private patientDataService: PatientDataFacadeService,
    private notificationsService: NotificationsService
  ) {
    Object.keys(LabsOrdersEnum).forEach(orderType => { this.labsRelatedSymptoms = { ...this.labsRelatedSymptoms, [orderType]: LabsOrdersEnum[orderType].split(', ') }; });
    this.patientDataService.measurement$.pipe(takeUntil(this._destroy$)).subscribe(measurement => this.patientMeasurements = measurement);
  }

  ngOnInit(): void {
    this.viewOnly = this.stateService.patient.getLastViewOnly();
    this.patientDataService.triage$.pipe(takeUntil(this._destroy$), tap(() => {
      this.parseStates();
    })).subscribe();
  }

  private parseStates(): void {
    this.rapidLabs.forEach(lab => lab.state = this.getLabState(lab.code));
    this.measurementTypes.forEach(measurement => measurement.state = this.getMeasurementState(measurement.measurement) );
    this.sortDataSource('measurementTypes');
    this.sortDataSource('rapidLabs');
  }

  public getButtonText(state: OrderStateEnum): 'Ordered' | 'Completed' | 'Selected' | 'Order' {
    switch (state) {
      case OrderStateEnum.ORDERED:
        return 'Ordered';
      case OrderStateEnum.COMPLETED:
        return 'Completed';
      case OrderStateEnum.NONE:
      case OrderStateEnum.CANCELLED:
        return 'Order';
      case OrderStateEnum.SELECTED:
        return 'Selected';
    }
  }

  public getLabState(lab: keyof typeof LabsOrdersEnum): OrderStateEnum {
    const relatedSymptoms = this.labsRelatedSymptoms[lab];
    if (relatedSymptoms.some(item => this.labsService.orderedLabs.includes(item))) return OrderStateEnum.ORDERED;
    if (relatedSymptoms.some(item => !isNil(this.labsService.businessLabs.find(businessLab => businessLab.symptomId === item).currentValue))) return OrderStateEnum.COMPLETED;
    return OrderStateEnum.NONE;
  }

  public getMeasurementState(measurement: string): OrderStateEnum {
    const relatedMeasurements: AuditMeasurementsTypes[] = measurementTypes[measurement];
    if (relatedMeasurements.every(measure => {
      const currentValue = this.patientMeasurements.find(item => item.measureType === measure);
      return currentValue && currentValue.value && currentValue.value.value;
    })) return OrderStateEnum.COMPLETED;
    const relatedOrders: string[] = orderedMeasurementsToVitals[measurement] || [measurement];
    if (relatedOrders.some(item => this.labsService.orderedMeasurements.includes(item))) return OrderStateEnum.ORDERED;
    return OrderStateEnum.NONE;
  }

  public getNewState(currentState: OrderStateEnum): OrderStateEnum {
    switch (currentState) {
      case OrderStateEnum.ORDERED:
        return OrderStateEnum.CANCELLED;
      case OrderStateEnum.CANCELLED:
        return OrderStateEnum.ORDERED;

      case OrderStateEnum.NONE:
        return OrderStateEnum.SELECTED;
      case OrderStateEnum.SELECTED:
        return OrderStateEnum.NONE;

      case OrderStateEnum.COMPLETED:
        return OrderStateEnum.COMPLETED;
    }
  }

  public toggleLabState(lab: keyof typeof LabsOrdersEnum): void {
    if (this.viewOnly) return;
    const targetLab = this.rapidLabs.find(item => item.code === lab);
    targetLab.state = this.getNewState(targetLab.state);
    this.sortDataSource('rapidLabs');
  }

  public toggleMeasurementState(measurement: string): void {
    const targetMeasurement = this.measurementTypes.find(item => item.measurement === measurement);
    targetMeasurement.state = this.getNewState(targetMeasurement.state);
    this.sortDataSource('measurementTypes');
  }

  private sortDataSource(dataSource: 'measurementTypes' | 'rapidLabs'): void {
    this[dataSource] = this.sort(this[dataSource] as Array<any>);
  }

  private sort<T extends { state: OrderStateEnum }>(array: Array<T>): Array<T> {
    return sortBy(compose((itemState: OrderStateEnum) => OrderedStateSorting[itemState], prop('state')), array);
  }

  public completeOrder(): Observable<any> {
    this.labsService.removeLabOrder(this.rapidLabs.filter(item => item.state === OrderStateEnum.CANCELLED).map(item => item.code));
    this.labsService.orderLabs(this.rapidLabs.filter(item => item.state === OrderStateEnum.SELECTED).map(item => item.code));

    this.labsService.removeMeasurementsOrder(this.measurementTypes.filter(item => item.state === OrderStateEnum.CANCELLED).map(item => item.measurement));
    this.labsService.orderMeasurements(this.measurementTypes.filter(item => item.state === OrderStateEnum.SELECTED).map(item => item.measurement));
    const measurementsState = this.labsService.orderedMeasurements.length ? OrderStateEnum.ORDERED : this.measurementTypes.some(item => item.state === OrderStateEnum.COMPLETED) ? OrderStateEnum.COMPLETED : OrderStateEnum.CANCELLED;

    return this.labsService.pushOrdersState(measurementsState).pipe(finalize(() => {
      this.notificationsService.success('Orders have been recorded');
      this.parseStates();
    }));
  }

  private get saveButtonDisabled(): boolean {
    return !(
      this.rapidLabs.some(lab => {
        const globalState = this.getLabState(lab.code);
        return lab.state !== globalState && globalState !== OrderStateEnum.COMPLETED;
      }) ||
      this.measurementTypes.some(measurement => measurement.state !== this.getMeasurementState(measurement.measurement))
    );
  }

  public getDisabledBottomButtons(): { sendOrder: boolean } {
    return { sendOrder: this.saveButtonDisabled };
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
