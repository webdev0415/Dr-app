import { inject } from '@angular/core/testing';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs } from '@pa-tests/test-context';

import { StorageService } from 'services/index';
import { IWCService } from './iwc.service';


describe('IWCService', generateSpecs({
    imports: [
      DialogsTestModule,
      UserTestModule
    ],
    providers: [
      IWCService
    ]
  },
  () => {
    let iwcService: IWCService;
    let storageService: StorageService;

    beforeEach(inject([IWCService, StorageService], (service: IWCService,
                                                     storageServiceProvider: StorageService) => {
      iwcService = service;
      storageService = storageServiceProvider;
    }));

    it('should be created', () => {
      expect(iwcService).toBeTruthy();
    });

    it('should test logout event', () => {
      storageService.local.setItem('logoutEmitter', String(new Date()));
      expect(iwcService).toBeTruthy();
    });
  }
));
