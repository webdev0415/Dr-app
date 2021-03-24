import { inject } from '@angular/core/testing';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { Observable, of } from 'rxjs';
import { DateTime } from 'utils/dateTime';
import { OrderStateEnum } from '../common/enums';
import { LabsService } from '../labs/services/labs.service';
import { KludgesService } from './kludges.service';
import { LazyService } from './lazy.service';
import { OtherdataService } from './otherdata.service';

import { PatientdataService } from './patientdata.service';
import { ServicedataService } from './servicedata.service';
import { ProceduresService } from '../procedures/procedures.service';
import { StateService } from './state.service';
import { TreatmentsService } from '../treatments/treatments.service';
import { MeasurementsService } from './measurements.service';
import { PatientDataFacadeService } from '../patient-core/patient-data-facade.service';


describe('PatientdataService', generateSpecs({
    imports: [
      StoreTestModule.withoutMock([StateService]),
      NetworkTestModule,
      NavigationTestModule,
      NotificationsTestModule,
      UserTestModule
    ],
    providers: [
      PatientdataService,
      DateTime,
      {
        provide: ServicedataService, useValue: {}
      },
      {
        provide: LazyService, useValue: {}
      },
      {
        provide: KludgesService, useValue: {}
      },
      {
        provide: OtherdataService, useValue: {}
      },
      {
        provide: LabsService, useValue: { getOrderedLabs: (...args) => of({ labsState: OrderStateEnum.NONE, measurementsState: OrderStateEnum.NONE }) }
      },
      {
        provide: MeasurementsService, useValue: {}
      },
      {
        provide: PatientDataFacadeService, useValue: {}
      },
      ProceduresService,
      TreatmentsService
    ]
  },
  () => {
    // const requestValue = ObservableOf({body: {results: []}, type: HttpEventType.Response});
    let patientDataService: PatientdataService;
    // let kludgeService: KludgesService;
    // let servicedataService: ServicedataService;
    // let labsService: LabsService;
    // let lazyService: LazyService;

    beforeEach(inject([PatientdataService, // KludgesService,
      // LabsService,
      // LazyService
    ], (service: PatientdataService, // kludgeProvider: KludgesService,
        // servicedataServiceProvider: ServicedataService,
        // labsProvider: LabsService,
        // lazyProvider: LazyService
    ) => {
      patientDataService = service;
      // kludgeService = kludgeProvider;
      // servicedataService = servicedataServiceProvider;
      // labsService = labsProvider;
      // lazyService = lazyProvider;
    }));

    it('should be created', () => {
      expect(patientDataService).toBeTruthy();
    });

    it('should get values', () => {
      expect(patientDataService.getPatient()).toEqual(jasmine.any(Observable));
      expect(patientDataService.getPatientVal()).toEqual(jasmine.any(Observable));
      expect(patientDataService.getPatientLastValue()).toBeDefined();
      expect(patientDataService.getHPISummary()).toEqual(jasmine.any(Observable));
    });

    // it('should check update no patient', () => {
    //   patientDataService.updatePatient({}).subscribe( value => {
    //     expect(value).toEqual(false);
    //   });
    // });

  // it('should get patient data', () => {
  //   spyOn(servicedataService, 'getParsedSymptoms').and.returnValue(ObservableOf(testParsedSymptoms));
  //   const patient = spyOn<any>(patientDataService, 'show').and.returnValue(requestValue);
  //   const kludge = spyOn(kludgeService, 'PatientDataKludge').and.returnValue(JSON.parse(JSON.stringify(testVisitData)));
  //   const labs = spyOn(labsService, 'getOrderedLabs').and.returnValue(ObservableOf({orderedLabs: [], orderedMeasurements: []}));
  //   const lazy = spyOn(lazyService, 'lazyLoadMeasurements').and.returnValue(ObservableOf({}).toPromise());
  //   patientDataService.getPatientData(123);
  //   expect(patient).toHaveBeenCalled();
  //   expect(kludge).toHaveBeenCalled();
  //   expect(labs).toHaveBeenCalled();
  //   expect(lazy).toHaveBeenCalled();
  // });

    // it('should cut data for pdf',  (() => {
    //   spyOn(servicedataService, 'getParsedSymptoms').and.returnValue(ObservableOf(testParsedSymptoms));
    //   spyOn<any>(patientDataService, 'show').and.returnValue(requestValue);
    //   spyOn(kludgeService, 'PatientDataKludge').and.returnValue(JSON.parse(JSON.stringify(testVisitData)));
    //   spyOn(labsService, 'getOrderedLabs').and.returnValue(ObservableOf({orderedLabs: [], orderedMeasurements: []}));
    //   patientDataService.getPatientData(123);
    //   expect(patientDataService.cutDataForPDF(true)).toBeDefined();
    //   expect(patientDataService.cutDataForPDF(false)).toBeDefined();
    // }));



    // it('should update TE', () => {
    //   spyOn(servicedataService, 'getParsedSymptoms').and.returnValue(ObservableOf(testParsedSymptoms));
    //   spyOn<any>(patientDataService, 'show').and.returnValue(ObservableOf({body: {results: []}, type: HttpEventType.Response}));
    //   spyOn(kludgeService, 'PatientDataKludge').and.returnValue(JSON.parse(JSON.stringify(testVisitData)));
    //   spyOn(labsService, 'getOrderedLabs').and.returnValue(ObservableOf({orderedLabs: [], orderedMeasurements: []}));
    //   patientDataService.getPatientData(123);
    //   patientDataService.updatePatient({treatmentEngine: {}}, true).subscribe( value => {
    //     expect(value).toEqual(true);
    //   });
    // });

    // it('should get temp notes', () => {
    //   spyOn(servicedataService, 'getParsedSymptoms').and.returnValue(ObservableOf(testParsedSymptoms));
    //   spyOn<any>(patientDataService, 'show').and.returnValue(requestValue);
    //   spyOn(kludgeService, 'PatientDataKludge').and.returnValue(JSON.parse(JSON.stringify(testVisitData)));
    //   spyOn(labsService, 'getOrderedLabs').and.returnValue(ObservableOf({orderedLabs: [], orderedMeasurements: []}));
    //   patientDataService.getPatientData(123);
    //   const request = spyOn<any>(patientDataService, 'send').and.returnValue([{body: {results: []}, type: HttpEventType.Response}]);
    //   patientDataService.tempNotes(123);
    //   expect(request).toHaveBeenCalled();
    // });

    // it('should finalize', () => {
    //   spyOn(servicedataService, 'getParsedSymptoms').and.returnValue(ObservableOf(testParsedSymptoms));
    //   spyOn<any>(patientDataService, 'show').and.returnValue(requestValue);
    //   spyOn(kludgeService, 'PatientDataKludge').and.returnValue(JSON.parse(JSON.stringify(testVisitData)));
    //   spyOn(labsService, 'getOrderedLabs').and.returnValue(ObservableOf({orderedLabs: [], orderedMeasurements: []}));
    //   patientDataService.getPatientData(123);
    //   const request = spyOn<any>(patientDataService, 'send').and.returnValue([{body: {results: []}, type: HttpEventType.Response}]);
    //   patientDataService.finalize(123);
    //   expect(request).toHaveBeenCalled();
    // });


  }
));
