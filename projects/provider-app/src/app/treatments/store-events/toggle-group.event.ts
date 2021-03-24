import { TreatmentsState } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class ToggleGroupEvent extends TreatmentsStoreEvent {
  constructor(public treatmentType: TreatmentType, public state: boolean) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const viewModelTreatments = state.viewModelTreatments;
    const group = viewModelTreatments.find(item => item.type === this.treatmentType);
    group.expanded = this.state;
    return state;
  }
}
