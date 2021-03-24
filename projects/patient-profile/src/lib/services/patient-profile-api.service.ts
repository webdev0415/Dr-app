import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { clone } from 'ramda';
import { TelemedicineInfo } from '../../../../provider-app/src/app/telemedicine/telemedicine-info.interface';

import { Utils } from '../utils';
import { API_URL } from './providers';
import { GenderEnum } from '../enums';
import { PatientProfile, PatientInsuranceCard, PatientIdCard, PatientProfileData } from '../interfaces';
import { environment } from '../../../../provider-app/src/environments';


@Injectable()
export class PatientProfileApiService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiProvider: {buildUrl: (patientId: number | string, path?: string, section?: string) => string}) {}

  public getPatientProfileData(patientId: number): Observable<PatientProfileData> {
    const url = this.apiProvider.buildUrl(patientId, null);
    return this.http.get<PatientProfileData>(url)
      .pipe(map(result => Utils.toCamelCase<PatientProfileData>(JSON.stringify(result))));
  }

  getTestSession(): Observable<{ testId: string; testToken: string; }> {
    const apiUrl = environment.apiDomain + '/api/v2/generate_test_token/';
    return this.http.get<{ testId: string; testToken: string; }>(apiUrl);
  }

  public getPatientInsurance(patientId: number): Observable<Partial<PatientInsuranceCard>[]> {
    const url = this.apiProvider.buildUrl(patientId, 'insurance_cards');

    return this.http.get<PatientInsuranceCard[]>(url).pipe(map(result => Utils.toCamelCase(JSON.stringify(result))));
  }

  public getPatientIdCard(patientId: number): Observable<Partial<PatientIdCard>[]> {
    const url = this.apiProvider.buildUrl(patientId, 'identifications');
    return this.http.get<PatientIdCard[]>(url).pipe(map(result => Utils.toCamelCase(JSON.stringify(result))));
  }

  public savePersonalInfo(profileData: Partial<PatientProfile>, patientId: number): Observable<{ status: string }> {
    const payloadData = clone(profileData);
    if (payloadData.gender) {
      payloadData.gender = <GenderEnum>Object.keys(GenderEnum).find((key: keyof typeof GenderEnum) => profileData.gender === GenderEnum[key]);
    }
    const url = this.apiProvider.buildUrl(patientId, null);
    return this.http.patch(url, Utils.toSnakeCase(JSON.stringify({ patientProfile: payloadData }))).pipe(map(result => Utils.toCamelCase(JSON.stringify(result))));
  }

  public getTelemedicineInfo(): Observable<TelemedicineInfo> {
    const url = this.apiProvider.buildUrl('telemedicine');
    return this.http.post<TelemedicineInfo>(url, null);
  }

  public checkTelemedicineSession(): Observable<{ error: string }> {
    const url = this.apiProvider.buildUrl('telemedicine');
    return this.http.get<{ error: string }>(url);
  }

  public completeTelemedicineSession(): Observable<any> {
    const url = this.apiProvider.buildUrl('telemedicine');
    return this.http.delete(url);
  }

  public sendTelemdicineLinkToPatient(sessionId: string): Observable<unknown> {
    const url = this.apiProvider.buildUrl(sessionId, 'send_telemedicine_sms', 'visits');
    return this.http.post(url, {});
  }
}
