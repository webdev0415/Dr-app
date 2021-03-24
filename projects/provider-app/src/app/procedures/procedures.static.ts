import { BusinessMedication } from './interfaces/business-medication.interface';
import { IVBusinessInjection } from './interfaces/iv-business-injection.interface';

export const IVInjection: IVBusinessInjection = {
  id: null,
  dosages: ['N/A'],
  routes: ['N/A'],
  dilutions: ['N/A'],
  name: 'IV',
  consent: [
    {value: 'Given by patient', label: 'Patient'},
    {value: 'Given by parent/guardian of patient', label: 'Parent or guardian'}
  ],
  timeUnits: ['hours', 'minutes'],
  site: [
    'R antecubital',
    'L antecubital',
    'R brachiocephalic',
    'L brachiocephalic',
    'R dorsal hand',
    'L dorsal hand',
    'Other'
  ],
  insertionBy: [
    'Staff',
    'PA/NP',
    'Physician'
  ],
  catheterGauge: [
    '26',
    '24',
    '22',
    '20',
    '18',
    '16',
    '14',
    'Other'
  ],
  unsuccessfulAttempts: [
    '0',
    '1',
    '2',
    'Other'
  ],
  solution: [
    'Saline',
    '5% Dextrose',
    'Ringer\'s lactate'
  ],
  rate: [
    'Wide open',
    'Specific'
  ],
  infusionBy: [
    'Staff',
    'PA/NP',
    'Physician'
  ]
};

export const GICocktail: BusinessMedication = {
  id: null,
  dosages: ['N/A'],
  routes: ['N/A'],
  forms: ['N/A'],
  name: 'GI Cocktail'
};
