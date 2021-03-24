import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';

import { OTError, Publisher, ScreenSharingCapabilityResponse, Session } from '@opentok/client';
import { of } from 'rxjs';


import { NotificationsService } from '../../components/notifications/notifications.service';
import { DialogService } from '../../services/app/dialog.service';
import { OpentokService } from '../opentok.service';
import { OT_SESSION } from '../session.token';

import { TelemedicineControlsComponent } from './telemedicine-controls.component';
import SpyObj = jasmine.SpyObj;

describe('TelemedicineControlsComponent', () => {
  let component: TelemedicineControlsComponent;
  let fixture: ComponentFixture<TelemedicineControlsComponent>;

  const publisherSpy = jasmine.createSpyObj<Publisher>('publisher', ['publishAudio', 'publishVideo']);
  const uiEvent = jasmine.createSpyObj<UIEvent>('uiEvent', ['preventDefault', 'stopPropagation']);

  let dialogServiceSpy: jasmine.SpyObj<DialogService>;
  let opentokServiceSpy: jasmine.SpyObj<OpentokService>;
  let notificationsServiceSpy: jasmine.SpyObj<NotificationsService>;

  const publishCallback = jasmine.createSpy('publishCallback');
  const session = jasmine.createSpyObj<Session>('session', ['once', 'publish', 'unpublish']);
  let sessionConnectedCb: Function;
  session.once.and.callFake((eventName, cb) => {
    sessionConnectedCb = cb;
  });
  session.publish.and.callFake(publishCallback);

  const errorEmitterSpy: jasmine.SpyObj<EventEmitter<OTError>> = jasmine.createSpyObj('Error event emitter', ['emit']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemedicineControlsComponent ],
      providers: [{
        provide: OT_SESSION, useValue: session
      }, {
        provide: NotificationsService,
        useValue: jasmine.createSpyObj('NotificationsService', ['error', 'warning'])
      }, {
        provide: DialogService,
        useValue: jasmine.createSpyObj('DialogService', ['open'])
      }, {
        provide: OpentokService, useValue: jasmine.createSpyObj('OT', ['initPublisher', 'checkScreenSharingCapability'])
      }],
      imports: [MatBadgeModule]
    });
    notificationsServiceSpy = TestBed.inject(NotificationsService) as SpyObj<NotificationsService>;
    dialogServiceSpy = TestBed.inject(DialogService) as SpyObj<DialogService>;
    opentokServiceSpy = TestBed.inject(OpentokService) as SpyObj<OpentokService>;
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemedicineControlsComponent);
    component = fixture.componentInstance;
    opentokServiceSpy.initPublisher.and.returnValue(publisherSpy);
    component.error = errorEmitterSpy;
    errorEmitterSpy.emit.calls.reset();
    fixture.detectChanges();
  });

  it('should start screen sharing', async(() => {
    publishCallback.and.callFake((publisher: Publisher, cb: Function) => cb(null));
    opentokServiceSpy.checkScreenSharingCapability.and.callFake((cb: (response: ScreenSharingCapabilityResponse) => void) => { cb({ supported: true, supportedSources: {} }); });
    fixture.detectChanges();
    component.startScreenSharing(uiEvent);
    expect(notificationsServiceSpy.error).not.toHaveBeenCalled();
    expect(notificationsServiceSpy.warning).not.toHaveBeenCalled();
    expect(component.screenSharingActive).toBe(true);
    component.stopScreenSharing(uiEvent);
    expect(component.screenSharingActive).toBe(false);
  }));

  it('should handle screen sharing error', async(() => {
    publishCallback.and.callFake((publisher: Publisher, cb: Function) => cb(null));
    opentokServiceSpy.checkScreenSharingCapability.and.callFake((cb: (response: ScreenSharingCapabilityResponse) => void) => { cb({ supported: false, supportedSources: {}, extensionRegistered: false }); });
    fixture.detectChanges();
    component.startScreenSharing(uiEvent);
    expect(component.screenSharingActive).toBe(false);
    expect(notificationsServiceSpy.error).toHaveBeenCalled();
  }));

  it('should publish on session connected', () => {
    expect(component.sessionConnected).toBe(false);
    sessionConnectedCb(null);
    fixture.detectChanges();
    expect(component.sessionConnected).toBe(true);
    expect(session.publish).toHaveBeenCalled();
  });

  it('should handle screen sharing publish error', async(() => {
    opentokServiceSpy.checkScreenSharingCapability.and.callFake((cb: (response: ScreenSharingCapabilityResponse) => void) => { cb({ supported: true, supportedSources: {} }); });
    publishCallback.and.callFake((publisher: Publisher, cb: Function) => cb(true));
    fixture.detectChanges();
    component.startScreenSharing(uiEvent);
    expect(errorEmitterSpy.emit).toHaveBeenCalled();
    expect(component.screenSharingActive).toBe(false);
  }));

  it('should prompt to install extension', async(() => {
    publishCallback.and.callFake((publisher: Publisher, cb: Function) => cb(null));
    opentokServiceSpy.checkScreenSharingCapability.and.callFake((cb: (response: ScreenSharingCapabilityResponse) => void) => { cb({ supported: true, supportedSources: {}, extensionInstalled: false }); });
    fixture.detectChanges();
    component.startScreenSharing(uiEvent);
    expect(component.screenSharingActive).toBe(false);
    expect(notificationsServiceSpy.warning).toHaveBeenCalled();
  }));

  it('should toggle mic/camera', () => {
    component.toggleMic(uiEvent, false);
    expect(component.micEnabled).toBe(false);
    expect(publisherSpy.publishAudio).toHaveBeenCalledWith(false);
    component.toggleMic(uiEvent, true);
    expect(component.micEnabled).toBe(true);
    expect(publisherSpy.publishAudio).toHaveBeenCalledWith(true);
    component.toggleCamera(uiEvent, false);
    expect(component.cameraEnabled).toBe(false);
    expect(publisherSpy.publishVideo).toHaveBeenCalledWith(false);
    component.toggleCamera(uiEvent, true);
    expect(component.cameraEnabled).toBe(true);
    expect(publisherSpy.publishVideo).toHaveBeenCalledWith(true);
  });

  it('should end session', async(() => {
    const endSessionEvents = jasmine.createSpy();
    component.endSessionEvent.subscribe(() => endSessionEvents());
    dialogServiceSpy.open.and.returnValue(of(false));
    fixture.detectChanges();
    component.endSession(uiEvent);
    expect(endSessionEvents).not.toHaveBeenCalled();

    dialogServiceSpy.open.and.returnValue(of(true));
    fixture.detectChanges();
    component.endSession(uiEvent);
    expect(endSessionEvents).toHaveBeenCalled();
  }));

  it('should open side panel', () => {
    let activePanel: string;
    component.openPanel.subscribe(panel => activePanel = panel);
    component.openSidePanel('chat');
    expect(activePanel).toBe('chat');
  });
});
