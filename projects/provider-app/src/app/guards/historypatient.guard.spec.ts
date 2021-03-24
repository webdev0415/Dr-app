import { inject, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { of as ObservableOf } from 'rxjs';

import { StateService } from 'services';
import { testPatientData } from 'static/test.constants';
import { HistoryPatientGuard } from './historypatient.guard';


describe('HistoryPatientGuard', generateSpecs({
    imports: [
      NavigationTestModule
    ],
    providers: [
      HistoryPatientGuard
    ]
  },
  () => {
    let guard: HistoryPatientGuard;
    let stateService: StateService;
    let spy: jasmine.Spy;
    const r: Route = {};

    beforeEach(inject([HistoryPatientGuard], (historyPatientGuard: HistoryPatientGuard) => {
      guard = historyPatientGuard;
      stateService = TestBed.get(StateService);
      spy = spyOnProperty(stateService, 'patient').and.returnValue({getCurrent: () => ObservableOf(false)});
    }));

    it('should check canLoad no user', () => {
      spy.and.returnValue({
        getCurrent: () => ObservableOf(false),
        getLastViewOnly: () => false,
        getIsIllnessSelected: () => true
      });
      expect(guard.canLoad(r)).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });

    it('should check canLoad and not illness selected', () => {
      spy.and.returnValue({
        getCurrent: () => ObservableOf(testPatientData),
        getLastViewOnly: () => false,
        getIsIllnessSelected: () => true
      });
      expect(guard.canLoad(r)).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  }
));
