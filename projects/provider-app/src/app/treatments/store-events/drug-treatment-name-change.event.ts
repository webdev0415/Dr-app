import { DrugSearchResultFM } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-search-result-fm.interface';
import { TreatmentsState } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class DrugTreatmentNameChange extends TreatmentsStoreEvent {
  constructor(public treatmentType: TreatmentType, public treatmentOldName: string, public treatmentNewName: string, public description: string, public similarDrugs: DrugSearchResultFM[] = null) {
    super();
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const drug = state.viewModelTreatments.find(item => item.type === this.treatmentType).details.find(item => item.name.toLowerCase() === this.treatmentOldName.toLowerCase());
    const drugInformation = state.drugInformation.find(item => item.drugName === this.treatmentOldName);
    drugInformation.similarDrugs = this.similarDrugs || drugInformation.similarDrugs;
    drugInformation.drugName = this.treatmentNewName;
    drugInformation.description = this.description;
    let similarDrug = drugInformation.similarDrugs.find(item => item.description === this.description);
    if (!similarDrug) {
      similarDrug = drugInformation.similarDrugs.find(item => item.name.toLowerCase() === this.treatmentNewName.toLowerCase());
      if (similarDrug) this.description = similarDrug.description;
    }
    if (similarDrug) {
      drugInformation.strength = similarDrug.strength;
      drugInformation.unit = similarDrug.strength_units;
    }
    drug.name = this.treatmentNewName;
    drug.nameDetails = this.description;
    return {...state, treatmentsDirty: true};
  }
}
