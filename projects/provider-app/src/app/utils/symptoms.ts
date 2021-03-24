import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';

export const isSymptomPresenting = (symptom: Triage): boolean => {
  return !(symptom.response === false || symptom.response === 'false' || symptom.response === 'Skip');
};
