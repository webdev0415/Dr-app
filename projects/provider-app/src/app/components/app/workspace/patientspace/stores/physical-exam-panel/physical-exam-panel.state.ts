import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext, createSelector } from '@ngxs/store';

import * as R from 'ramda';
import { produce } from 'immer';

import {
  AddSystemsToPanel,
  SelectFinding,
  EditFinding,
  Navigate,
  ClearEmpty, SwitchSystemNormalStatus
} from './physical-exam-panel.actions';

import {
  PhysicalExamModifier,
  DescriptionItem,
  AddedExamViewModel, PhysicalExam, RelatedBodyPart
} from 'common/interfaces/physical-exams.interfaces';
import { PESystem, PESubsystem, PEFinding, Navigation } from 'common/interfaces/physical-exam-panel.interfaces';

import { PhysicalExam as PhysicalExamViewModel } from 'common/models/data.model';
import { PhysicalExamPanelModel } from 'common/models/physical-exam-panel.model';

import { ENTParts, mediaSections } from 'physical-exam/physical-exams.constants';
import { StateResetAll } from 'ngxs-reset-plugin';
import { navigationTree } from '../../../../../../static/static.vitals';

@Injectable()
@State<PhysicalExamPanelModel>({
  name: 'physicalExamPanel',
  defaults: {
    systems: [],
    active: R.clone(navigationTree)
  }
})
export class PhysicalExamPanelState {
  private static defaultExams: PhysicalExam[] = [];

  @Selector()
  static panel(state: PhysicalExamPanelModel) { return state.active; }

  @Selector()
  static navigation(state: PhysicalExamPanelModel) { return state.active; }

  @Selector()
  static systems(state: PhysicalExamPanelModel) { return R.clone(state.systems).sort((a, b) => mediaSections.indexOf(a.examName) - mediaSections.indexOf(b.examName)); }

  @Selector()
  static exams(state: PhysicalExamPanelModel): PESystem[] {
    const systems: PESystem[] = produce(state, (draft: PhysicalExamPanelModel) => {
      draft.systems = draft.systems.filter(system => system.descriptionsArray.some(item => item.selected)).map(system => {
        system.descriptionsArray = system.descriptionsArray.filter(item => item.selected).map(item => {
          item.mod = item.mod.filter((mod: PEFinding) => mod.selected);
          return item;
        });
        return system;
      });
    }).systems;
    return systems;
  }

  @Selector([PhysicalExamPanelState.exams])
  static viewModelExams(state: PhysicalExamViewModel, systemsWithFindings: PESystem[]): PhysicalExamViewModel[] {
    return this.peSystemsToViewModel(systemsWithFindings);
  }

  /**
   * Related findings dynamic selector
   * @param {string} relatedBodyPart
   * @returns {(state: PhysicalExamPanelModel) => {finding: PEFinding; system: string; subsystem: string}[]}
   */
  static relatedFindings(relatedBodyPart: RelatedBodyPart) {
    return createSelector([PhysicalExamPanelState], (state: PhysicalExamPanelModel) => {
      return this.getRelatedFindings(state.systems, relatedBodyPart);
    });
  }

  /**
   * Common findings dynamic selector
   * @param {RelatedBodyPart} relatedBodyPart
   * @returns {(state: PhysicalExamPanelModel) => {finding: PEFinding; system: string; subsystem: string}[]}
   */
  static relatedCommonFindings(relatedBodyPart: RelatedBodyPart) {
    return createSelector([PhysicalExamPanelState], (state: PhysicalExamPanelModel) => {
      return this.getCommonRelatedFindings(state.systems, relatedBodyPart);
    });
  }

  private static getFindingDefaultText(active: {system: number, subsystem: number}, finding: {key: string}): string {
    return this.defaultExams[active.system].descriptionsArray[active.subsystem].mod.find(item => item.key === finding.key).text;
  }

