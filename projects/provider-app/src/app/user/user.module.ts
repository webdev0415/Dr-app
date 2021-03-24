import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { RouteReuseStrategy } from '@angular/router';

import { InputUtilitiesModule } from 'ng-uikit-pro-standard';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { CustomRouteReuseStrategy } from 'route-reuse-strategy';


import { LoginFormComponent } from './login-form/login-form.component';
import { MDBModule } from 'mdb.module';
import { MaterialModule } from 'material.module';
import { UserService } from './user.service';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ConfirmCodeFormComponent } from './confirm-code-form/confirm-code-form.component';
import { UserState } from './store/user.state';
import { environment } from '../../environments/environment';
import { PpUserSignatureComponent } from './pp-user-signature/pp-user-signature.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    ChangePasswordFormComponent,
    ConfirmCodeFormComponent,
    PpUserSignatureComponent,
  ],
  imports: [
    CommonModule,
    MDBModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    InputUtilitiesModule,
    CanvasWhiteboardModule,
    NgxsModule.forRoot([UserState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({
      key: ['user', 'patientsTables'],
      storage: StorageOption.SessionStorage
    })
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    PpUserSignatureComponent
  ]
})
export class UserModule {
  static forRoot(): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        UserService
      ]
    };
  }
}
