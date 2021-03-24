import { TreatmentsState } from './treatments.interface';

export type TreatmentType =
  'Prescription Drugs' |
  'OTC Drugs' |
  'Activity' |
  'Counseling' |
  'Imaging' |
  'Labs' |
  'Physical Therapy' |
  'Procedures' |
  'Diet' |
  'Discharge Disposition' |
  'Return to Work/School Status' |
  'Wound Care' |
  'Physical Exam';

export type TreatmentsStateSnapshot = Readonly<TreatmentsState>;
