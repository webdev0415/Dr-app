import { Injectable } from '@angular/core';
import { ActiveToast, IndividualConfig, ToastService } from 'ng-uikit-pro-standard';

import { Configuration } from 'app.config';
import { WindowRefService } from '../../services/window-ref.service';


@Injectable()
export class NotificationsService {

  constructor(
    private mdbToaster: ToastService,
    private cfg: Configuration,
    private windowService: WindowRefService
  ) {
    this.windowService.nativeWindow['notificator'] = this;
  }

  public info(message: string, title?: string, configuration?: IndividualConfig) {
    return this.mdbToaster.info(message, title, this.getConfig('info', configuration));
  }

  public success(message: string, title?: string, configuration?: IndividualConfig) {
    return this.mdbToaster.success(message, title, this.getConfig('success', configuration));
  }

  public warning(message: string, title?: string, configuration?: IndividualConfig) {
    return this.mdbToaster.warning(message, title, this.getConfig('warning', configuration));
  }

  public error(message: string, title?: string, configuration?: IndividualConfig) {
    return this.mdbToaster.error(message, title, this.getConfig('error', configuration));
  }

  public remove(toastId) {
    this.mdbToaster.remove(toastId);
  }

  private getConfig(type: 'info' | 'success' | 'warning' | 'error', configuration: IndividualConfig): IndividualConfig {
    return configuration ? configuration : this.cfg.notificationsConfiguration[type];
  }

  public getToasts(): ActiveToast[] {
    return this.mdbToaster.toasts;
  }
}
