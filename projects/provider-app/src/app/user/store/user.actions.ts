import { Alert } from '../../common/interfaces/alert';

export class Login {
  static readonly type = '[User] Login';
  constructor(public payload: { username: string, password: string }) {}
}

export class SamlLogin {
  static readonly type = '[User] SAML Login';
  constructor(public token: string) {}
}

export class Logout {
  static readonly type = '[User] Logout';
}

export class ForceLogout {
  static readonly type = '[User] Force Logout';
}

export class SetUserSettings {
  static readonly type = '[User] Set User Settings';
  constructor(public settings: any) {}
}

export class SetAuthError {
  static readonly type = '[User] Set Auth Error';
  constructor(public authError: { title: string, message: string, priority: number }) { }
}

export class RemoveAuthError {
  static readonly  type = '[User] Remove Auth Error';
}

export class SetAlerts {
  static readonly type = '[User] Set Alerts';
  constructor(public alerts: Alert[]) {}
}

export class SetHasSignature {
  static readonly type = '[User] Set Has Signature';
  constructor(public hasSignature: boolean) {}
}

export class SetUserAvailableLocations {
  static readonly type = '[EHR Auth Popup] Update Available Locations';
  constructor(public availableLocations: string[]) {
  }
}
