import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { IllnessesInformation } from '../common/interfaces/diagnostic-engine.interface';

export const testDE = [
  {
    'icd10': 'E11.8',
    'contributors': [
      {
        'symptomName': 'History of High Blood Pressure',
        'contribution': -0.0364,
        'symptomId': 'SYMPT0000059'
      },
      {
        'symptomName': 'Patient Age',
        'contribution': 0.0545,
        'symptomId': 'SYMPT0000001'
      },
      {
        'symptomName': 'Protein, Urine',
        'contribution': 0.3636,
        'symptomId': 'SYMPT0003361'
      },
      {
        'symptomName': 'Smart Body Index',
        'contribution': 0.5455,
        'symptomId': 'SYMPT0000226'
      }
    ],
    'iCriticality': 5,
    'isDoctorAdded': false,
    'confidence': 0.031004862691908795,
    'icdGroup': 'Type 2 diabetes mellitus with other specified complications',
    'icdName': 'Type 2 diabetes mellitus with unspecified complications',
    'isSelected': true,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'T67.2XXS',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 0.5,
        'symptomId': 'SYMPT0003361'
      },
      {
        'symptomName': 'Urine specific gravity',
        'contribution': 0.5,
        'symptomId': 'SYMPT0003358'
      }
    ],
    'iCriticality': 5,
    'isDoctorAdded': false,
    'confidence': 0.024642486020246237,
    'icdGroup': 'Heat cramp',
    'icdName': 'Heat cramp, sequela',
    'isSelected': true,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'N13.721',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.022103718121204142,
    'icdGroup': 'Vesicoureteral-reflux',
    'icdName': 'Vesicoureteral-reflux with reflux nephropathy without hydroureter, unilateral',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'N13.722',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.022103718121204142,
    'icdGroup': 'Vesicoureteral-reflux',
    'icdName': 'Vesicoureteral-reflux with reflux nephropathy without hydroureter, bilateral',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'N13.729',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.022103718121204142,
    'icdGroup': 'Vesicoureteral-reflux',
    'icdName': 'Vesicoureteral-reflux with reflux nephropathy without hydroureter, unspecified',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'N13.731',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.021664433292946827,
    'icdGroup': 'Vesicoureteral-reflux',
    'icdName': 'Vesicoureteral-reflux with reflux nephropathy with hydroureter, unilateral',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'T67.0XXS',
    'contributors': [
      {
        'symptomName': 'Urine specific gravity',
        'contribution': 0.5,
        'symptomId': 'SYMPT0003358'
      },
      {
        'symptomName': 'Protein, Urine',
        'contribution': 0.5,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 8,
    'isDoctorAdded': false,
    'confidence': 0.020929988529813922,
    'icdGroup': 'Heatstroke and sunstroke',
    'icdName': 'Heatstroke and sunstroke, sequela',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'N13.739',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.01943123965677864,
    'icdGroup': 'Vesicoureteral-reflux',
    'icdName': 'Vesicoureteral-reflux with reflux nephropathy with hydroureter, unspecified',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'E09.21',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 5,
    'isDoctorAdded': false,
    'confidence': 0.0191308879366591,
    'icdGroup': 'Type 2 diabetes mellitus with kidney complications',
    'icdName': 'Drug or chemical induced diabetes mellitus with diabetic nephropathy',
    'isSelected': true,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'T67.0XXD',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 0.3333,
        'symptomId': 'SYMPT0003361'
      },
      {
        'symptomName': 'Urine specific gravity',
        'contribution': 0.6667,
        'symptomId': 'SYMPT0003358'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.018510759725405793,
    'icdGroup': 'Heatstroke and sunstroke',
    'icdName': 'Heatstroke and sunstroke, subsequent encounter',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'N13.732',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 7,
    'isDoctorAdded': false,
    'confidence': 0.01803043276990525,
    'icdGroup': 'Vesicoureteral-reflux',
    'icdName': 'Vesssicoureteral-reflux with reflux nephropathy with hydroureter, bilateral',
    'isSelected': true,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'T67.2XXD',
    'contributors': [
      {
        'symptomName': 'Protein, Urine',
        'contribution': 1,
        'symptomId': 'SYMPT0003361'
      }
    ],
    'iCriticality': 6,
    'isDoctorAdded': false,
    'confidence': 0.01566520072803763,
    'icdGroup': 'Heat cramp',
    'icdName': 'Heat cramp, subsequent encounter',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  },
  {
    'icd10': 'T67.0XXA',
    'contributors': [
      {
        'symptomName': 'Basic Head Pain',
        'contribution': -0.6,
        'symptomId': 'SYMPT0002952'
      },
      {
        'symptomName': 'Urine specific gravity',
        'contribution': 0.4,
        'symptomId': 'SYMPT0003358'
      }
    ],
    'iCriticality': 8,
    'isDoctorAdded': false,
    'confidence': 0.002260494735126519,
    'icdGroup': 'Heatstroke and sunstroke',
    'icdName': 'Heatstroke and sunstroke, initial encounter',
    'isSelected': false,
    'isPrimary': false,
    'workupPlanned': false,
    'source': 'DE',
    'groupRanking': 0
  }
];

