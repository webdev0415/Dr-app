import { DrugInformation } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-information.interface';
import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { TreatmentType } from '../../treatments/treatments.type';

export interface ROSSymptom extends Triage {
  logicalGroupName: string;
}

export interface ROSGroup {
  groupName: string;
  presenting: ROSSymptom[];
  notPresenting: ROSSymptom[];
}

export interface DocumentTreatment {
  type: Omit<TreatmentType, 'Return to Work/School Status'>;
  treatmentsArray: DocTreatmentItem[];
}

export interface DocTreatmentItem {
  name: string;
  icdDescs: string[];
  icdCodes: string[];
  drugInformation: DrugInformation;
}
