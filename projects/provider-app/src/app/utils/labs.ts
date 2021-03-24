import { Lab } from 'common/interfaces/labs.interface';
import { FormattedTriageLab } from '../labs/interfaces/formatted-triage-lab.interface';

/**
 * isOrderedLabsCompleted
 * @param {Array<Lab>} rapidLabs
 * @param {Array<FormattedTriageLab>} triageLabs
 * @param {Array<string>} orderedLabs
 * @returns {boolean}
 * Returns whether all ordered labs are completed or not
 */
export const isOrderedLabsCompleted = (rapidLabs: Array<Lab>, triageLabs: Array<FormattedTriageLab>, orderedLabs: Array<string>): boolean => {
  let completed = true;

  if (!orderedLabs.length) completed = false;

  rapidLabs
    .filter(lab => orderedLabs.some(ordered => ordered === lab.code))
    .forEach(lab => {
      lab.ids.forEach(id => {
        if (!triageLabs.find(symptom =>  id === symptom.SymptomID)) completed = false;
      });
    });

  return completed;
};
