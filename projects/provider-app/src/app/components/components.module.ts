import { NgModule } from '@angular/core';
// components
import { HeaderComponent } from 'components/app/header/header.component';
import { NavbarComponent } from 'components/app/header/navbar/navbar.component';
import { PatientPanelComponent } from 'components/app/header/patient-panel/patientpanel.component';
import { NotfoundComponent } from 'components/errors/404/notfound.component';
// modules
import { DirectivesModule } from '../directives/directives.module';
import { environment } from '../../environments/environment';
import { MaterialModule } from '../material.module';
import { TelemedicineModule } from '../telemedicine/telemedicine.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from '../routing.module';
import { MDBModule } from '../mdb.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientCoreModule } from '../patient-core/patient-core.module';
import { PatientProfileModule } from '../../../../patient-profile/src/lib/patient-profile.module';
import { LabsModule } from '../labs/labs.module';
import { PatientListModule } from '../patient-list/patient-list.module';
// services
import { PatientListService } from 'patient-list/services/patient-list.service';
import { SymptomsService } from 'services/symptoms.service';
import { MeasurementsService } from 'services/measurements.service';
import { CustomFontAwesomeModule } from './fontawesome.module';
import { SentryErrorHandler } from 'utils/sentryErrorHandler';
import { MatButtonModule } from '@angular/material/button';
import { NewVersionAvailableComponent } from './shared/popups/new-version-available/new-version-available.component';
import { LazyService } from 'services';
import { API_URL, LAZY_SERVICE } from '../../../../patient-profile/src/lib/services/providers';

@NgModule({
  imports: [
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    MaterialModule,
    SharedModule,
    MDBModule,
    CustomFontAwesomeModule,
    MatButtonModule,
    PatientCoreModule,
    PatientProfileModule.forRoot(),
    LabsModule,
    PatientListModule,
    TelemedicineModule
  ],
  declarations: [
    PatientPanelComponent,
    HeaderComponent,
    NavbarComponent,
    NotfoundComponent,
    NewVersionAvailableComponent
  ],
  exports: [
    PatientPanelComponent,
    HeaderComponent,
    NotfoundComponent,
    NewVersionAvailableComponent,
  ],
  providers: [
    PatientListService,
    SymptomsService,
    MeasurementsService,
    SentryErrorHandler,
    { provide: LAZY_SERVICE, useExisting: LazyService },
    { provide: API_URL, useValue: { buildUrl: (patientId: number, path: string, section = 'patients') => `${environment.apiDomain}/api/${section}/${patientId}/${path ? `${path}/` : ``}` } }
  ]
})
export class ComponentsModule { }
