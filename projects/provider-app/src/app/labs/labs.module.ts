import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '../material.module';
import { MDBModule } from '../mdb.module';
import { SharedModule } from '../components/shared/shared.module';
import { CustomFontAwesomeModule } from '../components/fontawesome.module';

import { BusinessLabsComponent } from './business-labs/business-labs.component';
import { LabRowComponent } from './lab-row/lab-row.component';
import { OrderLabsComponent } from './order-labs/order-labs.component';
import { LabsResultsComponent } from './labs-results/labs-results.component';
import { LabsRecommendedComponent } from './labs-recommended/labs-recommended.component';
import { BusinessLabRowComponent } from './business-lab-row/business-lab-row.component';
import { BooleanLabRowComponent } from './boolean-lab-row/boolean-lab-row.component';
import { RateLabRowComponent } from './rate-lab-row/rate-lab-row.component';
import { NumberLabRowComponent } from './number-lab-row/number-lab-row.component';
import { SelectLabRowComponent } from './select-lab-row/select-lab-row.component';
import { SortPipe } from './sort.pipe';
import { ProviderLabsComponent } from './provider-labs/provider-labs.component';
import { ClerkLabsComponent } from './clerk-labs/clerk-labs.component';


@NgModule({
  declarations: [
    LabRowComponent,
    BusinessLabsComponent,
    OrderLabsComponent,
    LabsResultsComponent,
    LabsRecommendedComponent,
    BusinessLabRowComponent,
    BooleanLabRowComponent,
    RateLabRowComponent,
    NumberLabRowComponent,
    SelectLabRowComponent,
    SortPipe,
    ProviderLabsComponent,
    ClerkLabsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MDBModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    CustomFontAwesomeModule,
    RouterModule
  ],
  exports: [
    BusinessLabsComponent,
    LabsResultsComponent,
    LabsRecommendedComponent,
    ProviderLabsComponent,
    ClerkLabsComponent
  ]
})
export class LabsModule { }