  /**
   * prepare exam results to display in preview text box
   * @param exam
   * @returns {DescriptionItem[]}
   */
  private static getDescriptions(exam: PhysicalExamViewModel): DescriptionItem[] {
    const descriptions = R.groupBy(R.prop('description'), exam.addedExams);
    return Object.keys(descriptions).map(key => {

      const descriptionItem: DescriptionItem = {
        description: '',
        descriptions: null,
        result: '',
        prevLength: 0
      };

      descriptionItem.description = key;
      descriptionItem.descriptions = R.sortBy(R.prop('left'), descriptions[key]);
      descriptionItem.descriptions.forEach((item: any) => {
        item.left = descriptionItem.result.length ? descriptionItem.result.length + 1 : 0;
        descriptionItem.result = descriptionItem.result.length ? [descriptionItem.result.trim(), item.modifier.text].join(' ') : item.modifier.text;
        item.right = descriptionItem.result.length;
      });
      descriptionItem.prevLength = descriptionItem.result.length;

      return descriptionItem;
    });
  }

  /**
   * Search finding by system, subsystem name and findings key
   * @param {PESystem[]} systems
   * @param {string} systemName
   * @param {string} subsystemName
   * @param {string} findingKey
   * @returns {[PESystem, number, PESubsystem, number, PEFinding]}
   */
  private static getFinding(systems: PESystem[], systemName: string, subsystemName: string, findingKey: string): [PESystem, number, PESubsystem, number, PEFinding] {
    const system = systems.find(item => item.examName === systemName);
    const systemIndex = systems.indexOf(system);
    const subsystem = system.descriptionsArray.find(item => item.description === subsystemName);
    const subsystemIndex = system.descriptionsArray.indexOf(subsystem);
    const finding = subsystem.mod.find(item => item.key === findingKey);
    return [system, systemIndex, subsystem, subsystemIndex, finding];
  }

  /**
   * Search for findings related to transferred bodyPart+bodySide
   * @param {PESystem[]} systems
   * @param {string} relatedBodyPart
   * @returns {{finding: PEFinding; system: string; subsystem: string}[]}
   */
  private static getRelatedFindings(systems: PESystem[], relatedBodyPart: RelatedBodyPart): {finding: PEFinding, system: string, subsystem: string}[] {
    const relatedFindings: {finding: PEFinding, system: string, subsystem: string}[] = [];

    systems.forEach(system => {
      system.descriptionsArray.forEach(subsystem => {
        subsystem.mod.forEach(finding => {
          if (finding.relatedBodyPart === relatedBodyPart) relatedFindings.push({finding: finding, system: system.examName, subsystem: subsystem.description});
        });
      });
    });

    return relatedFindings;
  }

  /**
   * Search for findings that should be selected in case of fulfilled conditions
   * @param {PESystem[]} systems
   * @param {RelatedBodyPart} relatedBodyPart
   * @returns {{finding: PEFinding; system: string; subsystem: string}[]}
   */
  private static getCommonRelatedFindings(systems: PESystem[], relatedBodyPart: RelatedBodyPart): {finding: PEFinding, system: string, subsystem: string}[] {
    const relatedFindings: {finding: PEFinding, system: string, subsystem: string}[] = [];

    systems.forEach(system => {
      system.descriptionsArray.forEach(subsystem => {
        subsystem.mod.forEach(finding => {
          if (finding.commonFindingFor && finding.commonFindingFor.includes(relatedBodyPart)) relatedFindings.push({finding: finding, system: system.examName, subsystem: subsystem.description});
        });
      });
    });

    return relatedFindings;
  }

  /**
   * convert PESystems array to PhysicalExamViewModel array
   * @param {PESystem[]} systems
   * @returns {PhysicalExam[]}
   */
  private static peSystemsToViewModel(systems: PESystem[]): PhysicalExamViewModel[] {
    const examsResults: PhysicalExamViewModel[] = [];

    systems.forEach(system => {
      const addedExams: AddedExamViewModel[] = [];

      system.descriptionsArray.forEach(description => {
        description.mod.forEach(mod => {
          const exam: AddedExamViewModel = {
            description: description.description,
            modifier: mod as PhysicalExamModifier,
            edited: mod.edited
          };
          addedExams.push(exam);
        });
      });

      const newExam: PhysicalExamViewModel = {
        examName: system.examName,
        addedExams: addedExams,
        examResults: addedExams.map(item => item.modifier.text).join(' ')
      };
      newExam.descriptions = this.getDescriptions(newExam);

      examsResults.push(newExam);
    });

    return examsResults;
  }

