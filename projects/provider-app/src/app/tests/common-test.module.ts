import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Configuration } from 'app.config';
import { Observable, of as ObservableOf } from 'rxjs';
import { StateService, StorageService } from 'services';
import { CustomFontAwesomeModule } from '../components/fontawesome.module';
import { SeverityConfirmationInterface } from '../components/shared/popups/pp-severity-confirmation/severity-confirmation.interface';
import { MaterialModule } from '../material.module';
import { MDBModule } from '../mdb.module';
import { testMeasurements, testSocialCard } from '../patient-core/test.constants';
import { WindowRefService } from '../services/window-ref.service';
import { testTriage } from '../static/test.constants';
import { ErrorHandlersTestModule } from './error-handlers-test.module';


@NgModule({
  imports: [
    CommonModule,
    RouterTestingModule,
    MaterialModule,
    MDBModule,
    CustomFontAwesomeModule,
    ErrorHandlersTestModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterTestingModule,
    MaterialModule,
    MDBModule,
    CustomFontAwesomeModule
  ],
  providers: [
    Configuration,
    StateService,
    MediaMatcher,
    Platform,
    StorageService,
    WindowRefService
  ]
})
export class CommonTestModule {}

export class MockPatientDataFacade {
    get triage$() {
        return ObservableOf(testTriage);
    }

    get socialCard$() {
        return ObservableOf(testSocialCard);
    }

    assign() {
        return ObservableOf({sessionKey: 'session key'});
    }

    get measurement$() {
        return ObservableOf(testMeasurements);
    }

    public get severityConfirmation$(): Observable<SeverityConfirmationInterface> {
        return ObservableOf({
            patientRisk: null,
            cptCode: null
        });
    }
}
