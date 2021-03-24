import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { delay, map } from 'rxjs/operators';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { PpSearchPatientsListItem } from '../../common/interfaces/pp-select.interface';
import { StateService } from '../../services';
import { UserService } from '../../user/user.service';
import { Utils } from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PatientListApiService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private stateService: StateService
  ) { }

  private get ehrLocationIdRequired(): boolean {
    return this.userService.getUserRole === UserRolesEnum.PRACTITIONER && this.userService.isPICModeBusiness && this.userService.getUserData.has_ehr_auth;
  }

  @Utils.OERequest('patients')
  assignRoom(body: { session: string, room: string }): Observable<any> {
    const url = Utils.buildUrl(this, 'assignRoom', 'assign_room');
    return this.http.post(url, body, {params: { addWorker: '' }});
  }

  @Utils.OERequest('patients')
  unAssignRoom(body: { session: string }): Observable<any> {
    const url = Utils.buildUrl(this, 'unAssignRoom', 'assign_room');
    return this.http.request('delete', url, { body, params: { addWorker: '' } });
  }

  @Utils.OERequest('patients')
  getPatientList(addWorker: boolean = false): Observable<any> {
    if (this.userService.isPICModeBusiness) {
      const locations = ['chicagoland', 'rockford', 'indiana', 'wisconsin'];
      const getPatients = locations.map(location => {
        const url = Utils.buildUrl(this, 'getPatientList', '');
        let params = new HttpParams();
        if (addWorker) params = params.append('addWorker', '');
        params = params.append('ehr_location_id', location).append('all', 'true');
        return this.http.get(url, { params }).pipe(
          map((patients: any) => patients && !patients.error ? patients.map(patient => ({ ...patient, ehr_location: location })) : patients)
        );
      });

      return forkJoin(getPatients).pipe(
        map((responseList: any[]) => responseList.filter(response => response && !response.error).flat())
      );
    } else {
      const url = Utils.buildUrl(this, 'getPatientList', '');
      let params = new HttpParams();
      if (addWorker) params = params.append('addWorker', '');
      return this.http.get(url, { params }).pipe(
        map((patients: any) => patients && !patients.error ? patients.map(patient => ({ ...patient })) : patients)
      );
    }
  }

  @Utils.OERequest('patient')
  searchCompletedPatients(payload: string | number): Observable<PpSearchPatientsListItem[]> {
    const url = Utils.buildUrl(this, 'searchCompletedPatients', 'search');
    const key = typeof payload === 'number' ? 'patient_id' : 'last_name';
    const params: HttpParams = new HttpParams().append(key, payload.toString()).append('addWorker', '');
    return this.http.get<PpSearchPatientsListItem[]>(url, { params });
  }

  @Utils.OERequest('patients')
  closePatient(patient_id: number | string, data): Observable<any> {
    const url = Utils.buildUrl(this, 'closePatient', `${patient_id}/force_complete`);
    return this.http.post(url, data, {params: { addWorker: '' }});
  }

  @Utils.OERequest('v1/patients')
  removePatientAssignment(patient_id: number | string): Observable<any> {
    const url = Utils.buildUrl(this, 'removePatientAssignment', `${patient_id}/remove_assign`);
    return this.http.post(url, null);
  }
}
