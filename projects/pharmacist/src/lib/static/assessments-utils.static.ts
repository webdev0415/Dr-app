import { isEmpty, isNil } from 'ramda';
import { Date } from 'sugar';
import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';


import { Triage } from '../side-models/common/interfaces/triage/triage';


export const isEmptyOrNull = (values: any): boolean => isNil(values) || isEmpty(values);
export const durationSpecified = (symptomValues: Array<Array<string | number>>): boolean => !isEmptyOrNull(symptomValues) && symptomValues.some(values => !(isEmptyOrNull(values) || !values[1] || !values[2]));
export const isBefore = (value: Array<string | number>, compareDate: string): boolean => {
  const [symptom, amount, units] = value;
  return new Date().rewind(compareDate).isAfter(new Date().rewind([amount, units].join(' ')).raw).raw;
};
export const isAfter = (value: Array<string | number>, compareDate: string): boolean => {
  const [symptom, amount, units] = value;
  return new Date().rewind(compareDate).isBefore(new Date().rewind([amount, units].join(' ')).raw).raw;
};
export const timeRelatedSymptomsCheck = (symptoms: Triage[], symptomRelatedCb: (symptom: Triage) => boolean, compareToDate: string, compareToBefore: boolean): boolean | null => {
  const relatedSymptoms = symptoms.filter(item => symptomRelatedCb(item));
  const results: Array<boolean | null> = relatedSymptoms.map(symptom => {
    switch (symptom.response) {
      case false:
        return false;
      case 'Skip':
        return null;
      case true: {
        switch (durationSpecified(symptom.values)) {
          case true:
            return symptom.values.some(val => compareToBefore ? isBefore(val, compareToDate) : isAfter(val, compareToDate));
          case false:
            return null;
        }
      }
    }
  });
  return results.some(item => item) ? true : results.some(item => item === false) ? false : null;
};
export const isInfectionSymptom = (symptom: Triage): boolean => symptom.symptomId === HistoryTypesEnums['KIDNEY-DISEASE'] && !isEmptyOrNull(symptom.values) && symptom.values.some(val => val.includes('Recurrent Urinary Tract Infections'));
export const isKidneyDisease = (symptom: Triage): boolean => symptom.symptomId === HistoryTypesEnums['KIDNEY-DISEASE'] && !isEmptyOrNull(symptom.values) && symptom.values.some(val => !val.includes('Recurrent Urinary Tract Infections'));
export const isTargetImmunization = (symptom: Triage, immunization: string): boolean => symptom.symptomId === HistoryTypesEnums.IMMUNIZATIONS && !isEmptyOrNull(symptom.values) && symptom.values.some(val => val.includes(immunization));
