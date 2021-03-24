import { RecommendationEngineScoringBreakdownSection } from './recommendation-engine-scoring-breakdown-section.type';

export type ScoringBreakdown = {
  [key in RecommendationEngineScoringBreakdownSection]: {
    ruleResults: {
      [question: string]: boolean;
    };
    score: number;
    minimumScore: number;
  }
} & {
  score: number;
  minimumScore: number;
};
