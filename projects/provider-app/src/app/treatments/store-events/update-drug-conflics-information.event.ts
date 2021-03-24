import { DrugConflict } from '../../common/models/data.model';
import { DrugConflictInformation, TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class UpdateDrugConflictsInformationEvent extends TreatmentsStoreEvent {
  constructor(payload: { [key in keyof DrugConflictInformation]: DrugConflict[] }, public updateType: 'add' | 'remove' | 'replace' = 'add') {
    super(payload);
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const drugConflicts = state.drugConflictInformation;
    Object.keys(this.payload).forEach(key => {
      switch (this.updateType) {
        case 'add':
          drugConflicts[key] = drugConflicts[key].concat(this.payload[key].filter(item => !!item.conflict));
          break;
        case 'remove':
          drugConflicts[key] = drugConflicts[key].filter(conflict => !this.payload[key].find(item => item.conflict === conflict.conflict));
          break;
        case 'replace':
          drugConflicts[key] = this.payload[key].filter(item => !!item.conflict);
          break;
      }
    });

    return {...state, drugConflictInformation: drugConflicts};
  }
}
