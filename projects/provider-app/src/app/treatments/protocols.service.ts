import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';


import { environment } from '../../environments';
import { TreatmentProtocolItem } from './interface/treatment-protocol-item.interface';
import { PrescribingItem } from './prescription/prescription.component';

@Injectable({
  providedIn: 'root'
})
export class ProtocolsService {
  private apiUrl = environment.apiDomain + '/api/protocols/';

  constructor(private http: HttpClient) { }

  public getTreatmentsProtocols(): Observable<TreatmentProtocolItem[]> {
    return this.http.get(this.apiUrl).pipe(pluck('protocols'));
  }

  public createTreatmentProtocol(prescribingItem: PrescribingItem): Observable<TreatmentProtocolItem> {
    return this.http.post<TreatmentProtocolItem>(this.apiUrl, { type: prescribingItem.type, ...prescribingItem.prescription });
  }

  public updateProtocol(protocol: TreatmentProtocolItem): Observable<TreatmentProtocolItem> {
    return this.http.put<TreatmentProtocolItem>(this.apiUrl + protocol.id, protocol);
  }

  public deleteProtocol(protocol: TreatmentProtocolItem) {
    return this.http.delete(this.apiUrl + protocol.id);
  }
}
