import { clone, equals, groupBy, isNil, maxBy, path, prop, reduce, uniqBy } from 'ramda';


import { dosageJSON } from '../../../assets/dosage';
import { drugNameMap } from '../../../assets/drug-name-map';
import { OrderStateEnum } from '../../common/enums';
import { DrugConflict } from '../../common/models/data.model';
import { PVDischarge } from '../../discharge/discharge.interface';
import { PVTimeUnitType } from '../../discharge/discharge.type';
import { PVFrequencyEnum } from '../enum/pv-frequency.enum';
import { PVRoutes } from '../static/static.drugs';
import { defaultPVDischarge, hiddenTreatments, multiselectTreatments } from '../static/static.treatments';
import {
  BackendTreatment,
  Detail,
  DrugInformation, PrescriptionDetail,
  Treatment,
  TreatmentEngine,
  TreatmentsState
} from '../treatments.interface';
import { TreatmentType } from '../treatments.type';

export abstract class TreatmentsStoreEvent {
  readonly type?: string = 'Base Event';

  constructor(public payload?: any) {
  }

  abstract getNewState(state: TreatmentsState): TreatmentsState;

  protected getIcdCode(treatment): string {
    return path(['contributor', 'icd_code'], treatment);
  }


  protected buildDrugs(drugs: DrugInformation[], drugDetail: PrescriptionDetail) {
    if (!drugs.find(item => item.drugName === drugDetail.name)) {
      // @ts-ignore
      if (drugDetail.prescriptions) {
        drugs.push({
          ...drugDetail.prescriptions,
          drugName: drugDetail.name,
          directionsString: drugDetail.prescriptions.directions,
          daw: drugDetail.prescriptions.daw || false,
          prn: drugDetail.prescriptions.prn || false,
          types: []
        });
      } else {
        drugs.push(this.getDosageDefault(drugDetail.name));
      }
    }
  }

  protected routeMapping(defaultRoute: string): string {
    let searchString = defaultRoute;
    switch (defaultRoute.toLowerCase()) {
      case 'oral':
        searchString = 'by mouth';
        break;
      case 'nasal':
        searchString = 'sinuses, in the';
        break;
      case 'inhalation':
        searchString = 'inhale';
        break;
      case 'injection':
        searchString = 'inject, intramuscular';
        break;
    }
    const PVRoute = PVRoutes.find(item => item.value === searchString.toLowerCase());
    if (PVRoute) return PVRoute.value;
    else return '';
  }

  protected getPrefilledDirections(drug: DrugInformation): string {
    return `${drug.amount} ${drug.form} ${drug.route || ''} ${PVFrequencyEnum[drug.frequency] || ''}`.trim();
  }

  protected getDosageDefault(name: string): DrugInformation {
    const drug: DrugInformation = {
      drugName: name,
      route: '',
      form: '',
      amount: '',
      strength: '',
      unit: 'MG',
      quantity: '',
      directionsString: '',
      types: [],
      frequency: '',
      prn: false,
      daw: false,
      dispenseForm: ''
    };
    drug.directionsString = this.getPrefilledDirections(drug);
    return drug;
  }

