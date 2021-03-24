export { HistoryItem } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';
export { HealthHistory } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/health-history.interface';
export { PharmacyData } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/pharmacy-data.interface';

export enum ImmunizationByHistoryType {
  'Tetanus' = 'Last Tetanus Shot in Last 10 Years',
  'Seasonal Flu Vaccine' = 'Last Flu Shot in Last 6 Months',
  'HPV Immunization' = 'Patient Has HPV Immunization',
  'Human Papillomavirus Infection (HPV)' = 'Patient Has HPV Immunization',
}
