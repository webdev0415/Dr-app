import { inject, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { NavigationService } from 'services';

import { LogoutGuard } from './logout.guard';
import { UserService } from '../user/user.service';


describe('LogoutGuard', generateSpecs({
    imports: [
      NavigationTestModule,
      UserTestModule
    ],
    providers: [
      LogoutGuard
    ]
  },
  () => {
    let guard: LogoutGuard;
    let userService: UserService;
    let navigationService: NavigationService;
    const r: Route = {};

    beforeEach(inject([LogoutGuard], (logoutGuard: LogoutGuard) => {
      guard = logoutGuard;
      userService = TestBed.get(UserService);
      navigationService = TestBed.get(NavigationService);
    }));

    it('should ...', () => {
      expect(guard).toBeTruthy();
    });

    it('should check canLoad not logged', () => {
      spyOnProperty(userService, 'isAuthenticated').and.returnValue(true);
      const spy = spyOn(navigationService, 'navigate');
      expect(guard.canLoad(r)).toBeFalsy();
      expect(spy).toHaveBeenCalled();
    });

    it('should check canLoad logged', () => {
      const spy = spyOnProperty(userService, 'isAuthenticated').and.returnValue(false);
      expect(guard.canLoad(r)).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  }
));
