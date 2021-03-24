import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';
import { GenderEnum } from '../side-models/patient-profile/enums/gender.enum';

import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { PharmacistPDFSectionType } from '../types';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { isEmptyOrNull } from './assessments-utils.static';

export const strepThroatQuestions: AssessmentSource[] = [
  {
    question: 'Fever',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0007588' && item.response === true))
  },
  {
    question: 'Sore throat/Painful swallowing',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => (item.symptomId === 'SYMPT0003003'
        || item.symptomId === 'SYMPT0002810')
        && item.response === true))
  },
  {
    question: 'Redness in throat (sometimes with white patches)',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0000869' && item.response === true))
  },
  {
    question: 'Headache',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.filter(item => item.symptomId === 'SYMPT0002952' || item.symptomId === 'SYMPT0000326');
      return symptom.some(item => item.response === true) ? true : symptom.some(item => item.response === false) ? false : null;
    }
  },
  {
    question: 'Body aches',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0005416' && item.response === true))
  },
  {
    question: 'Cough',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0003133' && item.response === true))
  },
  {
    question: 'Have you received an antibiotic in the past 30 days?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-18');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions1']
  },
  {
    question: 'Are you pregnant or breastfeeding?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      if (socialCard.gender === GenderEnum.MALE) return false;
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums['BREAST-FEEDING']));
      const pregnancy = symptoms.find(item => item.symptomId === 'SYMPT0000213');
      const breastFeeding = symptoms.find(item => item.symptomId === HistoryTypesEnums['BREAST-FEEDING']);
      const pregnantOrBreastFeeding = [pregnancy ? pregnancy.response : null, breastFeeding ? breastFeeding.response : null];
      return historyItem ? historyItem : pregnantOrBreastFeeding.some(item => item) ? true : pregnantOrBreastFeeding.some(item => item === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions2']
  },
  {
    question: 'Do you have a condition that affects your immune system (e.g., cancer, leukemia, HIV, active shingles, etc.)?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions3']
  },
  {
    question: 'Do you take medications that affect the immune system (e.g., prednisone, oral steroids, anticancer or antiviral drugs, etc.)?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions4']
  },
  {
    question: 'Do you have a history of kidney problems?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums['KIDNEY-DISEASE']);
      return relatedSymptoms.some(item => item.response === true) ? true : relatedSymptoms.some(item => item.response === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions5']
  },
  {
    question: 'Is the patient between the age of 6 and 45?',
    section: 'screenings',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const age = +socialCard.patientAge;
      return age > 5 && age < 46;
    },
    ruleSetPath: ['screening', 'screening1']
  },
  {
    question: 'Rapid Strep Test Result',
    section: 'labs',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const labSymptom = symptoms.find(item => item.symptomId === 'SYMPT0003951');
      return labSymptom && labSymptom.response && !isEmptyOrNull(labSymptom.values) && !isEmptyOrNull(labSymptom.values[0]) ? labSymptom.values[0].includes('Positive') : null;
    }
  },
];

export const strepThroatSectionTypes: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]} = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history'],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: ['screenings'],
};

export const additionalStrepThroatQuestions: AdditionalQuestionSource[] = [{
  question: 'Are the responses to questions 1 – 5 above marked as “no”?',
  answer: (historyQuestions, currentSymptomsQuestions, recommendations) =>
    (historyQuestions.every(question => question.answer.toLowerCase() === PharmacistAnswerEnum.no) ? PharmacistAnswerEnum.yes : PharmacistAnswerEnum.no),
  section: 'screenings',
  ruleSetPath: ['screening', 'screening2']
}];
