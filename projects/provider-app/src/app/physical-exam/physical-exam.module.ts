import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopupsModule } from '../components/shared/popups/popups.module';
import { MaterialModule } from '../material.module';
import { MDBModule } from '../mdb.module';

import { FindingsPanelComponent } from './findings-panel/findings-panel.component';
import { PeNormalButtonComponent } from './pe-normal-button/pe-normal-button.component';
import { SplitToBodyPartsPipe } from './split-to-body-parts.pipe';
import { SystemsPanelComponent } from './systems-panel/systems-panel.component';
import { FindingsEditableCardComponent } from './findings-editable-card/findings-editable-card.component';
import { PhysicalExamResultComponent } from './physical-exam-result/physical-exam-result.component';
import { SubsystemResultsEditableComponent } from './subsystem-results-editable/subsystem-results-editable.component';
import { PpPeMediaComponent } from './pp-pe-media/pp-pe-media.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MDBModule,
    MaterialModule,
    PopupsModule
  ],
  declarations: [
    SystemsPanelComponent,
    FindingsPanelComponent,
    FindingsEditableCardComponent,
    PhysicalExamResultComponent,
    SubsystemResultsEditableComponent,
    SplitToBodyPartsPipe,
    PpPeMediaComponent,
    PeNormalButtonComponent
  ],
  exports: [
    SystemsPanelComponent,
    FindingsPanelComponent,
    FindingsEditableCardComponent,
    PhysicalExamResultComponent,
    SubsystemResultsEditableComponent,
    SplitToBodyPartsPipe
  ]
})
export class PhysicalExamModule {
}
