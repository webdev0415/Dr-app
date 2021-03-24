import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as ObservableOf } from 'rxjs';
import { BusinessLab } from '../business-lab.model';
import { map } from 'rxjs/operators';
import { Utils } from '../../utils/utils';
import { LabsOrderResponseInterface } from '../interfaces/labs-order-response.interface';
import { FormattedTriageLab } from '../interfaces/formatted-triage-lab.interface';

@Injectable({
  providedIn: 'root'
})
export class LabsApiService {

  constructor(private http: HttpClient) {}

  @Utils.OERequest('businesses')
  public getBusinessLabs(): Observable<any[]> {
    const url = Utils.buildUrl(this, 'getBusinessLabs', 'labs');
    return this.http.get(url).pipe(map(labs => Utils.toCamelCase<{labs: BusinessLab[]}>(JSON.stringify(labs)).labs));
  }

  @Utils.OERequest('patients')
  public removeLabs(labs: string[], patientId: number): Observable<any> {
    if (!labs.length) return ObservableOf({status: 200});
    const url = Utils.buildUrl(this, 'removeLabs', `${patientId}/rerun_triage/remove_symptoms`);
    const body = {
      delete_symptoms: labs,
      TriageCount: 50
    };
    return this.http.patch(url, body);
  }

  @Utils.OERequest('patients')
  public getOrderedLabs(patientId: number): Observable<LabsOrderResponseInterface> {
    const url = Utils.buildUrl(this, 'getOrderedLabs', `${patientId}/labs`);
    return this.http.get<LabsOrderResponseInterface>(url);
  }

  @Utils.OERequest('patients')
  public orderLabs(patientId: number, order: LabsOrderResponseInterface): Observable<{message: string}> {
    const url = Utils.buildUrl(this, 'orderLabs', `${patientId}/labs`);
    return this.http.post<{message: string}>(url, order);
  }

  @Utils.OERequest('patients')
  updateLabsResult(patientId: number, symptoms: FormattedTriageLab[], rerunHPI = false, rerunROS = false): Observable<any> {
    const url = Utils.buildUrl(this, 'removeLabs', `${patientId}/rerun_triage`);
    const body = {
      SymptomList: symptoms,
      rerun_hpi: rerunHPI,
      rerun_ros: rerunROS,
      TriageCount: 50
    };
    return this.http.patch(url, body);
  }


}
