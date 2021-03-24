import { Injectable } from '@angular/core';

import { BehaviorSubject, forkJoin, iif, Observable, of } from 'rxjs';
import { catchError, concatMap, filter, map, take, tap } from 'rxjs/operators';
import { clone, omit } from 'ramda';
import { Store } from '@ngxs/store';


import { Data} from 'common/models/data.model';
import { DocumentFinalizeFiles } from 'common/types/documents.type';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { NavigationService } from 'services/navigation.service';
import { NotificationsService } from 'components/notifications/notifications.service';
import { StateService } from 'services/state.service';
import { UserService } from 'user/user.service';
import { DialogService } from 'services/app/dialog.service';
import { TreatmentsService } from 'treatments/treatments.service';
import { PatientProfileService } from '../../../../patient-profile/src/lib/services/patient-profile.service';
import { DocumentsService } from '../../../../provider-documents/src/lib/services/documents.service';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { RemoveUnusedDrugInfo } from '../treatments/store-events/remove-unused-drug-info.event';
import { PatientDataApiService } from './patient-data-api.service';
import { UserRolesEnum } from '../common/enums/user-roles.enum';
import { Utils } from '../utils/utils';
import { PhysicalExamPanelState } from '../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.state';
import { DiagnosticEngine, IllnessesInformation } from '../common/interfaces/diagnostic-engine.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
  private _visitData: BehaviorSubject<Data> = new BehaviorSubject(null);
  private _summary: string;
  private _illnessInformation: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private stateService: StateService,
    private userService: UserService,
    private dialogService: DialogService,
    private treatmentsService: TreatmentsService,
    private documentsService: DocumentsService,
    private notificationService: NotificationsService,
    private navigationService: NavigationService,
    private patientDataApiService: PatientDataApiService,
    private store: Store,
    private patientProfileService: PatientProfileService
  ) { }

  public get visitData$(): Observable<Data> {
    return this._visitData.asObservable().pipe(filter(data => !!data), map(data => Utils.toCamelCase<Data>(JSON.stringify(data))));
  }

  public set visitData(visitData: Data) {
    this._visitData.next(visitData);
  }

  public updateVisitData(data: Partial<Data>): void {
    this._visitData.next({...this._visitData.getValue(), ...data});
  }

  public set summary(summary: string) {
    this._summary = summary;
  }

  public set illnessesInformation(illnessInformation) {
    this._illnessInformation.next(illnessInformation);
  }

  public finalizePatientVisit(documents: Partial<DocumentFinalizeFiles>, illnessInformation: IllnessesInformation, DE: DiagnosticEngine[]): void {
    forkJoin([
      this.userService.finalizeConfirmation().pipe(take(1)),
      this.stateService.patient.getCurrent().pipe(take(1))
    ])
      .pipe(
        filter(([approveModalResult, currentPatient]) => !!approveModalResult),
        map(([approveModalResult, currentPatient]) => currentPatient),
        // todo: remove on final-notes refactor
        // tap(() => this.treatmentsService.dispatch(new RemoveUnusedDrugInfo())),
        take(1)
      ).subscribe((currentPatient: PatientListEntity) => this.finalizePatientRoutine(currentPatient, documents, illnessInformation, DE));

  }

  private finalizePatientRoutine(patient: PatientListEntity, documents: Partial<DocumentFinalizeFiles>, illnessesInformation: IllnessesInformation, DE: DiagnosticEngine[]): void {
    const unlikelyDE = DE.filter(item => item.source === 'UnlikelyDiagnosisToConsider').map(item => omit(['source'], item));
    DE = DE.filter(item => item.source !== 'UnlikelyDiagnosisToConsider');
    const notes = JSON.stringify(this.cutDataForPDF(this._visitData.getValue(), illnessesInformation, DE, unlikelyDE));
    let preRequest: Observable<any> = this.patientProfileService.completeTelemedicineSession();
    if (this.isPharmacistUserRole) preRequest = this.documentsService.uploadDocument('pharmacy_questions', String(patient.patient_id), documents.questionnaire);

    preRequest.pipe(
      concatMap(() => this.patientDataApiService.finalizeRequest(patient.patient_id, this.userService.getUserData.doctor_id, notes, documents.summary)),
      concatMap((finalNotesResponse) => forkJoin([
        iif(() => !!documents.discharge, this.documentsService.uploadDocument('discharge', String(patient.patient_id), documents.discharge, finalNotesResponse.doctor_note_id), of(null)),
        iif(() => !!documents.authorization && this.treatmentsService.RTWSSelected, this.documentsService.uploadDocument('return_to_work', String(patient.patient_id), documents.authorization, finalNotesResponse.doctor_note_id), of(null))
      ])),
      concatMap((result) => {
        this.stateService.patient.emitFinalizeProcessSucceed();
        return this.stateService.app.pdf.watchPdfClosed().pipe(take(1));
      })
    ).subscribe(
      () => {
        this.notificationService.success('Provider Notes have been successfully uploaded');
        this.stateService.patient.erase();
        this.navigationService.navigateToPatients();
      },
      error => this.handleFinalize(error)
    );
  }

  private cutDataForPDF(patient: Data, illnessesInformation: IllnessesInformation, DE: DiagnosticEngine[], unlikelyDE: Omit<DiagnosticEngine, 'source'>[]) {
    const additionalInformation = clone(patient.additionalInformation);

    const finalMeasurements = patient.measurements.map((measurement: Measurement) => {
      if ('temp' in measurement) delete measurement.temp;
      if ('fileBlob' in measurement.value) delete measurement.value.fileBlob;
      return measurement;
    });
    additionalInformation.physicalExam = this.physicalExamsMap(this.store.selectSnapshot(PhysicalExamPanelState.viewModelExams));

    const drugInformation = new RemoveUnusedDrugInfo().getNewState(clone(this.treatmentsService.selectSnapshot())).drugInformation;

    try {
      return Object.assign({}, {
        dataSource: patient.dataSource,
        triage: patient.triage,
        patientHealthHistory: patient.patientHealthHistory,
        diagnosticEngine: DE,
        unlikelyDiagnosticEngine: unlikelyDE,
        visitInformation: patient.visitInformation,
        treatmentEngine: patient.treatmentEngine,
        patientInformation: patient.patientInformation,
        measurements: finalMeasurements,
        schemaVersion: patient.schemaVersion,
        additionalInformation: additionalInformation,
        illnessInformation: illnessesInformation,
        behavioralScreening: patient.behavioralScreening,
        summaryHPI: this._summary,
        drugInformation: drugInformation
      });
    } catch (err) {
      console.warn('Cannot cut data for PDF:', err);
      console.warn('Returned PDF data as is!');
      return patient;
    }
  }

  private physicalExamsMap(exams) {
    let results = [];
    exams.forEach(item => {
      const addedExamsArray = [];
      const examName = item.examName;
      item.addedExams.forEach(exam => {
        const examResults = exam.description;
        const modifier = exam.modifier;
        const newExam = {
          description: modifier.text,
          modifier: `${modifier.normal ? 'Normal' : 'Abnormal'}, ${modifier.key}`,
          edited: exam.edited,
          left: exam.left,
          right: exam.right
        };
        const existingExam = addedExamsArray.find(addedExam => addedExam.examResults === examResults);
        if (existingExam) {
          existingExam.addedExams.push(newExam);
        } else addedExamsArray.push({
          examName: examName,
          examResults: examResults,
          addedExams: [newExam],
          prevLength: newExam.modifier.length
        });
      });

      results = results.concat(addedExamsArray);
    });
    return results;
  }

  private handleFinalize(error) {
    switch (error.status) {
      case 0: {
        this.notificationService.error('Internet disconnected', 'Error!');
        break;
      }
      case 400:
      case 403:
      case 404: {
        this.notificationService.error('Provider Notes upload failed', 'Provider Notes');
        break;
      }
      case 500: {
        this.notificationService.error('Internal Server Error.', 'Provider Notes');
        break;
      }
      default: {
        this.notificationService.error('Something went wrong', 'Provider Notes');
      }
    }
    this.stateService.patient.emitFinalizeProcessSucceed(false);
  }

  private get isPharmacistUserRole(): boolean {
    return this.userService.getUserRole === UserRolesEnum.PHARMACIST;
  }

}
