import { DiagnosticEngine } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/diagnostic-engine/diagnostic-engine.interface';
import { BackendTreatment, DrugInformation, TreatmentPrescriptions, TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class BuildBackendTreatments extends TreatmentsStoreEvent {
  constructor(payload: DiagnosticEngine[]) {
    super(payload);
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    let backendTreatments: BackendTreatment[] = [];

    state.viewModelTreatments.forEach(treatment => {
      treatment.details.forEach(detail => {
        const drugInformation: DrugInformation = state.drugInformation.find(drug => drug.drugName.toLowerCase() === detail.name.toLowerCase());
        let prescription: TreatmentPrescriptions;

        if (treatment.type.includes('Drug') && drugInformation) {
          detail.name = detail.name.toLowerCase();
          prescription = {
            ...drugInformation,
            route: drugInformation.route || 'none',
            strength: drugInformation.strength || 'none',
            quantity: drugInformation.quantity || null,
            directions: drugInformation.directionsString,
            unit: drugInformation.unit,
            form: drugInformation.form,
            amount: drugInformation.amount,
            frequency: drugInformation.frequency,
            dispenseForm: drugInformation.dispenseForm,
            direction_object: [],
            EMR_med_name: drugInformation.description,
            EMR_med_desc: drugInformation.specificDrugDescription
          };
        }

        backendTreatments = backendTreatments.concat(detail.toTreat.map((icdCode: string) => {
          const contributor = this.payload.find(item => item.icd10 === icdCode);
          return {
            contributor: {
              icd_code: contributor.icd10,
              icd_description: contributor.icdName,
              is_illness: contributor.isIllness || true
            },
            treatment_type: treatment.type,
            name: detail.name,
            rank: detail.rank,
            dosage: detail.dosage || '',
            long_name: detail.longName,
            priority: detail.priority,
            group_name: detail.groupName,
            name_details: detail.nameDetails,
            prescriptions: prescription,
            is_selected: detail.isSelected && !treatment.forceHide,
            doctor_added: detail.doctorAdded,
            force_show: treatment.forceShow,
            force_hide: treatment.forceHide
          };
        }));

        if (detail.isSelected && treatment.type === 'Discharge Disposition') state.pvDischarge = detail.pvDischarge;
      });
    });

    const patientTreatments = this.buildPatientTreatments(backendTreatments)[0];


    return {...state, backendTreatments: backendTreatments, patientTreatments: patientTreatments};
  }
}
