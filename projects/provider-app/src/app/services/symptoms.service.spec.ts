import { inject } from '@angular/core/testing';
import { ErrorHandlersTestModule } from '@pa-tests/error-handlers-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { of as ObservableOf } from 'rxjs';
import { ServicedataService } from 'services/index';
import { cancerList, symptomGroupsGeneral } from 'static/service.response';
import {
  testAllergy,
  testFamilyHistory,
  testMedicationAllergy,
  testMedications,
  testPatientMedicalHistory,
  testSurgicalHistory,
  testVisitData
} from 'static/test.constants';
import { DateTime } from 'utils/dateTime';
import { SymptomsService } from './symptoms.service';
import { TreatmentsService } from '../treatments/treatments.service';
import { defaultGroupedSymptom } from '../components/app/workspace/patientspace/symptoms/symptoms.interface';


describe('SymptomsService', generateSpecs({
    imports: [
      ErrorHandlersTestModule
    ],
    providers: [
      {
        provide: ServicedataService, useValue: jasmine.createSpyObj('ServicedataService', [
          'getSymptoms'
        ])
      },
      DateTime,
      SymptomsService,
      {
        provide: TreatmentsService, useValue: jasmine.createSpyObj('TreatmentsService', ['dispatch'])
      }
    ]
  },
  () => {
    let service: SymptomsService;
    let serviceDataServiceSpy: jasmine.SpyObj<ServicedataService>;
    const patient = testVisitData;

    const symptomsOperations = (patientData, symptom, source, operation, section?): [number, number, number, number, any] => {
      const triageCount = patientData.triage.length;
      const historyItemsCount = patientData.patientHealthHistory.historyItem.length;
      let patientAfter = {
        triage: [],
        patientHealthHistory: {historyItem: []}
      };
      switch (operation) {
        case 'add':
          if (source === 'HPI') symptom.symptomID = symptom.symptomId;
          switch (section) {
            case 'Medications':
            case 'Drug Allergies':
              symptom = symptom.historyItem;
              break;
            case 'Non Drug Allergies':
              symptom.listValue = symptom.historyItem;
              break;
          }
          patientAfter = service.addSymptom(patientData, symptom, true, section);
          break;
        case 'remove':
          patientAfter = service.removeSymptom(patientData, symptom, source);
          break;
      }
      const triageCountAfter = patientAfter.triage.length;
      const historyItemsCountAfter = patientAfter.patientHealthHistory.historyItem.length;
      return [triageCountAfter, triageCount, historyItemsCountAfter, historyItemsCount, patientAfter];
    };

    const testOperations = (testHistoryItem, section?, cb?) => {
      let patientBefore = JSON.parse(JSON.stringify(patient));
      let [triageCountAfter, triageCount, historyItemsCountAfter, historyItemsCount, patientAfter] = symptomsOperations(patient, testHistoryItem, 'PD', 'remove');
      expect(triageCountAfter).toEqual(triageCount - 1);
      expect(historyItemsCountAfter).toEqual(historyItemsCount - 1);
      if (cb) cb(patientBefore, patientAfter);
      patientBefore = JSON.parse(JSON.stringify(patientAfter));
      [triageCountAfter, triageCount, historyItemsCountAfter, historyItemsCount] = symptomsOperations(patientAfter, testHistoryItem, 'PD', 'add', section);
      expect(triageCountAfter).toEqual(triageCount + 1);
      expect(historyItemsCountAfter).toEqual(historyItemsCount + 1);
      if (cb) cb(patientBefore, patientAfter);
      let testTriage;
      switch (section) {
        case 'Medications':
        case 'Drug Allergies':
        case 'Non Drug Allergies':
          testTriage = patient.triage.find(item => item.symptomId === testHistoryItem.symptomID && item.values && item.values[0] && item.values[0][0] === testHistoryItem.historyItem);
          break;
        default:
          testTriage = patient.triage.find(item => item.symptomId === testHistoryItem.symptomID);
          break;
      }
      [triageCountAfter, triageCount, historyItemsCountAfter, historyItemsCount, patientAfter] = symptomsOperations(patient, testTriage, 'HPI', 'remove');
      expect(triageCountAfter).toEqual(triageCount - 1);
      expect(historyItemsCountAfter).toEqual(historyItemsCount - 1);
      [triageCountAfter, triageCount, historyItemsCountAfter, historyItemsCount] = symptomsOperations(patientAfter, testTriage, 'HPI', 'add');
      expect(triageCountAfter).toEqual(triageCount + 1);
      expect(historyItemsCountAfter).toEqual(historyItemsCount + 1);
    };

    beforeEach(inject([SymptomsService, ServicedataService],
      (symptomsService: SymptomsService, serviceDataServiceInjected: jasmine.SpyObj<ServicedataService>) => {
      service = symptomsService;
      serviceDataServiceSpy = serviceDataServiceInjected;
    }));

    beforeEach(() => {
      // todo: @types/jasmine update error
      // @ts-ignore
      serviceDataServiceSpy.getSymptoms.and.returnValue(ObservableOf([symptomGroupsGeneral, cancerList]));
      service.getSymptoms();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should add and delete Personal History symptom', () => {
      testOperations(testPatientMedicalHistory[0]);
    });

    it('should add and delete Family History symptom', () => {
      testOperations(testFamilyHistory[0]);
    });

    it('should add and delete Surgical History symptom', () => {
      testOperations(testSurgicalHistory[0]);
    });

    it('should add and delete medication', () => {
      testOperations(testMedications[0], 'Medications');
    });

    it('should add and delete Drug Allergy', () => {
      testOperations(testMedicationAllergy[0], 'Drug Allergies');
    });

    it('should add and delete Non Drug Allergy', () => {
      testOperations(testAllergy[0], 'Non Drug Allergies');
    });

    it('should load grouped symptoms', () => {
      const part = {groupedSymptom: defaultGroupedSymptom, };
      let symptom: any = {name: 'scale test', listValue: 1, symptomName: 'name'};
      service.loadGroupedSymptom(part, symptom);
      expect(part.groupedSymptom['scale']).toBeDefined();

      symptom = {name: 'scale test 2', listValue: '2'};
      service.loadGroupedSymptom(part, symptom);
      expect(part.groupedSymptom['scale'].length).toEqual(2);
      service.loadGroupedSymptom(part, symptom);
      expect(part.groupedSymptom['scale'].length).toEqual(2);

      symptom = {name: 'other test', symptomName: 'name', listValue: 'other'};
      service.loadGroupedSymptom(part, symptom);
      expect(part['other'].length).toEqual(1);

      symptom = {name: 'other test 2', symptomName: 'name 2', listValue: 'other 2'};
      service.loadGroupedSymptom(part, symptom);
      expect(part.groupedSymptom['scale'].length).toEqual(2);
      service.loadGroupedSymptom(part, symptom);
      expect(part.groupedSymptom['scale'].length).toEqual(2);

      symptom = {name: 'movement test', symptomName: 'movement val', listValue: 'movement test'};
      service.loadGroupedSymptom(part, symptom);
      expect(part.groupedSymptom['movement']).toEqual(true);
    });
  }
));
