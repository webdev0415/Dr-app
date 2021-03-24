import { inject, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';

import { NavigationService } from 'services';

import { LoginGuard } from './login.guard';
import { UserService } from '../user/user.service';


describe('LoginGuard', generateSpecs({
    imports: [
      NavigationTestModule,
      UserTestModule
    ],
    providers: [
      LoginGuard
    ]
  },
  () => {
    let guard: LoginGuard;
    let userService: UserService;
    let navigationService: NavigationService;
    const r: Route = {};

    beforeEach(inject([LoginGuard], (loginGuard: LoginGuard) => {
      guard = loginGuard;
      userService = TestBed.get(UserService);
      navigationService = TestBed.get(NavigationService);
    }));

    it('should check canLoad not logged', () => {
      spyOnProperty(userService, 'isAuthenticated').and.returnValue(false);
      const spy = spyOn(navigationService, 'navigate');
      expect(guard.canLoad(r)).toBeFalsy();
      expect(spy).toHaveBeenCalled();
    });

    it('should check canLoad logged', () => {
      const spy = spyOnProperty(userService, 'isAuthenticated').and.returnValue(true);
      expect(guard.canLoad(r)).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  }
));
