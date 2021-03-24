import { Component } from '@angular/core';
import { fakeAsync, inject, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { of as ObservableOf } from 'rxjs';
import { NavigationService } from './navigation.service';


@Component({
  selector: 'pa-stub-component',
  template: 'Stub Component'
})
class StubComponent {
}


describe('NavigationService', generateSpecs({
    imports: [
      RouterTestingModule.withRoutes([
        {path: '1', component: StubComponent},
        {path: '2', component: StubComponent},
        {path: 'patients', component: StubComponent},
      ]),
      NavigationTestModule.withoutMock()
    ],
    declarations: [
      StubComponent
    ]
  },
  () => {
    let navigationService: NavigationService;
    let router: Router;
    let spyNavigate: jasmine.Spy;

    beforeEach(inject([NavigationService, Router], (service: NavigationService, routerProvider: Router) => {
      navigationService = service;
      router = routerProvider;
      // todo: @types/jasmine update error
      // @ts-ignore
      spyNavigate = spyOn(router, 'navigate').and.returnValue(ObservableOf({}).toPromise());
    }));

    it('should be created', () => {
      expect(navigationService).toBeTruthy();
    });

    it('should get router state', () => {
      expect(navigationService.routeState).toBeDefined();
    });

    it('should get isPatientsLocation', () => {
      expect(navigationService.isPatientsLocation).toEqual(jasmine.any(Boolean));
    });

    it('should navigate', () => {
      navigationService.navigate('patient/123');
      expect(spyNavigate).toHaveBeenCalled();
    });

    it('should navigate by url', () => {
      // todo: @types/jasmine update error
      // @ts-ignore
      const spy = spyOn(router, 'navigateByUrl').and.returnValue(ObservableOf({}).toPromise());
      navigationService.navigateByUrl('patient/123');
      expect(spy).toHaveBeenCalled();
    });

    it('should navigate to patients', () => {
      navigationService.navigateToPatients(true);
      expect(spyNavigate).toHaveBeenCalled();
      navigationService.navigateToPatients(false);
      expect(spyNavigate).toHaveBeenCalled();
    });

    it('should exit patient route', () => {
      expect(navigationService.getExitPatientRoute()).toBeDefined();
    });

    it('should go back patients', fakeAsync(() => {
      navigationService.navigate('1');
      expect(spyNavigate).toHaveBeenCalled();
      tick();
      navigationService.goBack(true);
      tick();
      expect(navigationService).toBeTruthy();
    }));

    it('should go back any', fakeAsync(() => {
      navigationService.navigate('1');
      expect(spyNavigate).toHaveBeenCalled();
      tick();
      navigationService.navigate('2');
      expect(spyNavigate).toHaveBeenCalled();
      tick();
      navigationService.goBack();
      tick();
      expect(navigationService).toBeTruthy();
    }));

    it('should clear history', () => {
      navigationService.clearHistory();
      expect(navigationService['state'].route.history.length).toEqual(0);
    });

    it('should any history', () => {
      expect(navigationService.isAnyHistory()).toEqual(jasmine.any(Boolean));
    });
  }
));
