import {
  DiagnosticEngine,
  IllnessesInformation
} from 'common/interfaces/diagnostic-engine.interface';
import { Triage } from '../../../../../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';

export class InitAccordion {
  static readonly type = '[PatientDataService] Initialize Accordion After Patient Assign';
  constructor(public diagnosticEngine: DiagnosticEngine[], public illnessInformation: IllnessesInformation, public triage: Triage[]) {}
}

export class ToggleGroup {
  static readonly type = '[DSD] Expand Group';
  constructor(public icdGroup: string, public opened: boolean) {}
}

export class SelectPrimary {
  static readonly type = '[DSD] Select Primary Illness';
  constructor(public icd10: string) {}
}

export class SelectWorkupPlanned {
  static readonly type = '[DSD] Select Workup Planned';
  constructor(public icd10: string) {}
}

export class ToggleSelection {
  static readonly type = '[DSD] Toggle Illness Selected State';
  constructor(public icd10: string) {}
}

export class RerunDiagnosticEngine {
  static readonly type = '[PatientData Service] Update Diagnostic Engine';
  constructor(public diagnosticEngine: DiagnosticEngine[], public unlikelyDE: Omit<DiagnosticEngine, 'source'>[], public triage: Triage[]) {}
}

export class RenameIllness {
  static readonly type = '[DSD] Selected Illness Rename';
  constructor(public icd10: string, public icdName: string) {}
}

export class AddIllness {
  static readonly type = '[DSD] Add Diagnosis';
  constructor(public icd10: string, public icdName: string) {}
}

export class UpdatePharmacyDiagnosis {
  static readonly type = '[DSD] Pharmacist Chief Complaint';
  constructor(public icd10: string, public icdName: string) {}
}
