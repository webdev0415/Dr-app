import { ResponseDetail } from './response-detail.interface';

export interface Triage {
  symptomCategory: string;
  icdGroup: string;
  symptomId: string;
  response: string | boolean;
  symptomCategoryId: string;
  symptomGroupId: string;
  measurement?: any;
  values: any[][];
  symptomSource: string;
  symptomName: string;
  location: string[];
  categoryName: string;
  symptomGroup: string;
  time: string;
  responseDetails?: ResponseDetail[];
}