export const testTriageDSD: Triage[] = [
  {
    'time': '',
    'location': [
      'Pelvis'
    ],
    'response': false,
    'symptomId': 'SYMPT0000213',
    'symptomName': 'Pregnant',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Physical',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Pelvis',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000011',
    'symptomName': 'Illicit Drug User/Type',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0002070',
    'symptomName': 'History of Previous Illness',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Personal History',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000234',
    'symptomName': 'Immunization',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000044',
    'symptomName': 'History of Allergies',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Personal History',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000010',
    'symptomName': 'Current Caffeine Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000998',
    'symptomName': 'Pack Years',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000007',
    'symptomName': 'Was a Tobacco Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000006',
    'symptomName': 'Current Tobacco Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000008',
    'symptomName': 'Current Alcohol Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0001301',
    'symptomName': 'Drinks/Day',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000009',
    'symptomName': 'Time Since Last Drink',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000004',
    'symptomName': 'Summer seasonality',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Summer',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000005',
    'symptomName': 'Ethnicity/Genetics Caucasian',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Caucasian',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000002',
    'symptomName': 'Female',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Female',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000001',
    'symptomName': 'Adult',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        '18-65 Adult',
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-05 19:48:10.151000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000223',
    'symptomName': 'Patient Fever',
    'symptomSource': 'Measurement',
    'measurement': 95,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '2019-08-05 19:48:10.151000+00:00',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000225',
    'symptomName': 'Normal systolic arterial pressure',
    'symptomSource': 'Measurement',
    'measurement': 85,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Normal',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000224',
    'symptomName': 'Normal blood pressure',
    'symptomSource': 'Measurement',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Normal',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000226',
    'symptomName': 'Obese',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Very High',
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-06 14:06:54.972000+00:00',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0003358',
    'symptomName': 'Urine specific gravity greater than 1.026',
    'symptomSource': 'MA Added',
    'measurement': 1.15,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Labs',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Urinalysis',
    'values': [
      [
        'More Than 1.026',
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-06 14:06:26.178000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0007587',
    'symptomName': 'HIV antibody/antigen immunoassay',
    'symptomSource': 'MA Added',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Labs',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Microbiology',
    'values': [
      [
        null,
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-06 11:30:11.886000+00:00',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0003361',
    'symptomName': 'Urine protein test positive',
    'symptomSource': 'MA Added',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Labs',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Urinalysis',
    'values': [
      [
        'Positive',
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-06 11:30:11.266000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0003363',
    'symptomName': 'Urine nitrate test',
    'symptomSource': 'MA Added',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Labs',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Urinalysis',
    'values': [
      [
        null,
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-05 19:55:11.812000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000810',
    'symptomName': 'Photophobia',
    'symptomSource': 'Q&A',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Neurological',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Cognitive / Nervous System',
    'values': []
  },
  {
    'time': '2019-08-05 19:55:07.084000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000059',
    'symptomName': 'History of High Blood Pressure',
    'symptomSource': 'Q&A',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Personal History',
    'values': []
  },
  {
    'time': '2019-08-05 19:55:02.541000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0002952',
    'symptomName': 'Basic Head Pain',
    'symptomSource': 'Q&A',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Pain/Swelling',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Head',
    'values': []
  },
  {
    'time': '2019-08-05 19:54:42.557000+00:00',
    'location': [
      'Head'
    ],
    'response': true,
    'symptomId': 'SYMPT0000683',
    'symptomName': 'Lightheaded',
    'symptomSource': 'Collection',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Physical',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Head',
    'values': [
      [
        null,
        3,
        'Weeks'
      ]
    ]
  },
  {
    'time': '2019-08-05 19:48:10.151000+00:00',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000225',
    'symptomName': 'Normal systolic arterial pressure',
    'symptomSource': 'Measurement',
    'measurement': 85,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Normal',
        null,
        null
      ]
    ]
  },
  {
    'time': '2019-08-05 19:48:10.151000+00:00',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000223',
    'symptomName': 'Patient Fever',
    'symptomSource': 'Measurement',
    'measurement': 95,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000226',
    'symptomName': 'Obese',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Very High',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000224',
    'symptomName': 'Normal blood pressure',
    'symptomSource': 'Measurement',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Measurements',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Normal',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000001',
    'symptomName': 'Adult',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        '18-65 Adult',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000002',
    'symptomName': 'Female',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Female',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000005',
    'symptomName': 'Ethnicity/Genetics Caucasian',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Caucasian',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': 'Other',
    'symptomId': 'SYMPT0000004',
    'symptomName': 'Summer seasonality',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': [
      [
        'Summer',
        null,
        null
      ]
    ]
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000009',
    'symptomName': 'Time Since Last Drink',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0001301',
    'symptomName': 'Drinks/Day',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000008',
    'symptomName': 'Current Alcohol Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000006',
    'symptomName': 'Current Tobacco Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000007',
    'symptomName': 'Was a Tobacco Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000998',
    'symptomName': 'Pack Years',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000010',
    'symptomName': 'Current Caffeine Consumer',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000044',
    'symptomName': 'History of Allergies',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Personal History',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000234',
    'symptomName': 'Immunization',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0002070',
    'symptomName': 'History of Previous Illness',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Personal History',
    'values': []
  },
  {
    'time': '',
    'location': [],
    'response': false,
    'symptomId': 'SYMPT0000011',
    'symptomName': 'Illicit Drug User/Type',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'General',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Core Symptoms',
    'values': []
  },
  {
    'time': '',
    'location': [
      'Pelvis'
    ],
    'response': false,
    'symptomId': 'SYMPT0000213',
    'symptomName': 'Pregnant',
    'symptomSource': 'Preprocessor',
    'measurement': null,
    'symptomCategory': '',
    'symptomCategoryId': '',
    'symptomGroup': 'Physical',
    'symptomGroupId': '',
    'icdGroup': '',
    'categoryName': 'Pelvis',
    'values': []
  }
];

export const testIllnessInformationDSD: IllnessesInformation = {
  'defined_illnesses': [],
  'selected_illnesses': [
    {
      'icd10_code': 'N13.732',
      'icd10_name': 'Vesssicoureteral-reflux with reflux nephropathy with hydroureter, bilateral',
      'is_primary': false,
      'workup_planned': false
    },
    {
      'icd10_code': 'T67.2XXS',
      'icd10_name': 'Heat cramp, sequela',
      'is_primary': false,
      'workup_planned': false
    },
    {
      'icd10_code': 'E09.21',
      'icd10_name': 'Drug or chemical induced diabetes mellitus with diabetic nephropathy',
      'is_primary': true,
      'workup_planned': false
    },
    {
      'icd10_code': 'E11.8',
      'icd10_name': 'Type 2 diabetes mellitus with unspecified complications',
      'is_primary': false,
      'workup_planned': false
    }
  ],
  'is_edited_by_doctor': true
};

export const testVisitDataDSD = {
  'additionalInformation': {
    'additionalDoctorNotes': '',
    'definedIcdCodes': [],
    'knownDrugConflicts': [
      {
        'conflict': '',
        'potentialDrugs': [
          ''
        ]
      }
    ],
    'knownDrugAllergies': [
      {
        'conflict': '',
        'potentialDrugs': [
          ''
        ]
      }
    ],
    'physicalExam': [],
    'sportsCleared': {
      'cleared': 'cleared',
      'sports': '',
      'reason': '',
      'recommendations': ''
    },
    'sportsPhysical': [
      {
        'name': 'Medical'
      },
      {
        'name': 'Appearance',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Eyes / Ears / Throat / Nose',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Hearing',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Lymph Nodes',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Heart',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Murmurs',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Pulses',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Lungs',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Abdomen',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Genitourinary',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Skin',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Musculoskeletal'
      },
      {
        'name': 'Neck',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Back',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Shoulder / Arm',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Elbow / Forearm',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Wrist / Hands / Fingers',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Hip / Thigh',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Knee',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Leg / Ankle',
        'normal': true,
        'abnormal': ''
      },
      {
        'name': 'Foot / Toe',
        'normal': true,
        'abnormal': ''
      }
    ],
    'medicationInstructions': '',
    'treatmentDoctorNotes': '',
    'diagnosticDoctorNotes': '',
    'knownPrecautionConflicts': []
  },
  'orders': {
    'orderedLabs': [],
    'orderedMeasurements': [],
    'selectedLabs': [],
    'selectedMeasurements': [],
    'measurementsState': 'cancelled',
    'labsState': 'completed'
  },
  'drugInformation': [],
  'illness': [],
  'mediaReviewed': {
    'Edited': true,
    'General': true,
    'Cardiovascular': true,
    'Respiratory': true,
    'GI': true,
    'Eyes': true,
    'ENT': true,
    'Skin': true,
    'Muscular': true,
    'Psychiatric': true,
    'Lymph': true,
    'Neurological': true,
    'Female GU': true,
    'Male GU': true
  },
  'recommendedLabs': [
    'SYMPT0003962',
    'SYMPT0003355',
    'SYMPT0007570'
  ],
  'patientHealthHistory': {
    'version': '2.0',
    'historyItem': [
      {
        'dateAdded': '2019-08-05',
        'dateDetected': '2019-08-05',
        'historyType': 'Medications',
        'historyItem': '',
        'symptomID': 'SYMPT0001218',
        'externalID': '',
        'familyRelationship': '',
        'itemType': 'patient',
        'historyValue': false,
        'details': {}
      },
      {
        'dateAdded': '2019-08-05',
        'dateDetected': '2019-08-05',
        'historyType': 'Cancer',
        'historyItem': '',
        'symptomID': 'SYMPT0000050',
        'externalID': '',
        'familyRelationship': '',
        'itemType': 'patient',
        'historyValue': false,
        'details': {}
      },
      {
        'dateAdded': '2019-08-05',
        'dateDetected': '2019-08-05',
        'historyType': 'Medication Allergies',
        'historyItem': '',
        'symptomID': 'SYMPT0000997',
        'externalID': '',
        'familyRelationship': '',
        'itemType': 'patient',
        'historyValue': false,
        'details': {}
      },
      {
        'dateAdded': '2019-08-05',
        'dateDetected': '2019-08-05',
        'historyType': 'Cancer',
        'historyItem': '',
        'symptomID': 'SYMPT0000020',
        'externalID': '',
        'familyRelationship': 'Dad',
        'itemType': 'family',
        'historyValue': false,
        'details': {}
      }
    ],
    'drinkingStartDate': null,
    'drinkingEndDate': null,
    'lastDrinkDate': null,
    'smokingStartDate': null,
    'smokingEndDate': null,
    'patientOtherCancer': '',
    'familyOtherCancer': '',
    'familyOtherCancerRelation': '',
    'medsAllergyReactions': '',
    'otherSurgery': '',
    'otherDrugs': ''
  },
  'visitInformation': {
    'doctorName': 'Radmir D. Dayanov',
    'doctorId': 120,
    'doctorStartTime': '2019-08-09T16:52:39.010947+00:00',
    'doctorEndTime': '',
    'utcOffset': '',
    'locationId': 46,
    'initialVisitReason': 'Start Exam',
    'detailVisitReason': '',
    'status': 'PATIENT_WAITING',
    'kioskStartTime': '2019-08-05T19:50:51.481638Z',
    'kioskEndTime': '2019-08-05T19:55:16.880189Z',
    'sessionId': '4b2891a9-509f-47ab-8ca2-d4320bb7f5ff',
    'locationName': 'Shelby\'s House of Kiosks',
    'kioskName': 'WebKiosk1',
    'chiefComplaint': {
      'time': '2019-7-15',
      'severity': 6,
      'condition': 'Comes and Goes',
      'pain': false
    }
  },
  'patientInformation': {
    'firstName': 'hypo',
    'middleName': '',
    'lastName': 'glycemia',
    'patientId': '75061',
    'gender': 'Female',
    'maritalStatus': 'SINGLE',
    'birthDate': '2001-05-19',
    'pregnancyStatus': 'NO',
    'ethnicity': [
      'Caucasian'
    ],
    'photo': {
      'mediaUid': 'patient_1565034648613_2019-08-05T19_50_53_241485.png',
      'name': 'patient_1565034648613',
      'fileType': '.png',
      'size': 375286,
      'status': 'AVAILABLE',
      's3': 'https://kiosk-users-general.s3.amazonaws.com/patient_1565034648613_2019-08-05T19_50_53_241485.png?AWSAccessKeyId=AKIAI6OY4V3KUBW6KUTA&Signature=1VZNvUcowWd%2F8gGayM0W5jZAEkE%3D&Expires=1565373159',
      'createdAt': '2019-08-05T19:50:48.613000Z'
    },
    'email': [
      'asldktgjwe@gmail.com'
    ],
    'phone': [
      {
        'CELL': '5024385555'
      }
    ],
    'contactInformation': {
      'address': {
        'state': 'AZ',
        'addressLine1': 'aertyaergy',
        'addressLine2': '',
        'type': '',
        'zip': '50505',
        'countryCode': '+1',
        'city': 'aertey'
      }
    },
    'age': {
      'years': 18,
      'months': 2,
      'days': 21,
      'hours': 15,
      'minutes': 52,
      'seconds': 40,
      'milliseconds': 273
    },
    'idCard': null,
    'insuranceCard': null,
    'secondaryInsuranceCard': null,
    'nextOfKin': '',
    'primaryCarePhysician': '',
    'lastMenstruationDate': '2019-08-05',
    'pcpId': '',
    'otherMenstrualStatus': null,
    'isMenopausal': 'False',
    'hasMenstruation': 'True'
  },
  'triage': [
    {
      'time': '',
      'location': [
        'Pelvis'
      ],
      'response': false,
      'symptomId': 'SYMPT0000213',
      'symptomName': 'Pregnant',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Physical',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Pelvis',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000011',
      'symptomName': 'Illicit Drug User/Type',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0002070',
      'symptomName': 'History of Previous Illness',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Personal History',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000234',
      'symptomName': 'Immunization',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000044',
      'symptomName': 'History of Allergies',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Personal History',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000010',
      'symptomName': 'Current Caffeine Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000998',
      'symptomName': 'Pack Years',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000007',
      'symptomName': 'Was a Tobacco Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000006',
      'symptomName': 'Current Tobacco Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000008',
      'symptomName': 'Current Alcohol Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0001301',
      'symptomName': 'Drinks/Day',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000009',
      'symptomName': 'Time Since Last Drink',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000004',
      'symptomName': 'Summer seasonality',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Summer',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000005',
      'symptomName': 'Ethnicity/Genetics Caucasian',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Caucasian',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000002',
      'symptomName': 'Female',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Female',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000001',
      'symptomName': 'Adult',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          '18-65 Adult',
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-05 19:48:10.151000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000223',
      'symptomName': 'Patient Fever',
      'symptomSource': 'Measurement',
      'measurement': 95,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '2019-08-05 19:48:10.151000+00:00',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000225',
      'symptomName': 'Normal systolic arterial pressure',
      'symptomSource': 'Measurement',
      'measurement': 85,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Normal',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000224',
      'symptomName': 'Normal blood pressure',
      'symptomSource': 'Measurement',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Normal',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000226',
      'symptomName': 'Obese',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Very High',
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-06 14:06:54.972000+00:00',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0003358',
      'symptomName': 'Urine specific gravity greater than 1.026',
      'symptomSource': 'MA Added',
      'measurement': 1.15,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Labs',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Urinalysis',
      'values': [
        [
          'More Than 1.026',
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-06 14:06:26.178000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0007587',
      'symptomName': 'HIV antibody/antigen immunoassay',
      'symptomSource': 'MA Added',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Labs',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Microbiology',
      'values': [
        [
          null,
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-06 11:30:11.886000+00:00',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0003361',
      'symptomName': 'Urine protein test positive',
      'symptomSource': 'MA Added',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Labs',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Urinalysis',
      'values': [
        [
          'Positive',
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-06 11:30:11.266000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0003363',
      'symptomName': 'Urine nitrate test',
      'symptomSource': 'MA Added',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Labs',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Urinalysis',
      'values': [
        [
          null,
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-05 19:55:11.812000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000810',
      'symptomName': 'Photophobia',
      'symptomSource': 'Q&A',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Neurological',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Cognitive / Nervous System',
      'values': []
    },
    {
      'time': '2019-08-05 19:55:07.084000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000059',
      'symptomName': 'History of High Blood Pressure',
      'symptomSource': 'Q&A',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Personal History',
      'values': []
    },
    {
      'time': '2019-08-05 19:55:02.541000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0002952',
      'symptomName': 'Basic Head Pain',
      'symptomSource': 'Q&A',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Pain/Swelling',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Head',
      'values': []
    },
    {
      'time': '2019-08-05 19:54:42.557000+00:00',
      'location': [
        'Head'
      ],
      'response': true,
      'symptomId': 'SYMPT0000683',
      'symptomName': 'Lightheaded',
      'symptomSource': 'Collection',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Physical',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Head',
      'values': [
        [
          null,
          3,
          'Weeks'
        ]
      ]
    },
    {
      'time': '2019-08-05 19:48:10.151000+00:00',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000225',
      'symptomName': 'Normal systolic arterial pressure',
      'symptomSource': 'Measurement',
      'measurement': 85,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Normal',
          null,
          null
        ]
      ]
    },
    {
      'time': '2019-08-05 19:48:10.151000+00:00',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000223',
      'symptomName': 'Patient Fever',
      'symptomSource': 'Measurement',
      'measurement': 95,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000226',
      'symptomName': 'Obese',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Very High',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000224',
      'symptomName': 'Normal blood pressure',
      'symptomSource': 'Measurement',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Measurements',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Normal',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000001',
      'symptomName': 'Adult',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          '18-65 Adult',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000002',
      'symptomName': 'Female',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Female',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000005',
      'symptomName': 'Ethnicity/Genetics Caucasian',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Caucasian',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': 'Other',
      'symptomId': 'SYMPT0000004',
      'symptomName': 'Summer seasonality',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': [
        [
          'Summer',
          null,
          null
        ]
      ]
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000009',
      'symptomName': 'Time Since Last Drink',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0001301',
      'symptomName': 'Drinks/Day',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000008',
      'symptomName': 'Current Alcohol Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000006',
      'symptomName': 'Current Tobacco Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000007',
      'symptomName': 'Was a Tobacco Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000998',
      'symptomName': 'Pack Years',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000010',
      'symptomName': 'Current Caffeine Consumer',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000044',
      'symptomName': 'History of Allergies',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Personal History',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000234',
      'symptomName': 'Immunization',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0002070',
      'symptomName': 'History of Previous Illness',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Personal History',
      'values': []
    },
    {
      'time': '',
      'location': [],
      'response': false,
      'symptomId': 'SYMPT0000011',
      'symptomName': 'Illicit Drug User/Type',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'General',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Core Symptoms',
      'values': []
    },
    {
      'time': '',
      'location': [
        'Pelvis'
      ],
      'response': false,
      'symptomId': 'SYMPT0000213',
      'symptomName': 'Pregnant',
      'symptomSource': 'Preprocessor',
      'measurement': null,
      'symptomCategory': '',
      'symptomCategoryId': '',
      'symptomGroup': 'Physical',
      'symptomGroupId': '',
      'icdGroup': '',
      'categoryName': 'Pelvis',
      'values': []
    }
  ],
  'diagnosticEngine': [
    {
      'icd10': 'E11.8',
      'contributors': [
        {
          'symptomName': 'History of High Blood Pressure',
          'contribution': -0.0364,
          'symptomId': 'SYMPT0000059'
        },
        {
          'symptomName': 'Patient Age',
          'contribution': 0.0545,
          'symptomId': 'SYMPT0000001'
        },
        {
          'symptomName': 'Protein, Urine',
          'contribution': 0.3636,
          'symptomId': 'SYMPT0003361'
        },
        {
          'symptomName': 'Smart Body Index',
          'contribution': 0.5455,
          'symptomId': 'SYMPT0000226'
        }
      ],
      'iCriticality': 5,
      'isDoctorAdded': false,
      'confidence': 0.031004862691908795,
      'icdGroup': 'Type 2 diabetes mellitus with other specified complications',
      'icdName': 'Type 2 diabetes mellitus with unspecified complications',
      'isSelected': true,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'T67.2XXS',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 0.5,
          'symptomId': 'SYMPT0003361'
        },
        {
          'symptomName': 'Urine specific gravity',
          'contribution': 0.5,
          'symptomId': 'SYMPT0003358'
        }
      ],
      'iCriticality': 5,
      'isDoctorAdded': false,
      'confidence': 0.024642486020246237,
      'icdGroup': 'Heat cramp',
      'icdName': 'Heat cramp, sequela',
      'isSelected': true,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'N13.721',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.022103718121204142,
      'icdGroup': 'Vesicoureteral-reflux',
      'icdName': 'Vesicoureteral-reflux with reflux nephropathy without hydroureter, unilateral',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'N13.722',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.022103718121204142,
      'icdGroup': 'Vesicoureteral-reflux',
      'icdName': 'Vesicoureteral-reflux with reflux nephropathy without hydroureter, bilateral',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'N13.729',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.022103718121204142,
      'icdGroup': 'Vesicoureteral-reflux',
      'icdName': 'Vesicoureteral-reflux with reflux nephropathy without hydroureter, unspecified',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'N13.731',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.021664433292946827,
      'icdGroup': 'Vesicoureteral-reflux',
      'icdName': 'Vesicoureteral-reflux with reflux nephropathy with hydroureter, unilateral',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'T67.0XXS',
      'contributors': [
        {
          'symptomName': 'Urine specific gravity',
          'contribution': 0.5,
          'symptomId': 'SYMPT0003358'
        },
        {
          'symptomName': 'Protein, Urine',
          'contribution': 0.5,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 8,
      'isDoctorAdded': false,
      'confidence': 0.020929988529813922,
      'icdGroup': 'Heatstroke and sunstroke',
      'icdName': 'Heatstroke and sunstroke, sequela',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'N13.739',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.01943123965677864,
      'icdGroup': 'Vesicoureteral-reflux',
      'icdName': 'Vesicoureteral-reflux with reflux nephropathy with hydroureter, unspecified',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'E09.21',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 5,
      'isDoctorAdded': false,
      'confidence': 0.0191308879366591,
      'icdGroup': 'Type 2 diabetes mellitus with kidney complications',
      'icdName': 'Drug or chemical induced diabetes mellitus with diabetic nephropathy',
      'isSelected': true,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'T67.0XXD',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 0.3333,
          'symptomId': 'SYMPT0003361'
        },
        {
          'symptomName': 'Urine specific gravity',
          'contribution': 0.6667,
          'symptomId': 'SYMPT0003358'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.018510759725405793,
      'icdGroup': 'Heatstroke and sunstroke',
      'icdName': 'Heatstroke and sunstroke, subsequent encounter',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'N13.732',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 7,
      'isDoctorAdded': false,
      'confidence': 0.01803043276990525,
      'icdGroup': 'Vesicoureteral-reflux',
      'icdName': 'Vesssicoureteral-reflux with reflux nephropathy with hydroureter, bilateral',
      'isSelected': true,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'T67.2XXD',
      'contributors': [
        {
          'symptomName': 'Protein, Urine',
          'contribution': 1,
          'symptomId': 'SYMPT0003361'
        }
      ],
      'iCriticality': 6,
      'isDoctorAdded': false,
      'confidence': 0.01566520072803763,
      'icdGroup': 'Heat cramp',
      'icdName': 'Heat cramp, subsequent encounter',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    },
    {
      'icd10': 'T67.0XXA',
      'contributors': [
        {
          'symptomName': 'Basic Head Pain',
          'contribution': -0.6,
          'symptomId': 'SYMPT0002952'
        },
        {
          'symptomName': 'Urine specific gravity',
          'contribution': 0.4,
          'symptomId': 'SYMPT0003358'
        }
      ],
      'iCriticality': 8,
      'isDoctorAdded': false,
      'confidence': 0.002260494735126519,
      'icdGroup': 'Heatstroke and sunstroke',
      'icdName': 'Heatstroke and sunstroke, initial encounter',
      'isSelected': false,
      'isPrimary': false,
      'source': 'DE',
      'groupRanking': 0
    }
  ],
  'treatmentEngine': [],
  'measurements': [
    {
      'measureType': 'HEIGHT',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:50:48.601000+00:00',
      'value': {
        'bodySide': '',
        'value': 61,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'PULSE',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:48:10.151000+00:00',
      'value': {
        'bodySide': '',
        'value': 85,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'BLOOD_OXYGEN',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:48:10.151000+00:00',
      'value': {
        'bodySide': '',
        'value': 95,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'TEMPERATURE',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:48:10.151000+00:00',
      'value': {
        'bodySide': '',
        'value': 95,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'SYSTOLIC',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:48:10.150000+00:00',
      'value': {
        'bodySide': '',
        'value': 110,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'DIASTOLIC',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:48:10.150000+00:00',
      'value': {
        'bodySide': '',
        'value': 60,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'WEIGHT',
      'trustabilityScore': 5,
      'timestamp': '2019-08-05T19:48:10.150000+00:00',
      'value': {
        'bodySide': '',
        'value': 165,
        'bodyPart': '',
        'status': '',
        'fileType': '',
        'fileName': '',
        'createdAt': '',
        'file': ''
      }
    },
    {
      'measureType': 'MEAN_ARTERIAL_PRESSURE',
      'trustabilityScore': 0,
      'timestamp': '2019-08-09T16:52:39.939882+00:00',
      'value': {
        'bodyPart': '',
        'bodySide': '',
        'createdAt': '',
        'file': '',
        'fileName': '',
        'fileType': '',
        'status': '',
        'value': 0
      }
    },
    {
      'measureType': 'OTOSCOPE',
      'trustabilityScore': 0,
      'timestamp': '2019-08-09T16:52:39.939899+00:00',
      'value': {
        'bodyPart': '',
        'bodySide': '',
        'createdAt': '',
        'file': '',
        'fileName': '',
        'fileType': '',
        'status': '',
        'value': 0
      }
    },
    {
      'measureType': 'STETHOSCOPE',
      'trustabilityScore': 0,
      'timestamp': '2019-08-09T16:52:39.939910+00:00',
      'value': {
        'bodyPart': '',
        'bodySide': '',
        'createdAt': '',
        'file': '',
        'fileName': '',
        'fileType': '',
        'status': '',
        'value': 0
      }
    },
    {
      'measureType': 'RESPIRATORY_RATE',
      'trustabilityScore': 0,
      'timestamp': '2019-08-09T16:52:39.939919+00:00',
      'value': {
        'bodyPart': '',
        'bodySide': '',
        'createdAt': '',
        'file': '',
        'fileName': '',
        'fileType': '',
        'status': '',
        'value': 0
      }
    },
    {
      'measureType': 'LEFT_EYE',
      'trustabilityScore': 0,
      'timestamp': '2019-08-09T16:52:39.939929+00:00',
      'value': {
        'bodyPart': '',
        'bodySide': '',
        'createdAt': '',
        'file': '',
        'fileName': '',
        'fileType': '',
        'status': '',
        'value': 0
      }
    },
    {
      'measureType': 'RIGHT_EYE',
      'trustabilityScore': 0,
      'timestamp': '2019-08-09T16:52:39.939938+00:00',
      'value': {
        'bodyPart': '',
        'bodySide': '',
        'createdAt': '',
        'file': '',
        'fileName': '',
        'fileType': '',
        'status': '',
        'value': 0
      }
    }
  ],
  'schemaVersion': 2,
  'dataSource': 'patient_data',
  'behavioralScreening': [],
  'illnessInformation': {
    'defined_illnesses': [],
    'selected_illnesses': [
      {
        'icd10_code': 'N13.732',
        'icd10_name': 'Vesssicoureteral-reflux with reflux nephropathy with hydroureter, bilateral',
        'is_primary': false
      },
      {
        'icd10_code': 'T67.2XXS',
        'icd10_name': 'Heat cramp, sequela',
        'is_primary': false
      },
      {
        'icd10_code': 'E09.21',
        'icd10_name': 'Drug or chemical induced diabetes mellitus with diabetic nephropathy',
        'is_primary': true
      },
      {
        'icd10_code': 'E11.8',
        'icd10_name': 'Type 2 diabetes mellitus with unspecified complications',
        'is_primary': false
      }
    ],
    'is_edited_by_doctor': true
  },
  'treatmentsDirty': false,
  'injections': [
    {
      'name': 'Acetaminophen (adult)',
      'dosage': '500mg',
      'route': 'Other',
      'state': 'ordered',
      'expiration': '2020-11-22',
      'lotNumber': '22',
      'brandName': 'test',
      'NDC': 'test',
      'toleratedWell': true,
      'noDifficulty': true,
      'orderedBy': 225,
      'givenBy': null,
      'needleSize': '',
      'diluent': null,
      'complications': null,
      'timeWaited': 12,
      'concentration': '',
      'id': 293
    }
  ],
  'medications': [
    {
      'name': 'Acetaminophen (adult)',
      'dosage': '500mg',
      'route': 'Other',
      'state': 'completed',
      'expiration': '2020-11-22',
      'lotNumber': '22',
      'brandName': 'test',
      'NDC': 'test',
      'toleratedWell': true,
      'noDifficulty': true,
      'complications': null,
      'timeWaited': 12,
      'form': 'Tablet',
      'id': 382
    }
  ]
};
