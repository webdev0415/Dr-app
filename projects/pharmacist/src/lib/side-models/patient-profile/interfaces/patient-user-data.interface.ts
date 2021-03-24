import { PatientPhoneEnum } from '../enums/patient-phone.enum';

export interface PatientUserData {
  passwordAuthActive: boolean;
  smsAuthActive: boolean;
  primaryPhoneNumber: string;
  primaryPhoneType: PatientPhoneEnum;
  fingerAuthActive: boolean;
}

export class PatientUserDataDto implements PatientUserData {
  fingerAuthActive = null;
  passwordAuthActive = null;
  primaryPhoneNumber = '';
  primaryPhoneType = null;
  smsAuthActive = null;
  constructor(userInformation: Partial<PatientUserData>) {
    if (userInformation) Object.keys(userInformation).forEach(key => this[key] = userInformation[key]);
  }
}
