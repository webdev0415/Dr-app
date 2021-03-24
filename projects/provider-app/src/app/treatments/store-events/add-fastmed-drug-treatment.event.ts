import { TreatmentsEnum } from '../../common/enums';
import { Detail, DrugInformation, Treatment, TreatmentsState } from '../treatments.interface';
import { AddTreatmentEvent } from './add-treatment.event';

export class AddFastmedDrugTreatmentEvent extends AddTreatmentEvent {
  addTreatment(treatment: Treatment, isSelected: boolean, state: TreatmentsState): [Detail[], DrugInformation[]] {
    const possibleDrug = this.similarDrugs.find(item => item.name.toLowerCase() === this.treatmentName.toLowerCase());

    state.drugInformation.push({
      drugName: possibleDrug.name.toUpperCase(),
      description: '',
      route: '',
      form: '',
      amount: '',
      strength: possibleDrug.strength,
      unit: (possibleDrug.strength_units || '').trim().toUpperCase(),
      quantity: '',
      directionsString: '',
      types: [],
      frequency: '',
      prn: false,
      daw: false,
      dispenseForm: ''
    });

    treatment.details.push({
      groupName: 'Group Placeholder',
      longName: 'Long name Placeholder',
      name: this.treatmentName.toUpperCase(),
      nameDetails: 'Name Details Placeholder',
      toTreat: this.icdCodes,
      doctorAdded: true,
      isSelected: isSelected,
      priority: 20,
      rank: TreatmentsEnum.SELECTION_RANK,
      dosage: '',
      rxcui: ''
    });

    return [treatment.details, state.drugInformation];
  }

  updateTreatment(detail: Detail, isSelected: boolean, state: TreatmentsState): [Detail, DrugInformation[]] {
    detail.toTreat = this.icdCodes;
    detail.isSelected = isSelected;
    const drugInformation = state.drugInformation.find(item => item.drugName.toLowerCase() === detail.name.toLowerCase());
    drugInformation.similarDrugs = this.similarDrugs;
    drugInformation.combinationDrugs = this.combinationDrugs;
    return [detail, state.drugInformation];
  }
}
