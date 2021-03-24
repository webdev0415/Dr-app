import { SymptomsService } from '../services';
import { BusinessLab } from './business-lab.model';

describe('BusinessLab', () => {
  const symptomsService: jasmine.SpyObj<SymptomsService> = jasmine.createSpyObj(
    'SymptomsService',
    ['searchParsedSymptom', 'getSymptomCategory', 'getSymptomDescriptions']
  );
  let businessLab: BusinessLab;
  it('should create boolean type BusinessLab', () => {
    symptomsService.searchParsedSymptom.and.returnValue({
      'name': 'Pregnancy Test',
      'symptomID': 'SYMPT0003952',
      'multipleValues': 'TestResult',
      'criticality': 2,
      // todo: @types/jasmine update error
      // @ts-ignore
      'treatable': false,
      'question': 'SYMPT0003952: No question for lab',
      'antithesis': 0.02,
      'symptomsModel': {
        'bias': true,
        'dataStoreTypes': [
          'Importance',
          'Likelihood',
          'TestResult'
        ]
      },
      'updatedDate': 1547061194058,
      'displayOrder': 26,
      'displaySymptom': false,
      'snomedCodes': [],
      'displayDrApp': true,
      'genderGroup': 'F',
      'cardinality': false,
      'deGroups': [
        'DE-C-Labs'
      ],
      'symptomType': 'List',
      'timeType': 'STARTED',
      'isRange': false
    });
    // todo: @types/jasmine update error
    // @ts-ignore
    symptomsService.getSymptomCategory.and.returnValue('Microbiology');
    symptomsService.getSymptomDescriptions.and.returnValue([
      {
        'code': 'DS3207',
        'name': 'Positive',
        'm_antithesis': 0.01,
        'count': 0,
        'displayListValue': true
      },
      {
        'code': 'DS3208',
        'name': 'Negative',
        'm_antithesis': 0.01,
        'count': 0,
        'displayListValue': true
      }
    ]);
    businessLab = new BusinessLab('SYMPT0003952', symptomsService);
    expect(businessLab.type).toBe('boolean');
  });
});
