import { isNil } from 'ramda';

import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';

import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { GenderEnum } from '../side-models/patient-profile/enums/gender.enum';
import { PharmacistPDFSectionType } from '../types';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { isTargetImmunization } from './assessments-utils.static';

export const fluShotQuestions: AssessmentSource[] = [
  {
    question: 'Does the intended patient have flu-like symptoms currently?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-15');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions1']
  },
  {
    question: 'Received antiviral therapy in the past 30 days? ',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-16');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions2']
  },
  {
    question: 'Pregnant or breastfeeding?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      if (socialCard.gender === GenderEnum.MALE) return false;
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums['BREAST-FEEDING']));
      const pregnancy = symptoms.find(item => item.symptomId === 'SYMPT0000213');
      const breastFeeding = symptoms.find(item => item.symptomId === HistoryTypesEnums['BREAST-FEEDING']);
      const pregnantOrBreastFeeding = [pregnancy ? pregnancy.response : null, breastFeeding ? breastFeeding.response : null];
      return historyItem ? historyItem : pregnantOrBreastFeeding.some(item => item) ? true : pregnantOrBreastFeeding.some(item => item === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions3']
  },
  {
    question: 'Have a history of allergic reaction to any previous antiviral therapy?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-13');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions4']
  },
  // TODO: check needed
  {
    question: 'History of psychologic side effects from any previous antiviral therapy?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-13');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions5']
  },
  {
    question: 'Does the intended patient have asthma or other chronic respiratory disease?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums['RESPIRATORY-DISEASE']
        && item.historyItem === 'Asthma'));
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums['RESPIRATORY-DISEASE']);
      return historyItem ? historyItem : symptom ? symptom.response : null;
    }
  },
  {
    question: 'Have diabetes?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums.DIABETES));
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums.DIABETES);
      return historyItem ? historyItem : symptom ? symptom.response : null;
    },
  },
  {
    question: 'Have congestive heart failure or coronary artery disease?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums['HEART-DISEASE']));
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums['HEART-DISEASE']);
      return historyItem ? historyItem : symptom ? symptom.response : null;
    }
  },
  {
    question: 'Immunocompromised by medication or medical condition (HIV, steroids, etc.)?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
  },
  {
    question: 'Have sickle cell anemia or other blood disorders?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000048');
      return symptom ? symptom.response : null;
    },
  },
  {
    question: 'Have chronic kidney dysfunction?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums['KIDNEY-DISEASE']);
      return symptom ? symptom.response : null;
    },
  },
  {
    question: 'Have cancer?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums['CANCER-BASIC']);
      return symptom ? symptom.response : null;
    },
  },
  {
    question: 'Has not received the flu vaccine during this flu season?',
    section: 'fluRiskFactors',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums.IMMUNIZATIONS
        && item.historyItem === 'Seasonal Flu Vaccine'));
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums.IMMUNIZATIONS);
      return historyItem ? !historyItem : relatedSymptoms.some(item => !isNil(item.response)) ? symptoms.some(item => isTargetImmunization(item, 'Seasonal Flu Vaccine')) : null;
    }
  },
  {
    question: 'relative treating for flu', answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-14');
      return answer ? answer.answer.toLowerCase() : null;
    }
  },
  {
    question: 'Is the patient 6 years or older?',
    section: 'screenings',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      +socialCard.patientAge >= 6,
    ruleSetPath: ['screening', 'screening1']
  },
  {
    question: 'age over 65',
    section: 'screeningsSummary',
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      +socialCard.patientAge > 65
  }
];

export const fluShotAdditionalQuestions: AdditionalQuestionSource[] = [
  {
    question: `Mark “Yes” for a household contact being treated for the flu?`,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) =>
      PharmacistAnswerEnum[recommendations.screening.results.screening2.response.toLowerCase()],
    section: 'screenings',
    index: 1,
    ruleSetPath: ['screening', 'screening2']
  },
  {
    question: `Mark “Yes” for at least one of the Flu Risk Factors? Or, over the age of 65?`,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) =>
      PharmacistAnswerEnum[recommendations.screening.results.screening3.response.toLowerCase()],
    section: 'screenings',
    ruleSetPath: ['screening', 'screening3']
  },
  {
    question: `Are the responses to questions 1 – 5 on the Patient History marked as “No”?`,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) =>
      (historyQuestions.every(question => question.answer.toLowerCase() === 'no') ? PharmacistAnswerEnum.yes : PharmacistAnswerEnum.no),
    section: 'screenings',
    ruleSetPath: ['screening', 'screening4']
  }
];

export const fluShotSectionTypes: { [section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[] } = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history', 'fluRiskFactors'] as PharmacistPDFSectionType[],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: ['screenings'] as PharmacistPDFSectionType[],
};
