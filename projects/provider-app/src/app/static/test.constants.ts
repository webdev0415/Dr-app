import {
  Addres,
  ContactInformation,
  Data,
  Immunization,
  PatientAdditionalInformation,
  PatientInformation,
  PatientSocialHistory,
  PaymentInfo,
  PreviousVisits,
  VisitInformation
} from 'common/models/data.model';
import { DatetimeDifference } from 'utils/dateTime';
import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { HistoryItem } from '../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';
import { Photo } from '../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/photo.interface';
import { Value } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement-value.interface';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { DrugInformation } from '../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-information.interface';
import { HealthHistory} from '../common/models/healthHistory.model';
import { defaultDischargeNotes, sportsCleared, sportsPhysicalTable } from './patient.constants';
import { PatientListEntity } from '../patient-list/interfaces/patient-list-entity.model';
import { GenderEnum } from '../../../../patient-profile/src/lib/enums';
import { DocumentFinalizeFiles } from '../common/types/documents.type';

export const testDirections = {
  fields: [
    {
      'fake': true,
      'blockType': 'action',
      'blockName': 'take',
      'instructions': [
        {
          'typeName': 'quan',
          'value': '1'
        },
        {
          'typeName': 'unit',
          'value': 'pill(s)'
        },
        {
          'typeName': 'modifier',
          'value': []
        }
      ]
    },
    {
      'blockType': 'frequency',
      'blockName': 'time(s) per',
      'instructions': [
        {
          'typeName': 'int',
          'value': '1'
        },
        {
          'typeName': 'tf',
          'value': 'day(s)'
        }
      ]
    },
    {
      'blockType': 'duration',
      'blockName': 'for',
      'instructions': [
        {
          'typeName': 'int',
          'value': '1'
        },
        {
          'typeName': 'tf',
          'value': 'day(s)'
        }
      ]
    },
    {
      'blockType': 'combine',
      'blockName': '',
      'instructions': null
    }
  ],
  modifiers: [],
  selectValues: {
    'action': {
      'take': [
        'none',
        'take',
        'apply',
        'inhale',
        'Custom'
      ],
      'quantity': [
        'none',
        '1/8',
        '1/4',
        '1/2',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        'Custom'
      ],
      'unit': [
        'none',
        'tsp',
        'ml',
        'cc',
        'pill(s)',
        'drop(s)',
        'spray(s)',
        'puff(s)',
        'Custom'
      ]
    },
    'frequency': {
      'take': [
        'none',
        'once',
        'every',
        'in',
        'on',
        'time(s) per',
        'Custom'
      ],
      'quantity': [
        'none',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'Custom'
      ],
      'unit': [
        'none',
        'hour(s)',
        'day(s)',
        'week(s)',
        'month(s)',
        'Custom'
      ]
    },
    'duration': {
      'take': [
        'none',
        'for',
        'Custom'
      ],
      'quantity': [
        'none',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'Custom'
      ],
      'unit': [
        'none',
        'hour(s)',
        'day(s)',
        'week(s)',
        'month(s)',
        'Custom'
      ]
    },
    'combine': {
      'take': [
        'none',
        'then',
        'Custom'
      ],
      'quantity': null,
      'unit': null
    }
  }
};

export const testDiagnosticEngine = [
  {
    confidence: 0.03318352252244949,
    contributors: [
      {
        contribution: 0.0329,
        symptomId: 'SYMPT0003040',
        symptomName: 'Whole body swelling'
      }
    ],
    doctorAdded: false,
    iCriticality: 1,
    icd10: 'J04.0',
    icdGroup: 'Acute laryngitis and tracheitis',
    icdName: 'Acute laryngitis',
    isSelected: false,
    isPrimary: false
  }, {
    confidence: 0.03318352252244949,
    contributors: [],
    doctorAdded: false,
    iCriticality: 1,
    icd10: 'J04.11',
    icdGroup: 'Acute laryngitis and tracheitis',
    icdName: 'Acute tracheitis with obstruction',
    isSelected: false,
    isPrimary: false
  }, {
    confidence: 0.03318352252244949,
    contributors: [],
    doctorAdded: false,
    iCriticality: 1,
    icd10: 'J05.0',
    icdGroup: 'Test Group',
    icdName: 'Test Name',
    isSelected: false
  }, {
    confidence: 0.03318352252244949,
    contributors: [],
    doctorAdded: false,
    iCriticality: 1,
    icd10: '1',
    icdGroup: 'Symptom Illnesses',
    icdName: 'Acute tracheitis with obstruction',
    isSelected: false,
    isPrimary: false
  }, {
    confidence: 0.03318352252244949,
    contributors: [],
    doctorAdded: false,
    iCriticality: 1,
    icd10: '2',
    icdGroup: 'Other Illnesses Considered',
    icdName: 'Acute tracheitis with obstruction',
    isSelected: true,
    isPrimary: false
  },
];

export const testTreatmentEngineDrugs = [
  {
    icdCode: 'J04.0',
    icdDesc: 'Description',
    treatments: [{
      type: 'Prescription Drugs',
      details: [{
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: false,
        longName: 'As Tolerated',
        name: 'Drug name placeholder',
        nameDetails: 'name Det',
        priority: 17,
        rank: 1,
        reasons: []
      }, {
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: true,
        longName: 'Name 2',
        name: 'Name 2',
        nameDetails: 'name Det 2',
        priority: 18,
        rank: 1,
        reasons: []
      }, {
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: true,
        longName: 'DIGOXIN',
        name: 'DIGOXIN',
        nameDetails: 'name Det 2',
        priority: 18,
        rank: 1,
        reasons: []
      }]
    }]
  }
];

