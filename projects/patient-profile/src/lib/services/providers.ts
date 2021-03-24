import { InjectionToken } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export const LAZY_SERVICE = new InjectionToken<{lazyLoad: (link: string) => Promise<SafeResourceUrl>}>('LAZY SERVICE PROVIDER');
export const API_URL = new InjectionToken<{buildUrl: (patientId: number, path: string) => string}>('DEV API URL PROVIDER');
