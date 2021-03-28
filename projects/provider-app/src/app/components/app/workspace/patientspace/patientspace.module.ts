import { NgModule } from '@angular/core';
import { DiagnosisInformationResolver } from 'components/shared/resolvers/diagnosis-information.resolver';
import { PhysicalExamModule } from '../../../../physical-exam/physical-exam.module';
import { USER_ROLE } from '../../../../procedures/tokens/user-role.token';
import { UserService } from '../../../../user/user.service';
// components
import { PatientSpaceComponent } from './patientspace.component';

import { MainComponent } from './main/main.component';
import { ContributorTableComponent } from './contributortable/contributortable.component';
import { IllnessTableComponent } from './illnesstable/illnesstable.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PatientDataComponent } from './patientdata/patient-data.component';
import { VitalsmediaComponent } from './vitalsmedia/vitalsmedia.component';
import { BottomSpaceComponent } from './bottom-space/bottom-space.component';
import { ContinueButtonComponent } from './continue-button/continue-button.component';
import { WorkingDiagnosisComponent } from './working-diagnosis/working-diagnosis.component';
import { IllnessGroupComponent } from './illness-group/illness-group.component';
import { SystemsPanelComponent } from '../../../../physical-exam/systems-panel/systems-panel.component';
import { FindingsPanelComponent } from '../../../../physical-exam/findings-panel/findings-panel.component';
// modules
import { DirectivesModule } from 'directives/directives.module';
import { MaterialModule } from 'material.module';
import { SharedModule } from 'components/shared/shared.module';
import { PatientSpaceRoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreatmentsModule } from 'treatments/treatments.module';

import { MDBModule } from 'mdb.module';
import { CustomFontAwesomeModule } from 'components/fontawesome.module';
// pipes
import { PhoneNumberPipe } from '../../../../../../../provider-documents/src/lib/phone-number.pipe';
import { GroupByDatePipe } from './patientdata/group-by-date.pipe';
// resolvers
import { DocumentsResolver } from '../../../shared/resolvers/documents.resolver';
import { SymptomsResolver } from '../../../shared/resolvers/symptoms.resolver';
import { SymptomCategoriesResolver } from '../../../shared/resolvers/symptom-categories.resolver';
import { MediaAuditsResolver } from '../../../shared/resolvers/media-audits.resolver';
// states
import { PhysicalExamPanelState } from './stores/physical-exam-panel/physical-exam-panel.state';
import { DiagnosisAccordionState } from './stores/diagnosis-accordion/diagnosis-accordion.state';
// side libs
import { TextMaskModule } from 'angular2-text-mask';
import { NgxsModule } from '@ngxs/store';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../../../../../environments/environment';
import { SplitToBodyPartsPipe } from 'physical-exam/split-to-body-parts.pipe';
import { GroupedSymptomsComponent } from './symptoms/grouped-symptoms/grouped-symptoms.component';
import { LabsModule } from 'labs/labs.module';
import { PharmacistSummaryComponent } from './pharmacist-summary/pharmacist-summary.component';
import { PharmacistModule } from '../../../../../../../pharmacist/src/lib/pharmacist.module';
import { ChatModule } from 'chat/chat.module';

@NgModule({
  imports: [
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PatientSpaceRoutingModule,
    MaterialModule,
    SharedModule,
    MDBModule,
    CustomFontAwesomeModule,
    TextMaskModule,
    NgxsModule.forFeature([PhysicalExamPanelState, DiagnosisAccordionState]),
    NgxsResetPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.forProd}),
    TreatmentsModule,
    LabsModule,
    PharmacistModule.forRoot(),
    PhysicalExamModule,
    ChatModule
  ],
  declarations: [
    PatientSpaceComponent,
    MainComponent,
    WorkingDiagnosisComponent,
    PatientDataComponent,
    SymptomsComponent,
    ContributorTableComponent,
    IllnessTableComponent,
    VitalsmediaComponent,
    BottomSpaceComponent,
    PhoneNumberPipe,
    GroupByDatePipe,
    ContinueButtonComponent,
    IllnessGroupComponent,
    GroupedSymptomsComponent,
    PharmacistSummaryComponent
  ],
  exports: [
    PatientSpaceComponent
  ],
  providers: [
    DocumentsResolver,
    SymptomsResolver,
    SymptomCategoriesResolver,
    MediaAuditsResolver,
    SplitToBodyPartsPipe,
    DiagnosisInformationResolver,
    { provide: USER_ROLE, useFactory: (userService: UserService) => userService.getUserRole, deps: [UserService] }
  ],
})
export class PatientSpaceModule {
}
