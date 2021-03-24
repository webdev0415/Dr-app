export interface AdditionalDoctorNotes {
  medicationInstructions?: string;
  additionalDoctorNotes?: string;
  treatmentDoctorNotes?: string;
  diagnosticDoctorNotes?: string;
  schoolNotes?: string;
  workNotes?: string;
  therapyOrders?: string;
  doc2doc?: string;
}

export interface RawDDXAnalysis {
  isSelected: boolean;
  isDiagnosedByDE: boolean;

  isCoveredByQA: boolean;
  existenceQA: boolean;

  explanation: string;
  ICDName: string;
  ICDGroup: string;
  expectedMDCs: string[];
  affirmativeSymptoms: string[];
  references: number[];
}

export interface DDX {
  DDXRawAnalysis: { [key: string]: RawDDXAnalysis; };
  DDXCount: number;
  DDXSummary: string;
}
