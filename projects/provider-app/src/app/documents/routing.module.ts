import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PharmacistDocumentsComponent } from 'documents/pharmacist-documents/pharmacist-documents.component';
import { PractitionerDocumentsComponent } from 'documents/practitioner-documents/practitioner-documents.component';
import { SurveysContainerComponent } from 'documents/surveys-container/surveys-container.component';
import { PharmacistRoleGuard } from 'guards/pharmacist-role.guard';

export const routes: Routes = [
  {
    path: 'intake-form',
    component: PharmacistDocumentsComponent,
    // loadChildren: () =>  import('../../../../../projects/pharmacist/src/lib/pharmacist.module').then(m => m.PharmacistModule),
    canActivate: [PharmacistRoleGuard]
  },
  {
    path: 'practitioner',
    component: PractitionerDocumentsComponent,
    // loadChildren: () => import('../../../../../projects/provider-documents/src/lib/documents.module').then(m => m.DocumentsModule),
  },
  {
    path: 'surveys',
    component: SurveysContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentsRoutingModule { }

