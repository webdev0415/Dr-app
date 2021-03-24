import { SocialCard } from '../side-models/patient-profile/social-card.model';

import { HistoryTypesEnums } from '../side-models/common/enums/history-types.enum';
import { Answer } from '../side-models/common/interfaces/behavior-data/anwer.interface';
import { Triage } from '../side-models/common/interfaces/triage/triage';
import { HistoryItem } from '../side-models/common/interfaces/health-history/history-item.interface';

import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { AssessmentSource } from '../interfaces/assessment-source.interface';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import {
  additionalColdSoresQuestions,
  coldSoresQuestions,
  coldSoresSectionTypes
} from './cold-sores-assessments.static';
import { additionalUtiQuestions, urinaryTractInfectionQuestions, utiSectionTypes } from './uti-assessments.static';
import { AdditionalQuestionSource } from '../interfaces/additional-question-source.interface';
import { AnswerSource } from '../interfaces/answer-source.interface';
import { AnswerType, PharmacistPDFSectionType, PredicationType } from '../types';
import {
  additionalAsthmaRefillQuestions,
  asthmaRefillQuestions,
  asthmaRefillSectionTypes
} from './asthma-refill-assessments.static';
import { birthRefillQuestions, birthRefillSectionTypes } from './birth-refill-assessments.static';
import { coldFluAdditionalQuestions, coldFluQuestions, coldFluSectionTypes } from './cold-flu-assessments.static';
import {
  additionalStrepThroatQuestions,
  strepThroatQuestions,
  strepThroatSectionTypes
} from './strep-throat-assessments.static';
import { fluShotAdditionalQuestions, fluShotQuestions, fluShotSectionTypes } from './flu-shot-assessments.static';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { PharmacistAssessmentsError } from '../errors/pharmacist-assessments.errors';

export const assessmentsPredication: {[key in PharmacyAssessmentsEnum]: {[type in PredicationType]: string[]} & {source: AssessmentSource[]}} = {
  [PharmacyAssessmentsEnum['COLD-SORES']]: {
    symptoms: ['SYMPT0000567', 'SYMPT0000681', 'SYMPT0007663', 'SYMPT0000681', 'SYMPT0000704', 'SYMPT0002892', 'SYMPT0003130', 'SYMPT0000782', 'SYMPT0002909', 'SYMPT0002994', 'SYMPT0001866', 'SYMPT0002993', 'SYMPT0001860', 'SYMPT00008120', 'SYMPT0003559', 'SYMPT0000685', 'SYMPT0000812'],
    healthHistory: [],
    questionnaire: ['ALBERTSONS-9', 'ALBERTSONS-10', 'ALBERTSONS-11', 'ALBERTSONS-12'],
    source: coldSoresQuestions,
  },
  [PharmacyAssessmentsEnum['FLU-SHOT']]: {
    symptoms: ['SYMPT0002892', 'SYMPT0000048', 'SYMPT0000546', HistoryTypesEnums.CANCER],
    healthHistory: [HistoryTypesEnums['RESPIRATORY-DISEASE'], HistoryTypesEnums['HEART-DISEASE'], HistoryTypesEnums.DIABETES, HistoryTypesEnums['BREAST-FEEDING'], HistoryTypesEnums.IMMUNIZATIONS],
    questionnaire: ['ALBERTSONS-14', 'ALBERTSONS-13', 'ALBERTSONS-15', 'ALBERTSONS-16'],
    source: fluShotQuestions
  },
  [PharmacyAssessmentsEnum.UTI]: {
    symptoms: ['SYMPT0000420', 'SYMPT0003011', 'SYMPT0000467', 'SYMPT0003427', 'SYMPT0000546', 'SYMPT0000610', 'SYMPT0000884', 'SYMPT0003446', 'SYMPT0003518', 'SYMPT0002892', 'SYMPT0004131', 'SYMPT0000221', 'SYMPT0000546', 'Pain/Swelling'],
    healthHistory: [HistoryTypesEnums.DIABETES],
    questionnaire: ['ALBERTSONS-4'],
    source: urinaryTractInfectionQuestions
  },
  [PharmacyAssessmentsEnum['STREP-THROAT']]: {
    symptoms: ['SYMPT0007588', 'SYMPT0003003', 'SYMPT0000326', 'SYMPT0003133', 'SYMPT0002892', 'SYMPT0000546', 'SYMPT0003951'],
    healthHistory: [HistoryTypesEnums['BREAST-FEEDING']],
    questionnaire: ['ALBERTSONS-18'],
    source: strepThroatQuestions
  },

  [PharmacyAssessmentsEnum['COLD-FLU']]: {
    symptoms: ['SYMPT0005679', 'SYMPT0002892', 'SYMPT0000546', 'SYMPT0000223', 'SYMPT0003133', 'SYMPT0003003', 'SYMPT0002952', 'SYMPT0002063', 'SYMPT0000682', 'SYMPT0000326', 'SYMPT0003954', 'SYMPT0003955'],
    healthHistory: [HistoryTypesEnums['BREAST-FEEDING']],
    questionnaire: ['ALBERTSONS-16', 'ALBERTSONS-13'],
    source: coldFluQuestions
  },

  [PharmacyAssessmentsEnum.ASTHMA]: {
    symptoms: [HistoryTypesEnums.ASTHMA, 'SYMPT0000165', 'SYMPT0002958', 'SYMPT0003133', 'SYMPT0000213'],
    healthHistory: ['SYMPT0000061', HistoryTypesEnums['BREAST-FEEDING'], HistoryTypesEnums.ASTHMA],
    questionnaire: ['ALBERTSONS-19', 'ALBERTSONS-7', 'ALBERTSONS-6', 'ALBERTSONS-8', 'ALBERTSONS-17'],
    source: asthmaRefillQuestions
  },

  [PharmacyAssessmentsEnum['BIRTH-CONTROL']]: {
    symptoms: ['SYMPT0007664', 'SYMPT0000234'],
    healthHistory: [HistoryTypesEnums.IMMUNIZATIONS],
    questionnaire: ['ALBERTSONS-2', 'ALBERTSONS-3', 'ALBERTSONS-1'],
    source: birthRefillQuestions
  }
};

