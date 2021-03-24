import { clone } from 'ramda';


import { TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

import { initialTreatments } from '../static/static.treatments';

export class ClearTreatmentsEvent extends TreatmentsStoreEvent {
  getNewState(state: TreatmentsState): TreatmentsState {
    return clone(initialTreatments);
  }
}
