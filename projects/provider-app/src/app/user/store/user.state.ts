import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MedicalRoleEnum, UserRolesEnum } from 'common/enums/user-roles.enum';
import { UserInfoModel } from 'common/models/user-info.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TreatmentTypesEnum } from '../../treatments/enum/treatment-types.enum';
import { BusinessModeEnum } from '../business-mode.enum';

import {
  ForceLogout,
  Login,
  Logout,
  RemoveAuthError,
  SamlLogin,
  SetAlerts,
  SetAuthError,
  SetHasSignature, SetUserAvailableLocations,
  SetUserSettings
} from './user.actions';

const defaultUser: UserInfoModel = {
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
  userSettings: {
    isTheDisclaimerDialogInLocalStorage: null,
    isEhrAuthModalSkipped: null,
    selectedLocations: null
  },
  authError: { title: null, message: null, priority: null },
  alerts: null,
  available_treatments: [],
  pa_user_role: null
};


@Injectable()
@State<UserInfoModel>({
  name: 'user',
  defaults: {
    ...defaultUser
  }
})
export class UserState {
  private authURL = `${environment.apiDomain}/api/auth`;

  @Selector()
  static token(state: UserInfoModel) { return state.user_token; }

  @Selector()
  static groups(state: UserInfoModel) { return state.groups; }

  @Selector()
  static userRole(state: UserInfoModel) { return state.pa_user_role; }

  @Selector()
  static medicalRole(state: UserInfoModel) { return state.medical_role; }

  @Selector()
  static isLoggedIn(state: UserInfoModel) { return !!state.user_token; }

  @Selector()
  static getUserSettings(state: UserInfoModel) { return state.userSettings; }

  @Selector()
  static getAuthError(state: UserInfoModel) { return state.authError; }

  @Selector()
  static isChangePassword(state: UserInfoModel) { return state.change_password; }

  @Selector()
  static hasSignature(state: UserInfoModel) { return state.has_signature; }

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {}

  @Action(Login)
  login(ctx: StateContext<UserInfoModel>, { payload }: Login) {
    const loginAction = this.http.post<UserInfoModel>(
        `${this.authURL}/user_login/`,
        payload,
        { params: { addWorker: '' } }
      );
    this.loginRoutine(ctx, loginAction);
  }

  @Action(SamlLogin)
  samlLogin(ctx: StateContext<UserInfoModel>, { token }: SamlLogin) {
    const loginAction = this.http.post<UserInfoModel>(
        `${this.authURL}/sso_session/extension/`,
        { token: token },
        { params: { addWorker: '' } }
      );
    this.loginRoutine(ctx, loginAction);
  }

  @Action(Logout)
  logout(ctx: StateContext<UserInfoModel>) {
    return this.http.get<any>(`${this.authURL}/user_logout/`)
      .pipe(
        tap(() => {
          ctx.setState(defaultUser);
        })
      );
  }

  @Action(ForceLogout)
  forceLogout(ctx: StateContext<UserInfoModel>) {
    ctx.setState(defaultUser);
  }

  @Action(SetUserSettings)
  setUserSettings(ctx: StateContext<UserInfoModel>, { settings }: SetUserSettings) {
    const state = ctx.getState();
    ctx.patchState({
      userSettings: {...state.userSettings, ...settings}
    });
  }

  @Action(SetAuthError)
  setAuthError(ctx: StateContext<UserInfoModel>, { authError }: SetAuthError) {
    ctx.patchState({
      authError: authError
    });
  }

  @Action(RemoveAuthError)
  removeAuthError(ctx: StateContext<UserInfoModel>) {
    ctx.patchState({
      authError: { title: null, message: null, priority: null }
    });
  }

  @Action(SetAlerts)
  setAlerts(ctx: StateContext<UserInfoModel>, { alerts }: SetAlerts) {
    ctx.patchState({
      alerts: alerts
    });
  }

  @Action(SetHasSignature)
  setHasSignature(ctx: StateContext<UserInfoModel>, { hasSignature }: SetHasSignature) {
    ctx.patchState({
      has_signature: hasSignature
    });
  }

  @Action(SetUserAvailableLocations)
  setAvailableLocations(ctx: StateContext<UserInfoModel>, { availableLocations }: SetUserAvailableLocations) {
    const selectedLocation: RegExp = new RegExp(availableLocations[0], 'i');
    const targetLocation = ctx.getState().locations.find(location => location.match(selectedLocation));
    const userSettings = ctx.getState().userSettings;
    let stateAvailableLocations = userSettings.availableLocations;
    let stateSelectedLocations = userSettings.selectedLocations;
    if (targetLocation) {
      stateAvailableLocations = [...stateAvailableLocations, targetLocation];
      stateSelectedLocations = [...stateSelectedLocations, targetLocation];
    }
    ctx.patchState({
      userSettings: { ...userSettings, selectedLocations: stateSelectedLocations, availableLocations: stateAvailableLocations }
    });
  }

  private loginRoutine(ctx: StateContext<UserInfoModel>, userInfo: Observable<UserInfoModel>): void {
    userInfo.pipe(
      catchError((err: Error) => throwError(err))
    ).subscribe(
      result => {
        ctx.dispatch(new RemoveAuthError());

        let [role] = result.groups;
        if (result.medical_role && result.medical_role.toUpperCase() in MedicalRoleEnum) role = MedicalRoleEnum[result.medical_role.toUpperCase()];
        result.pa_user_role = role.toUpperCase() in UserRolesEnum ? UserRolesEnum[role.toUpperCase()] : null;

        if (!result.pa_user_role) {
          ctx.dispatch(new SetAuthError({title: '', message: 'Roles incorrect', priority: -1}));
          return;
        }
        console.log('Current role:', role);

        if (result && !result.user_token) result.user_token = result.token;
        if (result.available_treatments) result.available_treatments = result.available_treatments.map(item => TreatmentTypesEnum[item]);

        ctx.patchState({ ...result, userSettings: { availableLocations: result.locations, selectedLocations: result.locations } });

        this.ngZone.run(() => this.router.navigate(['/patients']));
      },
      error => {
        ctx.dispatch(new SetAuthError({title: '', message: error.message, priority: -1}));
      }
    );
  }

}
