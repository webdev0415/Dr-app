import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataFacadeService } from './patient-data-facade.service';
import { PatientDataApiService } from './patient-data-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PatientDataFacadeService,
    PatientDataApiService
  ]
})
export class PatientCoreModule { }