export const testDrugInformation: DrugInformation[] = [
  {
    drugName: 'Asd 3-In-1',
    directionsString: '',
    quantity: '',
    route: '',
    strength: '',
    types: [],
    unit: 'MG',
    frequency: 'Q3h',
    daw: false,
    prn: false,
    dispenseForm: ''
  }
];

export const testTreatmentEngine = [
  {
    icdCode: 'J04.0',
    icdDesc: 'Description',
    treatments: [{
      type: 'Activity',
      details: [{
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: false,
        longName: 'As Tolerated',
        name: 'As Tolerated',
        nameDetails: 'name Det',
        priority: 17,
        rank: 1,
        reasons: []
      }, {
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: true,
        longName: 'Name 2',
        name: 'Name 2',
        nameDetails: 'name Det 2',
        priority: 18,
        rank: 1,
        reasons: []
      }]
    }, {
      type: 'OTC Drugs',
      details: [{
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: false,
        longName: 'OTC Drug 1',
        name: 'OTC Drug 1',
        nameDetails: 'name Det',
        priority: 17,
        rank: 1,
        reasons: []
      }, {
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: false,
        longName: 'Name 2',
        name: 'Name 2',
        nameDetails: 'name Det 2',
        priority: 18,
        rank: 1,
        reasons: []
      }]
    }]
  }, {
    icdCode: 'J10.0',
    icdDesc: 'Description',
    isIllness: true,
    treatments: [{
      type: 'Activity',
      details: [{
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: false,
        longName: 'As Tolerated',
        name: 'As Tolerated',
        nameDetails: 'name Det',
        priority: 17,
        rank: 1,
        reasons: []
      }]
    }]
  }, {
    icdCode: 'J05.0',
    icdDesc: 'Description',
    isIllness: true,
    treatments: [{
      type: 'Activity',
      details: [{
        directions: [],
        doctorAdded: false,
        dosage: '',
        groupName: 'Group Placeholder',
        isDisplayed: false,
        isPreviouslySelected: false,
        isSelected: false,
        longName: 'Activity name',
        name: 'Activity name',
        nameDetails: 'name Det',
        priority: 17,
        rank: 1,
        reasons: []
      }]
    }]
  }
];

export const testVitals = {
  bp: {s: 40, d: 60},
  height: 12,
  oxygen: 95,
  pulse: 85,
  temp: 95,
  weight: 165
};

export const testPatientData: PatientListEntity = {
  'treatment_complete': '',
  'doctor_name': '',
  'session_create': '2018-07-24T18: 19: 01.115457+00: 00',
  'status': 'PATIENT_WAITING',
  'patient_name': 'Symptom K. Test',
  'kiosk_complete': '2018-07-24T19: 23: 06.492339+00: 00',
  'location_id': 18,
  'patient_id': 8809,
  'doctor_id': 0,
  'kiosk': 'WebKiosk1',
  'location_name': 'Shelbys Secret Location',
  'labs': 'none',
  'vitals': 'none',
  'injections': 'none',
  'medications': 'none',
  'ehr_success': false,
  'edb_final': false,
  'is_virtual_doctor': false,
  'telemedecine_url': '',
  appointment_data: {
    'appointment_datetime': '2018-07-24T18: 19: 01.115457+00: 00',
    is_telemedicine: true,
    telemedicine_queue_position: 5,
    telemedicine_queue_time: '2018-07-24T18: 19: 01.115457+00: 00',
    notification_sent: false,
    telemedicine_session_status: false
  },
  'room': '',
  'detail_visit_reason': 'Physical Injury',
  'gender': 'MALE',
  edb_state: 'DOCTOR_STARTED',
  covid_19_possible: true,
  telemedicine_mode: null
};

const MeasurementValue: Value = {
  createdAt: '',
  fileType: '',
  status: 'AVAILABLE',
  fileName: 'test',
  bodySide: '',
  value: 123,
  bodyPart: '',
  file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
};

export const testPatientDataMeasurements: Measurement[] = [
  {
    trustabilityScore: 123,
    measureType: 'HEIGHT',
    timestamp: '',
    value: MeasurementValue
  }, {
    trustabilityScore: 123,
    measureType: 'PULSE',
    timestamp: '',
    value: MeasurementValue,
    temp: true
  }, {
    trustabilityScore: 123,
    measureType: 'WEIGHT',
    timestamp: '',
    value: MeasurementValue
  }, {
    trustabilityScore: 123,
    measureType: 'TEMPERATURE',
    timestamp: '',
    value: MeasurementValue
  }, {
    trustabilityScore: 123,
    measureType: 'BLOOD_OXYGEN',
    timestamp: '',
    value: MeasurementValue
  }, {
    trustabilityScore: 123,
    measureType: 'SYSTOLIC',
    timestamp: '',
    value: MeasurementValue
  }, {
    trustabilityScore: 123,
    measureType: 'DIASTOLIC',
    timestamp: '',
    value: MeasurementValue
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '1',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'heart',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '1',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'heart',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'heart',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/33'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'abdomen',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/33'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '2',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'abdomen',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/44'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'lung',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/55'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '3',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'lung',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/66'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'PENDING',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'heart',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'ear',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'AVAILABLE',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'ear',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
    }
  }, {
    trustabilityScore: 123,
    measureType: 'OTOSCOPE',
    timestamp: '',
    value: {
      createdAt: '',
      fileType: '',
      status: 'PENDING',
      fileName: 'test',
      bodySide: '',
      value: 123,
      bodyPart: 'ear',
      file: 'https://s3-us-west-2.amazonaws.com/classification-media/3c247dc397c1f9357473758617282516.'
    }
  }
];

