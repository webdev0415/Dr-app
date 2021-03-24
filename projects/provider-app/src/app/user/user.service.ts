import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { Alert } from 'common/interfaces/alert';
import { Audit } from 'common/models/data.model';
import { SamlAnswerModel } from 'common/models/saml-answer.model';
import { UserAuthError, UserAuthModel } from 'common/models/user-auth.model';
import { UserInfoModel, UserSettingsModel } from 'common/models/user-info.model';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { isNil } from 'ramda';

import { iif, Observable, of, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, concatMap, debounceTime, filter, finalize, map, take, tap } from 'rxjs/operators';
import { DialogService } from 'services/app/dialog.service';


import { LazyService } from 'services/lazy.service';
import { StateService } from 'services/state.service';
import { StorageService } from 'services/storage.service';
import { WindowRefService } from 'services/window-ref.service';
import { stdDialogConfig } from 'static/app.constants';
import { TreatmentType } from 'treatments/treatments.type';
import { PpUserSignatureComponent } from 'user/pp-user-signature/pp-user-signature.component';
import { environment } from '../../environments/environment';
import { BusinessModeEnum } from './business-mode.enum';
import {
  ForceLogout,
  Login,
  Logout,
  RemoveAuthError,
  SamlLogin,
  SetAlerts,
  SetAuthError,
  SetHasSignature,
  SetUserSettings
} from './store/user.actions';
import { UserState } from './store/user.state';


