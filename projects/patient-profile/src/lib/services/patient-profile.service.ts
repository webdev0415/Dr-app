import { Inject, Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { from, iif, never, Observable, of, zip } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap } from 'rxjs/operators';
import { isNil, flatten, prop, groupBy } from 'ramda';
import { LAZY_SERVICE } from './providers';

import { PatientProfileApiService } from './patient-profile-api.service';
import { PatientProfileStateService } from './patient-profile-state.service';
import { DateTime } from '../../../../pharmacist/src/lib/side-models/common/utils/dateTime';
import {
  PatientProfile,
  PatientContactInformation,
  PatientInsuranceCard,
  PatientIdCard,
  PatientUserData,
  PatientProfileData,
  PatientContactInformationDto,
  PatientProfileDataDto,
  PatientProfileDto,
  PatientUserDataDto
} from '../interfaces';

@Injectable()
export class PatientProfileService {
  constructor(private patientProfileService: PatientProfileApiService,
              private patientProfileState: PatientProfileStateService,
              @Inject(LAZY_SERVICE) private lazyService: { lazyLoad: (link: string) => Promise<SafeResourceUrl> }) {}

  public getPatientProfileData(patientId: number): void {
    this.patientProfileService.getPatientProfileData(patientId).pipe(
      map(result => {
        result.patientProfile.age = DateTime.waiting(result.patientProfile.birthDate);
        // todo: remove after target endpoint fixed
        result.patientProfile.patientId = patientId;
        result.contactRecord.primaryPhoneType = result.patient.primaryPhoneType;
        return result;
      }),
      catchError(err => of(null)))
      .subscribe(data => this.patientProfileState.patientProfileData = data);
  }

  getTestSession(): Observable<{ testId: string; testToken: string; }> {
    return this.patientProfileService.getTestSession();
  }

  public getPatientInsurance(patientId: number): void {
    this.patientProfileService.getPatientInsurance(patientId).pipe(catchError(err => []), mergeMap(data => {
      this.patientProfileState.patientInsuranceData = data;
      const blobbedArray: Observable<PatientInsuranceCard>[] = flatten(data.map(card => card.cardImage.map(img => from(this.lazyService.lazyLoad(img.s3)).pipe(map(result => {
        card.cardImage = card.cardImage.map(item => item.s3 === img.s3 ? {...img, blob: result} : item);
        return card;
      })))));
      return zip(...blobbedArray);
    }), map(data => {
      // @ts-ignore
      return Object.values(groupBy(prop('cardId'), data)).map((card: PatientInsuranceCard[]) => {
        if (card.length > 1) card[0].cardImage = card[0].cardImage.concat(card[1].cardImage);
        return card[0];
      });
    })).subscribe(data => {
      this.patientProfileState.patientInsuranceData = data;
    });
  }

  public getPatientIdCard(patientId: number): void {
    this.patientProfileService.getPatientIdCard(patientId).pipe(catchError(err => [])).subscribe(data => this.patientProfileState.patientIdCard = data);
  }

  public patientProfileData$(which: keyof PatientProfileData = null): Observable<PatientProfile | PatientContactInformation | PatientProfileData | PatientUserData> {
    // @ts-ignore
    return this.patientProfileState.patientProfileData$.pipe(filter(data => !isNil(data)), map(profileData => which ? this.getProfileDataPart(which, profileData) : new PatientProfileDataDto(profileData)));
  }

  private getProfileDataPart(which: keyof PatientProfileData = null, patient: Partial<PatientProfileData>) {
    switch (which) {
      case 'contactRecord':
        return new PatientContactInformationDto(patient[which]);
      case 'patient':
        return new PatientUserDataDto(patient[which]);
      case 'patientProfile':
        return new PatientProfileDto(patient[which]);
    }
  }

  public get patientInsurance$(): Observable<Readonly<PatientInsuranceCard[]>> {
    return this.patientProfileState.patientInsuranceData$.pipe(filter(data => !!data));
  }

  public get patientIdCard$(): Observable<Readonly<PatientIdCard[]>> {
    return this.patientProfileState.patientIdCard$.pipe(filter(data => !!data), map(data => data.filter(item => item.images.length)));
  }

  public updatePersonalInfo(profileData: Partial<PatientProfile>): Observable<{ status: string }> {
    return this.patientProfileService.savePersonalInfo(profileData, this.patientProfileState.patientId).pipe(map(data => {
      this.patientProfileState.updatePatientProfile(profileData);
      return data;
    }));
  }

  public unassign(): void {
    this.patientProfileState.patientProfileData = null;
    this.patientProfileState.patientInsuranceData = null;
    this.patientProfileState.patientIdCard = null;
  }

  public checkTelemedicineAvailability(): Observable<boolean> {
    try {
      return this.patientProfileService.checkTelemedicineSession().pipe(map(response => response && !response.error));
    } catch (e) {
      return of(false);
    }
  }

  public getTelemedicineInfo() { return this.patientProfileService.getTelemedicineInfo(); }

  public completeTelemedicineSession() {
    return this.checkTelemedicineAvailability().pipe(
      concatMap(sessionActive => iif(
        () => sessionActive,
        this.patientProfileService.completeTelemedicineSession(),
        of(true)
      )),
      catchError(() => of(null))
    );
  }

  public sendTelemdicineLinkToPatient(sessionId: string): Observable<boolean> {
    return this.patientProfileService.sendTelemdicineLinkToPatient(sessionId).pipe(catchError(err => of(null)), map(response => !!response));
  }
}
