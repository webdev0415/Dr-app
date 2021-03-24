import { DischargeInstruction } from '../../discharge/discharge.interface';
import { TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class DischargeInstructionsUpdate extends TreatmentsStoreEvent {
  constructor(public documentType: 'customInstructions' | 'dischargeInstructions', public payload: string | DischargeInstruction[]) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    // @ts-ignore
    state[this.documentType] = this.payload;
    state.treatmentsDirty = true;
    return state;
  }
}
