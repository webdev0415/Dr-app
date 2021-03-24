import { BooleanCallback, QueryParamsCallback, Roles } from './types';
import { QueryParamsHandling } from '@angular/router';

export interface Link {
  name: string;
  url?: string | Array<string|number>;
  forViewOnly: boolean;
  viewOnly?: boolean;
  viewForRoles?: Array<Roles>;
  sections?: Link[];
  exact: boolean;
  ignoreQueryParams?: boolean;
  expandable?: boolean;
  disabledCallback?: BooleanCallback;
  onClickCallback?: Function;
  showCallback?: BooleanCallback;
  activeCallback?: BooleanCallback;
  queryParamsCallback?: QueryParamsCallback;
  queryParamsHandling?: QueryParamsHandling;
  key?: string;
  icon?: string;
  tooltip?: string;
}

export interface NavList {
  patientData: Link;
  treatments: Link;
  documents: Link;
  visitData: Link;
  summary: Link;
  orderLabs: Link;
  labs: Link;
  procedures: Link;
  surveys: Link;
  doctorNotes: Link;
  exit: Link;
  hpi: Link;
}

export interface ActiveLink {
  active: boolean;
  key: string | null;
  section: number | null; // index section
}
