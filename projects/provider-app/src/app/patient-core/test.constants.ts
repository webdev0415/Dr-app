import { testPatientProfile } from '../../../../patient-profile/src/lib/test.constants';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { PatientPhoneEnum } from '../../../../pharmacist/src/lib/side-models/patient-profile/enums/patient-phone.enum';
import { PatientContactInformation } from '../../../../pharmacist/src/lib/side-models/patient-profile/interfaces';
import { SocialCard } from '../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';
import { PESystem } from '../common/interfaces/physical-exam-panel.interfaces';
import { VisitInformation } from '../common/models/data.model';
import { HealthHistory } from '../common/models/healthHistory.model';
import { CustomSubSystem } from '../physical-exam/physical-exams.constants';

export const testMeasurements: Measurement[] = [
  {
    measureType: 'DIASTOLIC',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:28:20.183000+00:00',
    value: {
      bodySide: '',
      value: 66,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'SYSTOLIC',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:28:20.183000+00:00',
    value: {
      bodySide: '',
      value: 122,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'WEIGHT',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:28:16.655000+00:00',
    value: {
      bodySide: '',
      value: 121,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'TEMPERATURE',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:28:14.448000+00:00',
    value: {
      bodySide: '',
      value: 95,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'PULSE',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:28:10.840000+00:00',
    value: {
      bodySide: '',
      value: 60,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'BLOOD_OXYGEN',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:28:10.839000+00:00',
    value: {
      bodySide: '',
      value: 99,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'HEIGHT',
    trustabilityScore: 5,
    timestamp: '2019-08-28T15:26:44.909000+00:00',
    value: {
      bodySide: '',
      value: 67,
      bodyPart: '',
      status: '',
      fileType: '',
      fileName: '',
      createdAt: '',
      file: ''
    }
  },
  {
    measureType: 'MEAN_ARTERIAL_PRESSURE',
    trustabilityScore: 0,
    timestamp: '2019-12-30T05:24:58.903768+00:00',
    value: {
      bodyPart: '',
      bodySide: '',
      createdAt: '',
      file: '',
      fileName: '',
      fileType: '',
      status: '',
      value: 0
    }
  },
  {
    measureType: 'OTOSCOPE',
    trustabilityScore: 0,
    timestamp: '2019-12-30T05:24:58.903785+00:00',
    value: {
      bodyPart: '',
      bodySide: '',
      createdAt: '',
      file: '',
      fileName: '',
      fileType: '',
      status: '',
      value: 0
    }
  },
  {
    measureType: 'STETHOSCOPE',
    trustabilityScore: 0,
    timestamp: '2019-12-30T05:24:58.903796+00:00',
    value: {
      bodyPart: '',
      bodySide: '',
      createdAt: '',
      file: '',
      fileName: '',
      fileType: '',
      status: '',
      value: 0
    }
  }
];
const testVisitInformation: VisitInformation = {
  doctorName: 'radmir test doc',
  doctorId: 355,
  doctorStartTime: '2019-12-30T04:38:15.884758+00:00',
  doctorEndTime: '',
  utcOffset: '',
  locationId: 80,
  initialVisitReason: 'Start Exam',
  detailVisitReason: 'Physical Injury-Pain',
  status: 'PATIENT_WAITING',
  kioskStartTime: '2019-08-28T15:26:45.342260Z',
  kioskEndTime: '2019-12-28T16:02:03.626164Z',
  sessionId: '3b1246c2-43c3-4c60-a482-5ea2ae19a017',
  locationName: 'QA Team - ECW Location',
  kioskName: 'ECWKiosk1'
};
const testHealthHistory: HealthHistory = {
  version: '2.0',
  historyItem: [
    {
      dateAdded: '2019-12-30',
      dateDetected: '2019-12-30',
      historyType: 'Medication Allergies',
      historyItem: 'Vitamin A',
      symptomID: 'SYMPT0000997',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: true,
      customFields: []
    },
    {
      dateAdded: '2019-12-30',
      dateDetected: '2019-12-30',
      historyType: 'Medications',
      historyItem: 'Haloperidol',
      symptomID: 'SYMPT0001218',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: true,
      customFields: []
    },
    {
      dateAdded: '2019-12-30',
      dateDetected: '2019-12-30',
      historyType: 'Blood Transfusion',
      historyItem: '',
      symptomID: 'SYMPT0002469',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: true,
      customFields: []
    },
    {
      dateAdded: '2019-12-30',
      dateDetected: '2019-12-30',
      historyType: 'AIDS/HIV',
      historyItem: '',
      symptomID: 'SYMPT0000042',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: true,
      customFields: []
    },
    {
      dateAdded: '2019-12-30',
      dateDetected: '2019-12-30',
      historyType: 'Born Premature',
      historyItem: '',
      symptomID: 'SYMPT0004116',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: true,
      customFields: []
    },
    {
      dateAdded: '2019-08-28',
      dateDetected: '2019-08-28',
      historyType: 'Medications',
      historyItem: '',
      symptomID: 'SYMPT0001218',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: false,
      customFields: []
    },
    {
      dateAdded: '2019-08-28',
      dateDetected: '2019-08-28',
      historyType: 'Cancer',
      historyItem: '',
      symptomID: 'SYMPT0000020',
      externalID: '',
      familyRelationship: '',
      itemType: 'family',
      historyValue: false,
      customFields: []
    },
    {
      dateAdded: '2019-08-28',
      dateDetected: '2019-08-28',
      historyType: 'Cancer',
      historyItem: '',
      symptomID: 'SYMPT0000050',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: false,
      customFields: []
    },
    {
      dateAdded: '2019-08-28',
      dateDetected: '2019-08-28',
      historyType: 'Medication Allergies',
      historyItem: '',
      symptomID: 'SYMPT0000997',
      externalID: '',
      familyRelationship: '',
      itemType: 'patient',
      historyValue: false,
      customFields: []
    }
  ],
  drinkingStartDate: null,
  drinkingEndDate: null,
  lastDrinkDate: null,
  smokingStartDate: null,
  smokingEndDate: null,
  patientOtherCancer: '',
  familyOtherCancer: '',
  medsAllergyReactions: '',
  otherSurgery: '',
  otherDrugs: '',
  pharmacies: []
};
const testContactRecord: PatientContactInformation = {
  'zip': '12312',
  'emailAddressList': [
    'arthur.lixiao@gmail.com'
  ],
  'addressLine1': 'asdf',
  'addressLine2': '',
  'state': 'AZ',
  'city': 'asdf',
  'phoneNumberList': [
    { 'CELL': '3253072465' }
  ] as PatientContactInformation['phoneNumberList'],
  'countryCode': '+1',
  primaryPhoneType: PatientPhoneEnum.CELL
};

export const testSocialCard: SocialCard = new SocialCard(testPatientProfile, testHealthHistory, testVisitInformation, testMeasurements, testContactRecord);

export const testPESystem: PESystem = {
  descriptionsArray: [{
    description: 'test',
    edited: false,
    mod: [
      {
        selected: true,
        edited: false,
        text: 'test',
        normal: false,
        key: 'testKey',
        code: 'testCode',
        defaultNormal: true,
        commonFindingFor: ['right ear']
      },
      {
        selected: true,
        edited: false,
        text: 'test2',
        normal: false,
        key: 'testKey2',
        code: 'testCode2',
        defaultNormal: true,
        commonFindingFor: ['right ear']
      }
    ],
    normal: false,
    selected: false,
    buttonText: 'test',
    defaultNormal: true
  }, {
    description: CustomSubSystem.TMDescription,
    edited: false,
    mod: [
      {
        selected: true,
        edited: false,
        text: 'test1',
        normal: false,
        key: 'testKey1',
        code: 'testCode1'
      }
    ],
    normal: false,
    selected: false,
    buttonText: 'test',
    defaultNormal: false
  }],
  examName: 'ENT'
};
