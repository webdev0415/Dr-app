import { GenderEnum, PatientPhoneEnum } from './enums';
import { PatientProfile, PatientContactInformation } from './interfaces';

export const testContactInformation: PatientContactInformation = {
  zip: '90001',
  stopDate: null,
  startDate: '2019-08-28',
  emailAddressList: [
    'adelina@betterqa.co'
  ],
  'addressLine1': '1206 E LEMON ST APT 19',
  'addressLine2': '',
  state: 'AZ',
  city: 'Los Angeles',
  // @ts-ignore
  phoneNumberList: [{CELL: '2020258094'}],
  countryCode: '+1',
  primaryPhoneType: PatientPhoneEnum.CELL
};
export const testPatientProfile: PatientProfile = {
  gender: GenderEnum.TRANSGENDER,
  maritalStatus: 'SINGLE',
  birthDate: '1988-05-04',
  ethnicity: [
    'Asian',
    'Mediterranean',
    'Pacific Islander',
    'Hispanic',
    'American Indian',
    'Other',
    'Indian',
    'Middle Eastern',
    'Caucasian',
    'Black/African American'
  ],
  photo: {
    mediaUid: 'patient_1567006004913_2019-08-28T15_26_45_808193.png',
    size: 35131,
    status: 'AVAILABLE',
    's3': 'https://kiosk-users-general.s3.amazonaws.com/patient_1567006004913_2019-08-28T15_26_45_808193.png?AWSAccessKeyId=AKIAI6OY4V3KUBW6KUTA&Signature=Ib%2F1g7uQf%2BWTb0ow8um8%2BiUmt4M%3D&Expires=1577687097',
    createdAt: '2019-08-28T15:26:44.913000Z',
    name: 'patient_1567006004913.png',
    fileType: ''
  },
  noPcp: false,
  marketingOptIn: true,
  primaryCarePhysician: '',
  pcpId: null,
  nextOfKin: '',
  guardian: null,
  patientId: 82146,
  isTest: false,
  pregnancyStatus: 'no',
  lastMenstruationDate: '2019-08-28',
  hasMenstruation: true,
  isMenopausal: false,
  otherMenstrualStatus: '',
  height: 67,
  firstName: 'Insurance',
  middleName: 'P',
  lastName: 'Joan',
  email: 'adelina@betterqa.co',
  age: {
    years: 31,
    months: 7,
    days: 26,
    hours: 4,
    minutes: 24,
    seconds: 58,
    milliseconds: 276
  }
};

