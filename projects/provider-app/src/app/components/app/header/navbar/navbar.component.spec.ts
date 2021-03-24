import { async, TestBed } from '@angular/core/testing';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { DataService, StateService } from 'services';

import { NavbarComponent } from './navbar.component';
import { MDBBootstrapModulePro } from 'ng-uikit-pro-standard';
import { Observable, of as ObservableOf} from 'rxjs';


class MockDataService {
  getPatient(): Observable<any> {
    return ObservableOf({
      patientInformation: {
        patientId: '1000'
      },
    });
  }
  getPaymentInfo(): Observable<any> {
    return ObservableOf([1, 2, 3]);
  }
}

describe('NavbarComponent', generateSpecs({
    componentType: NavbarComponent,
    imports: [
      DialogsTestModule,
      UserTestModule,
      MDBBootstrapModulePro.forRoot(),
    ],
    declarations: [
      NavbarComponent
    ],
    providers: [
      { provide: DataService, useClass: MockDataService }
    ]
  },
  (context: TestContext<NavbarComponent>) => {
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    // let stateServiceAppSpy;
    let fakeMediaResp;

    beforeEach(async(() => {
      stateServiceSpy = TestBed.get(StateService);
    }));

    beforeEach(() => {
      fakeMediaResp = {
        xl: {
          matches: true
        }
      };
    });

    // it('should change sidenav on resize', (() => {
    //   stateServiceAppSpy = spyOn(component['stateService'].app, 'mediaResp').and.returnValue(fakeMediaResp);
    //   window.dispatchEvent(new Event('resize'));
    //   expect(component.sidenav.shown).toBeTruthy();
    //   fakeMediaResp.xl.matches = false;
    //   stateServiceAppSpy = spyOn(component['stateService'].app, 'mediaResp').and.returnValue(fakeMediaResp);
    //   window.dispatchEvent(new Event('resize'));
    //   expect(component.sidenav.shown).toBeFalsy();
    // }));
  }
));
