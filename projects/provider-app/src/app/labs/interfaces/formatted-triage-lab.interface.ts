import { ResponseDetail } from '../../common/interfaces/symptoms.interface';

export interface FormattedTriageLab {
  Time: string;
  SymptomSource: string;
  Values: any[][];
  Response: string | boolean;
  SymptomID: string;
  SymptomName: string;
  Measurement: number | null;
  Location: string[];
  responseDetails?: ResponseDetail[];
}
