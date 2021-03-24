import { NgModule } from '@angular/core';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../../environments';
import { AppointmentTimePipe } from './appointment-time.pipe';

import { PatientListTableComponent } from './patient-list-table/patient-list-table.component';
import { PatientListContainerComponent } from './patient-list-container/patient-list-container.component';

import { CommonModule } from '@angular/common';
import { MDBModule } from '../mdb.module';
import { SharedModule } from '../components/shared/shared.module';
import { MaterialModule } from '../material.module';
import { CustomFontAwesomeModule } from '../components/fontawesome.module';
import { RouterModule, Routes } from '@angular/router';
import { PatientsTablesState } from './store/patients-list.state';


export const routes: Routes = [
  { path: '', component: PatientListContainerComponent },
];

@NgModule({
  declarations: [
    PatientListTableComponent,
    PatientListContainerComponent,
    AppointmentTimePipe
  ],
  imports: [
    CommonModule,
    MDBModule,
    SharedModule,
    MaterialModule,
    CustomFontAwesomeModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([PatientsTablesState])
  ],
  providers: [
    AppointmentTimePipe
  ]
})
export class PatientListModule {
  constructor() { }
}
