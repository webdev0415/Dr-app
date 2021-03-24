import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'material.module';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from 'services/storage.service';
import { PpcontributorsComponent } from './ppcontributors/ppcontributors.component';
import { PpselectComponent } from './ppselect/ppselect.component';
import { PpprefinalizeComponent } from './ppprefinalize/ppprefinalize.component';
import { PpcustomdialogComponent } from './ppcustomdialog/ppcustomdialog.component';
import { PpdrnotesComponent } from './ppdrnotes/ppdrnotes.component';
import { PpreferenceComponent } from './ppreference/ppreference.component';
import { PpviewmediaComponent } from './ppviewmedia/ppviewmedia.component';
import { SharedModule } from 'components/shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { CUSTOM_OVERLAY_DATA, DialogService } from 'services/app/dialog.service';

import { DirectivesModule } from 'directives/directives.module';
import { PpreviewComponent } from './ppreview/ppreview.component';
import { NotificationsService } from 'components/notifications/notifications.service';
import { MDBModule } from '../../../mdb.module';
import { CustomFontAwesomeModule } from 'components/fontawesome.module';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { PpAddSymptomComponent } from './pp-select/pp-add-symptom/pp-add-symptom.component';
import { PpSelectBaseComponent } from './pp-select/pp-select-base/pp-select-base.component';
import { PpAddDescriptionComponent } from './pp-select/pp-add-description/pp-add-description.component';
import { PpSearchPatientsComponent } from './pp-select/pp-search-patients/pp-search-patients.component';
import { PpEhrAuthComponent } from './pp-ehr-auth/pp-ehr-auth.component';
import { PpAddTreatmentsComponent } from './pp-select/pp-add-treatments/pp-add-treatments.component';
import { PpSeverityConfirmationComponent } from './pp-severity-confirmation/pp-severity-confirmation.component';
import { PpCustomDischargeArticleComponent } from './pp-custom-discharge-article/pp-custom-discharge-article.component';
import { PpLabMeasurementComponent } from './pp-lab-measurement/pp-lab-measurement.component';
import { PpAddHealthHistoryComponent } from './pp-select/pp-add-health-history/pp-add-health-history.component';
import { PpUnsavedChangesConfirmationComponent } from './pp-unsaved-changes-confirmation/pp-unsaved-changes-confirmation.component';

// TODO: update

const popups = [
  PpcontributorsComponent,
  PpselectComponent,
  PpcustomdialogComponent,
  PpprefinalizeComponent,
  PpdrnotesComponent,
  PpreferenceComponent,
  PpviewmediaComponent,
  PpreviewComponent,
  PpSelectBaseComponent,
  PpAddSymptomComponent,
  PpAddDescriptionComponent,
  PpSearchPatientsComponent,
  PpEhrAuthComponent,
  PpSeverityConfirmationComponent,
  PpCustomDischargeArticleComponent,
  PpAddTreatmentsComponent,
  PpLabMeasurementComponent,
  PpAddHealthHistoryComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    SharedModule,
    OverlayModule,
    DirectivesModule,
    MDBModule,
    ScrollingModule,
    CustomFontAwesomeModule
  ],
  declarations: [
    ...popups,
    PpUnsavedChangesConfirmationComponent,
  ],
  providers: [
    StorageService,
    DialogService,
    {
      provide: CUSTOM_OVERLAY_DATA,
      useValue: {}
    },
    NotificationsService
  ],
  exports: [
    ...popups
  ],
  entryComponents: [
    ...popups
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PopupsModule { }
