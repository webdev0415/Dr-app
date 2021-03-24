import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EndpointVitals, Vitals, VitalsMeasurements } from 'common/models/vitals.model';
import { Vitals as VitalsModel } from 'common/models/data.model';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';

export enum VitalsRangeEnum {
  RESPIRATORY_RATE,
  PULSE,
  SYSTOLIC,
  DIASTOLIC
}

@Injectable()
export class MeasurementsService {
  private isVitalsChanged = false;
  private _vitals: BehaviorSubject<Vitals> = new BehaviorSubject(new Vitals());

  set setIsVitalsChanged(flag: boolean) {
    this.isVitalsChanged = flag;
  }

  get getIsVitalsChanged() {
    return this.isVitalsChanged;
  }

  public static getVitals(vitals: Measurement[]): VitalsModel {
    const vitalsData: VitalsModel = {
      BP: {SYSTOLIC: 0, DIASTOLIC: 0},
      WEIGHT: 0,
      PULSE: 0,
      BLOOD_OXYGEN: 0,
      HEIGHT: 0,
      TEMPERATURE: 0
    };

    const isVitals = (measurement: Measurement) => measurement.measureType in VitalsMeasurements;

    vitals
      .filter((vital: Measurement) => vital.measureType && vital.value && isVitals(vital))
      .forEach((vital: Measurement) => {
        const value = vital.value.value;

        if (vital.measureType === 'DIASTOLIC') {
          vitalsData.BP.DIASTOLIC = value;
          return;
        }

        if (vital.measureType === 'SYSTOLIC') {
          vitalsData.BP.SYSTOLIC = value;
          return;
        }

        vitalsData[vital.measureType] = value;
      });

    return vitalsData;
  }

  constructor() {}

  /**
   * initialize a vitals from a measurements field of patient data
   * @param measurements Measurements[]
   */
  public init(measurements: Measurement[]) {
    const vitals = new Vitals(measurements);
    this._vitals.next(vitals);
  }

  /**
   * get Vitals as a value
   * @returns {Vitals}
   */
  public get vitals(): Vitals {
    return this._vitals.getValue();
  }


  /**
   * get Vitals as an observable
   * @returns {Observable<Vitals>}
   */
  public get asObservable(): Observable<Vitals> {
    return this._vitals.asObservable();
  }

  /**
   * build a JSON for vitals updating endpoint
   * @returns JSON for vitals updating endpoint
   */
  public get remoteJSON(): EndpointVitals {
    return new EndpointVitals(this._vitals.getValue());
  }

  /**
   * get safety ranges for pulse, RR and blood pressure vitals
   * @param age number
   * @param vitalType VitalsRangeEnum
   */
  public getVitalsRange(age: number, vitalType: VitalsRangeEnum): [number, number] {

    const ranges = {
      pulse: {
        zeroToOne: [80, 160],
        oneToSix: [75, 130],
        sixToEleven: [70, 115],
        elevenToSixteen: [55, 110],
        adult: [60, 100]
      },
      respiratoryRate: {
        zeroToOne: [26, 40],
        oneToSix: [20, 30],
        sixToEleven: [18, 24],
        elevenToSixteen: [16, 24],
        adult: [12, 20]
      },
      systolic: {
        zeroToOne: [74, 100],
        oneToSix: [80, 112],
        sixToEleven: [84, 120],
        elevenToSixteen: [94, 140],
        adult: [90, 140]
      },
      diastolic: {
        zeroToOne: [50, 70],
        oneToSix: [50, 80],
        sixToEleven: [54, 80],
        elevenToSixteen: [62, 88],
        adult: [60, 90]
      },
    };

    const check = (ageRange) => {
      if (vitalType === VitalsRangeEnum.PULSE) return ranges.pulse[ageRange];
      if (vitalType === VitalsRangeEnum.RESPIRATORY_RATE) return ranges.respiratoryRate[ageRange];
      if (vitalType === VitalsRangeEnum.SYSTOLIC)  return ranges.systolic[ageRange];
      if (vitalType === VitalsRangeEnum.DIASTOLIC) return ranges.diastolic[ageRange];
    };

    switch (true) {
      case (age >= 0 && age < 1):
        return check('zeroToOne');
      case (age >= 1 && age < 6):
        return check('oneToSix');
      case (age >= 6 && age < 11):
        return check('sixToEleven');
      case (age >= 11 && age < 16):
        return check('elevenToSixteen');
      case (age > 16):
        return check('adult');
      default: return [0, 0];
    }

  }

}
