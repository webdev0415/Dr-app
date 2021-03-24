import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';

import { produce } from 'immer';
import { take } from 'rxjs/operators';
import { StateResetAll } from 'ngxs-reset-plugin';
import { compose, groupBy, prop, sortBy, flatten, sum, clone, filter, uniqBy, reverse, insert, equals } from 'ramda';


import { DataService, StateService, SymptomsService } from 'services';
import {
  AddIllness,
  InitAccordion,
  RenameIllness,
  RerunDiagnosticEngine,
  SelectPrimary,
  SelectWorkupPlanned,
  ToggleGroup,
  ToggleSelection,
  UpdatePharmacyDiagnosis
} from './diagnosis-accordion.actions';

import { DiagnosisAccordionModel } from 'common/models/diagnosis-accordion.model';
import {
  Contributor,
  DiagnosisAccordionGroup,
  DiagnosisAccordionItem,
  DiagnosticEngine,
  SelectedIllness
} from 'common/interfaces/diagnostic-engine.interface';

import { DiagnosisTabsEnum, IllnessPresentationTypesEnum, SymptomTypesEnum } from 'common/enums';
import { otherIllnessGroups } from 'static/app.constants';
import { isSymptomPresenting } from 'utils/symptoms';

import { defaultGroupedSymptom } from '../../symptoms/symptoms.interface';

@Injectable()
@State<DiagnosisAccordionModel>({
  name: 'diagnosisAccordionModel',
  defaults: {
    definedICDs: [],
    accordion: [],
    expandedElements: {},
    illnessesInformation: {
      defined_illnesses: [],
      selected_illnesses: [],
      is_edited_by_doctor: false
    },
    triage: [],
    diagnosticEngine: []
  }
})
export class DiagnosisAccordionState {

  @Selector()
  static diagnosisAccordion(state: DiagnosisAccordionModel): DiagnosisAccordionGroup[] {
    return state.accordion;
  }

  @Selector()
  static definedICDList(state: DiagnosisAccordionModel): DiagnosticEngine[] {
    return state.diagnosticEngine.filter(item => item.isSelected && item.icdGroup === 'Defined Illnesses');
  }

  @Selector()
  static expandedElements(state: DiagnosisAccordionModel): {[key: string]: boolean} {
    return state.expandedElements;
  }

  @Selector()
  static selectedIllnesses(state: DiagnosisAccordionModel): SelectedIllness[] {
    return state.diagnosticEngine.filter(item => item.isSelected && item.icdGroup !== 'Defined Illnesses').map(item => ({
      icd10_code: item.icd10,
      icd10_name: item.icdName,
      is_primary: item.isPrimary,
      workup_planned: item.workupPlanned
    }));
  }

  @Selector()
  static diagnosticEngine(state: DiagnosisAccordionModel): DiagnosticEngine[] {
    return state.diagnosticEngine;
  }

  static isDoctorAdded(item: DiagnosticEngine | DiagnosisAccordionGroup): boolean {
    if (!item) return false;
    return item.icdGroup === 'Doctor added';
  }

  static isChronic(item: DiagnosticEngine): boolean {
    if (!item) return false;
    return item.source === 'Chronic';
  }

  static isCritical(item: DiagnosticEngine): boolean {
    if (!item) return false;
    return item.source === 'UnlikelyDiagnosisToConsider';
  }

  static isChronicOrCritical(item: DiagnosticEngine): boolean {
    return DiagnosisAccordionState.isChronic(item) || DiagnosisAccordionState.isCritical(item);
  }

