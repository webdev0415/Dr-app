import { ModuleWithProviders, NgModule, Injectable } from '@angular/core';
import { ActiveToast, IndividualConfig } from 'ng-uikit-pro-standard';
import { NotificationsService } from '../components/notifications/notifications.service';


@Injectable()
export class MockNotificationsService {
  constructor() {
    window['notificator'] = this;
  }

  public info(message: string, title?: string, configuration?: IndividualConfig): void {}

  public success(message: string, title?: string, configuration?: IndividualConfig): void  {}

  public warning(message: string, title?: string, configuration?: IndividualConfig): void  {}

  public error(message: string, title?: string, configuration?: IndividualConfig): void  {}

  public getToasts(): ActiveToast[] { return []; }
}


@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: NotificationsService, useClass: MockNotificationsService
    }
  ]
})
export class NotificationsTestModule {
  static withoutMock(): ModuleWithProviders<NotificationsTestModule> {
    return {
      ngModule: NotificationsTestModule,
      providers: [
        NotificationsService
      ]
    };
  }
}