type SignatureResponse = Omit<Audit, 'description' | 'media_type' | 's3Blob' | 'session_key' | 'measurement_type'>;

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  private userSettings$: Observable<UserSettingsModel> = this.store.select(UserState.getUserSettings);
  private _isAuthenticated$: Observable<boolean> = this.store.select(UserState.isLoggedIn);
  private authError$: Observable<{ title: string, message: string, priority: number }> = this.store.select(UserState.getAuthError);
  private isChangePassword$: Observable<boolean> = this.store.select(UserState.isChangePassword);

  private userAuth: UserAuthModel = {
    logoutEvent: new Subject<boolean>(),
    forceLogoutEvent: new Subject<[string, string, number]>()
  };

  private isChangeOldPassword = false;

  private isTheDisclaimerSuccess: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private isDisclaimerShownOnce = false;

  private userRole: UserRolesEnum | null;
  private _signature: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  private usersURL = `${environment.apiDomain}/api/users`;
  private apiURL = `${environment.apiDomain}/api`;

  constructor(
    private stateService: StateService,
    private storageService: StorageService,
    private dialogService: DialogService,
    private store: Store,
    private router: Router,
    private http: HttpClient,
    private windowService: WindowRefService,
    private lazyService: LazyService,
    private ngZone: NgZone
  ) {
    this.store.select(UserState.hasSignature).pipe(debounceTime(10000), filter(hasSignature => !!hasSignature && !this._signature.getValue())).subscribe((has) => this.loadSignature());
  }

  private checkRole(): UserRolesEnum {
    if (isNil(this.store.selectSnapshot(UserState.userRole))) return null;
    this.userRole = this.store.selectSnapshot(UserState.userRole);
    return this.userRole;
  }

  public login(username: string, password: string): void {
    const body = { username, password };

    this.isChangePassword$.subscribe(result => {
      if (result) this.changePassword();
    });

    this.store.dispatch(new Login(body));
  }

  public ehrAuth(credentials: string): Observable<any> {
    return this.http.post<any>(`${environment.apiDomain}/api/ehr_credential_verification/`, { blob: credentials});
  }

  public getPublicKey() {
    return this.http.get(`${environment.apiDomain}/pubkey`, { responseType: 'text' });
  }

  /**
   *
   * @param message [Title, Message Text, Priority (0 - info, 1 - success, 2 - warning, 3 - error)]
   * @param forced force logout without confirmation and sending logout requests
   */
  public logout(message?: [string, string, number], forced?: boolean) {
    this.stateService.app.workers.add();

    if (!forced) {
      this.store.dispatch(new Logout())
        .pipe(finalize(() => this.stateService.app.workers.rm()))
        .subscribe(result => {
        if (result) {
          this.setIsDisclaimerShownOnce(false);
          this.appLogoutRoutine(message);
        }
      });
    } else {
      this.store.dispatch(new ForceLogout());
      this.appLogoutRoutine(message);
      this.stateService.app.workers.rm();
    }
  }

  appLogoutRoutine(message?: [string, string, number]) {
    if (this.windowService.nativeWindow.caches) {
      this.windowService.nativeWindow.caches.keys().then(cacheKeys => {
        cacheKeys.forEach(key => {
          if (key.indexOf('dynamic:api') !== -1) {
            caches.delete(key).catch(err => console.error('Cache error: ' + err));
          }
        });
      });
    }

    this.stateService.patient.erase();
    this.stateService.app.header.setData(null);
    this.dialogService.dialog.closeAll();
    this.storageService.session.removeItem('cpw');

    this.eraseDisclaimer();
    this.userRole = null;

    if (message) {
      this.auth.setAuthError({title: message[0], message: message[1], priority: message[2]});
    }

    this.router.navigate(['/login']).then( () =>
      this.windowService.nativeWindow.location.reload()
    );
  }

  private changePassword(): void {
    this.storageService.session.setItem('cpw', 't');
    this.router.navigate(['/passwd'], {queryParams: {action: 'new'}}).then(
      (isSuccess: boolean) => {
        if (!isSuccess) return;
        const msg = this.isChangeOldPassword ? 'Password has been reset. Please set a new password.' : 'You are logging in for' +
          ' the first time. Please set a new password.';
        this.stateService.app.message.send(msg);
      }
    );
  }

  public set setIsChangeOldPassword(value: boolean) {
    this.isChangeOldPassword = value;
  }

  public setNewPassword(password: string, confirm: string): Observable<any> {
    return this.http.post(
        `${this.usersURL}/new_password/`,
        { password, password_confirm: confirm },
        { params: { addWorker: '' } }
      );
  }

  public changeOldPassword(oldPassword: string, newPassword: string, confirm: string): Observable<any> {
    const body = { old_password: oldPassword, password: newPassword, password_confirm: confirm };
    return this.http.post(
        `${this.usersURL}/password_change/`,
        body,
        { params: { addWorker: '' } }
      );
  }

  public resetPassword(userName: string): Promise<any> {
    return this.http.post(
        `${this.usersURL}/reset_password/send_code/`,
        { username: userName.toLowerCase() },
        { params: { addWorker: '' } }
      ).toPromise();
  }

  public verifyCode(userName: string, code: string): Observable<any> {
    return this.http.post(
        `${this.usersURL}/reset_password/verify_code/`,
        { code, username: userName.toLowerCase() },
        { params: { addWorker: '' } }
      );
  }

  public SAML(token: string) {
    if (token) {
      this.store.dispatch(new SamlLogin(token))
        .subscribe(state => {
          if (!state.user) return;
          if (this.checkAnswer(state.user)) {
            if (!(this.checkRole())) return;

            this.auth.removeAuthError();
            this.router.navigate(['/patients']);
          }
        });
    }
  }

  private checkAnswer(answer: SamlAnswerModel | any): boolean {
    if (answer !== null && typeof answer === 'object') {
      return (('user_token' in answer) && ('full_name' in answer) && ('debug_mode' in answer));
    } else {
      return false;
    }
  }

  public get auth() {
    return {
      emitLogout: (): void => { this.userAuth.logoutEvent.next(true); },
      dismissLogout: (): void => { this.userAuth.logoutEvent.next(false); },
      getLogoutEvent: (): Observable<boolean> => this.userAuth.logoutEvent.asObservable(),
      emitForceLogout: (data): void => { this.userAuth.forceLogoutEvent.next(data); },
      getForceLogoutEvent: (): Observable<[string, string, number]> => this.userAuth.forceLogoutEvent.asObservable(),
      setAuthError: (authError: UserAuthError): void => { this.store.dispatch(new SetAuthError(authError)); },
      getAuthError: (): Observable<UserAuthError> => this.authError$,
      getAuthErrorLastValue: (): UserAuthError => <UserAuthError>this.store.selectSnapshot(UserState.getAuthError),
      removeAuthError: (): void => { this.store.dispatch(new RemoveAuthError()); },
    };
  }

  public get userSettings() {
    return {
      load: (): UserSettingsModel => this.getUserData.userSettings,

      set: (settings: UserSettingsModel): void => { this.store.dispatch(new SetUserSettings(settings)); },

      watch: (): Observable<UserSettingsModel> => this.userSettings$,
    };
  }

  get getToken(): string {
    return this.store.selectSnapshot(UserState.token);
  }

  get getUserData(): UserInfoModel {
    return this.store.snapshot().user;
  }

  get getUserRole(): UserRolesEnum {
    if (isNil(this.userRole)) this.checkRole();
    return this.userRole;
  }

  get getIsDisclaimerShownOnce(): boolean {
    return this.isDisclaimerShownOnce;
  }

  get isAuthenticated(): boolean {
    return this.store.selectSnapshot(UserState.isLoggedIn);
  }

  get isAuthenticated$(): Observable<boolean> {
    return this._isAuthenticated$;
  }

  get getIsFastmedBusiness(): boolean {
    const regex = RegExp('Fastmed', 'i');
    return regex.test(this.getUserData.environment.business_name);
  }

  get isPICModeBusiness(): boolean {
    return this.getUserData.environment.integration_type === BusinessModeEnum.PIC;
  }

  get getIsTheDisclaimerSuccess(): Observable<any> {
    return this.isTheDisclaimerSuccess.asObservable();
  }

  setIsTheDisclaimerSuccess(state: boolean): void {
    this.isTheDisclaimerSuccess.next(state);
  }

  setIsDisclaimerShownOnce(state: boolean): void {
    this.isDisclaimerShownOnce = state;
  }

  eraseDisclaimer(): void {
    this.setIsTheDisclaimerSuccess(null);
  }

  watchLoginQueryParams(msg: boolean, reload: boolean, qp) {
    if (msg) {
      this.router.navigate(['/login'], { queryParams: { message: qp['message'] } });
      this.stateService.app.message.send(qp['message']);
    }
  }

  setAlerts(alerts: Alert[]): void {
    this.store.dispatch(new SetAlerts(alerts));
  }

  get businessAvailableTreatments(): TreatmentType[] {
    return this.getUserData.available_treatments;
  }

  private set signature(signatureUrl: string) {
    this.lazyService.lazyLoadImageBase64(signatureUrl, 'image/jpeg').pipe(take(1)).subscribe(signature => this._signature.next(signature));
  }

  get signature$(): Observable<string> {
    return this._signature.asObservable();
  }

  loadSignature(): void {
    this.http.get<SignatureResponse>(`${this.apiURL}/signature/`).pipe(
      map(result => result.s3),
      tap(signatureURL => this.signature = signatureURL),
      catchError(() => of(null))
    ).subscribe();
  }

  saveSignature(signatureFile: File): Observable<SignatureResponse> {
    const data = new FormData();
    data.append('file', signatureFile);
    return this.http.post<SignatureResponse>(`${this.apiURL}/signature/`, data, { params: { addWorker: '' } })
      .pipe(tap(() => this.store.dispatch(new SetHasSignature(true))));
  }

  finalizeConfirmation(): Observable<boolean> {
    const confirmationResult = new Subject<boolean>();
    const signDialog = this.dialogService.open<[File, string]>(
      PpUserSignatureComponent,
      Object.assign(new MatDialogConfig(), {
        ...stdDialogConfig,
        width: '650px',
        data: {username: this.getUserData.full_name.split(' ').join('-')}
      })
    ).pipe(take(1), concatMap(([signatureFile, signatureBase64]) => iif(
      () => [signatureFile, signatureBase64].every(item => !!item),
      this.saveSignature(signatureFile).pipe(map(() => {
        this.signature = signatureBase64;
        return true;
      })),
      of(false)
      ))
    );
    const approveDialog = this.dialogService.open<boolean>(
      PpcustomdialogComponent,
      Object.assign(new MatDialogConfig(), {
        ...stdDialogConfig,
        data: {message: 'Approve and sign notes?', isDialog: true}
      })
    );
    this.ngZone.run(() => this.signature$.pipe(
      concatMap(signature => iif(() => Boolean(signature), approveDialog, signDialog)),
      tap(signature => {
        const approved = Boolean(signature);
        if (!approved) this.stateService.patient.emitFinalizeProcessSucceed(false);
      }),
      take(1)
    ).subscribe(result => confirmationResult.next(result)));
    return confirmationResult.asObservable();
  }
}

