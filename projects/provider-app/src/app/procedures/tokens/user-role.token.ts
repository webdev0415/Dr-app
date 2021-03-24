import { InjectionToken } from '@angular/core';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';

export const USER_ROLE: InjectionToken<UserRolesEnum> = new InjectionToken<UserRolesEnum>('USER ROLE TOKEN PROVIDER');
