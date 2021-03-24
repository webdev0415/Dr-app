import { DiagnosticEngine } from '../side-models/common/interfaces/diagnostic-engine/diagnostic-engine.interface';
import { PharmacistRuleData } from '../types/pharmacist-rule-data.type';
import { AssessmentSource } from './assessment-source.interface';
import { AnswerSource } from './answer-source.interface';

export interface AdditionalQuestionSource extends Omit<AssessmentSource, 'answer'> {
  answer: (historyQuestions: AnswerSource[], currentSymptomsQuestions: AnswerSource[], recommendations: PharmacistRuleData, DE: DiagnosticEngine[]) => 'yes' | 'no';
}
