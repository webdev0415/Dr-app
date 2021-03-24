import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, of as ObservableOf, Subscription } from 'rxjs';


import { UserService } from '../user.service';
import { environment, versions } from '../../../environments';
import { ConfirmCodeFormComponent } from '../confirm-code-form/confirm-code-form.component';


@Component({
  selector: 'pa-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private confirmCodeForm: ConfirmCodeFormComponent;
  private isFormDisabled: boolean;
  private samlwait;
  private authErrorSub: Subscription;

  public readonly isProd = environment.forProd;
  public readonly version = versions.app;
  public server = environment.defaultServer;
  public loginForm: FormGroup;
  public isViewable: boolean;
  public hasResponseError: boolean;
  public responseMessageError: string | null;
  public isResetPassword: boolean;
  public sendCode = true;

  @ViewChild('confirmForm')
  set confirmFormInit(confirmForm: ConfirmCodeFormComponent) {
    this.confirmCodeForm = confirmForm;
    if (!this.isResetPassword) return;
    this.confirmCodeForm.resetPassword(this.sendCode).then(() => {}, (error: boolean | Error) => {
      if (typeof error === 'boolean') return;
      this.setResponseError(error.message);
      this.isResetPassword = false;
      this.changeDetector.detectChanges();
    });
  }

  constructor(
    private userService: UserService,
    private AR: ActivatedRoute,
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {
    this.loginForm = this.formBuilder.group({
      loginControl: ['', [Validators.required]],
      passwordControl: [null, [Validators.required]]
    });

    this.isFormDisabled = false;
    this.isViewable = true;
    this.isResetPassword = false;
    this.clearResponseError();
  }

  ngOnInit() {
    this.AR.queryParams.subscribe(qp => {
      const msg = qp && 'message' in qp;
      const reload = qp && 'r' in qp;
      const forceConfirmForm = qp && 'confirm' in qp;

      if (forceConfirmForm) {
        this.isViewable = false;
        this.isResetPassword = true;
        this.sendCode = false;
        this.changeDetector.detectChanges();
      }

      this.userService.watchLoginQueryParams(msg, reload, qp);

      if ('token' in qp) {
        this.samlwait = setInterval(() => {
          this.userService.SAML(qp['token']);
          if (this.samlwait) clearInterval(this.samlwait);
        }, 3000);
      }
    });
    this.authErrorSub = this.userService.auth.getAuthError().subscribe(error => {
      if (error && error.priority === -1) {
        this.setResponseError(error.message);
      } else {
        this.clearResponseError();
      }
      this.isFormDisabled = false;
      this.changeDetector.detectChanges();
    });
  }

  public get loginControl() {
    return this.loginForm.get('loginControl');
  }

  public get passwordControl() {
    return this.loginForm.get('passwordControl');
  }

  public get isDisabledSubmitButton(): Observable<boolean> {
    const isDisabled = this.isFormDisabled || this.loginForm.invalid;
    return ObservableOf(isDisabled);
  }

  public get formDisabled(): Observable<string | null> {
    return ObservableOf(this.isFormDisabled ? 'disabled' : null);
  }

  public get userName(): string {
    return this.loginControl.value.trim();
  }

  private setResponseError(message: string | null): void {
    this.responseMessageError = message;
    this.hasResponseError = true;
  }

  private clearResponseError(): void {
    this.responseMessageError = null;
    this.hasResponseError = false;
  }

  public doLogin() {
    this.isFormDisabled = true;
    this.clearResponseError();
    if (this.userService.auth.getAuthErrorLastValue()[2] === -1) this.userService.auth.removeAuthError();

    this.userService.login(this.loginControl.value.trim(), this.passwordControl.value);
  }

  public resetPassword(): void {
    this.clearResponseError();
    this.userService.auth.removeAuthError();
    if (this.loginControl.invalid) {
      this.setResponseError('Must enter username to reset password');
    } else {
      this.isViewable = false;
      this.isResetPassword = true;
      this.sendCode = true;
    }
    this.changeDetector.detectChanges();
  }

  public onChangeShownConfirmCodeForm(value: boolean): void {
    this.isViewable = !value;
    if (!value) this.isResetPassword = false;
  }

  ngOnDestroy(): void {
    if (this.authErrorSub) {
      this.authErrorSub.unsubscribe();
    }
  }
}
