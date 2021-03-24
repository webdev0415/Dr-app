import { PVDischarge } from '../../discharge/discharge.interface';
import { TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class DischargeUpdate extends TreatmentsStoreEvent {
  constructor(public dischargeInfo: PVDischarge) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    state.pvDischarge = this.dischargeInfo;
    state.viewModelTreatments.find(item => item.type === 'Discharge Disposition').details.find(item => item.isSelected).pvDischarge = this.dischargeInfo;
    state.treatmentsDirty = true;
    return state;
  }
}
