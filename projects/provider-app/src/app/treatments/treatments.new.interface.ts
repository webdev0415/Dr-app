import { NewTreatmentType } from './treatments.new.type';

export interface Adjustment {
  type: string;
  notes: string;
  applied: boolean;
}

export interface TreatmentName {
  str: string;
  rxcui: number;
  isBranded: boolean;
}

export interface TreatmentDosage {
  age_group: string;
  age_max_value: number;
  age_min_value: number;
  age_units: string;
  divided: string | null;
  dosage_value: number[];
  duration: number[];
  duration_units: string;
  formulation: null | string;
  frequency: null | string;
  instruction_notes: string;
  route: string;
  units: string;
  weight_max_value: number;
  weight_min_value: 0;
  weight_units: string;
}

export interface SigOption {
  option: string;
  sigtext: string;
}

export interface MedInfo {
  EMR_med_desc: string;
  EMR_med_name: string;
  class_etc: string;
  dosage_form_abbr: string;
  dosage_form_desc: string;
  medid: number;
  route_abbr: string;
  strength: string;
  strength_uom: string;
  route_info: SigOption[];
  frequency_info: SigOption[];
  dosage_unit: string[];
}

export interface NewTreatment {
  Adjustments: Adjustment[];
  BrandNames: TreatmentName[];
  Ingredient: TreatmentName;
  Dosages: TreatmentDosage[];
  PICMedInfo: MedInfo[];
  relatedToRxcui?: number;
}

export interface NewTreatmentGroupByType {
  Types: NewTreatmentType[];
  Treatments: NewTreatment[];
}

export interface NewTreatmentGroup {
  GroupName: string;
  ICD10Codes: string[];
  TreatmentTypes: NewTreatmentGroupByType[];
}

export interface NewTreatmentsState {
  treatmentGroups: NewTreatmentGroup[];
}

export interface DME {
  options: {
    MEDID: number;
    e_prescribe: boolean;
    MED_MEDID_DESC: string;
  };
  MED_NAME: string;
  MED_NAME_ID: number;
  quantity?: number;
  instructions?: string;
  icds?: string [];
}
