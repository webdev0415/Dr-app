import { MatDialogConfig } from '@angular/material/dialog';

export const emptyFields = [[]];

export const blacklistedSymptoms = [
  'None',
  'SYMPT0000001',
  'SYMPT0000002',
  'SYMPT0000005',
  'SYMPT0000004',
  'SYMPT0000234',
  'SYMPT0001218',
  'SYMPT0000097',
  'SYMPT0000008',
  'SYMPT0000009',
  'SYMPT0000006',
  'SYMPT0000007',
  'SYMPT0000998',
  'SYMPT0000225',
  'SYMPT0001301',
  'SYMPT0000010',
  'SYMPT0002008',
  'SYMPT0002007',
  'SYMPT0002001',
  'SYMPT0001328',
  'SYMPT0001983',
  'SYMPT0001982',
  'SYMPT0001981',
];

export const otherIllnessGroups = ['Other Illnesses Considered', 'Symptom Illnesses'];

export const stdDialogConfig: MatDialogConfig = {
  backdropClass: 'pa-dialog-backdrop',
  autoFocus: true,
  closeOnNavigation: true,
  minHeight: '150px',
  width: '350px'
};

export const physicalGroups = [
  'physical',
  'pain/swelling',
];

export const customProcedureFieldOptions: {[field: string]: {value: string, label: string}[]} = {
  'Consent given by': [
    {value: 'Given by patient', label: 'Patient'},
    {value: 'Given by parent/guardian of patient', label: 'Parent or guardian'}
   ],
  'Time units': [
    {value: 'hours', label: 'Hours'},
    {value: 'minutes', label: 'Minutes'}
   ],
  'Site': [
    {value: 'R antecubital', label: 'R antecubital'},
    {value: 'L antecubital', label: 'L antecubital'},
    {value: 'R brachiocephalic', label: 'R brachiocephalic'},
    {value: 'L brachiocephalic', label: 'L brachiocephalic'},
    {value: 'R dorsal hand', label: 'R dorsal hand'},
    {value: 'L dorsal hand', label: 'L dorsal hand'},
    {value: 'Other', label: 'Other'},
  ],
  'Insertion by': [
    {value: 'Staff', label: 'Staff'},
    {value: 'PA/NP', label: 'PA/NP'},
    {value: 'Physician', label: 'Physician'}
   ],
  'Catheter gauge': [
    {value: '26', label: '26'},
    {value: '24', label: '24'},
    {value: '22', label: '22'},
    {value: '20', label: '20'},
    {value: '18', label: '18'},
    {value: '16', label: '16'},
    {value: '14', label: '14'},
    {value: null, label: 'Other'}
   ],
  'Unsuccessful attempts': [
    {value: '0', label: '0'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: null, label: 'Other'}
   ],
  'Solution': [
    {value: 'Saline', label: 'Saline'},
    {value: '5% Dextrose', label: '5% Dextrose'},
    {value: 'Ringer\'s lactate', label: 'Ringer\'s lactate'}
   ],
  'Rate': [
    {value: 'Wide open', label: 'Wide open'},
    {value: 'Specific', label: 'Specific'}
   ],
  'Infusion by': [
    {value: 'Staff', label: 'Staff'},
    {value: 'PA/NP', label: 'PA/NP'},
    {value: 'Physician', label: 'Physician'}
   ]
};
