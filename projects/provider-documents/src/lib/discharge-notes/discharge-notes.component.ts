import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DocumentsService } from '../../../../provider-documents/src/lib/services/documents.service';
import { Data } from '../../../../provider-app/src/app/common/models/data.model';
import { DischargeDocsInterface } from '../../../../provider-app/src/app/common/interfaces/discharge-docs.interface';

import { TextMaskConfig } from 'angular2-text-mask';
import { DischargeInstruction } from '../../../../provider-app/src/app/discharge/discharge.interface';
import { DocTreatmentItem, DocumentTreatment } from '../../../../provider-app/src/app/common/interfaces/documents.interface';
import { treatmentsOrder } from '../../../../provider-app/src/app/treatments/static/static.treatments';
import { TreatmentTypesEnum } from '../../../../provider-app/src/app/treatments/enum/treatment-types.enum';
import { TreatmentType } from '../../../../provider-app/src/app/treatments/treatments.type';

@Component({
  selector: 'doc-discharge-notes',
  templateUrl: './discharge-notes.component.html',
  styleUrls: ['./discharge-notes.component.scss']
})
export class DischargeNotesComponent implements OnInit, OnDestroy {

  @Input() completedDoctor: string;
  @Input() patient: Data;
  @Input() date: string;
  @Input() dischargeArticles: DischargeInstruction[] = [];
  @Input() customArticles: string;
  @Output() update = new EventEmitter();
  @Output() naClick = new EventEmitter();
  @Output() articleReview = new EventEmitter<DischargeInstruction>();

  public data: DischargeDocsInterface = {
    medicationInstructions: null,
    patientGivenInfoQuit: null,
    conditionHangoutsGiven: null,
    homeHealthAgencyName: null,
    hhaPhoneNumber: null,
    hhanNA: null,
    equipmentNA: null,
    equipment: null,
    equipmentProvidedBy: null,
    equipmentPhone: null,
    equipmentProvidedDate: null,
    responsiblePerson: null,
    foodMedProvided: null,
    medications: null
  };

  public treatmentTypes = TreatmentTypesEnum;
  public treatments: DocumentTreatment[];
  public dateInputMask: TextMaskConfig = {
    mask: [/[0,1]/, /[0-2]/, '/', /[0-3]/, /[0-9]/, '/', /2/, /0/, /\d/, /\d/],
    guide: true,
    showMask: true
  };

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.getNotes();
    if (this.patient.patientInformation.age.years >= 18) {
      const pInfo = this.patient.patientInformation;
      this.data.responsiblePerson = `${pInfo.firstName} ${pInfo.middleName} ${pInfo.lastName}`;
    }
    this.prepareTreatments();
  }

  get getSmokingStatus(): boolean {
    const healthHistory = this.patient.patientHealthHistory;
    return  (healthHistory.smokingStartDate && !healthHistory.smokingEndDate);
  }

  get getDischargeDisposition(): Set<string> {
    return this.documentsService.getTreatments(this.patient, 'Discharge Disposition');
  }

  get getDietNutrition(): Set<string> {
    return this.documentsService.getTreatments(this.patient, 'Diet');
  }

  get getMedications(): any[] {
    return this.documentsService.getDrugs(this.patient, 'Prescription Drugs');
  }

  get getHomeMedications(): any[] {
    return this.documentsService.getDrugs(this.patient, 'OTC Drugs');
  }

  private getNotes() {
    Object.keys(this.data).forEach(key => this.data[key] = this.patient.dischargeNotes.data[key]);
    this.data.medicationInstructions = this.getMedicationInstructions();
  }

  private getMedicationInstructions(): string {
    const isDischargeNotes: boolean = 'additionalInformation' in this.patient && 'medicationInstructions' in this.patient.additionalInformation;
    const isClerksDischargeNotes: boolean = Boolean(this.patient.dischargeNotes && this.patient.dischargeNotes.data.medicationInstructions);
    const medicationInstructions: string = isClerksDischargeNotes
      ? this.patient.dischargeNotes.data.medicationInstructions
      : isDischargeNotes
        ? this.patient.additionalInformation.medicationInstructions
        : '';
    const isTreatmentDoctorNotes: boolean = Boolean(this.patient.additionalInformation && this.patient.additionalInformation.treatmentDoctorNotes);
    const treatmentDoctorNotes: string = isTreatmentDoctorNotes ? this.patient.additionalInformation.treatmentDoctorNotes : '';
    const lineBreak = isTreatmentDoctorNotes ? '\n\n' : '';

    return `${treatmentDoctorNotes}${lineBreak}${medicationInstructions}`;
  }

  private prepareTreatments(): void {
    this.treatments = DocumentsService.prepareTreatmentsForDocuments(this.patient, treatmentsOrder);
  }

  getTreatmentsOfSpecifiedType(type: TreatmentType): DocTreatmentItem[] {
    const documentTreatment =  this.treatments.find(treatment => treatment.type === type);
    return documentTreatment && documentTreatment.treatmentsArray && documentTreatment.treatmentsArray.length ? documentTreatment.treatmentsArray : null;
  }

  ngOnDestroy() {
    this.update.emit({
      section: 'discharge',
      data: this.data
    });
  }

  public reviewReport(article: DischargeInstruction): void {
    this.articleReview.emit(article);
  }

}
