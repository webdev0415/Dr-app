import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PatientProfileApiService } from './services/patient-profile-api.service';
import { PatientProfileService } from './services/patient-profile.service';
import { PatientProfileStateService } from './services/patient-profile-state.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PatientProfileApiService,
    PatientProfileService,
    PatientProfileStateService,
  ]
})
export class PatientProfileModule {
  static forRoot(): ModuleWithProviders<PatientProfileModule> {
    return {
      ngModule: PatientProfileModule,
      providers: [PatientProfileService, PatientProfileStateService, PatientProfileApiService]
    };
  }
}
