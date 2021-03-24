export interface DrugSearchResultFM {
  name: string;
  pvid: number;
  description: string;
  strength: string;
  strength_units: string;
  route: string;
  dosage: string;
  rxcui: number;
  genericRxcui?: number[];
}
