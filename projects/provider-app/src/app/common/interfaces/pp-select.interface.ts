import { FormControl } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { ParsedSymptom, SymptomCategory } from './symptoms.interface';
import { ViewSymptom } from './patient-data.interface';

export interface PpSelectComponentInterface {
  inputControl: FormControl;
  confirmButtonDisabled: boolean;

  contentWrapper: ElementRef;
  viewPort: CdkVirtualScrollViewport;

  dialogRef: MatDialogRef<any>;

  showPreloader$: BehaviorSubject<boolean>;

  drugInputChange(value: string): Observable<any[]>;
  onClickSearch(): void;
  searchAsync(): Observable<any[]>;

  noResults(): Observable<boolean>;

  selectItem(item): void;
  toggleItem(index: number, presenting?: boolean): void;
  trackByIndex(index: number, item: any): number;

  confirmSelected(): void;
  cancelDialog(): void;
}

export interface PpSelectInputData {
  name: string;
  selection?: any[];
  list?: any[];
}

export interface PpSelectSymptomListItem extends ParsedSymptom {
  categoryName?: string;
  response?: true | false | null;
  descriptionStatus?: true | false | null;
}

export interface PpSelectSymptomInputData extends PpSelectInputData {
  list: PpSelectSymptomListItem[];
  parsedSymptoms: ParsedSymptom[];
  symptomCategories: SymptomCategory[];
  excluded: string[];
  filters: string[];
  symptomDescriptions?: SymptomDescription;
  patientAge?: number;
}

export interface SymptomDescription {
  title: string;
  values: SymptomDescriptionValue[];
}

export interface SymptomDescriptionValue {
  code: string;
  name: string;
  m_antithesis: number;
  count: number;
  displayListValue: boolean;
}

export interface PpSearchPatientsListItem {
  last_name: string;
  first_name: string;
  treatment_complete_dtm: string;
  session_key: string;
  patient_id: number;
  location: string;
}

export interface PpSearchPatientsInputData extends PpSelectInputData {
  list: PpSearchPatientsListItem[];
}

export interface PpSelectTreatmentsListItem {
  icdCode: string;
  icdName: string;
  sources: string[];
}

export interface PpSelectTreatmentsInputData extends PpSelectInputData {
  selection: number[];
  list: PpSelectTreatmentsListItem[];
}

export interface PpSelectHealthHistoryInputData extends PpSelectInputData {
  list: ViewSymptom[];
  excluded: string[];
  search: boolean;
  showOtherInput: boolean;
  otherInputText: string;
  type: 'listmultiple' | 'drugs';
  isTablet: boolean;
}
