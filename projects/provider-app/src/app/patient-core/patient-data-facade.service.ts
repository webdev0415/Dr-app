import { Injectable } from '@angular/core';


import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { filter, finalize, map, pluck, tap } from 'rxjs/operators';

import { StateService } from 'services/state.service';
import { BehaviorData } from '../../../../pharmacist/src/lib/side-models/common/interfaces/behavior-data/behavior-data.interface';
import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { PatientDataService } from './patient-data.service';
import { PatientProfileService } from '../../../../patient-profile/src/lib/services/patient-profile.service';
import { PatientDataApiService } from './patient-data-api.service';

import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { SocialCard } from '../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';
import { Data} from 'common/models/data.model';
import { PatientProfile, PatientProfileData } from '../../../../patient-profile/src/lib/interfaces';
import { DocumentFinalizeFiles } from 'common/types/documents.type';
import { UserService } from 'user/user.service';
import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { DiagnosticEngine, IllnessesInformation } from 'common/interfaces/diagnostic-engine.interface';
import { SeverityConfirmationInterface } from 'components/shared/popups/pp-severity-confirmation/severity-confirmation.interface';
import { PharmacistRecommendations } from '../../../../pharmacist/src/lib/interfaces/pharmacist-recommendations.interface';

@Injectable()
export class PatientDataFacadeService {
  private _patientId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  private _sessionKey: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _pharmacistRecommendations: BehaviorSubject<PharmacistRecommendations> = new BehaviorSubject<PharmacistRecommendations>(null);
  private _severityConfirmation: BehaviorSubject<SeverityConfirmationInterface> = new BehaviorSubject<SeverityConfirmationInterface>({ patientRisk: null, cptCode: null});

  constructor(
    private stateService: StateService,
    private patientDataService: PatientDataService,
    private patientProfileService: PatientProfileService,
    private patientDataApiService: PatientDataApiService,
    private userService: UserService
  ) {
  }

  public get patientId$(): Observable<number> {
    return this._patientId.asObservable();
  }

  public get patientId(): number {
    return this._patientId.getValue();
  }

  public set summary(summary: string) {
    this.patientDataService.summary = summary;
  }

  public get sessionKey(): string {
    return this._sessionKey.getValue();
  }

  public get pharmacistRecommendation$(): Observable<PharmacistRecommendations> {
    return this._pharmacistRecommendations.asObservable();
  }

  public assign(patient: PatientListEntity, skipAssign = false): Observable<{sessionKey: string}> {
    this.stateService.patient.setAssignment(true);
    return (skipAssign ? of({sessionKey: patient.session_key}) : this.patientDataApiService.assign(patient.session_key, patient.patient_id)).pipe(finalize(() => this.patientAssignRoutine(patient.patient_id, patient.session_key)));
  }

  public unassign(patientId: number): Observable<{detail: string}> {
    return this.patientDataApiService.unassign(patientId).pipe(tap(() => this.patientUnassignRoutine()));
  }

  public getVisitData(patientId: number): Observable<Data> {
    return this.patientDataApiService.getVisitData(patientId).pipe(tap(result => this.patientDataService.visitData = result));
  }

  public finalizePatientVisit(documents: Partial<DocumentFinalizeFiles>, illnessesInformation: IllnessesInformation, DE: DiagnosticEngine[]): void {
    this.patientDataService.finalizePatientVisit(documents, illnessesInformation, DE);
  }

  public finalizeWithState(): Observable<{detail: string}> {
    return this.patientDataApiService.finalizeWithState({transferred_to: 1, session_key: this.sessionKey}, this.patientId);
  }

  public get socialCard$(): Observable<SocialCard> {
    return combineLatest([
      this.patientDataService.visitData$,
      this.patientProfileService.patientProfileData$()
    ]).pipe(filter(data => data.length === 2), map(([visitData, profileData]: [Data, PatientProfileData]) => {
      return new SocialCard(profileData.patientProfile, visitData.patientHealthHistory, visitData.visitInformation, visitData.measurements, profileData.contactRecord);
    }));
  }

  public get triage$(): Observable<Triage[]> {
    return this.patientDataService.visitData$.pipe(filter(data => !!data), pluck('triage'));
  }

  public get measurement$(): Observable<Measurement[]> {
    return this.patientDataService.visitData$.pipe(filter(data => !!data), pluck('measurements'));
  }

  public get patientQuestionnaire$(): Observable<BehaviorData[]> {
    return this.patientDataService.visitData$.pipe(pluck('behavioralScreening'));
  }

  public updatePharmacistRecommendations(): void {
    this.patientDataApiService.updatePharmacistRecommendations(this.patientId).subscribe(recommendationsData => this._pharmacistRecommendations.next(recommendationsData));
  }

  private patientAssignRoutine(patientId, sessionKey: string): void {
    this._patientId.next(patientId);
    this._sessionKey.next(sessionKey);
    this.patientProfileService.getPatientProfileData(patientId);
    this.patientProfileService.getPatientInsurance(patientId);
    this.patientProfileService.getPatientIdCard(patientId);
    if (this.userService.getUserRole === UserRolesEnum.PHARMACIST) this.updatePharmacistRecommendations();
    /*
    https://advinow.atlassian.net/browse/PA-4338
    Following line was removed since visit-data already called in PatientdataService.getPatientData()
    this.patientDataService.getVisitData(patientId).subscribe();
    */
  }

  private patientUnassignRoutine(): void {
    this._patientId.next(null);
    this._sessionKey.next(null);
    this._pharmacistRecommendations.next(null);
    this.patientDataService.visitData = null;
    this.patientDataService.illnessesInformation = null;
    this.patientProfileService.unassign();
  }

  public updateVisitData(data: Partial<Data>): void {
    this.patientDataService.updateVisitData(data);
  }

  public sendSeverity(patientId: string, severity: SeverityConfirmationInterface): Observable<SeverityConfirmationInterface> {
    return this.patientDataApiService.sendSeverity(patientId, severity);
  }

  public set severityConfirmation(severity: SeverityConfirmationInterface) {
    this._severityConfirmation.next(severity);
  }

  public get severityConfirmation(): SeverityConfirmationInterface {
    return this._severityConfirmation.getValue();
  }

  public get severityConfirmation$(): Observable<SeverityConfirmationInterface> {
    return this._severityConfirmation.asObservable();
  }
}
