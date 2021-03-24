import { Injectable } from '@angular/core';
import { clone, flatten, isNil, uniq } from 'ramda';

import { forkJoin, Observable, of } from 'rxjs';
import { catchError, concatAll, distinctUntilChanged, filter, finalize, map, takeUntil, tap } from 'rxjs/operators';

import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { OrderStateEnum } from '../../common/enums';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { Lab } from '../../common/interfaces/labs.interface';
import { orderedMeasurementsToVitals } from '../../common/models/vitals.model';
import { PatientDataFacadeService } from '../../patient-core/patient-data-facade.service';
import { PatientdataService, StateService, SymptomsService } from '../../services';


import { ServicedataService } from '../../services/servicedata.service';

import { UserService } from '../../user/user.service';
import { BusinessLab } from '../business-lab.model';
import { LabsOrdersEnum } from '../enums/labs-orders.enum';
import { FormattedTriageLab } from '../interfaces/formatted-triage-lab.interface';
import { staticLabs as constantLabs, staticLabs } from '../static/labs.static';
import { LabsApiService } from './labs-api.service';
import { LabsStateService } from './labs-state.service';


@Injectable({
  providedIn: 'root'
})
export class LabsService {

  constructor(
    private serviceDataService: ServicedataService,
    private labsApiService: LabsApiService,
    private labsStateService: LabsStateService,
    private patientCoreService: PatientDataFacadeService,
    private stateService: StateService,
    private patientDataService: PatientdataService,
    private symptomsService: SymptomsService,
    private userService: UserService
  ) { }

  public get businessLabs(): BusinessLab[] {
    return this.labsStateService.businessLabs;
  }

  public getBusinessLabsData(): void {
    this.labsApiService.getBusinessLabs().subscribe(labsData => {
      const labsIds = uniq(flatten(constantLabs.map(item => item.ids)));
      this.labsStateService.businessLabsIds = this.userService.getUserRole === UserRolesEnum.PHARMACIST ? uniq(labsData.map(item => item.symptomId)) : labsIds;
    });
  }

  public initPatientLabs(symptoms: Triage[]): void {
    this.labsStateService.wipe();
    this.getOrderedLabs();
    this.labsStateService.businessLabs = this.labsStateService.businessLabsIds.map(symptomId => new BusinessLab(
      symptomId,
      this.symptomsService,
      symptoms.find(item => item.symptomId === symptomId)
    ));

    this.businessLabs.forEach(lab => lab.value.pipe(
      distinctUntilChanged(),
      takeUntil(this.stateService.patient.getCurrent().pipe(filter(event => event === null))),
      tap((value) => lab.dirty = value !== lab.initialValue)
    ).subscribe());
  }

  private updateTriage(triage: Triage[]): void {
    if (triage) this.patientDataService.updatePatient({triage: triage});
  }

  public updateLabResults(): Observable<{ removedLabs: string[], updatedLabs: FormattedTriageLab[] }> {
    const removedLabs = this.businessLabs.filter(item => item.dirty && isNil(item.currentValue)).map(item => item.symptomId);
    const updatedLabs = this.businessLabs.filter(item => item.dirty && !isNil(item.currentValue)).map(item => item.labResult);
    this.stateService.app.workers.add();
    const labsUpdateResult = { removedLabs: removedLabs, updatedLabs: updatedLabs };
    const removeLabs = this.labsApiService.removeLabs(removedLabs, this.patientCoreService.patientId).pipe(tap(data => {
      labsUpdateResult.removedLabs = [];
      this.updateTriage(data.triage);
    }));

    let rerunRos = false;
    if (updatedLabs.find(item => item.SymptomID === 'SYMPT0003962' &&
      item.Response === 'OTHER')) rerunRos = true;
    const updateLabs: Observable<any> = this.labsApiService.updateLabsResult(this.patientCoreService.patientId, updatedLabs, false, rerunRos).pipe(tap(data => {
      this.updateTriage(data.triage);
      this.labsStateService.orderLabState = this.labsStateService.orderLabState.filter(item => !data.triage.find(triage => triage.symptomId === item));
      labsUpdateResult.updatedLabs = [];
    }));

    return forkJoin(
      removeLabs.pipe(
        catchError(error => of(error)),
        map(result => {
          if (result && !result.error && updatedLabs.length) return updateLabs.pipe(catchError(error => of(error)));
          else return of(result);
        }),
        concatAll(),
        finalize(() => this.stateService.app.workers.rm())
      )
    ).pipe(map(() => labsUpdateResult), finalize(() => this.businessLabs.forEach(item => {
      item.dirty = false;
      item.initialValue = item.currentValue;
    })));
  }

  public pushOrdersState(measurementsNewState: OrderStateEnum = OrderStateEnum.NONE): Observable<{message: string}> {
    const labsState = this.orderedLabs.length ? OrderStateEnum.ORDERED : this.businessLabs.some(item => !isNil(item.currentValue)) ? OrderStateEnum.COMPLETED : OrderStateEnum.CANCELLED;
    const ordersState = this.patientDataService.ordersState;
    return this.labsApiService.orderLabs(this.patientCoreService.patientId, {orderedLabs: this.labsStateService.orderLabState, labsState: labsState, orderedMeasurements: this.orderedMeasurements, measurementsState: measurementsNewState}).pipe(tap(() => {
      ordersState.labsState = labsState;
      ordersState.measurementsState = measurementsNewState;
      this.patientDataService.updatePatient({ orders: ordersState });
    }));
  }

  public get orderedLabs(): string[] { return flatten(this.labsStateService.orderLabState.map(item => item.split(', '))); }

  private getOrderedLabs(): void {
    this.labsApiService.getOrderedLabs(this.patientCoreService.patientId).subscribe(result => {
      this.labsStateService.orderLab(result.orderedLabs);
      this.orderMeasurements(result.orderedMeasurements);
    });
  }

  public orderLabs(orders: Array<keyof typeof LabsOrdersEnum | string>): void {
    this.labsStateService.orderLab(orders);
  }

  public removeLabOrder(orders: Array<keyof typeof LabsOrdersEnum | string>): void {
    const mappedOrders: string[] = flatten(orders.map(item => (LabsOrdersEnum[item] || item).split(', ')));
    this.labsStateService.removeLabOrder(mappedOrders);
  }

  public get orderedMeasurements(): string[] {
    return this.labsStateService.orderMeasurementsState;
  }

  public orderMeasurements(measurements: string[]): void {
    this.labsStateService.orderMeasurements(flatten(measurements.map(item => orderedMeasurementsToVitals[item] || item)));
  }

  public removeMeasurementsOrder(measurements: string[]): void {
    this.labsStateService.removeMeasurementOrder(measurements.map(item => orderedMeasurementsToVitals[item] || item));
  }

  public get orderLabsPreset(): Lab[] {
    return clone(
      staticLabs
        .filter(item => item.name !== 'Rapid Flu Test (Influenza A)' && item.name !== 'Rapid Flu Test (Influenza B)')
        .filter(item => !!item.code).filter(item => item['ordering'] && !['vsSense', 'pregnancy'].includes(item.code))
    );
  }
}
