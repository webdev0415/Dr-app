import { InjectionToken } from '@angular/core';

import { environment } from '../../environments';

export const APP_ENVIRONMENT: InjectionToken<typeof environment> = new InjectionToken('APP ENVIRONMENT');
