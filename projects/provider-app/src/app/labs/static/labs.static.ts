import { OrderStateEnum } from '../../common/enums';
import { Lab } from '../../common/interfaces/labs.interface';

export const staticLabs: Lab[] = [
  {
    name: 'Rapid Strep',
    ids: ['SYMPT0003951'],
    ordering: true,
    regular: true,
    negative: true,
    prefix: '',
    code: 'rapidStrep',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Pregnancy Test',
    ids: ['SYMPT0003952'],
    ordering: true,
    regular: true,
    prefix: '',
    code: 'pregnancy',
    normal: 'Not Pregnant',
    negative: true,
    state: OrderStateEnum.NONE
  },
  {
    name: 'Random Glucose',
    ids: ['SYMPT0003962'],
    ordering: true,
    regular: true,
    negative: true,
    prefix: '',
    code: 'randomGlucose',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Rapid Flu Test',
    ids: ['SYMPT0003954', 'SYMPT0003955'],
    ordering: true,
    negative: true,
    prefix: '',
    code: 'rapidFlu',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Rapid Flu Test (Influenza A)',
    ids: ['SYMPT0003954'],
    regular: true,
    negative: true,
    prefix: '',
    code: 'rapidFlu',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Rapid Flu Test (Influenza B)',
    ids: ['SYMPT0003955'],
    regular: true,
    negative: true,
    prefix: '',
    code: 'rapidFlu',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Rapid Mono Test',
    ids: ['SYMPT0003950'],
    ordering: true,
    regular: true,
    negative: true,
    prefix: '',
    code: 'monospot',
    state: OrderStateEnum.NONE
  },
  {
    name: 'HIV',
    ids: ['SYMPT0007587'],
    ordering: true,
    regular: true,
    negative: true,
    prefix: '',
    code: 'hiv',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Hemoccult',
    ids: ['SYMPT0003875'],
    ordering: true,
    regular: true,
    negative: true,
    prefix: '',
    code: 'hemOccult',
    state: OrderStateEnum.NONE
  },
  {
    name: 'VS Sense',
    ids: ['SYMPT0007622'],
    ordering: true,
    regular: true,
    negative: true,
    prefix: '',
    code: 'vsSense',
    state: OrderStateEnum.NONE
  },
  {
    name: 'WBC Esterase',
    ids: ['SYMPT0003364'],
    negative: true,
    urineTest: true,
    prefix: 'LEU',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Nitrite, Urine',
    ids: ['SYMPT0003363'],
    negative: true,
    urineTest: true,
    prefix: 'NIT',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Urobilinogen, Semi-Qn',
    ids: ['SYMPT0003362'],
    negative: true,
    urineTest: true,
    prefix: 'URO',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Protein',
    ids: ['SYMPT0003361'],
    negative: true,
    urineTest: true,
    prefix: 'PRO',
    state: OrderStateEnum.NONE
  },
  {
    name: 'pH',
    ids: ['SYMPT0003360'],
    negative: false,
    urineTest: true,
    numeric: true,
    prefix: 'pH',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Occult Blood',
    ids: ['SYMPT0003359'],
    negative: true,
    urineTest: true,
    prefix: 'BLO',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Specific Gravity',
    ids: ['SYMPT0003358'],
    negative: false,
    urineTest: true,
    numeric: true,
    prefix: 'SG',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Ketones',
    ids: ['SYMPT0003357'],
    negative: true,
    urineTest: true,
    prefix: 'KET',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Bilirubin',
    ids: ['SYMPT0003356'],
    negative: true,
    urineTest: true,
    prefix: 'BIL',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Urine Glucose',
    ids: ['SYMPT0003355'],
    negative: true,
    urineTest: true,
    prefix: 'GLU',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Color of Urine',
    ids: ['SYMPT0003353'],
    prefix: '',
    state: OrderStateEnum.NONE
  },
  {
    name: 'Urine Dip Stick',
    ids: [
      'SYMPT0003364',
      'SYMPT0003363',
      'SYMPT0003362',
      'SYMPT0003361',
      'SYMPT0003360',
      'SYMPT0003359',
      'SYMPT0003358',
      'SYMPT0003357',
      'SYMPT0003356',
      'SYMPT0003355',
      'SYMPT0003353'
    ],
    ordering: true,
    prefix: '',
    code: 'urineDipStick',
    state: OrderStateEnum.NONE
  }
];
