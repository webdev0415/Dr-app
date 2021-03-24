export interface DischargeDocsInterface {
  medicationInstructions: string;
  patientGivenInfoQuit: boolean;
  conditionHangoutsGiven: boolean;
  homeHealthAgencyName: string;
  hhaPhoneNumber: string;
  hhanNA: boolean;
  equipmentNA: boolean;
  equipment: string;
  equipmentProvidedBy: string;
  equipmentPhone: string;
  equipmentProvidedDate: string;
  responsiblePerson: string;
  foodMedProvided: boolean;
  medications: any[];
}
