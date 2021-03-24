export const dosageJSON = [
  {
    'drug_name': 'DIGOXIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '250 MCG/ML',
        'options': [
          '250 MCG/ML',
          '100 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '250 MCG',
        'options': [
          '250 MCG',
          '125 MCG',
          '50 MCG/ML',
          '100 MCG',
          '0.125/2.5',
          '187.5 MCG',
          '0.25MG/5ML',
          '62.5 MCG',
          '200 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAFFEINE/SODIUM BENZOATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '250 MG/ML',
        'options': [
          '250 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAFFEINE CITRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '60 MG/3 ML',
        'options': [
          '60 MG/3 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '60 MG/3 ML',
        'options': [
          '60 MG/3 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THEOPHYLLINE/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/.25L',
        'options': [
          '400MG/.25L',
          '400MG/0.5L',
          '800MG/0.5L',
          '800MG/L',
          '200MG/0.1L',
          '200MG/50ML',
          '800MG/.25L',
          '400MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THEOPHYLLINE ANHYDROUS',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '200 MG',
          '100 MG',
          '80 MG/15ML',
          '400 MG',
          '450 MG',
          '600 MG',
          '125 MG',
          '75 MG',
          '100/18.75'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINOPHYLLINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250MG/10ML',
        'options': [
          '250MG/10ML',
          '500MG/20ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DYPHYLLINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 MG/ML',
        'options': [
          '250 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '400 MG',
          '100MG/15ML',
          '160MG/15ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXTRIPHYLLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOBUTAMINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250MG/20ML',
        'options': [
          '250MG/20ML',
          '500MG/40ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INAMRINONE LACTATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100MG/20ML',
        'options': [
          '100MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/THEOPHYLLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '90MG-150MG',
        'options': [
          '90MG-150MG',
          '90-150',
          '200-150'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DYPHYLLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-200 MG',
        'options': [
          '200-200 MG',
          '100-100/15',
          '100-100/5',
          '300-200 MG',
          '50-100MG/5',
          '400-200 MG',
          '200-100/5',
          '100-200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IPRATROPIUM BROMIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.2 MG/ML',
        'options': [
          '0.2 MG/ML',
          '17MCG',
          '18 MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'inhale',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'puff(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'NASAL',
        'default': '42 MCG',
        'options': [
          '42 MCG',
          '21 MCG'
        ]
      }
    ]
  },
  {
    'drug_name': 'BECLOMETHASONE DIPROPIONATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '80 MCG',
        'options': [
          '80 MCG',
          '40 MCG',
          '42 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '42 MCG',
        'options': [
          '42 MCG',
          '40 MCG',
          '80 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUNISOLIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '80 MCG',
        'options': [
          '80 MCG',
          '250 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '25 MCG',
        'options': [
          '25 MCG',
          '29MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUINIDINE GLUCONATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '80 MG/ML',
        'options': [
          '80 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '324 MG',
        'options': [
          '324 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUINIDINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROCAINAMIDE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML',
          '500 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '375 MG',
          '750 MG',
          '1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DISOPYRAMIDE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLECAINIDE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMIODARONE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '150 MG/3ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '400 MG',
          '100 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEXILETINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '200 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDRALAZINE HCL/RESERPINE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-0.1-15',
        'options': [
          '25-0.1-15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDRALAZINE HCL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-50MG',
        'options': [
          '50 MG-50MG',
          '25 MG-25MG',
          '100MG-50MG',
          '25 MG-15MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDRALAZINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '10 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRAZOSIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIAZOXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MINOXIDIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %',
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERAZOSIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '5 MG',
          '10 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUANETHIDINE SULFATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-25MG',
        'options': [
          '10 MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUANETHIDINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RESERPINE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.125-25MG',
        'options': [
          '0.125-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RESERPINE/METHYCLOTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.1-2.5MG',
        'options': [
          '0.1-2.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RESERPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG',
        'options': [
          '0.25 MG',
          '0.1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESERPIDINE/METHYCLOTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25-5MG',
        'options': [
          '0.25-5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLONIDINE HCL/CHLORTHALIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.2-15MG',
        'options': [
          '0.2-15MG',
          '0.1MG-15MG',
          '0.3MG-15MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLONIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.1 MG',
        'options': [
          '0.1 MG',
          '0.2 MG',
          '0.3 MG',
          '0.1-0.2 MG',
          '0.17 MG',
          '0.09 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUANABENZ ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLDOPA/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250MG-25MG',
        'options': [
          '250MG-25MG',
          '250MG-15MG',
          '500MG-50MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLDOPA',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUANFACINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '4 MG',
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RAUWOLFIA SERPENTINA/BENDROFLUMETHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-4 MG',
        'options': [
          '50 MG-4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECAMYLAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAPTOPRIL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-25MG',
        'options': [
          '50 MG-25MG',
          '25 MG-15MG',
          '25 MG-25MG',
          '50 MG-15MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAPTOPRIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '12.5 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENALAPRIL MALEATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-25MG',
        'options': [
          '10 MG-25MG',
          '5MG-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENALAPRIL MALEATE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '5 MG',
          '2.5 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LISINOPRIL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-12.5 MG',
        'options': [
          '20-12.5 MG',
          '20 MG-25MG',
          '10-12.5MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'LISINOPRIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '5 MG',
          '40 MG',
          '2.5 MG',
          '30 MG',
          '1 MG/ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NITROPRUSSIDE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METYROSINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPRANOLOL HCL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG-25MG',
        'options': [
          '40 MG-25MG',
          '80 MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METOPROLOL TARTRATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-25MG',
        'options': [
          '50 MG-25MG',
          '100MG-25MG',
          '100MG-50MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NADOLOL/BENDROFLUMETHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG-5 MG',
        'options': [
          '80 MG-5 MG',
          '40 MG-5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATENOLOL/CHLORTHALIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-25MG',
        'options': [
          '50 MG-25MG',
          '100MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOTHALAMATE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '66.8%',
        'options': [
          '66.8%',
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOPAMIDOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '41 %',
        'options': [
          '41 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRATHECAL',
        'default': '41 %',
        'options': [
          '41 %',
          '61 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '76 %',
        'options': [
          '76 %',
          '61 %',
          '51%',
          '41 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOHEXOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '300 MG/ML',
        'options': [
          '300 MG/ML',
          '350 MG/ML',
          '240 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRATHECAL',
        'default': '180 MG/ML',
        'options': [
          '180 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '300 MG/ML',
        'options': [
          '300 MG/ML',
          '350 MG/ML',
          '240 MG/ML',
          '140 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOXAGLATE MEGLUMINE/IOXAGLATE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '39.3-19.6',
        'options': [
          '39.3-19.6'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIHYDROERGOTAMINE MESYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '0.5MG/SPRY',
        'options': [
          '0.5MG/SPRY'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM NITRITE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '30 MG/ML',
        'options': [
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITROGLYCERIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/10ML',
        'options': [
          '50 MG/10ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '6.5 MG',
        'options': [
          '6.5 MG',
          '2.5 MG',
          '9 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '0.4% (W/W)',
        'options': [
          '0.4% (W/W)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '0.4 MG',
        'options': [
          '0.4 MG',
          '0.6 MG',
          '0.3 MG',
          '400 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '0.2MG/HR',
        'options': [
          '0.2MG/HR',
          '0.4MG/HR',
          '0.1MG/HR',
          '0.6MG/HR',
          '2 %',
          '0.3 MG/HR',
          '0.8MG/HR'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSLINGUAL',
        'default': '400MCG/SPR',
        'options': [
          '400MCG/SPR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMYL NITRITE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.3 ML',
        'options': [
          '0.3 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOSORBIDE DINITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '5 MG',
          '40 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPYRIDAMOLE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAPAVERINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '30 MG/ML',
        'options': [
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERGOLOID MESYLATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOXSUPRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALPROSTADIL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MCG/ML',
        'options': [
          '500 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRACAVERNOSAL',
        'default': '10 MCG',
        'options': [
          '10 MCG',
          '20 MCG',
          '40 MCG',
          '40MCG/2ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'URETHRAL',
        'default': '125 MCG',
        'options': [
          '125 MCG',
          '500 MCG',
          '1000 MCG',
          '250 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM MORRHUATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHANOLAMINE OLEATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VERAPAMIL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5 MG/ML',
        'options': [
          '2.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '240 MG',
        'options': [
          '240 MG',
          '120 MG',
          '180 MG',
          '80 MG',
          '40 MG',
          '200 MG',
          '300 MG',
          '360 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NIFEDIPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '60 MG',
          '10 MG',
          '90 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DILTIAZEM HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '120 MG',
        'options': [
          '120 MG',
          '240 MG',
          '180 MG',
          '300 MG',
          '360 MG',
          '60 MG',
          '30 MG',
          '90 MG',
          '420 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NICARDIPINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG/10ML',
        'options': [
          '25 MG/10ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '20 MG',
          '45 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NIMODIPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '60 MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE FOR INHALATION',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETYLCYSTEINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'MISCELLANEOUS',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '2.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROMORPHONE HCL/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-100 MG/5',
        'options': [
          '1-100 MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CODEINE PHOSPHATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-100MG/5',
        'options': [
          '10-100MG/5',
          '20-200/10',
          '10-200MG/5',
          '10MG-300MG',
          '5-150/10ML',
          '10-300MG/5',
          '6.3-100/5',
          '20MG-400MG',
          '10MG-400MG',
          '7.5-225/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/HYDROCODONE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-5 MG/5',
        'options': [
          '100-5 MG/5',
          '200-2.5/5',
          '300-2.5MG',
          '1000-10 MG',
          '1200-10MG',
          '600MG-5MG',
          '575MG-5MG',
          '100-3.5/5',
          '150-5MG/5',
          '200-6MG/5',
          '100-4MG/5',
          '90-3MG/5ML',
          '200-7.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE/PHENYLEPHRINE/DEXTROMETHORPHAN/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2-10-7.5/5',
        'options': [
          '2-10-7.5/5',
          '2.5-8.5/5',
          '2-10-15/5',
          '2-5-15-100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN HBR/PHENYLEPHRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-15-5/5',
        'options': [
          '200-15-5/5',
          '200-30-10',
          '800-20-20',
          '600-30-15',
          '600-60-40',
          '600-30-20',
          '600-25-20',
          '1200-30-30',
          '25-12.5/5',
          '100-20-10',
          '1200-20-40',
          '300-15-10',
          '550-25-20',
          '50-5-2.5/1',
          '1000-60-40',
          '100-15-5/5',
          '225-15-10',
          '288-14-7MG',
          '35-3-2.5/1',
          '1200-45-25',
          '600-30-10',
          '600-23-9MG',
          '900-30-30',
          '45-3-2/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN HBR/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-30-60',
        'options': [
          '600-30-60',
          '595-32-48',
          '175-15-32',
          '100-15-45',
          '1200-60-60',
          '200-15-30',
          '800-30-60',
          '25-15-30/5',
          '100-15-30',
          '100-15-40',
          '200-20-30',
          '175-15-30',
          '580-30-60',
          '20-4-10/ML',
          '50-5-15/5',
          '780-40-80',
          '20-4-20/ML',
          '400-20-40',
          '200-15-32',
          '60MG-120MG',
          '575-30-25',
          '600-30-45',
          '575-30-60',
          '150-15-30',
          '600-28-58',
          '700-40-80'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN HBR',
    'types': [
      {
        'route': 'ORAL',
        'default': '600MG-30MG',
        'options': [
          '600MG-30MG',
          '1200-60MG',
          '100-10MG/5',
          '200-20MG/5',
          '1000-60 MG',
          '400MG-20MG',
          '1000-55MG',
          '1200-20MG',
          '225-25MG/5',
          '800MG-60MG',
          '25-15MG/5',
          '800MG-30MG',
          '835MG-30MG',
          '50-3MG/ML',
          '575MG-30MG',
          '835MG-28MG',
          '300-10MG/5',
          '600MG-28MG',
          '250-15MG/5',
          '650MG-30MG'
        ],
        'quantity': 60.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN/SODIUM CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-10-50/5',
        'options': [
          '15-10-50/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE HCL/HYDROCODONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-7.5-2.5',
        'options': [
          '50-7.5-2.5',
          '120-6-2.5',
          '225-10-2.5',
          '150-6-2.5',
          '100-15-5/5',
          '100-7.5-5',
          '100-10-2/5',
          '300-10-5/5',
          '5-2.5 MG/5',
          '7.5-2.5/5',
          '100-10-4/5',
          '200-2.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE HCL/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-2-1/ML',
        'options': [
          '20-2-1/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1200-40MG',
        'options': [
          '1200-40MG',
          '600MG-40MG',
          '100-7.5/5',
          '600MG-20MG',
          '1200-25MG',
          '900-30MG',
          '900-25MG',
          '600-10MG',
          '100-5 MG/5',
          '200-7.5MG',
          '20-1.5/ML',
          '200-7.5/5',
          '200-5MG/5',
          '600-25MG',
          '275-25MG',
          '600-15MG',
          '1200-30MG',
          '45-2MG/ML',
          '835MG-25MG',
          '1100-30MG',
          '400MG-15MG',
          '300MG-20MG',
          '1050-30MG',
          '800MG-30MG',
          '800MG-25MG',
          '75-7.5MG/5',
          '800MG-40MG',
          '600-18MG',
          '800-20MG',
          '225-10MG/5',
          '1000-30MG',
          '1200-35MG',
          '550-8.5MG',
          '835MG-30MG',
          '1200-20MG',
          '650-23.75',
          '650MG-40MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLPROPANOLAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400-75MG',
        'options': [
          '400-75MG',
          '600-75MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE/PSEUDOEPHEDRINE HCL/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-60-200MG',
        'options': [
          '5-60-200MG',
          '2.5-30-100',
          '3-15-100/5',
          '2.5-30-200',
          '6-45-200/5',
          '3.75-22.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PSEUDOEPHEDRINE HCL/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-32.4-2',
        'options': [
          '100-32.4-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-120MG',
        'options': [
          '600-120MG',
          '600MG-60MG',
          '1200-120MG',
          '250-120MG',
          '200-40MG/5',
          '300MG-60MG',
          '500-120 MG',
          '600-45MG',
          '795MG-85MG',
          '800MG-80MG',
          '1200-50MG',
          '595MG-48MG',
          '400MG-90MG',
          '200-45/5ML',
          '580MG-60MG',
          '600-60-600',
          '1200-90MG',
          '1200-75MG',
          '200MG-60MG',
          '525MG-50MG',
          '1200-60MG',
          '400-120MG',
          '780MG-80MG',
          '600-90MG',
          '800MG-60MG',
          '500MG-60MG',
          '700-80MG',
          '150MG-30MG',
          '100-60MG',
          '600-58MG',
          '525-120MG',
          '650-45MG'
        ],
        'quantity': 40.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '3'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          },
          {
            'blockType': 'combine',
            'blockName': 'then',
            'instructions': null
          },
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '1200 MG',
          '100 MG/5ML',
          '200 MG',
          '1000 MG',
          '575MG',
          '250 MG/5ML',
          '50 MG/ML',
          '200 MG/5ML',
          '800 MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '12'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE/HYDROCODONE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-5MG/5',
        'options': [
          '300-5MG/5',
          '300-4.5/5',
          '350-3MG/5',
          '150-3MG/5',
          '120-2.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE/PSEUDOEPHEDRINE HCL/HYDROCODONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-30-5/5',
        'options': [
          '300-30-5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CODEINE/CHLORPHENIRAMINE/POTASSIUM IODIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-5-75/5',
        'options': [
          '2.5-5-75/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROMETHAZINE HCL/CODEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6.25-10/5',
        'options': [
          '6.25-10/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2MG-10MG/5',
        'options': [
          '2MG-10MG/5',
          '4 MG-20 MG',
          '4MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CODEINE POLISTIREX/CHLORPHENIRAMINE POLISTIREX',
    'types': [
      {
        'route': 'ORAL',
        'default': '14.7-2.8/5',
        'options': [
          '14.7-2.8/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE POLISTIREX/CHLORPHENIRAMINE POLISTIREX',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-8MG/5ML',
        'options': [
          '10-8MG/5ML',
          '10MG-8MG',
          '5MG-4MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROMETHAZINE HCL/DEXTROMETHORPHAN HBR',
    'types': [
      {
        'route': 'ORAL',
        'default': '6.25-15/5',
        'options': [
          '6.25-15/5'
        ],
        'quantity': 120.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '5'
              },
              {
                'typeName': 'unit',
                'value': 'ml'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '6'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '6'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/DEXTROMETHORPHAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-12.5-15',
        'options': [
          '4-12.5-15',
          '1-3.5-3/ML',
          '4-10-15/5',
          '8-20-30 MG',
          '2-5-15MG/5',
          '2-6-15MG/5',
          '1-2-3MG/ML',
          '1-1.5-3/ML',
          '0.75 MG/ML',
          '2-10-15/5',
          '0.6-1.5/ML',
          '2-5-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/PHENYLPROPANOLAMINE HCL/BROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-12.5-2',
        'options': [
          '10-12.5-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBINOXAMINE MALEATE/PSEUDOEPHEDRINE HCL/DEXTROMETHORPHAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-60-15/5',
        'options': [
          '4-60-15/5',
          '2-25-4/ML',
          '1-15-4MG/1',
          '2-15-4/ML',
          '3-15-15/5',
          '2.67-12.5',
          '3-12.5-15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PSEUDOEPHEDRINE HCL/DEXTROMETHORPHAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2-30-10/5',
        'options': [
          '2-30-10/5',
          '4-45-15/5',
          '4-60-15/5',
          '1-15-4MG/1',
          '1-12.5-3/1',
          '3-30-15/5',
          '3-50-30 MG',
          '1-12-5MG/1',
          '4-60-30/5',
          '4-20-20/5',
          '1-30-20/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/PSEUDOEPHEDRINE/DEXTROMETHORPHAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.8-9-3/ML',
        'options': [
          '0.8-9-3/ML',
          '2-30-20/5',
          '2-30-15/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-2.5MG/ML',
        'options': [
          '5-2.5MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/EPHED TAN/PHENYLEPHRINE/CHLORPHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '60-10-10-5',
        'options': [
          '60-10-10-5',
          '30-5-5-4/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PHENYLPROPANOLAMINE HCL/PYRIL/CHLORPHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-10-10-2',
        'options': [
          '10-10-10-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PPA/PHENYLTOLOXAMINE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1/2',
        'options': [
          '1/2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PROMETHAZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-6.25MG/5',
        'options': [
          '5-6.25MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROMETHAZINE/PHENYLEPHRINE HCL/CODEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6.25-5-10',
        'options': [
          '6.25-5-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/PYRILAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-1.66MG/5',
        'options': [
          '5-1.66MG/5',
          '5-5-5MG/5',
          '5-6-12MG/5',
          '5-2-8.33/5',
          '3.5-12.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-2.5-2',
        'options': [
          '5-2.5-2',
          '5-1.67-2/5',
          '5-5-2MG/5',
          '10-2.5-2/5',
          '7.5-3.5-2',
          '10-5-2MG/5',
          '7.5-5-3/5',
          '7.5-2-2/5',
          '10-3.5-2.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/ACETAMINOPHEN/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-500-8MG',
        'options': [
          '40-500-8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE/PYRILAMINE TANNATE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-12.5-2/5',
        'options': [
          '5-12.5-2/5',
          '25-25-8MG',
          '15-12.5-8'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PYRILAMINE MALEATE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-12.5-2',
        'options': [
          '7.5-12.5-2',
          '10-10-2/5',
          '10-10-2MG',
          '10-25-4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PHENYLTOLOXAMINE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-50-4MG',
        'options': [
          '20-50-4MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG-30 MG',
        'options': [
          '6 MG-30 MG',
          '6 MG-19 MG',
          '6 MG-7.5MG',
          '4-7.5MG/5',
          '12 MG-15MG',
          '4-10MG/5ML',
          '2-7.5 MG/5',
          '6MG-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-12.5MG/5',
        'options': [
          '4-12.5MG/5',
          '8 MG-20 MG',
          '1MG-2MG/ML',
          '1-3.5MG/ML',
          '4 MG-20 MG',
          '3.5MG-10MG',
          '4-10MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLPROPANOLAMINE HCL/HYDROCODONE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-2.5',
        'options': [
          '12.5-2.5',
          '25-5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLPROPANOLAMINE HCL/PYRILAMINE/PHENYLTOLOXAMINE/PHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': 'ADULT',
        'options': [
          'ADULT',
          'PEDIATRIC'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLPROPANOLAMINE HCL/CLEMASTINE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '75-1.34MG',
        'options': [
          '75-1.34MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CODEINE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-10-2/5',
        'options': [
          '30-10-2/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-10MG/5',
        'options': [
          '30-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITART/CHLORPHENIRAMINE MALEATE/PSEUDOEPHEDRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-2-30/5',
        'options': [
          '2.5-2-30/5',
          '5-4-60MG/5',
          '3-2-15MG/5',
          '5-4-40MG/5',
          '5-2-30 MG',
          '5-2-30MG/5',
          '2.5-2-15/5',
          '1.67-2.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/HYDROCODONE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60-5MG/5ML',
        'options': [
          '60-5MG/5ML',
          '60 MG-5 MG',
          '15-3MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/ACETAMINOPHEN/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-500-2MG',
        'options': [
          '30-500-2MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBINOXAMINE MALEATE/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-60MG/5ML',
        'options': [
          '4-60MG/5ML',
          '1-15 MG/ML',
          '8 MG-120MG',
          '2-15 MG/ML',
          '2-15MG/5ML',
          '4 MG-60 MG',
          '2-17.5MG/5',
          '2-30MG/5ML',
          '2-25MG/5ML',
          '8 MG-80 MG',
          '2-20MG/5ML',
          '2-12.5MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-45MG/5ML',
        'options': [
          '4-45MG/5ML',
          '6 MG-60 MG',
          '4-60MG/5ML',
          '12MG-120MG',
          '6 MG-45 MG',
          '1-12.5MG/1',
          '1-7.5MG/ML',
          '10MG-120MG',
          '4 MG-60 MG',
          '4-30MG/5ML',
          '4-20MG/5ML',
          '5.75-60 MG',
          '9 MG-90 MG',
          '2-30MG/5ML',
          '1-15 MG/ML',
          '12 MG-90MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG-120MG',
        'options': [
          '8 MG-120MG',
          '4 MG-60 MG',
          '2-30MG/5ML',
          '12MG-120MG',
          '0.8-9MG/ML',
          '12MG-100MG',
          '1 MG-15 MG',
          '4-80MG/5ML',
          '2 MG-15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIPROLIDINE HCL/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.25-45/5',
        'options': [
          '1.25-45/5',
          '2.5MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE SULFATE/AZATADINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '120 MG-1MG',
        'options': [
          '120 MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM BICARBONATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MEQ/ML',
        'options': [
          '1 MEQ/ML',
          '0.5MEQ/ML',
          '0.9MEQ/ML',
          '10MEQ/10ML',
          '0.6MEQ/ML',
          '0.48MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM LACTATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '167MEQ/L',
        'options': [
          '167MEQ/L',
          '5 MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TROMETHAMINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '36 MG/ML',
        'options': [
          '36 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DISULFIRAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM ACETATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MEQ/ML',
        'options': [
          '2 MEQ/ML',
          '4 MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CITRATE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '4 G/100 ML',
        'options': [
          '4 G/100 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 MEQ/ML',
        'options': [
          '4 MEQ/ML',
          '2.5 MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '2 %',
        'options': [
          '2 %',
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PHOS,M-BASIC-D-BASIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3MMOL/ML',
        'options': [
          '3MMOL/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM BICARBONATE/POTASSIUM CITRATE/CITRIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '50MEQ',
        'options': [
          '50MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM BICARBONATE/CITRIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MEQ',
        'options': [
          '25 MEQ',
          '20 MEQ',
          '10 MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM ACETATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MEQ/ML',
        'options': [
          '2 MEQ/ML',
          '4 MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MEQ',
        'options': [
          '10 MEQ',
          '15 MEQ',
          '5 MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MEQ/ML',
        'options': [
          '2 MEQ/ML',
          '20MEQ/0.1L',
          '20MEQ/50ML',
          '10MEQ/50ML',
          '40MEQ/0.1L',
          '30MEQ/0.1L',
          '10MEQ/0.1L'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MEQ',
        'options': [
          '10 MEQ',
          '20 MEQ',
          '8 MEQ',
          '20MEQ/15ML',
          '40MEQ/15ML',
          '15 MEQ',
          '25 MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GLUCONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20MEQ/15ML',
        'options': [
          '20MEQ/15ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM PHOS,M-BASIC-D-BASIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3MMOL/ML',
        'options': [
          '3MMOL/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM GLYCEROPHOSPHATE/CALCIUM LACTATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50-50MG/10',
        'options': [
          '50-50MG/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM GLUCONATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM LACTATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '650 MG',
        'options': [
          '650 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 MEQ/ML',
        'options': [
          '4 MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIALYSIS SOLUTIONS',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '347MOSM/L',
        'options': [
          '347MOSM/L',
          '486MOSM/L',
          '386MOSM/L',
          '346MOSM/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/ASCORBIC ACID/CYANOCOBALAMIN/STOMACH CONC',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-250-10',
        'options': [
          '200-250-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/ASCORBIC ACID/CYANOCOBALAMIN/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '460-60MG',
        'options': [
          '460-60MG',
          '200-250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/ASCORBIC ACID/B12-IF/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '110-0.5MG',
        'options': [
          '110-0.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/ASCORBIC ACID/VITAMIN B12-INTRINSIC FACTOR',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-60MG-5',
        'options': [
          '200-60MG-5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS SULFATE/ASCORBIC ACID/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '105-500-.8',
        'options': [
          '105-500-.8'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON POLYSACCHARIDE COMPLEX/CYANOCOBALAMIN/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-25-1',
        'options': [
          '150-25-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS SULFATE/FOLIC ACID/VITAMIN B COMP AND C',
    'types': [
      {
        'route': 'ORAL',
        'default': '105-0.8MG',
        'options': [
          '105-0.8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '106 MG-1MG',
        'options': [
          '106 MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUM/DOCUSATE SOD/VIT C/VIT E/B12-INTRINSIC FACTOR/FA',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-1MG',
        'options': [
          '150-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/DOCUSATE/FOLIC ACID/VITAMIN B COMP AND C',
    'types': [
      {
        'route': 'ORAL',
        'default': '66.6-1MG',
        'options': [
          '66.6-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON DEXTRAN COMPLEX',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/2ML',
        'options': [
          '100 MG/2ML',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/2ML',
        'options': [
          '100 MG/2ML',
          '50MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON POLYSACCHARIDE COMPLEX',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '220 (44)/5',
        'options': [
          '220 (44)/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZINC CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZINC SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '220(50) MG',
        'options': [
          '220(50) MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM IODIDE/IODINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM IODIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G/ML',
        'options': [
          '1 G/ML',
          '325MG/5ML',
          '65 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM IODIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MCG/ML',
        'options': [
          '100 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CUPRIC CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.4 MG/ML',
        'options': [
          '0.4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CUPRIC SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.4 MG/ML',
        'options': [
          '0.4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COPPER',
    'types': [
      {
        'route': 'INTRAUTERINE',
        'default': '380 SQ MM',
        'options': [
          '380 SQ MM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MANGANESE CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.1 MG/ML',
        'options': [
          '0.1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MANGANESE SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.1 MG/ML',
        'options': [
          '0.1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHROMIC CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 MCG/ML',
        'options': [
          '4 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SELENIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 MCG/ML',
        'options': [
          '40 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN REGULAR, HUMAN',
    'types': [
      {
        'route': 'INHALATION',
        'default': '4 UNIT(60)',
        'options': [
          '4 UNIT(60)',
          '4 UNIT(30)',
          '8 UNIT(60)',
          '4 UNIT',
          '4 UNIT(90)',
          '4-8-12(60)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INJECTION',
        'default': '100/ML',
        'options': [
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '500/ML (3)',
        'options': [
          '500/ML (3)',
          '100/ML (3)',
          '500/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN REGULAR,BEEF-PORK',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100/ML',
        'options': [
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN NPH HUMAN ISOPHANE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML',
        'options': [
          '100/ML',
          '100/ML (3)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN ISOPHANE NPH,BF-PK',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML',
        'options': [
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN ZINC,BEEF-PORK',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML',
        'options': [
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETOHEXAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLBUTAMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPROPAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLAZAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYBURIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG',
          '1.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLIPIZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3 %/ELECTROLYTE-TPN SOLN/GLYCERIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 %',
        'options': [
          '3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3.5 %/ELECTROLYTE-M SOLUTION',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3.5 %/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3.5 %/DEXTROSE 25 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLUTAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 G',
        'options': [
          '5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOCARNITINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '330 MG',
        'options': [
          '330 MG',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYSTEINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 2.5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5 %',
        'options': [
          '2.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 10 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 20 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 30 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '30 %',
        'options': [
          '30 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 40 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 %',
        'options': [
          '40 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 50 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 60 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '60 %',
        'options': [
          '60 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 25 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 %',
        'options': [
          '25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 70 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '70 %',
        'options': [
          '70 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 2.5 % AND 0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5%-0.45%',
        'options': [
          '2.5%-0.45%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % AND 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %-0.9 %',
        'options': [
          '5 %-0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % AND 0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %-0.45 %',
        'options': [
          '5 %-0.45 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % AND 0.3 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %-0.3 %',
        'options': [
          '5 %-0.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % AND 0.2 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %-0.2 %',
        'options': [
          '5 %-0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5% AND 0.11 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %-0.11 %',
        'options': [
          '5 %-0.11 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 10 % AND 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %-0.9 %',
        'options': [
          '10 %-0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 10 % AND 0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10%-0.45%',
        'options': [
          '10%-0.45%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % IN RINGERS',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEX 2.5%-HALF STR LACT.RINGERS',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5%-1/2',
        'options': [
          '2.5%-1/2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 5 % IN LACTATED RINGERS',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM AMINOBENZOATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASCORBATE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG/ML',
        'options': [
          '500 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASCORBIC ACID',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG/ML',
        'options': [
          '500 MG/ML',
          '222MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERGOCALCIFEROL (VITAMIN D2)',
    'types': [
      {
        'route': 'ORAL',
        'default': '50000 UNIT',
        'options': [
          '50000 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIHYDROTACHYSTEROL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.125 MG',
        'options': [
          '0.125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIFEDIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MCG',
        'options': [
          '30 MCG',
          '20 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCITRIOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MCG/ML',
        'options': [
          '1 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.25 MCG',
        'options': [
          '0.25 MCG',
          '0.5 MCG',
          '1 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '3 MCG/G',
        'options': [
          '3 MCG/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'WHEAT GERM OIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '3MINIM',
        'options': [
          '3MINIM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMINS WITH FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG',
          '1 MG',
          '0.5 MG/ML',
          '0.25 MG/ML',
          '0.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUORIDE/IRON/VITAMINS A,C,AND D',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG/ML',
        'options': [
          '0.25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUORIDE/VITAMINS A,C,AND D',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG/ML',
        'options': [
          '0.25 MG/ML',
          '0.5 MG/ML',
          '1 MG',
          '0.25MG/0.6'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMINS WITH IRON & FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG/ML',
        'options': [
          '0.5 MG/ML',
          '0.25 MG/ML',
          '0.25 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHYTONADIONE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1MG/0.5ML',
        'options': [
          '1MG/0.5ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYANOCOBALAMIN/THIAMINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1-100MG/ML',
        'options': [
          '1-100MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYANOCOBALAMIN (VITAMIN B-12)',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1000MCG/ML',
        'options': [
          '1000MCG/ML',
          '100 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '500MCG/SPR',
        'options': [
          '500MCG/SPR',
          '25 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXOCOBALAMIN',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '1000MCG/ML',
        'options': [
          '1000MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '5G (2.5X2)',
        'options': [
          '5G (2.5X2)',
          '5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B12-INTRINSIC FACTOR',
    'types': [
      {
        'route': 'ORAL',
        'default': '110-0.5MG',
        'options': [
          '110-0.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIVER EXTRACT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2 MCG/ML',
        'options': [
          '2 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/VITAMIN B COMPLEX AND VITAMIN C',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '0.5 MG',
          '1 MG-100MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEUCOVORIN CALCIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '200 MG',
        'options': [
          '200 MG',
          '350 MG',
          '100 MG',
          '50 MG',
          '500MG/50ML',
          '10 MG/ML',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '25 MG',
          '10 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NIACIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '1000 MG',
        'options': [
          '1000 MG',
          '500 MG',
          '750 MG',
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRIDOXINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIBOFLAVIN 5-PHOSPHATE SODIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.146 %',
        'options': [
          '0.146 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIAMINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITS,THERAP IRON,HEMATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '27MG-0.8MG',
        'options': [
          '27MG-0.8MG',
          '66.7-.33MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLOPURINOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '100 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'DIMERCAPROL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEFEROXAMINE MESYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG',
        'options': [
          '500 MG',
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EDETATE CALCIUM DISODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EDETATE DISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '150 MG/ML',
        'options': [
          '150 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM NITRITE/SODIUM THIOSULFATE/AMYL NITRITE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '300-12.5',
        'options': [
          '300-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM THIOSULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '12.5G/50ML',
        'options': [
          '12.5G/50ML',
          '1 G/10 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIENTINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLENE BLUE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 %',
        'options': [
          '1 %',
          '50 MG/10ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '65 MG',
        'options': [
          '65 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRALIDOXIME CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '600 MG/2ML',
        'options': [
          '600 MG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACTIVATED CHARCOAL/SORBITOL SOLUTION',
    'types': [
      {
        'route': 'ORAL',
        'default': '50G/240ML',
        'options': [
          '50G/240ML',
          '25 G/120ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIGOXIN IMMUNE FAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '38 MG',
        'options': [
          '38 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BARIUM SULFATE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '95 %',
        'options': [
          '95 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1.5 %',
        'options': [
          '1.5 %',
          '2.2 %',
          '95 %',
          '60%(W/V)',
          '5 %',
          '98 %',
          '70 %',
          '210 %',
          '650 MG',
          '85 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '95 %',
        'options': [
          '95 %',
          '97 %',
          '100 %',
          '50 %',
          '85 %',
          '5 %',
          '150%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM FLUORIDE',
    'types': [
      {
        'route': 'DENTAL',
        'default': '1.1 %',
        'options': [
          '1.1 %',
          '0.2 %',
          '0.02 %',
          '0.05 %',
          '1 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1MG(2.2MG)',
        'options': [
          '1MG(2.2MG)',
          '0.5(1.1)MG',
          '0.25(0.55)',
          '0.125/DROP',
          '0.5 MG/ML',
          '0.25MG/DRP',
          '2.5 MG/ML',
          '0.25MG/0.6'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'STANNOUS FLUORIDE',
    'types': [
      {
        'route': 'DENTAL',
        'default': '0.4 %',
        'options': [
          '0.4 %',
          '0.63%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCHLORIC ACID',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUCRALFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G',
        'options': [
          '1 G',
          '1 G/10 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MISOPROSTOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MCG',
        'options': [
          '200 MCG',
          '100 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SIMETHICONE/BELLADONNA ALKALOIDS',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG-19.4',
        'options': [
          '80 MG-19.4'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHENOXYLATE HCL/ATROPINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-.025MG',
        'options': [
          '2.5-.025MG',
          '2.5-.025/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOPERAMIDE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG/5 ML',
          '1MG/7.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIFENOXIN HCL/ATROPINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-0.025MG',
        'options': [
          '1-0.025MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAREGORIC',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG/5 ML',
        'options': [
          '2 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CASANTHRANOL/DOCUSATE POTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '30MG-100MG',
        'options': [
          '30MG-100MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOCUSATE POTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOCUSATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHENODIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'URSODIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SINCALIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MCG',
        'options': [
          '5 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHOLESTYRAMINE/ASPARTAME',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 G',
        'options': [
          '4 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COLESTIPOL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 G',
        'options': [
          '5 G',
          '1 G',
          '7.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDOCYANINE GREEN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LACTULOSE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 G/15 ML',
        'options': [
          '10 G/15 ML',
          '20 G/30 ML',
          '20 G',
          '10 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETOHYDROXAMIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM BENZOATE/SODIUM PHENYLACETATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %-10 %',
        'options': [
          '10 %-10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE CYPIONATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE ENANTHATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE PROPIONATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '30 MG',
        'options': [
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'IMPLANTATION',
        'default': '75 MG',
        'options': [
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '5.5/0.122',
        'options': [
          '5.5/0.122'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '50 MG (1%)',
        'options': [
          '50 MG (1%)',
          '1.25 G(1%)',
          '25MG(1%)',
          '30MG/1.5ML',
          '5 MG/24 HR',
          '2.5MG/24HR',
          '1.25G-1.62',
          '2 MG/24 HR',
          '10 MG (2%)',
          '2.5G-1.62%',
          '20.25/1.25',
          '4 MG/24 HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLTESTOSTERONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOXYMESTERONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'STANOZOLOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHORIONIC GONADOTROPIN, HUMAN',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10000 UNIT',
        'options': [
          '10000 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYMETHOLONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXANDROLONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NANDROLONE DECANOATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML',
          '50MG/ML(1)',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHIODIZED OIL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '37 %',
        'options': [
          '37 %',
          '48 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL CYPIONATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL VALERATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '40 MG/ML',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '0.5 MG',
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '0.05MG/24H',
        'options': [
          '0.05MG/24H',
          '0.1MG/24HR',
          '.075MG/24H',
          '.0375MG/24',
          '.025MG/24H',
          '0.87G',
          '0.06MG/24H',
          '1 MG/GRAM',
          '2.5/G-1.74',
          '0.5MG/0.5G',
          '0.25/0.25G',
          '1.53/SPRAY',
          '1.25 G',
          '14MCG/24HR'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'VAGINAL',
        'default': '10 MCG',
        'options': [
          '10 MCG',
          '25 MCG',
          '0.01 %',
          '7.5MCG/24H'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRONE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS, CONJUGATED',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.625 MG',
        'options': [
          '0.625 MG',
          '1.25 MG',
          '0.3 MG',
          '0.45MG',
          '0.9 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'VAGINAL',
        'default': '0.625 MG/G',
        'options': [
          '0.625 MG/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS,ESTERIFIED',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.625 MG',
        'options': [
          '0.625 MG',
          '0.3 MG',
          '1.25 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROPIPATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.75 MG',
        'options': [
          '0.75 MG',
          '1.5 MG',
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE CYPIONATE/ESTRADIOL CYPIONATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50-2',
        'options': [
          '50-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE ENANTHATE/ESTRADIOL VALERATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '90-4MG/ML',
        'options': [
          '90-4MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS,ESTERIFIED/METHYLTESTOSTERONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.625-1.25',
        'options': [
          '0.625-1.25',
          '1.25-2.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROGESTERONE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYPROGESTERONE CAPROATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 MG/ML',
        'options': [
          '250 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEDROXYPROGESTERONE ACETATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '150 MG/ML',
        'options': [
          '150 MG/ML',
          '400 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '2.5 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '104MG/0.65',
        'options': [
          '104MG/0.65'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERGONOVINE MALEATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.2 MG/ML',
        'options': [
          '0.2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.2 MG',
        'options': [
          '0.2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLERGONOVINE MALEATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '.2MG/ML(1)',
        'options': [
          '.2MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.2 MG',
        'options': [
          '0.2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYTOCIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 UNIT/ML',
        'options': [
          '10 UNIT/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBOPROST TROMETHAMINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 MCG/ML',
        'options': [
          '250 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE-MESTRANOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-50MCG',
        'options': [
          '1 MG-50MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-35MCG',
        'options': [
          '1 MG-35MCG',
          '7 DAYS X 3',
          '0.5-0.035',
          '0.4-0.035',
          '7-9-5',
          '1 MG-50MCG',
          '10-11'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE ACETATE-ETHINYL ESTRADIOL/FERROUS FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-20(24)',
        'options': [
          '1MG-20(24)',
          '1MG-20(21)',
          '1.5-30(21)',
          '5-7-9-7',
          '1MG-10(24)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE ACETATE-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-5MCG',
        'options': [
          '1MG-5MCG',
          '1MG-20MCG',
          '1.5-0.03MG',
          '0.5MG-2.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHYNODIOL DIACETATE-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-35MCG',
        'options': [
          '1 MG-35MCG',
          '1 MG-50MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORGESTREL-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.3-0.03MG',
        'options': [
          '0.3-0.03MG',
          '0.5 MG-50'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.35 MG',
        'options': [
          '0.35 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVONORGESTREL-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.15-0.03',
        'options': [
          '0.15-0.03',
          '0.1-0.02',
          '6-5-10',
          '90-20 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NONOXYNOL 9',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '1000 MG',
        'options': [
          '1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL/EPINEPHRINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.5-1:200K',
        'options': [
          '0.5-1:200K',
          '0.25-.0005',
          '0.75-.0005'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2.5 MG/ML',
        'options': [
          '2.5 MG/ML',
          '5 MG/ML',
          '7.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROCAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '100 MG/ML',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROPROCAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/EPINEPHRINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1%-1:100K',
        'options': [
          '1%-1:100K',
          '2 %-1:100K',
          '0.5-1:200K',
          '1.5-1:200K',
          '2%-1:50000',
          '2%-1:200K'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '10%-0.1%',
        'options': [
          '10%-0.1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/GLUCOSE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '10 MG/ML',
          '5 MG/ML',
          '15 MG/ML'
        ]
      },
      {
        'route': 'INTRADERMAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG'
        ]
      },
      {
        'route': 'INTRAVENOUS',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML',
          '20 MG/ML',
          '10 MG/ML'
        ]
      },
      {
        'route': 'MUCOUS MEMBRANE',
        'default': '2 %',
        'options': [
          '2 %',
          '40 MG/ML',
          '10 %',
          '5 %',
          '50 MG/ML'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '3 %',
        'options': [
          '3 %',
          '5 %',
          '4 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'MEPIVACAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '20 MG/ML',
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETRACAINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOCAINE',
    'types': [
      {
        'route': 'OTIC',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRILOCAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COCAINE HCL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %',
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPIVACAINE HCL/LEVONORDEFRIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2%-1:20000',
        'options': [
          '2%-1:20000'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXAPRAM HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEMOLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '37.5 MG',
        'options': [
          '37.5 MG',
          '75 MG',
          '18.75MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOFLURANE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '99.9 %',
        'options': [
          '99.9 %',
          '100 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIOPENTAL SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1 G',
          '2.5 G',
          '5 G',
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOHEXITAL SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG',
        'options': [
          '500 MG',
          '2.5 G',
          '200 MG',
          '5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETOMIDATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KETAMINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '100 MG/ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENOBARBITAL SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '60 MG/ML',
        'options': [
          '60 MG/ML',
          '65 MG/ML',
          '130MG/ML',
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENOBARBITAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '32.4 MG',
          '15 MG',
          '60 MG',
          '20 MG/5 ML',
          '100 MG',
          '16.2 MG',
          '97.2MG',
          '64.8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMOBARBITAL SODIUM/SECOBARBITAL SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-50MG',
        'options': [
          '50 MG-50MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMOBARBITAL SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTABARBITAL SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '30 MG/5 ML',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTOBARBITAL SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SECOBARBITAL SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORAL HYDRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG/5ML',
        'options': [
          '500 MG/5ML',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '324 MG',
        'options': [
          '324 MG',
          '648 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TEMAZEPAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG',
          '30 MG',
          '7.5 MG',
          '22.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLURAZEPAM HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAZOLAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG',
        'options': [
          '0.25 MG',
          '0.125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUAZEPAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPROBAMATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYZINE HCL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '10 MG',
          '50 MG',
          '50 MG/25ML',
          '10 MG/5 ML',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYZINE PAMOATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '100 MG',
          '25 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORDIAZEPOXIDE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '25 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLORAZEPATE DIPOTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5 MG',
        'options': [
          '7.5 MG',
          '3.75 MG',
          '15 MG',
          '11.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIAZEPAM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '2 MG',
          '5 MG/5 ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '12.5-15-20',
        'options': [
          '12.5-15-20',
          '5-7.5-10MG',
          '2.5 MG',
          '15 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXAZEPAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG',
          '10 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALPRAZOLAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.5 MG',
          '0.25 MG',
          '2 MG',
          '3 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIDAZOLAM HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '10 MG/2 ML',
          '5 MG/ML(1)',
          '5 MG/5 ML',
          '10 MG/10ML',
          '2 MG/2 ML',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '5 MG/2.5ML',
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUSPIRONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '15 MG',
          '30 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPROMAZINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '100 MG',
          '200 MG',
          '10 MG',
          '75 MG',
          '30 MG',
          '30 MG/ML',
          '150 MG',
          '10 MG/5 ML',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUPHENAZINE DECANOATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUPHENAZINE ENANTHATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUPHENAZINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2.5 MG/ML',
        'options': [
          '2.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '1 MG',
          '10 MG',
          '2.5 MG',
          '2.5 MG/5ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERPHENAZINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG',
        'options': [
          '8 MG',
          '4 MG',
          '2 MG',
          '16 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROCHLORPERAZINE EDISYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/2 ML',
        'options': [
          '10 MG/2 ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROCHLORPERAZINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIFLUOPERAZINE HCL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '1 MG',
          '2 MG',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIORIDAZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '25 MG',
          '100 MG',
          '50 MG',
          '30 MG/ML',
          '150 MG',
          '100 MG/5ML',
          '100 MG/ML',
          '200 MG',
          '15 MG',
          '25 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MESORIDAZINE BESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIMOZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOCARBOXAZID',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENELZINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRANYLCYPROMINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMIPRAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMIPRAMINE PAMOATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '75 MG',
          '150 MG',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMITRIPTYLINE HCL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '10 MG',
          '100 MG',
          '75 MG',
          '150 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NORTRIPTYLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '10 MG',
          '50 MG',
          '75 MG',
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESIPRAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '100 MG',
          '10 MG',
          '75 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROTRIPTYLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMOXAPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '25 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIMIPRAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXEPIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '10 MG',
          '25 MG',
          '75 MG',
          '100 MG',
          '150 MG',
          '3 MG',
          '6 MG',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAPROTILINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRAZODONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '150 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPROPION HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '100 MG',
          '75 MG',
          '300 MG',
          '200 MG',
          '450 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'in the morning'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FLUOXETINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '40 MG',
          '20 MG/5 ML',
          '90 MG',
          '60 MG',
          '15 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'in the morning'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'AMITRIPTYLINE HCL/CHLORDIAZEPOXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5MG-5MG',
        'options': [
          '12.5MG-5MG',
          '25 MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DROPERIDOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2.5 MG/ML',
        'options': [
          '2.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HALOPERIDOL DECANOATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HALOPERIDOL LACTATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HALOPERIDOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '1 MG',
          '0.5 MG',
          '10 MG',
          '2 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOXAPINE SUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '10 MG',
          '25 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOLINDONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '25 MG',
          '10 MG',
          '100 MG',
          '20 MG/ML',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIOTHIXENE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIOTHIXENE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2 MG',
          '10 MG',
          '1 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LITHIUM CARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '450 MG',
          '150 MG',
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LITHIUM CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MEQ/5 ML',
        'options': [
          '8 MEQ/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYPROHEPTADINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG/5 ML',
          '4 MG/10 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHYL ALCOHOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '98 %',
        'options': [
          '98 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLPHENIDATE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '5 MG',
          '30 MG',
          '36 MG',
          '18 MG',
          '27 MG',
          '54 MG',
          '40 MG',
          '5 MG/5 ML',
          '50 MG',
          '10 MG/5 ML',
          '60 MG',
          '5 MG/ML',
          '2.5 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPERIDINE HCL/PROMETHAZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-25MG',
        'options': [
          '50 MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPERIDINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '10 MG/ML',
          '100 MG/ML',
          '75 MG/ML',
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MORPHINE SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '1 MG/ML',
          '8 MG/ML',
          '15 MG/ML',
          '50 MG/ML',
          '5 MG/ML',
          '25 MG/ML',
          '2 MG/ML',
          '4 MG/ML',
          '30 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '10MG/0.7ML',
        'options': [
          '10MG/0.7ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '8 MG/ML',
          '4 MG/ML',
          '30 MG/30ML',
          '50 MG/ML',
          '2 MG/ML',
          '10 MG/10ML',
          '100 MG/4ML',
          '25 MG/ML',
          '250MG/10ML',
          '15 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '15 MG',
          '60 MG',
          '100 MG',
          '100 MG/5ML',
          '20 MG',
          '200 MG',
          '10 MG/5 ML',
          '50 MG',
          '80 MG',
          '20 MG/5 ML',
          '10 MG',
          '90 MG',
          '120 MG',
          '20 MG/ML',
          '10MG/0.5ML',
          '75 MG',
          '40 MG',
          '45 MG',
          '150 MG',
          '130 MG',
          '70 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '30 MG',
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROMORPHONE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '1 MG/ML',
          '10 MG/ML',
          '0.5MG/.5ML',
          '4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '8 MG',
          '16 MG',
          '12 MG',
          '32 MG',
          '1 MG/ML',
          '24 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '3 MG',
        'options': [
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYMORPHONE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML',
          '1.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '40 MG',
          '20 MG',
          '30 MG',
          '15 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CODEINE PHOSPHATE/BUTALBITAL/ASPIRIN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-50-325',
        'options': [
          '30-50-325'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '325MG-30MG',
        'options': [
          '325MG-30MG',
          '325MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTALBITAL/ACETAMINOPHEN/CAFFEINE/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-325-30',
        'options': [
          '50-325-30',
          '50-300-30'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAMINOPHEN WITH CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300MG-30MG',
        'options': [
          '300MG-30MG',
          '300MG-60MG',
          '300MG-15MG',
          '120-12MG/5',
          '300MG/12.5',
          '650MG-30MG',
          '240-24/10',
          '360-36/15',
          '650MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARISOPRODOL/ASPIRIN/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-325-16',
        'options': [
          '200-325-16'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '15 MG/ML',
        'options': [
          '15 MG/ML',
          '30 MG',
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CODEINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '30 MG',
          '30 MG/5 ML',
          '15 MG',
          '15MG/2.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE/ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-500MG',
        'options': [
          '5 MG-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-500MG',
        'options': [
          '5 MG-500MG',
          '10MG-325MG',
          '7.5-500 MG',
          '7.5-750 MG',
          '5 MG-325MG',
          '10MG-500MG',
          '10MG-650MG',
          '7.5-325 MG',
          '7.5-650 MG',
          '10MG-660MG',
          '2.5-500 MG',
          '5 MG-300MG',
          '2.5-325 MG',
          '10MG-300MG',
          '2.5-108/5',
          '7.5-300 MG',
          '7.5-325/15',
          '5-217MG/10',
          '7.5-500/15',
          '5 MG-400MG',
          '10MG-750MG',
          '10-300/15',
          '10MG-400MG',
          '10-325/15',
          '7.5-400 MG',
          '2.5-167/5',
          '5-334MG/10',
          '3.33-167/5',
          '5-163/7.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '30 MG',
          '20 MG',
          '10 MG',
          '50 MG',
          '15 MG',
          '80 MG',
          '60 MG',
          '100 MG',
          '120 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAMINOPHEN/CAFFEINE/DIHYDROCODEINE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '712-60-32',
        'options': [
          '712-60-32',
          '320.5-30MG',
          '356-30-16'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYCODONE/ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.44-325MG',
        'options': [
          '2.44-325MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYCODONE HCL/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-325MG',
        'options': [
          '5 MG-325MG',
          '10MG-325MG',
          '7.5-325 MG',
          '10MG-650MG',
          '5 MG-500MG',
          '7.5-500 MG',
          '5 MG-300MG',
          '2.5-325 MG',
          '10MG-300MG',
          '7.5-300 MG',
          '10MG-400MG',
          '5-325/5 ML',
          '7.5-400 MG',
          '5 MG-400MG',
          '2.5-300 MG',
          '10MG-500MG',
          '2.5-400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYCODONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '15 MG',
          '30 MG',
          '10 MG',
          '20 MG',
          '80 MG',
          '40 MG',
          '5 MG/5 ML',
          '20 MG/ML',
          '60 MG',
          '160 MG',
          '10MG/0.5ML',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVORPHANOL TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALBUPHINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHADONE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '10 MG/ML',
          '40 MG',
          '5 MG/5 ML',
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENTANYL CITRATE',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '800 MCG',
        'options': [
          '800 MCG',
          '400 MCG',
          '600 MCG',
          '200 MCG',
          '1200 MCG',
          '1600 MCG',
          '100 MCG',
          '300 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '400MCG/SPR',
        'options': [
          '400MCG/SPR',
          '100MCG/SPR',
          '300MCG/SPR'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '800 MCG',
        'options': [
          '800 MCG',
          '400 MCG',
          '300 MCG',
          '100 MCG',
          '600 MCG',
          '200 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUFENTANIL CITRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MCG/ML',
        'options': [
          '50 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALFENTANIL HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MCG/ML',
        'options': [
          '500 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OPIUM/BELLADONNA ALKALOIDS',
    'types': [
      {
        'route': 'RECTAL',
        'default': '60-16.2MG',
        'options': [
          '60-16.2MG',
          '30-16.2MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPRENORPHINE HCL',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '450 MCG',
        'options': [
          '450 MCG',
          '750 MCG',
          '300 MCG',
          '75 MCG',
          '600 MCG',
          '900 MCG',
          '150 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'IMPLANTATION',
        'default': '74.2 MG',
        'options': [
          '74.2 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INJECTION',
        'default': '0.3 MG/ML',
        'options': [
          '0.3 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '8 MG',
        'options': [
          '8 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPOXYPHENE HCL/ASPIRIN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '65-389',
        'options': [
          '65-389'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPOXYPHENE HCL/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '65MG-650MG',
        'options': [
          '65MG-650MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPOXYPHENE NAPSYLATE/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-650 MG',
        'options': [
          '100-650 MG',
          '100-500 MG',
          '100-325MG',
          '50MG-325MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPOXYPHENE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '65 MG',
        'options': [
          '65 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPOXYPHENE NAPSYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEFENAMIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTORPHANOL TARTRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTAZOCINE HCL/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-650MG',
        'options': [
          '25-650MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTAZOCINE HCL/NALOXONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50MG-0.5MG',
        'options': [
          '50MG-0.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTAZOCINE LACTATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '30 MG/ML',
        'options': [
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTALBITAL/ASPIRIN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-325-40',
        'options': [
          '50-325-40'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ORPHENADRINE CITRATE/ASPIRIN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-770-60',
        'options': [
          '50-770-60',
          '25-385-30'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/SALICYLAMIDE/ACETAMINOPHEN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-250 MG',
        'options': [
          '500-250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/ACETAMINOPHEN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250-250-65',
        'options': [
          '250-250-65'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/MEPROBAMATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '325-200 MG',
        'options': [
          '325-200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '325 MG',
        'options': [
          '325 MG',
          '800 MG',
          '975 MG',
          '81 MG',
          '162.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLAMIDE/ACETAMINOPHEN/PHENYLTOLOXAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-300-20',
        'options': [
          '200-300-20'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHOLINE SALICYLATE/MAGNESIUM SALICYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '750 MG',
        'options': [
          '750 MG',
          '500 MG',
          '1000 MG',
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM SALICYLATE/PHENYLTOLOXAMINE CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-25MG',
        'options': [
          '600-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM SALICYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALSALATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '750 MG',
        'options': [
          '750 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM THIOSALICYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIFLUNISAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MESALAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '800 MG',
          '250 MG',
          '500 MG',
          '0.375G',
          '1.2 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '4 G/60 ML',
        'options': [
          '4 G/60 ML',
          '1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTALBITAL/ACETAMINOPHEN/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-325-40',
        'options': [
          '50-325-40',
          '50-500-40',
          '50-300-40',
          '50-750-40',
          '50-325/15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTALBITAL/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '50MG-325MG',
        'options': [
          '50MG-325MG',
          '50MG-650MG',
          '50MG-300MG',
          '25MG-325MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAMINOPHEN/PHENYLTOLOXAMINE CITRATE/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '425-45-35',
        'options': [
          '425-45-35'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAMINOPHEN/PHENYLTOLOXAMINE CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-66MG',
        'options': [
          '600-66MG',
          '500MG-50MG',
          '650MG-50MG',
          '650MG-60MG',
          '500-55MG',
          '635MG-55MG',
          '160-5MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAMINOPHEN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000MG/100',
        'options': [
          '1000MG/100'
        ]
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '650 MG',
          '500 MG',
          '325 MG',
          '80 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '8'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'RECTAL',
        'default': '650 MG',
        'options': [
          '650 MG',
          '120 MG'
        ]
      }
    ]
  },
  {
    'drug_name': 'ERGOTAMINE TARTRATE/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-100MG',
        'options': [
          '1 MG-100MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '2-100MG',
        'options': [
          '2-100MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERGOTAMINE TARTRATE',
    'types': [
      {
        'route': 'SUBLINGUAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOMETHEPTENE MUCATE/DICHLORALPHENAZONE/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '65-100-325',
        'options': [
          '65-100-325'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALOXONE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.4 MG/ML',
        'options': [
          '0.4 MG/ML',
          '1 MG/ML',
          '0.02 MG/ML',
          '2 MG/0.4ML',
          '0.4 MG/0.4'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '4 MG',
        'options': [
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALTREXONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYTOIN SODIUM EXTENDED',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG',
          '300 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYTOIN SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYTOIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG/5ML',
        'options': [
          '125 MG/5ML',
          '50 MG',
          '100 MG/4ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHOTOIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALPROIC ACID (AS SODIUM SALT) (VALPROATE SODIUM)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG/5ML',
        'options': [
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML',
          '500MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALPROIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIVALPROEX SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINOGLUTETHIMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRIMIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIMETHADIONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHSUXIMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHOSUXIMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBAMAZEPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG',
          '400 MG',
          '300 MG',
          '100 MG/5ML',
          '200MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLONAZEPAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.5 MG',
          '2 MG',
          '0.25 MG',
          '0.125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPHOBARBITAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '32 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMANTADINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIHEXYPHENIDYL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '5 MG',
          '2 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BIPERIDEN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZTROPINE MESYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/2 ML',
        'options': [
          '2 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ORPHENADRINE CITRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '30 MG/ML',
        'options': [
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZONATATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG',
          '150 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'after meals'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'APOMORPHINE HCL',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOCARBAMOL/ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '400-325 MG',
        'options': [
          '400-325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOCARBAMOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '750 MG',
        'options': [
          '750 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORZOXAZONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '750 MG',
          '250 MG',
          '375 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARISOPRODOL/ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-325 MG',
        'options': [
          '200-325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARISOPRODOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '350 MG',
        'options': [
          '350 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METAXALONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '800 MG',
        'options': [
          '800 MG',
          '400 MG'
        ],
        'quantity': 15.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'DANTROLENE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG',
        'options': [
          '20 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUCCINYLCHOLINE CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BACLOFEN',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '2000MCG/ML',
        'options': [
          '2000MCG/ML',
          '50 MCG/ML',
          '500 MCG/ML',
          '20K MCG/20',
          '40000/20ML',
          '10000/20ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOBENZAPRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '7.5 MG',
          '15 MG',
          '30 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TRIMETHOBENZAMIDE HCL/BENZOCAINE',
    'types': [
      {
        'route': 'RECTAL',
        'default': '200 MG-2 %',
        'options': [
          '200 MG-2 %',
          '100 MG-2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIMETHOBENZAMIDE HCL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '300 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DRONABINOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NABILONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXYLAMINE SUCCINATE/PYRIDOXINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-10MG',
        'options': [
          '10 MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECLIZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '12.5 MG',
          '50 MG',
          '30 MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '8'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'BETHANECHOL CHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '10 MG',
          '50 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXPANTHENOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '250 MG/ML',
        'options': [
          '250 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUANIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHYSOSTIGMINE SALICYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOSTIGMINE BROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOSTIGMINE METHYLSULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.5 MG/ML',
        'options': [
          '0.5 MG/ML',
          '1 MG/ML',
          '1:4000'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML',
          '0.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMBENONIUM CHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRIDOSTIGMINE BROMIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '180 MG',
          '60 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EDROPHONIUM CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BELLADONNA ALKALOIDS/PHENOBARBITAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '16 MG',
        'options': [
          '16 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATROPINE SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.4 MG/ML',
        'options': [
          '0.4 MG/ML',
          '0.1 MG/ML',
          '1 MG/ML',
          '0.05 MG/ML',
          '0.4MG/.5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '2 MG/0.7ML',
        'options': [
          '2 MG/0.7ML',
          '0.5 MG/0.7',
          '1 MG/0.7ML',
          '0.25MG/0.3'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.4 MG',
        'options': [
          '0.4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SCOPOLAMINE HYDROBROMIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.4 MG/ML',
        'options': [
          '0.4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.25 %',
        'options': [
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.4 MG',
        'options': [
          '0.4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYOSCYAMINE SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.5 MG/ML',
        'options': [
          '0.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.125 MG',
        'options': [
          '0.125 MG',
          '0.375 MG',
          '0.125MG/ML',
          '125MCG/5ML',
          '0.125-0.25',
          '0.25 MG',
          '0.15 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '0.125 MG',
        'options': [
          '0.125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYOSCYAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.15 MG',
        'options': [
          '0.15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERGOTAMINE TARTRATE/BELLADONNA ALKALOIDS/PHENOBARBITAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.6-0.2-40',
        'options': [
          '0.6-0.2-40'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPANTHELINE BROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYCOPYRROLATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '15.6 MCG',
        'options': [
          '15.6 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INJECTION',
        'default': '0.2 MG/ML',
        'options': [
          '0.2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '1 MG/5 ML',
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPENZOLATE BROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORDIAZEPOXIDE/CLIDINIUM BROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-2.5MG',
        'options': [
          '5 MG-2.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICYCLOMINE HCL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLAVOXATE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYBUTYNIN CHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '15 MG',
          '5 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NICOTINE POLACRILEX',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPINEPHRINE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.22MG',
        'options': [
          '0.22MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INJECTION',
        'default': '0.3MG/0.3',
        'options': [
          '0.3MG/0.3',
          '0.15/0.15',
          '1 MG/ML',
          '0.15MG/0.3',
          '0.1 MG/ML',
          '1 MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '0.3MG/0.3',
        'options': [
          '0.3MG/0.3',
          '0.15/0.15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NOREPINEPHRINE BITARTRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOPROTERENOL HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.2 MG/ML',
        'options': [
          '0.2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOETHARINE HCL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METAPROTERENOL SULFATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '6 MG/ML',
        'options': [
          '6 MG/ML',
          '4 MG/ML',
          '50 MG/ML',
          '650 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG/5 ML',
        'options': [
          '10 MG/5 ML',
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOPAMINE HCL IN DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/.25L',
        'options': [
          '200MG/.25L',
          '400MG/0.5L',
          '400MG/.25L',
          '800MG/0.5L',
          '800MG/.25L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOPAMINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400 MG/5ML',
        'options': [
          '400 MG/5ML',
          '200 MG/5ML',
          '800MG/5ML',
          '40 MG/ML',
          '800MG/10ML',
          '400MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPHETAMINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROAMPHETAMINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '15 MG',
          '5 MG/5 ML',
          '20 MG',
          '2.5 MG',
          '30 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHAMPHETAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZPHETAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERBUTALINE SULFATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.2 MG',
        'options': [
          '0.2 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALBUTEROL SULFATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '2.5 MG/3ML',
        'options': [
          '2.5 MG/3ML',
          '90 MCG',
          '5 MG/ML',
          '1.25MG/3ML',
          '0.63MG/3ML',
          '2.5 MG/0.5',
          '200 MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'inhale',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'puff(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '2 MG/5 ML',
          '8 MG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '3'
              },
              {
                'typeName': 'unit',
                'value': 'ml'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'ALBUTEROL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '90 MCG',
        'options': [
          '90 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BITOLTEROL MESYLATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.37 MG',
        'options': [
          '0.37 MG',
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIRBUTEROL ACETATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '200 MCG',
        'options': [
          '200 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPHEDRINE SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '50MG/ML(1)',
        'options': [
          '50MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '2.5 %',
        'options': [
          '2.5 %',
          '10 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '7.5 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLPROPANOLAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '120 MG',
        'options': [
          '120 MG',
          '30 MG',
          '60 MG',
          '15 MG/5 ML'
        ],
        'quantity': 80.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '6'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'LABETALOL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '20 MG/4 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENOXYBENZAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLAZOLINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENTOLAMINE MESYLATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPRANOLOL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '80 MG',
          '40 MG',
          '10 MG',
          '60 MG',
          '120 MG',
          '160 MG',
          '90 MG',
          '4.28 MG/ML',
          '20 MG/5 ML',
          '40MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METOPROLOL TARTRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/5 ML',
        'options': [
          '5 MG/5 ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '25 MG',
          '75 MG',
          '37.5 MG'
        ],
        'quantity': 60.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NADOLOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '80 MG',
          '20 MG',
          '160 MG',
          '120 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATENOLOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.5 MG/ML',
        'options': [
          '0.5 MG/ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '100 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TIMOLOL MALEATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PINDOLOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACEBUTOLOL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESMOLOL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100MG/10ML',
        'options': [
          '100MG/10ML',
          '2.5 G/10ML',
          '100 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENBUTOLOL SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARTEOLOL HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENTERMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '37.5 MG',
        'options': [
          '37.5 MG',
          '30 MG',
          '15 MG',
          '8 MG',
          '18.75MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENTERMINE RESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIETHYLPROPION HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENDIMETRAZINE TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '35 MG',
        'options': [
          '35 MG',
          '105 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METOCLOPRAMIDE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '10 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '10 MG/10ML',
          '5 MG/5 ML',
          '0.9MG/0.9'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRYPSIN/BALSAM PERU/CASTOR OIL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '90-87/GRAM',
        'options': [
          '90-87/GRAM',
          '0.12-87/G',
          '0.12-87MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAPAIN/UREA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '830000-10',
        'options': [
          '830000-10',
          '650000-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYALURONIDASE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '150 UNIT/1',
        'options': [
          '150 UNIT/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COLLAGENASE CLOSTRIDIUM HISTOLYTICUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '250 UNIT/G',
        'options': [
          '250 UNIT/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TALC',
    'types': [
      {
        'route': 'INTRAPLEURAL',
        'default': '4 G',
        'options': [
          '4 G',
          '5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALUMINUM CHLORIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '20 %',
        'options': [
          '20 %',
          '6.25%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLIC ACID/SULFUR',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %-2 %',
        'options': [
          '2 %-2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '6 %',
        'options': [
          '6 %',
          '26 %',
          '6 %-6 %',
          '27.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PODOPHYLLUM RESIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '25 %',
        'options': [
          '25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRETINOIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.025 %',
        'options': [
          '0.025 %',
          '0.05 %',
          '0.1 %',
          '0.01 %',
          '0.0375 %',
          '0.075 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE/SULFUR',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10-8%',
        'options': [
          '10-8%',
          '10%-2.5%',
          '10 %-4 %',
          '6%-3%',
          '5-0.75%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %',
          '5 %',
          '9%',
          '6 %',
          '3 %',
          '8 %',
          '4 %',
          '2.5 %',
          '7 %',
          '4.25 %',
          '5.3%',
          '7.5 %',
          '3.5 %',
          '4 %-5 %',
          '8%-5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOTRETINOIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '10 MG',
          '20 MG',
          '30 MG',
          '25 MG',
          '35 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM HYDROXIDE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM THIOSULFATE/SALICYLIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '25-1%',
        'options': [
          '25-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTHRALIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %',
          '0.5 %',
          '1.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BALSAM PERU/CASTOR OIL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '87-788MG/G',
        'options': [
          '87-788MG/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROXINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRICHLOROACETIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '80 %',
        'options': [
          '80 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROPHYLLIN COPPER COMPLEX',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UREA',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '40 %',
        'options': [
          '40 %',
          '50 %',
          '35 %',
          '42 %',
          '45 %',
          '30 %',
          '39 %',
          '20 %',
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOXSALEN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MCG/ML',
        'options': [
          '20 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %',
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MONOBENZONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PLASMA PROTEIN FRACTION',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALBUMIN HUMAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 %',
        'options': [
          '25 %',
          '5 %',
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTRAN 40 IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTRAN 40 IN DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTRAN 75 IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 %-0.9 %',
        'options': [
          '6 %-0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HETASTARCH IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 %-0.9 %',
        'options': [
          '6 %-0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTASTARCH IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %-0.9 %',
        'options': [
          '10 %-0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FAT EMULSIONS',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 %',
        'options': [
          '20 %',
          '10 %',
          '30 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GEMFIBROZIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOFIBRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG',
          '10 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINOCAPROIC ACID',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 MG/ML',
        'options': [
          '250 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG/ML',
          '1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRANEXAMIC ACID',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000 MG/10',
        'options': [
          '1000 MG/10'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '650 MG',
        'options': [
          '650 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALTEPLASE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UROKINASE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '250K UNIT',
        'options': [
          '250K UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPARIN SODIUM,PORCINE/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25000/500',
        'options': [
          '25000/500',
          '20K/500ML',
          '25000/250',
          '12500/250',
          '10K/100ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPARIN SODIUM,PORCINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1000/ML',
        'options': [
          '1000/ML',
          '5000/ML',
          '10000/ML',
          '20000/ML',
          '5000/ML(1)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100/ML',
        'options': [
          '100/ML',
          '10 UNIT/ML',
          '500/5 ML',
          '300/3 ML',
          '250/2.5 ML',
          '1000/10 ML',
          '600/6 ML',
          '200/2 ML',
          '100/ML (1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'WARFARIN SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2 MG',
          '2.5 MG',
          '1 MG',
          '4 MG',
          '3 MG',
          '6 MG',
          '7.5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROTAMINE SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTOXIFYLLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOMIPHENE CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UROFOLLITROPIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '75 UNIT',
        'options': [
          '75 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MENOTROPINS',
    'types': [
      {
        'route': 'INJECTION',
        'default': '75 UNIT',
        'options': [
          '75 UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '75 UNIT',
        'options': [
          '75 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SOMATROPIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG',
        'options': [
          '5 MG',
          '6 MG',
          '24 MG',
          '12 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '5 MG',
        'options': [
          '5 MG',
          '5 MG/1.5ML',
          '10MG/1.5ML',
          '5 MG/ML',
          '10 MG',
          '8.8 MG',
          '10 MG/2 ML',
          '15MG/1.5ML',
          '12 MG/ML',
          '4 MG',
          '0.2MG/0.25',
          '5.8 MG',
          '20 MG/2 ML',
          '0.8MG/0.25',
          '6 MG',
          '30 MG/3 ML',
          '8.8 MG/1.5',
          '1.6MG/0.25',
          '2MG/0.25ML',
          '1MG/0.25ML',
          '1.4MG/0.25',
          '0.6MG/0.25',
          '1.8MG/0.25',
          '4 UNIT',
          '1.2MG/0.25',
          '5 MG/2 ML',
          '0.4MG/0.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OCTREOTIDE ACETATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MCG/ML',
        'options': [
          '100 MCG/ML',
          '500 MCG/ML',
          '50 MCG/ML',
          '200 MCG/ML',
          '1000MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CORTICOTROPIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '80 UNIT/ML',
        'options': [
          '80 UNIT/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COSYNTROPIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.25 MG',
        'options': [
          '0.25 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '0.25 MG/ML',
        'options': [
          '0.25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DANAZOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '50 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMOCRIPTINE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '5 MG',
          '0.8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METYRAPONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VASOPRESSIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 UNIT/ML',
        'options': [
          '20 UNIT/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '20 UNIT/ML',
        'options': [
          '20 UNIT/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESMOPRESSIN ACETATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 MCG/ML',
        'options': [
          '4 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '0.1 MG/ML',
        'options': [
          '0.1 MG/ML',
          '10/SPRAY',
          '150/SPRAY'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.2 MG',
        'options': [
          '0.2 MG',
          '0.1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THYROID,PORK',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '90 MG',
          '60 MG',
          '120 MG',
          '15 MG',
          '300 MG',
          '240 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THYROID',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '120 MG',
          '32.5 MG',
          '65 MG',
          '180 MG',
          '130 MG',
          '195 MG',
          '30 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'LEVOTHYROXINE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MCG',
        'options': [
          '200 MCG',
          '100 MCG',
          '500 MCG'
        ]
      },
      {
        'route': 'ORAL',
        'default': '100 MCG',
        'options': [
          '100 MCG',
          '50 MCG',
          '150 MCG',
          '75 MCG',
          '125 MCG',
          '200 MCG',
          '25 MCG',
          '112 MCG',
          '88 MCG',
          '175MCG',
          '137 MCG',
          '300 MCG',
          '13 MCG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'LIOTHYRONINE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MCG/ML',
        'options': [
          '10 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MCG',
        'options': [
          '25 MCG',
          '5 MCG',
          '50 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIOTRIX',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-100MCG',
        'options': [
          '25-100MCG',
          '37.5-150',
          '3.1-12.5',
          '6.25-25MCG',
          '12.5-50MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPYLTHIOURACIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHIMAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETIDRONATE DISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCITONIN,SALMON,SYNTHETIC',
    'types': [
      {
        'route': 'INJECTION',
        'default': '200/ML',
        'options': [
          '200/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '200/SPRAY',
        'options': [
          '200/SPRAY'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CORTISONE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE',
    'types': [
      {
        'route': 'DENTAL',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '30 MG',
          '10 %',
          '1 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '2.5 %',
        'options': [
          '2.5 %',
          '2.5 % (4G)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE CYPIONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG/5 ML',
        'options': [
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE SOD SUCCINATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/2ML',
        'options': [
          '100 MG/2ML',
          '100 MG',
          '250 MG/2ML',
          '500 MG/4ML',
          '1000MG/8ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '100MG/60ML',
        'options': [
          '100MG/60ML',
          '2.5 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '2.5 %',
        'options': [
          '2.5 %',
          '1 %',
          '0.5 %',
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PREDNISOLONE ACETATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %',
          '0.12 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '15 MG/5 ML',
        'options': [
          '15 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PREDNISOLONE SOD PHOSPHATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %',
          '0.125 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '15 MG/5 ML',
        'options': [
          '15 MG/5 ML',
          '6.7 MG/5ML',
          '5 MG/5 ML',
          '15 MG',
          '30 MG',
          '10 MG',
          '10 MG/5 ML',
          '20 MG/5 ML',
          '25 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PREDNISOLONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG/5 ML',
        'options': [
          '15 MG/5 ML',
          '5 MG',
          '5 MG/5 ML',
          '5 MG (48)',
          '5 MG (21)'
        ],
        'quantity': 50.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '5'
              },
              {
                'typeName': 'unit',
                'value': 'ml'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'METHYLPREDNISOLONE ACETATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML',
          '80 MG/ML',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLPREDNISOLONE SODIUM SUCCINATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '125 MG/2ML',
        'options': [
          '125 MG/2ML',
          '40 MG/ML',
          '40 MG',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '500 MG',
          '1000 MG',
          '2 G',
          '500 MG/4ML',
          '1000MG/8ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLPREDNISOLONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '8 MG',
          '16 MG',
          '32 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PREDNISONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '5 MG',
          '50 MG',
          '1 MG',
          '2.5 MG',
          '5 MG/5 ML',
          '2 MG',
          '5 MG/ML'
        ],
        'quantity': 10.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'with food'
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
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'BETAMETHASONE ACETATE/BETAMETHASONE SODIUM PHOSPHATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '6 MG/ML',
        'options': [
          '6 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BETAMETHASONE VALERATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.12 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BETAMETHASONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.6MG/5ML',
        'options': [
          '0.6MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXAMETHASONE ACETATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '8 MG/ML',
        'options': [
          '8 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXAMETHASONE PHOSPHATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 MG/ML',
        'options': [
          '4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXAMETHASONE SOD PHOSPHATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 MG/ML',
        'options': [
          '4 MG/ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '24 MG/ML',
        'options': [
          '24 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXAMETHASONE',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '0.7 MG',
        'options': [
          '0.7 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '0.75 MG',
          '0.5 MG',
          '0.5 MG/5ML',
          '1.5 MG',
          '6 MG',
          '2 MG',
          '1.5MG (51)',
          '1.5MG (35)',
          '0.25 MG',
          '1 MG',
          '1.5MG (21)',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMCINOLONE ACETONIDE',
    'types': [
      {
        'route': 'DENTAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ]
      },
      {
        'route': 'INHALATION',
        'default': '75 MCG',
        'options': [
          '75 MCG',
          '100 MCG'
        ]
      },
      {
        'route': 'INJECTION',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML',
          '10 MG/ML'
        ]
      },
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ]
      },
      {
        'route': 'NASAL',
        'default': '55 MCG',
        'options': [
          '55 MCG'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.025 %',
          '0.5 %',
          '0.147MG/G',
          '0.05 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TRIAMCINOLONE DIACETATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '2 MG/5 ML',
        'options': [
          '2 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMCINOLONE HEXACETONIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMCINOLONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '1 MG',
          '8 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINOLONE ACETONIDE',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '0.19 MG',
        'options': [
          '0.19 MG',
          '0.59 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.01 %',
        'options': [
          '0.01 %',
          '0.025 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUDROCORTISONE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.1 MG',
        'options': [
          '0.1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SPIRONOLACTONE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG-25MG',
        'options': [
          '25 MG-25MG',
          '50 MG-50MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SPIRONOLACTONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENOXINATE HCL/FLUORESCEIN SODIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.4%-0.25%',
        'options': [
          '0.4%-0.25%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPARACAINE HCL/FLUORESCEIN SODIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5%-0.25%',
        'options': [
          '0.5%-0.25%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUORESCEIN SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG/5ML',
        'options': [
          '500 MG/5ML',
          '500 MG/2ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.6 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DINOPROSTONE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '0.5 MG/3 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID/RICINOLEIC ACID/OXYQUINOLINE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '0.921-0.7%',
        'options': [
          '0.921-0.7%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MICONAZOLE NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'VAGINAL',
        'default': '200 MG-2 %',
        'options': [
          '200 MG-2 %',
          '2 %',
          '1200MG-2%',
          '200 MG',
          '100 MG',
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTOCONAZOLE NITRATE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERCONAZOLE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '0.4 %',
        'options': [
          '0.4 %',
          '0.8 %',
          '80 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFANILAMIDE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '15 %',
        'options': [
          '15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITROFURAZONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.2 %',
        'options': [
          '0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLIOQUINOL/HYDROCORTISONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '3 %-1 %',
        'options': [
          '3 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/IODOQUINOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %-1 %',
        'options': [
          '1 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEXACHLOROPHENE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '3 %',
        'options': [
          '3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NYSTATIN/TRIAMCINOLONE ACETONIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '100000-0.1',
        'options': [
          '100000-0.1'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '14'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'BENZOIC ACID/SALICYLIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '6%-3%',
        'options': [
          '6%-3%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GENTIAN VIOLET/BRILLIANT GREEN/PROFLAVINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2.29-2.29',
        'options': [
          '2.29-2.29'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOTRIMAZOLE/BETAMETHASONE DIPROPIONATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %-0.05 %',
        'options': [
          '1 %-0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CICLOPIROX OLAMINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.77 %',
        'options': [
          '0.77 %',
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAFTIFINE HCL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %',
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXICONAZOLE NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULCONAZOLE NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETRACAINE/BENZOCAINE/BUTAMBEN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2%-14%-2%',
        'options': [
          '2%-14%-2%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/MINERAL OIL/PETROLATUM,WHITE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/ALOE VERA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/UREA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %-10 %',
        'options': [
          '1 %-10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE BUTYRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE VALERATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.2 %',
        'options': [
          '0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BETAMETHASONE DIPROPIONATE/PROPYLENE GLYCOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BETAMETHASONE DIPROPIONATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESOXIMETASONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.25 %',
        'options': [
          '0.25 %',
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOCORTOLONE PIVALATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMCINOLONE ACETONIDE/LOW SENSITIZING BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLURANDRENOLIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %',
          '4MCG/SQ CM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINOLONE ACETONIDE/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.01 %',
        'options': [
          '0.01 %',
          '0.025 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOROMETHOLONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINONIDE/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINONIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %',
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESONIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HALCINONIDE/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HALCINONIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIFLORASONE DIACETATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMCINONIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOBETASOL PROPIONATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALCLOMETASONE DIPROPIONATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOMETASONE FUROATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '220MCG(30)',
        'options': [
          '220MCG(30)',
          '220MCG(14)',
          '220MCG(60)',
          '200 MCG',
          '220MCG 120',
          '110 MCG(7)',
          '100 MCG',
          '110MCG(30)'
        ]
      },
      {
        'route': 'NASAL',
        'default': '50 MCG',
        'options': [
          '50 MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'spray(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'in each sinus'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'LINDANE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CROTAMITON',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MALATHION',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': 2.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': null
              },
              {
                'typeName': 'unit',
                'value': null
              },
              {
                'typeName': 'constant',
                'value': 'to'
              },
              {
                'typeName': 'loc',
                'value': 'scalp'
              },
              {
                'typeName': 'constant',
                'value': 'then'
              },
              {
                'typeName': 'act',
                'value': 'rinse off'
              },
              {
                'typeName': 'constant',
                'value': 'in'
              },
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'minute(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'once',
            'instructions': null
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/SULFUR',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10-5%(W/W)',
        'options': [
          '10-5%(W/W)',
          '10 %-5 %',
          '10-5%(W/V)',
          '10 %-1 %',
          '9 %-4 %',
          '10 %-4 %',
          '8 %-4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAFENIDE ACETATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '50 G',
        'options': [
          '50 G',
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SILVER SULFADIAZINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'OXYTETRACYCLINE HCL/POLYMYXIN B SULFATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5-10000/G',
        'options': [
          '5-10000/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN BASE/BENZOYL PEROXIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '3 %-5 %',
        'options': [
          '3 %-5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN/BACITRACIN/POLYMYXIN B/HYDROCORTISONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/BACITRACIN/POLYMYXIN B',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '3.5MG-400',
        'options': [
          '3.5MG-400'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/POLYMYXIN B SULFATE/HYDROCORTISONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '3.5-10K-10',
        'options': [
          '3.5-10K-10'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OTIC',
        'default': '3.5-10K-1',
        'options': [
          '3.5-10K-1'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/POLYMYXIN B SULFATE',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '40-200K/ML',
        'options': [
          '40-200K/ML'
        ]
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/HYDROCORTISONE ACETATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.5 %-1 %',
        'options': [
          '0.5 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/FLUOCINOLONE ACETONIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.5-0.025%',
        'options': [
          '0.5-0.025%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BACITRACIN/POLYMYXIN B SULFATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '500-10K/G',
        'options': [
          '500-10K/G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '500-10K/G',
        'options': [
          '500-10K/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MUPIROCIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NAPHAZOLINE HCL/ANTAZOLINE PHOSPHATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.05-0.5 %',
        'options': [
          '0.05-0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPHAZOLINE HCL/PHENIRAMINE MALEATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.025-0.3%',
        'options': [
          '0.025-0.3%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPHAZOLINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PYRILAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-16MG/5ML',
        'options': [
          '5-16MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'APRACLONIDINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETYLCHOLINE CHLORIDE',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEMECARIUM BROMIDE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.125 %',
        'options': [
          '0.125 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ECHOTHIOPHATE IODIDE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.125 %',
        'options': [
          '0.125 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOBUNOLOL HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPARACAINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HOMATROPINE HBR',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5 %',
        'options': [
          '5 %',
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TROPICAMIDE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %',
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOPENTOLATE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %',
          '2 %',
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPIVEFRIN HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/SCOPOLAMINE HYDROBROMIDE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '10 %-0.3 %',
        'options': [
          '10 %-0.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOPENTOLATE HCL/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.2 %-1 %',
        'options': [
          '0.2 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLURBIPROFEN SODIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.03 %',
        'options': [
          '0.03 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/PREDNISOLONE ACETATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '10 %-0.2 %',
        'options': [
          '10 %-0.2 %',
          '10%-0.5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/PREDNISOLONE SODIUM PHOSPHATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '10 %-0.23%',
        'options': [
          '10 %-0.23%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIFLURIDINE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/BACITRACIN ZINC/POLYMYXIN B/HYDROCORTISONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '3.5-10K-1',
        'options': [
          '3.5-10K-1'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '4'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/POLYMYXIN B SULFATE/PREDNISOLONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN/POLYMYXIN B SULFATE/DEXAMETHASONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '3.5-10K-.1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/DEXAMETHASONE SOD PHOSPHATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.35-0.1%',
        'options': [
          '0.35-0.1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GENTAMICIN SULFATE/PREDNISOLONE ACETATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3%-1%',
        'options': [
          '0.3%-1%',
          '0.3-0.6%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID/ALUMINUM ACETATE',
    'types': [
      {
        'route': 'OTIC',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID/HYDROCORTISONE',
    'types': [
      {
        'route': 'OTIC',
        'default': '2 %-1 %',
        'options': [
          '2 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '0.25 %',
        'options': [
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OTIC',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZYL ALCOHOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE/ANTIPYRINE/BENZOCAINE',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.25-5-5%',
        'options': [
          '0.25-5-5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MANNITOL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '5-10-20-40',
        'options': [
          '5-10-20-40'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '20 %',
        'options': [
          '20 %',
          '25 %',
          '10 %',
          '5 %',
          '15 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'URETHRAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMMONIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MEQ/ML',
        'options': [
          '5 MEQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAZOLAMIDE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETAZOLAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '125 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICHLORPHENAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHAZOLAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROTHIAZIDE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMTERENE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '37.5-25 MG',
        'options': [
          '37.5-25 MG',
          '75 MG-50MG',
          '50 MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMILORIDE HCL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-50 MG',
        'options': [
          '5 MG-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '12.5 MG',
          '100 MG',
          '50 MG/5 ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'HYDROFLUMETHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENDROFLUMETHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRICHLORMETHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYCLOTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHACRYNATE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHACRYNIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FUROSEMIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG',
          '80 MG',
          '10 MG/ML',
          '40MG/5ML',
          '40 MG/4 ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CHLORTHALIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '100 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METOLAZONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '5 MG',
          '10 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUMETANIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.25 MG/ML',
        'options': [
          '0.25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDAPAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '1.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMTERENE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMILORIDE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROBENECID',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFINPYRAZONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CITRATE/CITRIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1100-334/5',
        'options': [
          '1100-334/5',
          '3300-1002'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM/POTASSIUM/POTASSIUM CITRATE/SODIUM CITRATE/CIT AC',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-550/5',
        'options': [
          '500-550/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CITRIC ACID/SODIUM CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '334-500MG',
        'options': [
          '334-500MG',
          '640-490MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PHOSPHATE,MONOBASIC/POTASSIUM PHOSPHATE,MONOBASIC',
    'types': [
      {
        'route': 'ORAL',
        'default': '350-155MG',
        'options': [
          '350-155MG',
          '700-305MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINOHIPPURATE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDIGOTINDISULFONATE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.8 %',
        'options': [
          '0.8 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INULIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIATRIZOATE MEGLUMINE/DIATRIZOATE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '66 %-10 %',
        'options': [
          '66 %-10 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '66 %-10 %',
        'options': [
          '66 %-10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOTHALAMATE MEGLUMINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '60 %',
        'options': [
          '60 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '43 %',
        'options': [
          '43 %',
          '30 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'URETHRAL',
        'default': '17.2%',
        'options': [
          '17.2%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIATRIZOATE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 %',
        'options': [
          '25 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '59.87%',
        'options': [
          '59.87%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIOPRONIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROBENECID/COLCHICINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-0.5 MG',
        'options': [
          '500-0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COLCHICINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.5 MG/ML',
        'options': [
          '0.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.6 MG',
        'options': [
          '0.6 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDOMETHACIN SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDOMETHACIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '75 MG',
          '25 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/4ML',
        'options': [
          '400MG/4ML',
          '800MG/8ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '800 MG',
        'options': [
          '800 MG',
          '600 MG',
          '400 MG',
          '200 MG',
          '100 MG/5ML',
          '50 MG/1.25',
          '100 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FENOPROFEN CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '400 MG',
          '200 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLMETIN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '600 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPROXEN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '550 MG',
        'options': [
          '550 MG',
          '220 MG',
          '275 MG',
          '500 MG',
          '375 MG',
          '750 MG',
          '750(6)-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPROXEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'directons': 'By mouth, 2 every 12 hours as needed',
        'options': [
          '500 MG',
          '375 MG',
          '250 MG',
          '125 MG/5ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '15'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FLURBIPROFEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULINDAC',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECLOFENAMATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIROXICAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICLOFENAC SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '37.5 MG/ML',
        'options': [
          '37.5 MG/ML'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ]
      },
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '50 MG',
          '100 MG',
          '25 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %',
          '1.5 %',
          '3 %',
          '20MG/G(2%)'
        ]
      }
    ]
  },
  {
    'drug_name': 'ADENOSINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 MG/ML',
        'options': [
          '3 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KETOPROFEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '50 MG',
          '200 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GOLD SODIUM THIOMALATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AURANOFIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '3 MG',
        'options': [
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PANCURONIUM BROMIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VECURONIUM BROMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATRACURIUM BESYLATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BACTERIOSTATIC SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SORBITOL SOLUTION',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '3.3 %',
        'options': [
          '3.3 %',
          '3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM TETRADECYL SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 %',
        'options': [
          '3 %',
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SCARLET RED',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5%-5"X9"',
        'options': [
          '5%-5"X9"'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECHLORETHAMINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.016 %',
        'options': [
          '0.016 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOPHOSPHAMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G',
          '500 MG',
          '1 G',
          '100 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORAMBUCIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MELPHALAN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYUREA',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '400 MG',
          '200 MG',
          '1000 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIOTEPA',
    'types': [
      {
        'route': 'INJECTION',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUSULFAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '60 MG/10ML',
        'options': [
          '60 MG/10ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOMUSTINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '10 MG',
          '100 MG',
          '5 MG',
          '10-40-100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARMUSTINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CISPLATIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IFOSFAMIDE/MESNA',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1G-1G',
        'options': [
          '1G-1G',
          '3G-1G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBOPLATIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '150 MG',
          '50 MG',
          '450 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOTREXATE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '5 MG',
          '7.5 MG',
          '10 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOROURACIL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500MG/10ML',
        'options': [
          '500MG/10ML',
          '5 G/100 ML',
          '2.5 G/50ML',
          '1 G/20 ML',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %',
          '2 %',
          '0.5 %',
          '1 %',
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MERCAPTOPURINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLOXURIDINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYTARABINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '1 G',
          '2 G',
          '500 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIOGUANINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VINBLASTINE SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG',
        'options': [
          '10 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VINCRISTINE SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/2 ML',
        'options': [
          '2 MG/2 ML',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DACTINOMYCIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.5 MG',
        'options': [
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXORUBICIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/5 ML',
        'options': [
          '10 MG/5 ML',
          '2 MG/ML',
          '50 MG/25ML',
          '20 MG/10ML',
          '50 MG',
          '10 MG',
          '20 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MITOMYCIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG',
        'options': [
          '20 MG',
          '5 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.2 MG',
        'options': [
          '0.2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BLEOMYCIN SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '30 UNIT',
        'options': [
          '30 UNIT',
          '15 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAUNORUBICIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'STREPTOZOCIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOLACTONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEGESTROL ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '400MG/10ML',
          '20 MG',
          '625MG/5ML',
          '800MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRAMUSTINE PHOSPHATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '140 MG',
        'options': [
          '140 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MITOTANE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TAMOXIFEN CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DACARBAZINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROCARBAZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPARAGINASE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10000 UNIT',
        'options': [
          '10000 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETOPOSIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MITOXANTRONE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUTAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MESNA',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN G SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5MM UNIT',
        'options': [
          '5MM UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN G POTASSIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5MM UNIT',
        'options': [
          '5MM UNIT',
          '20MM UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN G BENZATHINE/PENICILLIN G PROCAINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '1.2MM/2 ML',
        'options': [
          '1.2MM/2 ML',
          '900-300/2',
          '600000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN G PROCAINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '600000/ML',
        'options': [
          '600000/ML',
          '1.2MM/2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN G BENZATHINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '1.2MM/2 ML',
        'options': [
          '1.2MM/2 ML',
          '2.4MM/4ML',
          '600000/ML',
          '300000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN V POTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '250 MG/5ML',
          '125 MG/5ML'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'PIPERACILLIN SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 G',
        'options': [
          '40 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G',
          '4 G',
          '3 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXACILLIN SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 G',
        'options': [
          '2 G',
          '10 G',
          '1 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOXACILLIN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '125 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPICILLIN SODIUM/SULBACTAM SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '3 G',
        'options': [
          '3 G',
          '1.5 G',
          '15 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '3 G',
        'options': [
          '3 G',
          '1.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPICILLIN ANHYDROUS',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPICILLIN SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '500 MG',
          '2 G',
          '250 MG',
          '10 G',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPICILLIN TRIHYDRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '125 MG/5ML',
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAFCILLIN SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G',
          '10 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBENICILLIN INDANYL SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '382MG',
        'options': [
          '382MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICLOXACILLIN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '62.5MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMOXICILLIN/POTASSIUM CLAVULANATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '875-125 MG',
        'options': [
          '875-125 MG',
          '500-125 MG',
          '600-42.9/5',
          '400-57MG/5',
          '200-28.5/5',
          '250-125 MG',
          '250-62.5/5',
          '1000-62.5',
          '125-31.25/',
          '400-57MG',
          '250-62.5MG',
          '125-31.25',
          '200-28.5MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'AMOXICILLIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '250 MG/5ML',
          '875 MG',
          '400 MG/5ML',
          '125 MG/5ML',
          '200 MG/5ML',
          '400 MG',
          '125 MG',
          '775 MG',
          '50 MG/ML',
          '200 MG',
          '600 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TICARCILLIN DISODIUM/POTASSIUM CLAVULANATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.1G',
        'options': [
          '3.1G',
          '31G',
          '3.1G/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BACAMPICILLIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEPHALEXIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEPHRADINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFAZOLIN SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '10 G',
          '500 MG',
          '20 G',
          '300G',
          '100 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOXITIN SODIUM/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 G/50 ML',
        'options': [
          '2 G/50 ML',
          '1 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOXITIN SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G',
          '10 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFACLOR',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '250 MG/5ML',
          '125 MG/5ML',
          '375 MG/5ML',
          '187MG/5ML',
          '375 MG',
          '187 MG',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOTAXIME SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G',
          '500 MG',
          '10 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G',
          '20 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOPERAZONE SODIUM/DEXTROSE 2.4 %-WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOPERAZONE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 G',
        'options': [
          '10 G',
          '2 G',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFUROXIME AXETIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '250 MG/5ML',
          '125 MG/5ML',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFUROXIME SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '750 MG',
        'options': [
          '750 MG',
          '1.5 G',
          '75 G',
          '225 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '7.5 G',
        'options': [
          '7.5 G',
          '1.5 G',
          '750 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTRIAXONE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '500 MG',
          '250 MG',
          '2 G',
          '10 G',
          '100 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOTETAN DISODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '10 G',
        'options': [
          '10 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFIXIME',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '100 MG/5ML',
          '200 MG/5ML',
          '200 MG',
          '100 MG',
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETRACYCLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '125 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYTETRACYCLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEMECLOCYCLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXYCYCLINE CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG/5 ML',
        'options': [
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXYCYCLINE HYCLATE',
    'types': [
      {
        'route': 'DENTAL',
        'default': '10% (W/W)',
        'options': [
          '10% (W/W)'
        ]
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ]
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '20 MG',
          '75 MG',
          '150 MG',
          '200 MG',
          '120 MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'DOXYCYCLINE MONOHYDRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '75 MG',
          '150 MG',
          '40 MG',
          '25 MG/5 ML'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'MINOCYCLINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '75 MG',
          '45 MG',
          '90 MG',
          '135 MG',
          '80 MG',
          '105 MG',
          '55 MG',
          '65 MG',
          '115MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN ETHYLSUCCINATE/SULFISOXAZOLE ACETYL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-600/5',
        'options': [
          '200-600/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN ESTOLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML',
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN ETHYLSUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '200 MG/5ML',
          '400 MG/5ML',
          '40 MG/ML',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN LACTOBIONATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN STEARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN BASE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5 MG/G',
        'options': [
          '5 MG/G'
        ]
      },
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '333 MG',
          '500 MG'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CHLORAMPHENICOL SOD SUCCINATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORAMPHENICOL',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'STREPTOMYCIN SULFATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KANAMYCIN SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G/3 ML',
        'options': [
          '1 G/3 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '125 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GENTAMICIN SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML',
          '20 MG/2 ML'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML',
          '1.2 G',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '80 MG/8 ML',
        'options': [
          '80 MG/8 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMIKACIN SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1000MG/4ML',
        'options': [
          '1000MG/4ML',
          '500 MG/2ML',
          '250 MG/ML',
          '50 MG/ML',
          '100 MG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAPREOMYCIN SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOSERINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIFAMPIN/ISONIAZID',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-150 MG',
        'options': [
          '300-150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIFAMPIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SPECTINOMYCIN HCL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2 G',
        'options': [
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VANCOMYCIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '500 MG',
          '10 G',
          '5 G',
          '750 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LINCOMYCIN HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '300 MG/ML',
        'options': [
          '300 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG',
          '75 MG'
        ],
        'quantity': 40.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '6'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PHOSPHATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '150 MG/ML',
        'options': [
          '150 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '600 MG/4ML',
        'options': [
          '600 MG/4ML',
          '300 MG/2ML',
          '900MG/6ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'VAGINAL',
        'default': '2 %',
        'options': [
          '2 %',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BACITRACIN',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50000 UNIT',
        'options': [
          '50000 UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'MISCELLANEOUS',
        'default': '5MM UNIT',
        'options': [
          '5MM UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '500 UNIT/G',
        'options': [
          '500 UNIT/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYMYXIN B SULFATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500K UNIT',
        'options': [
          '500K UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COLISTIN (AS COLISTIMETHATE SODIUM)',
    'types': [
      {
        'route': 'INJECTION',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZTREONAM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMIPENEM/CILASTATIN SODIUM',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFADIAZINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFISOXAZOLE ACETYL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG/5ML',
        'options': [
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFISOXAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFAMETHOXAZOLE/PHENAZOPYRIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-100 MG',
        'options': [
          '500-100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFAMETHOXAZOLE/TRIMETHOPRIM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80-16MG/ML',
        'options': [
          '80-16MG/ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '800-160 MG',
        'options': [
          '800-160 MG',
          '400MG-80MG',
          '800-160/20',
          '200-40MG/5'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'SULFASALAZINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISONIAZID',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '100 MG',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINOSALICYLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 G',
        'options': [
          '4 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRAZINAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHAMBUTOL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHIONAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITROFURANTOIN MACROCRYSTAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITROFURANTOIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG/5 ML',
        'options': [
          '25 MG/5 ML'
        ],
        'quantity': 14.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'with food'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '12'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NALIDIXIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1 G',
          '250 MG/5ML',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE MANDELATE/SODIUM PHOSPHATE,M-BASIC M-HYD',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-500 MG',
        'options': [
          '500-500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE/METHYLENE BLUE/BENZ AC/SALICYLATE/ATROP/HYOSCY',
    'types': [
      {
        'route': 'ORAL',
        'default': '81.6-0.06',
        'options': [
          '81.6-0.06',
          '120 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE HIPPURATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE MANDELATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G',
        'options': [
          '1 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENAZOPYRIDINE HCL/HYOSCYAMINE/BUTABARBITAL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-0.3-15',
        'options': [
          '150-0.3-15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENAZOPYRIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG'
        ],
        'quantity': 6.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'after meals'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '2'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'METHIONINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '0.2G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIMETHOPRIM',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG/5 ML',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORFLOXACIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              },
              {
                'typeName': 'modifier',
                'value': 'while awake'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '24'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'combine',
            'blockName': 'then',
            'instructions': null
          },
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              },
              {
                'typeName': 'modifier',
                'value': 'while awake'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
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
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '750 MG',
          '100 MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'OTIC',
        'default': '0.2 %',
        'options': [
          '0.2 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'DIMETHYL SULFOXIDE',
    'types': [
      {
        'route': 'INTRAVESICAL',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'URETHRAL',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GRISEOFULVIN, MICROSIZE',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG/5ML',
        'options': [
          '125 MG/5ML',
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GRISEOFULVIN ULTRAMICROSIZE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '125 MG',
          '330 MG',
          '165 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPHOTERICIN B',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '3 %',
        'options': [
          '3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NYSTATIN',
    'types': [
      {
        'route': 'MUCOUS MEMBRANE',
        'default': '200K UNIT',
        'options': [
          '200K UNIT'
        ]
      },
      {
        'route': 'ORAL',
        'default': '100000/ML',
        'options': [
          '100000/ML',
          '500K UNIT',
          '2B UNIT'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '100000/G',
        'options': [
          '100000/G'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'VAGINAL',
        'default': '100K UNIT',
        'options': [
          '100K UNIT'
        ]
      }
    ]
  },
  {
    'drug_name': 'FLUCYTOSINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KETOCONAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
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
                'value': '14'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CLOTRIMAZOLE',
    'types': [
      {
        'route': 'MUCOUS MEMBRANE',
        'default': '10 MG',
        'options': [
          '10 MG'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '14'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'VAGINAL',
        'default': '1 %',
        'options': [
          '1 %',
          '500 MG',
          '100 MG'
        ]
      }
    ]
  },
  {
    'drug_name': 'MICONAZOLE',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUININE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '325 MG',
        'options': [
          '325 MG',
          '324 MG',
          '260 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROQUINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRIMAQUINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '26.3 MG',
        'options': [
          '26.3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRIMETHAMINE/SULFADOXINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25MG-500MG',
        'options': [
          '25MG-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRIMETHAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYCHLOROQUINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IODOQUINOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '210 MG',
        'options': [
          '210 MG',
          '650 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAROMOMYCIN SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METRONIDAZOLE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METRONIDAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '375 MG',
          '750 MG'
        ],
        'quantity': 14.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '12'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '0.75 %',
        'options': [
          '0.75 %',
          '1 %'
        ],
        'quantity': 5.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'at night'
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
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'VAGINAL',
        'default': '0.75 %',
        'options': [
          '0.75 %',
          '1.3 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'PRAZIQUANTEL',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTAMIDINE ISETHIONATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '300 MG',
        'options': [
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INJECTION',
        'default': '300 MG',
        'options': [
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIABENDAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEBENDAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAPSONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %',
          '7.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOFAZIMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACYCLOVIR SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '1000 MG',
          '500 MG',
          '500MG/20ML',
          '1 G/40 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACYCLOVIR',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ]
      },
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '800 MG',
          '200 MG',
          '200 MG/5ML'
        ],
        'quantity': 35.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'RIBAVIRIN',
    'types': [
      {
        'route': 'INHALATION',
        'default': '6 G',
        'options': [
          '6 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '400 MG',
          '600 MG',
          '200-400(7)',
          '400-400(7)',
          '600-400(7)',
          '400-400 MG',
          '600-600(7)',
          '600-600 MG',
          '600-400 MG',
          '200-400MG',
          '500 MG',
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZIDOVUDINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '300 MG',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLIOMYELITIS VACCINE, KILLED',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40-8-32',
        'options': [
          '40-8-32'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RABIES VACCINE,HUMAN DIPLOID',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2.5 UNIT',
        'options': [
          '2.5 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMMUNE GLOBULIN,GAMMA(IGG)',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '15 %-18 %',
        'options': [
          '15 %-18 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '6 G',
        'options': [
          '6 G',
          '10 %',
          '5 G',
          '12 G',
          '10 G',
          '1 G',
          '2.5 G',
          '3 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '16 %',
        'options': [
          '16 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LYMPHOCYTE IG,ANTITHYMOCYTE/THIMEROSAL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPATITIS B IMMUNE GLOBULIN',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '>312/ML',
        'options': [
          '>312/ML',
          '>1560/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RHO(D) IMMUNE GLOBULIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1500/2 ML',
        'options': [
          '1500/2 ML',
          '600 UNIT',
          '5000 UNIT',
          '1500 UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 UNIT',
        'options': [
          '250 UNIT',
          '1500 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VARICELLA-ZOSTER IMMUNE GLOBULIN (HUMAN)',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '125 UNIT',
        'options': [
          '125 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNEUMOCOCCAL 23-VALENT POLYSACCHARIDE VACCINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25MCG/0.5',
        'options': [
          '25MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS TOXOID, ADSORBED',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5 LF/0.5ML',
        'options': [
          '5 LF/0.5ML',
          '10LF/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TUBERCULIN, PURIFIED PROTEIN DERIVATIVE',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '5 T/0.1 ML',
        'options': [
          '5 T/0.1 ML',
          '250/0.1ML',
          '1 UNIT/0.1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TUBERCULIN,OLD SKIN TEST',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '5 T UNIT',
        'options': [
          '5 T UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZYLPENICILLOYL POLYLYSINE',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '0.25 ML',
        'options': [
          '0.25 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYMENOPTERA ALLERGENIC EXTRACT',
    'types': [
      {
        'route': 'INJECTION',
        'default': '120 MCG',
        'options': [
          '120 MCG',
          '12 MCG',
          '300 MCG/ML',
          '360 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLLEN EXTRACTS',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '10000/ML',
        'options': [
          '10000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HOUSE DUST',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '10000/ML',
        'options': [
          '10000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS AND DIPHTHERIA TOXOIDS, ADULT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2-2 LF/0.5',
        'options': [
          '2-2 LF/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS AND DIPHTHERIA TOXOIDS, PEDIATRIC',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5-6.7 LF',
        'options': [
          '5-6.7 LF'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SILVER NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %',
          '0.5 %',
          '50 %',
          '25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POVIDONE-IODINE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE 0.45% IRRIGATING SOLN',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '0.45 %',
        'options': [
          '0.45 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE IRRIGATING SOLUTION',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MANNITOL/SORBITOL SOLUTION',
    'types': [
      {
        'route': 'URETHRAL',
        'default': '0.54G-2.7G',
        'options': [
          '0.54G-2.7G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORHEXIDINE GLUCONATE',
    'types': [
      {
        'route': 'MUCOUS MEMBRANE',
        'default': '1.2 MG/ML',
        'options': [
          '1.2 MG/ML',
          '0.12 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYCINE UROLOGIC SOLUTION',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '1.5 %',
        'options': [
          '1.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FORMALDEHYDE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HISTAMINE PHOSPHATE',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '0.1 MG/ML',
        'options': [
          '0.1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHENHYDRAMINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '12.5MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXYLAMINE SUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '5 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBINOXAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG/5 ML',
        'options': [
          '4 MG/5 ML',
          '4 MG',
          '10 MG',
          '1.75MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG',
        'options': [
          '6 MG',
          '1 MG/ML',
          '11 MG',
          '12 MG',
          '2 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12 MG',
        'options': [
          '12 MG',
          '8 MG',
          '4 MG',
          '2 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG',
        'options': [
          '6 MG',
          '4 MG',
          '2 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIPROLIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.25MG/5ML',
        'options': [
          '1.25MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLEMASTINE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.67MG/5ML',
        'options': [
          '0.67MG/5ML',
          '2.68 MG',
          '1.34 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERFENADINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYSERGIDE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIMETIDINE HCL IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '300MG/50ML',
        'options': [
          '300MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIMETIDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '300 MG',
          '800 MG',
          '200 MG',
          '200MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RANITIDINE HCL IN 0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/50ML',
        'options': [
          '50 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RANITIDINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML',
          '50 MG/2 ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG',
          '75 MG',
          '15 MG/ML',
          '25 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FAMOTIDINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG',
          '10 MG',
          '40MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NIZATIDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG',
          '150MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZATHIOPRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOSPORINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG',
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CROMOLYN SODIUM',
    'types': [
      {
        'route': 'INHALATION',
        'default': '20 MG/2 ML',
        'options': [
          '20 MG/2 ML',
          '800 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '5.2 MG',
        'options': [
          '5.2 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INTERFERON ALFA-2B,RECOMB.',
    'types': [
      {
        'route': 'INJECTION',
        'default': '6MMUNIT/ML',
        'options': [
          '6MMUNIT/ML',
          '10MM/ML',
          '18MM UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '5MM/0.2ML',
        'options': [
          '5MM/0.2ML',
          '3MM/0.2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALPHA-1-PROTEINASE INHIBITOR',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000 MG',
        'options': [
          '1000 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOSULFAN BLUE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHACHOLINE CHLORIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPOETIN ALFA',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20000/ML',
        'options': [
          '20000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERGOLIDE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.05 MG',
        'options': [
          '0.05 MG',
          '1 MG',
          '0.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GANCICLOVIR SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIOCONAZOLE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '6.5 %',
        'options': [
          '6.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IFOSFAMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '1 G/20 ML',
          '3 G/60 ML',
          '3 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE/POTASSIUM BICARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MEQ',
        'options': [
          '20 MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYCODONE HCL/ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '4.8355-325',
        'options': [
          '4.8355-325'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROCHLORPERAZINE',
    'types': [
      {
        'route': 'RECTAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBACHOL',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '0.01 %',
        'options': [
          '0.01 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '3 %',
        'options': [
          '3 %',
          '1.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIMENHYDRINATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUNSCREEN/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/DEXTROSE 20 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMEPRAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG',
          '10 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'IOVERSOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '320 MG/ML',
        'options': [
          '320 MG/ML',
          '350 MG/ML',
          '300 MG/ML',
          '240 MG/ML',
          '160 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PHOSPHATE/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '900MG/50ML',
        'options': [
          '900MG/50ML',
          '600MG/50ML',
          '300MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYMYXIN B SULFATE/TRIMETHOPRIM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '10000-1/ML',
        'options': [
          '10000-1/ML'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '6'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/FLUOROMETHOLONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '10%-0.1%',
        'options': [
          '10%-0.1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPHAZOLINE HCL/ZINC SULFATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.02 %',
        'options': [
          '0.02 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG/5 ML',
        'options': [
          '75 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOLYBDENUM (AMMONIUM MOLYBDATE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MCG/ML',
        'options': [
          '25 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOMIPRAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'APROTININ',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10000/ML',
        'options': [
          '10000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1000 MG',
          '850 MG',
          '750 MG',
          '500 MG/5ML'
        ],
        'quantity': 60.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'with food'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'VITAMIN A PALMITATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50000/ML',
        'options': [
          '50000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SOTALOL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '150MG/10ML',
        'options': [
          '150MG/10ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '160 MG',
          '120 MG',
          '240 MG',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TENIPOSIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/5 ML',
        'options': [
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPAFENONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '225 MG',
        'options': [
          '225 MG',
          '150 MG',
          '325 MG',
          '425 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOZAPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG',
          '200 MG',
          '50 MG',
          '150 MG',
          '12.5 MG',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROPOFOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANISTREPLASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '30 UNIT',
        'options': [
          '30 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORGESTIMATE-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '7DAYSX3 28',
        'options': [
          '7DAYSX3 28',
          '0.25-0.035',
          '7DAYSX3 LO'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LORAZEPAM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.5 MG',
          '2 MG',
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHOLESTYRAMINE (WITH SUGAR)',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 G',
        'options': [
          '4 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ONABOTULINUMTOXINA',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 UNIT',
        'options': [
          '100 UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 UNIT',
        'options': [
          '50 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUCONAZOLE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '100 %',
        'options': [
          '100 %'
        ]
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG',
          '150 MG',
          '50 MG',
          '40 MG/ML',
          '10 MG/ML'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'once',
            'instructions': null
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-30MG',
        'options': [
          '200MG-30MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEFLOQUINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '667 MG',
        'options': [
          '667 MG',
          '667 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-10MG/5',
        'options': [
          '7.5-10MG/5',
          '10-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-2.5 MG/5',
        'options': [
          '5-2.5 MG/5',
          '7.5-3.75/5',
          '5-1.67MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/ASCORBIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-100MG',
        'options': [
          '1 MG-100MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BETAXOLOL HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOMETHEPTENE MUCATE/CAFFEINE/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '65-100-325',
        'options': [
          '65-100-325'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KETOROLAC TROMETHAMINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '30MG/ML(1)',
        'options': [
          '30MG/ML(1)',
          '15 MG/ML',
          '30 MG/ML'
        ]
      },
      {
        'route': 'INTRAMUSCULAR',
        'default': '60 MG/2 ML',
        'options': [
          '60 MG/2 ML',
          '30 MG/ML',
          '15 MG/ML'
        ]
      },
      {
        'route': 'INTRAVENOUS',
        'default': '15 MG/ML',
        'options': [
          '15 MG/ML',
          '30 MG/ML'
        ]
      },
      {
        'route': 'NASAL',
        'default': '15.75 MG',
        'options': [
          '15.75 MG'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.4 %'
        ]
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'PILOCARPINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '4 %',
        'options': [
          '4 %',
          '2 %',
          '1 %',
          '6 %',
          '0.25 %',
          '3 %',
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYVINYL ALCOHOL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1.4 %',
        'options': [
          '1.4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMIN WITH MINERALS/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN HBR/PHENYLEPHRINE/PYRILAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-10-25/5',
        'options': [
          '20-10-25/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CODEINE PHOSPHATE/TRIPROLIDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-10-1.25',
        'options': [
          '30-10-1.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/OXYBENZONE/PADIMATE O',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METIPRANOLOL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/POLYMYXIN B SULFATE/BUFFERS/HYDROCORTISONE',
    'types': [
      {
        'route': 'OTIC',
        'default': '3.5-10K-1',
        'options': [
          '3.5-10K-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGADEMASE BOVINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 UNIT/1',
        'options': [
          '250 UNIT/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN SULFATE/SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80MG/100ML',
        'options': [
          '80MG/100ML',
          '60 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITROGLYCERIN/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25MG/250ML',
        'options': [
          '25MG/250ML',
          '50MG/250ML',
          '100MG/250',
          '50MG/500ML',
          '200MG/500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLSALAZINE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFUROXIME SODIUM/WATER FOR INJECTION,STERILE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.5G/50ML',
        'options': [
          '1.5G/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IDARUBICIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXAZOSIN MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '4 MG',
          '8 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/IRON,CARB/DOCUSATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-50-1MG',
        'options': [
          '90-50-1MG',
          '100-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OFLOXACIN',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '10'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '200 MG',
          '300 MG'
        ]
      },
      {
        'route': 'OTIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'ESTAZOLAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HALOBETASOL PROPIONATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALTRETAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ONDANSETRON HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '8 MG',
          '4 MG/5 ML',
          '24 MG'
        ],
        'quantity': 12.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'allow to dissolve under tongue'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '8'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'GALLIUM NITRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISRADIPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FILGRASTIM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '480MCG/0.8',
        'options': [
          '480MCG/0.8',
          '300MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN LACTATE/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/0.2L',
        'options': [
          '400MG/0.2L',
          '200MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN LACTATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/40ML',
        'options': [
          '400MG/40ML',
          '200MG/20ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SARGRAMOSTIM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '500 MCG/ML',
        'options': [
          '500 MCG/ML',
          '250 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENICILLIN G POTASSIUM/DEXTROSE-WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1MM/50ML',
        'options': [
          '1MM/50ML',
          '3MM/50ML',
          '2MM/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUCCIMER',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RAMIPRIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '2.5 MG',
          '1.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PODOFILOX',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALGLUCERASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80 UNIT/ML',
        'options': [
          '80 UNIT/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETODOLAC',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '500 MG',
          '300 MG',
          '200 MG',
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE 10 % AND 0.2 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %-0.2 %',
        'options': [
          '10 %-0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSINOPRIL SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAPIPRAZOLE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENAZEPRIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '40 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE/DEXTROMETHORPHAN/PHENYLEPH/PYRIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-5-8.85',
        'options': [
          '10-5-8.85'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BERACTANT',
    'types': [
      {
        'route': 'INHALATION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FELODIPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/MULTIVIT,TX IRON,OTHER MINS',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.8 MG',
        'options': [
          '0.8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN NPH HUMAN ISOPHANE/INSULIN REGULAR, HUMAN',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '70-30/ML',
        'options': [
          '70-30/ML',
          '50-50/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIDANOSINE/SODIUM CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '167 MG',
        'options': [
          '167 MG',
          '100 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRAVASTATIN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG',
          '10 MG',
          '80 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CLARITHROMYCIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '250 MG/5ML',
          '125 MG/5ML'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '12'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TICLOPIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NICOTINE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '21 MG/24HR',
        'options': [
          '21 MG/24HR',
          '7MG/24HR',
          '14MG/24HR',
          '22 MG/24HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAMIDRONATE DISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '30MG/10ML',
        'options': [
          '30MG/10ML',
          '90 MG/10ML',
          '90 MG',
          '30 MG',
          '60 MG/10ML',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIFAMPIN/ISONIAZID/PYRAZINAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '120-50-300',
        'options': [
          '120-50-300'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTOSTATIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM SULFATE/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/100 ML',
        'options': [
          '1 G/100 ML',
          '10G/500ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUDARABINE PHOSPHATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG',
          '50 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NABUMETONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '750 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SIMVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG',
          '10 MG',
          '80 MG',
          '5 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'at night'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CEFPROZIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML',
          '125 MG/5ML',
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUMAZENIL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.1 MG/ML',
        'options': [
          '0.1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHTHERIA,PERTUSSIS(ACELLULAR),TETANUS VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2.5-8-5/.5',
        'options': [
          '2.5-8-5/.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITROFURANTOIN MONOHYDRATE/MACROCRYSTALS',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': 14.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'with food'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '12'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'METOPROLOL SUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '25 MG',
          '200 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'SERTRALINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '25 MG',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE/CHLORPHENIRAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5MG-4MG/5',
        'options': [
          '5MG-4MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYTOMEGALOVIRUS IMMUNE GLOBULN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZITHROMYCIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ]
      },
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '200 MG/5ML',
          '600 MG',
          '100 MG/5ML',
          '1 G',
          '2 G/60 ML'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'on',
            'instructions': [
              {
                'typeName': 'ts',
                'value': 'today'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': '',
            'instructions': null
          },
          {
            'blockType': 'combine',
            'blockName': 'then',
            'instructions': null
          },
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FLUVOXAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '25 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIVACURIUM CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOSORBIDE MONONITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '30 MG',
          '120 MG',
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EDROPHONIUM CHLORIDE/ATROPINE SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10-.14MG/1',
        'options': [
          '10-.14MG/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOMEFLOXACIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOROMETHOLONE ACETATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALDESLEUKIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '22MM UNIT',
        'options': [
          '22MM UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZALCITABINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.750MG',
        'options': [
          '0.750MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MAL/PHENYLTOLOXAMINE CIT/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-40-20 MG',
        'options': [
          '4-40-20 MG',
          '2.5-7.5-5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FINASTERIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENTANYL',
    'types': [
      {
        'route': 'SUBLINGUAL',
        'default': '600 MCG',
        'options': [
          '600 MCG',
          '200 MCG',
          '800 MCG',
          '100MCG/SPR',
          '400MCG/SPR',
          '1200 MCG',
          '1600 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '25 MCG/HR',
        'options': [
          '25 MCG/HR',
          '100 MCG/HR',
          '50MCG/HR',
          '75MCG/HR',
          '12 MCG/HR',
          '62.5MCG/HR',
          '37.5MCG/HR',
          '87.5MCG/HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CITRATE PHOSPHATE DEXTROS SOLN',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '2.63 G/100',
        'options': [
          '2.63 G/100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZTREONAM/DEXTROSE-WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LORACARBEF',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG/5ML',
        'options': [
          '200 MG/5ML',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMINS WITH IRON, FLUORIDE, & CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-1-250MG',
        'options': [
          '30-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLODIPINE BESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '2.5 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CEFPODOXIME PROXETIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG',
          '100 MG/5ML',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ITRACONAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIDANOSINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '400 MG',
          '200 MG',
          '125 MG',
          'FNL10MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LACTIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOBAZAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '2.5 MG/ML',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEDOCROMIL SODIUM',
    'types': [
      {
        'route': 'INHALATION',
        'default': '1.75 MG',
        'options': [
          '1.75 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CETIRIZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '1 MG/ML',
          '5 MG',
          '5 MG/5 ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'BUDESONIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.25MG/2ML',
        'options': [
          '0.25MG/2ML',
          '0.5 MG/2ML',
          '1 MG/2 ML',
          '180 MCG',
          '90 MCG',
          '200 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '32MCG',
        'options': [
          '32MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '3 MG',
        'options': [
          '3 MG',
          '9 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYCERIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 %',
        'options': [
          '75 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MILRINONE LACTATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CISAPRIDE MONOHYDRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENOFIBRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '160 MG',
        'options': [
          '160 MG',
          '54 MG',
          '120 MG',
          '40 MG',
          '150 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KETOTIFEN FUMARATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.025 %',
        'options': [
          '0.025 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'EPIRUBICIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/0.1L',
        'options': [
          '200MG/0.1L',
          '50 MG/25ML',
          '50 MG',
          '150MG/75ML',
          '10 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUMATRIPTAN SUCCINATE',
    'types': [
      {
        'route': 'NASAL',
        'default': '11 MG',
        'options': [
          '11 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '6 MG/0.5ML',
        'options': [
          '6 MG/0.5ML',
          '4 MG/0.5ML',
          '3 MG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '6.5 MG/4HR',
        'options': [
          '6.5 MG/4HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHTH,PERTUSS(ACELL),TET PED',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '6.7-46.8-5',
        'options': [
          '6.7-46.8-5',
          '15-10-5/.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LORATADINE/PSEUDOEPHEDRINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10MG-240MG',
        'options': [
          '10MG-240MG',
          '5 MG-120MG'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FLUNISOLIDE/MENTHOL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '250 MCG',
        'options': [
          '250 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIVER EXTRACT (BEEF-PORK)',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25.5 MG/ML',
        'options': [
          '25.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATOVAQUONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '750 MG/5ML',
        'options': [
          '750 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXAPROZIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESTOSTERONE UNDECANOATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '750 MG/3ML',
        'options': [
          '750 MG/3ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL/NORETHINDRONE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-0.5MG',
        'options': [
          '1 MG-0.5MG',
          '0.5-0.1 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '.05-.14/24',
        'options': [
          '.05-.14/24',
          '.05-.25/24'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVONORGESTREL',
    'types': [
      {
        'route': 'INTRAUTERINE',
        'default': '20MCG/24HR',
        'options': [
          '20MCG/24HR',
          '18.6MCG/24',
          '17.5MCG/24',
          '14MCG/24HR'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1.5 MG',
        'options': [
          '1.5 MG',
          '0.75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIFEPRISTONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESOGESTREL-ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.15-0.03',
        'options': [
          '0.15-0.03',
          '7 DAYS X 3'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAROXETINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG',
          '10 MG',
          '30 MG',
          '12.5 MG',
          '25 MG',
          '37.5 MG',
          '10 MG/5 ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'in the morning'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TETRABENAZINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VIGABATRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LAMOTRIGINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '100 MG',
          '200 MG',
          '150 MG',
          '5 MG',
          '50 MG',
          '300 MG',
          '25MG (35)',
          '25-50-100',
          '25(21)-50',
          '25(84)-100',
          '250 MG',
          '50(42)-100',
          '25(42)-100',
          '2 MG',
          '50-100-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALMETEROL XINAFOATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '50 MCG',
        'options': [
          '50 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BISOPROLOL FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DALTEPARIN SODIUM,PORCINE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10000/ML',
        'options': [
          '10000/ML',
          '5000/0.2ML',
          '2500/0.2ML',
          '7500/0.3ML',
          '18000/0.72',
          '15000/0.6',
          '12500/0.5',
          '25000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZELAIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '15 %',
        'options': [
          '15 %',
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MUPIROCIN CALCIUM',
    'types': [
      {
        'route': 'NASAL',
        'default': '2 %',
        'options': [
          '2 %'
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'until healed',
            'instructions': null
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NATAMYCIN',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERBINAFINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '125 MG',
          '187.5MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LORATADINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG/5 ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'AZELASTINE HCL',
    'types': [
      {
        'route': 'NASAL',
        'default': '137 MCG',
        'options': [
          '137 MCG',
          '205.5MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GRANISETRON HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML',
          '1 MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '1 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PACLITAXEL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 MG/ML',
        'options': [
          '6 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIFABUTIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUINAPRIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG',
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TINIDAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPATITIS A VIRUS VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '1440/ML',
        'options': [
          '1440/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOTERIDOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '279.3MG/ML',
        'options': [
          '279.3MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZATHIOPRINE SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUINAPRIL HCL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-12.5 MG',
        'options': [
          '20-12.5 MG',
          '20 MG-25MG',
          '10-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACITRETIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '10 MG',
          '17.5 MG',
          '22.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLADRIBINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/10ML',
        'options': [
          '10 MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZOLPIDEM TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '12.5 MG',
          '6.25 MG',
          '5 MG/SPRAY'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '3.5 MG',
        'options': [
          '3.5 MG',
          '1.75 MG',
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE/POTASSIUM BICARBONATE/CITRIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MEQ',
        'options': [
          '25 MEQ',
          '50MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MELPHALAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALBENDAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUTICASONE PROPIONATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '220 MCG',
        'options': [
          '220 MCG',
          '44 MCG',
          '110 MCG',
          '100 MCG',
          '250 MCG',
          '50 MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'inhale',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'puff(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'NASAL',
        'default': '50 MCG',
        'options': [
          '50 MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'spray(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'in each sinus'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %',
          '0.005 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'NILUTAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENOXAPARIN SODIUM',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '30MG/0.3ML',
        'options': [
          '30MG/0.3ML',
          '40MG/0.4ML',
          '80MG/0.8ML',
          '60MG/0.6ML',
          '120MG/.8ML',
          '100 MG/ML',
          '150 MG/ML',
          '300MG/3ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARTICAINE HCL/EPINEPHRINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4%-1:100K',
        'options': [
          '4%-1:100K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE/SODIUM BICARBONATE/POTASSIUM CHLORIDE/PEG',
    'types': [
      {
        'route': 'ORAL',
        'default': '420G',
        'options': [
          '420G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 10 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 15 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '15 %',
        'options': [
          '15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5.4 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5.4%',
        'options': [
          '5.4%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5.5 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5.5 %',
        'options': [
          '5.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 6.9 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6.9%',
        'options': [
          '6.9%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 6 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 %',
        'options': [
          '6 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 7 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7 %',
        'options': [
          '7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 8.5 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 8 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8 %',
        'options': [
          '8 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3 %/ELECTROLYTE-TPN SOLN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 %',
        'options': [
          '3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5.5 %/ELECTROLYTE-TPN SOLN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5.5 %',
        'options': [
          '5.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 7 %/ELECTROLYTE-TPN SOLN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7 %',
        'options': [
          '7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 8.5 %/ELECTROLYTE-TPN SOLN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/DEXTROSE 25 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/DEXTROSE 10 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5.5 %/DEXTROSE 50 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5.5 %',
        'options': [
          '5.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 8.5 %/DEXTROSE 50 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIPASE/PROTEASE/AMYLASE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8K-30K-30K',
        'options': [
          '8K-30K-30K',
          '4.5-25-20K',
          '10K-37.5K',
          '20-75-66.4',
          '16-48-48K',
          '249 MG',
          '497MG',
          '12K-38K-60',
          '20-44-56K',
          '5K-17K-27K',
          '20K-65K-65',
          '24-76-120K',
          '10-34-55K',
          '16-52-52K',
          '8K-28.75K',
          '16K-57.5K',
          '124MG',
          '5K-20K-20K',
          '1.2-15-15K',
          '371 MG',
          '25-85-136K',
          '6K-19K-30K',
          '15-51-82K',
          '3K-10K-16K',
          '8K-45K-40K',
          '10-30-30K',
          '36K-114K',
          '468MG',
          '20-68-109K',
          '2.4-30-30K',
          '4000-14375',
          '23-46-46K',
          '4K-25K-20K',
          '223MG',
          '4.2K-14.2K',
          '3-9.5-15K',
          '16.8-70-70',
          '250 MG',
          '935 MG',
          '20.7-41.4K',
          '13.8-27.6K',
          '4K-25K-25K',
          '18-59-59K',
          '333 MG',
          '16-60-60K',
          '10.5-35.5K',
          '16.8-56.8K',
          '20.9-78.3K',
          '4K-12K-12K',
          '21 K-54.7K',
          '2.6 K-6.2K',
          '10.4-39.2K',
          '40K-136K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FELBAMATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '400 MG',
          '600 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYAMPHETAMINE HBR/TROPICAMIDE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %-0.25 %',
        'options': [
          '1 %-0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-30MG/5',
        'options': [
          '20-30MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE 0.45 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.45 %',
        'options': [
          '0.45 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': '0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE 3 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 %',
        'options': [
          '3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE 5 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METRONIDAZOLE IN SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500MG/0.1L',
        'options': [
          '500MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NISOLDIPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25.5 MG',
        'options': [
          '25.5 MG',
          '40 MG',
          '17 MG',
          '8.5MG',
          '34 MG',
          '10 MG',
          '20 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACARBOSE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICLOFENAC SODIUM/MISOPROSTOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG-200',
        'options': [
          '50 MG-200',
          '75 MG-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRAMADOL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '200 MG',
          '150 MG',
          '100 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CARBINOXAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2MG-1MG/ML',
        'options': [
          '2MG-1MG/ML',
          '40MG-8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VANCOMYCIN HCL/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500MG/0.1L',
        'options': [
          '500MG/0.1L',
          '750MG/.15L',
          '1G/200ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INTERFERON BETA-1B',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '0.3 MG',
        'options': [
          '0.3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXBROMPHENIRAMINE MALEATE/PSEUDOEPHEDRINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG-120MG',
        'options': [
          '6 MG-120MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPARIN SODIUM,PORCINE IN 0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '12500/250',
        'options': [
          '12500/250',
          '25000/250',
          '25000/500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TACRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '40 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIMANTADINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CRESYL ACETATE',
    'types': [
      {
        'route': 'OTIC',
        'default': '25 %',
        'options': [
          '25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERYTHROMYCIN BASE/ETHYL ALCOHOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %',
          '1.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BISOPROLOL FUMARATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-6.25MG',
        'options': [
          '5-6.25MG',
          '10-6.25MG',
          '2.5-6.25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RISPERIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '3 MG',
          '4 MG',
          '0.5 MG',
          '0.25 MG',
          '1 MG/ML',
          '2 MG/2 ML',
          '3 MG/3 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTOSAN POLYSULFATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIPERACILLIN SODIUM/TAZOBACTAM SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.375 G',
        'options': [
          '3.375 G',
          '2.25 G',
          '4.5 G',
          '40.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PREDNICARBATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/POTASSIUM GUAIACOLSULF/DEXTROMETHORPHAN/PYRILAMN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-10-200',
        'options': [
          '10-10-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOBUTAMINE HCL IN DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500MG/250',
        'options': [
          '500MG/250',
          '1000MG/250',
          '500 MG/500',
          '250MG/250',
          '250MG/0.5L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'STRONTIUM-89 CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MCI/ML',
        'options': [
          '1 MCI/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICLOFENAC POTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TORSEMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/2 ML',
        'options': [
          '20 MG/2 ML',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '100 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GABAPENTIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '100 MG',
          '400 MG',
          '600 MG',
          '800 MG',
          '250 MG/5ML',
          '300 MG/6ML',
          '300-600 MG'
        ],
        'quantity': 90.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'VITAMIN A PALMITATE/ERGOCALCIFEROL (VIT D2)/EUCALYPTOL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2500-250',
        'options': [
          '2500-250',
          '5000-500/2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYPROMELLOSE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '2.5 %',
        'options': [
          '2.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYPROPYL CELLULOSE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VENLAFAXINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '37.5 MG',
          '150 MG',
          '100 MG',
          '50 MG',
          '25 MG',
          '225 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5 MG/5ML',
        'options': [
          '7.5 MG/5ML',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE/CHLORPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-4.5MG/5',
        'options': [
          '5-4.5MG/5',
          '25-9MG',
          '10-8MG/5ML',
          '20-4MG/5ML',
          '6MG-2MG/ML',
          '5MG-4MG/5',
          '25-8MG',
          '5MG-4.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG/5 ML',
        'options': [
          '8 MG/5 ML',
          '2 MG/ML',
          '12 MG',
          '8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE TANNATE/PSEUDOEPHEDRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4.5-75MG/5',
        'options': [
          '4.5-75MG/5',
          '4 MG-30 MG',
          '2.25-21.75'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUVASTATIN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '40 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/THEOPHYLLINE ANHYDROUS/PSEUDOEPHEDRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-150/15',
        'options': [
          '150-150/15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/ACRIVASTINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60-8MG',
        'options': [
          '60-8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENAZEPRIL HCL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-12.5 MG',
        'options': [
          '20-12.5 MG',
          '10-12.5MG',
          '20 MG-25MG',
          '5-6.25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROCURONIUM BROMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TINZAPARIN SODIUM,PORCINE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '20000/ML',
        'options': [
          '20000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRANDOLAPRIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LANSOPRAZOLE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '30 MG',
        'options': [
          '30 MG'
        ]
      },
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '15 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'FOSFOMYCIN TROMETHAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '3 G',
        'options': [
          '3 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FAMCICLOVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CODEINE PHOSPHATE/PYRILAMINE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '9-8.33MG/5',
        'options': [
          '9-8.33MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMIGLUCERASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400 UNIT',
        'options': [
          '400 UNIT',
          '200 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IPRATROPIUM BROMIDE/ALBUTEROL SULFATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.5-3MG/3',
        'options': [
          '0.5-3MG/3',
          '18-103MCG',
          '20-100 MCG'
        ]
      }
    ]
  },
  {
    'drug_name': 'STAVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '30 MG',
          '15 MG',
          '20 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOBETASOL PROPIONATE/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %',
          '0.05-0.05%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/DEXTROSE 25 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHTHER,PERTUSS,TETANUS VAC/HAEMOPH B POLYSAC CONJ-TET TOX',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '6.7-4-5-10',
        'options': [
          '6.7-4-5-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN HBR/BROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-15-1/5',
        'options': [
          '25-15-1/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYSTEAMINE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '50 MG',
          '25 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPARIN SODIUM,BEEF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10000/ML',
        'options': [
          '10000/ML',
          '1000/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEFAZODONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '150 MG',
          '200 MG',
          '250 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VINORELBINE TARTRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GANCICLOVIR',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '4.5 MG',
        'options': [
          '4.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.15 %',
        'options': [
          '0.15 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS, CONJUGATED/MEDROXYPROGESTERONE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.625-2.5',
        'options': [
          '0.625-2.5',
          '0.45-1.5MG',
          '0.3-1.5MG',
          '0.625-5 MG',
          '0.625 (14)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TYPHOID VACCINE VI CAPSULAR POLYSACCHARIDE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '25MCG/0.5',
        'options': [
          '25MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYBURIDE/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-500MG',
        'options': [
          '5 MG-500MG',
          '2.5-500 MG',
          '1.25-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MILRINONE LACTATE/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20MG/100ML',
        'options': [
          '20MG/100ML',
          '40MG/200ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL CYPIONATE/MEDROXYPROGESTERONE ACETATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5-25MG/0.5',
        'options': [
          '5-25MG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIMETIDINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '150 MG/ML',
        'options': [
          '150 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '150 MG/ML',
        'options': [
          '150 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '300 MG/5ML',
        'options': [
          '300 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOPROMIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '370 MG/ML',
        'options': [
          '370 MG/ML',
          '300 MG/ML',
          '240 MG/ML',
          '150 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOSARTAN POTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '25 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'ZINC ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOSARTAN POTASSIUM/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100MG-25MG',
        'options': [
          '100MG-25MG',
          '50-12.5 MG',
          '100-12.5MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'DORZOLAMIDE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOEXIPRIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIMOLOL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MYCOPHENOLATE MOFETIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '500 MG',
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/DEXTROSE 20 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLODIPINE BESYLATE/BENAZEPRIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-20 MG',
        'options': [
          '5 MG-20 MG',
          '10 MG-20MG',
          '5 MG-10 MG',
          '10 MG-40MG',
          '2.5MG-10MG',
          '5 MG-40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALMEFENE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MCG/ML',
        'options': [
          '100 MCG/ML',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON/VITAMIN B COMPLEX/FOLIC ACID/MINERALS',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-22MCG',
        'options': [
          '1MG-22MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORHEXIDINE GLUCONATE/ISOPROPYL ALCOHOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %-4 %',
        'options': [
          '4 %-4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON/FOLIC ACID/VITAMIN B COMP AND C/MINERALS',
    'types': [
      {
        'route': 'ORAL',
        'default': '106 MG-1MG',
        'options': [
          '106 MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYCLOSPORINE, MODIFIED',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG',
          '100 MG/ML',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VANCOMYCIN IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500MG/0.1L',
        'options': [
          '500MG/0.1L',
          '750MG/.15L',
          '1G/200ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/CARBETAPENTANE CIT/PHENYLEPHRINE/PHENYLPROP',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-10-10/5',
        'options': [
          '20-10-10/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALACYCLOVIR HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1000 MG'
        ],
        'quantity': 21.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '3'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'ALENDRONATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '70 MG',
        'options': [
          '70 MG',
          '35 MG',
          '10 MG',
          '5 MG',
          '70 MG/75ML',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIMEXOLONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFEPIME HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICALUTAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE HCL/BROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-2-1/ML',
        'options': [
          '40-2-1/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LAMIVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG',
          '10 MG/ML',
          '100 MG',
          '25 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPHOTERICIN B LIPID COMPLEX',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXORUBICIN HCL PEGYLATED LIPOSOMAL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLCELLULOSE/METOCLOPRAMIDE HCL/BARIUM SULFATE/LIDOCAINE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SAQUINAVIR MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PHENYLEPHRINE TANNATE/CHLORPHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-5-4MG/5',
        'options': [
          '30-5-4MG/5',
          '60-10-5MG',
          '30-12.5-4',
          '60-20-8/5',
          '15-2.5-2/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRETINOIN/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %',
          '0.02 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTIBUTEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '90 MG/5 ML',
        'options': [
          '90 MG/5 ML',
          '400 MG',
          '180 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RILUZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANASTROZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN/PSEUDOEPHEDRINE/DEXBROMPHENIRAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-30-1/10',
        'options': [
          '30-30-1/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-1MG/5',
        'options': [
          '100-1MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CISATRACURIUM BESYLATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOCETAXEL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80 MG/4 ML',
        'options': [
          '80 MG/4 ML',
          '20MG/ML(1)',
          '80 MG/8 ML',
          '20 MG/2 ML',
          '160 MG/8ML',
          'FNL 20MG/2',
          '160MG/16ML',
          'FNL 80MG/8',
          '140 MG/7ML',
          '200MG/20ML',
          '10 MG/ML',
          '20 MG',
          '80 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RESP SYNCYTIAL VIR IMMUNE GLOB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN POLISTIREX',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG/5 ML',
        'options': [
          '30 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARGININE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CITALOPRAM HYDROBROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG',
          '10 MG',
          '10 MG/5 ML',
          '20 MG/10ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'RITONAVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '80 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLIMEPIRIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDINAVIR SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '100 MG',
          '200 MG',
          '333 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACAMPROSATE CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '333 MG',
        'options': [
          '333 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FORMOTEROL FUMARATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '12 MCG',
        'options': [
          '12 MCG',
          '20 MCG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRINOTECAN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/5ML',
        'options': [
          '100 MG/5ML',
          '40 MG/2 ML',
          '500MG/25ML',
          '300MG/15ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LANREOTIDE ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '120MG/0.5',
        'options': [
          '120MG/0.5',
          '90MG/0.3ML',
          '60MG/0.2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GEMCITABINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '200 MG',
          '2 G',
          '2 G/52.6ML',
          '200MG/5.26',
          '1 G/26.3ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALFUZOSIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CABERGOLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAUNORUBICIN CITRATE LIPOSOMAL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NELFINAVIR MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '625 MG',
          '50 MG/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MODAFINIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPHOTERICIN B CHOLESTERYL SUL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTHRAX VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '0.5ML/DOSE',
        'options': [
          '0.5ML/DOSE'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IVERMECTIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '3 MG',
        'options': [
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %',
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUTILIDE FUMARATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.1 MG/ML',
        'options': [
          '0.1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYTETRACYCLINE/LIDOCAINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50-20MG/ML',
        'options': [
          '50-20MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIDANOSINE/CALCIUM CARBONATE/MAGNESIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '150 MG',
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOLEUCOVORIN CALCIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOPIRAMATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '100 MG',
          '50 MG',
          '200 MG',
          '15 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMEPRAZOLE MAGNESIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METOPROLOL SUCCINATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-12.5 MG',
        'options': [
          '50-12.5 MG',
          '100-12.5MG',
          '25-12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ADAPALENE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INTERFERON BETA-1A',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '30MCG/.5ML',
        'options': [
          '30MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEROPENEM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PHENYLBUTYRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.94 G/G',
        'options': [
          '0.94 G/G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPROXEN SODIUM/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '220-120MG',
        'options': [
          '220-120MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOPOTECAN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 MG',
        'options': [
          '4 MG',
          '4 MG/4 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.25 MG',
        'options': [
          '0.25 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTIHEMOPHILIC FACTOR, HUMAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 (+/-)',
        'options': [
          '500 (+/-)',
          '1000 (+/-)',
          '250 (+/-)',
          '1501-2000',
          '675 (+/-)',
          '375 (+/-)',
          '1250 (+/-)',
          '220-400',
          '801-1500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTIHEMOPHILIC FACTOR VIII, HUMAN RECOMBINANT',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000 (+/-)',
        'options': [
          '1000 (+/-)',
          '500 (+/-)',
          '250 (+/-)',
          '2000 (+/-)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THALIDOMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '150 MG',
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIRTAZAPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '15 MG',
          '45 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIDOFOVIR',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '75 MG/ML',
        'options': [
          '75 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN LISPRO',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML',
        'options': [
          '100/ML',
          '200/ML (3)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETOPOSIDE PHOSPHATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LATANOPROST',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.005 %',
        'options': [
          '0.005 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IODIXANOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '320 MG/ML',
        'options': [
          '320 MG/ML',
          '270 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '320 MG/ML',
        'options': [
          '320 MG/ML',
          '270 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIZANIDINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '6 MG'
        ],
        'quantity': 15.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '8'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'NEVIRAPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '400 MG',
          '50 MG/5 ML',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FEXOFENADINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '180 MG',
        'options': [
          '180 MG',
          '60 MG',
          '30 MG',
          '30 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOREMIFENE CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENCICLOVIR',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TILUDRONATE DISODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COAGULATION FACTOR VIIA (RECOMBINANT)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG',
        'options': [
          '1 MG',
          '2 MG',
          '2400 MCG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSPHENYTOIN SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100MG PE/2',
        'options': [
          '100MG PE/2',
          '500 PE/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXCARBAZEPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '600 MG',
          '300 MG',
          '300 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOTERATE MEGLUMINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5MMOL/10ML',
        'options': [
          '5MMOL/10ML',
          '7.5MMOL/15',
          '10MMOL/20',
          '50MMOL/100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIFLUPREDNATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BRIMONIDINE TARTRATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.2 %',
        'options': [
          '0.2 %',
          '0.15 %',
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.33 %',
        'options': [
          '0.33 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/MAGNESIUM CARBONATE/DIHYDROXYALUMINUM AMINOACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '325 MG',
        'options': [
          '325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/MAGNESIUM HYDROXIDE/ALUMINUM HYDROXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '325 MG',
        'options': [
          '325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PORFIMER SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '75 MG',
        'options': [
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/CALCIUM CARBONATE/MAGNESIUM/ALUMINUM HYDROXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '325 MG',
        'options': [
          '325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/CALCIUM CARBONATE/MAGNESIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '325 MG',
        'options': [
          '325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BISMUTH SUBSALICYLATE/METRONIDAZOLE/TETRACYCLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250-500 MG',
        'options': [
          '250-500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PORACTANT ALFA',
    'types': [
      {
        'route': 'INHALATION',
        'default': '120 MG/1.5',
        'options': [
          '120 MG/1.5',
          '240 MG/3ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLANZAPINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '20 MG',
          '15 MG',
          '2.5 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZAFIRLUKAST',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAPAIN/UREA/CHLOROPHYLLIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '521700-10',
        'options': [
          '521700-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'REMIFENTANIL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LYMPHOCYTE IMMUNE GLOBULIN, RABBIT',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROMETHAZINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML',
          '50 MG/ML'
        ]
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '12.5 MG',
          '50 MG',
          '6.25MG/5ML'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'as needed'
              }
            ]
          }
        ]
      },
      {
        'route': 'RECTAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '12.5 MG',
          '50 MG'
        ]
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PHENYLEPHRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-30 MG/5',
        'options': [
          '30-30 MG/5',
          '30-5MG/5ML',
          '22.5-9MG/5',
          '30-25MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE TANNATE/CARBETAPENTANE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-30MG/5ML',
        'options': [
          '4-30MG/5ML',
          '5 MG-60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MELOXICAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5 MG',
        'options': [
          '7.5 MG',
          '15 MG',
          '7.5 MG/5ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'ROPINIROLE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG',
          '4 MG',
          '0.25 MG',
          '0.5 MG',
          '5 MG',
          '8 MG',
          '3 MG',
          '6 MG',
          '12 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALSARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '160 MG',
        'options': [
          '160 MG',
          '80 MG',
          '320 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRANDOLAPRIL/VERAPAMIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-240MG',
        'options': [
          '4-240MG',
          '2 MG-180MG',
          '2-240MG',
          '1-240MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BETAINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G/1.7 ML',
        'options': [
          '1 G/1.7 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYBURIDE,MICRONIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '3 MG',
        'options': [
          '3 MG',
          '6 MG',
          '1.5 MG',
          '4.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUTENAFINE HCL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DONEPEZIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '23 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPINEPHRINE HCL',
    'types': [
      {
        'route': 'NASAL',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SCOPOLAMINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '1.5MG/3DAY',
        'options': [
          '1.5MG/3DAY'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZILEUTON',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM OXYBATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG/ML',
        'options': [
          '500 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LETROZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOFLOXACIN/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250MG/50ML',
        'options': [
          '250MG/50ML',
          '750MG/.15L',
          '500MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOFLOXACIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '1.5 %'
        ]
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '750 MG',
          '250 MG',
          '500MG/20ML',
          '250MG/10ML'
        ],
        'quantity': 7.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE/CARBINOXAMINE MAL/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-2-30MG/5',
        'options': [
          '5-2-30MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATORVASTATIN CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '40 MG',
          '20 MG',
          '10 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/DIPYRIDAMOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25MG-200MG',
        'options': [
          '25MG-200MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERUMOXIDES',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '11.2 MG/ML',
        'options': [
          '11.2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RETEPLASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 UNIT',
        'options': [
          '20 UNIT',
          '10 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENALAPRIL MALEATE/FELODIPINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-5 MG',
        'options': [
          '5 MG-5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUMATRIPTAN',
    'types': [
      {
        'route': 'NASAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'YOHIMBINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5.4 MG',
        'options': [
          '5.4 MG',
          '5 MG',
          '5 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FACTOR IX HUMAN RECOMBINANT',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 UNIT',
        'options': [
          '250 UNIT',
          '2000 UNIT',
          '1000 UNIT',
          '500 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPHOTERICIN B LIPOSOME',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLATIRAMER ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLOPATADINE HCL',
    'types': [
      {
        'route': 'NASAL',
        'default': '0.6 %',
        'options': [
          '0.6 %'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.2 %',
          '0.7 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE PROBUTATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLLITROPIN BETA,RECOMB',
    'types': [
      {
        'route': 'INJECTION',
        'default': '150/0.5ML',
        'options': [
          '150/0.5ML',
          '75/0.5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '900/1.08ML',
        'options': [
          '900/1.08ML',
          '300/0.36ML',
          '600/0.72ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SERTACONAZOLE NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL/LEVONORGESTREL',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '45-15/24H',
        'options': [
          '45-15/24H'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARMUSTINE IN POLIFEPROSAN 20',
    'types': [
      {
        'route': 'IMPLANTATION',
        'default': '7.7-192.3',
        'options': [
          '7.7-192.3'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANAGRELIDE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN/PSEUDOEPHEDRINE/BROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-5-30-2',
        'options': [
          '50-5-30-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DELAVIRDINE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZOLMITRIPTAN',
    'types': [
      {
        'route': 'NASAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMIQUIMOD',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %',
          '3.75 %',
          '2.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMIFOSTINE CRYSTALLINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOPENTETATE DIMEGLUMINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7.5MMOL/15',
        'options': [
          '7.5MMOL/15',
          '469.01MG/1',
          '10MMOL/20',
          '2.5MMOL/5',
          '5MMOL/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADODIAMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5MMOL/10ML',
        'options': [
          '5MMOL/10ML',
          '7.5MMOL/15',
          '10MMOL/20',
          '25MMOL/50',
          '50MMOL/100',
          '2.5MMOL/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYALURONATE SODIUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM POLYSTYRENE SULFONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 G/60 ML',
        'options': [
          '15 G/60 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '50 G/200ML',
        'options': [
          '50 G/200ML',
          '30 G/120ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSCARNET SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '24 MG/ML',
        'options': [
          '24 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/SUNSCREEN (FERRIC OXIDE)',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLDOPATE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENALAPRILAT DIHYDRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.25 MG/ML',
        'options': [
          '1.25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NARATRIPTAN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLLITROPIN ALFA, RECOMB',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '900/1.5 ML',
        'options': [
          '900/1.5 ML',
          '75 UNIT',
          '300/0.5ML',
          '450/0.75ML',
          '1050 UNIT',
          '450 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TAZAROTENE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFURIC ACID/SULFONATED PHENOL',
    'types': [
      {
        'route': 'MUCOUS MEMBRANE',
        'default': '30%-50%',
        'options': [
          '30%-50%',
          '50-28%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESMOPRESSIN ACETATE (NON-REFRIGERATED)',
    'types': [
      {
        'route': 'NASAL',
        'default': '10/SPRAY',
        'options': [
          '10/SPRAY'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIPOTRIENE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.005 %',
        'options': [
          '0.005 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SELENIUM SULFIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2.5 %',
        'options': [
          '2.5 %',
          '2.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAZIDIME/ARGININE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAZIDIME',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G',
          '2 G',
          '6 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '2 G',
        'options': [
          '2 G',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SAMARIUM SM 153 LEXIDRONAM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '150MCI/3ML',
        'options': [
          '150MCI/3ML',
          '50 MCI/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG/5ML',
        'options': [
          '500 MG/5ML',
          '250 MG/5ML'
        ],
        'quantity': 14.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      },
      {
        'route': 'OTIC',
        'default': '6 %',
        'options': [
          '6 %'
        ]
      }
    ]
  },
  {
    'drug_name': 'DEXTROAMPHETAMINE SULF-SACCHARATE/AMPHETAMINE SULF-ASPARTATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '30 MG',
          '5 MG',
          '15 MG',
          '25 MG',
          '7.5 MG',
          '12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRAMIPEXOLE DI-HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG',
        'options': [
          '0.25 MG',
          '0.125 MG',
          '0.5 MG',
          '1 MG',
          '1.5 MG',
          '0.75 MG',
          '4.5 MG',
          '0.375 MG',
          '3 MG',
          '2.25 MG',
          '3.75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMFENAC SODIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.09%',
        'options': [
          '0.09%',
          '0.07 %',
          '0.075 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTETATE CALCIUM TRISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL/EPINEPHRINE BITARTRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.5-1:200K',
        'options': [
          '0.5-1:200K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/EPINEPHRINE BITARTRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 %-1:100K',
        'options': [
          '2 %-1:100K',
          '2%-1:50000'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRILOCAINE HCL/EPINEPHRINE BITARTRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4%-1:200K',
        'options': [
          '4%-1:200K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEMANTINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '28 MG',
          '14 MG',
          '2 MG/ML',
          '5 MG-10 MG',
          '21 MG',
          '7-14-21-28',
          '7 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARVEDILOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5 MG',
        'options': [
          '12.5 MG',
          '6.25 MG',
          '25 MG',
          '3.125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CHLORPHENIRAMINE MALEATE/SCOPOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-8-2.5MG',
        'options': [
          '20-8-2.5MG',
          '10-2-0.625'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHSCOPOLAMINE BROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERPHENAZINE/AMITRIPTYLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG-25 MG',
        'options': [
          '2 MG-25 MG',
          '2 MG-10 MG',
          '4 MG-25 MG',
          '4MG-10MG',
          '4 MG-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITAZOXANIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '100 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TAMSULOSIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.4 MG',
        'options': [
          '0.4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBIDOPA/LEVODOPA',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '4.63-20/ML',
        'options': [
          '4.63-20/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25MG-100MG',
        'options': [
          '25MG-100MG',
          '25MG-250MG',
          '10MG-100MG',
          '50MG-200MG',
          '23.75-95MG',
          '48.75-195',
          '36.25-145',
          '61.25-245'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DALFAMPRIDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEPHALEXIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG',
          '250 MG/5ML',
          '125 MG/5ML',
          '750 MG',
          '125 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '8'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'PERINDOPRIL ERBUMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '8 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LYSINE/VITAMIN B COMPLEX/FOLIC ACID/ZINC',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-1MG/15',
        'options': [
          '500-1MG/15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LAMIVUDINE/ZIDOVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-300MG',
        'options': [
          '150-300MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUETIAPINE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG',
          '200 MG',
          '300 MG',
          '50 MG',
          '400 MG',
          '150 MG',
          '50-200-300'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CORTICORELIN OVINE TRIFLUTATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MCG',
        'options': [
          '100 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/PHENYLPROPANOLAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '12 MG-75MG',
        'options': [
          '12 MG-75MG',
          '8 MG-75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EUROPEAN MISTLETOE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '.5-5-50MG',
        'options': [
          '.5-5-50MG',
          '25 MG/ML',
          '5 MG/ML',
          '.05-.5-5MG',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ST. JOHN\'S WORT',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIOXYBENZONE/PADIMATE O/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '3%-5%-4%',
        'options': [
          '3%-5%-4%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLEXANOX',
    'types': [
      {
        'route': 'MUCOUS MEMBRANE',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOEXIPRIL HCL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-25MG',
        'options': [
          '15-25MG',
          '7.5-12.5MG',
          '15-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE/IBUPROFEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-200 MG',
        'options': [
          '7.5-200 MG',
          '5MG-200MG',
          '10MG-200MG',
          '2.5-200MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LYMPHOCYTE IMMUNE GLOBULIN,ANTITHYMOCYTE (EQUINE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CHLORIDE/POT CHLORIDE/MAG SUL/SOD PHOS,DB/POT PHOS,MB',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '800-40/100',
        'options': [
          '800-40/100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L',
          '40 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN 5 % DEXTROSE IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 MEQ/L',
        'options': [
          '40 MEQ/L',
          '20 MEQ/L',
          '30 MEQ/L',
          '10 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN DEXTROSE 5 % AND 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L',
          '40 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN DEXTROSE 5 %-0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L',
          '40 MEQ/L',
          '30 MEQ/L',
          '10 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN DEXTROSE 5% AND 0.3 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L',
          '30 MEQ/L',
          '40 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN DEXTROSE 5 %-0.2 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L',
          '30 MEQ/L',
          '40 MEQ/L',
          '10 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN LACTATED RINGERS AND 5 % DEXTROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L',
          '40 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-48 SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-75 SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-B SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-B SOLUTION/DEXTROSE 50 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-A SOLUTION/DEXTROSE 50 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-MB SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-T SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-M SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-R SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-H SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-P SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-S SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-56 SOLUTION/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELECTROLYTE-148 IN 5 % DEXTROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3.5%/CALCIUM/ELECTROLYTES-TPN SOLN/DEXTROSE 25 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3.5 %/ELECTROLYTE-TPN SOLN/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5.5 %/ELECTROLYTE-TPN SOLN/DEXTROSE 50% IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5.5 %',
        'options': [
          '5.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/CALCIUM/ELECTROLYTE-TPN SOLN/DEXTROSE 25 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/ELECTROLYTE-TPN SOLN/DEXTROSE 25 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/CALCIUM/ELECTROLYTE-TPN SOLN/DEXTROSE 20%',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/CALCIUM/ELECTROLYTE-TPN SOLN/D25W',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/ELECTROLYTES-TPN SOLN/DEXTROSE 10 %-WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE/DEXTROSE-WATER',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1.5 %',
        'options': [
          '1.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHYL ALCOHOL/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %-5 %',
        'options': [
          '10 %-5 %',
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROSE-WATER/SODIUM CITRATE/CITRIC ACID',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '2.45G-2.2G',
        'options': [
          '2.45G-2.2G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXAMETHASONE PHOSPHATE/LIDOCAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 MG/ML',
        'options': [
          '4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/PRAMOXINE HCL',
    'types': [
      {
        'route': 'RECTAL',
        'default': '1 %-1 %',
        'options': [
          '1 %-1 %',
          '2.5-1%(4G)',
          '2.5 %-1 %',
          '1%-1%(4G)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1 %-1 %',
        'options': [
          '1 %-1 %',
          '2.5 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/PRAMOXINE HCL/CHLOROXYLENOL',
    'types': [
      {
        'route': 'OTIC',
        'default': '10-10-1/ML',
        'options': [
          '10-10-1/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1-1-0.1%',
        'options': [
          '1-1-0.1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON/LYSINE/VITAMIN B COMPLEX/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '800-1MG/15',
        'options': [
          '800-1MG/15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIAZEPAM (IN SOYBEAN OIL)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARTICAINE HCL/EPINEPHRINE BITARTRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4%-1:100K',
        'options': [
          '4%-1:100K',
          '4%-1:200K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM FLUORIDE/XYLITOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5(1.1)MG',
        'options': [
          '0.5(1.1)MG',
          '0.25(0.55)',
          '1MG(2.2MG)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMMONIUM LACTATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '12 %',
        'options': [
          '12 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRBESARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INTERFERON ALFACON-1',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '15MCG/.5ML',
        'options': [
          '15MCG/.5ML',
          '9MCG/0.3ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYBENZONE/PADIMATE O/OCTINOXATE/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4-8-4-4%',
        'options': [
          '4-8-4-4%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIAGABINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '12 MG',
          '16 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIDODRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETRAHYDROZOLINE HCL',
    'types': [
      {
        'route': 'NASAL',
        'default': '0.05 %',
        'options': [
          '0.05 %',
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE/PRILOCAINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2.5 %-2.5%',
        'options': [
          '2.5 %-2.5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MILTEFOSINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLCAPONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BIT/CHLORPHENIRAMINE/PSEUDOEPHEDRINE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-2-15/5',
        'options': [
          '2.5-2-15/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SELEGILINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '1.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATOVAQUONE/PROGUANIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '250-100 MG',
        'options': [
          '250-100 MG',
          '62.5-25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GALANTAMINE HBR',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG',
        'options': [
          '8 MG',
          '4 MG',
          '12 MG',
          '16 MG',
          '24 MG',
          '4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOLASETRON MESYLATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '12.5/0.625',
        'options': [
          '12.5/0.625',
          '100 MG/5ML',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXRAZOXANE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/POTASSIUM IODIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-325MG/5',
        'options': [
          '15-325MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXALIPLATIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100MG/20ML',
        'options': [
          '100MG/20ML',
          '50 MG/10ML',
          '100 MG',
          '50 MG',
          '200MG/40ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEBIVOLOL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '2.5 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENDAMUSTINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG',
          '180 MG/2ML',
          '45MG/0.5ML',
          '25 MG',
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOCABASTINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FEXOFENADINE HCL/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '60MG-120MG',
        'options': [
          '60MG-120MG',
          '180-240MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RITUXIMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ECONAZOLE NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOMEPIZOLE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/ML',
        'options': [
          '1 G/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MONTELUKAST SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '4 MG',
          '5 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'at night'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CANDESARTAN CILEXETIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '16 MG',
        'options': [
          '16 MG',
          '32 MG',
          '8 MG',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CICLOPIROX',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '8 %',
        'options': [
          '8 %',
          '0.77 %',
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OPRELVEKIN',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RALOXIFENE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPROSARTAN MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DACLIZUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SIBUTRAMINE HCL M-HYDRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '15 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/POTASSIUM GUAIACOLSULFONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-300MG/5',
        'options': [
          '15-300MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN IN 0.225 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '300 MG/5ML',
        'options': [
          '300 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPINASTINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LANSOPRAZOLE/AMOXICILLIN TRIHYDRATE/CLARITHROMYCIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-500-500',
        'options': [
          '30-500-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALSARTAN/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '80-12.5MG',
        'options': [
          '80-12.5MG',
          '160-12.5MG',
          '160-25MG',
          '320MG-25MG',
          '320-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYANOCOBALAMIN/FOLIC ACID/PYRIDOXINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-2.5-25MG',
        'options': [
          '1-2.5-25MG',
          '2-2.5-25MG',
          '0.5-2.2-25',
          '1-2.2-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRUSSIAN BLUE (INSOLUBLE)',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 GRAM',
        'options': [
          '0.5 GRAM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PHOSPHATE/BENZOYL PEROXIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %-5 %',
        'options': [
          '1 %-5 %',
          '1.2(1)%-5%',
          '1.2%-3.75%',
          '1.2%-2.5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLUCAGON HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBANDRONATE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 MG/3 ML',
        'options': [
          '3 MG/3 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTIHEMOPHILIC FACTOR, HUMAN/VON WILLEBRAND FACTOR,HUMAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 (100)',
        'options': [
          '250 (100)',
          '250-500',
          '500-1200',
          '500-1000',
          '250-600',
          '1000-2400',
          '1K-2K UNIT',
          '1500 (600)',
          '1000 (400)',
          '500 (200)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENOLDOPAM MESYLATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CILOSTAZOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UNOPROSTONE ISOPROPYL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.15 %',
        'options': [
          '0.15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TROSPIUM CHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOPIDOGREL BISULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS/PROTEIN HYDROLYSATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 G-60/30',
        'options': [
          '15 G-60/30'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMEDASTINE DIFUMARATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN',
    'types': [
      {
        'route': 'INHALATION',
        'default': '28 MG',
        'options': [
          '28 MG',
          '300 MG/4ML'
        ]
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'drop(s)'
              },
              {
                'typeName': 'modifier',
                'value': 'to affected area'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '4'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '7'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM PHOSPHATE,MONOBASIC',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SILVER NITRATE/POTASSIUM NITRATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '75 %-25 %',
        'options': [
          '75 %-25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM FLUORIDE/POTASSIUM NITRATE',
    'types': [
      {
        'route': 'DENTAL',
        'default': '1.1%-5%',
        'options': [
          '1.1%-5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERRIC AMMONIUM CITRATE/LYSINE/VITAMIN B COMPLEX/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-1MG/5ML',
        'options': [
          '50-1MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERRIC AMMONIUM CITRATE/CYANOCOBALAMIN/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-.8MG/ML',
        'options': [
          '15-.8MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'REPAGLINIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOXILAN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '350 MG/ML',
        'options': [
          '350 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON,CARBONYL',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOTEPREDNOL ETABONATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLTERODINE TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '4 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 3.5 %/ELECTROLYTE-TPN SOLN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SILDENAFIL CITRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/12.5',
        'options': [
          '10 MG/12.5'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '20 MG',
          '25 MG',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/CALCIUM/ELECTROLYTE-TPN SOLN/DEXTROSE 15 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/CALCIUM/ELECTROLYTE-TPN SOLN/DEXTROSE 20 %',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZINC SULFATE HEPTAHYDRATE/CUSO4 P-HYD/MANGANESE/CHROMIUM/SEL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5-1-500/ML',
        'options': [
          '5-1-500/ML',
          '20-1000'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZINC CHLORIDE/CUPRIC CHLORIDE/MANGANESE/CHROMIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.8-.2-.16',
        'options': [
          '0.8-.2-.16'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARICALCITOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MCG/ML',
        'options': [
          '5 MCG/ML',
          '2 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '5 MCG/ML',
        'options': [
          '5 MCG/ML',
          '2 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MCG',
        'options': [
          '1 MCG',
          '4MCG',
          '2 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BRINZOLAMIDE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZINC SULFATE/CUPRIC SULFATE/MANGANESE SULF/CHROMIC CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5-1-0.5-10',
        'options': [
          '5-1-0.5-10',
          '1.5-0.1-25',
          '1-0.1-25-1',
          '0.5-0.1-30',
          '1-0.4-0.1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DORZOLAMIDE HCL/TIMOLOL MALEATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '22.3-6.8/1',
        'options': [
          '22.3-6.8/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 2.75 %/CALCIUM/ELECTROLYTE-TPN SOLN/D5W',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.75%',
        'options': [
          '2.75%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEPIRUDIN,RECOMBINANT',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 2.75 %/CALCIUM/ELECTROLYTE-TPN SOLN/D10W',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.75%',
        'options': [
          '2.75%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/CALCIUM/ELECTROLYTE-TPN SOLN/D5W',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 %/CALCIUM/ELECTROLYTE-TPN SOLN/DEXTROSE 10%',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/POT GUAIACO/DEXTROMETHORPHAN/PSEUDOEPHEDRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-30-25/5',
        'options': [
          '10-30-25/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE/DEXTROMETHORPHAN HBR/PHENYLEPH',
    'types': [
      {
        'route': 'ORAL',
        'default': '75-10-5/5',
        'options': [
          '75-10-5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '65 MG-1 MG',
        'options': [
          '65 MG-1 MG',
          '60 MG-1 MG',
          '66-1MG',
          '17MG-1MG',
          '27 MG-1 MG',
          '29 MG-1 MG',
          '35 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/IRON FUM/DOCUSATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-50-1MG',
        'options': [
          '90-50-1MG',
          '40-25-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/FERROUS FUMARATE/FOLIC AC/SEL',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/COLISTIN SULFATE/HYDROCORT AC/THONZON BROM',
    'types': [
      {
        'route': 'OTIC',
        'default': '3.3-3-10/1',
        'options': [
          '3.3-3-10/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIROFIBAN HCL MONOHYDRATE IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '12.5MG/250',
        'options': [
          '12.5MG/250',
          '5 MG/100ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAPECITABINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIROFIBAN HCL MONOHYDRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.75 MG/15',
        'options': [
          '3.75 MG/15',
          '250 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BASILIXIMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN HCL/HYDROCORTISONE',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.2 %-1 %',
        'options': [
          '0.2 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPTIFIBATIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '0.75 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESOGESTREL-ETHINYL ESTRADIOL/ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '21-5',
        'options': [
          '21-5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIVASTIGMINE TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.5 MG',
        'options': [
          '1.5 MG',
          '6 MG',
          '3 MG',
          '4.5 MG',
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIZATRIPTAN BENZOATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEFERIPRONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFDINIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '250 MG/5ML',
          '125 MG/5ML'
        ],
        'quantity': 20.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'every',
            'instructions': [
              {
                'typeName': 'int',
                'value': '12'
              },
              {
                'typeName': 'tf',
                'value': 'hour(s)'
              }
            ]
          },
          {
            'blockType': 'duration',
            'blockName': 'for',
            'instructions': [
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'SACROSIDASE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8500/ML',
        'options': [
          '8500/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM CITRATE DIHYDRATE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '46.7 %',
        'options': [
          '46.7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PALIVIZUMAB',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RISEDRONATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '35 MG',
        'options': [
          '35 MG',
          '150 MG',
          '5 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BALSALAZIDE DISODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '750 MG',
        'options': [
          '750 MG',
          '1.1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIGLITOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MYCOPHENOLATE MOFETIL HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSINOPRIL SODIUM/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-12.5MG',
        'options': [
          '10-12.5MG',
          '20-12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVONORGESTREL-ETHINYL ESTRADIOL/PREGNANCY TEST KIT',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '0.25-.05MG',
        'options': [
          '0.25-.05MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEFLUNOMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLIXIMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EFAVIRENZ',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '50 MG',
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ORLISTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '120 MG',
        'options': [
          '120 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRASTUZUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '440 MG',
        'options': [
          '440 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/IRON,CARBONYL/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG',
          '50-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VENOM-WASP',
    'types': [
      {
        'route': 'INJECTION',
        'default': '120 MCG',
        'options': [
          '120 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON,CARBONYL/ASCORBIC ACID/CYANOCOBALAMIN/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-250-1',
        'options': [
          '100-250-1',
          '100-320-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THROMBIN/FIBRINOGEN/APROTININ/CALCIUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 ML',
        'options': [
          '2 ML',
          '1 ML',
          '5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/IRON PS CPLX/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG-1 MG',
        'options': [
          '60 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIFAPENTINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SEVELAMER HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '800 MG',
        'options': [
          '800 MG',
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELMISARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '80 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RABEPRAZOLE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THYROTROPIN ALFA',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '1.1 MG',
        'options': [
          '1.1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABACAVIR SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEROPENEM IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '500MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALRUBICIN',
    'types': [
      {
        'route': 'INTRAVESICAL',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OCTINOXATE/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FACTOR IX COMPLEX, PROTHROMBIN CPLX CONC(PCC) NO.4, 3-FACTOR',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 (+/-)',
        'options': [
          '500 (+/-)',
          '1500 (+/-)',
          '1000 (+/-)',
          '1200 (+/-)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENTACAPONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRBESARTAN/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-12.5MG',
        'options': [
          '150-12.5MG',
          '300-12.5MG',
          '300MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CELECOXIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG',
          '400 MG',
          '50 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'OCTREOTIDE ACETATE, MICROSPHERES',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '30 MG',
        'options': [
          '30 MG',
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMEPRAZOLE/CLARITHROMYCIN/AMOXICILLIN TRIHYDRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20(20)-500',
        'options': [
          '20(20)-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ONDANSETRON',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESIRUDIN',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALITRETINOIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DENILEUKIN DIFTITOX',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '150 MCG/ML',
        'options': [
          '150 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLUCAGON,HUMAN RECOMBINANT',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 MG/ML',
        'options': [
          '1 MG/ML',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIFLORASONE DIACETATE/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PALMITATE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG/5 ML',
        'options': [
          '75 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 2.75 %/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.75%',
        'options': [
          '2.75%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/DEXTROSE 15 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 4.25 % IN DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.25 %',
        'options': [
          '4.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVALBUTEROL HCL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '0.63MG/3ML',
        'options': [
          '0.63MG/3ML',
          '1.25MG/3ML',
          '0.31MG/3ML',
          '1.25MG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/DIPHENHYDRAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-25MG/5',
        'options': [
          '7.5-25MG/5',
          '5MG-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM FERRIC GLUCONATE COMPLEX IN SUCROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '62.5MG/5ML',
        'options': [
          '62.5MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN LISPRO PROTAMINE AND INSULIN LISPRO',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '75-25/ML',
        'options': [
          '75-25/ML',
          '50-50/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS,CONJ.,SYNTHETIC A',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.625 MG',
        'options': [
          '0.625 MG',
          '1.25 MG',
          '0.45MG',
          '0.9 MG',
          '0.3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUTICASONE PROPIONATE/SALMETEROL XINAFOATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '250-50 MCG',
        'options': [
          '250-50 MCG',
          '100-50 MCG',
          '500-50 MCG',
          '45-21MCG',
          '230-21MCG',
          '115-21MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'inhale',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'puff(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'COLLOIDAL BISMUTH SUBCITRATE/METRONIDAZOLE/TETRACYCLINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '125-125 MG',
        'options': [
          '125-125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/METHYLSCOPOLAMINE NITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '120-2.5 MG',
        'options': [
          '120-2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/METHSCOPOLAMINE NITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8MG-2.5MG',
        'options': [
          '8MG-2.5MG',
          '4-8-2.5MG',
          '4-1.25MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN/IRON CARBONYL-IRON SULFATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG-1 MG',
        'options': [
          '60 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROFECOXIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '12.5 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROSIGLITAZONE MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '2 MG',
          '8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE/METHYLENE BLUE/SALICYLATE/SODIUM PHOS/HYOSCY',
    'types': [
      {
        'route': 'ORAL',
        'default': '120-0.12MG',
        'options': [
          '120-0.12MG',
          '81.6-.12MG',
          '100-10.8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLOPURINOL SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HETASTARCH/ELECTROLYTE SOLUTION,LACTATED',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 %',
        'options': [
          '6 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CETRORELIX ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '0.25 MG',
        'options': [
          '0.25 MG',
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIOGLITAZONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '15 MG',
          '45 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE/PYRILAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-30MG/5ML',
        'options': [
          '5-30MG/5ML',
          '25 MG-30MG',
          '9-12MG/5ML',
          '10MG-16MG',
          '25 MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZALEPLON',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TEMOZOLOMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '100 MG',
          '5 MG',
          '180 MG',
          '140 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENOFIBRATE,MICRONIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '130 MG',
        'options': [
          '130 MG',
          '134 MG',
          '200 MG',
          '67 MG',
          '43 MG',
          '30 MG',
          '160 MG',
          '90 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID/OXYQUINOLINE SULFATE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '0.9-0.025%',
        'options': [
          '0.9-0.025%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZANAMIVIR',
    'types': [
      {
        'route': 'INHALATION',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIFAXIMIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '550 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALFACTANT',
    'types': [
      {
        'route': 'INHALATION',
        'default': '35MG/ML',
        'options': [
          '35MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICLOFENAC EPOLAMINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '1.3 %',
        'options': [
          '1.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS GLUCONATE/VITAMIN B COMPLEX/LIVER EXTRACT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUINUPRISTIN/DALFOPRISTIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SIROLIMUS',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.5 MG',
          '2 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXERCALCIFEROL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4MCG/2ML',
        'options': [
          '4MCG/2ML',
          '2 MCG/ML',
          '2MCG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '0.5 MCG',
        'options': [
          '0.5 MCG',
          '2.5 MCG',
          '1 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OSELTAMIVIR PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '6 MG/ML',
          '45 MG',
          '30 MG',
          '12 MG/ML'
        ],
        'quantity': 10.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '5'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CARBIDOPA',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PROGESTERONE, MICRONIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'VAGINAL',
        'default': '8 %',
        'options': [
          '8 %',
          '100 MG',
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM IODIDE-131',
    'types': [
      {
        'route': 'ORAL',
        'default': '500MCI/0.5',
        'options': [
          '500MCI/0.5',
          '1000MCI/ML',
          '250MCI/.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOXIFLOXACIN HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETONOGESTREL',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '68 MG',
        'options': [
          '68 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITART/BROMPHENIRAMINE MAL/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.7-2-30/5',
        'options': [
          '1.7-2-30/5',
          '2.5-3-30/5',
          '2.5-3-15/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN ASPART',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML',
        'options': [
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL/NORGESTIMATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-1-0.09MG',
        'options': [
          '1-1-0.09MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GATIFLOXACIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.3 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EXEMESTANE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BEXAROTENE',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOFETILIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MCG',
        'options': [
          '250 MCG',
          '125 MCG',
          '500 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVETIRACETAM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG/5ML',
        'options': [
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '750 MG',
          '250 MG',
          '1000 MG',
          '100 MG/ML',
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALOSETRON HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/HYDROCODONE BITARTRATE/BROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-5-2/5',
        'options': [
          '200-5-2/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXMEDETOMIDINE HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000MCG/10',
        'options': [
          '1000MCG/10',
          '400MCG/4ML',
          '200MCG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TACROLIMUS',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '5 MG',
          '0.5 MG',
          '4 MG',
          '0.75 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.03 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNEUMOCOCCAL 7-VALENT CONJUGATE VACCINE (DIPHTHERIA CRM)',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '16 MCG/0.5',
        'options': [
          '16 MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LODOXAMIDE TROMETHAMINE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEVIMELINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEUPROLIDE ACETATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '3.75 MG',
        'options': [
          '3.75 MG',
          '11.25 MG',
          '30 MG',
          '7.5 MG',
          '15 MG',
          '22.5 MG',
          '45 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '1 MG/0.2ML',
        'options': [
          '1 MG/0.2ML',
          '22.5 MG',
          '45 MG',
          '7.5 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAFARELIN ACETATE',
    'types': [
      {
        'route': 'NASAL',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HISTRELIN ACETATE',
    'types': [
      {
        'route': 'IMPLANTATION',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GOSERELIN ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10.8MG',
        'options': [
          '10.8MG',
          '3.6 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZONISAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VERTEPORFIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LINEZOLID',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '600MG/300',
        'options': [
          '600MG/300',
          '200MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '100 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GEMTUZUMAB OZOGAMICIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-7.5/5',
        'options': [
          '100-7.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MILNACIPRAN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '100 MG',
          '12.5 MG',
          '12.5-25-50'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BEE VENOM PROTEIN (HONEY BEE)',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1300 MCG',
        'options': [
          '1300 MCG',
          '550MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-VENOM-WHITE-FACED HORNET PROTEIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '550MCG',
        'options': [
          '550MCG',
          '1300 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-VENOM-YELLOW JACKET PROTEIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '550MCG',
        'options': [
          '550MCG',
          '1300 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-VENOM-YELLOW HORNET PROTEIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '550MCG',
        'options': [
          '550MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-VENOM-WASP PROTEIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '550MCG',
        'options': [
          '550MCG',
          '1300 MCG',
          '12 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIXED VESPID VEN PROTEIN',
    'types': [
      {
        'route': 'INJECTION',
        'default': '3900 MCG',
        'options': [
          '3900 MCG',
          '1650MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEMIROLAST POTASSIUM',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CANDESARTAN CILEXETIL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '32-12.5MG',
        'options': [
          '32-12.5MG',
          '16-12.5MG',
          '32MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPATITIS B VIRUS VACCINE, RECOMBINANT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2.5MCG/0.5',
        'options': [
          '2.5MCG/0.5',
          '20 MCG/ML',
          '5MCG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GATIFLOXACIN/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/0.1L',
        'options': [
          '200MG/0.1L',
          '400MG/0.2L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FACTOR IX',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000 (+/-)',
        'options': [
          '1000 (+/-)',
          '1500 (+/-)',
          '812 (+/-)',
          '500 (+/-)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FAMOTIDINE/CALCIUM CARBONATE/MAGNESIUM HYDROXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-800-165',
        'options': [
          '10-800-165'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGINTERFERON ALFA-2B',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '120MCG/0.5',
        'options': [
          '120MCG/0.5',
          '80MCG/0.5',
          '150MCG/0.5',
          '50 MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EFLORNITHINE HCL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '13.9 %',
        'options': [
          '13.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COLESEVELAM HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '625 MG',
        'options': [
          '625 MG',
          '3.75 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOBENATE DIMEGLUMINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '529MG/ML',
        'options': [
          '529MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOPINAVIR/RITONAVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-50MG',
        'options': [
          '200MG-50MG',
          '100MG-25MG',
          '400-100/5',
          '133.3-33.3'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESOMEPRAZOLE MAGNESIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG',
          '10 MG',
          '2.5 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/UREA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %-10 %',
        'options': [
          '10 %-10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARSENIC TRIOXIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/10ML',
        'options': [
          '10 MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERFLUTREN PROTEIN-A MICROSPHR',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.22MG/ML',
        'options': [
          '0.22MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARGATROBAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON SUCROSE COMPLEX',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/5ML',
        'options': [
          '100 MG/5ML',
          '50MG/2.5ML',
          '200MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABACAVIR SULFATE/LAMIVUDINE/ZIDOVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-300MG',
        'options': [
          '150-300MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERMETHRIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %',
          '1 %'
        ],
        'quantity': 2.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'apply',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': null
              },
              {
                'typeName': 'unit',
                'value': null
              },
              {
                'typeName': 'constant',
                'value': 'to'
              },
              {
                'typeName': 'loc',
                'value': 'scalp'
              },
              {
                'typeName': 'constant',
                'value': 'then'
              },
              {
                'typeName': 'act',
                'value': 'rinse off'
              },
              {
                'typeName': 'constant',
                'value': 'in'
              },
              {
                'typeName': 'int',
                'value': '10'
              },
              {
                'typeName': 'tf',
                'value': 'minute(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'once',
            'instructions': null
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'CHLOROXYLENOL/PRAMOXINE HCL',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.1%-1%',
        'options': [
          '0.1%-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZOLEDRONIC ACID',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 MG/5 ML',
        'options': [
          '4 MG/5 ML',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOBUTROL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7.5/7.5 ML',
        'options': [
          '7.5/7.5 ML',
          '1 MMOL/ML',
          '15 MMOL/15',
          '2 MMOL/2ML',
          '10 MMOL/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NATEGLINIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '120 MG',
        'options': [
          '120 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHORIOGONADOTROPIN ALFA',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '250MCG/0.5',
        'options': [
          '250MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BIVALIRUDIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELMISARTAN/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '80-12.5MG',
        'options': [
          '80-12.5MG',
          '40-12.5 MG',
          '80 MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PHOSPHATE,M-BASIC M-HYD/SODIUM PHOSPHATE,DIBASIC',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.5 G',
        'options': [
          '1.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALMOTRIPTAN MALATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5 MG',
        'options': [
          '12.5 MG',
          '6.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CASPOFUNGIN ACETATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG',
          '70 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINOLEVULINIC ACID HCL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '20 %',
        'options': [
          '20 %',
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESLORATADINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG/5ML',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZIPRASIDONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '80 MG',
          '40 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUDESONIDE/FORMOTEROL FUMARATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '160-4.5MCG',
        'options': [
          '160-4.5MCG',
          '80-4.5 MCG'
        ],
        'quantity': 1.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'inhale',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '2'
              },
              {
                'typeName': 'unit',
                'value': 'puff(s)'
              }
            ]
          },
          {
            'blockType': 'frequency',
            'blockName': 'time(s) per',
            'instructions': [
              {
                'typeName': 'int',
                'value': '2'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'LEUPROLIDE ACETATE/LIDOCAINE HCL',
    'types': [
      {
        'route': 'IMPLANTATION',
        'default': '120MCG/24H',
        'options': [
          '120MCG/24H'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRAVOPROST',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.004 %',
        'options': [
          '0.004 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BIMATOPROST',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.03 %',
        'options': [
          '0.03 %',
          '0.01 %'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '0.03 %',
        'options': [
          '0.03 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PANTOPRAZOLE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 MG',
        'options': [
          '40 MG'
        ]
      },
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'INSULIN GLARGINE,HUMAN RECOMBINANT ANALOG',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML (3)',
        'options': [
          '100/ML (3)',
          '100/ML',
          '300/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETHINYL ESTRADIOL/DROSPIRENONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.02-3(24)',
        'options': [
          '0.02-3(24)',
          '0.03MG-3MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALGANCICLOVIR HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '450 MG',
        'options': [
          '450 MG',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/PSEUDOEPHEDRINE HCL/CHLORPHENIR/BELLAD ALK',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-40-8MG',
        'options': [
          '25-40-8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARDIOPLEGIC SOLUTION NO.1',
    'types': [
      {
        'route': 'PERFUSION',
        'default': 'K+=16MEQ/L',
        'options': [
          'K+=16MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/CALCIUM/VITAMIN E/FOLIC ACID/MULTIVITAMIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '65 MG-1 MG',
        'options': [
          '65 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMATINIB MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RASBURICASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.5 MG',
        'options': [
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALEMTUZUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '30 MG/ML',
        'options': [
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/HYDROCORTISONE ACETATE',
    'types': [
      {
        'route': 'RECTAL',
        'default': '3 %-0.5 %',
        'options': [
          '3 %-0.5 %',
          '3%-1%(7 G)'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '3 %-0.5 %',
        'options': [
          '3 %-0.5 %',
          '2 %-2 %',
          '3 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/NIACINAMIDE/ZINC',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5-750-25',
        'options': [
          '0.5-750-25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CITRIC ACID/GLUCONOLACTONE/MAGNESIUM CARBONATE',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '6.602G/100',
        'options': [
          '6.602G/100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/AVOBENZONE/OCTINOXATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN W-O VIT A/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-1MG',
        'options': [
          '40-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN W-O VIT A/FE CARBONYL-FE FUMARATE/FOLIC AC',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG-1 MG',
        'options': [
          '30 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'QUINAPRIL HCL/HYDROCHLOROTHIAZIDE/MAGNESIUM CARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-12.5 MG',
        'options': [
          '20-12.5 MG',
          '10-12.5MG',
          '20 MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFADROXIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '500 MG/5ML',
          '250 MG/5ML',
          '1 G',
          '125 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYETHYLENE GLYCOL 3350',
    'types': [
      {
        'route': 'ORAL',
        'default': '17G/DOSE',
        'options': [
          '17G/DOSE',
          '17G',
          '8.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NESIRITIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.5 MG',
        'options': [
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/PRAMOXINE HCL/CHLOROXYLENOL/WATER',
    'types': [
      {
        'route': 'OTIC',
        'default': '10-10-1/ML',
        'options': [
          '10-10-1/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIPOTRIENE/BETAMETHASONE DIPROPIONATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.005-.064',
        'options': [
          '0.005-.064'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CETIRIZINE HCL/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-120MG',
        'options': [
          '5 MG-120MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERFLUTREN LIPID MICROSPHERES',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.1MG/ML',
        'options': [
          '1.1MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRAMADOL HCL/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '37.5-325MG',
        'options': [
          '37.5-325MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DARBEPOETIN ALFA IN ALBUMN SOL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 MCG/ML',
        'options': [
          '40 MCG/ML',
          '60MCG/ML',
          '150MCG/0.3',
          '60MCG/0.3',
          '150MCG/.75',
          '25 MCG/ML',
          '100MCG/0.5',
          '100 MCG/ML',
          '200MCG/0.4',
          '300 MCG/ML',
          '300MCG/0.6',
          '200 MCG/ML',
          '500 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DARBEPOETIN ALFA IN POLYSORBATE 80',
    'types': [
      {
        'route': 'INJECTION',
        'default': '40 MCG/0.4',
        'options': [
          '40 MCG/0.4',
          '150MCG/.75',
          '60MCG/0.3',
          '150MCG/0.3',
          '100MCG/0.5',
          '25MCG/0.42',
          '25 MCG/ML',
          '40 MCG/ML',
          '60MCG/ML',
          '100 MCG/ML',
          '200MCG/0.4',
          '300 MCG/ML',
          '200 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '500 MCG/ML',
        'options': [
          '500 MCG/ML',
          '300MCG/0.6',
          '200MCG/0.4',
          '40 MCG/0.4',
          '60MCG/0.3',
          '150MCG/0.3',
          '25MCG/0.42',
          '100MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYBENZONE/AVOBENZONE/OCTINOXATE/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LUTROPIN ALFA',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '75 UNIT',
        'options': [
          '75 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TENOFOVIR DISOPROXIL FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '250 MG',
          '40MG/SCOOP',
          '150 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON,CARBONYL/DOCUSATE SODIUM/B12-IF/FOLIC ACID/MULTIVIT-MIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-50-1MG',
        'options': [
          '150-50-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE HCL/PSEUDOEPHEDRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-5-15/5',
        'options': [
          '200-5-15/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOCETIRIZINE DIHYDROCHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DROTRECOGIN ALFA (ACTIVATED)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG',
        'options': [
          '20 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFDITOREN PIVOXIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXMETHYLPHENIDATE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '15 MG',
          '30 MG',
          '20 MG',
          '2.5 MG',
          '40 MG',
          '25 MG',
          '35 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FROVATRIPTAN SUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BOSENTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG',
          '62.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOVERSETAMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7.5MMOL/15',
        'options': [
          '7.5MMOL/15',
          '15MMOL/30',
          '10MMOL/20',
          '2.5MMOL/5',
          '25MMOL/50',
          '5MMOL/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHENHYDRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '25 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE/PPSEUDOEPHEDRINE/DEXTROMETHORPHAN TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '4.5-75-25',
        'options': [
          '4.5-75-25',
          '2.25-21.75',
          '4-30-30/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NIACIN/LOVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '500MG-20MG',
        'options': [
          '500MG-20MG',
          '750MG-20MG',
          '1000-40 MG',
          '1000-20MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELETRIPTAN HBR',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELITHROMYCIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIPTORELIN PAMOATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '11.25 MG',
        'options': [
          '11.25 MG',
          '3.75 MG',
          '3.75MG/2ML',
          '22.5MG/2ML',
          '11.25/2ML',
          '22.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIMECROLIMUS',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TEGASEROD HYDROGEN MALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG',
        'options': [
          '6 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CARBINOXAMINE MALEATE/SCOPOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-8-2.5MG',
        'options': [
          '90-8-2.5MG',
          '15-2-1.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CHLORPHENIRAMINE MALEATE/BELLAD ALK',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-8-0.24',
        'options': [
          '90-8-0.24'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VALDECOXIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FONDAPARINUX SODIUM',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '5MG/0.4ML',
        'options': [
          '5MG/0.4ML',
          '7.5MG/0.6',
          '2.5 MG/0.5',
          '10MG/0.8ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORELGESTROMIN/ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '150-35/24H',
        'options': [
          '150-35/24H'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERTAPENEM SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITISINONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '2 MG',
          '20 MG',
          '4 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGFILGRASTIM',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '6MG/0.6ML',
        'options': [
          '6MG/0.6ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINOLONE ACETONIDE/TRETINOIN/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.01-.05-4',
        'options': [
          '0.01-.05-4'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INTERFERON BETA-1A/ALBUMIN HUMAN',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '30 MCG',
        'options': [
          '30 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '8.8-22(6)',
        'options': [
          '8.8-22(6)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZIPRASIDONE MESYLATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': 'FNL 20MG/1',
        'options': [
          'FNL 20MG/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOCUSATE SODIUM/FOLIC ACID/MULTIVITAMIN WITH IRON/MINERALS',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.8 MG',
        'options': [
          '0.8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN ASPART PROTAMINE HUMAN/INSULIN ASPART',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '70-30/ML',
        'options': [
          '70-30/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPRENORPHINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '20 MCG/HR',
        'options': [
          '20 MCG/HR',
          '10 MCG/HR',
          '5 MCG/HR',
          '15 MCG/HR',
          '7.5 MCG/HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLMESARTAN MEDOXOMIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FULVESTRANT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 MG/5ML',
        'options': [
          '250 MG/5ML',
          '125MG/2.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRETINOIN/MEQUINOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.01 %-2 %',
        'options': [
          '0.01 %-2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TREPROSTINIL SODIUM',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '2.5 MG/ML',
          '1 MG/ML',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/CARBETAPENTANE CIT',
    'types': [
      {
        'route': 'ORAL',
        'default': '75-20MG/5',
        'options': [
          '75-20MG/5',
          '100-20MG/5',
          '900MG-60MG',
          '150-7.5/5',
          '1200-60MG',
          '100-10MG/5',
          '600MG-60MG',
          '200 MG-8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE HCL/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30MG-250MG',
        'options': [
          '30MG-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VORICONAZOLE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '50 MG',
          '200 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETONOGESTREL/ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '.12-.015MG',
        'options': [
          '.12-.015MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITH CALCIUM/IRON BG/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG',
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PHENYLEPHRINE TANNATE/PYRILAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-5-30/5',
        'options': [
          '30-5-30/5',
          '60-10-40MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE TANNATE/DEXCHLORPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-3MG/5ML',
        'options': [
          '50-3MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN TANNATE/P-EPHED TAN/DEXCHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-75-2.5',
        'options': [
          '25-75-2.5',
          '27.5-50-3',
          '30-45-3.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARTEMETHER/LUMEFANTRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20MG-120MG',
        'options': [
          '20MG-120MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESCITALOPRAM OXALATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '5 MG',
          '5 MG/5 ML'
        ],
        'quantity': 30.0,
        'directions': [
          {
            'blockType': 'action',
            'blockName': 'take',
            'instructions': [
              {
                'typeName': 'quantity',
                'value': '1'
              },
              {
                'typeName': 'unit',
                'value': 'pill(s)'
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
                'value': '30'
              },
              {
                'typeName': 'tf',
                'value': 'day(s)'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'drug_name': 'TIOTROPIUM BROMIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '18 MCG',
        'options': [
          '18 MCG',
          '2.5 MCG',
          '1.25 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGINTERFERON ALFA-2A',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '180MCG/ML',
        'options': [
          '180MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12 MG',
        'options': [
          '12 MG',
          '12MG/5ML',
          '8 MG/5 ML',
          '6MG/5ML',
          '4 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMACETAXINE MEPESUCCINATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '3.5 MG',
        'options': [
          '3.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ADEFOVIR DIPIVOXIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PICOSULFATE/MAGNESIUM OXIDE/CITRIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-12 G',
        'options': [
          '10 MG-12 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTETATE ZINC TRISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPLERENONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIHYDROCODEINE BITART/CHLORPHENIRAMINE MAL/PSEUDOEPHEDRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-2-15/5',
        'options': [
          '7.5-2-15/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PSEUDOEPHEDRINE HCL/DIHYDROCODEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-15-7.5',
        'options': [
          '100-15-7.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROSIGLITAZONE MALEATE/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG-500MG',
        'options': [
          '2 MG-500MG',
          '4-500MG',
          '4-1000MG',
          '2-1000MG',
          '1MG-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KERATOLYTIC COMB NO.1/OXYBENZONE/AVOBENZ/OCTOCRYL/H-QUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %-SPF 15',
        'options': [
          '4 %-SPF 15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/DIHYDROCODEINE BITARTRATE/CHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-3-2/5',
        'options': [
          '7.5-3-2/5',
          '5-7.25-2/5',
          '4-6.5-2/5',
          '20-3-5MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLIPIZIDE/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-500MG',
        'options': [
          '5 MG-500MG',
          '2.5-500 MG',
          '2.5-250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREP YTTRIUM-90/IBRITUMOMAB TIUXETAN/ALBUMIN HUMAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.2MG/2ML',
        'options': [
          '3.2MG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREP INDIUM-111/IBRITUMOMAB TIUXETAN/ALBUMIN HUMAN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.2MG/2ML',
        'options': [
          '3.2MG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EZETIMIBE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THROMBIN (BOVINE)',
    'types': [
      {
        'route': 'NASAL',
        'default': '5000 UNIT',
        'options': [
          '5000 UNIT'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TOPICAL',
        'default': '20000 UNIT',
        'options': [
          '20000 UNIT',
          '5000 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DUTASTERIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREP OF TC-99M/ALBUMIN HUMAN,AGGREGATED',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5 MG',
        'options': [
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR THE PREPARATION OF TC-99M/TETROFOSMIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.38 MG',
        'options': [
          '1.38 MG',
          '0.23 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARIPIPRAZOLE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '300 MG',
        'options': [
          '300 MG',
          '400 MG',
          '9.75MG/1.3'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '30 MG',
          '20 MG',
          '15 MG',
          '2 MG',
          '1 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREPARATION OF TC-99M/MEDRONATE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG',
        'options': [
          '20 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREP TC-99M/MEBROFENIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '45 MG',
        'options': [
          '45 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREP TC-99M/EXAMETAZIME',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.5 MG',
        'options': [
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERIPARATIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '20 MCG',
        'options': [
          '20 MCG',
          '20MCG/DOSE'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATOMOXETINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '60 MG',
          '25 MG',
          '18 MG',
          '80 MG',
          '10 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PSEUDOEPHEDRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-30(75)',
        'options': [
          '20-30(75)',
          '7.5-30MG/5',
          '25-75MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPROSARTAN MESYLATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-25MG',
        'options': [
          '600-25MG',
          '600-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOTREXATE SODIUM/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML',
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPRENORPHINE HCL/NALOXONE HCL',
    'types': [
      {
        'route': 'BUCCAL',
        'default': '6.3MG-1MG',
        'options': [
          '6.3MG-1MG',
          '4.2-0.7 MG',
          '2.1-0.3 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBLINGUAL',
        'default': '8 MG-2 MG',
        'options': [
          '8 MG-2 MG',
          '2 MG-0.5MG',
          '4MG-1MG',
          '12 MG-3 MG',
          '8.6-2.1 MG',
          '2.9-0.71MG',
          '11.4-2.9MG',
          '1.4-0.36MG',
          '5.7-1.4 MG',
          '0.7-0.18MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TADALAFIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AGALSIDASE BETA',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '35 MG',
        'options': [
          '35 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALEFACEPT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '15 MG',
        'options': [
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDIUM IN-111 OXYQUINOLINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1MCI/ML(1)',
        'options': [
          '1MCI/ML(1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROSUVASTATIN CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '40 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PENTETATE INDIUM DISODIUM IN-111',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '1.5MCI/1.5',
        'options': [
          '1.5MCI/1.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN/PHENYLEPHRINE/DEXCHLORPHENIRAM',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-5-1MG/5',
        'options': [
          '15-5-1MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VARDENAFIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFAZOLIN SODIUM/DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/100 ML',
          '2 G/50 ML',
          '500MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENFUVIRTIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '90 MG',
        'options': [
          '90 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYBUTYNIN',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '3.9MG/24HR',
        'options': [
          '3.9MG/24HR',
          '28MG/0.92G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'APREPITANT',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '125 MG',
          '40 MG',
          '125MG-80MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGVISOMANT',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '30 MG',
          '15 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACIDS 5 %/CALCIUM/ELECTROLYTES/DEXTROSE 35 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIGLUSTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESMOLOL HCL IN SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 G/100 ML',
        'options': [
          '2 G/100 ML',
          '2.5G/250ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE/DIPHENHYDRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-25MG',
        'options': [
          '10 MG-25MG',
          '7.5-25MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GANIRELIX ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '250MCG/0.5',
        'options': [
          '250MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GEFITINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.9 MG',
        'options': [
          '0.9 MG',
          '0.45MG',
          '1.8 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'VAGINAL',
        'default': '0.1MG/24HR',
        'options': [
          '0.1MG/24HR',
          '0.05MG/24H'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MYCOPHENOLATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '180 MG',
        'options': [
          '180 MG',
          '360 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BORTEZOMIB',
    'types': [
      {
        'route': 'INJECTION',
        'default': '3.5 MG',
        'options': [
          '3.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MINOCYCLINE HCL MICROSPHERES',
    'types': [
      {
        'route': 'DENTAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOBUPIVACAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '7.5 MG/ML',
        'options': [
          '7.5 MG/ML',
          '5 MG/ML',
          '2.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN W-O CALCIUM/IRON,CARBONYL/DOCUSATE/FOLIC AC',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-50-1MG',
        'options': [
          '29-50-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL/EPINEPHRINE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.25-.0005',
        'options': [
          '0.25-.0005',
          '0.5-1:200K',
          '0.75-.0005'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '5 MG/ML',
        'options': [
          '5 MG/ML',
          '2.5 MG/ML',
          '7.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL/DEXTROSE-WATER/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.75 %',
        'options': [
          '0.75 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYL AMINOLEVULINATE HCL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '168 MG/G',
        'options': [
          '168 MG/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MORPHINE SULFATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.5 MG/ML',
        'options': [
          '0.5 MG/ML',
          '1 MG/ML',
          '25 MG/ML',
          '10 MG/ML',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/50ML',
        'options': [
          '50 MG/50ML',
          '30 MG/30ML',
          '150MG/30ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN 0.45 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA VIRUS TRI-SPLIT 2003',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '22.5/.25ML',
        'options': [
          '22.5/.25ML',
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENTANYL CITRATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MCG/ML',
        'options': [
          '50 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100MCG/2ML',
        'options': [
          '100MCG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOXIFLOXACIN HCL/SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/.25L',
        'options': [
          '400MG/.25L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATAZANAVIR SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '300 MG',
          '200 MG',
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMALIZUMAB',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE HCL/LIDOCAINE HCL',
    'types': [
      {
        'route': 'INJECTION',
        'default': '0.375-1%',
        'options': [
          '0.375-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN (CALCIUM CARB & MAGNESIUM BUFFERS)/PRAVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '81 MG-80MG',
        'options': [
          '81 MG-80MG',
          '81 MG-20MG',
          '325MG-80MG',
          '81 MG-40MG',
          '325MG-20MG',
          '325MG-40MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMTRICITABINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLMESARTAN MEDOXOMIL/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-12.5 MG',
        'options': [
          '40-12.5 MG',
          '40 MG-25MG',
          '20-12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE MICROSPHERES',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBIDOPA/LEVODOPA/ENTACAPONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-50 MG',
        'options': [
          '12.5-50 MG',
          '37.5-150MG',
          '31.25-125',
          '25-100-200',
          '18.75-75MG',
          '50-200-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN W-O VIT A/IRON,CARBONYL/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN HCL/DEXAMETHASONE',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.3 %-0.1%',
        'options': [
          '0.3 %-0.1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RISPERIDONE MICROSPHERES',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '37.5MG/2ML',
        'options': [
          '37.5MG/2ML',
          '25 MG/2 ML',
          '50 MG/2 ML',
          '12.5MG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/AVOBENZONE/SULFUR',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %-5 %',
        'options': [
          '10 %-5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PALONOSETRON HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.25MG/5ML',
        'options': [
          '0.25MG/5ML',
          '0.075/1.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERUMOXSIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '175 MCG/ML',
        'options': [
          '175 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/DIPHENHYDRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-2-12.5',
        'options': [
          '7.5-2-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM CARB/MAG OXIDE/VITAMIN D3/VIT B12/FA/VIT B6/BORON',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-300-1',
        'options': [
          '500-300-1',
          '500-1.1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/PHENYLEPHRINE HCL/DEXBROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-20-6MG',
        'options': [
          '30-20-6MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/BROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-2.5-4',
        'options': [
          '7.5-2.5-4',
          '7.5-2.5-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE TANNATE/PYRILAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-5-30/5',
        'options': [
          '100-5-30/5',
          '200-25-60'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PHENYLEPHRINE TANNATE/DIPHENHYDRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-10-25MG',
        'options': [
          '30-10-25MG',
          '30-15-25/5',
          '30-7.5-25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACID 3.31 % NO.1/D9.8W/FAT EMULSIONS/ELECTROLYTE NO.10',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.31%-9.8%',
        'options': [
          '3.31%-9.8%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBINOXAMINE MALEATE/CARBINOXAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2MG-6MG/5',
        'options': [
          '2MG-6MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUDEOXYGLUCOSE F-18',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20-500/ML',
        'options': [
          '20-500/ML',
          '20-300/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM OXIDE/VIT E ACS/HYDROXOCOBALAMIN/FOLIC ACID/VIT B6',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-2.05',
        'options': [
          '100-2.05'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM CARB/VIT D3/HYDROXOCOBALAMIN/FOLIC ACID/PYRIDOXINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '400-1.6MG',
        'options': [
          '400-1.6MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARGLUMIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/DOCUSATE SODIUM/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '106-50-1MG',
        'options': [
          '106-50-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSAMPRENAVIR CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '700 MG',
        'options': [
          '700 MG',
          '50 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAPTOMYCIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EFALIZUMAB',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '125MG/1.25',
        'options': [
          '125MG/1.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/DEXCHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-4-2MG/5',
        'options': [
          '5-4-2MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE BUTYRATE/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/POTASSIUM GUAIACOLSULFONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-300MG',
        'options': [
          '600-300MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN HBR/PHENYLEPHRINE/BR-PHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-5-5-2/5',
        'options': [
          '50-5-5-2/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAROXETINE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '10 MG',
          '40 MG',
          '20 MG',
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLANZAPINE/FLUOXETINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '6MG-25MG',
        'options': [
          '6MG-25MG',
          '6MG-50MG',
          '12MG-50MG',
          '12MG-25MG',
          '3 MG-25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/ACETAMINOPHEN/DEXCHLORPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '45-650-2MG',
        'options': [
          '45-650-2MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BRIMONIDINE TARTRATE/TIMOLOL MALEATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.2%-0.5%',
        'options': [
          '0.2%-0.5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/SUNSCREENS (OXYBENZONE/OCTINOXATE)',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4%(5-7.5%)',
        'options': [
          '4%(5-7.5%)',
          '4 %-SPF 15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE/UREA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '6.5%-10%',
        'options': [
          '6.5%-10%',
          '8.5%-10%',
          '4.5%-10%',
          '5.75%-10%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEMETREXED DISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.3 WITH DEXTROSE 4.25 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.4 WITH DEXTROSE 1.5 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.6 WITH DEXTROSE 1.5 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '2.5MEQ(CA)',
        'options': [
          '2.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.7 WITH DEXTROSE 2.5 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '2.5MEQ(CA)',
        'options': [
          '2.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.8 WITH DEXTROSE 4.25 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '2.5MEQ(CA)',
        'options': [
          '2.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CETUXIMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/0.1L',
        'options': [
          '200MG/0.1L',
          '100MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLODIPINE BESYLATE/ATORVASTATIN CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-20MG',
        'options': [
          '10 MG-20MG',
          '5 MG-10 MG',
          '10 MG-40MG',
          '5 MG-20 MG',
          '5 MG-40 MG',
          '10 MG-10MG',
          '10 MG-80MG',
          '2.5MG-40MG',
          '5 MG-80 MG',
          '2.5MG-20MG',
          '2.5MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFUROXIME SODIUM/DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '750MG/50ML',
        'options': [
          '750MG/50ML',
          '1.5G/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BEVACIZUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG/ML',
        'options': [
          '25 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESOMEPRAZOLE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 MG',
        'options': [
          '40 MG',
          '20 MG'
        ]
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.13 WITH DEXTROSE 2.5 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CINACALCET HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '60 MG',
          '90 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLAMIDE/ACETAMINOPHEN/PHENYLTOLOXAMINE/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250-325-20',
        'options': [
          '250-325-20'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GEMIFLOXACIN MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '320 MG',
        'options': [
          '320 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MALEATE/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG-60 MG',
        'options': [
          '4 MG-60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMINO ACID 2.36 % NO.1/D6.8W/FAT EMULSIONS/ELECTROLYTES NO.9',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.36%-6.8%',
        'options': [
          '2.36%-6.8%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/PHENYLEPHRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-25MG',
        'options': [
          '200MG-25MG',
          '100-5 MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNV/IRON,CARB/OMEGA-3 FATTY ACIDS/FOLIC ACID/FATTY ACID NO.1',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-300-1MG',
        'options': [
          '27-300-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN W-O CALCIUM/IRON BG/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ILOPROST TROMETHAMINE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '10 MCG/ML',
        'options': [
          '10 MCG/ML',
          '20 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEFIBROTIDE SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80 MG/ML',
        'options': [
          '80 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZ VIR VAC TV P-SURF2004',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '15MCG/.5ML',
        'options': [
          '15MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/ALOE POLYSACCHARIDE/IODOQUINOL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %-1 %-1%',
        'options': [
          '2 %-1 %-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/PRAMOXINE HCL/ALOE POLYSACCHARIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %-1 %-1%',
        'options': [
          '2 %-1 %-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN TANNATE/PHENYLEPHRINE TANNATE/CHLORPHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-20-2MG',
        'options': [
          '30-20-2MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/VITAMIN B COMP AND C/SELENIUM/MIN AA CHEL/ZINC',
    'types': [
      {
        'route': 'ORAL',
        'default': '3MG-15MG',
        'options': [
          '3MG-15MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHEMO THERAPY DILUENT,E-LYTES AND DEXTROSE, BUFFERED NO.1/PF',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '73-19MG/10',
        'options': [
          '73-19MG/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZACITIDINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN DETEMIR',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML (3)',
        'options': [
          '100/ML (3)',
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/MULTIVITAMIN WITH MINERALS/MIN AA CHEL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA VIRUS TRI-SPLIT 2004',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '22.5/.25ML',
        'options': [
          '22.5/.25ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PREGABALIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '50 MG',
          '100 MG',
          '150 MG',
          '200 MG',
          '25 MG',
          '300 MG',
          '225 MG',
          '20 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAZIDIME SODIUM IN ISO-OSMOTIC DEXTROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAZIDIME IN DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 G/50 ML',
        'options': [
          '2 G/50 ML',
          '1 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EZETIMIBE/SIMVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-20MG',
        'options': [
          '10 MG-20MG',
          '10 MG-40MG',
          '10 MG-80MG',
          '10 MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMTRICITABINE/TENOFOVIR DISOPROXIL FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-300 MG',
        'options': [
          '200-300 MG',
          '100-150 MG',
          '167-250 MG',
          '133-200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-TRICHOPHYTON MENTAGROPHYTES',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '1:200',
        'options': [
          '1:200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DULOXETINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '30 MG',
          '20 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABACAVIR SULFATE/LAMIVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-300MG',
        'options': [
          '600-300MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CANDIDA ALBICANS SKIN TEST',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': 'FDA STNDRD',
        'options': [
          'FDA STNDRD'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN TANNATE/PHENYLEPHRINE TANNATE/BR-PHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-25-10/5',
        'options': [
          '30-25-10/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SOLIFENACIN SUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE/ACETAMINOPHEN/PHENYLTOLOXAMINE/CHLORPHENIRAMIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-325-8MG',
        'options': [
          '40-325-8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNV/FERROUS FUMARATE/OMEGA-3/FOLIC ACID/FATTY ACID 1',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-300-1MG',
        'options': [
          '30-300-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-CANDIDA ALBICANS',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '1:10',
        'options': [
          '1:10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALLERGENIC EXTRACT-ASPERGILLUS FUMIGATUS',
    'types': [
      {
        'route': 'INTRADERMAL',
        'default': '1:10',
        'options': [
          '1:10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBINOXAMINE/PSEUDOEPHEDRINE/DEXTROMETHORPHAN TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '3.2-45.2/5',
        'options': [
          '3.2-45.2/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE TANNATE/PHENYLEPHRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12-20 MG/5',
        'options': [
          '12-20 MG/5',
          '5-5MG/5ML',
          '4-5MG/5ML',
          '6MG-10MG/5',
          '12-10 MG/5',
          '1.58-2.2MG',
          '2.2-1.58MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM GUAIACOLSULFONATE/CARBETAPENTANE CIT/PHENYLEPHRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-20-10',
        'options': [
          '100-20-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/PYRIL/CHLORPHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-2.5-6-2',
        'options': [
          '5-2.5-6-2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMIN INFUSION, ADULT NO.2 WITHOUT VITAMIN K',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200-600/10',
        'options': [
          '200-600/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MVI, PEDI NO.1 WITH VIT K',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400-200/5',
        'options': [
          '400-200/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MVI, ADULT NO.1 WITH VIT K',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200-150/10',
        'options': [
          '200-150/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN A/ERGOCALCIFEROL (VIT D2)/EUCALYPTOL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5000-500/2',
        'options': [
          '5000-500/2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORDIAZEPOXIDE HCL/METHSCOPOLAMINE NITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-2.5MG',
        'options': [
          '5 MG-2.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERLOTINIB HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '25 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NATALIZUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '300MG/15ML',
        'options': [
          '300MG/15ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LANTHANUM CARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1000 MG',
          '750 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/OXYCODONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400MG-5MG',
        'options': [
          '400MG-5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MORPHINE SULFATE LIPOSOMAL/PF',
    'types': [
      {
        'route': 'EPIDURAL',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '15MG/1.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESZOPICLONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '3 MG',
        'options': [
          '3 MG',
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PALIFERMIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6.25 MG',
        'options': [
          '6.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMEGA-3 ACID ETHYL ESTERS',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G',
        'options': [
          '1 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGAPTANIB SODIUM',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '0.3 MG/90',
        'options': [
          '0.3 MG/90'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLOFARABINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/20ML',
        'options': [
          '20 MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DARIFENACIN HYDROBROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5 MG',
        'options': [
          '7.5 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN TANNATE/PSEUDOEPHEDRINE TANNATE/BR-PHENIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '60-90-8/5',
        'options': [
          '60-90-8/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZICONOTIDE ACETATE',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '100 MCG/ML',
        'options': [
          '100 MCG/ML',
          '25 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE TANNATE/BROMPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30MG-6MG/5',
        'options': [
          '30MG-6MG/5',
          '90MG-8MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYALURONIDASE,OVINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '200/ML',
        'options': [
          '200/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN/LOTEPREDNOL ETABONATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3%-0.5%',
        'options': [
          '0.3%-0.5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PACLITAXEL PROTEIN-BOUND',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/VITAMIN B COMP AND C/COPPER/ZINC OXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-1.5-25MG',
        'options': [
          '5-1.5-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CICLESONIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '160 MCG',
        'options': [
          '160 MCG',
          '80 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '50 MCG',
        'options': [
          '50 MCG',
          '37 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MICAFUNGIN SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRAMLINTIDE ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '1500/1.5ML',
        'options': [
          '1500/1.5ML',
          '600MCG/ML',
          '2700/2.7ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVALBUTEROL TARTRATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '45 MCG',
        'options': [
          '45 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESLORATADINE/PSEUDOEPHEDRINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-120 MG',
        'options': [
          '2.5-120 MG',
          '5MG-240 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENTECAVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG',
          '1 MG',
          '0.05 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINOLONE ACETONIDE/SHOWER CAP',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.01 %',
        'options': [
          '0.01 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALENDRONATE SODIUM/CHOLECALCIFEROL (VITAMIN D3)',
    'types': [
      {
        'route': 'ORAL',
        'default': '70 MG-2800',
        'options': [
          '70 MG-2800',
          '70 MG-5600'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #1/IRON,CARBONYL/DOCUSAT/FOLIC AC',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-50-1MG',
        'options': [
          '90-50-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN/CIPROFLOXACIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRETINOIN MICROSPHERES',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.04 %',
          '0.08 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EXENATIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10MCG/0.04',
        'options': [
          '10MCG/0.04',
          '5MCG/0.02'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIPERACILLIN AND TAZOBACTAM IN DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4.5G/100ML',
        'options': [
          '4.5G/100ML',
          '2.25G/50ML',
          '3.375G/50'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RASAGILINE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GALSULFASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/5 ML',
        'options': [
          '5 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFUR HEXAFLUORIDE MICROSPHERES',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EVEROLIMUS',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '0.75 MG',
          '2.5 MG',
          '0.25 MG',
          '10 MG',
          '0.5 MG',
          '3 MG',
          '7.5 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIGECYCLINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIPRANAVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SECRETIN ACETATE (HUMAN)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '16 MCG',
        'options': [
          '16 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE/TETRACAINE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '70 MG-70MG',
        'options': [
          '70 MG-70MG',
          '7 %-7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISOSORBIDE DINITRATE/HYDRALAZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-37.5MG',
        'options': [
          '20-37.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BCG LIVE',
    'types': [
      {
        'route': 'INTRAVESICAL',
        'default': '81 MG',
        'options': [
          '81 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 05-06 VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTRIAXONE SODIUM IN ISO-OSMOTIC DEXTROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 G/50 ML',
        'options': [
          '2 G/50 ML',
          '1 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 05-06 VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '22.5/.25ML',
        'options': [
          '22.5/.25ML',
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RAMELTEON',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG',
        'options': [
          '8 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/HYDROCODONE BITARTRATE/TRIPROLIDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-2.5MG/5',
        'options': [
          '30-2.5MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN GLULISINE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML',
        'options': [
          '100/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RISEDRONATE SODIUM/CALCIUM CARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '35MG-500MG',
        'options': [
          '35MG-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN E ACID SUCCINATE/FOLIC ACID/VIT BCOMP,C/ZINC/SEL',
    'types': [
      {
        'route': 'ORAL',
        'default': '35 U-2.5MG',
        'options': [
          '35 U-2.5MG',
          '35 U-5.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEPAFENAC',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %',
        'options': [
          '0.3 %',
          '0.1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIOGLITAZONE HCL/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '15MG-500MG',
        'options': [
          '15MG-500MG',
          '15MG-850MG',
          '30-1000 MG',
          '15-1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECASERMIN',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADODIAMIDE IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10MMOL/20',
        'options': [
          '10MMOL/20',
          '7.5MMOL/15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN/PHENYLEPHRINE/ACETAMINOPHN/DIPHENHYDRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-18-575',
        'options': [
          '30-18-575'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRYPAN BLUE',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '0.06 %',
        'options': [
          '0.06 %',
          '0.15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRALIDOXIME CHLORIDE/ATROPINE SULFATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '600-2.1 MG',
        'options': [
          '600-2.1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN W-O CALCIUM/IRON PS CPLX/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPERIDINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '50 MG/ML',
        'options': [
          '50 MG/ML',
          '100 MG/ML',
          '25 MG/ML',
          '75 MG/ML',
          '75MG/1.5ML',
          '25MG/0.5ML',
          '100 MG/2ML',
          '500MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/PRAMOXINE/CHLOROXYLENOL/BENZALKONIUM',
    'types': [
      {
        'route': 'OTIC',
        'default': '10-10-1/ML',
        'options': [
          '10-10-1/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMMONIUM LACTATE/UREA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '12%-20%',
        'options': [
          '12%-20%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERRIC AMMONIUM CITRATE/CYANOCOBALAMIN/LIVER EXTRACT',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '67-50-10/1',
        'options': [
          '67-50-10/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE TANNATE/HYDROCODONE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '45-10MG/5',
        'options': [
          '45-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS CMB W-O CA NO.1/IRON BG/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '28 MG-1 MG',
        'options': [
          '28 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BISACODYL/SODIUM CHLOR/SODIUM BICARB/POTASSIUM CHL/PEG 3350',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-210 G',
        'options': [
          '5 MG-210 G',
          '5MGX2-210G',
          '5MGX4-210G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MORPHINE SULFATE/DEXTROSE 5%-WATER/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250MG/250',
        'options': [
          '250MG/250',
          '100MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GENTAMICIN SULFATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/2 ML',
        'options': [
          '20 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100MG/10ML',
        'options': [
          '100MG/10ML',
          '80 MG/8 ML',
          '60 MG/6 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NELARABINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250MG/50ML',
        'options': [
          '250MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN A/VITAMIN E/AVOBENZONE/OCTINOXATE/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %-SPF 15',
        'options': [
          '4 %-SPF 15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPARIN SODIUM,PORCINE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1000/ML',
        'options': [
          '1000/ML',
          '5000/0.5ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '10 UNIT/ML',
        'options': [
          '10 UNIT/ML',
          '100/ML (1)',
          '100/ML',
          '250/2.5 ML',
          '1000/10 ML',
          '300/3 ML',
          '200/2 ML',
          '500/5 ML',
          '10000/5ML',
          '25K/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEFERASIROX',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG',
          '90 MG',
          '500 MG',
          '250 MG',
          '360 MG',
          '180 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUOCINOLONE ACETONIDE OIL',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.01 %',
        'options': [
          '0.01 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS NO.4/IRON CBN&GLUCONAT/FOLIC ACID/DOSS/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-50 MG',
        'options': [
          '27-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE TANNATE/CHLORPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5MG-4MG/5',
        'options': [
          '5MG-4MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE/ALOE VERA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5.25 %',
        'options': [
          '5.25 %',
          '2.75%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE/HYDROCODONE TANNATE/DIPHENHYDRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-3.5-25',
        'options': [
          '7.5-3.5-25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/BACITRACIN ZINC/POLYMYXIN B',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '3.5-400-5K',
        'options': [
          '3.5-400-5K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROSIGLITAZONE MALEATE/GLIMEPIRIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4MG-4MG',
        'options': [
          '4MG-4MG',
          '4MG-1MG',
          '8MG-4MG',
          '4MG-2MG',
          '8 MG-2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRETINOIN/EMOLLIENT COMBINATION NO. 9/SKIN CLN1',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %',
        'options': [
          '0.1 %',
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IVABRADINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5 MG',
        'options': [
          '7.5 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE MICROSPHERES',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5.5 %',
        'options': [
          '5.5 %',
          '7 %',
          '7%-5.5%',
          '8.5 %',
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SORAFENIB TOSYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABATACEPT/MALTOSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LENALIDOMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG',
          '25 MG',
          '15 MG',
          '20 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CONIVAPTAN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/4 ML',
        'options': [
          '20 MG/4 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE/METHYLENE BLUE/BENZOIC ACID/SALICYLATE/HYOSCY',
    'types': [
      {
        'route': 'ORAL',
        'default': '81.6-0.12',
        'options': [
          '81.6-0.12'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/LIDOCAINE HCL/ALOE VERA',
    'types': [
      {
        'route': 'RECTAL',
        'default': '2.5-3%(7G)',
        'options': [
          '2.5-3%(7G)',
          '2 %-2 %',
          '0.55%-2.8%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPARIN SODIUM,PORCINE IN 0.9 % SODIUM CHLORIDE/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000/500ML',
        'options': [
          '1000/500ML',
          '2K/1000ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUNITINIB MALATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5 MG',
        'options': [
          '12.5 MG',
          '50 MG',
          '25 MG',
          '37.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RANOLAZINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LUBIPROSTONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MCG',
        'options': [
          '8 MCG',
          '24MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POSACONAZOLE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '300MG/16.7',
        'options': [
          '300MG/16.7'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN E ACETATE/AVOBENZONE/OCTINOXATE/HYDROQUINONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %-SPF 20',
        'options': [
          '4 %-SPF 20'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANIDULAFUNGIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RHO(D) IMMUNE GLOBULIN/MALTOSE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '15000/13ML',
        'options': [
          '15000/13ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SELEGILINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '9 MG/24 HR',
        'options': [
          '9 MG/24 HR',
          '12MG/24HR',
          '6 MG/24 HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMEPRAZOLE/SODIUM BICARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20MG-1.1G',
        'options': [
          '20MG-1.1G',
          '40MG-1.1G',
          '40-1680MG',
          '20-1680MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOFOSVESET TRISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5MMOL/10',
        'options': [
          '2.5MMOL/10',
          '3.75/15 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROTIGOTINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '3 MG/24 HR',
        'options': [
          '3 MG/24 HR',
          '4 MG/24 HR',
          '8 MG/24 HR',
          '2 MG/24 HR',
          '6 MG/24 HR',
          '1 MG/24 HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYALURONIDASE, HUMAN RECOMB.',
    'types': [
      {
        'route': 'INJECTION',
        'default': '150 UNIT/1',
        'options': [
          '150 UNIT/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM SALICYLATE/ACETAMINOPHEN/PHENYLTOLOXAMINE/CAFFEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-500-20',
        'options': [
          '500-500-20'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE CIT/PHENYLEPHRINE HCL/CARBINOXAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-2-1MG/ML',
        'options': [
          '4-2-1MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOMEFOLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PROPIONATE/INOSITOL/AMINO ACIDS COMB MO.14/UREA',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '0.50-0.83%',
        'options': [
          '0.50-0.83%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EYE LUBRICANT COMBINATION NO.1',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '2-0.9-1.8%',
        'options': [
          '2-0.9-1.8%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS,CONJ.,SYNTHETIC B',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.9 MG',
        'options': [
          '0.9 MG',
          '0.625 MG',
          '0.3 MG',
          '1.25 MG',
          '0.45MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLPHENIDATE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '20 MG/9 HR',
        'options': [
          '20 MG/9 HR',
          '30MG/9HR',
          '10MG/9HR',
          '15MG/9HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPATITIS B IMMUNE GLOBULIN/MALTOSE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '>312/ML(5)',
        'options': [
          '>312/ML(5)',
          '>312/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR PREP TC 99M/SODIUM THIOSULFATE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '2 MG',
        'options': [
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALGLUCOSIDASE ALFA',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '20 MG/ML',
          '5 MG/ML',
          '15 MG/ML',
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/5ML',
        'options': [
          '100 MG/5ML',
          '20 MG/ML',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL IN DEXTROSE 5% IN WATER/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 MG/ML',
        'options': [
          '4 MG/ML',
          '8 MG/ML',
          '2 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL IN DEXTROSE 7.5 % IN WATER/PF',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ONDANSETRON HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '4 MG/2 ML',
        'options': [
          '4 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON FUMARATE-IRON POLYSACCH CPLEX/FOLIC ACID/MULTIVIT NO.18',
    'types': [
      {
        'route': 'ORAL',
        'default': '106 MG-1MG',
        'options': [
          '106 MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS CMB W-O CA NO.2',
    'types': [
      {
        'route': 'ORAL',
        'default': '106 MG-1MG',
        'options': [
          '106 MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECASERMIN RINFABATE/PF',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '36MG/0.6ML',
        'options': [
          '36MG/0.6ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DECITABINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VARENICLINE TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.5 (11)-1',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOXITIN SODIUM/DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENTANYL HCL',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '40 MCG',
        'options': [
          '40 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALTREXONE MICROSPHERES',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '380MG',
        'options': [
          '380MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVONORGESTREL/ETHINYL ESTRADIOL AND ETHINYL ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-30(84)',
        'options': [
          '150-30(84)',
          '100-20(84)',
          '0.15MG(84)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GADOXETATE DISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5MMOL/10',
        'options': [
          '2.5MMOL/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN LYSINE/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/2 ML',
        'options': [
          '20 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MINOCYCLINE HCL/EMOLLIENT COMBINATION NO. 16/SK CL4/TP.COM3',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS NO.4/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '106.5-1MG',
        'options': [
          '106.5-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITHOUT CALC NO5/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '106.5-1MG',
        'options': [
          '106.5-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATROPINE SULFATE/PF',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DARUNAVIR ETHANOLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '300 MG',
          '400 MG',
          '150 MG',
          '75 MG',
          '100 MG/ML',
          '800 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #7/FE ASP GLY/DOCUSATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-50-1MG',
        'options': [
          '30-50-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DASATINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '70 MG',
        'options': [
          '70 MG',
          '20 MG',
          '50 MG',
          '140 MG',
          '100 MG',
          '80 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EFAVIRENZ/EMTRICITABINE/TENOFOVIR DISOPROXIL FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-200MG',
        'options': [
          '600-200MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENOFIBRATE NANOCRYSTALLIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '145MG',
        'options': [
          '145MG',
          '48 MG',
          '50 MG',
          '160 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM PHOSPHATE,MONOBASIC/SODIUM PHOSPHAT,DIBASIC/CELLULOSE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.5 G',
        'options': [
          '1.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 06-07 VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML',
          '22.5/.25ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TRIVALENT-SPIT 2006-2007 VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IDURSULFASE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 MG/3 ML',
        'options': [
          '6 MG/3 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE/PHENYLEPHRINE&PYRILAMINE TANNATE/CHLORPHENIRMN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-7.5-10',
        'options': [
          '2.5-7.5-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MINOCYCLINE HCL/EYELID CLEANSER COMBINATION NO. 1',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM CARB/VIT D3/MAGNESIUM OXID/VIT B12/LEVOMEFOLATE/B6',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG-200',
        'options': [
          '500 MG-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAR-B-PENTANE CIT/CAR-B-PENTANE & PHENYLEPH TAN /PHENYLEPH',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-20-2.5',
        'options': [
          '10-20-2.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LISSAMINE GREEN',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1.5 MG',
        'options': [
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON ASP,GLY,PS/ASCORB.CALCIUM/B12/FOLIC/CALCIUM/SUCC.ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-25-1',
        'options': [
          '150-25-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON ASP GLY/ASCORB.CAL/VIT B12/FA/CA-THREONTE/SUCCINIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '70-150-1MG',
        'options': [
          '70-150-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON/VIT C/VIT B12/CALCIUM THREON/SUCCINIC ACID/STOMACH CONC',
    'types': [
      {
        'route': 'ORAL',
        'default': '70-150-10',
        'options': [
          '70-150-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON FUM,AG/ASCORB.CALCIUM/B12/FOLIC ACID/CALCIUM/SUCC.ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '151-60-1MG',
        'options': [
          '151-60-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NORETHINDRONE-ETHINYL ESTRADIOL/FERROUS FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.4-35(21)',
        'options': [
          '0.4-35(21)',
          '0.8-25(24)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIOGLITAZONE HCL/GLIMEPIRIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG-4 MG',
        'options': [
          '30 MG-4 MG',
          '30 MG-2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN TANNATE/PHENYLEPHRINE TAN/DEXCHLORPHEN TAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-20-2/5',
        'options': [
          '30-20-2/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/DIPHENHYDRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-25MG/5',
        'options': [
          '30-25MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM NO8-IRON PS CMPLX,FA& LEVOMEFOLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-400-1',
        'options': [
          '29-400-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEG 3350/SODIUM SULFATE/SOD CHLORIDE/KCL/ASCORBATE SOD/VIT C',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-2.691G',
        'options': [
          '7.5-2.691G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE/HYDROCODONE/BROMPHENIRAMINE TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '45-6-6MG/5',
        'options': [
          '45-6-6MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN/PHENYLEPHRINE/PYRILAMINE/DEXCHLORPHENIRAMIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-5-5-1.25',
        'options': [
          '5-5-5-1.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN/PHENYLEPHRINE/DIPHENHYDRAMINE TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '75-7.5-25',
        'options': [
          '75-7.5-25',
          '15-15-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN TANNATE/PHENYLEPHRINE TANNATE/PYRIL TAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-12.5-30',
        'options': [
          '25-12.5-30',
          '25-15.5/5',
          '25-25-30MG',
          '15-10-16MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN TANNATE/PHENYLEPHRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-20MG/10',
        'options': [
          '40-20MG/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PANITUMUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/20ML',
        'options': [
          '400MG/20ML',
          '100 MG/5ML',
          '200MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/PYRIDOXINE HCL/CYANOCOBALAMIN/MV-AO5',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-2-875',
        'options': [
          '2.5-2-875'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VORINOSTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARFORMOTEROL TARTRATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '15MCG/2ML',
        'options': [
          '15MCG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHOSPHORUS #1',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SITAGLIPTIN PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/CARBETAPENTANE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-7.5/5',
        'options': [
          '200-7.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE/HYDROCODONE/BROMPHENIRAMINE TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-5-6MG/5',
        'options': [
          '10-5-6MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/DEXTROMETHORPHAN TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '225-15MG/5',
        'options': [
          '225-15MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.19 WITH DEXTROSE 1.5%',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.21 WITH 2.5 % DEXTROSE',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.20 WITH DEXTROSE 4.25 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELBIVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE & SKIN CLEANSER COMBINATION NO.5',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %',
          '8 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ONDANSETRON HCL/DEXTROSE 5%-WATER/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '32 MG/50ML',
        'options': [
          '32 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE/HYDROCODONE/CHLORPHENIRAMINE TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-5-4MG/5',
        'options': [
          '30-5-4MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PHOSPHATE/TRETINOIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1.2-0.025%',
        'options': [
          '1.2-0.025%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITS, IRON, MINERALS COMBO NO #5, FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-1 MG',
        'options': [
          '10 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARVEDILOL PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '40 MG',
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERITONEAL DIALYSIS NO.28 WITH ICODEXTRIN 7.5 %',
    'types': [
      {
        'route': 'INTRAPERITONEAL',
        'default': '3.5MEQ(CA)',
        'options': [
          '3.5MEQ(CA)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/HYDROCODONE BITARTRATE/DEXBROMPHENIRAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-2.5-1/5',
        'options': [
          '5-2.5-1/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB 10/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '65 MG-1 MG',
        'options': [
          '65 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM CMB 11/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '65 MG-1 MG',
        'options': [
          '65 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/AVOBENZONE/OCTINOXATE/OCTOCRYLENE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLX NO.3/FOLIC ACID/ASCORBIC ACID/BIOTIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-60MG',
        'options': [
          '1MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DORZOLAMIDE HCL/TIMOLOL MALEATE/PF',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '2 %-0.5 %',
        'options': [
          '2 %-0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEOXYCHOLIC ACID',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PALIPERIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG',
        'options': [
          '6 MG',
          '3 MG',
          '9 MG',
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUCONAZOLE IN SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/0.1L',
        'options': [
          '200MG/0.1L',
          '400MG/0.2L',
          '100MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUCONAZOLE IN DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/0.1L',
        'options': [
          '200MG/0.1L',
          '400MG/0.2L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ONDANSETRON IN SODIUM CHLORIDE/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '32 MG/50ML',
        'options': [
          '32 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.4/IRON CARB-IRON GLUC/FOLIC ACID/DOCUSATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-50 MG',
        'options': [
          '27-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPINEPHRINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1 MG/ML(1)',
        'options': [
          '1 MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GENTAMICIN SULFATE IN SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80 MG/50ML',
        'options': [
          '80 MG/50ML',
          '100MG/0.1L',
          '80MG/100ML',
          '60 MG/50ML',
          '60MG/100ML',
          '120MG/0.1L',
          '90MG/100ML',
          '100MG/50ML',
          '70 MG/50ML',
          '40 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMP AND VIT C NO.6',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-0.5 MG',
        'options': [
          '500-0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXAMETHASONE SODIUM PHOSPHATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPATITIS A VIRUS VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '25/0.5ML',
        'options': [
          '25/0.5ML',
          '50 UNIT/ML',
          '720/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS SULFATE/SODIUM FLUORIDE/VIT A PALM/VIT C/VITAMIN D3',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-0.25/2',
        'options': [
          '10-0.25/2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLODIPINE BESYLATE/VALSARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10MG-320MG',
        'options': [
          '10MG-320MG',
          '5 MG-320MG',
          '5 MG-160MG',
          '10MG-160MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS NO.13/IRON,CARBONYL/FA/DOCUSATE NA/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-250MG',
        'options': [
          '90-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRILAMINE MALEATE/DEXBROMPHENIRAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '3.5-4MG/5',
        'options': [
          '3.5-4MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE TANNATE/PYRILAMINE MALEATE/DEXBROMPHEN TANNAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '25-3.5-4/5',
        'options': [
          '25-3.5-4/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'D-METHORPHAN TAN/PHENYLEPHRINE TAN/PYRIL MAL/D-BROMPHEN TAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-25-4/5',
        'options': [
          '30-25-4/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB 10/FERROUS FUMARATE/FOLIC ACID/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '65-1-250MG',
        'options': [
          '65-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/DEXCHLORPHENIRAMINE MAL/METHSCOPOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-1-1.25',
        'options': [
          '10-1-1.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LISDEXAMFETAMINE DIMESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '70 MG',
        'options': [
          '70 MG',
          '40 MG',
          '20 MG',
          '30 MG',
          '50 MG',
          '10 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALISKIREN HEMIFUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZITHROMYCIN HYDROGEN CITRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG',
          '2.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PHENYLEPHRINE TANNATE/ZINC ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-25MG/5',
        'options': [
          '30-25MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFENESIN/CARBETAPENTANE CIT/PHENYLEPHRINE HCL/ZINC ACET',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-15-5/5',
        'options': [
          '100-15-5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LAPATINIB DITOSYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/CAFFEINE/DIHYDROCODEINE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '356-30-16',
        'options': [
          '356-30-16'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITS, IRON, MINERALS COMBO NO #6, FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '27MG-0.8MG',
        'options': [
          '27MG-0.8MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NITRIC OXIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '800 PPM',
        'options': [
          '800 PPM',
          '100 PPM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ECULIZUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '300MG/30ML',
        'options': [
          '300MG/30ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.2',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '2-3.5MEQ/L',
        'options': [
          '2-3.5MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/DIPHENHYDRAMINE CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-38MG',
        'options': [
          '200MG-38MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE TANNATE/METHSCOPOLAMINE NITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2-1.5MG/5',
        'options': [
          '2-1.5MG/5',
          '2 MG-1.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEPATITIS B VIRUS VACCINE RECOMBINANT/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10 MCG/ML',
        'options': [
          '10 MCG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON PYROPHOSPHATE/CYANOCOBALAMIN/FA/NIACIN/PYRIDOXINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10.4-2MG/5',
        'options': [
          '10.4-2MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SITAGLIPTIN PHOSPHATE/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50MG-500MG',
        'options': [
          '50MG-500MG',
          '50-1000 MG',
          '100-1000MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEG 3350/SOD SULF/SOD BICARB/SOD CHLORIDE/POTASSIUM CHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '236-22.74G',
        'options': [
          '236-22.74G',
          '240-22.72G',
          '227.1-21.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CALCIUM CARBONATE/VIT D3/HYDROXOCOBALAMIN/FA/VIT B6/POLICOS',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG-400',
        'options': [
          '600 MG-400'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDIUM-111 CHLORIDE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '5MCI/0.5ML',
        'options': [
          '5MCI/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RETAPAMULIN',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRAVOPROST (BENZALKONIUM)',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.004 %',
        'options': [
          '0.004 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ZOLEDRONIC ACID IN MANNITOL AND WATER FOR INJECTION',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MG/100ML',
        'options': [
          '5 MG/100ML',
          '4 MG/100ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRILAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12MG/5ML',
        'options': [
          '12MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIPROLIDINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG/5ML',
        'options': [
          '2.5 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE TANNATE/TRIPROLIDINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '45-2.5MG/5',
        'options': [
          '45-2.5MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEOMYCIN SULFATE/POLYMYXIN B SULFATE/GRAMICIDIN D',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1.75MG-10K',
        'options': [
          '1.75MG-10K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUTICASONE FUROATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '100 MCG',
        'options': [
          '100 MCG',
          '200 MCG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'NASAL',
        'default': '27.5 MCG',
        'options': [
          '27.5 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM/POTASSIUM/MAGNESIUM/CALCIUM/CHLORIDE/ACETATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '35-20-5MEQ',
        'options': [
          '35-20-5MEQ',
          '18-18-5MEQ',
          '25-20-5/20'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GRANISETRON HCL/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MCG/ML',
        'options': [
          '100 MCG/ML',
          '1 MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEP B VIRUS,RCMB/DIPTH,PERTUS(ACELL),TET,POLIO VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10-25-25',
        'options': [
          '10-25-25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HEXAMINOLEVULINATE HCL',
    'types': [
      {
        'route': 'INTRAVESICAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM/POTASSIUM/MAGNES/CALCIUM/CHLORIDE/ACETATE/GLUCONATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25-40.6MEQ',
        'options': [
          '25-40.6MEQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIAMINE/RIBOFLAVIN/NIACIN/CA PANTOTHENATE/B6/B12/VIT C/FA',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-0.5 MG',
        'options': [
          '500-0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOCARNITINE (WITH SUGAR)',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UREA/LACTIC ACID/SALICYLIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '50 %',
        'options': [
          '50 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/ASCORBIC ACID',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4%-10%',
        'options': [
          '4%-10%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROQUINONE/ASCORBIC ACID/VITAMIN E ACETATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROMORPHONE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '2 MG/ML',
          '4 MG/ML',
          '1 MG/ML',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/SULFUR/UREA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10%-5%-10%',
        'options': [
          '10%-5%-10%',
          '10%-4%-10%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.8/IRON POLYSACH,HEME POLYPEPTIDE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '22-6-1 MG',
        'options': [
          '22-6-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/CARBETAPENTANE CIT',
    'types': [
      {
        'route': 'ORAL',
        'default': '6-10-30/5',
        'options': [
          '6-10-30/5',
          '6-10-25/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM/POTASSIUM/POTASSIUM CIT/SOD CITRATE/CITR ACID/SUCROSE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-550/5',
        'options': [
          '500-550/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/LIDOCAINE HCL/SKIN CLEANSER NO.6',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.5 %-3 %',
        'options': [
          '0.5 %-3 %',
          '1 %-3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMBRISENTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARMODAFINIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '250 MG',
          '50 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TEMSIROLIMUS',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': 'FDN 30MG/3',
        'options': [
          'FDN 30MG/3'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS WITHOUT CALCIUM NO.9/IRON/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG-1 MG',
        'options': [
          '60 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIVASTIGMINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '4.6MG/24HR',
        'options': [
          '4.6MG/24HR',
          '9.5MG/24HR',
          '13.3MG/24H'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MALEATE/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '3.5-18.5MG',
        'options': [
          '3.5-18.5MG',
          '6 MG-40 MG',
          '3 MG-20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/HYDROCORTISONE ACETATE/PSYLLIUM HUSK',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '3%-1%(7 G)',
        'options': [
          '3%-1%(7 G)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 07-08 VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML',
          '22.5/.25ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 07-08 VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIDAZOLAM HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/2 ML',
        'options': [
          '2 MG/2 ML',
          '10 MG/2 ML',
          '5 MG/5 ML',
          '5 MG/ML(1)',
          '5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '22.5MG/5ML',
        'options': [
          '22.5MG/5ML',
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CHLORPHENIRAMINE MALEATE/ZINC ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '120-8-14MG',
        'options': [
          '120-8-14MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE/CHLORPHENIRAMINE/METHSCOPOLAMINE/ZINC ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-2MG/5ML',
        'options': [
          '10-2MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MARAVIROC',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE/METHYLENE BLUE/BENZOIC/PHENYL SAL/ATROPIN/HYOSCY',
    'types': [
      {
        'route': 'ORAL',
        'default': '40.8-5.4MG',
        'options': [
          '40.8-5.4MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE/METHYLENE BLUE/SOD PHOS/P.SALICYLATE/HYOSCYAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '81.6-10.8',
        'options': [
          '81.6-10.8',
          '81-0.12MG',
          '118-10-36'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACITRETIN/EMOLLIENT COMBINATION NO. 26',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '25 MG',
        'options': [
          '25 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 10 % COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 10 % COMBINATION NO.5 (PEDIATRIC)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 7 % COMBINATION NO.1 (PEDIATRIC)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7 %',
        'options': [
          '7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 15 % COMBINATION NO.2',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '15 %',
        'options': [
          '15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE/PYRILAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '22.5-12/5',
        'options': [
          '22.5-12/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.10/IRON FUM,POLYSAC COMP/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-1-310.1',
        'options': [
          '30-1-310.1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID/ANTIPYRINE/BENZOCAINE/POLICOSANOL/AL ACETATE',
    'types': [
      {
        'route': 'OTIC',
        'default': '5.4 %-1.4%',
        'options': [
          '5.4 %-1.4%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON ASP.GLY,FUM/VIT C/FOLIC ACID/M-VIT NO.11/CALCIUM THREON',
    'types': [
      {
        'route': 'ORAL',
        'default': '151-200-1',
        'options': [
          '151-200-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE TANNATE/PYRILAMINE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-15MG/5',
        'options': [
          '15-15MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE TANNATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG/5 ML',
        'options': [
          '30 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RUFINAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '400 MG',
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN NO.15/IRON,CARBONYL/FOLIC ACID/DOCUSATE SOD',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-50 MG',
        'options': [
          '90-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN NO.16/IRON,CARBONYL/FOLIC ACID/DOCUSATE SOD',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-50 MG',
        'options': [
          '90-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN NO.17/IRON,CARBONYL/FOLIC ACID/DOCUSATE SOD',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-50 MG',
        'options': [
          '90-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN NO.18/IRON,CARBONYL/FOLIC ACID/DOCUSATE SOD',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-50 MG',
        'options': [
          '90-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENOBARBITAL/HYOSCYAMINE SULF/ATROPINE SULF/SCOPOLAMINE HB',
    'types': [
      {
        'route': 'ORAL',
        'default': '16.2 MG',
        'options': [
          '16.2 MG',
          '16.2MG/5ML',
          '48.6-58.2',
          '48.6MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHYSIOLOGICAL IRRIGATING SOLUTION COMBO #1',
    'types': [
      {
        'route': 'IRRIGATION',
        'default': '140-5-3-98',
        'options': [
          '140-5-3-98'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLODIPINE BESYLATE/OLMESARTAN MEDOXOMIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-40MG',
        'options': [
          '10 MG-40MG',
          '5 MG-20 MG',
          '5 MG-40 MG',
          '10 MG-20MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RALTEGRAVIR POTASSIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG',
          '100 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DORIPENEM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THROMBIN(HUMAN PLASMA DERIVED)/FIBRINOGEN/APROTININ/CALCIUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10ML',
        'options': [
          '10ML',
          '4 ML',
          '2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HUMAN PAPILLOMAVIRUS VACCINE, QUADRIVALENT/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '20-40/0.5',
        'options': [
          '20-40/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IXABEPILONE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '15 MG',
        'options': [
          '15 MG',
          '45 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 20 % COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FAMOTIDINE/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/2 ML',
        'options': [
          '20 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 10 % COMBINATION NO.2',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FAMOTIDINE IN SODIUM CHLORIDE, ISO-OSMOTIC/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG/50ML',
        'options': [
          '20 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PHOSPHATE/BENZOYL PEROXIDE/SKIN CLEANSER NO.5',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %-5 %',
        'options': [
          '1 %-5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB NO.20/IRON BISGLY/FOLIC ACID/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '26-1-200MG',
        'options': [
          '26-1-200MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NILOTINIB HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOTETAN DISODIUM IN ISO-OSMOTIC DEXTROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CODEINE PHOSPHATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-10-100',
        'options': [
          '30-10-100',
          '60-20-200',
          '20-10-400',
          '30-20-400',
          '60-20-400',
          '30-10-400',
          '60-10-400',
          '20-20-400',
          '40-20-400',
          '40-10-400'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CODEINE PHOSPHATE/ACETAMINOPHEN/GUAIFEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '60-20-500',
        'options': [
          '60-20-500',
          '40-10-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS NO.22/IRON,CARBONYL/FA/DOCUSATE NA/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-250MG',
        'options': [
          '90-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMIN-MINERALS NO.7/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/CODEINE PHOSPHATE/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-20-500MG',
        'options': [
          '4-20-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CODEINE PHOSPHATE/ACETAMINOPHEN/GUAIFEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-20-500',
        'options': [
          '10-20-500',
          '10-10-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTITHROMBIN III, HUMAN RECOMBINANT',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1750 UNIT',
        'options': [
          '1750 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLIC ACID/CERAMIDES 1,3,6-11',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '6 %',
        'options': [
          '6 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/DIPHENHYDRAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '6MG-25MG',
        'options': [
          '6MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MAL/DIPHENHYDRAMINE HCL/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '6MG-25MG',
        'options': [
          '6MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SEVELAMER CARBONATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '800 MG',
        'options': [
          '800 MG',
          '0.8 G',
          '2.4 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHTHERIA, PERTUSSIS (ACELL), TETANUS PEDIATRIC VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '25-58-10',
        'options': [
          '25-58-10',
          '6.7-46.8-5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SAPROPTERIN DIHYDROCHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GUAIFEN/DEXTROMETH/PHENYLEPH/CHLORPHENIRAMIN/METHSCOPOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-30-15',
        'options': [
          '600-30-15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDIUM-111 CHLORIDE/PENTETREOTIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3MCI/ML-10',
        'options': [
          '3MCI/ML-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/SULFUR/UREA/MERADIMATE/TITANIUM DIOXIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10-4-SPF25',
        'options': [
          '10-4-SPF25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SINECATECHINS',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '15 %',
        'options': [
          '15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 15% COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '15 %',
        'options': [
          '15 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE/DEXTROMETHORPHAN/GUAIFENESIN/ACETAMINOPHEN',
    'types': [
      {
        'route': 'ORAL',
        'default': '60-20-500',
        'options': [
          '60-20-500',
          '60-400-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 10% COMBINATION NO. 4',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 10 % COMBINATION NO.6',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 8.5 % COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 10% COMBINATION NO.7',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 6% COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 %',
        'options': [
          '6 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 5.2 % COMBINATION NO.1 (RENAL)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5.2 %',
        'options': [
          '5.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 4 % COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 %',
        'options': [
          '4 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 3.5% COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3.5 %',
        'options': [
          '3.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 5% COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 7% COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7 %',
        'options': [
          '7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 8.5 % COMBINATION NO.2',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/METHYLSCOPOLAMN',
    'types': [
      {
        'route': 'ORAL',
        'default': '8-20-2.5MG',
        'options': [
          '8-20-2.5MG',
          '2-10-1.25',
          '8-40-2.5MG',
          '2-8-0.75/5',
          '4-10-1.25',
          '8-20-1.25',
          '12-20-2.5',
          '8-25-2.5MG',
          '12-40-1.25',
          '2-10-0.625',
          '2-10-0.75',
          '12-40-2MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS,DIPHTHERIA TOXOID PED/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5-6.7 LF',
        'options': [
          '5-6.7 LF'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLUCOSAMINE SULFATE/CHONDROITIN SULFATE A/ANTIOXID MULTVIT#5',
    'types': [
      {
        'route': 'ORAL',
        'default': '400-300 MG',
        'options': [
          '400-300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALISKIREN HEMIFUMARATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-12.5MG',
        'options': [
          '300-12.5MG',
          '300MG-25MG',
          '150-12.5MG',
          '150MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETRAVIRINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '200 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSAPREPITANT DIMEGLUMINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '150 MG',
        'options': [
          '150 MG',
          '115MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/DIHYDROCODEINE BITARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-3MG/5',
        'options': [
          '7.5-3MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 8.5 % COMBINATION NO.3',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 7 % COMBINATION NO.2',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '7 %',
        'options': [
          '7 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/DIHYDROCODEINE BIT',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-7.5-3/5',
        'options': [
          '4-7.5-3/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HAEMOPHILUS B CONJUGATE VACCINE (MENINGOCOCCAL PROT.CONJ)/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '7.5MCG/0.5',
        'options': [
          '7.5MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 6.5 % COMBINATION NO.1',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6.5 %',
        'options': [
          '6.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-7.5-10/5',
        'options': [
          '4-7.5-10/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PARENTERAL AMINO ACID 8.5 % COMBINATION NO.4',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '8.5 %',
        'options': [
          '8.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRABECTEDIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/DEXTROMETHORPHAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-7.5-15/5',
        'options': [
          '4-7.5-15/5',
          '2-5-10MG/5',
          '2-7.5-15/5',
          '4-10-20/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NIACIN/SIMVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '1000-20MG',
        'options': [
          '1000-20MG',
          '500MG-20MG',
          '750MG-20MG',
          '1000-40 MG',
          '500MG-40MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS AND DIPHTHERIA TOXOIDS, ADSORBED, ADULT/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5-2/0.5ML',
        'options': [
          '5-2/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHTHERIA,PERTUSSIS(ACELL),TETANUS VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2-2.5-5/.5',
        'options': [
          '2-2.5-5/.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB NO.25/IRON BISGLY/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG-1 MG',
        'options': [
          '25 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON BISGLY,PSCMPLX/ASCORBATE CALC/B12/FOLIC ACID/CALC-THREO',
    'types': [
      {
        'route': 'ORAL',
        'default': '150MG-60-1',
        'options': [
          '150MG-60-1',
          '150-25-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESVENLAFAXINE SUCCINATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RILONACEPT',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '220 MG',
        'options': [
          '220 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CODEINE PHOSPHATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-20-400',
        'options': [
          '10-20-400',
          '2.5-3-50/1',
          '10-10-400'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CICLOPIROX AND NAIL LACQUER REMOVER, NON-ACETONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '8 %',
        'options': [
          '8 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMIN-MINERALS NO.9/FOLIC ACID/SAW PALMETTO EXTRACT',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-320MG',
        'options': [
          '1MG-320MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/CARBETAPENTANE CITRATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-20-100',
        'options': [
          '10-20-100',
          '15-20-100',
          '5-15-100/5',
          '15-60-600',
          '8-30-200/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESONIDE/EMOLLIENT COMBINATION NO. 28',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MALEATE/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2MG-10MG/5',
        'options': [
          '2MG-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS TOXOID, ADSORBED/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '5 LF/0.5ML',
        'options': [
          '5 LF/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MENINGOCOCCALVACCINE A,C,Y,W-135,DIPHTHERIA TOXOID CONJ/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '4MCG/0.5ML',
        'options': [
          '4MCG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MENINGOCOCCAL VACCINE A,C,Y,W-135/PF',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '50 MCG',
        'options': [
          '50 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RABIES VACCINE, HUMAN DIPLOID CELL/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2.5 UNIT',
        'options': [
          '2.5 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNEUMOCOCCAL 7-VALENT CONJUGATE VACCINE (DIPHTHERIA CRM)/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '16 MCG/0.5',
        'options': [
          '16 MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CHLORPHENIRAMINE MALEATE/METHYLSCOPOLAMN',
    'types': [
      {
        'route': 'ORAL',
        'default': '120-8-2.5',
        'options': [
          '120-8-2.5',
          '120-2.5 MG',
          '90-8-2.5MG',
          '60-8-1.25',
          '120-6-2.5',
          '30-4-1.25',
          '60-4-1.25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/SULFUR/WITCH HAZEL',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10-5%(W/W)',
        'options': [
          '10-5%(W/W)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RUBELLA VIRUS LIVE VACCINE/PF',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '1000 TCID',
        'options': [
          '1000 TCID'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUMATRIPTAN SUCCINATE/NAPROXEN SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '85MG-500MG',
        'options': [
          '85MG-500MG',
          '10 MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SULFACETAMIDE SODIUM/SULFUR/SKIN CLEANSER COMB NO.10',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10-5%(W/W)',
        'options': [
          '10-5%(W/W)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIAMCINOLONE ACETONIDE/PF',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '40 MG/ML',
        'options': [
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON, CARBONYL/FOLIC ACID/VIT B12/VITAMIN C/DOCUSATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-50 MG',
        'options': [
          '90-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLEX NO.9/IRON,CARBONYL/FOLIC ACID/VIT C/VIT E',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-1-60MG',
        'options': [
          '100-1-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RABIES IMMUNE GLOBULIN/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '150 UNIT/1',
        'options': [
          '150 UNIT/1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN 27 WITH CALCIUM/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG-1 MG',
        'options': [
          '60 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE MAL/PSEUDOEPHEDRINE HCL/DIHYDROCODEINE BITAR',
    'types': [
      {
        'route': 'ORAL',
        'default': '3-15-7.5/5',
        'options': [
          '3-15-7.5/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIHYDROCODEINE BITARTRATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-100/5',
        'options': [
          '7.5-100/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXACILLIN SODIUM/DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RABIES VACCINE, PURIFIED CHICKEN EMBRYO CELL (PCEC)/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '2.5 UNIT',
        'options': [
          '2.5 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETANUS IMMUNE GLOBULIN/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 UNIT',
        'options': [
          '250 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLEX NO.9/FOLIC ACID/ASCORBIC ACID/VITAMIN E',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-60MG-5',
        'options': [
          '1MG-60MG-5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE/HYALURONATE SODIUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '8 %-0.2 %',
        'options': [
          '8 %-0.2 %',
          '4 %-0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'YELLOW FEVER VACCINE LIVE/PF',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10E4.74',
        'options': [
          '10E4.74'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DABIGATRAN ETEXILATE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '75 MG',
          '110 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FESOTERODINE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG',
        'options': [
          '8 MG',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEPIVACAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '15 MG/ML',
          '10 MG/ML',
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLNALTREXONE BROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'SUBCUTANEOUS',
        'default': '12MG/0.6ML',
        'options': [
          '12MG/0.6ML',
          '8 MG/0.4ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'REGADENOSON',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.4 MG/5ML',
        'options': [
          '0.4 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/ARGININE HCL/CYANOCOBALAMIN/PYRIDOXINE/PEPPER EXT',
    'types': [
      {
        'route': 'ORAL',
        'default': '2-500-500',
        'options': [
          '2-500-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVIT WITH MIN#10/FOLIC ACID//VIT D3/A LIPOIC ACID/LUTEIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-1000-5',
        'options': [
          '1-1000-5',
          '1-1000-15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CHLOPHEDIANOL HCL/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-12.5/5',
        'options': [
          '30-12.5/5',
          '30-12.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MALEATE/PSEUDOEPHEDRINE/CHLOPHEDIANOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-30-12.5',
        'options': [
          '1-30-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/CODEINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-5-10MG/5',
        'options': [
          '1-5-10MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESONIDE/EMOLLIENT COMBINATION NO.30',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.05 %',
        'options': [
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAPAIN/UREA/CHLOROPHYLLIN COPPER COMPLEX SODIUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '520K-100/G',
        'options': [
          '520K-100/G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHTHERIA, PERTUSSIS(ACELL),TETANUS,POLIO VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '25-25-10',
        'options': [
          '25-25-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRILAMINE MALEATE/PHENYLEPHRINE HCL/DEXTROMETHORPHAN HBR',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-7.5/5',
        'options': [
          '12.5-7.5/5',
          '16-5-15/5',
          '8.33-5-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MESALAMINE WITH CLEANSING WIPES',
    'types': [
      {
        'route': 'RECTAL',
        'default': '4 G/60 ML',
        'options': [
          '4 G/60 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERRIC CARBOXYMALTOSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '750MG/15ML',
        'options': [
          '750MG/15ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 08-09 VACCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA TV-S 08-09 VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML',
          '22.5/.25ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMIN TAN/PHENYLEPHRINE TAN/METHYLSCOPOLAMINE NIT',
    'types': [
      {
        'route': 'ORAL',
        'default': '2-10-1.5/5',
        'options': [
          '2-10-1.5/5',
          '2-10-1.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.22/IRON CBN,GLUCON/FOLIC ACID/DOCUSATE/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-50 MG',
        'options': [
          '27-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.22/IRON CBN,GLUC/FOLIC ACID/DOCUSATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-50 MG',
        'options': [
          '27-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UREA/LACTIC ACID/ZINC UNDECYLENATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '50 %',
        'options': [
          '50 %',
          '45 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMINS W/ MINERALS NO. 12/FOLIC ACID/LYCOPENE/LUTEIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.8MG-500',
        'options': [
          '2.8MG-500'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIPHENHYDRAMINE HCL/PHENYLEPHRINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-7.5/5',
        'options': [
          '12.5-7.5/5',
          '10-7.5-7.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITS, FERROUS GLUCONATE, MINERALS COMBO NO.9,FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-1MG/15',
        'options': [
          '10-1MG/15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NICARDIPINE IN DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40MG/200ML',
        'options': [
          '40MG/200ML',
          '20MG/200ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NICARDIPINE IN SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40MG/200ML',
        'options': [
          '40MG/200ML',
          '20MG/200ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRILAMINE MALEATE/PHENYLEPHRINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5-5-10MG/5',
        'options': [
          '5-5-10MG/5',
          '8.33-5-9/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMINS WITH MINERALS NO. 14/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERROUS FUMARATE/FOLIC ACID/MULTIVITAMIN-MINERALS NO.15',
    'types': [
      {
        'route': 'ORAL',
        'default': '106 MG-1MG',
        'options': [
          '106 MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALVIMOPAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '12 MG',
        'options': [
          '12 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLONIDINE HCL/PF',
    'types': [
      {
        'route': 'EPIDURAL',
        'default': '5000MCG/10',
        'options': [
          '5000MCG/10',
          '1000MCG/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETIC ACID/ANTIPYRINE/BENZOCAINE/POLICOSANOL 1/ALUMINUM ACE',
    'types': [
      {
        'route': 'OTIC',
        'default': '5.4 %-1.4%',
        'options': [
          '5.4 %-1.4%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFEPIME HCL IN ISO-OSMOTIC DEXTROSE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/100 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIPRANAVIR/VITAMIN E TPGS',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG/ML',
        'options': [
          '100 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/DIPHENHYDRAMINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-25MG',
        'options': [
          '200MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLEVIDIPINE BUTYRATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '25 MG/50ML',
        'options': [
          '25 MG/50ML',
          '50MG/100ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM #34/IRON/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '28 MG-1 MG',
        'options': [
          '28 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM #34/IRON/FOLIC ACID/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '28-1-250MG',
        'options': [
          '28-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT,CALCIUM NO.35/IRON/FOLIC ACID/DOCUSATE/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-50 MG',
        'options': [
          '27-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LACOSAMIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/20ML',
        'options': [
          '200MG/20ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '10 MG/ML',
          '150 MG',
          '200 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GRANISETRON',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '10MG/0.4ML',
        'options': [
          '10MG/0.4ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'TRANSDERMAL',
        'default': '3.1MG/24HR',
        'options': [
          '3.1MG/24HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLN NO.7 WITHOUT POTASSIUM OR DEXTROSE',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '3.5-1MEQ/L',
        'options': [
          '3.5-1MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.8 WITHOUT CALCIUM',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '2-1 MEQ/L',
        'options': [
          '2-1 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLN NO.9',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '4-2.5-1.5',
        'options': [
          '4-2.5-1.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.11 WITHOUT POTASSIUM',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '2.5-1.5/L',
        'options': [
          '2.5-1.5/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM NO.37/IRON,ASPG/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-330MG',
        'options': [
          '27-1-330MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXYCYCLINE MONOHYDRATE/OMEGA-3 COMBINATION NO.1/EYE MASK',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIVAROXABAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '15 MG',
          '10 MG',
          '15 MG-20MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRILAMINE MALEATE/PSEUDOEPHEDRINE HCL/CARBETAPENTANE CITRAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-8-20/5',
        'options': [
          '7.5-8-20/5',
          '7.5-30-20'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYOSCYAMINE SULFATE/PHENYLTOLOXAMINE CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.0625-15',
        'options': [
          '0.0625-15'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ICATIBANT ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '30 MG/3 ML',
        'options': [
          '30 MG/3 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYCODONE HCL/OXYCODONE TEREPHTHALATE/ASPIRIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '4.5-325 MG',
        'options': [
          '4.5-325 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE/HYDROCORTISONE/SKIN CLEANSER COMB NO.14',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %-0.5 %',
        'options': [
          '5 %-0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM NO.39/IRON FUM/FOLIC ACID/DSS/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-1.24-55',
        'options': [
          '30-1.24-55',
          '30-1.2-55'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELTROMBOPAG OLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '25 MG',
          '12.5 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMIKACIN SULFATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/2ML',
        'options': [
          '100 MG/2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUGAMMADEX SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG/2ML',
        'options': [
          '200 MG/2ML',
          '500 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'REPAGLINIDE/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-500MG',
        'options': [
          '1MG-500MG',
          '2 MG-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ADAPALENE/BENZOYL PEROXIDE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.1 %-2.5%',
        'options': [
          '0.1 %-2.5%',
          '0.3 %-2.5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENOFIBRIC ACID (CHOLINE)',
    'types': [
      {
        'route': 'ORAL',
        'default': '135 MG',
        'options': [
          '135 MG',
          '45 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PLERIXAFOR',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '24MG/1.2ML',
        'options': [
          '24MG/1.2ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM NO. 40/IRON FUMARATE/FA CMB NO.1',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOXYCYCLINE MONOHYDRATE/SALICYLIC ACID/OCTINOXATE/ZINC OXIDE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '100MG-2-30',
        'options': [
          '100MG-2-30'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/SALICYLIC ACID/SULFUR/SHAMPOO NO. 1',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2%-2%-2%',
        'options': [
          '2%-2%-2%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXLANSOPRAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FEBUXOSTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SILODOSIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG',
        'options': [
          '8 MG',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #44/IRON,CARBONYL/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BENZOYL PEROXIDE/VITAMIN E MIXED',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '8%-5%',
        'options': [
          '8%-5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLIC ACID/BENZOYL PEROXIDE/VITAMIN E MIXED',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2%-8%-5%',
        'options': [
          '2%-8%-5%',
          '1%-4%-5%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEGARELIX ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '120 MG',
        'options': [
          '120 MG',
          '80 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPROPION HBR',
    'types': [
      {
        'route': 'ORAL',
        'default': '522MG',
        'options': [
          '522MG',
          '174MG',
          '348MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRASUGREL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS NO.45/IRON,CARBONYL/FA/DOCUSATE SOD/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-250MG',
        'options': [
          '90-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CONIVAPTAN HCL/DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20MG/100ML',
        'options': [
          '20MG/100ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'USTEKINUMAB',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '45MG/0.5ML',
        'options': [
          '45MG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYTARABINE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100 MG/5ML',
        'options': [
          '100 MG/5ML',
          '2 G/20 ML',
          '20 MG/ML',
          '1 G',
          '100 MG',
          '2 G',
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYTARABINE LIPOSOME/PF',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '50 MG/5 ML',
        'options': [
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMBO NO.14/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYMYXIN B SULFATE, MICRONIZED',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '100MM UNIT',
        'options': [
          '100MM UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON FUMARATE,POLYSAC CPLEX/FOLIC ACID/VIT B COMP WITH C #9',
    'types': [
      {
        'route': 'ORAL',
        'default': '125MG-1MG',
        'options': [
          '125MG-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON FUMARATE,POLYSAC COMP/FOLIC ACID/VITAMIN C/NIACINAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '125-1-40-3',
        'options': [
          '125-1-40-3'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GOLIMUMAB',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '50MG/0.5ML',
        'options': [
          '50MG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN NO.15/IRON FUMARATE,POLYSAC COMP/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '85 MG-1 MG',
        'options': [
          '85 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.16/IRON FUM,PS COMPLEX/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '35-1-200MG',
        'options': [
          '35-1-200MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMLODIPINE BESYLATE/VALSARTAN/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10-320-25',
        'options': [
          '10-320-25',
          '5-160-25MG',
          '5-160-12.5',
          '10-160-25',
          '10MG-160MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #47/IRON FUM/FA CMB #1/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-300MG',
        'options': [
          '27-1-300MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTRADIOL VALERATE/DIENOGEST',
    'types': [
      {
        'route': 'ORAL',
        'default': '3-2-1(28)',
        'options': [
          '3-2-1(28)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROXYLENOL/BENZOCAINE/HYDROCORTISONE ACETATE',
    'types': [
      {
        'route': 'OTIC',
        'default': '1-15-10/ML',
        'options': [
          '1-15-10/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/PRAMOXINE HCL/SKIN CLEANSER NO.16',
    'types': [
      {
        'route': 'RECTAL',
        'default': '2.35 %-1 %',
        'options': [
          '2.35 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOLVAPTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BESIFLOXACIN HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.6 %',
        'options': [
          '0.6 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEDIATRIC MULTIVITAMINS COMBINATION NO.12/SODIUM FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.25 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #52/IRON BG SUC-PR/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB NO.54/IRON B-G HCL SUC-P/FA/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-430MG',
        'options': [
          '29-1-430MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT #55/IRON BISGLY HCL,SUC-PROT/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-430MG',
        'options': [
          '29-1-430MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB NO.55/IRON B-G SUC CHE-PR/FA/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-430MG',
        'options': [
          '29-1-430MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNV54/FERR BIS-GLY CHEL-IRON SUCC-PR/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-430MG',
        'options': [
          '29-1-430MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNV53/FERR BIS-GLY CHEL-IRON SUCC-PR/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-400MG',
        'options': [
          '29-1-400MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLX NO.3/FOLIC ACID/ASCORBIC ACID/BIOT/ZINC OX',
    'types': [
      {
        'route': 'ORAL',
        'default': '1MG-60MG',
        'options': [
          '1MG-60MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLINDAMYCIN PHOSPHATE/BENZOYL PEROXIDE/HYALURONATE SODIUM',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %-5 %',
        'options': [
          '1 %-5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TAPENTADOL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG',
          '75 MG',
          '200 MG',
          '250 MG',
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMINS W-MINERALS COMBINATION NO.20/IRON/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/CAFFEINE/VITAMINS B1, B2, B6, & B12',
    'types': [
      {
        'route': 'ORAL',
        'default': '800MG-65MG',
        'options': [
          '800MG-65MG',
          '400MG-65MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR THE PREPARATION OF TC-99M/SODIUM PYROPHOSPHATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '12 MG',
        'options': [
          '12 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLEX#11/FOLIC ACID/ASCORBIC ACID/BIOTIN/ZN OXID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-100MG',
        'options': [
          '1 MG-100MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIRAGLUTIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '0.6 MG/0.1',
        'options': [
          '0.6 MG/0.1',
          '3 MG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERUMOXYTOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '510MG/17ML',
        'options': [
          '510MG/17ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DRONEDARONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN COMB NO.8/IRON HEME POLYPEP/FOLIC ACID/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '22-6-1-200',
        'options': [
          '22-6-1-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA VIRUS VACCINE TRIVALENT-SPLIT 2009-2010/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML',
          '22.5/.25ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA VIRUS VACCINE TRI-SPLIT 2009-2010',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '45MCG/.5ML',
        'options': [
          '45MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THALLOUS CHLORIDE TL-201',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '37 MBQ/ML',
        'options': [
          '37 MBQ/ML',
          '74 MBQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IODOQUINOL/ALOE POLYSACCHARIDES NO.1',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1.25%-1%',
        'options': [
          '1.25%-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SAXAGLIPTIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABOBOTULINUMTOXINA',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '500 UNIT',
        'options': [
          '500 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'JAPANESE ENCEPHALITIS VACCINE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '6MCG/0.5ML',
        'options': [
          '6MCG/0.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PALIPERIDONE PALMITATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '156 MG/ML',
        'options': [
          '156 MG/ML',
          '39MG/0.25',
          '78MG/0.5ML',
          '273MG/.875',
          '117MG/0.75',
          '819/2.625',
          '410/1.315',
          '234MG/1.5',
          '546MG/1.75'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TETRACAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CANAKINUMAB/PF',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '180 MG/1.2',
        'options': [
          '180 MG/1.2'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIMOLOL MALEATE/PF',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.5 %',
        'options': [
          '0.5 %',
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FENOFIBRIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '105 MG',
        'options': [
          '105 MG',
          '35 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TREPROSTINIL/NEBULIZER AND ACCESSORIES',
    'types': [
      {
        'route': 'INHALATION',
        'default': '1.74MG/2.9',
        'options': [
          '1.74MG/2.9'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TREPROSTINIL/NEBULIZER ACCESSORIES',
    'types': [
      {
        'route': 'INHALATION',
        'default': '1.74MG/2.9',
        'options': [
          '1.74MG/2.9'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TREPROSTINIL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '1.74MG/2.9',
        'options': [
          '1.74MG/2.9'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CLONIDINE',
    'types': [
      {
        'route': 'TRANSDERMAL',
        'default': '0.2MG/24HR',
        'options': [
          '0.2MG/24HR',
          '0.1MG/24HR',
          '0.3MG/24HR'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM #60/IRON/FOLIC ACID/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-250MG',
        'options': [
          '27-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASENAPINE MALEATE',
    'types': [
      {
        'route': 'SUBLINGUAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG',
          '2.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MORPHINE SULFATE/NALTREXONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20MG-0.8MG',
        'options': [
          '20MG-0.8MG',
          '30MG-1.2MG',
          '100MG-4MG',
          '60MG-2.4MG',
          '50 MG-2 MG',
          '80MG-3.2MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOSITUMOMAB IODINE-131 (WITH MALTOSE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.61MCI/ML',
        'options': [
          '0.61MCI/ML',
          '5.6MCI/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOSITUMOMAB (WITH MALTOSE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '14MG/ML',
        'options': [
          '14MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ULIPRISTAL ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TAFLUPROST/PF',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.0015 %',
        'options': [
          '0.0015 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROXYLENOL/GLYCERIN/PRAMOXINE/ZINC ACETATE',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.1-1-0.5%',
        'options': [
          '0.1-1-0.5%',
          '0.1-1-1-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BEPOTASTINE BESILATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1.5 %',
        'options': [
          '1.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTIPYRINE/BENZOCAINE/GLYCERIN/ZINC ACETATE',
    'types': [
      {
        'route': 'OTIC',
        'default': '5.4-1-2-1%',
        'options': [
          '5.4-1-2-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA A (H1N1) VIRUS VACCINE MONOVALENT 2009/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '15MCG/.5ML',
        'options': [
          '15MCG/.5ML',
          'PED 0.25ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INFLUENZA A (H1N1) VIRUS VACCINE MONOVALENT 2009',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '15MCG/.5ML',
        'options': [
          '15MCG/.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/PHENYLEPHRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-10MG',
        'options': [
          '200MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARBETAPENTANE CITRATE/PSEUDOEPHEDRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-30MG/5',
        'options': [
          '20-30MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALISKIREN/VALSARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-320MG',
        'options': [
          '300-320MG',
          '150-160 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PSEUDOEPHEDRINE HCL/CARBETAPENTANE CITRATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '30-10-100',
        'options': [
          '30-10-100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/PRAMOXINE/EMOLLIENT/PRAMOXINE CMB NO1',
    'types': [
      {
        'route': 'RECTAL',
        'default': '2.5-1%(4G)',
        'options': [
          '2.5-1%(4G)',
          '2.5%-1%-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRALATREXATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 MG/2 ML',
        'options': [
          '40 MG/2 ML',
          '20MG/ML(1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SALICYLIC ACID/AMMONIUM LACTATE/ALOE VERA',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '6 %',
        'options': [
          '6 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYQUINOLINE SULFATE/SODIUM LAURYL SULFATE',
    'types': [
      {
        'route': 'VAGINAL',
        'default': '0.025-0.01',
        'options': [
          '0.025-0.01'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROPIVACAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '2 MG/ML',
        'options': [
          '2 MG/ML',
          '5 MG/ML',
          '10 MG/ML',
          '7.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESLICARBAZEPINE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '400 MG',
          '800 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/DIHYDROCODEINE BITARTRATE/GUAIFENESIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-7.5-50',
        'options': [
          '7.5-7.5-50',
          '5-7.5-50/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELAVANCIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '750 MG',
        'options': [
          '750 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIDOCAINE HCL/EPINEPHRINE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '1.5-1:200K',
        'options': [
          '1.5-1:200K',
          '1 %-1:200K',
          '2%-1:200K'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELMISARTAN/AMLODIPINE BESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG-5 MG',
        'options': [
          '80 MG-5 MG',
          '80 MG-10MG',
          '40 MG-5 MG',
          '40 MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #62/FERROUS FUMARATE/FOLIC AC/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-250MG',
        'options': [
          '27-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERAMIVIR/PF',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200MG/20ML',
        'options': [
          '200MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OFATUMUMAB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/5ML',
        'options': [
          '100 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PAZOPANIB HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLANZAPINE PAMOATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '300 MG',
        'options': [
          '300 MG',
          '405 MG',
          '210 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOSPROPOFOL DISODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1050 MG/30',
        'options': [
          '1050 MG/30'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEDIATRIC MULTIVITAMINS NO.16 WITH SODIUM FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ILOPERIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-2-4-6MG',
        'options': [
          '1-2-4-6MG',
          '12 MG',
          '6 MG',
          '2 MG',
          '10 MG',
          '8 MG',
          '4 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PYRILAMINE MALEATE/PHENYLEPHRINE HCL/DIHYDROCODEINE BITART',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5-5-7.5',
        'options': [
          '7.5-5-7.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZTREONAM LYSINE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '75 MG/ML',
        'options': [
          '75 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS NO.18/IRON,CARBONYL/FOLIC AC/UBIDECAR/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '15-0.5-50',
        'options': [
          '15-0.5-50'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM COMB NO.63/IRON,CARBONYL/FA/B6',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-1-25 MG',
        'options': [
          '20-1-25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHYLPREDNISOLONE SODIUM SUCCINATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '125 MG/2ML',
        'options': [
          '125 MG/2ML',
          '40 MG/ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG/4ML',
        'options': [
          '500 MG/4ML',
          '1000MG/8ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORPHENIRAMINE MALEATE/DEXTROMETHORPHAN/METHYLSCOPOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8-30-2.5MG',
        'options': [
          '8-30-2.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOR-MAL/PSEUDOEPHEDRINE HCL/ATROPINE/HYOSC SUL/SCOPOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '8-90-0.04',
        'options': [
          '8-90-0.04'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM NO.66/IRON FUM/FOLIC ACID/DSS/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1.25-55',
        'options': [
          '27-1.25-55',
          '26-1.2-55'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MAL/PSEUDOEPHEDRINE/METHSCOPOLAMINE NIT',
    'types': [
      {
        'route': 'ORAL',
        'default': '3.5-45-1MG',
        'options': [
          '3.5-45-1MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEDIATRIC MULTIVITAMINS NO.17 WITH SODIUM FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '0.25 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BROMPHENIRAMINE, PHENYLEPHRINE, AND CARBETAPENTANE TANNATES',
    'types': [
      {
        'route': 'ORAL',
        'default': '4-7.5-30/5',
        'options': [
          '4-7.5-30/5',
          '6-10-25/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MECOBALAMIN/LEVOMEFOLATE CALCIUM/PYRIDOXAL PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2-3-35 MG',
        'options': [
          '2-3-35 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'THIAMINE HCL/RIBOFLAVIN/NIACINAMIDE/DEXPANTHENOL/PYRIDOXINE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '100-2MG/ML',
        'options': [
          '100-2MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VELAGLUCERASE ALFA',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400 UNIT',
        'options': [
          '400 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE SODIUM SUCCINATE/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '250 MG/2ML',
        'options': [
          '250 MG/2ML',
          '100 MG/2ML',
          '1000MG/8ML',
          '500 MG/4ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CA NO.68/IRON FUMARATE/FOLIC ACID #1/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '28-1-300MG',
        'options': [
          '28-1-300MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/PRAMOXINE HCL/EMOLLIENT BASE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2.5 %-1 %',
        'options': [
          '2.5 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM #69/IRON,CARBON/FOLIC ACID/DSS/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-50 MG',
        'options': [
          '27-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROMIDEPSIN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MG/2 ML',
        'options': [
          '10 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOMEFOLATE CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '7.5 MG',
        'options': [
          '7.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACETYLCYSTEINE/MECOBALAMIN/LEVOMEFOLATE CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-2-6 MG',
        'options': [
          '600-2-6 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CAPSAICIN/SKIN CLEANSER',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '8 %',
        'options': [
          '8 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON CARBONYL,GLUC/FOLIC ACID/VIT B12/VIT C/DOCUSATE SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '90-1-50 MG',
        'options': [
          '90-1-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON POLYSACCHAR COMPLX/IRON HEME POLYPEPTIDE/FOLIC ACID/B12',
    'types': [
      {
        'route': 'ORAL',
        'default': '22-6-1-25',
        'options': [
          '22-6-1-25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAPROXEN/ESOMEPRAZOLE MAGNESIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '500MG-20MG',
        'options': [
          '500MG-20MG',
          '375MG-20MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERINDOPRIL ARGININE/AMLODIPINE BESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '14MG-10MG',
        'options': [
          '14MG-10MG',
          '3.5-2.5 MG',
          '7 MG-5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PITAVASTATIN CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '4 MG',
        'options': [
          '4 MG',
          '1 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DUTASTERIDE/TAMSULOSIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5-0.4 MG',
        'options': [
          '0.5-0.4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIZANIDINE HCL/IRRITANTS COUNTER-IRRITANTS COMBINATION NO.2',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '4 MG',
        'options': [
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #70/FERROUS FUMARATE/FOLIC AC/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '28-1-250MG',
        'options': [
          '28-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PNV NO.20/IRON FUMARATE/FA/DOCUSATE NA/FISH OIL CONC/DHA/EPA',
    'types': [
      {
        'route': 'ORAL',
        'default': '27-1-500MG',
        'options': [
          '27-1-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDACATEROL MALEATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '75 MCG',
        'options': [
          '75 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.13 WITHOUT CA, K, DEXTROSE',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '1.2 MEQ/L',
        'options': [
          '1.2 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.14 WITHOUT CALCIUM',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '2-1.5MEQ/L',
        'options': [
          '2-1.5MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.15 WITHOUT CALCIUM',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '4-1.2MEQ/L',
        'options': [
          '4-1.2MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFEPIME HCL IN DEXTROSE 5 % IN WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #72/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #73/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '28 MG-1 MG',
        'options': [
          '28 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #74/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CABAZITAXEL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': 'FDN10MG/ML',
        'options': [
          'FDN10MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOMETASONE FUROATE/FORMOTEROL FUMARATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '100-5 MCG',
        'options': [
          '100-5 MCG',
          '200-5 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FAT EMULSIONS/SOYBEAN OIL/MED CHAIN TRIGL/OLIVE OIL/FISH OIL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 %',
        'options': [
          '20 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #76/IRON,CARBONYL/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLMESARTAN MEDOXOMIL/AMLODIPINE BESYLATE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40-10-12.5',
        'options': [
          '40-10-12.5',
          '40-10-25MG',
          '40-5-25 MG',
          '20-5-12.5',
          '40-5-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACYCLOVIR/HYDROCORTISONE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %-1 %',
        'options': [
          '5 %-1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #78/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHENAMINE/SODIUM PHOSPHATE,MONOBASIC/METH BLUE/HYOSC SUL',
    'types': [
      {
        'route': 'ORAL',
        'default': '81.6-.12MG',
        'options': [
          '81.6-.12MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXCHLORPHENIRAMINE MALEATE/PHENYLEPHRINE HCL/CARB-PENTANE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-10-20/5',
        'options': [
          '1-10-20/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROFLUMILAST',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MCG',
        'options': [
          '500 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BICARBONATE DIALYSIS SOLUTION NO.16 WITHOUT CALCIUM',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '4-1.5MEQ/L',
        'options': [
          '4-1.5MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALISKIREN HEMIFUMARATE/AMLODIPINE BESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150MG-10MG',
        'options': [
          '150MG-10MG',
          '300MG-5MG',
          '150 MG-5MG',
          '300MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRON POLYSACCHARIDE COMPLEX/FOLIC ACID/ASCORBIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-1-60/5',
        'options': [
          '100-1-60/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM SULFATE/POTASSIUM SULFATE/MAGNESIUM SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '17.5-3.13G',
        'options': [
          '17.5-3.13G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORCYCLIZINE HCL/PSEUDOEPHEDRINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '9.375-30/5',
        'options': [
          '9.375-30/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FINGOLIMOD HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLORCYCLIZINE HCL/CODEINE PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '9.375-10/5',
        'options': [
          '9.375-10/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEDIATRIC MULTIVITAMINS NO.82 WITH SODIUM FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG/ML',
        'options': [
          '0.25 MG/ML',
          '0.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEDIATRIC MULTIVIT WITH A,C,D3 NO.21/SODIUM FLUORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25 MG/ML',
        'options': [
          '0.25 MG/ML',
          '0.5 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DROSPIRENONE/ETHINYL ESTRADIOL/LEVOMEFOLATE CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '3-0.02(24)',
        'options': [
          '3-0.02(24)',
          '3-0.03(21)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT NO.21/IRON POLYSACCH,HEME POLYPEP/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '28-6-1 MG',
        'options': [
          '28-6-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHLOROPROCAINE HCL/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '20 MG/ML',
        'options': [
          '20 MG/ML',
          '30 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE ACETATE/IODOQUINOL/ALOE POLYSACCHARIDES NO.2',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %-1 %-1%',
        'options': [
          '2 %-1 %-1%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT WITH CALCIUM NO.80/IRON FUM/FOLIC ACID/DSS/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1.25-55',
        'options': [
          '29-1.25-55',
          '27-1.25-55'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN COMBO NO.22/IRON/FOLIC ACID/OMEGA-3/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '28-6-1-203',
        'options': [
          '28-6-1-203'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAROLINE FOSAMIL ACETATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400 MG',
        'options': [
          '400 MG',
          '600 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SAXAGLIPTIN HCL/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5MG-1000MG',
        'options': [
          '5MG-1000MG',
          '2.5-1000MG',
          '5 MG-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ERIBULIN MESYLATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 MG/2 ML',
        'options': [
          '1 MG/2 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FOLIC ACID/NIACINAMIDE/CUPRIC OXIDE/ZINC OXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5-750 MG',
        'options': [
          '0.5-750 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MICONAZOLE NITRATE/ZINC OXIDE/PETROLATUM,WHITE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.25 %-15%',
        'options': [
          '0.25 %-15%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TESAMORELIN ACETATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MULTIVITAMIN-MINERALS NO.25/FOLIC ACID/VITAMIN D3',
    'types': [
      {
        'route': 'ORAL',
        'default': '3 MG-2000',
        'options': [
          '3 MG-2000'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXTROMETHORPHAN HBR/QUINIDINE SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG-10MG',
        'options': [
          '20 MG-10MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LURASIDONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '40 MG',
          '80 MG',
          '120 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TICAGRELOR',
    'types': [
      {
        'route': 'ORAL',
        'default': '90 MG',
        'options': [
          '90 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALCAFTADINE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.25 %',
        'options': [
          '0.25 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALISKIREN HEMIFUMARATE/AMLODIPINE/HYDROCHLOROTHIAZIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-5-25MG',
        'options': [
          '300-5-25MG',
          '300MG-10MG',
          '300-10-25',
          '150-5-12.5',
          '300-5-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SPINOSAD',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.9 %',
        'options': [
          '0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN NO.86/IRON BIS-GLYCINATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '32 MG-1 MG',
        'options': [
          '32 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYETHYL STARCH 130/0.4 IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '6 %-0.9 %',
        'options': [
          '6 %-0.9 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCORTISONE/PRAMOXINE/DIOSMIN1/ALOE POLYSAC 1/POLICOSANOL',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '2.5-1%/630',
        'options': [
          '2.5-1%/630'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POTASSIUM CHLORIDE IN DEXTROSE 10 %-0.2 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MEQ/L',
        'options': [
          '20 MEQ/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLEX WITH VITAMIN C NO.13/FOLIC ACID/VITAMIN D3',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG-1750',
        'options': [
          '1 MG-1750'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZILSARTAN MEDOXOMIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM NITRITE/SODIUM THIOSULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '300-12.5',
        'options': [
          '300-12.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VIT#55/IRON BISGLY HCL,SUCC-P2/FOLIC ACID/OMEGA-3',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-430MG',
        'options': [
          '29-1-430MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VANDETANIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CYSTEAMINE HCL',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.44 %',
        'options': [
          '0.44 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABIRATERONE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GABAPENTIN ENACARBIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '600 MG',
        'options': [
          '600 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LINAGLIPTIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOFLUPANE I 123',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5MCI/2.5ML',
        'options': [
          '5MCI/2.5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VILAZODONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-20MG',
        'options': [
          '10 MG-20MG',
          '10-20-40MG',
          '10 MG',
          '40 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARGATROBAN IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '125 MG/125',
        'options': [
          '125 MG/125',
          '50 MG/50ML',
          '250MG/250'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BOCEPREVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RILPIVIRINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TELAPREVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '375 MG',
        'options': [
          '375 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EZOGABINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '200 MG',
          '400 MG',
          '300 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FIDAXOMICIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMIODARONE IN DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '150MG/0.1L',
        'options': [
          '150MG/0.1L',
          '360MG/0.2L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPOPROSTENOL SODIUM (GLYCINE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '0.5 MG',
        'options': [
          '0.5 MG',
          '1.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EPOPROSTENOL SODIUM (ARGININE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.5 MG',
        'options': [
          '1.5 MG',
          '0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAZIDIME IN DEXTROSE 5% AND WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'APIXABAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5 MG',
        'options': [
          '2.5 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMTRICITABINE/RILPIVIRINE HCL/TENOFOVIR DISOPROXIL FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-25-300',
        'options': [
          '200-25-300'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VEMURAFENIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '240 MG',
        'options': [
          '240 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR THE PREPARATION OF TC-99M/PENTETIC ACID',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '20 MG',
        'options': [
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CRIZOTINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '250 MG',
        'options': [
          '250 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTIPYRINE/BENZOCAINE',
    'types': [
      {
        'route': 'OTIC',
        'default': '5.4 %-1.4%',
        'options': [
          '5.4 %-1.4%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMEGA-3/DHA/EPA/B12/FOLIC ACID/PYRIDOXINE HCL/PHYTOSTEROLS',
    'types': [
      {
        'route': 'ORAL',
        'default': '500-0.5-1',
        'options': [
          '500-0.5-1'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARGATROBAN IN SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/50ML',
        'options': [
          '50 MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLIDOCANOL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 %',
        'options': [
          '1 %',
          '0.5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBUPROFEN/FAMOTIDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '800-26.6MG',
        'options': [
          '800-26.6MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SITAGLIPTIN PHOSPHATE/SIMVASTATIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '100MG-10MG',
        'options': [
          '100MG-10MG',
          '100MG-40MG',
          '100MG-20MG',
          '50 MG-10MG',
          '50 MG-40MG',
          '50 MG-20MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMBO NO.33/IRON PS CMPLX/FOLIC ACID/DHA',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-250MG',
        'options': [
          '29-1-250MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BUPIVACAINE LIPOSOME/PF',
    'types': [
      {
        'route': 'INJECTION',
        'default': '266MG/20ML',
        'options': [
          '266MG/20ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RUXOLITINIB PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '10 MG',
          '15 MG',
          '5 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM IODIDE-123',
    'types': [
      {
        'route': 'ORAL',
        'default': '3.7 MBQ',
        'options': [
          '3.7 MBQ'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IOBENGUANE SULFATE I-123',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MCI/5ML',
        'options': [
          '10 MCI/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZILSARTAN MEDOXOMIL/CHLORTHALIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG-25MG',
        'options': [
          '40 MG-25MG',
          '40-12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVETIRACETAM IN SODIUM CHLORIDE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1000MG/100',
        'options': [
          '1000MG/100',
          '1500MG/100',
          '500MG/0.1L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AXITINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MVI, ADULT NO.4 WITH VIT K',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200-150/10',
        'options': [
          '200-150/10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INGENOL MEBUTATE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '0.015 %',
        'options': [
          '0.015 %',
          '0.05 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EXENATIDE MICROSPHERES',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '2 MG',
        'options': [
          '2 MG',
          '2MG/0.65ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VISMODEGIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IVACAFTOR',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '50 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LINAGLIPTIN/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.5-1000MG',
        'options': [
          '2.5-1000MG',
          '2.5-850 MG',
          '5MG-1000MG',
          '2.5-500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL WITHOUT IRON/FOLIC ACID/CALCIUM CARB/PYRIDOXINE/B12',
    'types': [
      {
        'route': 'ORAL',
        'default': '1-200-75',
        'options': [
          '1-200-75'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KETOROLAC TROMETHAMINE/PF',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.45 %',
        'options': [
          '0.45 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MVI, PEDI NO.2 WITH VIT K',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400-200',
        'options': [
          '400-200'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEGINESATIDE',
    'types': [
      {
        'route': 'INJECTION',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TALIGLUCERASE ALFA',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 UNIT',
        'options': [
          '200 UNIT'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AZELASTINE HCL/FLUTICASONE PROPIONATE',
    'types': [
      {
        'route': 'NASAL',
        'default': '137-50 MCG',
        'options': [
          '137-50 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OPIUM TINCTURE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG/ML',
        'options': [
          '10 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLORBETAPIR F-18',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 MCI',
        'options': [
          '10 MCI'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HAEMOPHILUS B CONJUGATE VACCINE-TETANUS TOXOID(15MOS-4YR)/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '10 MCG/0.5',
        'options': [
          '10 MCG/0.5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM#103/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '27 MG-1 MG',
        'options': [
          '27 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CHOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '250 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DROSPIRENONE/ESTRADIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG-1MG',
        'options': [
          '0.5 MG-1MG',
          '0.25-0.5MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROCODONE BITARTRATE/HOMATROPINE METHYLBROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-1.5MG',
        'options': [
          '5 MG-1.5MG',
          '5-1.5 MG/5'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARFILZOMIB',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '60 MG',
        'options': [
          '60 MG',
          '30 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENTERMINE HCL/TOPIRAMATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG-92MG',
        'options': [
          '15 MG-92MG',
          '3.75-23 MG',
          '11.25-69MG',
          '7.5MG-46MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIRABEGRON',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN/DEXAMETHASONE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.3 %-0.1%',
        'options': [
          '0.3 %-0.1%',
          '0.3%-0.05%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ACLIDINIUM BROMIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '400 MCG',
        'options': [
          '400 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NAFCILLIN IN DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2 G/100 ML',
        'options': [
          '2 G/100 ML',
          '1 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VINCRISTINE SULFATE LIPOSOMAL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': 'FNL 5MG/31',
        'options': [
          'FNL 5MG/31'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELVITEGRAVIR/COBICISTAT/EMTRICITABINE/TENOFOVIR DISOPROXIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-200 MG',
        'options': [
          '150-200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ENZALUTAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LINACLOTIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '145 MCG',
        'options': [
          '145 MCG',
          '290 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BOSUTINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '500 MG',
        'options': [
          '500 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ICOSAPENT ETHYL',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 G',
        'options': [
          '1 G',
          '0.5 GRAM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TERIFLUNOMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '14 MG',
        'options': [
          '14 MG',
          '7 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LUCINACTANT',
    'types': [
      {
        'route': 'INHALATION',
        'default': '34 MG/ML',
        'options': [
          '34 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PERAMPANEL',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '8 MG',
          '2 MG-4 MG',
          '12 MG',
          '4 MG',
          '0.5 MG/ML',
          '6 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MAGNESIUM SULFATE IN STERILE WATER',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '4 G/100 ML',
        'options': [
          '4 G/100 ML',
          '4 G/50 ML',
          '20 G/500ML',
          '40G/1000ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'REGORAFENIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOFACITINIB CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '11 MG',
        'options': [
          '11 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CABOZANTINIB S-MALATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '140 MG/DAY',
        'options': [
          '140 MG/DAY',
          '40 MG',
          '100 MG/DAY',
          '60 MG',
          '60 MG/DAY',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM #72/IRON,CARBONYL/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PONATINIB HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG',
        'options': [
          '15 MG',
          '45 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PASIREOTIDE DIASPARTATE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '0.6 MG/ML',
        'options': [
          '0.6 MG/ML',
          '0.9 MG/ML',
          '0.3 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOMITAPIDE MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '30 MG',
          '10 MG',
          '20 MG',
          '60 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LOXAPINE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TEDUGLUTIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '5 MG',
        'options': [
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BEDAQUILINE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CROFELEMER',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEUPROLIDE ACETATE/NORETHINDRONE ACETATE',
    'types': [
      {
        'route': 'MISCELLANEOUS',
        'default': '3.75MG-5MG',
        'options': [
          '3.75MG-5MG',
          '11.25-5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALOGLIPTIN BENZOATE/PIOGLITAZONE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-15 MG',
        'options': [
          '12.5-15 MG',
          '25 MG-30MG',
          '12.5-45 MG',
          '25 MG-45MG',
          '12.5-30 MG',
          '25 MG-15MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALOGLIPTIN BENZOATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '6.25 MG',
        'options': [
          '6.25 MG',
          '12.5 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALOGLIPTIN BENZOATE/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-1000',
        'options': [
          '12.5-1000',
          '12.5-500MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYCEROL PHENYLBUTYRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1.1GRAM/ML',
        'options': [
          '1.1GRAM/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POMALIDOMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG',
          '3 MG',
          '2 MG',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'POLYETHYLENE GLYCOL 3350/BOWEL PREP #2,TWO PART PREP',
    'types': [
      {
        'route': 'ORAL',
        'default': '210G-17.5G',
        'options': [
          '210G-17.5G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MIPOMERSEN SODIUM',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '200 MG/ML',
        'options': [
          '200 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ADO-TRASTUZUMAB EMTANSINE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '160 MG',
        'options': [
          '160 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OSPEMIFENE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAPAGLIFLOZIN PROPANEDIOL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DIMETHYL FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '120-240 MG',
        'options': [
          '120-240 MG',
          '120 MG',
          '240 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CANAGLIFLOZIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESVENLAFAXINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DEXMEDETOMIDINE HCL IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '80MCG/20ML',
        'options': [
          '80MCG/20ML',
          '400MCG/100',
          '200 MCG/50'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIRFENIDONE',
    'types': [
      {
        'route': 'ORAL',
        'default': '267 MG',
        'options': [
          '267 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BRINZOLAMIDE/BRIMONIDINE TARTRATE',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '1 %-0.2 %',
        'options': [
          '1 %-0.2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EZETIMIBE/ATORVASTATIN CALCIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-10MG',
        'options': [
          '10 MG-10MG',
          '10 MG-40MG',
          '10 MG-20MG',
          '10 MG-80MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUTICASONE FUROATE/VILANTEROL TRIFENATATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '200-25 MCG',
        'options': [
          '200-25 MCG',
          '100-25MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RADIUM-223 DICHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1100KBQ/ML',
        'options': [
          '1100KBQ/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DABRAFENIB MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRAMETINIB DIMETHYL SULFOXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.5 MG',
        'options': [
          '0.5 MG',
          '2 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LORCASERIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AFATINIB DIMALEATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '20 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESOMEPRAZOLE STRONTIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '49.3 MG',
        'options': [
          '49.3 MG',
          '24.65 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DOLUTEGRAVIR SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '25 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITS WITH CALCIUM#118/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '29 MG-1 MG',
        'options': [
          '29 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMINS COMB NO.119/IRON FUMARATE/FOLIC ACID/DSS',
    'types': [
      {
        'route': 'ORAL',
        'default': '29-1-25 MG',
        'options': [
          '29-1-25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEVOMILNACIPRAN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '40 MG',
        'options': [
          '40 MG',
          '80 MG',
          '20 MG',
          '20-40MG',
          '120 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VORTIOXETINE HYDROBROMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIOCIGUAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1.5 MG',
          '2.5 MG',
          '0.5 MG',
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MACITENTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'METHOTREXATE/PF',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '20MG/0.4ML',
        'options': [
          '20MG/0.4ML',
          '22.5/0.45',
          '10MG/0.2ML',
          '10MG/0.4ML',
          '17.5MG/0.4',
          '12.5/0.25',
          '30MG/0.6ML',
          '17.5/0.35',
          '7.5MG/0.15',
          '15MG/0.4ML',
          '15MG/0.3ML',
          '25MG/0.4ML',
          '7.5 MG/0.4',
          '27.5/0.55',
          '12.5MG/0.4',
          '25MG/0.5ML',
          '22.5MG/0.4'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DESVENLAFAXINE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DICLOFENAC SUBMICRONIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '35 MG',
        'options': [
          '35 MG',
          '18 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IBRUTINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '140 MG',
        'options': [
          '140 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LULICONAZOLE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '1 %',
        'options': [
          '1 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SIMEPREVIR SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIXISENATIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '20 MCG/0.2',
        'options': [
          '20 MCG/0.2',
          '10-20 (1)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SOFOSBUVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AVANAFIL',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '50 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CIPROFLOXACIN HCL/FLUOCINOLONE ACETONIDE',
    'types': [
      {
        'route': 'OTIC',
        'default': '0.3-0.025%',
        'options': [
          '0.3-0.025%'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TREPROSTINIL DIOLAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.125 MG',
        'options': [
          '0.125 MG',
          '1 MG',
          '2.5 MG',
          '0.25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELVITEGRAVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '85 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN DEGLUDEC',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100/ML (3)',
        'options': [
          '100/ML (3)',
          '200/ML (3)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UMECLIDINIUM BROMIDE/VILANTEROL TRIFENATATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '62.5-25MCG',
        'options': [
          '62.5-25MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ESTROGENS, CONJUGATED/BAZEDOXIFENE ACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.45-20 MG',
        'options': [
          '0.45-20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUCROFERRIC OXYHYDROXIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '500MG IRON',
        'options': [
          '500MG IRON'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TASIMELTEON',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DROXIDOPA',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG',
          '300 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'APREMILAST',
    'types': [
      {
        'route': 'ORAL',
        'default': '30 MG',
        'options': [
          '30 MG',
          '10-20-30MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLODATEROL HCL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '2.5 MCG',
        'options': [
          '2.5 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VITAMIN B COMPLEX AND VITAMIN C NO.20/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '1 MG',
        'options': [
          '1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COBICISTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDACATEROL MALEATE/GLYCOPYRROLATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '27.5-15.6',
        'options': [
          '27.5-15.6'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CERITINIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'UMECLIDINIUM BROMIDE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '62.5 MCG',
        'options': [
          '62.5 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VORAPAXAR SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.08 MG',
        'options': [
          '2.08 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PEDIATRIC MULTIVITAMIN COMBO NO.75/FLUORIDE/FERROUS SULFATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '0.25-10/ML',
        'options': [
          '0.25-10/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DALBAVANCIN HCL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHENYLEPHRINE HCL/KETOROLAC TROMETHAMINE',
    'types': [
      {
        'route': 'INTRAOCULAR',
        'default': '1 %-0.3 %',
        'options': [
          '1 %-0.3 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EFINACONAZOLE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DAPAGLIFLOZIN PROPANEDIOL/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '5MG-1000MG',
        'options': [
          '5MG-1000MG',
          '5 MG-500MG',
          '10MG-500MG',
          '10-1000 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TEDIZOLID PHOSPHATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMPAGLIFLOZIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BELINOSTAT',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 MG',
        'options': [
          '500 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CANAGLIFLOZIN/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '50-1000 MG',
        'options': [
          '50-1000 MG',
          '150-500 MG',
          '50MG-500MG',
          '150-1000MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IDELALISIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SUVOREXANT',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '15 MG',
          '20 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELIGLUSTAT TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '84 MG',
        'options': [
          '84 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TAVABOROLE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ABACAVIR SULFATE/DOLUTEGRAVIR SODIUM/LAMIVUDINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '600-50-300',
        'options': [
          '600-50-300'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ORITAVANCIN DIPHOSPHATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400 MG',
        'options': [
          '400 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DACLATASVIR DIHYDROCHLORIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '90 MG',
        'options': [
          '90 MG',
          '30 MG',
          '60 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERRIC CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '210MG IRON',
        'options': [
          '210MG IRON'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALTREXONE HCL/BUPROPION HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '8 MG-90 MG',
        'options': [
          '8 MG-90 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LEDIPASVIR/SOFOSBUVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '90MG-400MG',
        'options': [
          '90MG-400MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NETUPITANT/PALONOSETRON HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-0.5 MG',
        'options': [
          '300-0.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NINTEDANIB ESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'DARUNAVIR ETHANOLATE/COBICISTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '800-150 MG',
        'options': [
          '800-150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TOBRAMYCIN/NEBULIZER',
    'types': [
      {
        'route': 'INHALATION',
        'default': '300 MG/5ML',
        'options': [
          '300 MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PASIREOTIDE PAMOATE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '40 MG',
        'options': [
          '40 MG',
          '60 MG',
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTOLOZANE SULFATE/TAZOBACTAM SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1.5 G',
        'options': [
          '1.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OLAPARIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMBITASVIR/PARITAPREVIR/RITONAVIR/DASABUVIR SODIUM',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-75-50',
        'options': [
          '12.5-75-50',
          '8.33-50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ANTIHEMOPHILIC FACTOR (FVIII) RECOMB,FULL LENGTH (ALB-FREE)',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '500 (+/-)',
        'options': [
          '500 (+/-)',
          '3000 (+/-)',
          '250 (+/-)',
          '1000 (+/-)',
          '2000 (+/-)',
          '1500 (+/-)'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EDOXABAN TOSYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '60 MG',
        'options': [
          '60 MG',
          '30 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NALOXEGOL OXALATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '12.5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ATAZANAVIR SULFATE/COBICISTAT',
    'types': [
      {
        'route': 'ORAL',
        'default': '300-150 MG',
        'options': [
          '300-150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMPAGLIFLOZIN/LINAGLIPTIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG-5 MG',
        'options': [
          '10 MG-5 MG',
          '25 MG-5 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PALBOCICLIB',
    'types': [
      {
        'route': 'ORAL',
        'default': '125 MG',
        'options': [
          '125 MG',
          '100 MG',
          '75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OMBITASVIR/PARITAPREVIR/RITONAVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-75 MG',
        'options': [
          '12.5-75 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LENVATINIB MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '24 MG/DAY',
        'options': [
          '24 MG/DAY',
          '14 MG/DAY',
          '18 MG/DAY',
          '8 MG/DAY',
          '10 MG/DAY',
          '20 MG/DAY'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFTAZIDIME/AVIBACTAM SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '2.5 G',
        'options': [
          '2.5 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PANOBINOSTAT LACTATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 MG',
        'options': [
          '10 MG',
          '20 MG',
          '15 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMMUNE GLOBULIN,GAMM(IGG)/GLYCINE/GLUCOSE/IGA 0 TO 50 MCG/ML',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 G',
        'options': [
          '10 G',
          '5 G',
          '2.5 G',
          '0.5 GRAM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMMUNE GLOBULIN,GAMM(IGG)/GLYCINE/IGA GREATER THAN 50 MCG/ML',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '10 %',
        'options': [
          '10 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ISAVUCONAZONIUM SULFATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '372 MG',
        'options': [
          '372 MG'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '186 MG',
        'options': [
          '186 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMMUNE GLOBULIN,GAMMA(IGG)/GLYCINE',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '15 %-18 %',
        'options': [
          '15 %-18 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IMMUNE GLOBULIN,GAMM(IGG)/SUCROSE/IGA GREATER THAN 50 MCG/ML',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '3 G',
        'options': [
          '3 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN DEGLUDEC/LIRAGLUTIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100-3.6/ML',
        'options': [
          '100-3.6/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MEMANTINE HCL/DONEPEZIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '14MG-10MG',
        'options': [
          '14MG-10MG',
          '7-10/14-10',
          '28 MG-10MG',
          '21 MG-10MG',
          '7 MG-10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INDOMETHACIN, SUBMICRONIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TIOTROPIUM BROMIDE/OLODATEROL HCL',
    'types': [
      {
        'route': 'INHALATION',
        'default': '2.5-2.5MCG',
        'options': [
          '2.5-2.5MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMPAGLIFLOZIN/METFORMIN HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '12.5-500MG',
        'options': [
          '12.5-500MG',
          '5MG-1000MG',
          '5 MG-500MG',
          '12.5-1000'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CANGRELOR TETRASODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LINEZOLID IN 0.9 % SODIUM CHLORIDE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '600MG/300',
        'options': [
          '600MG/300'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LUMACAFTOR/IVACAFTOR',
    'types': [
      {
        'route': 'ORAL',
        'default': '100-125 MG',
        'options': [
          '100-125 MG',
          '200-125MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SACUBITRIL/VALSARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '24 MG-26MG',
        'options': [
          '24 MG-26MG',
          '97MG-103MG',
          '49 MG-51MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BREXPIPRAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2 MG',
        'options': [
          '2 MG',
          '1 MG',
          '4 MG',
          '0.5 MG',
          '0.25 MG',
          '3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MOXIFLOXACIN HCL IN SODIUM ACETATE AND SULFATE,WATER,ISO-OSM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '400MG/.25L',
        'options': [
          '400MG/.25L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SONIDEGIB PHOSPHATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELUXADOLINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '75 MG',
        'options': [
          '75 MG',
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLIBANSERIN',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ROLAPITANT HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '90 MG',
        'options': [
          '90 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FERRIC PYROPHOSPHATE CITRATE',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '272MG/50ML',
        'options': [
          '272MG/50ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'URIDINE TRIACETATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '10 G',
        'options': [
          '10 G',
          '2 G'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'FLUTEMETAMOL F-18',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '5 MCI',
        'options': [
          '5 MCI'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TRIFLURIDINE/TIPIRACIL HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '20-8.19 MG',
        'options': [
          '20-8.19 MG',
          '15-6.14 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CARIPRAZINE HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '6 MG',
        'options': [
          '6 MG',
          '1.5 MG',
          '4.5 MG',
          '3 MG',
          '1.5 MG-3MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ARIPIPRAZOLE LAUROXIL',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '441 MG/1.6',
        'options': [
          '441 MG/1.6',
          '882 MG/3.2',
          '662 MG/2.4'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IRINOTECAN LIPOSOMAL',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '43 MG/10ML',
        'options': [
          '43 MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PRENATAL VITAMIN WITH CA NO.127/FERROUS FUMARATE/FOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 MG-1 MG',
        'options': [
          '15 MG-1 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PATIROMER CALCIUM SORBITEX',
    'types': [
      {
        'route': 'ORAL',
        'default': '8.4 GRAM',
        'options': [
          '8.4 GRAM',
          '25.2 GRAM',
          '16.8 GRAM'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELVITEGRAVIR/COBICISTAT/EMTRICITABINE/TENOFOVIR ALAFENAMIDE',
    'types': [
      {
        'route': 'ORAL',
        'default': '150-200-10',
        'options': [
          '150-200-10'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'COBIMETINIB FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '20 MG',
        'options': [
          '20 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OSIMERTINIB MESYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '80 MG',
        'options': [
          '80 MG',
          '40 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'IXAZOMIB CITRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '2.3 MG',
        'options': [
          '2.3 MG',
          '3 MG',
          '4 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MELOXICAM, SUBMICRONIZED',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ALECTINIB HCL',
    'types': [
      {
        'route': 'ORAL',
        'default': '150 MG',
        'options': [
          '150 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SELEXIPAG',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MCG',
        'options': [
          '200 MCG',
          '800 MCG',
          '1000 MCG',
          '1400 MCG',
          '1200 MCG',
          '1600 MCG',
          '400 MCG',
          '200-800MCG',
          '600 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LESINURAD',
    'types': [
      {
        'route': 'ORAL',
        'default': '200 MG',
        'options': [
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHOSPHATE HEMODIALYSIS SOLUTION NO.2 WITHOUT DEXTROSE',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '4-2.5-1/L',
        'options': [
          '4-2.5-1/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PHOSPHATE HEMODIALYSIS SOLUTION NO.3 WITHOUT CA AND DEXTROSE',
    'types': [
      {
        'route': 'HEMODIALYSIS',
        'default': '4-1.5-1/L',
        'options': [
          '4-1.5-1/L'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CEFOTAXIME SODIUM/DEXTROSE, ISO-OSMOTIC',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '1 G/50 ML',
        'options': [
          '1 G/50 ML',
          '2 G/50 ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ELBASVIR/GRAZOPREVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '50MG-100MG',
        'options': [
          '50MG-100MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'BRIVARACETAM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG/5 ML',
        'options': [
          '50 MG/5 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG',
          '50 MG',
          '100 MG',
          '10 MG/ML',
          '75 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMTRICITABINE/RILPIVIRINE HCL/TENOFOVIR ALAFENAMIDE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200-25-25',
        'options': [
          '200-25-25'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'EMTRICITABINE/TENOFOVIR ALAFENAMIDE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '200MG-25MG',
        'options': [
          '200MG-25MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'VENETOCLAX',
    'types': [
      {
        'route': 'ORAL',
        'default': '100 MG',
        'options': [
          '100 MG',
          '10 MG',
          '50 MG',
          '10-50-100'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'GLYCOPYRROLATE/FORMOTEROL FUMARATE',
    'types': [
      {
        'route': 'INHALATION',
        'default': '9-4.8 MCG',
        'options': [
          '9-4.8 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'PIMAVANSERIN TARTRATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '17 MG',
        'options': [
          '17 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OXYCODONE MYRISTATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '18 MG',
        'options': [
          '18 MG',
          '9 MG',
          '27 MG',
          '13.5 MG',
          '36 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'OBETICHOLIC ACID',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG',
        'options': [
          '5 MG',
          '10 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'KIT FOR THE PREPARATION OF GA-68/DOTATATE',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '40 MCG',
        'options': [
          '40 MCG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NEBIVOLOL HCL/VALSARTAN',
    'types': [
      {
        'route': 'ORAL',
        'default': '5 MG-80 MG',
        'options': [
          '5 MG-80 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SOFOSBUVIR/VELPATASVIR',
    'types': [
      {
        'route': 'ORAL',
        'default': '400-100 MG',
        'options': [
          '400-100 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'LIFITEGRAST',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '5 %',
        'options': [
          '5 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'SODIUM POLYSTYRENE SULFONATE/SORBITOL SOLUTION',
    'types': [
      {
        'route': 'ORAL',
        'default': '15 G/60 ML',
        'options': [
          '15 G/60 ML'
        ],
        'quantity': '',
        'directions': []
      },
      {
        'route': 'RECTAL',
        'default': '30 G/120ML',
        'options': [
          '30 G/120ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RIBOFLAVIN 5-PHOSPHATE SODIUM IN 20 % DEXTRAN',
    'types': [
      {
        'route': 'OPHTHALMIC',
        'default': '0.146 %',
        'options': [
          '0.146 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'AMPHETAMINE',
    'types': [
      {
        'route': 'ORAL',
        'default': '9.4 MG',
        'options': [
          '9.4 MG',
          '15.7 MG',
          '3.1 MG',
          '2.5 MG/ML',
          '12.5 MG',
          '18.8 MG',
          '6.3 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ETEPLIRSEN',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '100 MG/2ML',
        'options': [
          '100 MG/2ML',
          '500MG/10ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'ASPIRIN/OMEPRAZOLE',
    'types': [
      {
        'route': 'ORAL',
        'default': '81 MG-40MG',
        'options': [
          '81 MG-40MG',
          '325MG-40MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'MELPHALAN HCL/BETADEX SULFOBUTYL ETHER SODIUM',
    'types': [
      {
        'route': 'INTRAVENOUS',
        'default': '50 MG',
        'options': [
          '50 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'TENOFOVIR ALAFENAMIDE FUMARATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '25 MG',
        'options': [
          '25 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'INSULIN GLARGINE,HUMAN RECOMBINANT ANALOG/LIXISENATIDE',
    'types': [
      {
        'route': 'SUBCUTANEOUS',
        'default': '100-33/ML',
        'options': [
          '100-33/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'HYDROXYPROGESTERONE CAPROATE/PF',
    'types': [
      {
        'route': 'INTRAMUSCULAR',
        'default': '250 MG/ML',
        'options': [
          '250 MG/ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'CRISABOROLE',
    'types': [
      {
        'route': 'TOPICAL',
        'default': '2 %',
        'options': [
          '2 %'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'RUCAPARIB CAMSYLATE',
    'types': [
      {
        'route': 'ORAL',
        'default': '300 MG',
        'options': [
          '300 MG',
          '200 MG'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  },
  {
    'drug_name': 'NUSINERSEN SODIUM/PF',
    'types': [
      {
        'route': 'INTRATHECAL',
        'default': '12MG/5ML',
        'options': [
          '12MG/5ML'
        ],
        'quantity': '',
        'directions': []
      }
    ]
  }
];
