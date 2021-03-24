import { Triage } from '../triage/triage';

export interface Contributor extends Triage {
  symptomName: string;
  contribution: number;
  symptomId: string;
  name: string;
  categoryID: string;
  presenting: boolean;
}
