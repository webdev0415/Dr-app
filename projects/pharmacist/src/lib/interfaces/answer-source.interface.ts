import { AssessmentSource } from './assessment-source.interface';
import { AnswerType, PharmacistPDFSectionType } from '../types';
import { PharmacistAssessmentsError } from '../errors/pharmacist-assessments.errors';

export interface AnswerSource extends Omit<AssessmentSource, 'answer'> {
  answer: string;
  answerType: AnswerType;
  section?: PharmacistPDFSectionType;
  summaryHidden?: boolean;
  error: PharmacistAssessmentsError;
}
