import { GenderEnum } from '../enums/gender.enum';
import { DatetimeDifference } from '../../common/utils/dateTime';
import { Photo } from './photo.interface';
import { PatientPhoneEnum } from '../enums/patient-phone.enum';

export interface PatientProfile {
  gender: GenderEnum;
  maritalStatus: string;
  phoneNumberList: { [key in keyof typeof PatientPhoneEnum]: string }[];
  birthDate: string;
  age: DatetimeDifference;
  ethnicity: string[];
  photo: Photo;
  noPcp: boolean;
  marketingOptIn: boolean;
  primaryCarePhysician: string;
  pcpId: number;
  nextOfKin: string;
  guardian: any;
  patientId: number;
  isTest: boolean;
  pregnancyStatus: string;
  lastMenstruationDate: string;
  hasMenstruation: boolean;
  isMenopausal: boolean;
  otherMenstrualStatus: string;
  height: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
}

export class PatientProfileDto implements PatientProfile {
  age = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };
  phoneNumberList = [];
  birthDate = '';
  email = '';
  ethnicity = [];
  firstName = '';
  gender = null;
  guardian = '';
  hasMenstruation = null;
  height = null;
  isMenopausal = null;
  isTest = null;
  lastMenstruationDate = '';
  lastName = '';
  maritalStatus = '';
  marketingOptIn = null;
  middleName = '';
  nextOfKin = '';
  noPcp = null;
  otherMenstrualStatus = '';
  patientId = null;
  pcpId = null;
  photo = null;
  pregnancyStatus = '';
  primaryCarePhysician = '';
  constructor(profileData: Partial<PatientProfile>) {
    if (profileData) Object.keys(profileData).forEach(key => { this[key] = profileData[key]; });
  }

}
