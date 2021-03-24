import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NGXS_PLUGINS } from '@ngxs/store';

import { MaterialModule } from 'material.module';
import { SharedModule } from 'components/shared/shared.module';
import { RoutingModule } from 'routing.module';
import { PopupsModule } from 'components/shared/popups/popups.module';
import { ComponentsModule } from 'components/components.module';
import { UserModule } from 'user/user.module';

import { LoginGuard } from 'guards/login.guard';
import { LogoutGuard } from 'guards/logout.guard';
import { GoToPatientGuard } from 'guards/gotopatient.guard';
import { FreePatientGuard } from 'guards/freepatient.guard';

import { StateService } from 'services/state.service';
import { PhysicalFindingsService } from './physical-exam/physical-findings.service';
import { NavigationService } from './services/navigation.service';
import { DataService } from 'services/data.service';
import { PatientdataService } from 'services/patientdata.service';
import { OtherdataService } from 'services/otherdata.service';
import { ServicedataService } from 'services/servicedata.service';
import { KludgesService } from 'services/kludges.service';
import { LazyService } from 'services/lazy.service';
import { IWCService } from 'services/iwc.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { StorageService } from 'services/storage.service';
import { ProceduresService } from './procedures/procedures.service';

import { DateTime } from 'utils/dateTime';

import { AppComponent } from 'app.component';

import { HistoryPatientGuard } from 'guards/historypatient.guard';
import { ChangesGuard } from './guards/changes.guard';

import { SentryErrorHandler } from 'utils/sentryErrorHandler';
import { CustomFontAwesomeModule } from './components/fontawesome.module';
import { MDBModule } from './mdb.module';
import { MDBToastModule } from './mdb-toast.module';
import { PatientsResolver } from 'components/shared/resolvers/patients.resolver';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { SymptomsUpdateGuard } from './guards/symptoms-update.guard';
import { TreatmentsGuard } from './guards/treatments.guard';

import { PhysicalExamPanelPlugin } from './components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.plugin';
import {
  DiagnosisAccordionPlugin
} from './components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.plugin';

import { TreatmentsModule } from './treatments/treatments.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    UserModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    SharedModule.forRoot(),
    InterceptorsModule,
    PopupsModule,
    OverlayModule,
    DeviceDetectorModule.forRoot(),
    MDBModule.forRoot(),
    MDBToastModule.forRoot(),
    CustomFontAwesomeModule,
    TreatmentsModule.forRoot()
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: SentryErrorHandler
    },
    StateService,
    NavigationService,
    PatientdataService,
    OtherdataService,
    ServicedataService,
    DialogSubscribesService,
    LazyService,
    KludgesService,
    DataService,
    LoginGuard,
    LogoutGuard,
    GoToPatientGuard,
    FreePatientGuard,
    HistoryPatientGuard,
    ChangesGuard,
    SymptomsUpdateGuard,
    TreatmentsGuard,
    PatientsResolver,
    DateTime,
    ProceduresService,
    IWCService,
    StorageService,
    {
      provide: NGXS_PLUGINS,
      useClass: PhysicalExamPanelPlugin,
      multi: true
    }, {
      provide: NGXS_PLUGINS,
      useClass: DiagnosisAccordionPlugin,
      multi: true
    },
    PhysicalFindingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