export const testAudit = [
  {name: 'aud1', description: 'p|s|p-2', measurement_type: 'mt-1'},
  {name: 'aud2', description: 'p|s|Position-1', measurement_type: 'mt-1', status: 'AVAILABLE'},
  {name: 'aud3'},
];

const photo: Photo = {
  status: '',
  fileType: '',
  s3: '',
  name: '',
  size: 123,
  mediaUid: '',
  createdAt: '',
};

const address: Addres = {
  zip: '',
  state: '',
  type: '',
  addressLine2: '',
  countryCode: '',
  addressLine1: '',
  city: ''
};

const contactInformation: ContactInformation = {
  address: address,
};

const age: DatetimeDifference = {
  years: 2,
  months: 1,
  days: 12,
  hours: 6,
  minutes: 6,
  seconds: 6,
  milliseconds: 89
};

export const testPatientInformation: PatientInformation = {
  ethnicity: ['test', 'test2'],
  email: 'test@tt.com',
  birthDate: '2000-02-23',
  lastName: 'Test',
  patientId: '123',
  photo: photo,
  gender: GenderEnum.FEMALE,
  firstName: 'Test',
  contactInformation: contactInformation,
  phone: [''],
  middleName: '',
  age: age,
  pregnancyStatus: '',
  idCard: null,
  insuranceCard: null
};

export const testVisitInformation: VisitInformation = {
  doctorName: 'test',
  kioskName: 'test',
  doctorStartTime: '',
  utcOffset: '',
  status: '',
  doctorId: 1,
  kioskStartTime: '',
  detailVisitReason: 'Ear pain',
  doctorEndTime: '',
  locationName: 'test',
  locationId: 1,
  kioskEndTime: '',
  initialVisitReason: 'test',
  sessionId: 'ses-sio-nid'
};

