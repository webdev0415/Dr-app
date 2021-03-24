import { inject } from '@angular/core/testing';
import { ErrorHandlersTestModule } from '@pa-tests/error-handlers-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { of as ObservableOf } from 'rxjs';
import { testBodyParts, testSymptomGroups } from 'static/test.constants';
import { DateTime } from '../utils/dateTime';

import { ServicedataService } from './servicedata.service';
import { NodeSearchTypeEnum } from '../common/enums/node-search-type.enum';


describe('ServicedataService', generateSpecs({
    imports: [
      NetworkTestModule,
      ErrorHandlersTestModule
    ],
    providers: [
      ServicedataService,
      DateTime
    ]
  },
  () => {
    let serviceDataService: ServicedataService;

    beforeEach(inject([ServicedataService],
      (servicedataServiceInjected: ServicedataService) => {
      serviceDataService = servicedataServiceInjected;
    }));

    // it('should get observables', () => {
    //   expect(symptomsService.getParsedSymptoms()).toEqual(jasmine.any(Observable));
    //   expect(symptomsService.getTreatmentTypes()).toEqual(jasmine.any(Observable));
    // });
    //
    // it('should get values', () => {
    //   expect(symptomsService.getBodyParts()).toBeDefined();
    //   expect(symptomsService.getSymptomCategories()).toBeDefined();
    // });

    it('should get treatment types data', () => {
      const get = spyOn<any>(serviceDataService, 'show').and.returnValue(ObservableOf({}));
      serviceDataService.getTreatmentTypesData();
      expect(get).toHaveBeenCalled();

    });

    // it('should get source info data', () => {
    //   const get = spyOn<any>(serviceDataService, 'show').and.returnValue(ObservableOf({}));
    //   serviceDataService.getSourceInfoData('200');
    //   expect(get).toHaveBeenCalled();
    //   serviceDataService.getSourceInfoData('200');
    // });

    it('should get symptoms', () => {
      const get = spyOn<any>(serviceDataService, 'show').and.returnValue(ObservableOf(testSymptomGroups));
      serviceDataService.getSymptoms();
      expect(get).toHaveBeenCalled();
      serviceDataService.getSymptoms();
    });

    it('should get body parts data', () => {
      const get = spyOn<any>(serviceDataService, 'show').and.returnValue(ObservableOf(testBodyParts));
      serviceDataService.getBodyPartsData();
      expect(get).toHaveBeenCalled();
      serviceDataService.getBodyPartsData();
    });

    it('should do node search', () => {
      const get = spyOn<any>(serviceDataService, 'show').and.returnValue(ObservableOf({}));
      serviceDataService.nodeSearch('val', NodeSearchTypeEnum.STRING);
      expect(get).toHaveBeenCalled();
    });

    // it('should get empty', () => {
    //   const get = spyOn<any>(serviceDataService, 'show').and.returnValue(ObservableOf(false));
    //   serviceDataService.getTreatmentTypesData();
    //   serviceDataService.getSourceInfoData('200');
    //   serviceDataService.getSymptoms();
    //   serviceDataService.getBodyPartsData();
    //   expect(get).toHaveBeenCalled();
    // });

  }
));
