import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable, of, of as ObservableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Utils } from 'utils/utils';
import { Data } from 'common/models/data.model';
import { FinalNotesResponse } from 'common/interfaces/patient-data.interface';
import { SeverityConfirmationInterface } from 'components/shared/popups/pp-severity-confirmation/severity-confirmation.interface';
import { PharmacistRecommendations } from '../../../../pharmacist/src/lib/interfaces/pharmacist-recommendations.interface';

@Injectable()
export class PatientDataApiService {

  constructor(private http: HttpClient) { }

  @Utils.OERequest('patients')
  public assign(sessionKey: string, patientId: number): Observable<{sessionKey: string}> {
    const body = { session_key: sessionKey || '' };
    /*
    https://advinow.atlassian.net/browse/PA-4338
    Calling this.getVisitData() was removed since it was already called in PatientdataService.getPatientData()
    */
    return this.http.post<{sessionKey: string}>(Utils.buildUrl(this, 'assign', `${patientId}/assign`), body, { params: { addWorker: '' }  });
  }

  @Utils.OERequest('patients')
  public unassign(patientId: number): Observable<{detail: string}> {
    return this.http.post<{detail: string}>(Utils.buildUrl(this, 'unassign', `${patientId}/unassign`), null, { params: { addWorker: '' }  })
      .pipe(catchError(error => {
        const message: string = (<HttpErrorResponse>error).error.message;
        if (message.includes('User is not assigned to this patient.')) return ObservableOf(null);
        return ObservableOf(null);
      }));
  }

  @Utils.OERequest('patients')
  public getVisitData(patientId: number): Observable<Data> {
    return this.http.get<Data>(Utils.buildUrl(this, 'getVisitData', `${patientId}/visit-data`), { params: { addWorker: '' } });
  }

  @Utils.OERequest('patients')
  public finalizeRequest(patientId: number, doctorId: number, notes: string, summary: File): Observable<FinalNotesResponse> {
    const data = new FormData();
    data.append('file', summary);
    data.append('notes', notes);
    data.append('doctorId', String(doctorId));
    return this.http.post<FinalNotesResponse>(Utils.buildUrl(this, 'finalizeRequest', `${patientId}/notes/final`), data, { params: { addWorker: '' } });
  }

  @Utils.OERequest('patients')
  public finalizeWithState(data: {transferred_to: number, session_key: string}, patientId: number): Observable<{detail: string}> {
    return this.http.post<{detail: string}>(Utils.buildUrl(this, 'finalizeWithState', `${patientId}/finalize_with_state`), data, { params: { addWorker: '' } });
  }

  @Utils.OERequest('patients')
  public updatePharmacistRecommendations(patientId: number): Observable<PharmacistRecommendations> {
    return this.http.get<PharmacistRecommendations>(Utils.buildUrl(this, 'updatePharmacistRecommendations', `${patientId}/referal`), { params: { addWorker: '' } }).pipe(map(response => Utils.toCamelCase<PharmacistRecommendations>(JSON.stringify(response))), catchError(() => of(null)));
  }

  @Utils.OERequest('patients')
  public sendSeverity(patientId: string, severity: SeverityConfirmationInterface): Observable<SeverityConfirmationInterface> {
    return this.http.post<SeverityConfirmationInterface>(
      Utils.buildUrl(this, 'sendSeverity', `${patientId}/final_visit_info`),
      {criticality: severity.patientRisk, cpt_code: severity.cptCode});
  }
}
