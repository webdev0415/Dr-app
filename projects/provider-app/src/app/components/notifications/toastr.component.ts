import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApplicationRef, Component, ViewEncapsulation } from '@angular/core';
import { ToastComponent, ToastPackage } from 'ng-uikit-pro-standard';

@Component({
  /* tslint:disable-next-line */
  selector: 'div[class="toast-notification"]',
  styleUrls: ['./toastr.component.scss'],
  templateUrl: './toastr.component.html',
  animations: [
    trigger('flyInOut', [
      state('inactive', style({opacity: 0})),
      state('active', style({opacity: .9})),
      state('removed', style({opacity: 0})),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => removed', animate('300ms ease-in')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})

export class ToastrComponent extends ToastComponent {
  private backupWidth: number;
  private timeoutBackup: number;

  constructor(
    protected appRef: ApplicationRef,
    toastPackage: ToastPackage,
  ) {
    super(toastPackage, appRef);
    this.timeoutBackup = this.options.timeOut;
  }

  stickAround(): void {
    if (this.state === 'removed') {
      return;
    }
    clearTimeout(this.timeout);
    const changeExtendedTimeout = this.options.extendedTimeOut && this.options.timeOut !== this.timeoutBackup && this.options.timeOut !== this.options.extendedTimeOut;
    if (changeExtendedTimeout) {
      this.options.extendedTimeOut = this.hideTime - new Date().getTime();
    }
    this.backupWidth = this.width;
    this.options.timeOut = 0;
    this.hideTime = 0;
    clearInterval(this.intervalId);
    this.width = 0;
  }

  delayedHideToast(): void {
    if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
      return;
    }
    this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = +(this.options.extendedTimeOut / (this.backupWidth / 100));
    this.hideTime = new Date().getTime() + this.options.extendedTimeOut;
    this.width = this.backupWidth;
    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }
}