export const testAllergy: HistoryItem[] = [
  {
    itemType: 'patient',
    historyType: 'Allergies',
    historyItem: 'Latex',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0000044',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  }, {
    itemType: 'patient',
    historyType: 'Allergies',
    historyItem: 'Food',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0000044',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  }
];

export const testPatientMedicalHistory: HistoryItem[] = [
  {
    itemType: 'patient',
    historyType: 'Diabetes',
    historyItem: 'Type 2',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0000056',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  }
];

export const testMedicationAllergy: HistoryItem[] = [{
  itemType: 'patient',
  historyType: 'Medication Allergies',
  historyItem: 'Spf 15',
  historyValue: true,
  familyRelationship: '',
  symptomID: 'SYMPT0000997',
  externalID: '',
  dateDetected: '2019-03-20',
  dateAdded: '2019-03-20',
  customFields: []
}, {
  itemType: 'patient',
  historyType: 'Medication Allergies',
  historyItem: 'Vitamin A',
  historyValue: true,
  familyRelationship: '',
  symptomID: 'SYMPT0000997',
  externalID: '',
  dateDetected: '2019-03-20',
  dateAdded: '2019-03-20',
  customFields: []
}];

export const testMedications: HistoryItem[] = [{
  itemType: 'patient',
  historyType: 'Medications',
  historyItem: 'Cadmium',
  historyValue: true,
  familyRelationship: '',
  symptomID: 'SYMPT0001218',
  externalID: '',
  dateDetected: '2019-03-20',
  dateAdded: '2019-03-20',
  customFields: []
}, {
  itemType: 'patient',
  historyType: 'Medications',
  historyItem: 'Vitamin',
  historyValue: true,
  familyRelationship: '',
  symptomID: 'SYMPT0001218',
  externalID: '',
  dateDetected: '2019-03-20',
  dateAdded: '2019-03-20',
  customFields: []
}];

export const testSurgicalHistory: HistoryItem[] = [
  {
    dateAdded: '2019-03-20',
    dateDetected: '2019-03-20',
    externalID: '',
    familyRelationship: '',
    symptomID: 'SYMPT0001304',
    historyValue: true,
    historyItem: 'Gall Bladder',
    historyType: 'Surgical History',
    itemType: 'patient',
    customFields: []
  }
];

const previousVisits: PreviousVisits[] = [
  {
    dateAdded: '2019-02-18',
    dateDetected: '2019-02-18',
    externalID: '',
    familyRelationship: '',
    historyItem: 'M79.601',
    historyType: 'PreviousHistory',
    historyValue: true,
    id: 7284,
    itemType: 'patient',
    symptomID: 'SYMPT0002070',
  }
];

export const testFamilyHistory: HistoryItem[] = [
  {
    itemType: 'family',
    historyType: 'Cancer',
    historyItem: 'Skin cancer',
    historyValue: true,
    familyRelationship: 'OTHER',
    symptomID: 'SYMPT0000020',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  }
];

const socialHistoryItems: HistoryItem[] = [
  {
    itemType: 'patient',
    historyType: 'Caffeine User',
    historyItem: '',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0000010',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  },
  {
    itemType: 'patient',
    historyType: 'Caffeine Drinks Per Day',
    historyItem: '4',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0009999',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  },
  {
    itemType: 'patient',
    historyType: 'Drinks Per Day',
    historyItem: '3',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0001301',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  },
  {
    itemType: 'patient',
    historyType: 'Alcohol User',
    historyItem: 'Continuous',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0000008',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  },
  {
    itemType: 'patient',
    historyType: 'Packs Per Day',
    historyItem: '3',
    historyValue: true,
    familyRelationship: '',
    symptomID: 'SYMPT0009999',
    externalID: '',
    dateDetected: '2019-03-20',
    dateAdded: '2019-03-20',
    customFields: []
  }
];

const testHistoryItem = [].concat(testMedicationAllergy, testMedications, previousVisits, testSurgicalHistory, testFamilyHistory, testAllergy, testPatientMedicalHistory, socialHistoryItems);

const patientSocialHistory: PatientSocialHistory = {
  lastDrinkDate: '2019-03-20',
  smokingEndDate: '1985-11-11',
  smokingStartDate: '1973-11-11',
  drinkingStartDate: null,
  drinkingEndDate: null,
  caffeineConsumer: true,
  alcoholConsumer: true
};

export const testPatientHealthHistory: HealthHistory = {
  version: '2.0',
  historyItem: testHistoryItem,
  drinkingStartDate: patientSocialHistory.drinkingStartDate,
  smokingStartDate: patientSocialHistory.smokingStartDate,
  smokingEndDate: patientSocialHistory.smokingEndDate,
  lastDrinkDate: patientSocialHistory.lastDrinkDate,
  drinkingEndDate: patientSocialHistory.drinkingEndDate,
  familyOtherCancer: 'familyOtherCancer',
  otherSurgery: 'otherSurgery',
  patientOtherCancer: 'patientOtherCancer',
  medsAllergyReactions: 'medsAllergyReactions',
  pharmacies: []
};

const testSymptomValue: Value = {
  createdAt: '',
  fileType: '',
  status: 'AVAILABLE',
  fileName: 'test',
  bodySide: '',
  value: 123,
  bodyPart: '',
  file: 'test.flac'
};

export const testSymptom: Triage = {
  categoryName: 'Core Symptoms',
  icdGroup: '',
  location: [],
  measurement: null,
  response: true,
  symptomCategory: '',
  symptomCategoryId: '',
  symptomGroup: 'General',
  symptomGroupId: '',
  symptomId: 'SYMPT0003325',
  symptomName: 'Recent exposure to secondhand smoke',
  symptomSource: 'Q&A',
  time: '2018-06-21T15:23:32',
  values: [
    [
      '', 1, 'unit'
    ]
  ]
};

export const testTriage: Triage[] = [
  testSymptom,
  {
    categoryName: 'Core Symptoms',
    icdGroup: '',
    location: [],
    measurement: null,
    response: true,
    symptomCategory: '',
    symptomCategoryId: '',
    symptomGroup: 'General',
    symptomGroupId: '',
    symptomId: 'SYMPT0000044',
    symptomName: 'History Symptom',
    symptomSource: 'Q&A',
    time: '2018-06-21T15:23:32',
    values: [
      [
        testSymptomValue, 1, 'unit'
      ]
    ]
  }, {
    categoryName: 'Core Symptoms',
    icdGroup: '',
    location: [],
    measurement: null,
    response: true,
    symptomCategory: '',
    symptomCategoryId: '',
    symptomGroup: 'General',
    symptomGroupId: '',
    symptomId: 'SYMPT0001218',
    symptomName: 'History Symptom',
    symptomSource: 'Q&A',
    time: '2018-06-21T15:23:32',
    values: [
      [
        testSymptomValue, 1, 'unit'
      ]
    ]
  }, {
    categoryName: 'Core Symptoms',
    icdGroup: '',
    location: [],
    measurement: null,
    response: true,
    symptomCategory: '',
    symptomCategoryId: '',
    symptomGroup: 'General',
    symptomGroupId: '',
    symptomId: 'SYMPT0000997',
    symptomName: 'History Symptom',
    symptomSource: 'Q&A',
    time: '2018-06-21T15:23:32',
    values: [
      [
        testSymptomValue, 1, 'unit'
      ]
    ]
  }, {
    categoryName: 'Core Symptoms',
    icdGroup: '',
    location: [],
    measurement: null,
    response: true,
    symptomCategory: '',
    symptomCategoryId: '',
    symptomGroup: 'General',
    symptomGroupId: '',
    symptomId: 'SYMPT0000234',
    symptomName: 'History Symptom',
    symptomSource: 'Q&A',
    time: '2018-06-21T15:23:32',
    values: [
      [
        testSymptomValue, 1, 'unit'
      ]
    ]
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        'Type 2',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0000056',
    measurement: null,
    categoryName: 'Personal History',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'History of diabetes mellitus type 2',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        'Skin Cancer',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0000020',
    measurement: null,
    categoryName: 'Family History',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'Family History of Cancer Skin Cancer',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        'Continuous',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0000008',
    measurement: null,
    categoryName: 'Core Symptoms',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'Very heavy alcohol drinker',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        '3 - 4',
        1,
        'days'
      ]
    ],
    symptomId: 'SYMPT0001301',
    measurement: null,
    categoryName: 'Core Symptoms',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'Drinks/Day 3 - 4',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [],
    symptomId: 'SYMPT0000010',
    measurement: null,
    categoryName: 'Core Symptoms',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: true,
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'Current caffeine consumer',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        'Cadmium',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0001218',
    measurement: null,
    categoryName: 'Core Symptoms',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'Medications Cadmium',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        'Vitamin',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0001218',
    measurement: null,
    categoryName: 'Core Symptoms',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'Medications Vitamin',
    time: ''
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [
      [
        'Latex',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0000044',
    measurement: null,
    categoryName: 'Personal History',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: 'Other',
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'History of allergic reaction caused by latex',
    time: ''
  }, {
    measurement: null,
    location: [],
    response: 'true',
    symptomId: 'SYMPT0000997',
    symptomName: 'Allergies To Medication Haloperidol',
    symptomSource: 'MA Added',
    time: '2019-03-20',
    values: [
      [
        'Spf 15',
        null,
        null
      ]
    ],
    symptomCategory: '',
    icdGroup: '',
    symptomCategoryId: '',
    symptomGroupId: '',
    categoryName: 'Core Symptoms',
    symptomGroup: 'General'
  }, {
    measurement: null,
    location: [],
    response: 'true',
    symptomId: 'SYMPT0000997',
    symptomName: 'Allergies To Medication Haloperidol',
    symptomSource: 'MA Added',
    time: '2019-03-20',
    values: [
      [
        'Vitamin A',
        null,
        null
      ]
    ],
    symptomCategory: '',
    icdGroup: '',
    symptomCategoryId: '',
    symptomGroupId: '',
    categoryName: 'Core Symptoms',
    symptomGroup: 'General'
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    time: '',
    location: [],
    values: [
      [
        'Food',
        null,
        null
      ]
    ],
    symptomId: 'SYMPT0000044',
    measurement: null,
    categoryName: 'Personal History',
    response: 'Other',
    symptomGroupId: '',
    symptomCategory: '',
    symptomCategoryId: '',
    symptomName: 'History of allergic reaction caused by food',
    symptomSource: 'Preprocessor'
  }, {
    symptomGroup: 'General',
    icdGroup: '',
    location: [],
    values: [],
    symptomId: 'SYMPT0002070',
    measurement: null,
    categoryName: 'Personal History',
    symptomCategoryId: '',
    symptomSource: 'Preprocessor',
    response: false,
    symptomCategory: '',
    symptomGroupId: '',
    symptomName: 'History of Previous Illness',
    time: ''
  }, {
    location: [],
    measurement: null,
    response: 'true',
    symptomId: 'SYMPT0001304',
    symptomName: 'Gall Bladder',
    symptomSource: 'MA Added',
    time: '2019-03-20',
    values: [
      [
        null,
        null,
        null
      ]
    ],
    symptomCategory: 'Surgical History',
    icdGroup: '',
    symptomCategoryId: '',
    symptomGroupId: '',
    categoryName: 'Core Symptoms',
    symptomGroup: 'General'
  }
];

export const testAdditionalInformation = {
  knownDrugAllergies: [{conflict: 'Spf 15'}, {conflict: 'Vitamin A'}],
  knownDrugConflicts: [{conflict: 'Cadmium'}, {conflict: 'Vitamin'}],
  sportsPhysical: sportsPhysicalTable,
  sportsCleared: sportsCleared,
  physicalExam: []
} as PatientAdditionalInformation;

export const testVisitData = {
  triage: testTriage,
  treatmentEngine: testTreatmentEngine,
  patientInformation: testPatientInformation,
  patientHealthHistory: testPatientHealthHistory,
  diagnosticEngine: testDiagnosticEngine,
  measurements: testPatientDataMeasurements,
  behavioralScreening: [],
  orders: [],
  additionalInformation: testAdditionalInformation,
  drugInformation: testDrugInformation,
  visitInformation: testVisitInformation,
  injections: [],
  medications: []
};

export const testCompletedPatient: Data = Object.assign(testVisitData, { dischargeNotes: { data: defaultDischargeNotes, saved: false } }) as undefined as Data;

export const testPaymentInfo: PaymentInfo = {
  type: 'CARD',
  customer_copay: null,
  kiosk_copay: null,
  kiosk_payment: null,
  due: '18.05.2016',
  id: 123
};

export const testVitalsImages = [
  {bodyPart: 'right_ear', data: {}},
  {bodyPart: 'left_ear', data: {}},
  {bodyPart: 'right_sinus', data: {}},
  {bodyPart: 'left_sinus', data: {}},
  {bodyPart: 'throat', data: {}},
];

export const testVitalsAudio = [
  {bodyPart: 'Heart', data: {}},
  {bodyPart: 'Lung', data: {}},
  {bodyPart: 'Abdomen', data: {}},
];

export const testSymptomGroups = {
  symptomGroups: [
    {
      sections: [
        {
          categories: [{
            categoryID: 'id',
            symptoms: [{}]
          }]
        }
      ],
    },
    {
      sections: [{}],
    },
    {
      categories: [{
        categoryID: 'PAIN_id',
        symptoms: [{}]
      }]
    },
    {
      categories: [{}]
    }
  ],
  cancerList: [{name: 'Skin cancer'}]
};

export const testBodyParts = {
  subParts: [
    {
      subParts: [
        {subParts: []},
        {sp: []}
      ],
      bodyPartsCodes: []
    },
    {}
  ],
  bodyPartsCodes: []
};

export const behaviorsPatient = {
  patientInformation: {
    patientId: '1000'
  },
  patientHealthHistory: {
    allergies: {
      allergy: []
    },
    medicationAllergies: {
      medication: []
    },
    medications: {
      medication: []
    }
  },
  behavioralScreening: [
    {
      answers: [
        {
          question_id: 'SPT-31A',
          answer: 'Contacts'
        },
        {
          question_id: 'SPT-16A',
          answer: 'Wheezing'
        },
        {
          question_id: 'SPT-35',
          answer: 'No'
        },
        {
          question_id: 'SPT-34',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-33',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-31',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-30',
          answer: 'No'
        },
        {
          question_id: 'SPT-27',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-26',
          answer: 'No'
        },
        {
          question_id: 'SPT-24',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-23',
          answer: 'No'
        },
        {
          question_id: 'SPT-21',
          answer: 'No'
        },
        {
          question_id: 'SPT-20',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-19',
          answer: 'No'
        },
        {
          question_id: 'SPT-16',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-14',
          answer: 'No'
        },
        {
          question_id: 'SPT-13',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-12',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-8',
          answer: 'No'
        },
        {
          question_id: 'SPT-7',
          answer: 'Yes'
        },
        {
          question_id: 'SPT-5',
          answer: 'No'
        },
        {
          question_id: 'SPT-1',
          answer: 'Yes'
        }
      ],
      version: '1',
      subject: 'Sports Physical'
    },
    {
      answers: [
        {
          question_id: 'SCD-5B',
          answer: 'Yes'
        },
        {
          question_id: 'SCD-5',
          answer: 'Yes'
        },
        {
          question_id: 'SCD-4',
          answer: 'Yes'
        },
        {
          question_id: 'SCD-3',
          answer: 'Yes'
        },
        {
          question_id: 'SCD-2',
          answer: 'Yes'
        },
        {
          question_id: 'SCD-1',
          answer: 'Yes'
        }
      ],
      version: 'C-SSRS',
      subject: 'COLUMBIA-SUICIDE SEVERITY RATING'
    },
    {
      answers: [
        {
          question_id: 'ANX-7',
          answer: 'Several days'
        },
        {
          question_id: 'ANX-6',
          answer: 'More than half the days'
        },
        {
          question_id: 'ANX-5',
          answer: 'More than half the days'
        },
        {
          question_id: 'ANX-4',
          answer: 'Nearly every day'
        },
        {
          question_id: 'ANX-3',
          answer: 'More than half the days'
        },
        {
          question_id: 'ANX-2',
          answer: 'More than half the days'
        },
        {
          question_id: 'ANX-1',
          answer: 'More than half the days'
        }
      ],
      version: 'GAD-7',
      subject: 'Anxiety'
    },
    {
      answers: [
        {
          question_id: 'DEP-8A',
          answer: 'Fast Speech'
        },
        {
          question_id: 'DEP-5A',
          answer: 'Overeating'
        },
        {
          question_id: 'DEP-3A',
          answer: 'Sleeping Too Much'
        },
        {
          question_id: 'DEP-10',
          answer: 'Somewhat difficult'
        },
        {
          question_id: 'DEP-9',
          answer: 'Several days'
        },
        {
          question_id: 'DEP-8',
          answer: 'More than half the days'
        },
        {
          question_id: 'DEP-7',
          answer: 'Nearly every day'
        },
        {
          question_id: 'DEP-6',
          answer: 'Several days'
        },
        {
          question_id: 'DEP-5',
          answer: 'Several days'
        },
        {
          question_id: 'DEP-4',
          answer: 'Several days'
        },
        {
          question_id: 'DEP-3',
          answer: 'Several days'
        },
        {
          question_id: 'DEP-2',
          answer: 'More than half the days'
        },
        {
          question_id: 'DEP-1',
          answer: 'More than half the days'
        }
      ],
      version: 'PHQ9',
      subject: 'Depression'
    },
    {
      answers: [{
        question_id: 'BIP-1A',
        answer: 'yes'
      }],
      version: '',
      subject: 'Bipolar'
    },
    {
      'subject': 'Eating Disorders',
      'version': 'v.1a',
      'answers': [
        {
          'question_id': 'ED-6A',
          'answer': 'A1'
        },
        {
          'question_id': 'ED-6B',
          'answer': 'A2'
        }
      ]
    },
    {
      'subject': 'PTSD',
      'version': 'v.1',
      'answers': [
        {
          'question_id': 'PTSD-4',
          'answer': 'A3'
        },
        {
          'question_id': 'PTSD-3',
          'answer': 'A4'
        }
      ]
    }
  ]
};

export const additionalInfo = {
  additionalDoctorNotes: 'additionalDoctorNotes',
  diagnosticDoctorNotes: 'diagnosticDoctorNotes',
  medicationInstructions: 'medicationInstructions',
  treatmentDoctorNotes: 'treatmentDoctorNotes'
};

export const testParsedSymptoms = [
  {
    'name': 'Allergies to Medication',
    'symptomID': 'SYMPT0000997',
    'criticality': 8,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Allergy to penicillin',
        'listValueCode': 'DS468',
        'listValue': 'Penicillin'
      },
      {
        'code': null,
        'name': 'Allergy to erythromycin',
        'listValueCode': 'DS471',
        'listValue': 'Erythromycin'
      },
      {
        'code': null,
        'name': 'Aspirin allergy',
        'listValueCode': 'DS470',
        'listValue': 'Aspirin'
      },
      {
        'code': null,
        'name': 'Allergy to medication',
        'listValueCode': null,
        'listValue': null
      },
      {
        'code': null,
        'name': 'Drug allergy',
        'listValueCode': 'DS472',
        'listValue': 'Other'
      },
      {
        'code': null,
        'name': 'Allergy to sulfonamides',
        'listValueCode': 'DS469',
        'listValue': 'Sulfa'
      }
    ],
    'displayDrApp': false,
    'genderGroup': null,
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': false
  },
  {
    'name': 'Immunization',
    'symptomID': 'SYMPT0000234',
    'criticality': 1,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Influenza A virus subtype H1N1 vaccination',
        'listValueCode': 'DS1816',
        'listValue': 'Influenza A (HINI)'
      },
      {
        'code': null,
        'name': 'Pneumococcal vaccination',
        'listValueCode': 'DS1824',
        'listValue': 'Pneumococcal'
      },
      {
        'code': null,
        'name': 'Hepatitis B vaccination',
        'listValueCode': 'DS1813',
        'listValue': 'Hepatitis B'
      },
      {
        'code': null,
        'name': 'Influenza vaccination',
        'listValueCode': 'DS1817',
        'listValue': 'Seasonal Flu Vaccine'
      },
      {
        'code': null,
        'name': 'Typhoid vaccination',
        'listValueCode': 'DS1833',
        'listValue': 'Typhoid Fever'
      },
      {
        'code': null,
        'name': 'Rubella vaccination',
        'listValueCode': 'DS1828',
        'listValue': 'Rubella'
      },
      {
        'code': null,
        'name': 'Immunization',
        'listValueCode': null,
        'listValue': null
      },
      {
        'code': null,
        'name': 'Tetanus vaccination',
        'listValueCode': 'DS1831',
        'listValue': 'Tetanus'
      },
      {
        'code': null,
        'name': 'Tuberculosis vaccination',
        'listValueCode': 'DS1832',
        'listValue': 'Tuberculosis (BCG)'
      },
      {
        'code': null,
        'name': 'Smallpox vaccination',
        'listValueCode': 'DS1830',
        'listValue': 'Smallpox'
      },
      {
        'code': null,
        'name': 'Adenovirus vaccination',
        'listValueCode': 'DS1808',
        'listValue': 'Adenovirus'
      },
      {
        'code': null,
        'name': 'Hepatitis A vaccination',
        'listValueCode': 'DS1812',
        'listValue': 'Hepatitis A'
      },
      {
        'code': null,
        'name': 'Human papillomavirus vaccination',
        'listValueCode': 'DS1815',
        'listValue': 'Human Papillomavirus Infection (HPV)'
      },
      {
        'code': null,
        'name': 'Polio vaccination',
        'listValueCode': 'DS1825',
        'listValue': 'Polio'
      },
      {
        'code': null,
        'name': 'Hemophilus influenzae type B vaccination',
        'listValueCode': 'DS1814',
        'listValue': 'Hemophilus Influenzae Type B (Hib)'
      },
      {
        'code': null,
        'name': 'Mumps vaccination',
        'listValueCode': 'DS1821',
        'listValue': 'Mumps'
      },
      {
        'code': null,
        'name': 'Rotavirus vaccination',
        'listValueCode': 'DS1827',
        'listValue': 'Rotavirus'
      },
      {
        'code': null,
        'name': 'Japanese encephalitis vaccination',
        'listValueCode': 'DS1818',
        'listValue': 'Japanese Encephalitis'
      },
      {
        'code': null,
        'name': 'Respiratory syncytial virus vaccination',
        'listValueCode': 'DS1836',
        'listValue': 'Respiratory Syncytial Virus'
      },
      {
        'code': null,
        'name': 'Measles vaccination',
        'listValueCode': 'DS1819',
        'listValue': 'Measles'
      },
      {
        'code': null,
        'name': 'Herpes zoster vaccination',
        'listValueCode': 'DS1829',
        'listValue': 'Shingles/Herpes Zoster'
      },
      {
        'code': null,
        'name': 'Anthrax vaccination',
        'listValueCode': 'DS1809',
        'listValue': 'Anthrax'
      },
      {
        'code': null,
        'name': 'Cholera vaccination',
        'listValueCode': 'DS1810',
        'listValue': 'Cholera'
      },
      {
        'code': null,
        'name': 'Diphtheria vaccination',
        'listValueCode': 'DS1811',
        'listValue': 'Diphtheria'
      },
      {
        'code': null,
        'name': 'Meningococcal vaccination',
        'listValueCode': 'DS1820',
        'listValue': 'Meningococcal'
      },
      {
        'code': null,
        'name': 'Varicella vaccination',
        'listValueCode': 'DS1834',
        'listValue': 'Varicella'
      },
      {
        'code': null,
        'name': 'Rabies vaccination',
        'listValueCode': 'DS1826',
        'listValue': 'Rabies'
      },
      {
        'code': null,
        'name': 'Pertussis vaccination',
        'listValueCode': 'DS1823',
        'listValue': 'Pertussis'
      },
      {
        'code': null,
        'name': 'Yellow fever vaccination',
        'listValueCode': 'DS1835',
        'listValue': 'Yellow Fever'
      },
      {
        'code': null,
        'name': 'Plague vaccination',
        'listValueCode': 'DS1822',
        'listValue': 'Plague Vaccine'
      }
    ],
    'displayDrApp': false,
    'genderGroup': null,
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': true
  },
  {
    'name': 'Medications',
    'symptomID': 'SYMPT0001218',
    'criticality': 1,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Medications',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': false,
    'genderGroup': null,
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': true
  },
  {
    'name': 'History of Allergies',
    'symptomID': 'SYMPT0000044',
    'criticality': 3,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'History of allergic reaction caused by medical tape',
        'listValueCode': 'DS549',
        'listValue': 'Medical Tape'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by cotton',
        'listValueCode': 'DS1660',
        'listValue': 'Cotton'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by dust',
        'listValueCode': 'DS1667',
        'listValue': 'Dust'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by bee sting',
        'listValueCode': 'DS912',
        'listValue': 'Bee Sting'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by metal',
        'listValueCode': 'DS911',
        'listValue': 'Metals'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by pollen',
        'listValueCode': 'DS547',
        'listValue': 'Pollens'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by latex',
        'listValueCode': 'DS545',
        'listValue': 'Latex'
      },
      {
        'code': null,
        'name': 'History of allergies',
        'listValueCode': null,
        'listValue': null
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by animal',
        'listValueCode': 'DS1581',
        'listValue': 'Animals'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by food',
        'listValueCode': 'DS546',
        'listValue': 'Food'
      },
      {
        'code': null,
        'name': 'History of allergic reaction caused by shellfish',
        'listValueCode': 'DS548',
        'listValue': 'Shellfish'
      }
    ],
    'displayDrApp': true,
    'genderGroup': null,
    'categoryID': 'SYMPTCG03',
    'location': [],
    'blacklisted': false
  },
  {
    'name': 'Routinely Exposed to Secondhand Smoke',
    'symptomID': 'SYMPT0003325',
    'criticality': 6,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Recent exposure to secondhand smoke',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': true,
    'genderGroup': null,
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': false
  },
  {
    'name': 'Current Alcohol Consumer',
    'symptomID': 'SYMPT0000008',
    'criticality': 3,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Social alcohol drinker',
        'listValueCode': 'DS463',
        'listValue': 'Social'
      },
      {
        'code': null,
        'name': 'Moderate alcohol drinker',
        'listValueCode': 'DS462',
        'listValue': 'Moderate'
      },
      {
        'code': null,
        'name': 'Very heavy alcohol drinker',
        'listValueCode': 'DS460',
        'listValue': 'Continuous'
      },
      {
        'code': null,
        'name': 'Binge drinker',
        'listValueCode': 'DS461',
        'listValue': 'Binge'
      },
      {
        'code': null,
        'name': 'Current drinker of alcohol',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': false,
    'genderGroup': '\u0000',
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': true
  },
  {
    'name': 'Current Caffeine Consumer',
    'symptomID': 'SYMPT0000010',
    'criticality': 2,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Current caffeine consumer',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': false,
    'genderGroup': '\u0000',
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': true
  },
  {
    'name': 'Drinks/Day',
    'symptomID': 'SYMPT0001301',
    'criticality': 4,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Frequency of alcoholic drink consumption',
        'listValueCode': null,
        'listValue': null
      },
      {
        'code': null,
        'name': '7+ alcoholic drinks per day',
        'listValueCode': 'DS494',
        'listValue': '7+'
      },
      {
        'code': null,
        'name': '4 - 6 alcoholic drinks per day',
        'listValueCode': 'DS493',
        'listValue': '4 - 6'
      },
      {
        'code': null,
        'name': '0 - 1 alcoholic drinks per day',
        'listValueCode': 'DS491',
        'listValue': '0 - 1'
      },
      {
        'code': null,
        'name': '2 - 3 alcoholic drinks per day',
        'listValueCode': 'DS492',
        'listValue': '2 - 3'
      }
    ],
    'displayDrApp': false,
    'genderGroup': '\u0000',
    'categoryID': 'SYMPTCG01',
    'location': [],
    'blacklisted': true
  },
  {
    'name': 'Family History of Cancer',
    'symptomID': 'SYMPT0000020',
    'criticality': 2,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'Family history of cancer',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': true,
    'genderGroup': null,
    'categoryID': 'SYMPTCG02',
    'location': [],
    'blacklisted': false
  },
  {
    'name': 'History of Diabetes',
    'symptomID': 'SYMPT0000056',
    'criticality': 4,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'History of prediabetes',
        'listValueCode': 'DS795',
        'listValue': 'Prediabetes'
      },
      {
        'code': null,
        'name': 'History of diabetes',
        'listValueCode': null,
        'listValue': null
      },
      {
        'code': null,
        'name': 'History of diabetes mellitus type 1',
        'listValueCode': 'DS035',
        'listValue': 'Type 1'
      },
      {
        'code': null,
        'name': 'History of gestational diabetes',
        'listValueCode': 'DS1227',
        'listValue': 'Gestational'
      },
      {
        'code': null,
        'name': 'History of diabetes mellitus type 2',
        'listValueCode': 'DS036',
        'listValue': 'Type 2'
      }
    ],
    'displayDrApp': true,
    'genderGroup': null,
    'categoryID': 'SYMPTCG03',
    'location': [],
    'blacklisted': false
  },
  {
    'name': 'History of Previous Illness',
    'symptomID': 'SYMPT0002070',
    'criticality': 1,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'History of previous illness',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': true,
    'genderGroup': null,
    'categoryID': 'SYMPTCG03',
    'location': [],
    'blacklisted': false
  },
  {
    'name': 'Gall Bladder',
    'symptomID': 'SYMPT0001304',
    'criticality': 1,
    'displayOrder': 0,
    'snomedCodes': [
      {
        'code': null,
        'name': 'History of cholecystectomy',
        'listValueCode': null,
        'listValue': null
      }
    ],
    'displayDrApp': true,
    'genderGroup': null,
    'categoryID': 'SYMPTCG04',
    'location': [],
    'blacklisted': false
  }
];

