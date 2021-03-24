import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { PharmacistPDFSectionType } from '../types';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { timeRelatedSymptomsCheck } from './assessments-utils.static';

export const coldSoresQuestions: AssessmentSource[] = [
  {
    section: 'history',
    question: 'Have you had a cold sore before?',
    index: 0,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000567');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions1']
  },
  {
    section: 'historyNotes',
    question: 'Do you currently have a cold sore? If so, how long have you had it?',
    index: 1,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      let duration: string;
      const soresSymptoms = symptoms.filter(item => item.symptomId === 'SYMPT0007663');
      const durationSpecifiedSymptom = soresSymptoms.find(item => item.values.length && item.values[0].some(val => !!val));
      if (durationSpecifiedSymptom) {
        const amount: string = durationSpecifiedSymptom.values[0][1];
        const units: string = durationSpecifiedSymptom.values[0][2];
        duration = `${amount} ${+amount === 1 ? units.slice(0, units.length - 1) : units}`;
      }
      return duration ? duration : Boolean(soresSymptoms.length);
    }
  },
  {
    section: 'historySummary',
    question: 'Do you currently have a cold sore?',
    index: 1,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const relatedSymptoms = symptoms.filter(item => item.symptomId === 'SYMPT0007663');
      return relatedSymptoms.some(item => item.response) ? true : relatedSymptoms.some(item => item.response === false) ? false : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions2']
  },
  {
    section: 'historySummary',
    question: 'Have you had a cold sore for longer than 2 days?',
    index: 1.1,
    answer: symptoms => {
      return timeRelatedSymptomsCheck(symptoms, (item) => item.symptomId === 'SYMPT0007663', '2 days', false);
    }
  },
  {
    section: 'historyNotes',
    question: 'Do you currently have sores any place other than around your mouth and lips?',
    index: 2,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-20');
      return answer ? answer.answer.trim() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions3']
  },
  {
    section: 'historySummary',
    question: 'Do you currently have sores any place other than around your mouth and lips?',
    index: 2,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-20');
      return answer ? Boolean(answer.answer.trim().length) : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions3']
  },
  {
    section: 'history',
    question: 'Do you have any cold sores that have not healed from a previous episode?',
    index: 3,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-9');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions4']
  },
  {
    section: 'history',
    question: 'Are you sick today?',
    index: 4,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0000704');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions5']
  },
  {
    section: 'history',
    question: 'Do you have a condition that affects your immune system (e.g., cancer, leukemia, HIV, active shingles, etc.)?',
    index: 5,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions6']
  },
  {
    section: 'history',
    question: 'Do you take medications that affect the immune system (e.g., prednisone, oral steroids, anticancer or antiviral drugs, etc.)?',
    index: 6,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const symptom = symptoms.find(item => item.symptomId === 'SYMPT0002892');
      return symptom ? symptom.response : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions6']
  },
  {
    section: 'history',
    question: 'Have you had more than than 6 cold sores in the last 12 months?',
    index: 7,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-10');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['baseQuestions', 'baseQuestions7']
  },
  {
    section: 'historySummary',
    question: 'Have you tried medications for cold sores in the past?',
    index: 8,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-11');
      return answer ? answer.answer.toLowerCase() : null;
    }
  },
  {
    section: 'historyNotes',
    question: 'Please list any medications you have tried in the past',
    index: 8,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-12');
      return answer ? answer.answer : null;
    }
  },
  {
    section: 'currentSymptoms',
    question: 'Blisters, rash or ulcers around the mouth',
    index: 0,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0003130' && item.response === true)
        && symptoms.find(item => item.symptomId === 'SYMPT0000782' && item.response === true)
        && symptoms.find(item => item.symptomId === 'SYMPT0002909' && item.response === true))
  },
  {
    section: 'currentSymptoms',
    question: 'Burning sensation on or around the lips',
    index: 1,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0002994' && item.response === true)
        && symptoms.find(item => item.symptomId === 'SYMPT0001866'
          && item.response === true
          && item.values.length
          && item.values[0].includes('Burning')))
      || Boolean(symptoms.find(item => item.symptomId === 'SYMPT0002993' && item.response === true)
      && symptoms.find(item => item.symptomId === 'SYMPT0001860'
        && item.values.length
        && item.values[0].includes('Burning')
        && item.response === true))
  },
  {
    section: 'currentSymptoms',
    question: 'Pain on or around the lips',
    index: 2,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => (item.symptomId === 'SYMPT0002994'
        || item.symptomId === 'SYMPT0002993'
        || item.symptomId === 'SYMPT0000812') && item.response === true ))
  },
  {
    section: 'currentSymptoms',
    question: 'Itching on or around the lips',
    index: 3,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => item.symptomId === 'SYMPT0003559' && item.response === true))
  },
  {
    section: 'currentSymptoms',
    question: 'Tingling on or around the lips',
    index: 4,
    answer: (symptoms, healthHistory, socialCard, questionnaire) =>
      Boolean(symptoms.find(item => (item.symptomId === 'SYMPT0000685' || item.symptomId === 'SYMPT0000812') && item.response === true))
  },
  {
    section: 'screenings',
    question: 'Is the patient allergic to acyclovir, penciclovir or valacyclovir?',
    index: 3,
    answer: (symptoms, healthHistory, socialCard, questionnaire) => {
      const answer = questionnaire.find(item => item.questionId === 'ALBERTSONS-23');
      return answer ? answer.answer.toLowerCase() : null;
    },
    ruleSetPath: ['screening', 'screening4']
  },
];

export const additionalColdSoresQuestions: AdditionalQuestionSource[] = [
  {
    section: 'screenings',
    question: 'Is the patient 12 years of age or older?',
    index: 0,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening1.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening1']
  },
  {
    section: 'screenings',
    question: 'Has the patient had a cold sore before?',
    index: 1,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening2.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening2']
  },
  {
    section: 'screenings',
    question: 'Has the patient had their current cold sore for less than 48 hours or are they experiencing prodromal symptoms of a cold sore?',
    index: 2,
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening3.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening3']
  },
  {
    section: 'screenings',
    index: 4,
    question: 'Does the patient have any of the following?\n' +
      '• Lesion appears excessively red, swollen or contains pus\n' +
      '• Lesion appears on area other than around the mouth and lips\n' +
      '• Lesions have not healed from a prior episode\n' +
      '• Symptoms of systemic illness are present (fever, swollen glands, malaise)\n' +
      '• Immunocompromised by medication or condition\n' +
      '• Lesions have occurred more than 6 times in the past 12 months',
    answer: (historyQuestions, currentSymptomsQuestions, recommendations) => {
      return PharmacistAnswerEnum[recommendations.screening.results.screening5.response.toLowerCase()];
    },
    ruleSetPath: ['screening', 'screening5']
  },
];

export const coldSoresSectionTypes: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]} = {
  [PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT]: ['history', 'historySummary'],
  [PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: ['screenings', 'screeningsSummary']
};
