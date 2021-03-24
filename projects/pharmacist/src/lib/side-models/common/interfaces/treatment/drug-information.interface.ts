import { DrugSearchResultFM } from './drug-search-result-fm.interface';

export interface DrugInformation {
  drugName: string;
  description?: string;
  strength: string;
  unit: string;
  quantity: string;
  route: string;
  directionsString: string;
  types: any[];
  form?: string;
  amount?: string;
  frequency: string;
  prn: boolean;
  daw: boolean;
  dispenseForm: string;
  rxcui?: string;
  similarDrugs?: DrugSearchResultFM[];
  combinationDrugs?: DrugSearchResultFM[];
  specificDrugDescription?: string;
}
