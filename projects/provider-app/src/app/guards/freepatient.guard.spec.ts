import { inject, TestBed } from '@angular/core/testing';
import { generateSpecs } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { of as ObservableOf } from 'rxjs';
import { StateService } from 'services';
import { testPatientData } from 'static/test.constants';
import { SentryErrorHandler } from '../utils/sentryErrorHandler';

import { FreePatientGuard } from './freepatient.guard';
import { UserService } from '../user/user.service';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import createSpyObj = jasmine.createSpyObj;


describe('FreePatientGuard', generateSpecs({
    imports: [
      UserTestModule,
      NotificationsTestModule
    ],
    providers: [
      FreePatientGuard,
      { provide: SentryErrorHandler, useValue: createSpyObj<SentryErrorHandler>(['eraseErrorList']) }
    ],
  },
  () => {
    let guard: FreePatientGuard;
    let stateService: StateService;
    let userService: UserService;
    let spy: jasmine.Spy;

    beforeEach(inject([FreePatientGuard], (freePatientGuard: FreePatientGuard) => {
      guard = freePatientGuard;
      stateService = TestBed.get(StateService);
      userService = TestBed.get(UserService);
      spy = spyOnProperty(stateService, 'patient').and.returnValue({getCurrent: () => ObservableOf(false)});
    }));

    it('should check canLoad no user', () => {
      spyOnProperty(userService, 'getIsTheDisclaimerSuccess').and.returnValue(ObservableOf(false));
      spy.and.returnValue({
        getCurrent: () => ObservableOf(false)
      });
      guard.canLoad().subscribe(canload => {
        expect(canload).toBeTruthy();
        expect(spy).toHaveBeenCalled();
      });
    });

    it('should check canLoad not finalized and the disclaimer not success', () => {
      spyOnProperty(userService, 'getIsTheDisclaimerSuccess').and.returnValue(ObservableOf(false));
      spy.and.returnValue({
        getCurrent: () => ObservableOf(testPatientData), getUnassignEvent: () => ({
          emit: () => {
          }
        })
      });
      guard.canLoad().subscribe(canload => {
        expect(canload).toBeTruthy();
        expect(spy).toHaveBeenCalled();
      });
    });

    it('should check canLoad not finalized and the disclaimer success', () => {
      spyOnProperty(userService, 'getIsTheDisclaimerSuccess').and.returnValue(ObservableOf(true));
      spy.and.returnValue({
        getCurrent: () => ObservableOf(testPatientData), getUnassignEvent: () => ({
          emit: () => {
          }
        })
      });
      guard.canLoad().subscribe(canload => {
        expect(canload).toBeFalsy();
        expect(spy).toHaveBeenCalled();
      });
    });

    it('should check canLoad finalized', () => {
      spyOnProperty(userService, 'getIsTheDisclaimerSuccess').and.returnValue(ObservableOf(false));
      spy.and.returnValue({
        getCurrent: () => ObservableOf(testPatientData),
        getUnassignEvent: () => ({
          emit: () => {
          }
        })
      });
      guard.canLoad().subscribe(canload => {
        expect(canload).toBeTruthy();
        expect(spy).toHaveBeenCalled();
      });
    });
  }
));
