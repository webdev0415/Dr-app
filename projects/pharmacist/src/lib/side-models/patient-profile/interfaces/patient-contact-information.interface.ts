import { PatientPhoneEnum } from '../enums/patient-phone.enum';

export interface PatientContactInformation {
  emailAddressList: string[];
  phoneNumberList: { [key in keyof typeof PatientPhoneEnum]: string }[];
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  countryCode: string;
  primaryPhoneType: PatientPhoneEnum;
}

export class PatientContactInformationDto implements PatientContactInformation {
  addressLine1 = '';
  addressLine2 = '';
  city = '';
  countryCode = '';
  emailAddressList = [];
  phoneNumberList = [];
  primaryPhoneType: PatientPhoneEnum;
  state = '';
  zip = '';
  constructor(contactInformation: Partial<PatientContactInformation>) {
    if (contactInformation) Object.keys(contactInformation).forEach(key => this[key] = contactInformation[key]);
  }
}