  static accordionSortedGroupsNames(currentSort: {key: IllnessPresentationTypesEnum, direction: 'asc' | 'desc'}, filteringCb: (DE: DiagnosticEngine) => boolean, mainIllnessesGroup = true) {
    return createSelector([DiagnosisAccordionState], (state: DiagnosisAccordionModel) => {
      let DE: DiagnosticEngine[] = clone(filter(filteringCb, state.diagnosticEngine));
      if (currentSort.key === IllnessPresentationTypesEnum.CONFIDENCE) {
        const groupedDE = groupBy(prop('icdGroup'), DE);
        const groupsconfidence: { [key: string]: number } = {};
        Object.keys(groupedDE).forEach(group => {
          groupsconfidence[group] = +sum(groupedDE[group].map(item => (item.confidence || 0) * 100)).toFixed(1);
        });
        DE = DE.map(item => {
          item.confidence = groupsconfidence[item.icdGroup];
          return item;
        });
      }
      let groups = sortBy(prop(currentSort.key))(uniqBy(prop('icdGroup'), DE)).map(item => item.icdGroup).filter(item => item !== 'Defined Illnesses' && item !== 'Doctor added');
      if (currentSort.direction === 'desc') groups = reverse(groups);
      if (mainIllnessesGroup) groups = insert(0, 'Doctor added', groups);
      return groups;
    });
  }

  static accordionGroups(topIllnessQuantity: number, filteringCb: (DE: DiagnosticEngine) => boolean) {
    return createSelector([DiagnosisAccordionState], (state: DiagnosisAccordionModel): {[key: string]: DiagnosticEngine[]} => {
      return this.groups(state.diagnosticEngine, topIllnessQuantity, filteringCb);
    });
  }

  private static groups(diagnosticEngine: DiagnosticEngine[], topIllnessQuantity: number, filteringCb: (DE: DiagnosticEngine) => boolean): {[key: string]: DiagnosticEngine[]} {
    const groups = groupBy(prop('icdGroup'), diagnosticEngine.filter(item => filteringCb(item)));
    Object.keys(groups).forEach(key => {
      const group = sortBy(prop('confidence'), groups[key]).reverse();
      groups[key] = group.length > topIllnessQuantity && topIllnessQuantity ? [...group.slice(0, topIllnessQuantity),
        // @ts-ignore
        { extend: true, icdGroup: key },
        ...group.slice(topIllnessQuantity)] : group;
    });
    return groups;
  }

  @Selector()
  static groupedContributors(state: DiagnosisAccordionModel): {[icdGroup: string]: Contributor[]} {
    const groups = clone(this.groups(state.diagnosticEngine, 0, () => true));
    let contributorsGroups: {[icdGroup: string]: Contributor[]} = {};
    Object.keys(groups).forEach(icdGroup => {
      const groupedContributors = state.accordion.find(item => item.icdGroup === icdGroup);
      const DE = groups[icdGroup];
      const symptomGroups = groupBy(prop('symptomName'), flatten(DE.map(item => item.contributors)));
      const contributors = Object.keys(symptomGroups).map(key => {
        const contributor = symptomGroups[key][0];
        contributor.contribution = sum(symptomGroups[key].map(item => item.contribution));
        const triage = state.triage.find(item => item.symptomId === contributor.symptomId);
        contributor.presenting = triage ? isSymptomPresenting(triage) : false;
        return contributor;
      });
      contributorsGroups = Object.assign({...contributorsGroups}, {[icdGroup]: sortBy(compose(Math.abs, prop('contribution')), groupedContributors ? groupedContributors.groupedContributors : contributors).reverse()});
    });
    return contributorsGroups;
  }

  constructor(private symptomsService: SymptomsService, private dataService: DataService, private stateService: StateService) {}

  @Action(InitAccordion)
  initAccordion(ctx: StateContext<DiagnosisAccordionModel>, action: InitAccordion) {
    ctx.setState(produce(ctx.getState(), (draft: DiagnosisAccordionModel) => {
      draft.diagnosticEngine = clone(action.diagnosticEngine);
      draft.triage = clone(action.triage);
      draft.illnessesInformation = clone(action.illnessInformation);
    }));
    this.buildAccordion(ctx);
  }

