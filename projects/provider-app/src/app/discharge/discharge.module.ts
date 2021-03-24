import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../components/shared/shared.module';
import { CustomFontAwesomeModule } from '../components/fontawesome.module';
import { MaterialModule } from '../material.module';
import { MDBModule } from '../mdb.module';

import { ReturnToSchoolComponent } from './return-to-school/return-to-school.component';
import { ReturnToWorkComponent } from './return-to-work/return-to-work.component';
import { DischargeTreatmentComponent } from './discharge-treatment/discharge-treatment.component';
import { DischargeNotesPanelComponent } from './discharge-notes-panel/discharge-notes-panel.component';
import { AdditionalDischargeDocumentsComponent } from './additional-discharge-documents/additional-discharge-documents.component';
import { DischargeDispositionTableComponent } from './discharge-disposition-table/discharge-disposition-table.component';
import { AuthorizationNotesComponent } from './authorization-notes/authorization-notes.component';



@NgModule({
  declarations: [
    ReturnToSchoolComponent,
    ReturnToWorkComponent,
    DischargeTreatmentComponent,
    DischargeNotesPanelComponent,
    AdditionalDischargeDocumentsComponent,
    DischargeDispositionTableComponent,
    AuthorizationNotesComponent
  ],
    imports: [
        SharedModule,
        CustomFontAwesomeModule,
        CommonModule,
        MaterialModule,
        MDBModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    ReturnToSchoolComponent,
    ReturnToWorkComponent,
    DischargeTreatmentComponent,
    DischargeNotesPanelComponent,
    AdditionalDischargeDocumentsComponent,
    DischargeDispositionTableComponent,
    AuthorizationNotesComponent
  ]
})
export class DischargeModule { }
