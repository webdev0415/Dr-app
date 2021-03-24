import { PhysicalExam, PhysicalExamDescription, PhysicalExamModifier } from './physical-exams.interfaces';

export interface PESystem extends PhysicalExam {
  descriptionsArray: PESubsystem[];
}

export interface PESubsystem extends PhysicalExamDescription {
  selected: boolean;
  normal: boolean;
  edited: boolean;
  mod: PEFinding[];
}

export interface PEFinding extends PhysicalExamModifier {
  selected: boolean;
  edited: boolean;
}

export interface Navigation {
  system: number | null;
  subsystem: number | null;
}
