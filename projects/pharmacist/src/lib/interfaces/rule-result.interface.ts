export interface RuleResult {
  question: string;
  response: 'Yes' | 'No' | 'Unknown';
  passed: boolean;
}
