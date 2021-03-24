import { ReturnToSchoolWork } from '../../discharge/discharge.interface';
import { TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class RTWSUpdate extends TreatmentsStoreEvent {
  constructor(payload: Partial<ReturnToSchoolWork>) {
    super(payload);
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    state.returnToWorkSchool = {...state.returnToWorkSchool, ...this.payload};
    state.treatmentsDirty = true;
    return state;
  }
}
