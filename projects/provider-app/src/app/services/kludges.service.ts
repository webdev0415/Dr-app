import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin, Observable, of as ObservableOf } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';

import { StateService } from './state.service';
import { NetworkService, RequestOptions } from './network';

import { Audits, Data } from 'common/models/data.model';
import { Configuration } from 'app.config';
import { BackendTreatment, DrugCombination, DrugSearchResultFM } from '../treatments/treatments.interface';
import { AdditionalDoctorNotes, DDX } from '../common/models/additional-doctor-notes.interface';
import { IllnessesPOSTRequest } from 'common/interfaces/diagnostic-engine.interface';
import { RerunTreatmentEngineData } from '../common/models/rerun-treatment-engine.model';

import { flatten, pick } from 'ramda';
import { environment } from '../../environments/environment';
import {
  CNTDischargeResponse,
  CNTDischargeSearchRequest,
  DischargeInstruction,
  DischargeInstructionDB,
  PVDischargeBackendModel,
  ReturnToSchoolWork
} from '../discharge/discharge.interface';
import { CntSiteKeyEnum } from '../discharge/cnt-site-key.enum';
import { Prescription } from 'treatments/prescription/prescription.component';


@Injectable()
export class KludgesService extends NetworkService {

  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler,
  ) {
    super(http, cfg, stateService, errorHandler);
  }

  receiveDischargeArticles(icdCodes: string[], keyword: string, start = 0, count = 5, companyName: CntSiteKeyEnum): Observable<CNTDischargeResponse> {
    const data = <CNTDischargeSearchRequest>{
      categories: ['DISCHARGEINSTRUCTIONS', 'DISEASES'],
      count: count,
      lang: 'en',
      keyword: keyword,
      library: 'STAYWELL',
      siteKey: companyName,
      start: start,
      taxonomy: {
        codeSystem: 'ICD10CM',
        values: icdCodes,
      }
    };
    const options: RequestOptions = { urlType: 'raw', addWorker: true, splitAction: false };
    const header: HttpHeaders = new HttpHeaders({'X-API-KEY': environment.cntAPIKey });
    return this.send(environment.cntAPIURL + 'search', data, false , undefined, undefined, options, header).pipe(catchError(() => ObservableOf({data: [], recordsTotal: 0} as CNTDischargeResponse)), map((result: CNTDischargeResponse) => {
      result.start = start;
      return result;
    }));
  }

  refreshTreatment(patient: Data, isPIC: boolean = false) {
    const diagnosticEngine = patient.diagnosticEngine.map(item => pick(['icd10', 'icdGroup', 'isSelected', 'isPrimary'], item));
    sessionStorage.setItem('xDiagnosticEnginex', JSON.stringify(diagnosticEngine));
    const body: RerunTreatmentEngineData = {
      triage: patient.triage.map(item => pick(['response', 'values', 'symptomId'], item)),
      diagnosticEngine,
      // @ts-ignore
      patientInformation: pick(['gender', 'birthDate', 'pregnancyStatus', 'patientId'], patient.patientInformation),
      measurements: patient.measurements,
      patientHealthHistory: pick(['smokingStartDate', 'smokingEndDate', 'historyItem', 'version'], patient.patientHealthHistory)
    };
    const params = isPIC ? new HttpParams().append('business', 'PIC') : null;
    return this.send('dr_app', body, false, null, `rerun_te`, { urlType: 'api' }, undefined, params);
  }

  saveTreatments(sessionId: string, data: {treatments: any[], fast_med_blob: string, pvDischarge: PVDischargeBackendModel, customInstruction: string, dischargeInstructions: DischargeInstructionDB[], returnToWorkSchool: ReturnToSchoolWork }, version = 'v2/'): Observable<any> {
    return this.send(`${version}visits`, data, false, null, `${sessionId}/treatments`, { urlType: 'api', splitAction: false });
  }

  getTreatments(sessionId: string, version = 'v2/'): Observable<{ treatments: BackendTreatment[], pvDischarge: PVDischargeBackendModel, dischargeInstructions: DischargeInstruction[], customInstruction: string, returnToWorkSchool: ReturnToSchoolWork }> {
    return this.show(`${version}visits/${sessionId}`, null, `treatments/`, { urlType: 'api', splitAction: false });
  }

  getSelectedDiagnosis(id) {
    return this.show('patients',  id, 'illness', { urlType: 'api' });
  }

  saveDiagnosis(data: IllnessesPOSTRequest, id) {
    return this.send('patients', data, true, id, 'illness', { urlType: 'api' });
  }

  rerunTriage(symptoms: string[], id, rerun_hpi = true, rerun_ros = true) {
    const body = {
      SymptomList: symptoms,
      rerun_hpi: rerun_hpi,
      rerun_ros: rerun_ros,
      TriageCount: 50
    };
    return this.send('patients', body, true, String(id), 'rerun_triage', { urlType: 'api'});
  }

  /**
   * remove labs
   * @param symptoms {string[]}
   * @param id
   */
  removeLabs(symptoms: string[], id) {
    if (!symptoms.length) return ObservableOf({status: 200});
    const body = {
      delete_symptoms: symptoms,
      TriageCount: 50
    };
    return this.send('patients', body, true, String(id), 'rerun_triage/remove_symptoms', { urlType: 'api', splitAction: false});
  }

  viewFinalNotes(patient_id: number | string) {
    return this.show('v1/doctors-notes', String(patient_id), null, { urlType: 'api' });
  }


  putVitals(patient_id: number | string, data: any): Observable<any> {
    return this.send('v2/patients', data, false, String(patient_id), 'measurements', { urlType: 'api', addWorker: false});
  }

  getPaymentInfo(patient_id: number | string): Observable<any> {
    return this.show('patients', String(patient_id), 'payment_info', { urlType: 'api' });
  }

  generateSummary(visitData): Observable<{summary: string}> {
    return this.send('patient', visitData, false, null, 'hpi-summary/generate', { urlType: 'api', splitAction: false, addWorker: false });
  }

  getSummary(patient_id: number | string): Observable<any> {
    return this.show('patients', String(patient_id), 'hpi-summary', { urlType: 'api' });
  }

  saveSummary(data: { summary: string }, patient_id: number | string) {
    return this.send('patients', data, false, String(patient_id), 'hpi-summary', { urlType: 'api' });
  }

  getDifferentialDiagnosis(): Observable<DDX> {
    return this.send('patient', {}, false, null, 'generate-ddx', { urlType: 'api' });
  }

  /**
   * save additional provider notes for unfinished patient
   * @param patient_id
   * @param additionalInfo
   * @param update
   */
  saveAdditionalInfo(patient_id: string, additionalInfo: AdditionalDoctorNotes, update: boolean) {
    const options: RequestOptions = {
      urlType: 'api'
    };
    return this.send('patients', additionalInfo, update, patient_id, 'additional_info', options);
  }

  /**
   * fetch patient's physicalExam notes
   * @param patient_id
   */
  getPhysicalExams(patient_id: string) {
    const options: RequestOptions = {urlType: 'api'};
    return this.show('patients', patient_id, 'physical_exam', options);
  }

  public saveHealthHistory(patient_id: string, patient: Data, update: boolean) {
    const healthHistory = patient.patientHealthHistory;
    const options: RequestOptions = {urlType: 'api'};
    return this.send('v2/patients', healthHistory, update, patient_id, 'health_history', options);
  }

  public getDmeByQuery(search): Observable<any[]> {
    const params = new HttpParams().append('query', search);
    return this.search(`search_drug/search_dme`, params, { urlType: 'service' });
  }

  public getDrugsByName(search, business = 'Default'): Observable<any[]> {
    const params = new HttpParams().append('query', search).append('business', business).append('simplified', 'false');
    return this.search(`search_drug/search_by_name_v2`, params, { urlType: 'service' });
  }

  public quickDrugSearch(search, business = 'Default'): Observable<any[]> {
    const params = new HttpParams().append('query', search).append('business', business);
    return this.search(`search_drug/quick_search_by_name`, params, { urlType: 'service' });
  }

  public getDrugsByNameV1(searchString: string, type: 'PRESCRIPTION' | 'OTC'): Observable<{name: string, productIds: string[]}[]> {
    const params = new HttpParams().append('word', searchString).append('source', 'rxnorm').append('type', type);
    return this.search('rest-usfda/v1/searchByDrugName', params, {urlType: 'service'}, true);
  }

  public getDrugProductDetails(productId: string): Observable<{ group: string; rxcui: string; }> {
    const params = new HttpParams().append('productId', productId);
    return this.search<{ atcgroups: { [key in 'micaGroupName' | 'rxcui' | 'groupCode']: string }[]; ingredients: { [key in 'rxcui' | 'description'] }[]; }>('rest-usfda/atcinfo', params, {urlType: 'service'}, true).pipe(map(info => ({ group: info.atcgroups[0]?.micaGroupName || '', rxcui: info.ingredients[0]?.rxcui || '' })));
  }

  public getDrugsByNameFastMed(search: string, exactMatch = false): Observable<DrugSearchResultFM[]> {
    const params: HttpParams = new HttpParams().append('name', exactMatch ? `\"${search}\"` : search);
    return this.search('2070Services/pv/search/drugs', params, {urlType: 'service'}, true);
  }

  public getCombinationDrugsFastMed(pvid: number[]): Observable<DrugSearchResultFM[]> {
    return forkJoin(new Array(Math.ceil(pvid.length / 300)).fill(null).map((item, index) => {
      let params: HttpParams = new HttpParams().append('status', 'a');
      pvid.slice(index * 10, (index + 1) * 10).forEach(id => params = params.append('pvid', String(id)));
      return this.search('2070Services/pv/search/combinationdrugs', params, {urlType: 'service'}, true);
    })).pipe(map((results: Array<DrugSearchResultFM[]>) => flatten(results)));
  }

  public getCombinationDrugs(productId: string, useRxcui): Observable<DrugCombination> {
    const pIdParam = useRxcui ? 'rxcui' : 'productId';
    const params = new HttpParams().append(pIdParam, productId).append('cardinality', 'all').append('ndc', 'false').append('type', 'PRESCRIPTION');

    return this.search<DrugCombination>('rest-usfda/combinationdrugs', params, {urlType: 'service'}, true);
  }

  public filterDrugByBusiness(rxcui: string, business: number): Observable<DrugCombination> {
    const params = new HttpParams().append('rxcui', rxcui).append('business_id', `${business}`);

    return this.search<{data: DrugCombination}>('v1/filter_drug_by_business/', params, {urlType: 'api'}, true).pipe(pluck('data'));
  }

  public getRxcui(icdCode: string, groupName: string, name: string, prescription: boolean): Observable<string> {
    console.log(icdCode, groupName, name);
    return this.http.request('GET', `https://devservices.advinow.net/2070Services/treatment/v1/illness/all/${icdCode}`, {
      responseType: 'json',
      observe: 'response' as 'response',
      reportProgress: false
    }).pipe(
      map(({body: data}: any) => data.treatments.find(treat => treat.name === (prescription ? 'Prescription Drugs' : 'OTC Drugs'))
              .groups.filter(group => group.groupName.toLowerCase().trim() === groupName.toLowerCase().trim())
              .map(group => group.drugs.find(drug => drug.drugName.toLowerCase().trim() === name.toLowerCase().trim())?.ingredientRxcui)
              .filter(Boolean)[0]
          )
      );
  }

  closePatient(patient_id: number | string, data): Observable<{detail: string}> {
    return this.send('patients', data, false, String(patient_id), 'force_complete', { urlType: 'api'});
  }

  public getAuditList(id: string): Observable<Audits> {
    return this.show('patients', String(id), 'audit_event', { urlType: 'api' });
  }

  public fetchProtocols(): Observable<(Prescription & { type: string })[]> {
    return this.search('protocols', null, { urlType: 'api' });
  }
}