export const testSymptomCategories = [
  {
    'categoryID': [
      'SYMPTCG02'
    ],
    'categoryName': 'Family History',
    'groupName': 'General',
    'presenting': [],
    'nonPresenting': [],
    'expandedPresenting': true,
    'expandedNonPresenting': true
  },
  {
    'categoryID': [
      'SYMPTCG01',
      'SYMPTCG33',
      'SYMPTCG28',
      'SYMPTCG14'
    ],
    'categoryName': 'Core Symptoms',
    'groupName': 'General',
    'presenting': [],
    'nonPresenting': [],
    'expandedPresenting': true,
    'expandedNonPresenting': true
  },
  {
    'categoryID': [
      'SYMPTCG03'
    ],
    'categoryName': 'Personal History',
    'groupName': 'General',
    'presenting': [],
    'nonPresenting': [],
    'expandedPresenting': true,
    'expandedNonPresenting': true
  },
  {
    'categoryID': [
      'SYMPTCG04'
    ],
    'categoryName': 'Surgical History',
    'groupName': 'General',
    'presenting': [],
    'nonPresenting': [],
    'expandedPresenting': true,
    'expandedNonPresenting': true
  }
];

export const DefaultFinalizePDFFiles: DocumentFinalizeFiles = {
  summary: new File([], ''),
  authorization: new File([], ''),
  discharge: new File([], ''),
  questionnaire: new File([], '')
};

export const testAudioData = {
  raw: {data: 'some data'},
  low: {},
  medium: {},
  high: {}
};
