import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { DateTime } from '../../../../pharmacist/src/lib/side-models/common/utils/dateTime';
import { PatientProfile, PatientInsuranceCard, PatientIdCard, PatientProfileData } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileStateService {
  private _profileData: BehaviorSubject<PatientProfileData> = new BehaviorSubject<PatientProfileData>(null);
  private _insuranceData: BehaviorSubject<PatientInsuranceCard[]> = new BehaviorSubject<PatientInsuranceCard[]>([]);
  private _idCard: BehaviorSubject<PatientIdCard[]> = new BehaviorSubject<PatientIdCard[]>(null);

  public get patientProfileData$(): Observable<Readonly<PatientProfileData>> {
    return this._profileData.asObservable();
  }

  public get patientInsuranceData$(): Observable<Readonly<PatientInsuranceCard[]>> {
    return this._insuranceData.asObservable();
  }

  public get patientIdCard$(): Observable<Readonly<PatientIdCard[]>> {
    return this._idCard.asObservable();
  }

  public get patientId(): number {
    return this._profileData.getValue().patientProfile.patientId;
  }

  public updatePatientProfile(profileData: Partial<PatientProfile>) {
    const currentProfileData = this._profileData.getValue();
    if (profileData.birthDate) currentProfileData.patientProfile.age = DateTime.waiting(profileData.birthDate);
    currentProfileData.patientProfile = { ...currentProfileData.patientProfile, ...profileData };
    this._profileData.next(currentProfileData);
  }

  public set patientProfileData(data: PatientProfileData) {
    this._profileData.next(data);
  }

  public set patientInsuranceData(data: PatientInsuranceCard[]) {
    this._insuranceData.next(data);
  }

  public set patientIdCard(data: PatientIdCard[]) {
    this._idCard.next(data);
  }
}
