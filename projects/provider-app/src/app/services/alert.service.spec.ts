import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { LazyService } from 'services/lazy.service';
import { AlertService } from './alert.service';
import { generateSpecs } from '@pa-tests/test-context';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { inject } from '@angular/core/testing';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';

describe('AlertService', generateSpecs({
    imports: [
      NetworkTestModule,
      NavigationTestModule,
      DialogsTestModule,
      StoreTestModule,
      NotificationsTestModule
    ],
    providers: [
      AlertService,
      LazyService
    ]
  },
  () => {
    let service: AlertService;

    beforeEach(inject([AlertService], (alertService: AlertService) => {
      service = alertService;
    }));

    it('should create', () => {
      expect(service).toBeTruthy();
    });
}));
