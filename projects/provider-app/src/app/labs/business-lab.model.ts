import { clone, isNil, max, min, reduce, flatten } from 'ramda';
import { BehaviorSubject, Observable } from 'rxjs';
import { Date } from 'sugar';


import { ResponseDetail } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/response-detail.interface';
import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { SymptomsService } from '../services';
import { BusinessLabInterface } from './interfaces/business-lab.interface';
import { FormattedTriageLab } from './interfaces/formatted-triage-lab.interface';
import { nullLabResult } from './static/null-lab-result.static';
import { LabResponse } from './types/lab-response.type';
import { LabType } from './types/lab.type';

interface LabValueUpdate {
  Measurement: number;
  Values: Array<Array<string | number | null>>;
  responseDetails: ResponseDetail[];
  Response: LabResponse;
}

export class BusinessLab implements Partial<BusinessLabInterface> {
  public name: string;
  public groupName: string;
  public type: LabType;
  public labResult: FormattedTriageLab;
  public updateRules: { [rule: string]: { predicate: (val: number | boolean | string) => boolean; value: string; response: LabResponse } } = {};
  public limits: { [key in 'lowerLimit' | 'upperLimit']: number };
  public dirty = false;
  public initialValue: string | number | boolean | null;
  public units: string;

  private _value: BehaviorSubject<boolean | string | number> = new BehaviorSubject<boolean | string | number>(null);
  public multipleValues: string[];
  private valueUpdateFunction: (value) => LabValueUpdate;

  private static booleanTypeTest(multipleValues: string[]): boolean {
    return multipleValues.every(value => value.match(/^(Positive|Negative)$/));
  }

  private static numberTypeTest(multipleValues: string[]): boolean {
    const reMin = /^\d+(\.\d+)?\s?-\s?\d+(\.\d+)?$/;
    const reMax = /^More Than \d+(\.\d+)?$/;
    return multipleValues.every(value => value.match(reMin) || value.match(reMax));
  }

  private static rateTypeTest(multipleValues: string[]): boolean {
    return multipleValues.some(value => value.match(/^Greater Than or Equal to/i));
  }

  private static parseLimits(multipleValues: string[]): [number, number] {
    const limits = multipleValues.map(item => reduce(max, 0, item.match(/\d+(\.\d+)?/g).map(val => +val)));
    return [<number>reduce(min, Infinity, limits), <number>reduce(max, 0, limits)];
  }

  constructor(
    public symptomId: string,
    private symptomsService: SymptomsService,
    private triage: Triage = {measurement: null, response: null, values: [[null, null, null]]} as Triage
  ) {
    const parsedSymptom = symptomsService.searchParsedSymptom(symptomId);
    this.name = parsedSymptom.name;
    const parsedSymptomCategory = this.symptomsService.getSymptomCategory(parsedSymptom.categoryID).categoryName;
    switch (true) {
      case Boolean(symptomId.match(/^SYMPT000395(4|5)$/)):
        this.groupName = 'Rapid Flu Test';
        break;
      case parsedSymptomCategory === 'Urinalysis':
        this.groupName = 'Urine Dip Stick';
        break;
      default:
        this.groupName = parsedSymptomCategory;
    }
    this.buildUpdateRules(parsedSymptom.multipleValues);
  }

