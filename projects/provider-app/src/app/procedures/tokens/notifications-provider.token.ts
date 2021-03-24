import { InjectionToken } from '@angular/core';

export interface NotificationsProvider {
  success(message: string, title?: string): void;
  error(message: string, title?: string): void;
}

export const NOTIFICATIONS_PROVIDER: InjectionToken<NotificationsProvider> = new InjectionToken<NotificationsProvider>('NOTIFICATIONS SERVICE PROVIDER TOKEN');
