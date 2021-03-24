import { Detail, DrugInformation, PrescriptionDetail, TreatmentsState } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class LoadProtocolEvent extends TreatmentsStoreEvent {
  constructor(public details: Array<Detail | PrescriptionDetail>, public treatmentType: TreatmentType) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const treatment = state.viewModelTreatments.find(item => item.type === this.treatmentType);
    treatment.details = treatment.details.map(detail => {
      const replaceDetail: Detail | PrescriptionDetail = this.details.find(item => item.name === detail.name.toLowerCase());
      if (replaceDetail && 'prescriptions' in replaceDetail) {
        state.drugInformation = [
          ...state.drugInformation.filter(item => item.drugName.toLowerCase() !== replaceDetail.name),
          this.prescriptionToDrugInformation(replaceDetail.prescriptions, replaceDetail.name)
        ];
      }
      return replaceDetail || detail;
    });
    this.details.filter(addDetail => !treatment.details.find(detail => detail.name.toLowerCase() === addDetail.name)).forEach(addDetail => {
      treatment.details = [...treatment.details, addDetail];
      if (addDetail && 'prescriptions' in addDetail) {
        state.drugInformation = [
          ...state.drugInformation,
          this.prescriptionToDrugInformation(addDetail.prescriptions, addDetail.name)
        ];
      }
    });
    return state;
  }

  private prescriptionToDrugInformation(prescription: PrescriptionDetail['prescriptions'], drugName: string): DrugInformation {
    return {
      ...prescription,
      daw: prescription.daw,
      prn: prescription.prn,
      drugName: drugName,
      types: [],
      directionsString: prescription.directions
    };
  }
}
