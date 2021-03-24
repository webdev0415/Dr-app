import { Injectable } from '@angular/core';

import {
  checkScreenSharingCapability,
  initPublisher,
  initSession,
  OTError,
  Publisher,
  PublisherProperties, ScreenSharingCapabilityResponse,
  Session,
  setLogLevel
} from '@opentok/client';

@Injectable()
export class OpentokService {
  public initSession(apiKey: string, sessionId: string): Session {
    return initSession(apiKey, sessionId);
  }
  public initPublisher(targetEl: string | HTMLElement = null, props: PublisherProperties, completionHandler?: (error?: OTError) => void): Publisher {
    return initPublisher(targetEl, props, completionHandler);
  }
  public setLogLevel(logLevel: number): void {
    setLogLevel(logLevel);
  }
  public checkScreenSharingCapability(responseHandler: (response: ScreenSharingCapabilityResponse) => void): void {
    checkScreenSharingCapability(responseHandler);
  }
}