  protected getPresetTreatments(output: TreatmentEngine[], state: TreatmentsState, illness: string[]): [TreatmentEngine[], Treatment[], DrugInformation[]] {
    let treatmentsArray: Treatment[] = state.viewModelTreatments;
    let predefinedTreatments: TreatmentEngine[] = state.patientTreatments;
    const drugInfo = state.drugInformation;
    predefinedTreatments = predefinedTreatments.concat(output.filter(engineIllness => !predefinedTreatments.find(item => item.icdCode === engineIllness.icdCode)));

    const selectedIllnessTreatments: TreatmentEngine[] = predefinedTreatments.filter(engineIllness => illness.includes(engineIllness.icdCode));
    const unusedIllnessTreatments: TreatmentEngine[] = predefinedTreatments.filter(engineIllness => !illness.includes(engineIllness.icdCode));
    unusedIllnessTreatments.forEach((diag) => {
      diag.treatments.forEach((treatment) => {
        treatment.details.map((item) => ({ ...item, isSelected: false }));
      });
    });

    selectedIllnessTreatments.forEach(diag => {
      diag.treatments.forEach(treat => {
        treat.details.forEach(detail => {
          detail.isSelected = Boolean(isNil(detail.isSelected) && detail.rank === 1 || detail.isSelected);
          if (treat.type.includes('Drugs')) {
            this.buildDrugs(drugInfo, detail as PrescriptionDetail);
          }
          if (treat.type.includes('Discharge')) {
            detail.pvDischarge = detail.isSelected && state.pvDischarge && !equals(state.pvDischarge, defaultPVDischarge) ? state.pvDischarge : this.generateDefaultPVDischarge(detail.name);
          }
        });
      });
    });

    illness.forEach(icdCode => {
      const diagnosisTreatment: TreatmentEngine = selectedIllnessTreatments.find(item => item.icdCode === icdCode);
      if (!diagnosisTreatment) return;
      treatmentsArray = this.addTreatmentToList(diagnosisTreatment, treatmentsArray);
    });

    treatmentsArray.forEach(treatment => {
      treatment.expanded = treatment.details.some(detail => detail.isSelected || !detail.doctorAdded);
      if (treatment.expanded && !multiselectTreatments.includes(treatment.type)) {
        // @ts-ignore
        const maxPriorityDetail: Detail = reduce(maxBy(prop('priority')), {priority: 0}, treatment.details.filter(item => item.isSelected));
        treatment.details.forEach(detail => detail.isSelected = maxPriorityDetail.name === detail.name);
      }
    });

    return [predefinedTreatments, treatmentsArray, drugInfo];
  }

  protected addTreatmentToList(diagTreatment: TreatmentEngine, treatmentsArray: Treatment[]): Treatment[] {
    diagTreatment.treatments.forEach((treatment: Treatment) => {
      if (treatment.type === 'Physical Exam') return;
      const treat: Treatment = treatmentsArray.find((item) => {
        return item.type === treatment.type;
      });

      if (treat) {
        treatment.details.filter((item) => !hiddenTreatments.includes(item.name)).forEach(detail => {
          const existingDetail: any = treat.details.find((item) => {
            return item.name === detail.name;
          });

          if (existingDetail) {
            if (!existingDetail.toTreat.includes(diagTreatment.icdCode)) existingDetail.toTreat.push(diagTreatment.icdCode);
          } else {
            detail.toTreat = [diagTreatment.icdCode];
            treat.details.push(detail);
          }
        });
      } else {
        const details: Detail[] = treatment.details.filter((item) => !hiddenTreatments.includes(item.name));
        details.map(item => {
          item.toTreat = [diagTreatment.icdCode];
        });
        treatment.details = details;
        treatmentsArray.push(treatment);
      }
    });
    return treatmentsArray;
  }

  protected addConflicts(old: DrugConflict[], returned: DrugConflict[]): DrugConflict[] {
    returned.filter(item => !!item.conflict).forEach(item => {
      if (!old) return;
      const oldConflict = old.find(conflict => conflict.conflict === item.conflict);
      if (oldConflict) {
        oldConflict.potentialDrugs = item.potentialDrugs;
      } else {
        old.push(item);
      }
    });
    return old;
  }

