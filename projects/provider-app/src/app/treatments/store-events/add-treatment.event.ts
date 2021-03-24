import { TreatmentsEnum } from '../../common/enums';
import { multiselectTreatments } from '../static/static.treatments';
import {
  Detail,
  DrugInformation,
  DrugSearchResultFM,
  Treatment,
  TreatmentsState,
  TreatmentTypesItem
} from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class AddTreatmentEvent extends TreatmentsStoreEvent {
  public type = 'Add Treatment';

  constructor(public icdCodes: string[], public treatmentType: TreatmentType, public treatmentName: string, public treatmentTypes: TreatmentTypesItem[], public fastmedBusiness = false, public similarDrugs: DrugSearchResultFM[] = [], public combinationDrugs: DrugSearchResultFM[] = [], public groupName: string = 'Group Placeholder', public rxcui: string = '') {
    super();
  }

  addTreatment(treatment: Treatment, isSelected: boolean, state: TreatmentsState): [Detail[], DrugInformation[]] {
    const baseTreat = this.treatmentTypes.find(item => item.name === this.treatmentType).treatmentTypeDesc.find(item => item.shortName === this.treatmentName);
    treatment.details.push({
      groupName: this.groupName,
      longName: baseTreat.longName || '',
      name: baseTreat.shortName || '',
      nameDetails: baseTreat.description || '',
      toTreat: this.icdCodes,
      doctorAdded: true,
      isSelected: isSelected,
      sources: [],
      priority: baseTreat.priority || 20,
      rank: TreatmentsEnum.SELECTION_RANK,
      dosage: '',
      rxcui: this.rxcui
    });

    return [treatment.details, state.drugInformation];
  }

  updateTreatment(detail: Detail, isSelected: boolean, state: TreatmentsState): [Detail, DrugInformation[]] {
    detail.toTreat = this.icdCodes;
    detail.isSelected = isSelected;
    return [detail, state.drugInformation];
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const viewModelTreatments = state.viewModelTreatments;
    const treatment = viewModelTreatments.find(item => item.type === this.treatmentType);
    let detail = treatment.details.find(item => item.name.toLowerCase() === this.treatmentName.toLowerCase());
    const isSelected = Boolean(this.icdCodes.length);
    if (detail) {
      [detail, state.drugInformation] = this.updateTreatment(detail, isSelected, state);
      treatment.details = treatment.details.filter(item => item.name !== detail.name);
      treatment.details.push(detail);
    } else {
      [treatment.details, state.drugInformation] = this.addTreatment(treatment, isSelected, state);
    }
    if (!multiselectTreatments.includes(this.treatmentType) && isSelected) treatment.details.forEach(item => item.isSelected = item.name === this.treatmentName);
    state.pvDischarge = this.updatePVDischarge(state.viewModelTreatments, state.pvDischarge, isSelected, this.treatmentType, this.treatmentName);
    state.treatmentsDirty = true;
    return state;
  }
}
