import { Answer } from './anwer.interface';
import { SubAnswers } from './sub-answer.interface';

export interface BehaviorData {
  subject: string;
  version: string;
  sub_answers: SubAnswers[];
  answers: Array<Answer & SubAnswers>;
}