  private static selectFinding(action: SelectFinding, systems: PESystem[]): PESystem[] {
    const [system, systemIndex, subsystem, subsystemIndex, finding] = PhysicalExamPanelState.getFinding(systems, action.system, action.subsystem, action.finding.key);
    finding.selected = action.selectState ? action.selectState : !finding.selected;
    if (!finding.selected) {
      finding.text = PhysicalExamPanelState.getFindingDefaultText({system: systemIndex, subsystem: subsystemIndex}, action.finding);
      finding.edited = false;
    } else {
      subsystem.mod = this.removeContradictions(finding, subsystem, {system: systemIndex, subsystem: subsystemIndex});
    }
    const selectedFindings = subsystem.mod.filter(item => item.selected);
    const everyDefaultNormalIsSelected = subsystem.mod
      .filter(mod => mod.defaultNormal && mod.normal)
      .every(mod => mod.selected);
    subsystem.selected = Boolean(selectedFindings.length);
    subsystem.normal = everyDefaultNormalIsSelected && subsystem.selected ? selectedFindings.every(item => item.normal) : undefined;
    subsystem.edited = subsystem.mod.some(item => item.edited);
    return systems;
  }

  /**
   * removes contradicting results by code
   * @param {PhysicalExamModifier} mod
   * @param {PESubsystem} subsystem
   * @param {Navigation} navigationElement
   */
  private static removeContradictions(mod: PhysicalExamModifier, subsystem: PESubsystem, navigationElement: Navigation) {
    return subsystem.mod.map(item => {
      if (!item.selected || item.code.slice(0, 5) !== mod.code.slice(0, 5)) return item;
      const subcode: string = item.code.slice(-2, -1);
      const codeCheck: boolean = (subcode !== '0' && subcode !== mod.code.slice(-2, -1) && mod.code.slice(-2, -1) !== '0');
      const isNormalStatusMatch = item.normal === mod.normal;
      const isTheSameFinding = item.key === mod.key;
      item.selected = item.isSinglePick ? (codeCheck || isTheSameFinding) : ((codeCheck || (isNormalStatusMatch && !mod.isSinglePick)));
      if (!item.selected && item.edited) {
        item.text = PhysicalExamPanelState.getFindingDefaultText(navigationElement, {key: item.key});
        item.edited = false;
      }
      return item;
    });
  }

  /**
   * Make system active with only selected default normal subsystems and findings
   * @param {PESystem} system
   * @param {number} systemIndex
   */
  static makeSystemNormal(system: PESystem, systemIndex: number): void {
    system.descriptionsArray.forEach((subsystem, subsystemIndex) => {
      if (!subsystem.normal) {
        subsystem.mod.forEach(mod => {
          mod.selected = false;
          mod.edited = false;
          mod.text = PhysicalExamPanelState.getFindingDefaultText({subsystem: subsystemIndex, system: systemIndex}, {key: mod.key});

          if (mod.defaultNormal) {
            mod.selected = mod.normal;
          }
        });
        subsystem.selected = true;
        subsystem.normal = true;
      }
    });
  }

  /**
   * Unselect normal subsystems and findings for normal system at the moment
   * @param {PESystem} system
   * @param {number} systemIndex
   */
  static makeSystemAbnormal(system: PESystem, systemIndex: number): void {
    system.descriptionsArray.forEach((subsystem, subsystemIndex) => {
      if (subsystem.normal) {
        subsystem.mod.forEach(mod => {
          if (mod.normal) {
            mod.selected = false;
            mod.edited = false;
            mod.text = PhysicalExamPanelState.getFindingDefaultText({subsystem: subsystemIndex, system: systemIndex}, {key: mod.key});
          }
        });
        subsystem.selected = subsystem.mod.some(mod => mod.selected);
        subsystem.normal = false;
      }
    });
  }

