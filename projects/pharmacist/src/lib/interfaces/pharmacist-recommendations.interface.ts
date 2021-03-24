import { PharmacistRuleData } from '../types/pharmacist-rule-data.type';
import { RuleSetType } from '../types/rule-set.type';

export interface PharmacistRecommendations {
  ruleData: PharmacistRuleData;
  rulesetTested: RuleSetType;
  passed: boolean;
}
