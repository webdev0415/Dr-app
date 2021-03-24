import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of as ObservableOf, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as html2pdf from 'html2pdf.js';
import * as jsPDF from 'jspdf';
import * as R from 'ramda';

import { Data } from 'common/models/data.model';
import { PVFrequencyEnum } from 'treatments/enum/pv-frequency.enum';
import { TreatmentType } from 'treatments/treatments.type';
import { DocTreatmentItem, DocumentTreatment } from 'common/interfaces/documents.interface';
import { TreatmentTypesEnum } from 'treatments/enum/treatment-types.enum';
import { environment } from '../../../../provider-app/src/environments/environment';
import { DischargeInstruction } from 'discharge/discharge.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  public dateValidationError: Subject<{body: string, title: string}> = new Subject();
  private docsSpanish = { authorization: false, discharge: false };

  constructor(private http: HttpClient) { }

  public static setPdfConfig(pdfObject: jsPDF): jsPDF {
    const pdfPages = pdfObject.internal.pages;
    const pageWidth = pdfObject.internal.pageSize.getWidth();
    const pageHeight = pdfObject.internal.pageSize.getHeight();

    for (let i = 1; i < pdfPages.length; i++) {
      pdfObject.setPage(i);
      pdfObject.setFontSize(12);
      pdfObject.setTextColor(150);
      pdfObject.text(`Page ${i}`, pageWidth - 1, pageHeight - 0.35);
      pdfObject.setLineWidth(0.01);
      pdfObject.line(pageWidth - 0.5, pageHeight - 0.6, pageWidth - 8, pageHeight - 0.6);
    }
    return pdfObject;
  }

  public static setSignature(pdfObject: jsPDF, signature: string): jsPDF {
    const pdfPages = pdfObject.internal.pages;
    const pageWidth = pdfObject.internal.pageSize.getWidth();
    const pageHeight = pdfObject.internal.pageSize.getHeight();
    // Units in inches
    const signatureX = pageWidth - 8;
    const signatureY = pageHeight - 1.6;
    const signatureWidth = 1.5625;
    const signatureHeight = 0.78125;
    const signatureUnderlineX1 = pageWidth - 6.5;
    const signatureUnderlineX2 = pageWidth - 8;
    const signatureUnderlineY = pageHeight - 0.85;

    for (let i = pdfPages.length - 1; i > pdfPages.length - 2; i--) {
      pdfObject.setPage(i);
      pdfObject.setFontSize(12);
      pdfObject.setTextColor('#000000');
      pdfObject.text('Signature', pageWidth - 7.625, pageHeight - 0.675);
      pdfObject.addImage(signature, 'JPEG', signatureX, signatureY, signatureWidth, signatureHeight);
      pdfObject.line(signatureUnderlineX1, signatureUnderlineY, signatureUnderlineX2, signatureUnderlineY);
    }
    return pdfObject;
  }

  public static pdfGenerator(element, pageBreakMethod?): Promise<jsPDF> {
    const generator = html2pdf();

    return generator.from(element).set({
      margin: [.5, 0, 1, 0],
      html2canvas: {
        scale: 1,
        logging: false,
        useCORS: true
      },
      image: {
        type: 'jpeg',
        quality: 1
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'p'
      },
      pagebreak: pageBreakMethod || {
        mode: ['css', 'avoid-all']
      }
    }).toPdf().get('pdf');
  }

  public static prepareTreatmentsForDocuments(patientData: Data, treatmentsOrder: TreatmentType[]): DocumentTreatment[] {
    const treatments = [];
    const patient = R.clone(patientData);
    patient.treatmentEngine.forEach(item => {
      item.treatments.forEach((treat: any) => {
        treat.details = treat.details.filter(detail => detail.isSelected);
        treat.icdCode = item.icdCode;
        treat.icdDesc = item.icdDesc;
      });
      treatments.push(
        ...item.treatments
          .filter(treat => treat.details.length && treat.type !== TreatmentTypesEnum.RETURN_TO_WORK_SCHOOL_STATUS)
      );
    });
    const treatmentsByTypes: any = R.groupBy(R.prop('type'), treatments);
    Object.keys(treatmentsByTypes).forEach(key => {
      let detailsArray = [];
      const item = treatmentsByTypes[key];
      item.forEach(el => {
        el.details = el.details.map(detail => {
          detail.icdCode = el.icdCode;
          detail.icdDesc = el.icdDesc;
          return detail;
        });
        detailsArray = detailsArray.concat(el.details);
      });
      treatmentsByTypes[key] = R.groupBy(R.prop('name'), detailsArray);
    });
    const documentTreatments: DocumentTreatment[] = Object.keys(treatmentsByTypes).map((key: TreatmentType) => {
      const oldTreatment = treatmentsByTypes[key];
      const treatment: DocumentTreatment = {
        type: key,
        treatmentsArray: []
      };
      treatment.treatmentsArray = Object.keys(oldTreatment).map(treatKey => {
        const icdDescs = oldTreatment[treatKey].map(item => item.icdDesc);
        const icdCodes = oldTreatment[treatKey].map(item => item.icdCode);
        const treat: DocTreatmentItem = {
          name: treatKey,
          icdDescs: icdDescs,
          icdCodes: icdCodes,
          drugInformation: null
        };
        if (key.toLowerCase().indexOf('drug') > -1) {
          treat.drugInformation = patient.drugInformation.find(
            drug => drug.drugName.toLowerCase() === treatKey.toLowerCase()
          );
          treat.drugInformation.frequency = PVFrequencyEnum[treat.drugInformation.frequency];
        } else delete treat.drugInformation;
        return Object.assign(oldTreatment[treatKey][0], treat);
      });
      if (treatment.type === TreatmentTypesEnum.DISCHARGE_DISPOSITION) {
        const primaryIllness = patient.illnessInformation.selected_illnesses.find(item => item.is_primary);
        treatment.treatmentsArray[0].icdCodes = [primaryIllness.icd10_code];
        treatment.treatmentsArray[0].icdDescs = [primaryIllness.icd10_name];
      }
      return treatment;
    });
    return R.sort(
      (a: any, b: any) => treatmentsOrder.indexOf(a.type) - treatmentsOrder.indexOf(b.type),
      documentTreatments
    );
  }

  public getTreatments(patient: Data, treatmentName: string): Set<string> {
    const treatments: Set<string> = new Set();
    if (!patient) return treatments;

    patient.treatmentEngine.forEach(illness => {
      const found = illness.treatments.find(treatment => treatment.type === treatmentName);
      if (found) found.details.forEach(dischargeDispositionDetail => {
        if ('isSelected' in dischargeDispositionDetail && dischargeDispositionDetail.isSelected === true) {
          treatments.add(dischargeDispositionDetail.name);
        }
      });
    });

    return treatments;
  }

  public getDrugs(patient: Data, drugName: string): any[] {
    let drug = {};
    const drugs = [];

    patient.treatmentEngine.forEach(illness => {
      const treatmentType = illness.treatments.find(treatment => treatment.type === drugName);
      if (treatmentType) treatmentType.details.forEach(drugDetail => {
        const drugInstructions = patient.drugInformation.find(info => info.drugName.toLowerCase() === drugDetail.name.toLowerCase());
        if (drugInstructions && drugDetail.isSelected === true && !drugs.find(added => added.name === drugDetail['name'])) {
          drug = drugDetail;
          drug['instr'] = drugInstructions;
          drugs.push(drug);
          drug = {};
        }
      });
    });

    return drugs;
  }


  public validateDate(from, to) {
    const fromDate = new Date(from);
    const toDate = to ? new Date(to) : null;

    if (toDate && fromDate > toDate) {
      this.dateValidationError.next({body: '\'To:\' field has an earlier date than \'From:\'', title: 'Wrong date'});
    }
  }

  public get getDocsSpanish() {
    return this.docsSpanish;
  }

  public set setAuthorizationSpanish(state: boolean) {
    this.docsSpanish.authorization = state;
  }

  public set setDischargeSpanish(state: boolean) {
    this.docsSpanish.discharge = state;
  }

  public uploadDocument(documentType: string, patientId: string, pdf: File, doctorNotesId?: number): Observable<{ message: string }> {
    const data = new FormData();
    data.append('file', pdf);
    if (doctorNotesId) data.append('doctor_note_id', String(doctorNotesId));
    return this.http.post<{ message: string }>(
      `${environment.apiDomain}/api/patients/${patientId}/patient_document/upload/${documentType}/`,
      data,
      { params: { addWorker: '' } }
    );
  }

  public reportArticleReview(articles: DischargeInstruction[]): void {
    const header: HttpHeaders = new HttpHeaders({'X-API-KEY': environment.cntAPIKey });
    articles = articles.map(item => ({ ...item, id: item.articleId }));
    this.http.post<{ error: string; recordIds: string[]; reportedCount: number; }>(
      `${environment.cntAPIURL}usage/report`,
      { contents: articles },
      { headers: header, params: { addWorker: '' } }
      ).pipe(catchError(() => ObservableOf(null))).subscribe();
  }

}
