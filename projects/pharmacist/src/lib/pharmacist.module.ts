import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WavesModule, ButtonsModule } from 'ng-uikit-pro-standard';

// Components
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { IntakeFormContainerComponent } from './intake-form-container/intake-form-container.component';
import { AsthmaRefillComponent } from './asthma-refil/asthma-refill.component';
import { BirthRefillComponent } from './birth-refill/birth-refill.component';
import { ColdSoresComponent } from './cold-sores/cold-sores.component';
import { FluShotComponent } from './flu-shot/flu-shot.component';
import { FluTreatmentComponent } from './flu-treatment/flu-treatment.component';
import { PhysicalAssessmentTableComponent } from './physical-assessments-table/physical-assessment-table.component';
import { QuestionnairesHeaderComponent } from './questionnaires-header/questionnaires-header.component';
import { QuestionnairesFooterComponent } from './questionnaries-footer/questionnaires-footer.component';
import { StrepThroatComponent } from './strep-throat/strep-throat.component';
import { UtiComponent } from './uti/uti.component';

// Services
import { QuestionnaireService } from './questionnaire.service';
import { DobPipe } from './dob.pipe';

@NgModule({
  declarations: [
    QuestionnairesComponent,
    IntakeFormContainerComponent,
    QuestionnairesHeaderComponent,
    QuestionnairesFooterComponent,
    AsthmaRefillComponent,
    BirthRefillComponent,
    ColdSoresComponent,
    FluShotComponent,
    FluTreatmentComponent,
    StrepThroatComponent,
    UtiComponent,
    PhysicalAssessmentTableComponent,
    DobPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    WavesModule,
    ButtonsModule
  ],
  exports: [
    QuestionnairesComponent,
    IntakeFormContainerComponent
  ]
})
export class PharmacistModule {
  static forRoot(): ModuleWithProviders<PharmacistModule> {
    return {
      ngModule: PharmacistModule,
      providers: [QuestionnaireService]
    };
  }
}