  private buildUpdateRules(multipleValuesKey: string): void {
    const multipleValues = this.symptomsService.getSymptomDescriptions(multipleValuesKey).map(item => item.name);
    let lowerLimit: number, upperLimit: number;
    this.multipleValues = multipleValues;
    let initialValue: boolean | number | string;

    switch (true) {
      case BusinessLab.booleanTypeTest(multipleValues):
        this.type = 'boolean';
        this.updateRules = {
          'Positive': {predicate: (val: boolean) => val === true, value: 'Positive', response: 'True'},
          'Negative': {predicate: (val: boolean) => val === false, value: 'Negative', response: 'False'}
        };
        this.valueUpdateFunction = this.updateBooleanResult;
        initialValue = this.triage.response;
        break;

      case BusinessLab.numberTypeTest(multipleValues):
        this.type = 'number';
        [lowerLimit, upperLimit] = BusinessLab.parseLimits(multipleValues);
        this.updateRules = {
          'Low': {
            predicate: (val: number) => val < lowerLimit,
            value: multipleValues.find(item => item.match(new RegExp(String(lowerLimit)))),
            response: 'Other'
          },
          'High': {
            predicate: (val: number) => val >= upperLimit,
            value: multipleValues.find(item => item.match(new RegExp(String(upperLimit)))),
            response: 'Other'
          },
          'Normal': {
            predicate: (val: number) => val >= lowerLimit && val < upperLimit,
            value: 'Normal',
            response: 'False'
          }
        };
        this.valueUpdateFunction = this.updateNumericResult;
        initialValue = isNil(this.triage.measurement) ? null : +this.triage.measurement;
        break;

      case BusinessLab.rateTypeTest(multipleValues):
        this.type = 'rate';
        [lowerLimit, upperLimit] = BusinessLab.parseLimits(multipleValues);
        this.updateRules = {
          'Low': {
            predicate: (val: number) => val < lowerLimit,
            value: multipleValues.find(item => item.match(new RegExp(String(lowerLimit)))),
            response: 'Other'
          },
          'High': {
            predicate: (val: number) => val >= upperLimit,
            value: multipleValues.find(item => item.match(new RegExp(String(upperLimit)))),
            response: 'Other'
          },
          'Negative': {
            predicate: (val: number) => val >= lowerLimit && val < upperLimit,
            value: null,
            response: 'False'
          }
        };
        this.valueUpdateFunction = this.updateNumericResult;
        initialValue = isNil(this.triage.measurement) ? null : +this.triage.measurement;
        break;

      default:
        this.type = 'select';
        multipleValues.forEach(item => this.updateRules = {
          ...this.updateRules,
          [item]: {predicate: (val: string) => val === item, value: item, response: 'Other'}
        });
        this.valueUpdateFunction = this.updateStringResult;
        initialValue = this.triage.values[0][0];
        break;
    }

    this.limits = {lowerLimit, upperLimit};
    this.initialValue = initialValue;
    this.updateLabResult(initialValue);
    this.parseUnits();
  }

  public get value(): Observable<boolean | string | number> {
    return this._value.asObservable();
  }

  public get currentValue() {
    return this._value.getValue();
  }

  public updateLabResult(value: string | boolean | number): void {
    this._value.next(value);
    if (isNil(value)) this.labResult = clone(nullLabResult);
    else this.labResult = {
      ...this.valueUpdateFunction(value),
      SymptomID: this.symptomId,
      SymptomName: this.name,
      Location: [],
      SymptomSource: 'MA Added',
      Time: new Date().format('%Y-%m-%d %T.{SSS}').raw
    };
  }

  private updateBooleanResult(labResult: boolean): LabValueUpdate {
    const ruleKey = labResult === true ? 'Positive' : 'Negative';
    const rule = this.updateRules[ruleKey];
    return {
      Measurement: null,
      Values: [[rule.value, null, null]],
      responseDetails: [{description: rule.value, duration: null}],
      Response: rule.response
    };
  }

  private updateNumericResult(labResult: number): LabValueUpdate {
    const ruleKey = Object.keys(this.updateRules).find(key => this.updateRules[key].predicate(labResult));
    const rule = this.updateRules[ruleKey];
    return {
      Measurement: labResult,
      Values: [[rule.value, null, null]],
      responseDetails: [{description: rule.value, duration: null}],
      Response: rule.response
    };
  }

  private updateStringResult(labResult: string): LabValueUpdate {
    const rule = this.updateRules[labResult];
    return {
      Measurement: null,
      Values: [[rule.value, null, null]],
      responseDetails: [{description: labResult, duration: null}],
      Response: rule.response
    };
  }

  private parseUnits(): void {
    const unitsRe = /\s[a-zA-Z]+\/[a-zA-Z]+$/;
    this.units = flatten(this.multipleValues.map(item => item.match(unitsRe))).find(match => !!match);
  }
}
