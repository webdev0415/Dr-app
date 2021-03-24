import { SafeResourceUrl } from '@angular/platform-browser';
import { Photo } from '../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/photo.interface';
import { BehaviorData } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/behavior-data/behavior-data.interface';
import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { AuditMeasurementsTypes } from '../../../../../pharmacist/src/lib/side-models/common/types/audit-measurement.type';
import { Measurement } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { VisitInformation } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/patient-data/visit-information.interface';
import { DrugInformation } from 'treatments/treatments.interface';
import { TreatmentEngine } from '../../treatments/treatments.interface';
import { DatetimeDifference } from '../../utils/dateTime';
import { OrderStateEnum } from '../enums';
import { DiagnosticEngine, IllnessesInformation } from '../interfaces/diagnostic-engine.interface';
import { DescriptionItem } from '../interfaces/physical-exams.interfaces';
import { HealthHistory } from './healthHistory.model';



export interface Addres {
  zip: string;
  state: string;
  type: string;
  addressLine2: string;
  countryCode: string;
  addressLine1: string;
  city: string;
}

export interface ContactInformation {
  address: Addres;
}

export interface PatientInformation {
  ethnicity: string[];
  email?: any;
  birthDate: string;
  lastName: string;
  patientId: string;
  photo: Photo;
  gender: string;
  firstName: string;
  contactInformation: ContactInformation;
  phone: any[];
  middleName?: string;
  age: DatetimeDifference;
  pregnancyStatus?: string;
  idCard: any;
  insuranceCard?: any;
  secordaryInsuranceCard?: any;
  lastMenstruationDate?: string;
  otherMenstrualStatus?: string;
}

export interface Allergy {
  dateAdded: string;
  dateDetected: string;
  allergy: string[];
  symptomId: string;
}

export interface Immunization {
  dateAdded: string;
  dateDetected: string;
  immunization: any[];
  symptomId: string;
}

export interface PatientSocialHistory {
  smokingEndDate?: any;
  smokingStartDate: string;
  lastDrinkDate: string;
  drinkingStartDate?: string;
  drinkingEndDate?: string;
  alcoholConsumer: boolean;
  caffeineConsumer: boolean;
}

export interface Medication {
  dateAdded: string;
  dateDetected: string;
  medication: string[];
  symptomId: string;
}


export interface PreviousVisits {
  dateAdded: string;
  dateDetected: string;
  externalID: string;
  familyRelationship: string;
  historyItem: string;
  historyType: string;
  historyValue: boolean;
  id: number;
  itemType: string;
  symptomID: string;
}

export interface Data {
  triage: Triage[];
  visitInformation: VisitInformation;
  treatmentEngine: TreatmentEngine[];
  patientInformation: PatientInformation;
  patientHealthHistory: HealthHistory;
  diagnosticEngine: DiagnosticEngine[];
  unlikelyDiagnosticEngine: Omit<DiagnosticEngine, 'source'>[];
  measurements: Measurement[];
  behavioralScreening: BehaviorData[];
  orders: Orders;
  injections: any;
  medications: any;
  additionalInformation?: PatientAdditionalInformation;
  drugInformation?: DrugInformation[];
  illnessInformation?: IllnessesInformation;
  dataSource?: string;
  schemaVersion?: number;
  illness?: any[];
  recommendedLabs?: string[];
  recommendedLabsV2?: {[key: string]: string[]};
  dischargeNotes?: {
    saved?: boolean;
    data: DischargeNotes;
  };
  sportsExam?: {
    saved?: boolean;
    data: SportsExam;
  };
  mediaReviewed?: any;
  treatmentsDirty?: boolean;
}

export interface Orders {
  orderedLabs?: string[];
  orderedMeasurements?: string[];
  selectedLabs?: string[];
  selectedMeasurements?: string[];
  labsState: OrderStateEnum;
  measurementsState: OrderStateEnum;
}

export interface DrugAllergy {
  conflict: string;
  potentialDrugs?: string[];
}

export interface DrugConflict {
  conflict: string;
  potentialDrugs?: string[];
}

export interface DrugPrecaution {
  conflict: string;
  potentialDrugs?: string[];
}

export interface PhysicalExamCover {
  doctor_id: number;
  updated_at: string;
  items: PhysicalExam[];
}

export interface PhysicalExam {
  examName: string;
  examType?: 'physical' | 'virtual';
  examResults: string;
  addedExams: any[];
  descriptions?: DescriptionItem[];
}

export interface Audits {
  results?: Audit[];
}

export interface Audit {
  created_at?: string;
  description?: string;
  file_type?: string;
  measurement_type?: AuditMeasurementsTypes;
  media_type?: string | null;
  media_uid?: string;
  name?: string;
  s3?: string;
  s3Blob?: SafeResourceUrl;
  session_key?: string;
  size?: number;
  status?: string;
}

export interface Vitals {
  BP: {SYSTOLIC: number, DIASTOLIC: number};
  WEIGHT: number;
  PULSE: number;
  BLOOD_OXYGEN: number;
  HEIGHT: number;
  TEMPERATURE: number;
}

export const enum NotesTabs {
  Diagnostic,
  Treatment,
  Other,
  MedicationInstructions,
  SchoolNotes,
  WorkNotes,
  TherapyOrders,
  Doc2Doc,
  SportsPhysical,
  SportsCleared,
}

export interface RemoteLogEvent {
  event_type: 'INFO' | 'ERROR';
  message: string;
}

export interface DischargeNotes {
  foodMedProvided: boolean;
  patientGivenInfoQuit: boolean;
  conditionHangoutsGiven: boolean;
  hhanNA: boolean;
  equipmentNA: boolean;
  medicationInstructions: string;
  homeHealthAgencyName: string;
  hhaPhoneNumber: string;
  equipment: string;
  equipmentProvidedBy: string;
  equipmentPhone: string;
  equipmentProvidedDate: string;
  doNotGoToWork: boolean;
  doNotGoToSchool: boolean;
  doNotGoToPE: boolean;
  donotFrom: string;
  donotTo: string;
  limitedFrom: string;
  limitedTo: string;
  notes: string;
  responsiblePerson: string;
  lpnRnMd: string;
}

export interface SportsExam {
  eqpupils: boolean;
  corrected: boolean;
  address: string;
  phone: string;
  signature: string;
}

export type PaymentMethod = 'CASH' | 'CARD';
export interface PaymentInfo {
  id: number;
  type: PaymentMethod;
  customer_copay: string | number | null;
  kiosk_copay: string | number | null;
  kiosk_payment: string | number | null;
  due: string | number;
}

export type MediaType = 'Nose' | 'Mouth' | 'Ears' | 'Heart' | 'Abdomen' | 'Lungs';

export interface SportsPhysical {
  name: string;
  normal?: boolean;
  abnormal?: string;
}

export interface PatientAdditionalInformation {
  additionalDoctorNotes?: string;
  definedIcdCodes?: any[];
  knownDrugAllergies?: DrugAllergy[];
  knownDrugConflicts?: DrugConflict[];
  knownPrecautionConflicts?: DrugPrecaution[];
  treatmentDoctorNotes?: string;
  diagnosticDoctorNotes?: string;
  medicationInstructions?: string;
  schoolNotes?: string;
  workNotes?: string;
  therapyOrders?: string;
  doc2doc?: string;
  physicalExam?: PhysicalExam[];
  sportsPhysical?: SportsPhysical[];
  sportsCleared?: SportsCleared;
}

export interface SportsCleared {
  cleared: string;
  sports: string;
  reason: string;
  recommendations: string;
}

export { Measurement, AuditMeasurementsTypes, Triage, Photo, VisitInformation };

