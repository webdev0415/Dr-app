import { TreatmentType } from 'treatments/treatments.type';
import { TreatmentsState } from '../treatments.interface';
import { clone } from 'ramda';
import { PVDischarge } from '../../discharge/discharge.interface';

export const hiddenTreatments = ['None', 'None Needed', 'Not Needed', 'No Restrictions', 'Normal Diet'];
export const maleHiddenTreatments = ['Urine Pregnancy'];
export const nonTreatmentTypes: TreatmentType[] = ['Return to Work/School Status', 'Discharge Disposition', 'Activity'];
export const conflictList = ['knownDrugAllergies', 'knownDrugConflicts', 'knownPrecautionConflicts'];
export const conflictPreposition = ['are allergic to', 'are taking', 'have'];
export const multiselectTreatments: TreatmentType[] = ['OTC Drugs', 'Prescription Drugs', 'Labs', 'Imaging', 'Procedures', 'Counseling', 'Wound Care'];
export const treatmentsOrder: TreatmentType[] = [
  'Prescription Drugs',
  'OTC Drugs',
  'Activity',
  'Counseling',
  'Imaging',
  'Labs',
  'Physical Therapy',
  'Procedures',
  'Diet',
  'Return to Work/School Status',
  'Wound Care',
  'Discharge Disposition'
];

export const treatmentsOrderForFinalNotes: TreatmentType[] = [
  'Prescription Drugs',
  'OTC Drugs',
  'Labs',
  'Imaging',
  'Procedures',
  'Activity',
  'Discharge Disposition'
];

export const defaultPVDischarge: PVDischarge = {
  returnIn: false,
  followUp: false,
  amountOf: null,
  time: null,
  ifNotBetter: false,
  followUpWith: null,
  otherReason: '',
  therapies: null
};

export const initialTreatments: TreatmentsState = {
  viewModelTreatments: clone(treatmentsOrder).map(item => ({type: item, details: [], expanded: false})),
  patientTreatments: [],
  backendTreatments: [],
  drugInformation: [],
  drugConflictInformation: {
    knownDrugConflicts: [],
    knownDrugAllergies: [],
    knownPrecautionConflicts: []
  },
  treatmentsDirty: false,
  pvDischarge: clone(defaultPVDischarge),
  customInstructions: '',
  dischargeInstructions: [],
  returnToWorkSchool: {
    returnTo: null,
    rtsDays: null,
    rtswStart: new Date().toLocaleDateString('en-US', {timeZone: 'America/Phoenix'}),
    rtswStop: new Date(new Date().getTime() + 7 * 24 * 3600 * 1000).toLocaleDateString('en-US', {timeZone: 'America/Phoenix'}),
    rtwSeenFor: null,
    rtwRestrictionType: null,
    rtwRestrictions: null,
    rtwWasIll: null
  }
};

// TODO: delete when TE or 2070 will fix payload
export const returnToWorkPayloadJSON = `{
  "name":"Return to Work/School Status",
  "typeID":5,
  "treatmentTypeDesc":[
  {
    "shortName":"Resume in 3 Days",
    "longName":"Patient Can Resume Work/School in 3 Days",
    "priority":11,
    "typeDescID":34,
    "description":"Patient Can Resume Work/School in 3 Days",
    "conceptID":[
      160665000,
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 4 Days",
    "longName":"Patient Can Resume Work/School in 4 Days",
    "priority":12,
    "typeDescID":35,
    "description":"Patient Can Resume Work/School in 4 Days",
    "conceptID":[
      160665000,
      20676001,
      41829006,
      386619000
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 5 Days",
    "longName":"Patient Can Resume Work/School in 5 Days",
    "priority":13,
    "typeDescID":36,
    "description":"Patient Can Resume Work/School in 5 Days",
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 6 Days",
    "longName":"Patient Can Resume Work/School in 6 Days",
    "priority":14,
    "typeDescID":37,
    "description":"Patient Can Resume Work/School in 6 Days",
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Immediately",
    "longName":"Patient Can Resume Work/School Immediately",
    "priority":8,
    "defaultValue":true,
    "typeDescID":30,
    "description":"Patient Can Resume Work/School Immediately",
    "conceptID":[
      41829006,
      41449007
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 1 Day",
    "longName":"Patient Can Resume Work/School in 1 Day",
    "priority":9,
    "typeDescID":31,
    "description":"Patient Can Resume Work/School in 1 Day",
    "conceptID":[
      182923009,
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 10 Days",
    "longName":"Patient Can Resume Work/School in 10 Days",
    "priority":18,
    "typeDescID":32,
    "description":"Patient Can Resume Work/School in 10 Days",
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Never",
    "longName":"Never Return to Work or School",
    "typeDescID":200,
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 2 Days",
    "longName":"Patient Can Resume Work/School in 2 Days",
    "priority":10,
    "typeDescID":33,
    "description":"Patient Can Resume Work/School in 2 Days",
    "conceptID":[
      33489005,
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Never Return to Work or School",
    "defaultValue":false,
    "typeDescID":646,
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 7 Days",
    "longName":"Patient Can Resume Work/School in 7 Days",
    "priority":15,
    "typeDescID":38,
    "description":"Patient Can Resume Work/School in 7 Days",
    "conceptID":[
      41829006,
      17535004
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 8 Days",
    "longName":"Patient Can Resume Work/School in 8 Days",
    "priority":16,
    "typeDescID":39,
    "description":"Patient Can Resume Work/School in 8 Days",
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"Resume in 9 Days",
    "longName":"Patient Can Resume Work/School in 9 Days",
    "priority":17,
    "typeDescID":40,
    "description":"Patient Can Resume Work/School in 9 Days",
    "conceptID":[
      41829006
    ],
    "cptCode":null
  },
  {
    "shortName":"TBD",
    "longName":"Work/School Return To Be Determined",
    "priority":7,
    "typeDescID":41,
    "description":"Work/School Return To Be Determined",
    "conceptID":[
      22745007,
      41829006
    ],
    "cptCode":null
  }
]
}`;

