import { clone } from 'ramda';


import { defaultPVDischarge, initialTreatments } from '../static/static.treatments';
import { Detail, TreatmentsState } from '../treatments.interface';
import { TreatmentType } from '../treatments.type';
import { RerunTreatmentsEngineEvent } from './rerun-treatments-engine.event';

describe('RerunTreatmentsEngineEvent', () => {
  describe('pvDischarge update', () => {
    const primaryDetails = [
      {
        'dosage': '',
        'groupName': 'Group Placeholder',
        'longName': 'Return in 10 days',
        'name': 'Return in 10 days',
        'nameDetails': 'The patient should return for medical care in ten days.',
        'priority': 19,
        'rank': 1,
        'sources': []
      }, {
        'dosage': '',
        'groupName': 'Group Placeholder',
        'longName': 'Specialist Consultation',
        'name': 'Specialist Consult',
        'nameDetails': 'The patient should consult with a specialist in the appropriate field.',
        'priority': 29,
        'rank': 1,
        'sources': []
      }
    ] as Detail[];
    const details = [{
      'dosage': '',
      'groupName': 'Group Placeholder',
      'longName': 'Return in 2 weeks',
      'name': 'Return in 2 weeks',
      'nameDetails': 'The patient should return for medical care in two weeks.',
      'priority': 15,
      'rank': 1,
      'sources': []
    }] as Detail[];

    const payload = {
      availableTreatmentTypes: ['Discharge Disposition'] as TreatmentType[],
      illness: ['B26.0', 'B02.22'],
      primaryIllness: 'B26.0',
      additionalInformation: {
        knownDrugAllergies: [],
        knownDrugConflicts: [],
        knownPrecautionConflicts: []
      },
      treatments: [{
        icdCode: 'B26.0',
        icdDesc: 'Mumps orchitis',
        isIllness: true,
        treatments: [{
          details: primaryDetails,
          type: 'Discharge Disposition' as TreatmentType
        }]
      }, {
        icdCode: 'B02.22',
        icdDesc: 'Postherpetic trigeminal neuralgia',
        isIllness: true,
        treatments: [{
          details,
          type: 'Discharge Disposition' as TreatmentType
        }]
      }]
    };

    it('should select discharge treatments based on primary illness', () => {
      const state: TreatmentsState = clone(initialTreatments);
      const updatedState = new RerunTreatmentsEngineEvent(payload).getNewState(state);
      const dischargeDetails = updatedState.viewModelTreatments.find(item => item.type === 'Discharge Disposition').details;
      expect(dischargeDetails.find(item => item.name === 'Specialist Consult').isSelected).toBe(true);
      expect(dischargeDetails.filter(item => item.isSelected).length).toBe(1);
    });

    it('should use previously selected pvDischarge data', () => {
      const state: TreatmentsState = clone(initialTreatments);
      state.viewModelTreatments = [{
        type: 'Discharge Disposition',
        details: [{
          name: 'Transfer to ER/ED',
          longName: 'Transfer to ER/ED',
          groupName: 'Group Placeholder',
          nameDetails: '',
          priority: 29,
          rank: 1,
          isSelected: true,
          toTreat: ['B02.22']
        } as Detail]
      }];
      state.patientTreatments = [{
        icdCode: 'B02.22',
        icdDesc: 'Postherpetic trigeminal neuralgia',
        isIllness: true,
        treatments: [{
          details: [...details, {
            name: 'Transfer to ER/ED',
            longName: 'Transfer to ER/ED',
            groupName: 'Group Placeholder',
            nameDetails: '',
            priority: 29,
            rank: 1,
            isSelected: true,
            toTreat: ['B02.22']
          } as Detail],
          type: 'Discharge Disposition' as TreatmentType
        }]
      }];
      state.pvDischarge = {...clone(defaultPVDischarge), otherReason: 'Emergency Department Transfer'};
      const updatedState = new RerunTreatmentsEngineEvent(payload).getNewState(state);
      expect(updatedState.pvDischarge.otherReason).toBe('Emergency Department Transfer');
    });

    it('should use default pvDischarge value', () => {
      const state: TreatmentsState = clone(initialTreatments);
      state.pvDischarge.followUp = true;
      expect(state.pvDischarge).not.toEqual(defaultPVDischarge);
      const updatedState = new RerunTreatmentsEngineEvent({ ...payload, treatments: [] }).getNewState(state);
      expect(updatedState.pvDischarge).toEqual(defaultPVDischarge);
    });

  });

});
