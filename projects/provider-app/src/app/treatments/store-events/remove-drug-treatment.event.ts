import { TreatmentsState } from '../treatments.interface';
import { RemoveTreatmentEvent } from './remove-treatment.event';

export class RemoveDrugTreatmentEvent extends RemoveTreatmentEvent {
  getNewState(state: TreatmentsState): TreatmentsState {
    const [treatment, detail] = this.treatmentDetailLookup(state);
    if (detail.doctorAdded) {
      state.drugInformation = state.drugInformation.filter(item => item.drugName.toLowerCase() !== detail.name.toLowerCase());
    }
    return super.getNewState(state);
  }
}
