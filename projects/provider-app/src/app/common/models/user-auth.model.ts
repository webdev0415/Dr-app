import { Subject } from 'rxjs';

export interface UserAuthModel {
  logoutEvent: Subject<boolean>;
  forceLogoutEvent: Subject<[string, string, number]>;
}

export interface UserAuthError {
  title: string;
  message: string;
  priority: number;
}
