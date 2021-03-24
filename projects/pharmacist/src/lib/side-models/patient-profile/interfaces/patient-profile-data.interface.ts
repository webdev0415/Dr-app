import { PatientProfile, PatientProfileDto } from './patient-profile.interface';
import { PatientContactInformation, PatientContactInformationDto } from './patient-contact-information.interface';
import { PatientUserData, PatientUserDataDto } from './patient-user-data.interface';

export interface PatientProfileData {
  patientProfile: PatientProfile;
  contactRecord: PatientContactInformation;
  patient: PatientUserData;
}

export class PatientProfileDataDto implements PatientProfileData {
  contactRecord: PatientContactInformationDto;
  patient: PatientUserDataDto;
  patientProfile: PatientProfileDto;
  constructor(data: Partial<{ contactRecord: Partial<PatientContactInformation>; patient: Partial<PatientUserData>; patientProfile: Partial<PatientProfile> }>) {
    const { contactRecord, patient, patientProfile } = data;
    this.contactRecord = new PatientContactInformationDto(contactRecord);
    this.patient = new PatientUserDataDto(patient);
    this.patientProfile = new PatientProfileDto(patientProfile);
  }
}
