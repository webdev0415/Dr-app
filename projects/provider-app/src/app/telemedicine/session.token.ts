import { InjectionToken } from '@angular/core';
import { Session } from 'opentok';

export const OT_SESSION: InjectionToken<Session> = new InjectionToken<Session>('OPENTOK SESSION PROVIDER');
