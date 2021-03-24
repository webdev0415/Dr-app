import { Contributor } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/diagnostic-engine/contributor.interface';
import { DiagnosticEngine } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/diagnostic-engine/diagnostic-engine.interface';

export { DiagnosticEngine, Contributor };

export interface DiagnosisAccordionGroup {
  icdGroup: string;
  groupRanking: number;
  data: DiagnosisAccordionItem[];
  icd10: string[];
  groupedContributors: any[];
  isDoctorAdded: boolean;
  isOtherIllnessGroups: boolean;
  criticality?: number;
  probability?: number;
  isPrimary?: boolean;
  workupPlanned: boolean;
}

export interface DiagnosisAccordionItem extends DiagnosticEngine {
  deleted?: boolean;
  isOtherIllnessGroups?: boolean;
}

export interface SelectedIllness {
  icd10_code: string;
  icd10_name: string;
  is_primary: boolean;
  workup_planned: boolean;
}

export interface DDXRequest {
  icd10_code: string;
  icd10_name: string;
  is_selected: boolean;
  explanation: string;
  expected_mdcs: string[];
}

export interface IllnessesInformation {
  defined_illnesses: {code: string}[];
  selected_illnesses: SelectedIllness[];
  is_edited_by_doctor: boolean;
}

export interface IllnessesPOSTRequest {
  defined_illnesses: string[];
  selected_illnesses: SelectedIllness[];
  is_edited_by_doctor: boolean;
  ddxs?: DDXRequest[];
}
