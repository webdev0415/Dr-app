import { ModuleWithProviders, NgModule } from '@angular/core';
import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router';

import { LogoutGuard } from 'guards/logout.guard';
import { GoToPatientGuard } from 'guards/gotopatient.guard';
import { LoginGuard } from 'guards/login.guard';
import { FreePatientGuard } from 'guards/freepatient.guard';

import { NotfoundComponent } from 'components/errors/404/notfound.component';
import { ChangePasswordFormComponent } from 'user/change-password-form/change-password-form.component';
import { LoginFormComponent } from 'user/login-form/login-form.component';
import { PasswordChangeGuard } from 'guards/password-change.guard';

import { CustomRouteReuseStrategy } from './route-reuse-strategy';
import { Routes } from 'common/interfaces/route.interface';
import { PatientsResolver } from 'components/shared/resolvers/patients.resolver';
import { PatientListContainerComponent } from './patient-list/patient-list-container/patient-list-container.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patients' },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'SAML',
    component: LoginFormComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'passwd',
    component: ChangePasswordFormComponent,
    canActivate: [LoginGuard, FreePatientGuard]
  },
  {
    path: 'patients',
    pathMatch: 'full',
    component: PatientListContainerComponent,
    resolve: {
      patientsList: PatientsResolver
    },
    canActivate: [LoginGuard, FreePatientGuard, PasswordChangeGuard]
  },
  {
    path: 'debug',
    component: PatientListContainerComponent,
    resolve: {
      patientsList: PatientsResolver
    },
    data: { debugMode: true },
    canActivate: [LoginGuard, FreePatientGuard, PasswordChangeGuard]
  },
  {
    path: 'patients',
    loadChildren: () => import('./components/app/workspace/patientspace/patientspace.module').then(m => m.PatientSpaceModule),
    canActivate: [LoginGuard, GoToPatientGuard, PasswordChangeGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top',
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule {
  static forRoot(): ModuleWithProviders<RoutingModule> {
    return {
      ngModule: RoutingModule,
      providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
        ]
    };
  }
}