  @Action(ToggleSelection)
  toggleIllnessSelection(ctx: StateContext<DiagnosisAccordionModel>, action: ToggleSelection) {
    const DE = clone(ctx.getState().diagnosticEngine);
    const targetDE = DE.find(item => item.icd10 === action.icd10);
    targetDE.isSelected = !targetDE.isSelected;
    if (!targetDE.isSelected) targetDE.isPrimary = false;
    if (targetDE.icdGroup !== 'Defined Illnesses' && targetDE.isSelected) targetDE.isPrimary = !DE.some(item => item.isPrimary);
    ctx.patchState({diagnosticEngine: DE});
  }

  @Action(SelectPrimary)
  selectPrimary(ctx: StateContext<DiagnosisAccordionModel>, action: SelectPrimary) {
    const DE = clone(ctx.getState().diagnosticEngine).map(item => {
      item.isPrimary = item.icd10 === action.icd10;
      return item;
    });
    ctx.patchState({diagnosticEngine: DE});
  }

  @Action(SelectWorkupPlanned)
  selectWorkupPlanned(ctx: StateContext<DiagnosisAccordionModel>, action: SelectWorkupPlanned) {
    const DE = clone(ctx.getState().diagnosticEngine);
    const targetDE = DE.find(item => item.icd10 === action.icd10);
    targetDE.workupPlanned = !targetDE.workupPlanned;
    ctx.patchState({diagnosticEngine: DE});
  }

  @Action(RenameIllness)
  renameIllness(ctx: StateContext<DiagnosisAccordionModel>, action: RenameIllness) {
    const DE = clone(ctx.getState().diagnosticEngine);
    const targetDE = DE.find(item => item.icd10 === action.icd10);
    targetDE.icdName = action.icdName;
    ctx.patchState({diagnosticEngine: DE});
  }

  @Action(AddIllness)
  addIllness(ctx: StateContext<DiagnosisAccordionModel>, action: AddIllness) {
    const state = ctx.getState();
    const anyPrimary = state.diagnosticEngine.some(item => item.isPrimary);
    ctx.patchState({diagnosticEngine: [...state.diagnosticEngine, {
        confidence: null,
        contributors: [],
        icd10: action.icd10,
        icdGroup: 'Doctor added',
        icdName: action.icdName,
        iCriticality: 0,
        isSelected: true,
        isPrimary: !anyPrimary,
        source: '',
        groupRanking: 6,
        workupPlanned: false
      }]});
  }

  @Action(RerunDiagnosticEngine)
  rerunDiagnosticEngine(ctx: StateContext<DiagnosisAccordionModel>, action: RerunDiagnosticEngine) {
    ctx.setState(produce(ctx.getState(), (draft: DiagnosisAccordionModel) => {
      draft.triage = action.triage;
      action.diagnosticEngine.push(...action.unlikelyDE.map(item => ({...item, source: 'UnlikelyDiagnosisToConsider'})));
      action.diagnosticEngine.forEach((diagnosis: DiagnosticEngine) => {
        const existingDiagnosisIndex = draft.diagnosticEngine.findIndex(item => item.icd10 === diagnosis.icd10);
        if (existingDiagnosisIndex < 0) {
          draft.diagnosticEngine.push(diagnosis);
          return;
        }
        const existingDiagnosis = draft.diagnosticEngine[existingDiagnosisIndex];
        existingDiagnosis.contributors = diagnosis.contributors;
        existingDiagnosis.groupRanking = diagnosis.groupRanking;
        existingDiagnosis.confidence = diagnosis.confidence;
      });
    }));
    if (DiagnosisTabsEnum.PHARMACIST_SUMMARY !== this.stateService.patient.tabs.getWorkingDiagnosis()) this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
    this.stateService.patient.getReviewed().pipe(take(1)).subscribe(reviewed => {
      if (reviewed === 'confirmed') this.stateService.patient.setReviewed('reviewed');
    });
  }

