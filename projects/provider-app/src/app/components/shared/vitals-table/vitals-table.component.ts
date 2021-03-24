import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { forkJoin, of, Subscription } from 'rxjs';

import { Data, Orders } from 'common/models/data.model';
import { EndpointVitals, orderedMeasurementsToVitals, VitalFieldError, Vitals } from 'common/models/vitals.model';

import { pagesTitles } from 'static/static.pages';
import * as statics from 'static/static.vitals';
import { AuditsDat } from 'static/static.vitals';

import { DataService } from 'services/data.service';
import { StateService } from 'services/state.service';
import { VitalsRangeEnum, MeasurementsService } from 'services/measurements.service';
import { Measurement } from 'common/models/data.model';
import { NotificationsService } from '../../notifications/notifications.service';

import { isNullOrUndefined, isUndefined } from 'util';
import { Utils } from 'utils/utils';
import { catchError, concatMap, finalize } from 'rxjs/operators';
import { RerunDiagnosticEngine } from '../../app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.actions';
import { Store } from '@ngxs/store';
import { UserService } from 'user/user.service';
import { HistoryTypesEnums, OrderStateEnum } from 'common/enums';
import { LabsService } from '../../../labs/services/labs.service';


@Component({
  selector: 'pa-vitals-table',
  templateUrl: './vitals-table.component.html',
  styleUrls: ['./vitals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VitalsTableComponent implements AfterViewInit, OnInit {
  @Input() Patient: Data;
  @Input() vitalFieldClass: string;
  @Input() audits: AuditsDat;
  @Input() outsideSaveButton = false;
  public labelClass = '';
  public bmiValue;

  public readonly title = pagesTitles.physicalExam;
  public viewOnly: boolean;
  public userRole: string;

  private subs: Subscription[] = [];

  public vitals: Vitals = new Vitals();

  private initialVitals: Measurement[] = [];

  public changedVitals: { vital: string; state: boolean; }[] = [];
  public vitalsUpdInProgress = false;
  private vitalsErrors: VitalFieldError[] = [];
  public vitalsInvalid = false;
  public lastTemperature: number;

  // TODO: move all this initial structs to a separate file
  public media = JSON.parse(JSON.stringify(statics.mediaDefault));

  constructor(
    private dataService: DataService,
    private stateService: StateService,
    private userService: UserService,
    private notificationService: NotificationsService,
    private measurementsService: MeasurementsService,
    private labsService: LabsService,
    private store: Store,
    private changeDetector: ChangeDetectorRef
  ) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    this.userRole = this.userService.getUserRole;
    this.setInitialMeasurements();

    this.subs.push(this.dataService.getPatient().subscribe(patient => {
      if (!patient) return;
      this.Patient = patient;

      if (this.measurementsService.vitals) {
        this.vitals = this.measurementsService.vitals;
        this.lastTemperature = this.vitals.TEMPERATURE ? this.vitals.TEMPERATURE : null;
      }
    }));
  }

  ngOnInit(): void {
    const bmiSymptom = this.Patient.triage.find(item => item.symptomId === HistoryTypesEnums.BMI);
    if (bmiSymptom) {
      this.bmiValue = Number(bmiSymptom.measurement).toFixed(2);
    }
  }

  /**
   * returns vital fields errors filtered by changed fields
   */
  getVitalErrors(): VitalFieldError[] {
    return this.vitalsErrors.filter(error => this.changedVitals.map(vital => {
      if (vital.state) return vital.vital;
    }).includes(error.labName));
  }

  /**
   * check vital fields values to notify if some of them are danger.
   */
  vitalFieldsAudit(): void {
    this.changedVitals.filter(field => field.state).forEach(field => {
      let fieldValue = this.vitals[field.vital];

      const showErrorNotification = (message: string, title: string, vital: VitalsRangeEnum) => {
        const [minRange, maxRange] = this.measurementsService.getVitalsRange(this.Patient.patientInformation.age.years, vital);
        if (fieldValue < minRange || fieldValue > maxRange) {
          this.notificationService.error(message, title);
        }
      };

      if (Array.isArray(fieldValue)) fieldValue = fieldValue[0];
      switch (field.vital) {
        case 'BLOOD_OXYGEN':
          if (fieldValue < 90) {
            fieldValue < 60
              ? this.notificationService.error('Danger - Oxygen Sat outside of safety range.', 'Please check value')
              : this.notificationService.warning('Warning - Oxygen Sat is low.', 'Please check value');
          }
          break;
        case 'SYSTOLIC':
          showErrorNotification('Danger - Systolic pressure outside of safety range.', 'Please check value', VitalsRangeEnum.SYSTOLIC);
          break;
        case 'DIASTOLIC':
          showErrorNotification('Danger - Diastolic pressure outside of safety range.', 'Please check value', VitalsRangeEnum.DIASTOLIC);
          break;
      }
    });
  }

  public putVitals() {
    const vitalErrors = this.getVitalErrors();
    if (vitalErrors.length) {
      vitalErrors.forEach(error => this.notificationService.error(error.recommendation, `${error.labName} incorrect value.`));
      this.vitalsInvalid = true;
      return;
    }

    this.vitalFieldsAudit();
    this.vitalsUpdInProgress = true;

    const endpointVitals = new EndpointVitals(this.vitals, this.changedVitals);
    const remotejson = endpointVitals.json;
    const patientId = this.Patient.patientInformation.patientId;

    this.dataService.putVitals(patientId, remotejson).pipe(
      concatMap(() => this.labsService.pushOrdersState(this.getOrders().measurementsState)),
      finalize(() => {
        this.vitalsUpdInProgress = false;
        this.changeDetector.detectChanges();
      })
    ).subscribe(
      (result) => this.handleVitalsResponse(result, endpointVitals, remotejson, patientId),
      (result) => this.handleVitalsResponse(result, endpointVitals, remotejson, patientId),
    );
  }

  checkVitalsChanged(): boolean {
    this.initialVitals.forEach(measure => {
      if (!isUndefined(this.vitals[measure.measureType])) {
        const V = this.vitals[measure.measureType];

        const isEqual = V == measure.value.value || (V == 0 && isNullOrUndefined(measure.value.value)); // tslint:disable-line
        const isVitalIsSingleArray = Array.isArray(V) && V.length === 1;
        const isVitalIsMultiArray = Array.isArray(V) && V.length === 2;
        const isNullZeroEqual = isVitalIsSingleArray && isEqual;
        const isMultiAndZeroEqual = isVitalIsMultiArray && (`${V[0]}/${V[1]}` === String(measure.value.value) || (V[0] === 0 && V[1] === 0 && measure.value.value === 0));

        if (isEqual || isNullZeroEqual || isMultiAndZeroEqual)
          this.changedVitals = Utils.pushUniq(this.changedVitals, { vital: measure.measureType, state: false }, (a, b) => a.vital === b.vital);
        else
          this.changedVitals = Utils.pushUniq(this.changedVitals, { vital: measure.measureType, state: true }, (a, b) => a.vital === b.vital);
      }
    });
    const isVitalsChanged: boolean = this.changedVitals.map(value => value.state).some(ok => ok);
    this.measurementsService.setIsVitalsChanged = isVitalsChanged;
    return isVitalsChanged;
  }

  /**
   * vitals fields validation supervision
   * @param event
   */
  onValidChange(event: VitalFieldError): void {
    if (!event.validState) {
      this.vitalsErrors = Utils.pushUniq(this.vitalsErrors, event, (a, b) => a.measureType === b.measureType);
    } else {
      this.vitalsErrors = this.vitalsErrors.filter(error => error.measureType !== event.measureType);
      if (!this.getVitalErrors().length) this.vitalsInvalid = false;
    }
  }

  /**
   * update initial vitals after new vitals was successfully uploaded
   * @param remotejson
   */
  updateInitialVitals(remotejson): void {
    let bptype, bpvalue, bptime;
    this.Patient.measurements = this.Patient.measurements.map(measure => {
      if (measure.temp) {
        let measureType = measure.measureType.toLowerCase();
        let remoteMeasureType;
        switch (measureType) {
          case('left_eye'):
          case('right_eye'):
            remoteMeasureType = 'vision';
            break;
          case('pulse'):
            remoteMeasureType = measureType;
            measureType = `${remoteMeasureType}_value`;
            break;
          case('blood_oxygen'):
            remoteMeasureType = 'o2';
            measureType = 'o2value';
            break;
          case('diastolic'):
          case('systolic'):
            remoteMeasureType = 'blood_pressure';
            break;
          default:
            remoteMeasureType = measureType;
            break;
        }
        if (remotejson[remoteMeasureType]) {
          const newMeasure = remotejson[remoteMeasureType];
          let newtimestamp;
          Object.keys(newMeasure[0]).forEach(key => {
            if (key.includes('timestamp')) newtimestamp = newMeasure[0][key];
          });
          if (newtimestamp) {
            measure.timestamp = newtimestamp;
            measure.value.value = newMeasure[0][measureType];
            if (remoteMeasureType === 'blood_pressure') {
              if (measureType === 'systolic') {
                bpvalue = newMeasure[0]['diastolic'];
                bptype = 'DIASTOLIC';
              } else {
                bpvalue = newMeasure[0]['systolic'];
                bptype = 'SYSTOLIC';
              }
              bptime = newtimestamp;
            }
          }
        }
        delete measure.temp;
      }
      return measure;
    });
    if (bptime && bptype && bpvalue)
      this.Patient.measurements.push({
        timestamp: bptime,
        value: {
          bodyPart: '',
          bodySide: '',
          createdAt: bptime,
          file: '',
          fileName: '',
          fileType: 'DoctorApp',
          status: '',
          value: Number(bpvalue)
        },
        measureType: bptype,
        trustabilityScore: 5
      });
    this.dataService.updatePatient(this.Patient);
    this.setInitialMeasurements();
  }

  updateMeasurements() {
    const now = new Date().toISOString();
    this.checkVitalsChanged();
    this.Patient['vitals_edited'] = true;

    const measurements = this.Patient.measurements.filter(measurement => !measurement.temp);

    const buildMeasure = (type, value): Measurement => {
      try {
        return {
          temp: true,
          timestamp: now,
          value: {
            bodyPart: '',
            bodySide: '',
            createdAt: now,
            file: '',
            fileName: '',
            fileType: 'DoctorApp',
            status: '',
            value: Number(value)
          },
          measureType: type,
          trustabilityScore: 5
        };
      } catch (e) {
        console.error(`Error building measure ${type} (${value})`, e);
      }
    };

    this.changedVitals.forEach(changedVital => {
      if (changedVital.state) measurements.unshift(buildMeasure(changedVital.vital, this.vitals[changedVital.vital]));
    });

    this.dataService.updatePatient(Utils.clone({ measurements }));
  }

  /**
   * updating initialVitals with latest from patient's measurements
   */
  private setInitialMeasurements() {
    const measurements: Measurement[] = [];

    this.dataService.getPatientLastValue().measurements.forEach(item => {
      const measurementsIndex = measurements.findIndex(measure => measure.measureType === item.measureType);
      if (measurementsIndex < 0) {
        measurements.push(item);
        return;
      }
      const existingMeasurement = measurements[measurementsIndex];

      const latest = new Date(item.timestamp) > new Date(existingMeasurement.timestamp);
      if (latest) measurements[measurementsIndex] = item;
    });
    this.initialVitals = measurements;
  }

  private getOrders(): Orders {
    let measurementsState = this.Patient.orders.measurementsState;
    this.labsService.removeMeasurementsOrder(this.changedVitals.filter(item => item.state).map(item => item.vital));
    let orderedMeasurements: string[] = this.labsService.orderedMeasurements;

    this.changedVitals.forEach(item => {
      if (orderedMeasurements.includes(item.vital) && item.state) {
        orderedMeasurements = orderedMeasurements.filter(value => value !== item.vital);
      }
    });

    if (!orderedMeasurements.length) {
      measurementsState = OrderStateEnum.COMPLETED;
    } else measurementsState = OrderStateEnum.ORDERED;

    return {
      orderedLabs: this.Patient.orders.orderedLabs,
      orderedMeasurements: orderedMeasurements,
      labsState: this.Patient.orders.labsState,
      measurementsState: measurementsState
    };

  }

  private handleVitalsResponse(result: any, endpointVitals: EndpointVitals, remotejson: any, patientId: string) {
    if (result) {
      switch (result.status) {
        case 0: {
          this.vitalsUpdInProgress = false;
          break;
        }
        case 400: {
          Object.keys(result.error).forEach((errorKey: string) => {
            const err = result.error[errorKey][0];
            let message = '';
            const keys = Object.keys(err);
            keys.forEach((key: string) => {
              let title = endpointVitals.RemoteNameToFieldName(errorKey);
              const readableKey = endpointVitals.RemoteNameToFieldName(key);
              if (readableKey !== title) title += `: ${readableKey}`;
              message = err[key].join('\n');
              this.notificationService.error(message, title);
            });
          });
          this.notificationService.error(`Vitals update failed`, 'Update Vitals');
          this.vitalsUpdInProgress = false;
          break;
        }
        case 404: {
          this.notificationService.warning('This patient has no measurements records', 'Update Vitals');
          this.vitalsUpdInProgress = false;
          break;
        }
        case 500: {
          this.notificationService.error('Update Vitals', 'Internal Server Error.');
          this.vitalsUpdInProgress = false;
          break;
        }
        case 403: {
          break;
        }
        default: {
          let rerunHpi = false;
          let rerunRos = false;
          if (this.changedVitals.some(item => item.vital.toLowerCase() === 'temperature' && item.state)
            && this.vitals.TEMPERATURE > 99 && this.lastTemperature <= 99) {
            rerunRos = true;
            rerunHpi = true;
          }
          this.lastTemperature = this.vitals.TEMPERATURE;
          this.dataService.updatePatient({orders: this.getOrders()});
          this.dataService.rerunTriage([], patientId, rerunHpi, rerunRos).pipe(catchError(error => {
            this.notificationService.error(`Vitals update failed`, 'Update Vitals');
            return of(error);
          }))
            .subscribe(rerunResult => {
              if (rerunResult.triage) {
                this.notificationService.success(`Vitals updated successfully`, 'Update Vitals');
                this.updateInitialVitals(remotejson);
                this.store.dispatch(new RerunDiagnosticEngine(rerunResult.diagnosticEngine, rerunResult.unlikelyDiagnosticEngine || [], rerunResult.triage));
              }
              this.vitalsUpdInProgress = false;
            });
        }
      }
    }
  }

  ngAfterViewInit() {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  public get saveButtonDisabled(): boolean {
    return this.vitalsUpdInProgress || !this.checkVitalsChanged() || this.vitalsInvalid;
  }
}
