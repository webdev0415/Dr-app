import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'components/shared/shared.module';

import { PharmacistDocumentsComponent } from 'documents/pharmacist-documents/pharmacist-documents.component';
import { PractitionerDocumentsComponent } from 'documents/practitioner-documents/practitioner-documents.component';
import { DocumentsRoutingModule } from 'documents/routing.module';
import { SurveysContainerComponent } from 'documents/surveys-container/surveys-container.component';
import { DocumentGeneratorModule } from '../../../../documents-generator/src/lib/document-generator.module';
import { DocumentsModule as PractitionerDocumentsModule } from '../../../../provider-documents/src/lib/documents.module';
import { PharmacistModule } from '../../../../pharmacist/src/lib/pharmacist.module';

@NgModule({
  declarations: [
    PharmacistDocumentsComponent,
    PractitionerDocumentsComponent,
    SurveysContainerComponent
  ],
  imports: [
    CommonModule,
    PractitionerDocumentsModule,
    DocumentGeneratorModule,
    PharmacistModule.forRoot(),
    SharedModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
