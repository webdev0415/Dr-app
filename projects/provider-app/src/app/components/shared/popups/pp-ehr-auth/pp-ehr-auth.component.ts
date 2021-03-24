import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { of } from 'rxjs';
import { catchError, concatMap, filter, finalize } from 'rxjs/operators';

import { DialogService } from 'services/app/dialog.service';
import { CryptographicService } from 'services/cryptographic.service';
import { UserService } from 'user/user.service';
import { PatientListService } from '../../../../patient-list/services/patient-list.service';
import { StateService } from '../../../../services';
import { SetUserAvailableLocations } from '../../../../user/store/user.actions';
import { PpcustomdialogComponent } from '../ppcustomdialog/ppcustomdialog.component';
import { stdDialogConfig } from 'static/app.constants';
import { UserAuthError } from 'common/models/user-auth.model';
import { NotificationsService } from 'components/notifications/notifications.service';

@Component({
  selector: 'pa-pp-ehr-auth',
  templateUrl: './pp-ehr-auth.component.html',
  styleUrls: ['./pp-ehr-auth.component.scss']
})
export class PpEhrAuthComponent {
  public ehrAuthForm = new FormGroup({
    username: new FormControl(null, [Validators.required, this.ehrUserNameValidator()]),
    password: new FormControl(null, Validators.required),
    location: new FormControl()
  });

  public responseError: UserAuthError = null;
  public isPICBusiness: boolean;
  public businessLocations: { [key in 'label'|'value']: string }[];
  public title: string = `Please provide your login credentials for your company's health record system`;

  constructor(
    public dialogRef: MatDialogRef<PpEhrAuthComponent>,
    private dialogService: DialogService,
    private userService: UserService,
    private cryptographicService: CryptographicService,
    private notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA) data: { isPICBusiness: boolean; locations: string[], location: string, requiredForPatient: boolean },
    private store: Store,
    private stateService: StateService
  ) {
    this.isPICBusiness = data.isPICBusiness;
    const location = data.location;

    if (data.requiredForPatient) {
      this.title = `Please validate your EHR credentials for ${location.charAt(0).toUpperCase() + location.slice(1)} to process this patient.`;
    }

    if (this.isPICBusiness) {
      this.ehrAuthForm.setValue({ username: null, password: null, location });
    }
    // this.businessLocations = data.locations.map(location => ({ label: location, value: location }));
    this.businessLocations = [{
       value: 'chicagoland', label: 'Chicagoland'
    }, {
       value: 'rockford', label: 'Rockford'
     }, {
       value: 'indiana', label: 'Indiana'
    }, {
       value: 'wisconsin', label: 'Wisconsin'
    }];
    if (!this.isPICBusiness) this.ehrAuthForm.get('location').clearValidators();
  }

  ehrUserNameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const { value } = control;
      if (!value ||
           value.toLowerCase() === `advinow@picsp` ||
           value.toLowerCase() === `advinow@pictr` ||
           value.toLowerCase() === `advinow0@picsp` ||
           value.toLowerCase() === `advinow1@picsp` ||
           value.toLowerCase() === `advinow2@picsp` ||
           value.toLowerCase() === `advinow3@picsp` ||
           value.toLowerCase() === `advinow4@picsp` ||
           value.toLowerCase() === `advinow5@picsp` ||
           value.toLowerCase() === `advinow6@picsp` ||
           value.toLowerCase() === `advinow7@picsp` ||
           value.toLowerCase() === `advinow8@picsp` ||
           value.toLowerCase() === `advinow9@picsp` ||
           value.toLowerCase() === `advinow10@picsp` ||
           value.toLowerCase() === `jdonovan@pictr`) {
        return null;
      }

      if (!this.ehrAuthForm) {
        return;
      }

      const { location } = this.ehrAuthForm.value;

      if (location === 'chicagoland' && !value.endsWith('@picch')) {
        return { invalidUser: { value: control.value } };
      }
      if (location === 'rockford' && !value.endsWith('@pic')) {
        return { invalidUser: { value: control.value } };
      }
      if (location === 'wisconsin' && !value.endsWith('@picwi')) {
        return { invalidUser: { value: control.value } };
      }
      if (location === 'indiana' && !value.endsWith('@picin')) {
        return { invalidUser: { value: control.value } };
      }

      return null;
    };
  }

  locationChanged() {
    this.ehrAuthForm.controls.username.updateValueAndValidity();
  }

  onSubmit() {
    const credentials = this.ehrAuthForm.value;
    this.ehrAuthForm.disable();
    this.responseError = null;

    this.userService.getPublicKey()
      .pipe(
        concatMap((key) => {
          this.cryptographicService.criptify(JSON.stringify(credentials), key);
          return this.userService.ehrAuth(this.cryptographicService.encryptedCredentials);
        }),
        catchError((error: Error) => {
          error.message === 'Unknown' ? this.responseError = null : this.responseError = {title: '', message: error.message, priority: 0};
          this.cryptographicService.encryptedCredentials = null;
          return of(null);
        }),
        filter(response => !!response),
        finalize(() => this.ehrAuthForm.enable())
      )
      .subscribe(result => {
        this.responseError = null;
        this.notificationService.success('You have successfully logged in to the EHR system', 'Health Record System');
        if (this.isPICBusiness) {
          const ehrLocationId = this.ehrAuthForm.value.location;
          this.store.dispatch(new SetUserAvailableLocations([ehrLocationId]));
          this.stateService.app.setEhrLoggedStatus(ehrLocationId);
        }
        this.dialogRef.close({ skipped: false });
    });
  }

  onSkip() {
    if (this.isPICBusiness) {
      this.dialogRef.close();
      return;
    }

    const data = {
      message: this.isPICBusiness ?
        'Are you sure you want to logout?' :
        'By skipping this step you will NOT be able to order medications for your patients.',
      isDialog: true,
      cancelText: 'RETURN'
    };
    const config = Object.assign(new MatDialogConfig(), { ...stdDialogConfig, data });

    this.dialogService.open(PpcustomdialogComponent, config).subscribe(isClosed => {
      if (isClosed) {
        this.dialogRef.close({ skipped: true });
      }
    });
  }

}
