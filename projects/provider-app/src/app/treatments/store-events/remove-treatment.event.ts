import { Detail, Treatment, TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class RemoveTreatmentEvent extends TreatmentsStoreEvent {
  constructor(public treatmentType: string, public treatmentName: string) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const [treatment, detail, viewModelTreatments] = this.treatmentDetailLookup(state);
    detail.isSelected = false;
    if (detail.doctorAdded) {
      treatment.details = treatment.details.filter(item => item.name.toLowerCase() !== detail.name.toLowerCase());
    }
    return {
      ...state,
      viewModelTreatments: viewModelTreatments,
      treatmentsDirty: true,
      pvDischarge: this.treatmentName === 'Discharge Disposition' ? null : state.pvDischarge
    };
  }

  protected treatmentDetailLookup(state: TreatmentsState): [Treatment, Detail, Treatment[]] {
    const viewModelTreatments = state.viewModelTreatments;
    const treatment = viewModelTreatments.find(item => item.type === this.treatmentType);
    const detail = treatment.details.find(item => item.name.toLowerCase() === this.treatmentName.toLowerCase());
    return [treatment, detail, viewModelTreatments];
  }
}
