import { SymptomSnomedDict } from '../../common/interfaces/symptoms.interface';
import { LabType } from '../types/lab.type';

export interface BusinessLabInterface {
  name: string;
  groupName: string;
  symptomId: string;
  collectValue: boolean;
  lowerLegalValue: number;
  upperLegalValue: number;
  business: number;
  type: LabType;
  labData: SymptomSnomedDict[];
}
