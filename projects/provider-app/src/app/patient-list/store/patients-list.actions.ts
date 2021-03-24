import { PatientListInterface } from '../interfaces/patient-list.interface';
import { TableSorting } from '../table-sorting.interface';

export class Sort {
  static readonly type = '[PatientListTable] Table Sorting CLick';
  constructor(public sortingData: TableSorting, public table: PatientListInterface['type']) {
  }
}
