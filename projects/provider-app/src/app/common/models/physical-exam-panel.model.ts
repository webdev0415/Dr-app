import { PESystem } from 'common/interfaces/physical-exam-panel.interfaces';
import { navigationTree } from '../../static/static.vitals';
import { clone } from 'ramda';
import { NavigationType } from '../types/physical-exams.type';

export class PhysicalExamPanelModel {
  systems: PESystem[];
  active: NavigationType;
  constructor() {
    this.systems = [];
    this.active = clone(navigationTree);
  }
}
