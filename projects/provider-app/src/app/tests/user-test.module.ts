import { Injectable, NgModule } from '@angular/core';
import { Observable, of as ObservableOf, Subject } from 'rxjs';
import { UserRolesEnum } from '../common/enums/user-roles.enum';
import { UserAuthError } from '../common/models/user-auth.model';
import { UserInfoModel } from '../common/models/user-info.model';
import { BusinessModeEnum } from '../user/business-mode.enum';
import { UserService } from '../user/user.service';

@Injectable()
export class MockUserService {
  logoutEvent: Subject<boolean>;
  userSettings$: Observable<any> = new Subject<any>();

  defaultUser: UserInfoModel = {
    change_password: false,
    debug_mode: false,
    doctor_id: null,
    groups: null,
    locations: null,
    state_issued: null,
    full_name: null,
    user_token: null,
    license_number: null,
    medical_role: null,
    user_id: null,
    has_ehr_auth: false,
    has_signature: false,
    environment: {
      illness_presentation: null,
      business_name: null,
      is_room_active: null,
      location_tz: null,
      logo_url: null,
      integration_type: BusinessModeEnum.NONE
    },
    userSettings: { isTheDisclaimerDialogInLocalStorage: null, selectedLocations: null, availableLocations: null },
    authError: { title: null, message: null, priority: null },
    alerts: null,
    available_treatments: [
      'Procedures',
      'Wound Care',
      'Prescription Drugs',
      'Imaging',
      'Diet',
      'Discharge Disposition',
      'Labs',
      'OTC Drugs',
      'Activity',
      'Physical Therapy',
      'Return to Work/School Status',
      'Counseling',
      'Physical Exam'
    ],
    pa_user_role: null
  };

  defaultUserSettings = {
    selectedLocations: null,
    isTheDisclaimerDialogInLocalStorage: null
  };

  constructor() {
    this.logoutEvent = new Subject<boolean>();
  }

  public get getUserRole(): UserRolesEnum {
    return UserRolesEnum.OFFICE_CLERK;
  }

  public get auth() {
    return {
      emitLogout: (): void => { this.logoutEvent.next(true); },
      dismissLogout: (): void => { this.logoutEvent.next(false); },
      getLogoutEvent: (): Observable<boolean> => this.logoutEvent.asObservable(),
      emitForceLogout: (data): void => { this.logout(); },
      getForceLogoutEvent: (): Observable<any[]> => ObservableOf([]),
      setAuthError: (authError: UserAuthError): void => { },
      getAuthError: (): Observable<UserAuthError> => ObservableOf({title: '', message: '', priority: null}),
      getAuthErrorLastValue: (): UserAuthError => ({title: '', message: '', priority: null}),
      removeAuthError: (): void => {}
    };
  }

  public get userSettings() {
    return {
      load: (): any => this.defaultUserSettings,

      set: (settings: any): void => { },

      watch: (): Observable<any> => this.userSettings$
    };
  }

  public login(): Promise<boolean> {
    return Promise.resolve(true);
  }

  public getPublicKey() {}

  public logout(): void { }

  get isAuthenticated(): boolean {
    return true;
  }

  get isAuthenticated$(): Observable<boolean> {
    return ObservableOf(null);
  }

  get getUserData(): UserInfoModel {
    return this.defaultUser;
  }

  get getIsFastmedBusiness(): boolean {
    return false;
  }

  get getToken(): string {
    return 'user_token';
  }

  get getIsTheDisclaimerSuccess(): Observable<any> {
    return ObservableOf(null);
  }

  setIsTheDisclaimerSuccess(state: boolean): void { }

  get getIsDisclaimerShownOnce(): boolean {
    return true;
  }
  setIsDisclaimerShownOnce(state: boolean): void { }

  watchLoginQueryParams(msg: boolean, reload: boolean, qp) { }

  get businessAvailableTreatments() {
    return this.getUserData.available_treatments;
  }

  get isPICModeBusiness(): boolean {
    return false;
  }
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: UserService, useClass: MockUserService
    }
  ]
})
export class UserTestModule {}

