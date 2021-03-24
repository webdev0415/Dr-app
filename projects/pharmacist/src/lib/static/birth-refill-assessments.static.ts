import { isNil } from 'ramda';

import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';

import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { PharmacistPDFSectionType } from '../types';
import { isTargetImmunization } from './assessments-utils.static';

export const birthRefillQuestions: AssessmentSource[] = [
  {
    question: 'Have you used hormonal contraception before?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0007664');
      return symptom ? symptom.response : null;
    },
  },
  {
    question: `Please note: If you are under 18, evidence of a previous prescription for hormonal contraception may be required.
             If so, has this pharmacy provided your hormonal contraceptives? `,
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-1');
      return answer ? answer.answer.toLowerCase() : null;
    }
  },
  {
    question: 'Please list any medications you have tried in the past: ',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const values = symptoms.find(item => item.symptomId === 'SYMPT0007664');
      return values ? values.values ? values.values.map(item => item[0]).join(', ') : false : null;
    }
  },
  {
    question: 'Are you interested in continuing previous therapy? ',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-2');
      return answer ? answer.answer.toLowerCase() : null;
    }
  },
  {
    question: `         If no, Why? (e.g. side effects or cost): `,
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      return '';
    },
    summaryHidden: true
  },
  {
    question: 'Have you had a Flu Shot in Last 6 Month?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums.IMMUNIZATIONS && item.historyType === 'Last Flu Shot'));
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums.IMMUNIZATIONS);
      return historyItem ? historyItem : relatedSymptoms.some(item => !isNil(item.response)) ? symptoms.some(item => isTargetImmunization(item, 'Seasonal Flu Vaccine')) : null;
    }
  },
  {
    question: 'Have you had a Tetanus Shot in Last 10 Years?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums.IMMUNIZATIONS && item.historyType === 'Last Tetanus Shot'));
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums.IMMUNIZATIONS);
      return historyItem ? historyItem : relatedSymptoms.some(item => !isNil(item.response)) ? symptoms.some(item => isTargetImmunization(item, 'Last Tetanus Shot')) : null;
    }
  },
  {
    question: 'Have you received the HPV (Gardasil®) vaccine? ',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums.IMMUNIZATIONS && item.historyType === 'HPV Immunization'));
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums.IMMUNIZATIONS);
      return historyItem ? historyItem : relatedSymptoms.some(item => !isNil(item.response)) ? symptoms.some(item => isTargetImmunization(item, 'HPV Immunization')) : null;
    },
  },
  {
    question: '         If so, how many doses? ',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-3');
      return answer ? answer.answer : null;
    },
    summaryHidden: true
  },
];

export const birthRefillSectionTypes: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]} = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history'] as PharmacistPDFSectionType[],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: [],
};
