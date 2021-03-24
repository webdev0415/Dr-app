import {
  BackendTreatment,
  Treatment,
  TreatmentEngine
} from '../../treatments/treatments.interface';

export class TreatmentsModel {
  viewModelTreatments: Treatment[];
  patientTreatments: TreatmentEngine[];
  backendTreatmentsModel: BackendTreatment[];
}