  @Action(UpdatePharmacyDiagnosis)
  updatePharmacistDiagnosis(ctx: StateContext<DiagnosisAccordionModel>, action: UpdatePharmacyDiagnosis) {
    ctx.setState(produce(ctx.getState(), (draft: DiagnosisAccordionModel) => {
      draft.illnessesInformation.defined_illnesses = [];
      draft.illnessesInformation.selected_illnesses = [{ icd10_name: action.icdName, icd10_code: action.icd10, is_primary: true, workup_planned: false }];
      const existingDEIndex = draft.diagnosticEngine.findIndex(item => item.icd10 === action.icd10);
      if (existingDEIndex > -1) {
        draft.diagnosticEngine[existingDEIndex].icdGroup = 'Doctor added';
        draft.diagnosticEngine[existingDEIndex].icdName = action.icdName;
        draft.diagnosticEngine[existingDEIndex].isPrimary = true;
      } else draft.diagnosticEngine.push({
        confidence: null,
        contributors: [],
        icd10: action.icd10,
        icdGroup: 'Doctor added',
        icdName: action.icdName,
        iCriticality: 0,
        isSelected: false,
        isPrimary: true,
        source: '',
        groupRanking: 6,
        workupPlanned: false
      });
    }));
    this.buildAccordion(ctx);
  }

  @Action(ToggleGroup)
  toggleDiagnosisAccordionGroup(ctx: StateContext<DiagnosisAccordionModel>, action: ToggleGroup) {
    ctx.setState(produce(ctx.getState(), (draft: DiagnosisAccordionModel) => {
      draft.expandedElements[action.icdGroup] = action.opened;
    }));
  }

  @Action(StateResetAll)
  resetState(ctx: StateContext<DiagnosisAccordionModel>) {
    ctx.setState({
      definedICDs: [],
      accordion: [],
      expandedElements: {},
      illnessesInformation: {
        defined_illnesses: [],
        selected_illnesses: [],
        is_edited_by_doctor: false
      },
      triage: [],
      diagnosticEngine: []
    });
  }

