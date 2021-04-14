import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { OtherdataService } from "./otherdata.service";
import { ServicedataService } from "./servicedata.service";
import { Data } from "../common/models/data.model";
import { PatientdataService } from "./patientdata.service";
import { DDX } from "../common/models/additional-doctor-notes.interface";
import { IllnessesPOSTRequest } from "common/interfaces/diagnostic-engine.interface";
import { NodeSearchTypeEnum } from "../common/enums/node-search-type.enum";

@Injectable()
export class DataService {
  constructor(
    private patientDataService: PatientdataService,
    private otherDataService: OtherdataService,
    private serviceDataService: ServicedataService
  ) {}

  getPatient(): Observable<Data> {
    return this.patientDataService.getPatient();
  }
  getPatientData(id): any {
    this.patientDataService.getPatientData(id);
  }
  getPatientLastValue(): Data {
    return this.patientDataService.getPatientLastValue();
  }
  getPatientIllness(): any {
    return this.patientDataService.getPatientIllness();
  }
  saveDiagnosis(data: IllnessesPOSTRequest, id: string): Observable<any> {
    return this.patientDataService.saveDiagnosis(data, id);
  }
  rerunTriage(
    symptoms,
    id,
    rerun_hpi = true,
    rerun_ros = true
  ): Observable<any> {
    return this.patientDataService.rerunTriage(
      symptoms,
      id,
      rerun_hpi,
      rerun_ros
    );
  }
  getSummary(): Observable<any> {
    return this.patientDataService.getHPISummary();
  }
  setSummary(summary: { summary: string }): void {
    this.patientDataService.setHPISummary(summary);
  }
  saveSummary(data: { summary: string }, patient_id: number): Observable<any> {
    return this.patientDataService.saveSummary(data, patient_id);
  }
  getDifferentialDiagnosis(filterValid = true): Observable<DDX> {
    return this.patientDataService.getDifferentialDiagnosis(filterValid);
  }
  updateDifferentialDiagnosis(generateDDX = true): void {
    this.patientDataService.updateDifferentialDiagnosis(generateDDX);
  }
  removeLabs(symptoms: string[], id: string): Observable<any> {
    return this.patientDataService.removeLabs(symptoms, id);
  }
  nodeSearch(
    value,
    type: NodeSearchTypeEnum,
    addWorker = false,
    isArray?: boolean
  ): Observable<any> {
    return this.serviceDataService.nodeSearch(value, type, addWorker, isArray);
  }
  getCompletedPatientNotesPDF(sessionKey: string): Observable<any> {
    return this.otherDataService.getCompletedPatientNotesPDF(sessionKey);
  }
  getTriageValue(id, triage): any {
    return this.otherDataService.getTriageValue(id, triage);
  }
  getVisitData(): Observable<any> {
    return this.patientDataService.getVisitData();
  }
  updatePatient(
    updInfo: object,
    treatmentDirty = false,
    exclude = null
  ): Observable<boolean> {
    return this.patientDataService.updatePatient(
      updInfo,
      treatmentDirty,
      exclude
    );
  }
  viewFinalNotes(patient_id: number | string) {
    return this.patientDataService.viewFinalNotes(patient_id);
  }
  putVitals(patient_id: number | string, data: any): Observable<any> {
    return this.patientDataService.putVitals(patient_id, data);
  }
  getPaymentInfo(patient_id: number | string) {
    return this.patientDataService.getPaymentInfo(patient_id);
  }
  saveAdditionalInfo(
    patient_id: string,
    data: any,
    update: boolean
  ): Observable<any> {
    return this.patientDataService.saveAdditionalInfo(patient_id, data, update);
  }
  saveHealthHistory(patient_id: string, update: boolean): Observable<any> {
    return this.patientDataService.saveHealthHistory(patient_id, update);
  }
}