  constructor() {}

  @Action(AddSystemsToPanel)
  addSystems(ctx: StateContext<PhysicalExamPanelModel>, action: AddSystemsToPanel) {
    const state = ctx.getState();
    PhysicalExamPanelState.defaultExams = R.clone(action.systems);
    ctx.setState({
      ...state,
      systems: action.systems.map(item => item as PESystem)
    });
  }

  @Action(Navigate)
  navigate(ctx: StateContext<PhysicalExamPanelModel>, action: Navigate) {
    ctx.setState(produce(ctx.getState(), (draft: PhysicalExamPanelModel) => {
      draft.active[action.system][action.subsystemIndex] = action.subsystem;
    }));
  }

  @Action(SelectFinding)
  selectFinding(ctx: StateContext<PhysicalExamPanelModel>, action: SelectFinding) {
    ctx.setState(produce(ctx.getState(), (draft: PhysicalExamPanelModel) => {
      draft.systems = PhysicalExamPanelState.selectFinding(action, draft.systems);
    }));
  }

  @Action(EditFinding)
  editFinding(ctx: StateContext<PhysicalExamPanelModel>, action: EditFinding) {
    ctx.setState(produce(ctx.getState(), (draft: PhysicalExamPanelModel) => {
      const [system, systemIndex, subsystem, subsystemIndex, finding] = PhysicalExamPanelState.getFinding(draft.systems, action.system, action.subsystem, action.finding.key);
      finding.text = action.finding.text;
      finding.edited = finding.text !== PhysicalExamPanelState.getFindingDefaultText({system: systemIndex, subsystem: subsystemIndex}, {key: action.finding.key});
      subsystem.edited = subsystem.mod.some(item => item.edited);
    }));
  }

  @Action(ClearEmpty)
  clearEmpty(ctx: StateContext<PhysicalExamPanelModel>, action: ClearEmpty) {
    ctx.setState(produce(ctx.getState(), (draft: PhysicalExamPanelModel) => {
      draft.systems.forEach((system, systemIndex) => {
        system.descriptionsArray.forEach((subsystem, subsystemIndex) => {
          subsystem.mod.forEach(finding => {
            if (!finding.text) {
              finding.text = PhysicalExamPanelState.getFindingDefaultText({system: systemIndex, subsystem: subsystemIndex}, finding);
              finding.selected = false;
              finding.edited = false;
            }
          });
          subsystem.selected = subsystem.mod.some(finding => finding.selected);
          subsystem.edited = subsystem.mod.some(finding => finding.edited);
        });
      });
    }));
  }

  @Action(StateResetAll)
  wipeExams(ctx: StateContext<PhysicalExamViewModel>) {
    ctx.setState(produce(ctx.getState(), (draft: PhysicalExamPanelModel) => {
      draft.active = R.clone(navigationTree);
      draft.systems = [];
    }));
  }

  @Action(SwitchSystemNormalStatus)
  switchSystemNormalStatus(ctx: StateContext<PhysicalExamPanelModel>, action: SwitchSystemNormalStatus) {
    ctx.setState(produce(ctx.getState(), (draft: PhysicalExamPanelModel) => {
      const systemIndex = draft.systems.findIndex(item => item.examName === action.examName);
      const system = draft.systems[systemIndex];
      if (action.switchToNormal) {
        PhysicalExamPanelState.makeSystemNormal(system, systemIndex);
        const defaultSubsystemIndex = system.descriptionsArray.findIndex(subsystem => subsystem.defaultNormal);
        if (!R.isNil(defaultSubsystemIndex)) {
          const bodyPartsCountForExam = action.examName === 'ENT' ? ENTParts.length : 1;
          Array.from(new Array(bodyPartsCountForExam).keys())
            .forEach((item, index) => draft.active[system.examName][index] = defaultSubsystemIndex);
        }
      } else {
        PhysicalExamPanelState.makeSystemAbnormal(system, systemIndex);
      }
    }));
  }
}
