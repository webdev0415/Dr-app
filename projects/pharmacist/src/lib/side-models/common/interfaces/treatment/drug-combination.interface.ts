interface Ingredients {
    rxcui: string;
    description: string;
}

export interface GroupInfo {
    rxcui: string;
    description: string;
    drugType: string;
    dosageForm: string[];
    route: string[];
    strength: string[];
    'EMR_med_desc'?: string;
}

export interface CombinationGroup {
    groupType: string;
    groupInformation: GroupInfo[];
}

export interface DrugCombination {
  header: {
      drugName: string;
      atcgroups: any[];
      ingredients: Ingredients[];
  };
  genericRxcui?: CombinationGroup[];
}