  private buildAccordion(ctx: StateContext<DiagnosisAccordionModel>) {
    ctx.setState(produce(ctx.getState(), (draft: DiagnosisAccordionModel) => {
      draft.diagnosticEngine.forEach(item => item.isSelected = false);
      draft.accordion = [];
      draft.illnessesInformation.defined_illnesses = draft.illnessesInformation.defined_illnesses.filter(item => {
        const definedDiagnosticEngine = draft.diagnosticEngine.find(de => de.icd10 === item.code);
        if (!definedDiagnosticEngine) draft.definedICDs = draft.definedICDs.filter(definedICD => item.code !== definedICD.icd10);
        return Boolean(definedDiagnosticEngine);
      });

      draft.illnessesInformation.selected_illnesses.forEach(selectedIllness => {
        const engineElement: DiagnosticEngine = draft.diagnosticEngine.find(item => item.icd10 === selectedIllness.icd10_code);
        engineElement.isSelected = true;
        engineElement.isPrimary = selectedIllness.is_primary;
        engineElement.icdName = selectedIllness.icd10_name;
        engineElement.workupPlanned = selectedIllness.workup_planned;
      });
      draft.illnessesInformation.selected_illnesses = draft.illnessesInformation.selected_illnesses.filter(item => {
        const selectedDiagnosticEngine = draft.diagnosticEngine.find(de => de.icd10 === item.icd10_code);
        return (selectedDiagnosticEngine.icdGroup !== 'Defined Illnesses');
      });

      draft.illnessesInformation.defined_illnesses.forEach(code => {
        const engineElement: DiagnosticEngine = draft.diagnosticEngine.find(item => item.icd10 === code.code);
        engineElement.isSelected = true;
        if (!draft.definedICDs.find(item => item.icd10 === code.code)) draft.definedICDs.push(engineElement);
      });

      draft.diagnosticEngine.filter((diagnosis: DiagnosticEngine) => !(draft.illnessesInformation.defined_illnesses.find(item => item.code === diagnosis.icd10) || diagnosis.icdGroup === 'Defined Illnesses'))
        .forEach((diagnosis: DiagnosticEngine) => {
          const accordionGroup = draft.accordion.find(item => item.icdGroup === diagnosis.icdGroup);
          if (!accordionGroup) {
            draft.accordion.push({
              icdGroup: diagnosis.icdGroup,
              data: [diagnosis],
              icd10: [diagnosis.icd10],
              groupRanking: diagnosis.groupRanking,
              groupedContributors: [],
              isDoctorAdded: diagnosis.icdGroup === 'Doctor added',
              isOtherIllnessGroups: false,
              workupPlanned: diagnosis.workupPlanned
            });
            return;
          }

          if (!accordionGroup.data.find(item => item.icd10 === diagnosis.icd10)) {
            accordionGroup.data.push(diagnosis);
            accordionGroup.icd10.push(diagnosis.icd10);
          }

        });

      draft.accordion.forEach((group: DiagnosisAccordionGroup) => {
        const isSymptomIllness = group.icdGroup === 'Symptom Illnesses';
        const isOtherIllnessesConsidered = group.icdGroup === 'Other Illnesses Considered';

        if (!draft.expandedElements[group.icdGroup] && isSymptomIllness) {
          draft.expandedElements[group.icdGroup] = true;
        }

        if (!draft.expandedElements[group.icdGroup] && isOtherIllnessesConsidered) {
          draft.expandedElements[group.icdGroup] = true;
        }

        group.groupedContributors = [];

        let probability = 0;
        let criticality = 0;
        const isOtherIllnessGroups = otherIllnessGroups.includes(group.icdGroup);
        group.isDoctorAdded = DiagnosisAccordionState.isDoctorAdded(group);
        group.isOtherIllnessGroups = isOtherIllnessGroups;
        group.data.filter(item => !item.deleted).forEach((dataItem: DiagnosisAccordionItem) => {

          // todo: find out why isSymptomIllness should be always selected
          // if (isSymptomIllness && !draft.illness.length) illness.isSelected = true;

          probability += dataItem.confidence * 100;

          if (isOtherIllnessGroups) {
            probability = null;
            dataItem.confidence = null;
            dataItem.confidence = null;
            dataItem.isOtherIllnessGroups = true;
          }

          if (dataItem.iCriticality > criticality) {
            criticality = dataItem.iCriticality;
          }

          dataItem.contributors.forEach(contrib => {
            const parsedSymptom = this.symptomsService.searchParsedSymptom(contrib);
            if (!parsedSymptom) return;

            // todo: compare to {Triage} interface and rename properties if it the same
            contrib.name = parsedSymptom.name;
            contrib.location = parsedSymptom.location;
            contrib.categoryID = parsedSymptom.categoryID;
            const valueBoundSymptom = draft.triage.find(item => item.symptomId === contrib.symptomId &&
              (item.values && item.values[0] && contrib.symptomName.includes(item.values[0][0])));
            const symptom = valueBoundSymptom ? valueBoundSymptom : draft.triage.find(item => item.symptomId === contrib.symptomId);
            if (symptom) {
              const isBasic = contrib.name.toLowerCase().includes(SymptomTypesEnum.BASIC);
              contrib.symptomGroup = symptom.symptomGroup;
              contrib.values = symptom.values;
              contrib.response = symptom.response;
              const presenting = isSymptomPresenting(symptom);
              const contributorSumm = group.groupedContributors.find(item => item.symptomId === contrib.symptomId && item.presenting === presenting);
              const isAllowedGroupedSymptomType = ['Rash', 'Cough', 'Pain/Swelling'].includes(this.symptomsService.getGroupedSymptomType(contrib));

              if (contributorSumm && ((isAllowedGroupedSymptomType && (isBasic || equals(contributorSumm.values, contrib.values))) || !isAllowedGroupedSymptomType)) {
                contributorSumm.contribution += contrib.contribution;
              } else {
                group.groupedContributors.push({...contrib, presenting});
              }
            }
          });
        });

        group.probability = probability;
        group.criticality = criticality;
        const primaryIllness = draft.illnessesInformation.selected_illnesses.find(item => item.is_primary);
        group.isPrimary = primaryIllness && group.data.some(item => item.icd10 === primaryIllness.icd10_code);

        group.groupedContributors.slice().reverse().forEach((contributor, index, object) => {
          this.loadSymptom(group, contributor, true, index, object);
        });
        draft.triage.forEach(symptom => {
          this.loadSymptom(group, symptom, false);
        });
        const sortedData: DiagnosticEngine[] = sortBy(prop('confidence'), group.data);
        group.data = sortedData.reverse();
      });

      const illness = draft.diagnosticEngine.filter(item => item.isSelected).map(item => item.icd10);
      const anyPrimary = draft.illnessesInformation.selected_illnesses.some(item => item.is_primary);

      this.dataService.updatePatient({
        triage: draft.triage,
        diagnosticEngine: draft.diagnosticEngine,
        illnessInformation: draft.illnessesInformation,
        illness: illness,
        isPrimary: anyPrimary,
        hasIllness: Boolean(illness.length)
      });

      this.stateService.patient.setIsPrimary(anyPrimary);
      this.stateService.patient.setHasIllness(Boolean(illness.length));
    }));
    this.symptomsService.buildSourceInfoData(ctx.getState().accordion);
  }

