import { PreparedPatientListEntity } from './interfaces/prepared-patient-list-entity.interface';

export interface TableSorting {
  sortBy: keyof PreparedPatientListEntity;
  sortOrder: 'ascending' | 'descending';
}
