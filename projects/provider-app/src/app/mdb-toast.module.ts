import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng-uikit-pro-standard';

import { ToastrComponent } from './components/notifications/toastr.component';


@NgModule({
  declarations: [
    ToastrComponent
  ],
  entryComponents: [ToastrComponent],
  imports: [
    CommonModule,
    ToastModule.forRoot({preventDuplicates: true, toastComponent: ToastrComponent}),
  ],
  providers: [],
  exports: [
    ToastrComponent
  ]
})
export class MDBToastModule {
  static forRoot(): ModuleWithProviders<MDBToastModule> {
    return {
        ngModule: MDBToastModule
    };
}
}
