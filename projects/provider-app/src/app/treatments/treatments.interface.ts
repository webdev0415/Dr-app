import { DrugInformation } from '../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-information.interface';
export { DrugCombination, CombinationGroup, GroupInfo } from '../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-combination.interface';
import { DrugSearchResultFM } from '../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-search-result-fm.interface';
import { DrugConflict } from '../common/models/data.model';
import { DischargeInstruction, PVDischarge, ReturnToSchoolWork } from '../discharge/discharge.interface';
import { TreatmentType } from './treatments.type';

export { DrugInformation, DrugSearchResultFM };

export interface Detail {
  groupName: string;
  longName: string;
  name: string;
  nameDetails: string;
  toTreat: string[];
  doctorAdded: boolean;
  isSelected: boolean;
  priority: number;
  rank: number;
  sources?: string[][];
  isPreviouslySelected?: boolean;
  dosage: string;
  pvDischarge?: PVDischarge;
  rxcui: string;
}

export interface PrescriptionDetail extends Detail {
  prescriptions: Omit<TreatmentPrescriptions, 'direction_object'>;
}

export interface Treatment {
  details: Detail[];
  type: TreatmentType;
  forceShow?: boolean;
  forceHide?: boolean;
  expanded?: boolean;
}

export interface TreatmentEngine {
  isIllness: boolean;
  treatments: Treatment[];
  oldIcdDesc?: string;
  icdDesc: string;
  icdCode: string;
}

export interface BackendTreatment {
  contributor: {
    icd_code: string;
    icd_description: string;
    is_illness: boolean;
  };
  treatment_type: TreatmentType;
  name: string;
  rank: number;
  dosage: string;
  long_name: string;
  priority: number;
  group_name: string;
  name_details: string;
  prescriptions: TreatmentPrescriptions;
  is_selected: boolean;
  doctor_added: boolean;
  force_hide?: boolean;
  force_show?: boolean;
  pvDischarge?: PVDischarge;
}

export interface TreatmentPrescriptions {
  route: string;
  strength: string;
  quantity: string;
  directions: string;
  direction_object: any[];
  unit: string;
  form: string;
  amount: string;
  frequency: string;
  daw: boolean;
  prn: boolean;
  dispenseForm: string;
  EMR_med_name: string;
  EMR_med_desc: string;
}

export interface TreatmentTypeDesc {
  shortName: string;
  longName: string;
  defaultValue?: boolean;
  typeDescID: number;
  conceptID: number[];
  priority?: number;
  description?: string;
  cptCode: string[] | null;
}

export interface TreatmentTypesItem {
  typeID: number;
  name: TreatmentType;
  treatmentTypeDesc: TreatmentTypeDesc[];
}

export interface DrugConflictInformation {
  knownDrugAllergies: DrugConflict[];
  knownDrugConflicts: DrugConflict[];
  knownPrecautionConflicts: DrugConflict[];
}

export interface TreatmentsState {
  viewModelTreatments: Treatment[];
  patientTreatments: TreatmentEngine[];
  backendTreatments: BackendTreatment[];
  drugInformation: DrugInformation[];
  drugConflictInformation: DrugConflictInformation;
  treatmentsDirty: boolean;
  pvDischarge: PVDischarge;
  customInstructions: string;
  dischargeInstructions: DischargeInstruction[];
  returnToWorkSchool: ReturnToSchoolWork;
}
