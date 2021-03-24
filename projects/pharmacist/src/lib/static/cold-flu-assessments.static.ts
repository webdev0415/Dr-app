import { SymptomTypesEnum } from '../side-models/common/enums/symptom-types.enum';
import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';
import { GenderEnum } from '../side-models/patient-profile/enums/gender.enum';

import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { PharmacistPDFSectionType } from '../types';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { PharmacistRuleData } from '../types/pharmacist-rule-data.type';
import { timeRelatedSymptomsCheck } from './assessments-utils.static';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';


const fluLikeDiagnoses: string[] = ['J09.X1', 'J09.X2', 'J10.00', 'J11.08', 'J10.08', 'J10.1', 'J11.1', 'J98.9', 'J10.01', 'J11.00'];

export const coldFluQuestions: AssessmentSource[] = [
  {
    question: 'Have flu-like symptoms been present for more than two days?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      return timeRelatedSymptomsCheck(symptoms, (symptom) => ['SYMPT0002974', 'SYMPT0000379', 'SYMPT0000173', 'SYMPT0002063', 'SYMPT0003133'].includes(symptom.symptomId), '2 days', true);
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions1']
  },
  {
    question: 'Have you received an antiviral in the past 30 days?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-16');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions2']
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
    ruleSetPath: ['baseQuestions', 'baseQuestions3']
  },
  {
    question: 'Do you have a condition that affects your immune system (e.g., cancer, leukemia, HIV, active shingles, etc.)?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions4']
  },
  {
    question: 'Do you take medications that affect the immune system (e.g., prednisone, oral steroids anticancer or antiviral drugs, etc.)?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions5']
  },
  {
    question: 'Do you have a history of kidney dysfunction?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums['KIDNEY-DISEASE']);
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions6']
  },
  {
    question: 'History of allergic reaction to any previous antiviral therapy?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-13');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions7']
  },
  {
    question: 'History of psychologic side effects from any previous antiviral therapy?',
    section: 'history',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-13');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions8']
  },
  {
    question: 'Is the patient 6 years or older?',
    section: 'screenings',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => +socialCard.patientAge >= 6,
    ruleSetPath: ['screening', 'screening1']
  },
  {
    question: 'Fever',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000223');
      return symptom ? symptom.response : null;
    }
  },
  {
    question: 'Cough',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0003133');
      return symptom ? symptom.response : null;
    }
  },
  {
    question: 'Sore Throat',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0003003');
      return symptom ? symptom.response : null;
    }
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
    question: 'Nasal Congestion',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002063');
      return symptom ? symptom.response : null;
    }
  },
  {
    question: 'Fatigue',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000682');
      return symptom ? symptom.response : null;
    }
  },
  {
    question: 'Muscle/Body Aches',
    section: 'currentSymptoms',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => Boolean(symptoms.find(item => item.symptomId !== 'SYMPT0005416' && item.response === true))
  },
  {
    question: 'Rapid Influenza Test',
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const labResults = symptoms.filter(item => item.symptomId === 'SYMPT0003954' || item.symptomId === 'SYMPT0003955');
      return labResults.some(item => item.response) ? true : labResults.some(item => item.response === false) ? false : null;
    }
  }
];

export const coldFluAdditionalQuestions: AdditionalQuestionSource[] = [
  {
    question: 'Are the patient’s Current Symptoms consistent with flu-like illness?',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations, DE) => {
      return DE.some(item => item.groupRanking === 1 && fluLikeDiagnoses.includes(item.icd10)) ? 'yes' : 'no';
    },
    section: 'screenings',
    ruleSetPath: ['screening', 'screening2']
  },
  {
    question: 'Are the responses to questions 1 – 8 on the Patient History marked as “no”?',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations: PharmacistRuleData) =>
      (historyQuestions.every(question => question.answer.toLowerCase() === 'no') ? PharmacistAnswerEnum.yes : PharmacistAnswerEnum.no),
    section: 'screenings',
    ruleSetPath: ['screening', 'screening3']
  }
];

export const coldFluSectionTypes: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]} = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history'],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: ['screenings'],
};
