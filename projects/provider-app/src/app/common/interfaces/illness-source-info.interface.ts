export interface IllnessSourceInfo {
  icd10Code: string;
  symptoms: SourceInfoSymptom[];
}

export interface SourceInfoSymptom {
  symptomID: string;
  symptomName: string;
  sourceInformation: {
    sourceType: string;
    source: string;
    multiplier: string;
    sourceRefDate: number;
    sourceId: number;
  };
}
