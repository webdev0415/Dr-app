import { DischargeContentTypesEnum } from '../common/enums/dischargedocs.enum';
import {
  ArticleSourceType,
  PVFollowUpType,
  PVTherapiesType,
  PVTimeUnitType,
  RTWRestrictionType
} from './discharge.type';
import { RTSDaysEnum } from './discharge.enum';
import { CntSiteKeyEnum } from './cnt-site-key.enum';

export interface ReturnToSchoolWork {
  returnTo: 'SCHOOL' | 'WORK' | 'NONE';
  rtsDays: RTSDaysEnum;
  rtswStart: string;
  rtswStop: string;
  rtwSeenFor: string;
  rtwWasIll?: boolean;
  rtwRestrictionType: RTWRestrictionType;
  rtwRestrictions: string;
}

export interface DischargeInstruction {
  articleId: string;
  guid: string;
  title: string;
  link: string;
  language: string;
  source: ArticleSourceType;
  contentType: DischargeContentTypesEnum;
  siteKey: CntSiteKeyEnum;
}

export interface DischargeInstructionDB extends Partial<DischargeInstruction> {
  article_id: string;
  content_type: DischargeContentTypesEnum;
  site_key: CntSiteKeyEnum;
}

export interface PVDischarge {
  returnIn: boolean;
  followUp: boolean;
  amountOf: number;
  time: PVTimeUnitType;
  ifNotBetter: boolean;
  followUpWith: PVFollowUpType;
  otherReason: string;
  therapies: PVTherapiesType[];
}

export interface PVDischargeBackendModel extends Omit<PVDischarge, 'followUpWith' | 'time'> {
  followUpWith: string;
  time: string;
}

export interface CNTDischargeSearchRequest {
  categories: DischargeContentTypesEnum[];
  count: number;
  lang: string;
  keyword: string;
  library: string;
  siteKey: string;
  start: number;
  taxonomy: {
    codeSystem: string;
    values: string[];
  };
}

export interface CNTDischargeResponse {
  data: DischargeArticle[];
  recordsTotal: number;
  error: string;
  start?: number;
}

export interface DischargeArticle {
  id: string;
  guid: string;
  title: string;
  description: string;
  link: string;
  language: string;
  contentImg: string;
  source: ArticleSourceType;
  contentType: DischargeContentTypesEnum;
  modifyTimestamp: number;
}

export interface ReportArticle extends Omit<DischargeInstruction, 'articleId'> {
  id: string;
}
