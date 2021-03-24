import { BusinessModeEnum } from '../../user/business-mode.enum';
import { Alert } from '../interfaces/alert';
import { UserAuthError } from './user-auth.model';
import { TreatmentType } from '../../treatments/treatments.type';
import { UserRolesEnum } from '../enums/user-roles.enum';

export interface UserInfoModel {
  change_password: boolean;
  debug_mode: boolean;
  doctor_id?: number | null;
  groups: string[] | null;
  locations: string[] | null;
  state_issued?: string | null;
  full_name: string | null;
  user_token?: string | null;
  token?: string; // todo: remove after https://advinow.atlassian.net/browse/BAK-3140 merged
  license_number?: string | null;
  has_ehr_auth: boolean;
  has_signature: boolean;
  medical_role?: string | null;
  user_id: number | null;
  environment: UserEnvironment;
  userSettings: UserSettingsModel;
  authError: UserAuthError;
  alerts: Alert[];
  available_treatments: TreatmentType[];
  pa_user_role: UserRolesEnum | null;
}

export interface UserEnvironment {
  business_name: string | null;
  illness_presentation: string | null;
  is_room_active: boolean | null;
  location_tz: string | null;
  logo_url: string | null;
  integration_type: BusinessModeEnum;
}

export interface UserSettingsModel {
  selectedLocations?: string[] | null;
  availableLocations?: string[] | null;
  isTheDisclaimerDialogInLocalStorage?: boolean | null;
  isEhrAuthModalSkipped?: boolean | null;
}
