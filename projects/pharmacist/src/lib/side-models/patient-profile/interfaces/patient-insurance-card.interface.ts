import { Photo } from './photo.interface';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface PatientInsuranceCard {
  cardId: number;
  primaryInsurance: boolean;
  patient: string;
  status: string;
  memberId: string;
  planId: string;
  groupId: string;
  insuranceProvider: string;
  policyHolder: string;
  policyHolderDOB: string;
  providerPhoneNumber: string;
  providerAddressLine1: string;
  providerAddressLine2: string;
  providerCity: string;
  providerState: string;
  providerZip: string;
  memberPatientRelationship: string;
  memberDependents: string[];
  cardImage: Array<Photo & { side: 'FRONT' | 'BACK'; blob: SafeResourceUrl }>;
}
