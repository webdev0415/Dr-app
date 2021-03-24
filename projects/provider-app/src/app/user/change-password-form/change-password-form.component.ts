import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { StateService } from 'services/state.service';
import { StorageService } from 'services/storage.service';
import { NavigationService } from 'services/navigation.service';
import { UserService } from 'user/user.service';
import { DialogService } from 'services/app/dialog.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { NotificationsService } from 'components/notifications/notifications.service';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';

@Component({
  selector: 'pa-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements AfterViewInit, OnDestroy {
  private readonly passwordFormatRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
  public isNeedToSetNewPassword = false;
  public formDisabled: boolean;
  public passwordsNotEqual: boolean;
  public passwordsMatchFormat: boolean;
  public passwordsEmpty: boolean;
  public oldEqualNew: boolean;
  public oldPassword: string;
  public newPassword: string;
  public newPasswordConfirm: string;
  public buttonDisabled: boolean;

  constructor(
    private AR: ActivatedRoute,
    private stateService: StateService,
    private navigationService: NavigationService,
    private titleService: Title,
    private changeDetector: ChangeDetectorRef,
    private storageService: StorageService,
    private userService: UserService,
    private notificationService: NotificationsService,
    private dialogService: DialogService,
    private dialogSubscribesService: DialogSubscribesService
  ) {
    this.oldPassword = this.newPassword = this.newPasswordConfirm = '';
  }

  ngAfterViewInit() {
    this.titleService.setTitle('Provider Application');
    this.stateService.app.header.setData(this.isNeedToSetNewPassword ? 'Set a new password' : 'Change password');

    this.AR.queryParams.subscribe(params => {
      if ('action' in params) {
        if (this.storageService.session.getItem('cpw')) {
          const extras = {
            queryParams:
              {
                action: 'new'
              },
            replaceUrl: true,
          }
;         if (params['action'] === 'new') extras['skipLocationChange'] = true;
          this.navigationService.navigate('passwd', extras);
        }

        switch (params['action']) {
          case 'new':
            this.isNeedToSetNewPassword = true;
            break;
          default:
            this.isNeedToSetNewPassword = false;
            break;
        }
      }
    });

    this.buttonDisabled = true;
    this.passwordsEmpty = true;
    this.passwordsNotEqual = false;
    this.oldEqualNew = false;
    this.changeDetector.detectChanges();
  }

  public checkPasswd() {
    this.checkEmptyPasswords();
    this.checkPasswordEquality();
    this.checkOldPassEqualToANew();
    this.checkPasswordFormat();
    this.buttonDisabled = this.passwordsEmpty || this.passwordsNotEqual || !this.passwordsMatchFormat || this.oldEqualNew;
    this.changeDetector.detectChanges();
  }

  private checkEmptyPasswords() {
    if (this.isNeedToSetNewPassword) {
      this.passwordsEmpty = (this.newPassword === '') || (this.newPasswordConfirm === '');
    } else {
      this.passwordsEmpty = (this.oldPassword === '') || (this.newPassword === '') || (this.newPasswordConfirm === '');
    }
  }

  private checkOldPassEqualToANew() {
    this.oldEqualNew = !(this.isNeedToSetNewPassword || this.passwordsEmpty || (this.oldPassword !== this.newPassword));
  }

  private checkPasswordEquality() {
    if (!this.passwordsEmpty)
      this.passwordsNotEqual = this.newPassword !== this.newPasswordConfirm;
    else
      this.passwordsNotEqual = true;
  }

  private checkPasswordFormat() {
    this.passwordsMatchFormat = this.passwordFormatRegex.test(this.newPassword);
  }

  doChangePassword() {
    if (this.isNeedToSetNewPassword) {
      this.userService.setNewPassword(this.newPassword, this.newPasswordConfirm).subscribe(result => {
        if (result && result.status) this.navigationService.navigateToPatients();
        else if (result && result.message) {
          this.dialogService.open(PpcustomdialogComponent, this.dialogSubscribesService.getConfig({
            message: 'Password successfully changed.',
            isDialog: false
          })).subscribe(() => {
            this.storageService.session.removeItem('cpw');
            this.navigationService.navigateToPatients();
          });
        }
      });
    } else {
      this.userService.changeOldPassword(this.oldPassword, this.newPassword, this.newPasswordConfirm).subscribe(result => {
        if (result && result.message && !(result instanceof HttpErrorResponse)) {
          this.stateService.app.workers.rm();
          this.navigationService.navigateToPatients();
          this.notificationService.success('Your password has been changed successfully');
        }
      });
    }
  }

  ngOnDestroy() {
    this.changeDetector.detach();
  }
}
