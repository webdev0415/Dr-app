import { FormattedTriageLab } from '../interfaces/formatted-triage-lab.interface';

export const nullLabResult: FormattedTriageLab = {
  Location: [],
  Measurement: null,
  Response: null,
  SymptomID: '',
  SymptomName: '',
  SymptomSource: '',
  Time: '',
  Values: [[null, null, null]],
  responseDetails: []
};
