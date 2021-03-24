import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { MaterialModule } from '../material.module';
import { PopupsModule } from '../components/shared/popups/popups.module';
import { MDBModule } from '../mdb.module';

import { InjectionOrderRowComponent } from './injection-order-row/injection-order-row.component';
import { MedicationOrderRowComponent } from './medication-order-row/medication-order-row.component';
import { MedicationRowComponent } from './medication-row/medication-row.component';
import { MedicationsComponent } from './medications/medications.component';

import { ProceduresRoutingModule } from './procedures-routing.module';

import { SelectOptionsPipe } from './select-options.pipe';
import { ProceduresComponent } from './procedures/procedures.component';
import { InjectionsComponent } from './injections/injections.component';
import { InjectionRowComponent } from './injection-row/injection-row.component';
import { GiCocktailComponent } from './gi-cocktail/gi-cocktail.component';
import { IvInjectionComponent } from './iv-injection/iv-injection.component';
import { GiCocktailOrderComponent } from './gi-cocktail-order/gi-cocktail-order.component';
import { IvInjectionOrderComponent } from './iv-injection-order/iv-injection-order.component';

@NgModule({
  declarations: [
    SelectOptionsPipe,
    MedicationOrderRowComponent,
    InjectionOrderRowComponent,
    MedicationRowComponent,
    ProceduresComponent,
    MedicationsComponent,
    InjectionsComponent,
    InjectionRowComponent,
    GiCocktailComponent,
    IvInjectionComponent,
    GiCocktailOrderComponent,
    IvInjectionOrderComponent
  ],
  imports: [
    CommonModule,
    MDBModule,
    PopupsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    RouterModule,
    ProceduresRoutingModule
  ],
  providers: [
    SelectOptionsPipe,
  ]
})
export class ProceduresModule { }
