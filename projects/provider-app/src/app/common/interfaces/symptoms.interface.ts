import { SymptomGroupIndex } from '../enums';
import { SymptomDescription } from './pp-select.interface';
import { ResponseDetail } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/response-detail.interface';

export { ResponseDetail };

export interface ParsedSymptom {
  name: string;
  symptomID: string;
  criticality: number;
  displayOrder: number;
  snomedCodes: SnomedCode[];
  displayDrApp: boolean;
  genderGroup: string;
  categoryID: string;
  location: string[];
  blacklisted: boolean;
  logicalGroupNames?: string[];
  multipleValues?: string;
  groupName?: string;
}

export interface SnomedCode {
  name: string;
  listValueCode: string;
  listValue: string;
}

export interface SymptomCategory {
  categoryID: string[];
  categoryName: string;
  expandedNonPresenting: boolean;
  expandedPresenting: boolean;
  groupName: string;
  presenting?: any[];
  nonPresenting?: any[];
}

export interface NewSymptom {
  symptomID: string;
  name: string;
  values: any[][];
  historyItem: any;
  location?: string[];
  responseDetails?: ResponseDetail[];
}

export interface SymptomGroupCategory {
  name: string;
  categoryID: string;
  symptoms: ParsedSymptom[];
}

export interface SymptomGroup {
  name: string;
  groupID: string;
  updatedDate: number;
  categories: SymptomGroupCategory[];
  sections: {
    name: string;
    sectionID: string;
    categories: SymptomGroupCategory[];
  }[];
  dataStoreRefTypes: {
    [key: string]: {
      title: string;
      values: SymptomDescription[];
    }
  };
}

export interface CancerListItem {
  idCancer: number;
  name: string;
}

export interface SymptomDictionaries {
  symptom_id_dict: { [key: string]: { symptomGroup: string; categoryName: string; symptomName: string; } };
  symptom_snomed_dict: SymptomSnomedDict[];
  groupsUpdatedDate: { [key in keyof typeof SymptomGroupIndex]: number; };
}

export interface SymptomSnomedDict {
  symptomID: string;
  snomedName: string;
  listValue: string;
}
