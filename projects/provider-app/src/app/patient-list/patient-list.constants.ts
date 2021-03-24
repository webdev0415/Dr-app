export const patientStatusIconGroups: string[] = [
  'labs',
  'vitals',
  'medications',
  'injections'
];

export const closePatientReasons = [{
    icd10_name: 'Patient Left',
    icd10_code: 'Z53.21'
  },
  {
    icd10_name: `Won't see`,
    icd10_code: 'Z53.9'
  },
  {
    icd10_name: 'Drug Screen',
    icd10_code: 'Z02.89'
  },
  {
    icd10_name: 'Test Patient',
    icd10_code: 'Z02.9'
  }
];

export enum genderIcons {
  'MALE' = 'mars',
  'FEMALE' = 'venus',
  'TRANSGENDER' = 'transgender'
}

export enum patientStatusEnum {
  complete = 'TREATMENT_COMPLETE',
  waiting = 'PATIENT_WAITING',
  telemedicine = 'PATIENT_WAITING_TELEMEDICINE',
  withDoctor = 'PATIENT_WITH_DOCTOR',
  inKiosk = 'IN_KIOSK',
  registered = 'REGISTERED'
}

export const defaultTableHeaders: { value: string; label: string; sortable: boolean; }[] = [
  {value: 'patient_id', label: 'ID', sortable: false},
  {value: 'telemedecine_url', label: '', sortable: false},
  {value: 'patient_name', label: 'Name', sortable: true},
  {value: 'patient_complaint', label: 'Complaint', sortable: false},
  {value: 'clinicName', label: 'Location', sortable: false},
  {value: 'kiosk_complete', label: 'Waiting time', sortable: true},
  {value: 'ehr_status', label: 'EHR Status', sortable: false},
  {value: 'assign', label: '', sortable: false},
];
