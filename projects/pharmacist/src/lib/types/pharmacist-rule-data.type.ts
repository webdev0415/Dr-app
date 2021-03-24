import { RuleResult } from '../interfaces/rule-result.interface';
import { ScoringBreakdown } from './scoring-breakdown.type';
import { RecommendationEngineSection } from './recommendation-engine-section.type';

export type PharmacistRuleData = {
  [key in RecommendationEngineSection]: {
    ruleResults: {
      [question: string]: boolean;
    };
    results: {
      [rule: string]: RuleResult;
    };
    passed: boolean;
  }
} & {
  scoringBreakdown: ScoringBreakdown
};
