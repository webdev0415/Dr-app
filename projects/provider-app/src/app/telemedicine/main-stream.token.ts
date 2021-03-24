import { InjectionToken } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


import { VideoSourceEnum } from './video-source.enum';

export const MAIN_STREAM: InjectionToken<BehaviorSubject<VideoSourceEnum>> = new InjectionToken<BehaviorSubject<VideoSourceEnum>>('MAIN STREAM SUBJECT');
export const MAIN_STREAM_ACTIVE: InjectionToken<BehaviorSubject<boolean>> = new InjectionToken<BehaviorSubject<boolean>>('MAIN STREAM IS ACTIVE');
