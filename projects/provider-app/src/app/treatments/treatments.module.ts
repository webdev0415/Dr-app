import { ModuleWithProviders, NgModule } from '@angular/core';
import { TreatmentComponent } from './treatment/treatment.component';
import { DrugTreatmentComponent } from './drug-treatment/drug-treatment.component';
import { SharedModule } from '../components/shared/shared.module';
import { CustomFontAwesomeModule } from '../components/fontawesome.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TreatmentsService } from './treatments.service';
import { NewTreatmentsService } from './treatments.new.service';
import { MDBModule } from 'mdb.module';
import { DrugInformationPipe } from './drug-information.pipe';
import { ArrayLengthPipe } from './array-length.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DischargeModule } from '../discharge/discharge.module';
import { TreatmentsSearchBarComponent } from './treatments-search-bar/treatments-search-bar.component';
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { PpSaveProtocolComponent } from './pp-save-protocol/pp-save-protocol.component';
import { PpLoadProtocolComponent } from './pp-load-protocol/pp-load-protocol.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { RxRowComponent } from './rx-row/rx-row.component';
import { SigBuilderComponent } from './rx-row/sig-builder/sig-builder.component';
import { DmeComponent } from './dme/dme.component';

@NgModule({
  declarations: [
    TreatmentComponent,
    DrugTreatmentComponent,
    DrugInformationPipe,
    ArrayLengthPipe,
    TreatmentsSearchBarComponent,
    TreatmentPlanComponent,
    PpSaveProtocolComponent,
    PpLoadProtocolComponent,
    PrescriptionComponent,
    RxRowComponent,
    SigBuilderComponent,
    DmeComponent,
  ],
  imports: [
      FormsModule,
      SharedModule,
      CustomFontAwesomeModule,
      CommonModule,
      MaterialModule,
      MDBModule,
      DischargeModule,
      ReactiveFormsModule,
  ],
  exports: [TreatmentComponent]
})
export class TreatmentsModule {
  static forRoot(): ModuleWithProviders<TreatmentsModule> {
    return {
      ngModule: TreatmentsModule,
      providers: [TreatmentsService, NewTreatmentsService]
    };
  }
}
