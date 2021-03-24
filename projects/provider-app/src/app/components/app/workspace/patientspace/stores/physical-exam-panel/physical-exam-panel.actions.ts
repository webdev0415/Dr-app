import { PhysicalExam } from 'common/interfaces/physical-exams.interfaces';
import { PhysicalExamsType } from '../../../../../../common/types/physical-exams.type';

export class AddSystemsToPanel {
  static readonly type = '[PE Panel] Add system';
  constructor(public systems: PhysicalExam[]) {}
}

export class Navigate {
  static readonly type = '[PE Panel] Navigate';
  constructor(public system: PhysicalExamsType, public subsystem: number | null, public subsystemIndex?: number) {}
}

export class SelectFinding {
  static readonly type = '[PE Panel] Select finding';
  constructor(public finding: {key: string}, public system: string, public subsystem: string, public selectState = false) {}
}

export class EditFinding {
  static readonly type = '[PE Panel] Edit finding';
  constructor(public finding: {text: string, key: string}, public system: string, public subsystem: string) {}
}

export class ClearEmpty {
  static readonly type = '[PE Panel] Clear empty';
  constructor() {}
}

export class SwitchSystemNormalStatus {
  static readonly type = '[Findings Panel] Switch System Normal Status';
  constructor(public examName: string, public switchToNormal: boolean) {}
}
