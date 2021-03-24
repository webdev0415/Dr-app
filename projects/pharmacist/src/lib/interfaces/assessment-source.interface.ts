import { SocialCard } from '../side-models/patient-profile/social-card.model';
import { Answer } from '../side-models/common/interfaces/behavior-data/anwer.interface';
import { Triage } from '../side-models/common/interfaces/triage/triage';
import { HistoryItem } from '../side-models/common/interfaces/health-history/history-item.interface';
import { PharmacistPDFSectionType } from '../types';

export interface AssessmentSource {
  question: string;
  questionNotes?: string[];
  section?: PharmacistPDFSectionType;
  answer: (symptoms?: Triage[], healthHistory?: HistoryItem[], socialCard?: SocialCard, questionnaire?: Answer[]) => boolean | null | string;
  index?: number;
  ruleSetPath?: string[];
  summaryHidden?: boolean;
}
