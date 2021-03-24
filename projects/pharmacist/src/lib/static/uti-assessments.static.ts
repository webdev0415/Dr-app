import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';
import { GenderEnum } from '../side-models/patient-profile/enums/gender.enum';

import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { PharmacistPDFSectionType } from '../types';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { isKidneyDisease, timeRelatedSymptomsCheck } from './assessments-utils.static';

export const urinaryTractInfectionQuestions: AssessmentSource[] = [
  {
    question: 'Painful Urination',
    section: 'currentSymptoms',
    index: 0,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0000420' && item.response === true))
  },
  {
    question: 'Pain above the groin',
    section: 'currentSymptoms',
    index: 1,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0003011' && item.response === true))
  },
  {
    question: 'Urine Frequency',
    section: 'currentSymptoms',
    index: 2,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0000467' && item.response === true))
  },
  {
    question: 'Urinary Urgent',
    section: 'currentSymptoms',
    index: 3,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0003427' && item.response === true))
  },


  {
    question: 'Have you had a UTI before?',
    section: 'history',
    index: 0,
    answer: symptoms => {
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums['UTI-HISTORY']);
      return relatedSymptoms.some(item => item.response) ? true : relatedSymptoms.some(item => item.response === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions1']
  },
  {
    question: 'If yes, have you been treated for a UTI in the past 4 weeks?',
    section: 'history',
    index: 1.1,
    answer: symptoms => {
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums['UTI-TREATMENT']);
      return relatedSymptoms.some(item => item.response) ? true : relatedSymptoms.some(item => item.response === false) ? false : null;
    }
  },
  {
    question: 'Are you pregnant?',
    section: 'history',
    index: 2,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      if (socialCard.gender === GenderEnum.MALE) return false;
      const pregnancy = symptoms.find(item => item.symptomId === 'SYMPT0000213');
      return pregnancy ? pregnancy.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions2']
  },
  {
    question: 'Do you have any of the following symptoms?\n' +
      '• Sweating\n' +
      '• Shaking Chills\n' +
      '• Kidney Pain\n' +
      '• Nausea and/or Vomiting',
    section: 'historySummary',
    index: 3,
    answer: symptoms => {
      const relatedSymptoms = symptoms.filter(item => ['SYMPT0000610', 'SYMPT0000884', 'SYMPT0003446', 'SYMPT0003518'].includes(item.symptomId));
      return relatedSymptoms.some(item => item.response) ? true : relatedSymptoms.some(item => item.response === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions3']
  },
  {
    question: 'Do you have any of the following symptoms?',
    questionNotes: ['Sweating', 'Shaking Chills', 'Kidney Pain', 'Nausea and/or Vomiting'],
    section: 'historyNotes',
    index: 3,
    answer: symptoms => {
      const relatedSymptoms = symptoms.filter(item => ['SYMPT0000610', 'SYMPT0000884', 'SYMPT0003446', 'SYMPT0003518'].includes(item.symptomId));
      return relatedSymptoms.some(item => item.response) ? true : relatedSymptoms.some(item => item.response === false) ? false : null;
    }
  },
  {
    question: 'Do you have a condition that affects your immune system (e.g., cancer, leukemia, HIV, active shingles, etc.)?',
    section: 'history',
    index: 4,
    answer: symptoms => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions4']
  },
  {
    section: 'history',
    question: 'Do you take medications that affect the immune system (e.g., prednisone, oral steroids, anticancer or antiviral drugs, etc.)?',
    index: 5,
    answer: symptoms => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions5']
  },
  {
    question: 'Do you have any birth defects or have you had surgical changes to the urinary tract?',
    section: 'history',
    index: 6,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-4');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions6']
  },
  {
    question: 'Have you had urinary tract instrumentation in the past 4 weeks or do you have any catherization?',
    section: 'history',
    index: 7,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      return timeRelatedSymptomsCheck(symptoms, (symptom) => symptom.symptomId === 'SYMPT0004131', '4 weeks', true);
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions7']
  },
  {
    question: 'Do you have any abnormal vaginal discharge?',
    section: 'history',
    index: 8,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000221');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions8']
  },
  {
    question: 'Do you have a history of kidney problems?',
    section: 'history',
    index: 9,
    answer: symptoms => {
      const relatedSymptoms = symptoms.filter(item => item.symptomId === HistoryTypesEnums['KIDNEY-DISEASE']);
      return relatedSymptoms.some(item => item.response) ? relatedSymptoms.some(item => isKidneyDisease(item)) : relatedSymptoms.some(item => item.response === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions9']
  },
  {
    question: 'Do you have diabetes?',
    section: 'history',
    index: 10,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const historyItem = Boolean(healthHistory.find(item => item.symptomID === HistoryTypesEnums.DIABETES));
      const symptom = symptoms.find(item => item.symptomId === HistoryTypesEnums.DIABETES);
      return historyItem ? historyItem : symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions10']
  }
];

export const additionalUtiQuestions: AdditionalQuestionSource[] = [
  {
    question: 'Is the patient female?',
    section: 'screenings',
    index: 0,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening1.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening1']
  },
  {
    question: 'Is the patient 18 years of age or older?',
    section: 'screenings',
    index: 1,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening2.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening2']
  },
  {
    question: 'Has the patient had a UTI before?',
    section: 'screenings',
    index: 2,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening3.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening3']
  },
  {
    question: 'Did the patient answer questions 2-8 above as “no”?',
    section: 'screenings',
    index: 3,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return [
        historyQuestions.find(item => item.index === 2).answer.toLowerCase() === PharmacistAnswerEnum.no,
        historyQuestions.find(item => item.index === 3).answer.toLowerCase() === PharmacistAnswerEnum.no,
        historyQuestions.find(item => item.index === 4).answer.toLowerCase() === PharmacistAnswerEnum.no,
        historyQuestions.find(item => item.index === 6).answer.toLowerCase() === PharmacistAnswerEnum.no,
        historyQuestions.find(item => item.index === 7).answer.toLowerCase() === PharmacistAnswerEnum.no,
        historyQuestions.find(item => item.index === 8).answer.toLowerCase() === PharmacistAnswerEnum.no,
      ].every(item => item) ? PharmacistAnswerEnum.yes : PharmacistAnswerEnum.no;
    },
    ruleSetPath: ['screening', 'screening4']
  },
  {
    question: 'If the patient has diabetes (yes on question 10 above), is her diabetes controlled?',
    section: 'screenings',
    index: 4,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return recommendations.screening.results.hasOwnProperty('screening5') ? PharmacistAnswerEnum[recommendations.screening.results.screening5.response.toLowerCase()] : null;
    },
    ruleSetPath: ['screening', 'screening5']
  }
];

export const utiSectionTypes: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]} = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history', 'historySummary'],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: ['screenings', 'screeningsSummary']
};
