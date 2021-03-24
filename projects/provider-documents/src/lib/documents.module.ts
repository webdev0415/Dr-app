import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DischargeNotesComponent } from '../../../provider-documents/src/lib/discharge-notes/discharge-notes.component';
import { DocumentsHeaderComponent } from '../../../provider-documents/src/lib/documents-header/documents-header.component';
import { AuthorizationToWorkSchoolComponent } from './authorization-to-work-school/authorization-to-work-school.component';
import { SportsPhysicalExamComponent } from './sports-physical-exam/sports-physical-exam.component';
import { ReceiptComponent } from '../../../provider-documents/src/lib/receipt/receipt.component';
import { SportsTableRowComponent } from '../../../provider-documents/src/lib/sports-physical-exam/sports-table-row/sports-table-row.component';

import { TextMaskModule } from 'angular2-text-mask';
import { MaterialModule } from 'material.module';
import { FinalNotesComponent } from './final-notes/final-notes.component';
import { ProviderNotesComponent } from './provider-notes/notes.component';
import { SharedModule } from 'components/shared/shared.module';
import { CustomFontAwesomeModule } from 'components/fontawesome.module';
import { SurveysComponent } from './surveys/surveys.component';
import { SportsTableComponent } from './surveys/sports-table/sports-table.component';
import { MDBModule } from 'mdb.module';
import { DischargeModule } from 'discharge/discharge.module';
import { PractitionerDischargeNotesComponent } from './practitioner-discharge-notes/practitioner-discharge-notes.component';
import { PharmacistModule } from '../../../pharmacist/src/lib/pharmacist.module';
import { DocumentGeneratorModule } from '../../../documents-generator/src/lib/document-generator.module';


@NgModule({
  declarations: [
    DischargeNotesComponent,
    DocumentsHeaderComponent,
    AuthorizationToWorkSchoolComponent,
    SportsPhysicalExamComponent,
    ReceiptComponent,
    SportsTableRowComponent,
    FinalNotesComponent,
    ProviderNotesComponent,
    SurveysComponent,
    SportsTableComponent,
    PractitionerDischargeNotesComponent
  ],
  imports: [
    CustomFontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MaterialModule,
    SharedModule,
    MDBModule,
    DischargeModule,
    PharmacistModule.forRoot(),
    DocumentGeneratorModule
  ],
  exports: [
    DischargeNotesComponent,
    DocumentsHeaderComponent,
    AuthorizationToWorkSchoolComponent,
    SportsPhysicalExamComponent,
    ReceiptComponent,
    SportsTableRowComponent,
    FinalNotesComponent,
    ProviderNotesComponent,
    SurveysComponent,
    SportsTableComponent,
    PractitionerDischargeNotesComponent
  ]
})
export class DocumentsModule {
}