  protected buildPatientTreatments(backendTreatments: BackendTreatment[]): [TreatmentEngine[], DrugInformation[]] {
    const drugInfo: DrugInformation[] = [];
    const treatmentEngine: TreatmentEngine[] = [];
    const uniqueTreatmentsGroups: { [key: string]: BackendTreatment[] } = groupBy(this.getIcdCode, backendTreatments);
    const tempTreatments = Object.keys(uniqueTreatmentsGroups).map(key => uniqueTreatmentsGroups[key]);
    tempTreatments.forEach(contributor => {
      const groupsObject = groupBy(prop('treatment_type'), contributor);
      const groups = Object.keys(groupsObject).map(groupName => groupsObject[groupName]).map((group: any): Treatment => {
        const groupData = group[0];
        return {
          type: groupData.treatment_type,
          details: group.map((item: BackendTreatment): Detail => {
            if (item.prescriptions && !drugInfo.find(drug => drug.drugName === item.name)) drugInfo.push({
              quantity: item.prescriptions.quantity,
              route: item.prescriptions.route === OrderStateEnum.NONE ? null : this.routeMapping(item.prescriptions.route),
              directionsString: item.prescriptions.directions,
              strength: item.prescriptions.strength === OrderStateEnum.NONE ? null : item.prescriptions.strength,
              drugName: item.name,
              unit: item.prescriptions.unit,
              types: this.getDosageDefault(item.name_details).types,
              amount: item.prescriptions.amount,
              form: item.prescriptions.form,
              frequency: item.prescriptions.frequency,
              daw: item.prescriptions.daw,
              prn: item.prescriptions.prn,
              dispenseForm: item.prescriptions.dispenseForm
            });
            else if (item.treatment_type.includes('Drugs')) drugInfo.push(this.getDosageDefault(item.name));
            return {
              groupName: item.group_name,
              longName: item.long_name,
              name: item.name,
              nameDetails: item.name_details,
              priority: item.priority,
              rank: item.rank,
              dosage: item.dosage,
              toTreat: [groupData.contributor.icd_code],
              isSelected: item.is_selected && !item.force_hide,
              doctorAdded: item.doctor_added,
              rxcui: ''
            };
          })
        };
      });
      const illnessData = contributor[0].contributor;
      treatmentEngine.push({
        isIllness: illnessData.is_illness,
        icdDesc: illnessData.icd_description,
        icdCode: illnessData.icd_code,
        treatments: groups
      });
    });
    return [treatmentEngine, uniqBy((item) => item.drugName, drugInfo)];
  }

  protected generateDefaultPVDischarge(treatmentName: string): PVDischarge {
    const dischargeInfo: PVDischarge = clone(defaultPVDischarge);
    if (!treatmentName) return dischargeInfo;
    if (treatmentName.match(/return in\s\d{1,2}\s(day|week|month)[s]{0,1}$/gmi)) {
      // @ts-ignore
      [dischargeInfo.amountOf, dischargeInfo.time] = treatmentName.replace(/return in/i, '').trim().split(' ');
      if (!dischargeInfo.time.endsWith('s') && dischargeInfo.time.length) dischargeInfo.time = dischargeInfo.time + 's' as PVTimeUnitType;
      dischargeInfo.returnIn = true;
    } else if (treatmentName === 'Transfer to ER/ED') dischargeInfo.otherReason = 'Emergency Department Transfer';
    else if (treatmentName === 'Left Without Treatment - not billable') dischargeInfo.otherReason = 'Patient Left without Discharge';
    return dischargeInfo;
  }

  protected updatePVDischarge(viewModelTreatments: Treatment[], pvDischarge: PVDischarge, selected: boolean, treatmentType: TreatmentType, treatmentName: string, primaryIllness?: string): PVDischarge {
    if (treatmentType === 'Discharge Disposition') {
      let dischargeInfo: PVDischarge = this.generateDefaultPVDischarge(treatmentName);
      if (selected) {
        const treatment: Detail = viewModelTreatments.find(item => item.type === 'Discharge Disposition').details.find(item => item.name === treatmentName);
        if (primaryIllness) treatment.toTreat = [primaryIllness];
        if (!treatment.pvDischarge) treatment.pvDischarge = dischargeInfo;
        else dischargeInfo = treatment.pvDischarge;
      }
      return dischargeInfo;
    } else return pvDischarge;
  }
}
