import { DiagnosisAccordionGroup, DiagnosticEngine, IllnessesInformation } from 'common/interfaces/diagnostic-engine.interface';
import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';

export class DiagnosisAccordionModel {
  accordion: DiagnosisAccordionGroup[];
  definedICDs: DiagnosticEngine[];
  illnessesInformation: IllnessesInformation;
  expandedElements: {[key: string]: boolean};

  triage: Triage[];
  diagnosticEngine: DiagnosticEngine[];

  constructor() {
    this.accordion = [];
    this.definedICDs = [];
    this.expandedElements = {};
    this.triage = [];
    this.diagnosticEngine = [];
  }
}
