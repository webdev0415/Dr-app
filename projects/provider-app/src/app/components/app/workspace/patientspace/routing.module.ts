import { NgModule } from '@angular/core';
import { RouterModule, UrlMatchResult, UrlSegment } from '@angular/router';
import { Routes } from 'common/interfaces/route.interface';
import { PharmacistDocumentsComponent } from 'documents/pharmacist-documents/pharmacist-documents.component';
// guards
import { ChangesGuard } from 'guards/changes.guard';
import { PharmacistRoleGuard } from 'guards/pharmacist-role.guard';
import { SymptomsUpdateGuard } from '../../../../guards/symptoms-update.guard';
import { TreatmentsGuard } from '../../../../guards/treatments.guard';
import { ClerkLabsComponent } from '../../../../labs/clerk-labs/clerk-labs.component';
import { ProviderLabsComponent } from '../../../../labs/provider-labs/provider-labs.component';
// resolvers
import { DocumentsResolver } from '../../../shared/resolvers/documents.resolver';
import { SymptomsResolver } from '../../../shared/resolvers/symptoms.resolver';
import { MediaAuditsResolver } from '../../../shared/resolvers/media-audits.resolver';
import { SymptomCategoriesResolver } from '../../../shared/resolvers/symptom-categories.resolver';
import { DiagnosisInformationResolver } from 'components/shared/resolvers/diagnosis-information.resolver';

// components
import { PatientDataComponent } from 'components/app/workspace/patientspace/patientdata/patient-data.component';
import { SymptomsComponent } from 'components/app/workspace/patientspace/symptoms/symptoms.component';
import { VitalsmediaComponent } from 'components/app/workspace/patientspace/vitalsmedia/vitalsmedia.component';
import { PatientSpaceComponent } from './patientspace.component';
import { WorkingDiagnosisComponent } from './working-diagnosis/working-diagnosis.component';
import { TreatmentComponent } from '../../../../treatments/treatment/treatment.component';

export const routes: Routes = [
  {
    path: ':id',
    component: PatientSpaceComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'patient-data'},
      {
        path: 'diagnosis',
        component: WorkingDiagnosisComponent,
        data: {
          shouldReuse: true,
          reuseOnlyParentComponent: PatientSpaceComponent
        },
        canDeactivate: [
          ChangesGuard
        ],
        resolve: {
          media: MediaAuditsResolver
        }
      },
      {
        path: 'treatments',
        component: TreatmentComponent,
        canDeactivate: [TreatmentsGuard],
        data: {
          shouldReuse: true,
          reuseOnlyParentComponent: PatientSpaceComponent
        },
      },
      {
        path: 'patient-data',
        component: PatientDataComponent,
        data: {
          shouldReuse: true,
          reuseOnlyParentComponent: PatientSpaceComponent
        },
        canDeactivate: [SymptomsUpdateGuard]
      },
      {
        path: 'symptoms',
        component: SymptomsComponent,
        canDeactivate: [SymptomsUpdateGuard]
      },
      {
        path: 'procedures', loadChildren: (() => import('../../../../procedures/procedures.module').then(m => m.ProceduresModule)),
      },
      {
        path: 'labs',
        component: ClerkLabsComponent,
        data: {
          shouldReuse: true,
          reuseOnlyParentComponent: PatientSpaceComponent
        }
      },
      {
        path: 'order-labs',
        component: ProviderLabsComponent,
        data: {
          shouldReuse: true,
          reuseOnlyParentComponent: PatientSpaceComponent
        }
      },
      {
        path: 'docs',
        loadChildren: () => import('documents/documents.module').then(m => m.DocumentsModule),
        resolve: {
          patient: DocumentsResolver,
          parsedSymptoms: SymptomsResolver,
          symptomCategories: SymptomCategoriesResolver,
          diagnosisInformation: DiagnosisInformationResolver
        }
      },
      {
        path: 'vm',
        component: VitalsmediaComponent,
        resolve: {
          media: MediaAuditsResolver
        }
      }
    ]
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
export class PatientSpaceRoutingModule {
}
