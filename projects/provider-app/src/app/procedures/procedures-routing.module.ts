import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PpUnsavedChangesConfirmationComponent } from 'components/shared/popups/pp-unsaved-changes-confirmation/pp-unsaved-changes-confirmation.component';
import { CanDeactivateGuard } from 'guards/can-deactivate.guard';


import { InjectionsComponent } from './injections/injections.component';
import { MedicationsComponent } from './medications/medications.component';
import { ProceduresComponent } from './procedures/procedures.component';

const routes: Routes = [{
  path: '', component: ProceduresComponent, children: [
    { path: 'injections', component: InjectionsComponent, canDeactivate: [CanDeactivateGuard], },
    { path: 'medications', component: MedicationsComponent, canDeactivate: [CanDeactivateGuard], }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [CanDeactivateGuard],
  entryComponents: [PpUnsavedChangesConfirmationComponent],
})
export class ProceduresRoutingModule {
}
