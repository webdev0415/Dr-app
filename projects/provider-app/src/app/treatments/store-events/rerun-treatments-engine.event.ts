import { clone, compose, concat, eqProps, equals, flatten, groupWith, map, prop, uniq, sortWith, ascend, descend } from 'ramda';


import { PVDischarge } from '../../discharge/discharge.interface';
import { defaultPVDischarge, initialTreatments } from '../static/static.treatments';
import {
  Detail,
  DrugConflictInformation,
  DrugInformation, PrescriptionDetail,
  Treatment,
  TreatmentEngine,
  TreatmentsState
} from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class RerunTreatmentsEngineEvent extends TreatmentsStoreEvent {
  constructor(payload: { treatments: TreatmentEngine[], additionalInformation: DrugConflictInformation, illness: string[], availableTreatmentTypes: TreatmentType[], primaryIllness: string }) {
    super(payload);
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    const [patientTreatments, viewModelTreatments, drugInformation] = this.getPresetTreatments(this.payload.treatments, state, this.payload.illness);
    const drugConflictsInformation: DrugConflictInformation = {
      knownPrecautionConflicts: this.payload.additionalInformation.knownPrecautionConflicts,
      knownDrugAllergies: this.payload.additionalInformation.knownDrugAllergies,
      knownDrugConflicts: this.payload.additionalInformation.knownDrugConflicts,
    };
    state.dischargeInstructions = [];
    state.customInstructions = '';
    return {
      ...state,
      patientTreatments: patientTreatments,
      viewModelTreatments: viewModelTreatments,
      drugConflictInformation: drugConflictsInformation,
      drugInformation: drugInformation,
      treatmentsDirty: true,
      pvDischarge: this.checkPVDischarge(state, viewModelTreatments, this.payload.primaryIllness)
    };
  }

  private getSelectedDisposition(viewModelTreatments: Treatment[]): Detail {
    const dischargeTreatments = viewModelTreatments.find(item => item.type === 'Discharge Disposition');
    return dischargeTreatments.details.find(item => item.isSelected);
  }

  private checkPVDischarge(state: TreatmentsState, viewModelTreatments: Treatment[], primaryIllness: string): PVDischarge {
    const selectedDisposition = this.getSelectedDisposition(viewModelTreatments);
    if (selectedDisposition) return this.updatePVDischarge(viewModelTreatments, state.pvDischarge, true, 'Discharge Disposition', selectedDisposition.name, primaryIllness);
    else return clone(defaultPVDischarge);
  }

  protected getPresetTreatments(output: TreatmentEngine[], state: TreatmentsState, illness: string[]): [TreatmentEngine[], Treatment[], DrugInformation[]] {
    const availableTreatmentTypes: TreatmentType[] = this.payload.availableTreatmentTypes;
    const newIllnessesTE = output.filter(TE => !state.patientTreatments.find(item => item.icdCode === TE.icdCode)).map(item => {
      return {
        ...item,
        treatments: item.treatments.map(treatment => ({
          ...treatment,
          details: treatment.details.map(detail => ({ ...detail, isSelected: false }))
        }))
      };
    });

    const allTreatments = concat(state.patientTreatments, newIllnessesTE);
    const viewModelTreatments = availableTreatmentTypes.map((type: TreatmentType): Treatment => {
      const relatedDetails: Detail[][] = allTreatments
        .map(TE => ({...TE, treatments: TE.treatments.filter(item => item.type === type)}))
        .filter(TE => TE.treatments.length)
        .map(TE => TE.treatments[0].details.map(detail => ({ ...detail, toTreat: [TE.icdCode] })));

      let treatmentDetails = groupWith(eqProps('name'), flatten(relatedDetails))
        .map((details: Detail[]): Detail => {
          const toTreat: string[] = compose(uniq, flatten, map(prop('toTreat')))(details);
          const isSelected = details.some(item => item.isSelected && item.toTreat.some(icdCode => illness.includes(icdCode)));
          return {
            ...details[0],
            isSelected,
            toTreat,
            doctorAdded: details.some(item => item.doctorAdded) || details.some(item => item.isSelected) && !toTreat.some(item => illness.includes(item)),
          };
        });

      if (
        treatmentDetails.length &&
        (
          type === 'Discharge Disposition' && !this.isDischargeSelected(state)
          || type === 'Return to Work/School Status' && !this.RTWSSelected(state)
        )
      ) {
        treatmentDetails = this.selectPrefillDetail(allTreatments, type, treatmentDetails);
      }

      return {
        type,
        details: treatmentDetails.filter(item => item.isSelected || item.doctorAdded || item.toTreat.some(icdCode => illness.includes(icdCode))),
        expanded: !!treatmentDetails.length
      };
    });

    const drugInformation: DrugInformation[] = flatten(
      viewModelTreatments
        .filter(item => item.type.toLowerCase().includes('drug'))
        .map(item => item.details)
    ).map((drugDetail: PrescriptionDetail | Detail): DrugInformation => {
      const existingDrugInformation = state.drugInformation.find(item => item.drugName.toLowerCase() === drugDetail.name.toLowerCase());
      if (existingDrugInformation) return existingDrugInformation;
      if ('prescriptions' in drugDetail) {
        return {
          ...drugDetail.prescriptions,
          drugName: drugDetail.name,
          rxcui: drugDetail.rxcui,
          directionsString: drugDetail.prescriptions.directions,
          daw: drugDetail.prescriptions.daw || false,
          prn: drugDetail.prescriptions.prn || false,
          types: []
        };
      } else return this.getDosageDefault(drugDetail.name);
    });

    return [allTreatments.filter(item => illness.includes(item.icdCode)), viewModelTreatments, drugInformation];
  }

  private isDischargeSelected(state: TreatmentsState): boolean {
    const dischargeTreatments = state.viewModelTreatments.find(item => item.type === 'Discharge Disposition');
    return !dischargeTreatments.forceHide && dischargeTreatments.details.some(item => item.isSelected) && !equals(initialTreatments.pvDischarge, state.pvDischarge);
  }

  private RTWSSelected(state: TreatmentsState): boolean {
    const RTWSTreatments = state.viewModelTreatments.find(item => item.type === 'Return to Work/School Status');
    return !RTWSTreatments.forceHide && RTWSTreatments.details.some(item => item.isSelected) && state.returnToWorkSchool.returnTo !== 'NONE';
  }

  private selectPrefillDetail(treatments: TreatmentEngine[], type: Extract<TreatmentType, 'Discharge Disposition' | 'Return to Work/School Status'>, treatmentDetails: Detail[]): Detail[] {
    const primaryIllnessTreatment = treatments.find(item => item.icdCode === this.payload.primaryIllness).treatments.find(item => item.type === type);
    if (primaryIllnessTreatment && primaryIllnessTreatment.details.length) {
      const primaryDischargeTreatmentName = sortWith([ascend<Detail>(prop('rank')), descend<Detail>(prop('priority'))])(primaryIllnessTreatment.details)[0].name;
      treatmentDetails.find(item => item.name === primaryDischargeTreatmentName).isSelected = true;
    }
    return treatmentDetails;
  }
}
