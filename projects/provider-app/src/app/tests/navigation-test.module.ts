import { ModuleWithProviders, NgModule, Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Subject } from 'rxjs';
import { NavigationService } from 'services';
import { ExitPatientRoute, RouteState } from '../services/state';


@Injectable()
export class MockNavigationService {
  private readonly stateRoute: RouteState = {
    history: [],
    current: 'string',
    previous: 'string',
    position: 3,
    undoBack: new Subject<any>(),
    exitPatientRoute: {
      route: 'string',
      extras: {}
    }
  };

  public get routeState(): RouteState {
    return this.stateRoute;
  }

  public get isPatientsLocation(): boolean {
    return false;
  }

  public navigate(url: string | Array<any>, extras?: NavigationExtras): Promise<boolean> {
    return Promise.resolve(true);
  }

  public navigateByUrl(url: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  public navigateToPatients(setExitPatientRoute = false, extras?: NavigationExtras): Promise<boolean> {
    return Promise.resolve(true);
  }

  public setExitPatientRoute(route: string, extras?: NavigationExtras): void {}

  public getExitPatientRoute(): ExitPatientRoute {
    return this.stateRoute.exitPatientRoute;
  }

  public goBack(isNativeBack = false): void {}

  public clearHistory(): void {}

  public isAnyHistory(): boolean {
    return true;
  }

  public nativeBackNavigationStop(stopUrl?: string): void {}
}


@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: NavigationService, useClass: MockNavigationService
    }
  ]
})
export class NavigationTestModule {
  static withoutMock(): ModuleWithProviders<NavigationTestModule> {
    return {
      ngModule: NavigationTestModule,
      providers: [
        NavigationService
      ]
    };
  }
}
