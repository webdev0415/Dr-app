import { TreatmentsState } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class ChangeTreatmentGroup extends TreatmentsStoreEvent {
  constructor(public treatmentType: TreatmentType, public oldTreatmentName: string, public treatmentName: string) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const previousTreatment = state.viewModelTreatments.find(item => item.type.includes('Drug') && item.type !== this.treatmentType);
    const detail = previousTreatment.details.find(item => item.name.toLowerCase() === this.oldTreatmentName.toLowerCase());
    previousTreatment.details = previousTreatment.details.filter(item => item.name.toLowerCase() !== this.oldTreatmentName.toLowerCase());
    const targetTreatment = state.viewModelTreatments.find(item => item.type === this.treatmentType);
    detail.name = this.treatmentName;
    targetTreatment.details.push(detail);
    const drugInfo = state.drugInformation.find(item => item.drugName.toLowerCase() === this.oldTreatmentName.toLowerCase());
    drugInfo.drugName = this.treatmentName.toUpperCase();
    return state;
  }
}