  private loadSymptom(group, symptom, isContributor, index?, object?) {
    const parsedSymptom = this.symptomsService.searchParsedSymptom(symptom);
    if (!parsedSymptom) return;
    const presenting = isSymptomPresenting(symptom);
    if (parsedSymptom) {
      symptom['name'] = parsedSymptom.name;
      symptom['categoryID'] = parsedSymptom.categoryID;
      let value = null;
      const snomedCode = parsedSymptom.snomedCodes.find(code => code && (code.name.toLowerCase() === symptom.symptomName.toLowerCase()));
      if (symptom.values && symptom.values[0] && symptom.values[0][0] && isNaN(Number(symptom.values[0][0]))) {
        value = symptom.values[0][0];
      } else if (snomedCode && snomedCode.listValue && isNaN(Number(snomedCode.listValue))) {
        value = snomedCode.listValue;
      } else if (symptom.name.toLowerCase().includes(SymptomTypesEnum.BASIC)) value = symptom.symptomName;
      if (value) symptom.listValue = value;
    }
    symptom['presenting'] = presenting;
    const isBasic = symptom.name.toLowerCase().includes(SymptomTypesEnum.BASIC);
    const groupedSymptomType = this.symptomsService.getGroupedSymptomType(symptom);

    symptom.isCough = groupedSymptomType === 'Cough';
    if (!groupedSymptomType || isBasic) return;
    const basicContributor = group.groupedContributors.find(item => item.name.toLowerCase().includes(SymptomTypesEnum.BASIC)
      && item.categoryID === symptom.categoryID && item.presenting === symptom.presenting
      && (['Rash', 'Pain/Swelling', 'Cough'].includes(this.symptomsService.getGroupedSymptomType(item))));
    if (basicContributor) {
      if (!basicContributor.groupedSymptom) basicContributor.groupedSymptom = clone(defaultGroupedSymptom);
      basicContributor.groupedSymptom.type = groupedSymptomType;
      if (isContributor) {
        basicContributor.contribution += symptom.contribution;
        group.groupedContributors.splice(object.length - 1 - index, 1);
      } else {
        this.symptomsService.loadGroupedSymptom(basicContributor, symptom);
      }
    }
  }


}
