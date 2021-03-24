import { PhysicalExamsType } from '../types/physical-exams.type';

export interface PhysicalExam {
  examName: PhysicalExamsType;
  descriptionsArray: PhysicalExamDescription[];
}

export interface PhysicalExamDescription {
  description: string;
  mod: PhysicalExamModifier[];
  buttonText?: string;
  defaultNormal?: boolean;
  symptomIds?: string[];

}

export type RelatedBodyPart = 'left ear' | 'right ear' | 'skin exam' | 'sinus' | 'left sinus' | 'right sinus' | 'throat exam' | 'right nostril' | 'left nostril' | 'nostril';

export interface PhysicalExamModifier {
  text: string;
  normal: boolean;
  key: string;
  code: string;
  buttonText?: string;
  relatedBodyPart?: RelatedBodyPart;
  commonFindingFor?: RelatedBodyPart[];
  findingFor?: RelatedBodyPart[];
  defaultNormal?: boolean;
  isSinglePick?: boolean;
  symptomIds?: string[];
  listValues?: string[];
  symptomName?: string[];
}

export interface DescriptionItem {
  description: string;
  descriptions: any[];
  result: string;
  prevLength: number;
}

export interface AddedExamViewModel {
  description: string;
  modifier: PhysicalExamModifier;
  edited: boolean;
  left?: number;
  right?: number;
}
