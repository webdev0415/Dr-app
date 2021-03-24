import { Injectable } from '@angular/core';

import { Action, createSelector, State, StateContext } from '@ngxs/store';


import { PatientListInterface } from '../interfaces/patient-list.interface';
import { TableSorting } from '../table-sorting.interface';
import { Sort } from './patients-list.actions';

type TablesState = { [table in PatientListInterface['type']]: TableSorting };

const defaultSorting: TablesState = {
  waiting: { sortBy: 'kiosk_complete', sortOrder: 'ascending' },
  telemedicine: { sortBy: 'appointmentTime', sortOrder: 'ascending' },
  provider: { sortBy: 'kiosk_complete', sortOrder: 'ascending' },
  test: { sortBy: 'kiosk_complete', sortOrder: 'ascending' },
  completed: { sortBy: 'treatment_complete', sortOrder: 'ascending' }
};

@Injectable()
@State<TablesState>({
  name: 'patientsTables',
  defaults: defaultSorting
})
export class PatientsTablesState {
  static sortingState(table: PatientListInterface['type']) {
    return createSelector([PatientsTablesState], (state: PatientsTablesState) => {
      return state[table];
    });
  }

  @Action(Sort)
  sort(ctx: StateContext<TablesState>, { table, sortingData }: Sort) {
    ctx.patchState({ [table]: sortingData });
  }
}

