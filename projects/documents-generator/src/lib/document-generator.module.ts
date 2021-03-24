import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DocumentContainerComponent } from './document-container/document-container.component';

@NgModule({
  declarations: [DocumentContainerComponent],
  exports: [
    DocumentContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DocumentGeneratorModule {
}
