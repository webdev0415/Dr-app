import { async, inject, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { of as ObservableOf } from 'rxjs';

import { DataService, NavigationService, StateService } from 'services';
import { testPatientData } from 'static/test.constants';
import { DialogSubscribesService } from '../services/dialogsubscribes.service';
import { SymptomsService } from '../services/symptoms.service';

import { GoToPatientGuard } from './gotopatient.guard';
import { UserService } from '../user/user.service';
import { UserRolesEnum } from '../common/enums/user-roles.enum';
import { PatientListService } from '../patient-list/services/patient-list.service';


describe('GoToPatientGuard', generateSpecs({
    imports: [
      NavigationTestModule,
      NotificationsTestModule,
      DialogsTestModule,
      UserTestModule
    ],
    providers: [
      GoToPatientGuard,
      { provide: DataService, useValue: {} },
      { provide: DialogSubscribesService, useValue: jasmine.createSpyObj('DialogSubscribesService', [
        'openTheDisclaimerDialog'
        ])
      },
      { provide: SymptomsService, useValue: jasmine.createSpyObj('SymptomsService', [
          'getSymptoms'
        ])
      },
      PatientListService
    ]
  },
  () => {
    const route: Route = {};
    let guard: GoToPatientGuard;
    let stateService: StateService;
    let userService: UserService;
    let navigationService: jasmine.SpyObj<NavigationService>;

    beforeEach(inject([GoToPatientGuard], (goToPatientGuard: GoToPatientGuard) => {
      guard = goToPatientGuard;
      stateService = TestBed.get(StateService);
      userService = TestBed.get(UserService);
      navigationService = TestBed.get(NavigationService);
    }));

    it('should check canLoad no user', async(() => {
      spyOnProperty(stateService, 'patient').and.returnValue({getCurrent: () => ObservableOf(false)});
      const spy = spyOn(navigationService, 'navigateToPatients');
      guard.canLoad(route).subscribe(canload => {
        expect(canload).toBeFalsy();
        expect(spy).toHaveBeenCalled();
      });
    }));

    it('should check canLoad', (() => {
      spyOnProperty(stateService, 'patient').and.returnValue({
        getCurrent: () => ObservableOf(testPatientData),
        getLastViewOnly: (): boolean => true,
        getIsTheDisclaimerSuccess: () => ObservableOf(false)
      });
      // todo: @types/jasmine update error
      // @ts-ignore
      spyOn(userService, 'getUserRole').and.returnValue(UserRolesEnum.OFFICE_CLERK);
      const spy = spyOn(navigationService, 'navigate');
      expect(guard.canLoad(route)).toBeTruthy();
      expect(spy).not.toHaveBeenCalled();
    }));
  }
));
