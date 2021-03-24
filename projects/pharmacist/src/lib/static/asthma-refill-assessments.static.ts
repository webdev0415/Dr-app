import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';

import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { GenderEnum } from '../side-models/patient-profile/enums/gender.enum';
import { PharmacistRuleData } from '../types/pharmacist-rule-data.type';
import { PharmacistPDFSectionType } from '../types';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';

export const asthmaRefillQuestions: AssessmentSource[] = [
  {
    question: 'Have you ever received a diagnosis of asthma?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === 'SYMPT0000061'));
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000061');
      return historyItem ? historyItem : symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions1'],
    index: 0
  },
  {
    question: 'Have you ever used an asthma rescue inhaler such as a short acting beta agonist?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums.ASTHMA);
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions2'],
    index: 1
  },
  {
    question: 'Do you have a current prescription for an asthma control inhaler such as an inhaled corticosteroid or long acting beta agonist?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-19');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions3'],
    index: 2
  },
  {
    question: 'Have you had an office visit with a healthcare provider in which you assessed your asthma control in the last 15 months?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-17');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions4'],
    index: 3
  },
  {
    question: 'Have you used an asthma rescue inhaler more than twice a week for the last 4 weeks?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-7');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions6'],
    index: 5
  },
  {
    question: 'Have you received more than 2 rescue inhalers in the last month for reasons other than travel or misplaced or lost medication?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-8');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions7'],
    index: 6
  },
  {
    question: 'Have you received more than 2 inhalers written by a pharmacist in the last 12 months?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-6');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions8'],
    index: 7
  },
  {
    question: 'For women: Are you currently pregnant or breastfeeding?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      if (socialCard.gender === GenderEnum.MALE) return false;
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums['BREAST-FEEDING']));
      const pregnancy = symptoms.find(item => item.symptomId === 'SYMPT0000213');
      const breastFeeding = symptoms.find(item => item.symptomId === HistoryTypesEnums['BREAST-FEEDING']);
      const pregnantOrBreastFeeding = [pregnancy ? pregnancy.response : null, breastFeeding ? breastFeeding.response : null];
      return historyItem ? historyItem : pregnantOrBreastFeeding.some(item => item) ? true : pregnantOrBreastFeeding.some(item => item === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions9'],
    index: 8
  },
];

export const additionalAsthmaRefillQuestions: AdditionalQuestionSource[] = [
  {
    question: 'Is the patient 6 years of age or older?',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations: PharmacistRuleData) =>
      (PharmacistAnswerEnum[recommendations.screening.results.screening1.response.toLowerCase()]),
    section: 'assessment',
    index: 0,
    ruleSetPath: ['screening', 'screening1']
  },
  {
    question: 'Did the patient answer yes to numbers 1-4 on the patient intake questionnaire?',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations: PharmacistRuleData) =>
      (historyQuestions.slice(0, 4).every(question => question.answer.toLowerCase() === 'yes') ? PharmacistAnswerEnum.yes : PharmacistAnswerEnum.no),
    section: 'assessment',
    index: 1,
    ruleSetPath: ['screening', 'screening2']
  },
  {
    question: 'Did the patient answer no to numbers 5-9 on the patient intake questionnaire?',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations: PharmacistRuleData) =>
      (historyQuestions.slice(4, 9).every(question => question.answer.toLowerCase() === 'no') ? PharmacistAnswerEnum.yes : PharmacistAnswerEnum.no),
    section: 'assessment',
    index: 2,
    ruleSetPath: ['screening', 'screening3']
  },
  {
    question: 'Are you currently experiencing any symptoms such as shortness of breath, chest pain, or productive cough?',
    section: 'history',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations: PharmacistRuleData) =>
      (PharmacistAnswerEnum[recommendations.baseQuestions.results.baseQuestions5.response.toLowerCase()]),
    ruleSetPath: ['baseQuestions', 'baseQuestions5'],
    index: 4
  },
];

export const asthmaRefillSectionTypes: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]} = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history'],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: ['assessment'],
};