export const pharmacistSectionTypesByVisitReason: {[key in PharmacyAssessmentsEnum]: {[section in PharmacistOverviewSectionTypesEnum.PATIENT_ASSESSMENT | PharmacistOverviewSectionTypesEnum.PHARMACIST_ASSESSMENT]: PharmacistPDFSectionType[]}} = {
  [PharmacyAssessmentsEnum.UTI]: utiSectionTypes,
  [PharmacyAssessmentsEnum['STREP-THROAT']]: strepThroatSectionTypes,
  [PharmacyAssessmentsEnum['FLU-SHOT']]: fluShotSectionTypes,
  [PharmacyAssessmentsEnum['BIRTH-CONTROL']]: birthRefillSectionTypes,
  [PharmacyAssessmentsEnum.ASTHMA]: asthmaRefillSectionTypes,
  [PharmacyAssessmentsEnum['COLD-SORES']]: coldSoresSectionTypes,
  [PharmacyAssessmentsEnum['COLD-FLU']]: coldFluSectionTypes
};

export const additionalQuestionsByVisitReason: {[key in PharmacyAssessmentsEnum]: AdditionalQuestionSource[]} = {
  [PharmacyAssessmentsEnum.UTI]: additionalUtiQuestions,
  [PharmacyAssessmentsEnum['STREP-THROAT']]: additionalStrepThroatQuestions,
  [PharmacyAssessmentsEnum['FLU-SHOT']]: fluShotAdditionalQuestions,
  [PharmacyAssessmentsEnum['BIRTH-CONTROL']]: [],
  [PharmacyAssessmentsEnum.ASTHMA]: additionalAsthmaRefillQuestions,
  [PharmacyAssessmentsEnum['COLD-SORES']]: additionalColdSoresQuestions,
  [PharmacyAssessmentsEnum['COLD-FLU']]: coldFluAdditionalQuestions
};

export class PharmacistAssessments {
  private symptoms: Triage[];
  private healthHistory: HistoryItem[];
  private readonly assessmentsPredication = assessmentsPredication;

  constructor(symptoms: Triage[], private questionnaire: Answer[], private socialCard: SocialCard, private type: PharmacyAssessmentsEnum) {
    this.symptoms = symptoms.filter(item => item.response !== 'Skip');
    this.healthHistory = socialCard.patientHealthHistory.historyItem;
  }

  public get answers(): AnswerSource[] {
    const answers = this.assessmentsPredication[this.type].source.map(item => {
      const result = item.answer(this.symptoms, this.healthHistory, this.socialCard, this.questionnaire);
      const answerType: AnswerType = typeof result === 'string' && !['yes', 'no', 'other', 'missed'].includes(result.toLowerCase()) ? 'text' : 'boolean';
      let error: PharmacistAssessmentsError = null;
      if (result === null) {
        let errorExtraInfo: string[];
        errorExtraInfo = item.answer.toString().match(/ALBERTSONS-\d{1,2}|SYMPT\d{7}/gm) || [];
        const historyTypes = item.answer.toString().match(/HistoryTypesEnums"](\['\w+-\w+'|.\w+)/gm);
        if (historyTypes)
          historyTypes.forEach(type => {
            errorExtraInfo.push(HistoryTypesEnums[type.split(/[.']/gm)[1]]);
          });
        error = new PharmacistAssessmentsError('Pharmacist Assessment Erorr', {
          problem: errorExtraInfo.toString(),
          visitReason: PharmacyAssessmentsEnum[this.type]
        });
      }
      return {
        question: item.question,
        answer: typeof result === 'string'
          ? result
          : result
            ? PharmacistAnswerEnum.yes : result === false ? PharmacistAnswerEnum.no : PharmacistAnswerEnum.unknown,
        answerType: answerType,
        section: item.section,
        index: item.index,
        questionNotes: item.questionNotes,
        summaryHidden: item.summaryHidden,
        ruleSetPath: item.ruleSetPath,
        error: error
      };
    });
    if (this.type === PharmacyAssessmentsEnum['COLD-SORES']) {
      const haveColdSore = answers.find(item => item.section === 'historySummary' && item.index === 1).answer === PharmacistAnswerEnum.yes;
      return answers.filter(item => !(item.section === 'historySummary' && haveColdSore ? item.index === 1 : item.index === 1.1));
    }
    return answers;
  }
}
