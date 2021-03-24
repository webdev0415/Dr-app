import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';

import { MaterialModule } from 'material.module';

import { StorageService } from 'services/storage.service';
import { DialogService } from 'services/app/dialog.service';
import { Configuration } from 'app.config';
import { NotificationsService } from 'components/notifications/notifications.service';
import { SanitizerPipe } from 'utils/sanitizer.pipe';
import { AdjustTimezonePipe } from 'utils/timezone-date.pipe';
import { ReactionPipe } from 'utils/reaction.pipe';

// components
import { ItemListComponent } from './item-list/item-list.component';
import { VitalsFieldComponent } from './vitals-field/vitals-field.component';
import { MediaSectionComponent } from './media-section/media-section.component';
import { AudioSectionComponent } from './media-section/audio-section/audio-section.component';
import { ImagesSectionComponent } from './media-section/images-section/images-section.component';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { PatientcardComponent } from './patientcard/patientcard.component';
import { WaveformComponent } from './media-section/waveform/waveform.component';
import { PdfgagComponent } from './pdfgag/pdfgag.component';
import { VitalsTableComponent } from './vitals-table/vitals-table.component';
import { HpiSummaryComponent } from './hpi-summary/hpi-summary.component';
import { SymptomFilterPipe } from 'utils/symptom-filter.pipe';

import { MDBModule } from '../../mdb.module';
import { CustomFontAwesomeModule } from 'components/fontawesome.module';
import { ExamPanelComponent } from '../app/workspace/patientspace/exam-panel/exampanel.component';
import { SelectedIllnessesComponent } from './selected-illnesses/selected-illnesses.component';
import { PaMdbWrapperComponent } from './pa-mdb-select/pa-mdb-wrapper.component';
import { InlineDatepickerComponent } from './inline-datepicker/inline-datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { FullNamePipe } from '../../utils/full-name.pipe';
import { HourglassLoaderComponent } from './hourglass-loader/hourglass-loader.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    OverlayModule,
    MDBModule,
    CustomFontAwesomeModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    SymptomFilterPipe,
    PatientcardComponent,
    WaveformComponent,
    ItemListComponent,
    VitalsFieldComponent,
    MediaSectionComponent,
    AudioSectionComponent,
    ImagesSectionComponent,
    EditableTextComponent,
    PdfgagComponent,
    SanitizerPipe,
    AdjustTimezonePipe,
    // ToastrComponent,
    VitalsTableComponent,
    HpiSummaryComponent,
    ExamPanelComponent,
    SelectedIllnessesComponent,
    ReactionPipe,
    PaMdbWrapperComponent,
    InlineDatepickerComponent,
    FullNamePipe,
    HourglassLoaderComponent,
  ],
  providers: [
    StorageService,
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'LL',
        },
        display: {
          dateInput: 'MM/DD/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      }
    }, {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }
  ],
  exports: [
    SymptomFilterPipe,
    PatientcardComponent,
    WaveformComponent,
    ItemListComponent,
    VitalsFieldComponent,
    MediaSectionComponent,
    EditableTextComponent,
    PdfgagComponent,
    SanitizerPipe,
    AdjustTimezonePipe,
    VitalsTableComponent,
    HpiSummaryComponent,
    ExamPanelComponent,
    SelectedIllnessesComponent,
    ReactionPipe,
    PaMdbWrapperComponent,
    InlineDatepickerComponent,
    FullNamePipe,
    HourglassLoaderComponent,
  ],
  // entryComponents: [ToastrComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        DialogService,
        Configuration,
        ToastService,
        NotificationsService
      ]
    };
  }
}
