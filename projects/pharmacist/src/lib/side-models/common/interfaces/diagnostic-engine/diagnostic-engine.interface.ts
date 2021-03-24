import { Contributor } from './contributor.interface';

export interface DiagnosticEngine {
  icdGroup: string;
  confidence: number | null;
  iCriticality: number | null;
  isSelected: boolean;
  contributors: Contributor[];
  icdName: string;
  icd10: string;
  isPrimary: boolean;
  source: string;
  groupRanking: number;
  workupPlanned: boolean;
}
