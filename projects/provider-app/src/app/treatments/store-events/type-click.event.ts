import { maxBy, prop, reduce } from 'ramda';
import { Detail, TreatmentsState, TreatmentTypesItem } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { AddTreatmentEvent } from './add-treatment.event';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class TypeClickEvent extends TreatmentsStoreEvent {
  constructor(payload: TreatmentType, public selectedIllnesses?: { illnesses: string[], primary: string }, public treatmentTypes?: TreatmentTypesItem[]) {
    super(payload);
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const viewModelTreatments = state.viewModelTreatments;
    const group = viewModelTreatments.find(item => item.type === this.payload);
    const sS = group.details.some(treatment => treatment.isSelected || !treatment.doctorAdded);
    const fS = group.forceShow;
    const fH = group.forceHide;

    if (fH) group.forceHide = false;
    if ((sS || fS) && !fH) group.forceHide = true;
    if (!sS && !fH) group.forceShow = true;
    group.expanded = (sS || group.forceShow) && !group.forceHide;

    state.treatmentsDirty = true;

    if (group.expanded && ['Return to Work/School Status', 'Discharge Disposition'].includes(group.type) && !group.details.some(item => item.isSelected)) {
      let treatmentName: string;
      if (!group.details.length) treatmentName = group.type === 'Discharge Disposition' ? 'Return as needed' : 'TBD';
      else {
        let addedTreatments = group.details.filter(item => item.toTreat.includes(this.selectedIllnesses.primary));
        if (!addedTreatments.length) addedTreatments = group.details;
        // @ts-ignore
        treatmentName = reduce(maxBy(prop('priority')), {priority: 0} as Detail, addedTreatments).name;
      }
      return new AddTreatmentEvent(this.selectedIllnesses.illnesses, group.type, treatmentName, this.treatmentTypes).getNewState(state);
    }

    return state;
  }
}
