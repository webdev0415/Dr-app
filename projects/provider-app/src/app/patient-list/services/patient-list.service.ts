import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { concat, interval, of, of as ObservableOf } from 'rxjs';
import { concatMap, first, startWith, switchMap, takeUntil } from 'rxjs/operators';


import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { StateService } from 'services/state.service';
import { UserService } from 'user/user.service';
import { NavigationService } from 'services/navigation.service';

import * as R from 'ramda';
import { PatientListStateService } from './patient-list-state.service';
import { PatientListApiService } from './patient-list-api.service';
import { PpSearchPatientsListItem } from '../../common/interfaces/pp-select.interface';

const allPass = (keys: Array<keyof PatientListEntity>, patient: PatientListEntity): (x) => boolean => {
  const compareArray = [];
  keys.forEach(key => compareArray.push(R.propEq(key, patient[key])));
  return R.allPass(compareArray);
};

const anyPass = (keys: string[], patient: PatientListEntity): (x) => boolean => {
  const compareArray = [];
  keys.forEach(key => compareArray.push(R.propSatisfies(prop => prop !== patient[key], key)));
  return R.anyPass(compareArray);
};

@Injectable()
export class PatientListService {
  private oldList: PatientListEntity[] = [];

  constructor(
    private stateService: StateService,
    private navigationService: NavigationService,
    private userService: UserService,
    private patientListState: PatientListStateService,
    private patientListApi: PatientListApiService
  ) { }

  getPatientList(force?: boolean, once?: boolean): void {
    if (force && once) {
      this.patientListApi.getPatientList(true).subscribe(response => {
        if (response && !response.error) {
          this.patientListState.patientList = response;
          this.patientListState.patientListLastValue = response;
        }
      });
      return;
    }

    // TODO: remove interval when push notifications will be implemented
    if (force || this.patientListState.patientListLastValue === null) {
      const refreshTimer = interval(60000)
        .pipe(
          startWith(0),
          switchMap(() => {
            if (!this.navigationService.isPatientsLocation
              && this.navigationService.isAnyHistory()) return ObservableOf(null);
            return this.patientListApi.getPatientList(this.patientListState.patientListLastValue === null);
          }),
          takeUntil(this.userService.isAuthenticated$.pipe(first(logged => logged === false)))
        );
      concat(refreshTimer).subscribe((response: any) => {
        if (response && !response.error) {

          if (!response.length) {
            this.updateList([]);
            return;
          }

          const findChanged = (a: PatientListEntity, b: PatientListEntity) => allPass(['patient_id', 'session_key', 'status', 'room', 'appointment_data'], b)(a);
          const filterGone = (patient: PatientListEntity) => {
            return !R.find(allPass(['patient_id', 'session_key'], patient), response);
          };

          const difList = R.differenceWith(findChanged, response, this.oldList).concat(R.map((patient: PatientListEntity) => {
            patient.status = 'GONE';
            return patient;
          }, R.filter(filterGone, this.oldList)));

          difList.forEach((patient: PatientListEntity) => {
            let eventType = '';
            switch (patient.status) {
              case 'PATIENT_WAITING':
                eventType = 'new_patient';
                break;
              case 'TREATMENT_COMPLETE':
                eventType = 'patient_complete';
                break;
            }
            this.updateListFromPush(patient);
          });
          
          this.oldList = response;
        }
      });
    }
  }

  updateListFromPush(patient: PatientListEntity): void {
    let currentPatientList: PatientListEntity[] | null = this.patientListState.patientListLastValue;

    if (currentPatientList === null) {
      currentPatientList = [];
    }

    if (patient.status === 'GONE') {
      currentPatientList = R.filter(anyPass(['patient_id', 'session_key'], patient), currentPatientList);
    } else {
      const foundIdx = R.findIndex(allPass(['patient_id', 'session_key'], patient), currentPatientList);
      if (foundIdx !== -1) {
        currentPatientList[foundIdx] = patient;
      } else {
        currentPatientList.push(patient);
      }
    }

    this.patientListState.patientList = currentPatientList;
    this.patientListState.patientListLastValue = currentPatientList;
  }

  updateList(list: PatientListEntity[]): void {
    this.patientListState.patientList = list;
  }

  public getIsPatientAssignedToCurrentUser(row: PatientListEntity, userId: number): boolean {
    const assignedUserId = row.doctor_id || row.clerk_id;
    return assignedUserId === userId && row.status !== 'TREATMENT_COMPLETE';
  }

  assignRoom(body): Observable<any> {
    return this.patientListApi.assignRoom(body);
  }

  getListLastValue(): PatientListEntity[] {
    return this.patientListState.patientListLastValue;
  }

  getList(): Observable<PatientListEntity[]> {
    return this.patientListState.patientList$;
  }

  get listLastValue(): Observable<PatientListEntity[]> {
    return this.patientListState.patientListLastValue$;
  }

  removePatientAssignment(patient_id: number | string): Observable<any> {
    return this.patientListApi.removePatientAssignment(patient_id);
  }

  closePatient(patient_id: string, data: any): Observable<any> {
    return this.patientListApi.closePatient(patient_id, data).pipe(
      concatMap(() => {
        this.getPatientList(true, true);
        return of();
      })
    );
  }

  unAssignRoom(body: { session: string }): Observable<any> {
    return this.patientListApi.unAssignRoom(body);
  }

  searchCompletedPatients(payload: string | number): Observable<PpSearchPatientsListItem[]> {
    return this.patientListApi.searchCompletedPatients(payload);
  }
}
