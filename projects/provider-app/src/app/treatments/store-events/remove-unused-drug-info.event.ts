import { reduce } from 'ramda';


import { Treatment, TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

// todo: remove on final-notes refactor
export class RemoveUnusedDrugInfo extends TreatmentsStoreEvent {
  getNewState(state: TreatmentsState): TreatmentsState {
    const drugTreatments: Treatment[] = state.viewModelTreatments.filter(item => ['Prescription Drugs', 'OTC Drugs'].includes(item.type) && !item.forceHide);
    const validDetails = reduce((a: Treatment, b: Treatment) => {
        a.details = a.details.filter(item => item.isSelected).concat(b.details.filter(item => item.isSelected));
        return a;
      },
      // @ts-ignore
      {details: []}, drugTreatments);
    state.drugInformation = state.drugInformation.filter(drug => validDetails.details.find(item => item.name.toLowerCase() === drug.drugName.toLowerCase()));
    return state;
  }
}
