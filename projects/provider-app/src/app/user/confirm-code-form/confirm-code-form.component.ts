import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { NotificationsService } from 'components/notifications/notifications.service';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { of as ObservableOf } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { StateService } from 'services';
import { UserService } from '../user.service';


@Component({
  selector: 'pa-confirm-code-form',
  templateUrl: './confirm-code-form.component.html',
  styleUrls: ['./confirm-code-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmCodeFormComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { static: true }) private modal: ModalDirective;
  @Output() private changeShown: EventEmitter<boolean> = new EventEmitter<boolean>();

  private readonly modalSubscription: Subscription[] = [];
  private codeVerified: boolean;

  public needToValidateCode: boolean;
  public resetForm: FormGroup;
  public hasResponseError: boolean;
  public responseMessageError: string;

  @Input() private set userName(value: string) {
    this.confirmationFormModalUser.setValue(value);
  }

  constructor(
    private stateService: StateService,
    private userService: UserService,
    private notificationService: NotificationsService,
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {
    this.needToValidateCode = false;
    this.codeVerified = false;

    this.resetForm = this.formBuilder.group({
      confirmationFormModalUser: [null, [Validators.required]],
      confirmationFormModalCode: [null, [this.codeValidator()]]
    });
  }

  ngOnInit() {
    this.modalSubscription.push(this.modal.onShow.subscribe(() => this.isShown = true));
    this.modalSubscription.push(this.modal.onHide.subscribe(() => this.isShown = false));
  }

  private get userName(): null | string {
    return this.confirmationFormModalUser.value;
  }

  private get confirmationCode(): null | string {
    return this.confirmationFormModalCode.value;
  }

  private set isShown(value: boolean) {
    this.changeShown.emit(value);
  }

  private codeValidator(): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} | null => {
      return !this.codeVerified ? {validCode: true} : null;
    };
  }

  private setResponseError(message: string): void {
    this.hasResponseError = true;
    this.responseMessageError = message;
    this.changeDetector.detectChanges();
  }

  private clearResponseError(): void {
    this.hasResponseError = false;
    this.responseMessageError = null;
    this.changeDetector.detectChanges();
  }

  resendCode(): void {
    this.clearResponseError();
    this.userService.resetPassword(this.userName).then(
      (response) => {
        if (response && response.code && response.detail && response.username) {
          this.needToValidateCode = false;
          this.confirmationFormModalCode.reset();
          this.notificationService.success('SMS Code Sent');
        }
      }, (error) => {
        if (error && error.message) {
          this.setResponseError(error.message);
        }
      }
    );
  }

  verifyCode(): void {
    this.clearResponseError();
    this.userService.verifyCode(this.userName, this.confirmationCode).subscribe(result => {
      if (result) {
        if (result['new_password']) {
          this.codeVerified = true;
          this.modal.hide();
          this.isShown = false;
          this.notificationService.success('Check email for new password!');
        } else {
          this.codeVerified = false;
        }
        this.needToValidateCode = true;
      }
      this.confirmationFormModalCode.updateValueAndValidity();
    }, error => {
      this.setResponseError(error.message);
      this.changeDetector.detectChanges();
    });
  }

  get confirmationFormModalUser() {
    return this.resetForm.get('confirmationFormModalUser');
  }

  get confirmationFormModalCode() {
    return this.resetForm.get('confirmationFormModalCode');
  }

  get isConfirmModalDisabledSubmitButton(): Observable<boolean> {
    if (this.confirmationCode === null ||
      this.confirmationCode.toString().match(/^[0-9]+$/) === null )
      return ObservableOf(true);
    const isDisabled = this.confirmationFormModalUser.invalid;
    return ObservableOf(isDisabled);
  }

  onInput(event) {
    const input = event.target;
    const notInteger = Boolean(event.data && event.data.match(/[^0-9]/));
    if (input.value.length >= Number(input.attributes.maxlength.value) && input.selectionStart === input.selectionEnd || notInteger) {
      event.preventDefault();
    }
  }

  public resetPassword(sendCode = true): Promise<boolean> {
    const workers = this.stateService.app.workers;
    workers.add();
    const resetPassword = sendCode ? this.userService.resetPassword(this.userName) : new Promise<{detail: string, username: string}>((resolve) => {resolve({detail: ' ', username: ' '}); });

    return resetPassword
    .finally(() => {
      workers.rm();
    })
    .then((response) => {
        if (response && response.detail && response.username) {
          this.stateService.app.workers.rm();
          if (sendCode) this.notificationService.success('Enter the code from the SMS', 'SMS Code Sent');
          this.confirmationFormModalUser.markAsTouched();
          this.needToValidateCode = false;
          this.confirmationFormModalCode.reset();
          this.modal.show();
          this.isShown = true;
          this.userService.setIsChangeOldPassword = true;
        } else if (response && response.error) {
          this.isShown = false;
        }
        return Promise.resolve(true);
      }
    );
  }

  ngOnDestroy() {
    this.modalSubscription.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
