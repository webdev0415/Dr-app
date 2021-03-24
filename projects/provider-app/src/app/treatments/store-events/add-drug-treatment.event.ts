import { TreatmentsEnum } from '../../common/enums';
import { Detail, DrugInformation, Treatment, TreatmentsState } from '../treatments.interface';
import { AddTreatmentEvent } from './add-treatment.event';

export class AddDrugTreatmentEvent extends AddTreatmentEvent {
  addTreatment(treatment: Treatment, isSelected: boolean, state: TreatmentsState): [Detail[], DrugInformation[]] {
    state.drugInformation.push({ ...this.getDosageDefault(this.treatmentName.toUpperCase()), rxcui: this.rxcui} );

    treatment.details.push({
      groupName: this.groupName,
      longName: 'Long name Placeholder',
      name: this.treatmentName.toUpperCase(),
      nameDetails: 'Name Details Placeholder',
      toTreat: this.icdCodes,
      doctorAdded: true,
      isSelected: isSelected,
      priority: 20,
      rank: TreatmentsEnum.SELECTION_RANK,
      dosage: '',
      rxcui: this.rxcui
    });

    return [treatment.details, state.drugInformation];
  }
}
