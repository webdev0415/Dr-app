import { DrugInformation } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-information.interface';
import { TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class UpdateDrugInformationEvent extends TreatmentsStoreEvent {

  constructor(payload: DrugInformation[], public treatmentsDirty = true) {
    super(payload);
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    return {...state, drugInformation: this.payload, treatmentsDirty: this.treatmentsDirty};
  }
}
