import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, EventEmitter } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

import { Publisher } from '@opentok/client';
import { BehaviorSubject, of } from 'rxjs';


import { PatientProfileService } from '../../../../../patient-profile/src/lib/services/patient-profile.service';
import { environment } from '../../../environments';
import { NotificationsService } from '../../components/notifications/notifications.service';
import { StateService } from '../../services';
import { APP_ENVIRONMENT } from '../environment.token';
import { MAIN_STREAM, MAIN_STREAM_ACTIVE } from '../main-stream.token';
import { OpentokService } from '../opentok.service';
import { Stream } from '../ot-stream.type';
import { OT_SESSION } from '../session.token';
import { TelemedicineInfo } from '../telemedicine-info.interface';
import { VideoSourceEnum } from '../video-source.enum';

import { TelemedicineComponent } from './telemedicine.component';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe('TelemedicineComponent', () => {
  let component: TelemedicineComponent;
  let fixture: ComponentFixture<TelemedicineComponent>;

  const unassignEvent = new EventEmitter();
  const finalizeProcessSucceed = new EventEmitter();

  const telemedicineInfo: Partial<TelemedicineInfo> = {platform_information: {session_id: '', project_id: '', client_tokens: {doctor: ''}}};

  const subscribeCallBack = jasmine.createSpy('subscribeCallBack');
  const connectCallback = jasmine.createSpy('connectCallback');


  let events: { [key: string]: Function } = {
    mousemove: null,
    mousedown: null,
    mouseup: null,
    click: null,
  };

  let sessionEvents: { [key: string]: Function[] } = {
    streamCreated: [],
    streamDestroyed: []
  };

  const session = {
    addEventListener: (eventName, cb) => sessionEvents[eventName].push(cb),
    removeEventListener: (eventName) => sessionEvents[eventName] = [],

    unpublish: (publisher: Publisher) => {},
    connect: connectCallback,
    disconnect: () => {},
    subscribe: subscribeCallBack,
    unsubscribe: (stream: Stream) => {}
  };

  const jasmineDOMEvent = jasmine.createSpyObj(['preventDefault', 'stopPropagation']);

  let patientProfileService: SpyObj<PatientProfileService>;
  let errorHandler: SpyObj<ErrorHandler>;
  let opentokService: SpyObj<OpentokService>;
  let notificationsService: SpyObj<NotificationsService>;
  let stateService: StateService;
  let matDialogRef: SpyObj<MatDialogRef<TelemedicineComponent>>;

  let containsSpy: jasmine.Spy;
  let appEnvironment: typeof environment;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelemedicineComponent],
      imports: [CommonModule, DragDropModule, MatSidenavModule, NoopAnimationsModule, BrowserTestingModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: telemedicineInfo
        },
        {
          provide: PatientProfileService,
          useValue: jasmine.createSpyObj('PatientProfileService', ['checkTelemedicineAvailability'])
        },
        {
          provide: NotificationsService, useValue: jasmine.createSpyObj('NotificationsService', ['error', 'warning'])
        },
        {
          provide: StateService, useValue: {
            get patient() {
              return null;
            }
          }
        },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj('MatDialogRef', ['addPanelClass', 'updateSize', 'updatePosition', 'removePanelClass', 'close'])
        },
        {
          provide: OpentokService,
          useValue: jasmine.createSpyObj('OpentokService', ['setLogLevel', 'initSession'])
        },
        {
          provide: ErrorHandler, useValue: jasmine.createSpyObj('ErrorHandler', ['handleError'])
        },
        {
          provide: MAIN_STREAM, useValue: new BehaviorSubject<VideoSourceEnum>(VideoSourceEnum.PATIENT)
        },
        {
          provide: MAIN_STREAM_ACTIVE, useValue: new BehaviorSubject<boolean>(false)
        },
        {
          provide: APP_ENVIRONMENT, useValue: { name: 'development' }
        },
        {
          provide: OT_SESSION, useValue: session
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    opentokService = TestBed.get(OpentokService) as SpyObj<OpentokService>;
    // todo: @types/jasmine update error
    // @ts-ignore
    opentokService.initSession.and.returnValue(session);

    patientProfileService = TestBed.inject(PatientProfileService) as SpyObj<PatientProfileService>;
    errorHandler = TestBed.get(ErrorHandler) as SpyObj<ErrorHandler>;
    errorHandler.handleError.calls.reset();

    notificationsService = TestBed.inject(NotificationsService) as SpyObj<NotificationsService>;
    notificationsService.error.calls.reset();
    notificationsService.warning.calls.reset();

    stateService = TestBed.inject(StateService);
    spyOnProperty(stateService, 'patient').and.returnValue({
      getUnassignEvent: () => unassignEvent,
      watchFinalizeProcessSucceed: () => finalizeProcessSucceed
    });

    matDialogRef = TestBed.inject(MatDialogRef) as SpyObj<MatDialogRef<TelemedicineComponent>>;
    // todo: @types/jasmine update error
    // @ts-ignore
    matDialogRef.updateSize.and.returnValue({ updatePosition: () => null });
    matDialogRef.close.calls.reset();

    appEnvironment = TestBed.inject(APP_ENVIRONMENT);

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemedicineComponent);
    component = fixture.componentInstance;

    spyOn(document, 'addEventListener').and.callFake((eventName, cb) => {
      events[eventName] = cb;
    });
    containsSpy = spyOn(fixture.nativeElement, 'contains');
    spyOn(fixture.nativeElement, 'addEventListener').and.callFake((eventName, cb) => {
      events[eventName] = cb;
    });

    fixture.detectChanges();
  });

  afterEach(() => {
    events = {
      mousemove: null,
      mousedown: null,
      mouseup: null,
      click: null,
    };
    sessionEvents = {
      streamCreated: [],
      streamDestroyed: []
    };
    connectCallback.and.stub();
    subscribeCallBack.and.stub();
    patientProfileService.checkTelemedicineAvailability.and.stub();
  });

  it('should handle global errors', () => {
    fixture.detectChanges();
    // @ts-ignore
    window.Zone['__zone_symbol__unhandledPromiseRejectionHandler'](new Error('error name'));
    expect(errorHandler.handleError).toHaveBeenCalled();
  });

  it('should close session on patient disconnect', () => {
    connectCallback.and.callFake((token: string, cb: Function) => cb(null));
    patientProfileService.checkTelemedicineAvailability.and.returnValue(of(false));
    fixture.detectChanges();
    component.checkSessionAvailability();
    expect(matDialogRef.close).toHaveBeenCalledWith({reason: 'drop', message: 'Patient left televisit session.'});
  });

  it('should minimize and restore window', async(() => {
    fixture.detectChanges();
    let isMinified: boolean;
    const minifiedSubscription = component.isMinified.subscribe(val => isMinified = val);
    containsSpy.and.returnValue(false);
    events.click(jasmineDOMEvent);
    expect(isMinified).toBe(true);

    events.mousedown(jasmineDOMEvent);
    events.mousemove(jasmineDOMEvent);
    events.mouseup(jasmineDOMEvent);
    expect(isMinified).toBe(true);

    events.mousedown(jasmineDOMEvent);
    events.mouseup(jasmineDOMEvent);
    expect(isMinified).toBe(false);

    events.click({ target: { className: 'd-flex flex-row md-toast-message error' } });
    expect(isMinified).toBe(false);

    minifiedSubscription.unsubscribe();
  }));

  it('should place call on hold on patient unassign', async(() => {
    fixture.detectChanges();
    stateService.patient.getUnassignEvent().emit();
    expect(matDialogRef.close).toHaveBeenCalledWith({ reason: 'hold', message: 'Session hold on.' });
    matDialogRef.close.calls.reset();
    // @ts-ignore
    stateService.patient.watchFinalizeProcessSucceed().emit();
    expect(matDialogRef.close).toHaveBeenCalledWith({ reason: 'hold', message: 'Session hold on.' });
  }));

  it('should drop session on patient left', fakeAsync(() => {
    const apiResponse = new BehaviorSubject(true);
    connectCallback.and.callFake((token: string, cb: Function) => cb(null));
    patientProfileService.checkTelemedicineAvailability.and.returnValue(apiResponse.asObservable());
    fixture.detectChanges();
    component.ngOnInit();
    tick(10000);
    apiResponse.next(false);
    fixture.detectChanges();
    tick(10000);
    fixture.detectChanges();
    expect(matDialogRef.close).toHaveBeenCalledWith({reason: 'drop', message: 'Patient left televisit session.'});
  }));

  it('should drop session on patient left without result changing', fakeAsync(() => {
    connectCallback.and.callFake((token: string, cb: Function) => cb(null));
    patientProfileService.checkTelemedicineAvailability.and.returnValue(of(false));
    fixture.detectChanges();
    component.handleError({ name: 'OT_USER_MEDIA_ACCESS_DENIED', message: 'SOME MESSAGE' });
    fixture.detectChanges();
    component.checkSessionAvailability();
    fixture.detectChanges();
    expect(matDialogRef.close).toHaveBeenCalledWith({reason: 'error', message: 'SOME MESSAGE'});
  }));

  it('should remove error in close result on patient reconnect', fakeAsync(() => {
    patientProfileService.checkTelemedicineAvailability.and.returnValue(new BehaviorSubject(true).asObservable());
    connectCallback.and.callFake((token: string, cb: Function) => cb(null));
    fixture.detectChanges();
    component.ngOnInit();
    tick(15000);
    fixture.detectChanges();
    tick(10000);
    fixture.detectChanges();
    sessionEvents.streamCreated.forEach(listener => listener({ stream: { name: VideoSourceEnum.NOSE } }));
    fixture.detectChanges();
    component.endSession();
    fixture.detectChanges();
    expect(matDialogRef.close).toHaveBeenCalledWith({ reason: 'complete', message: 'Televisit session complete.' });
  }));

  it('should handle errors', () => {
    appEnvironment.name = 'local';
    fixture.detectChanges();
    component.handleError(null);
    expect(notificationsService.error).not.toHaveBeenCalled();
    expect(errorHandler.handleError).not.toHaveBeenCalled();
    component.handleError({ name: 'OT_USER_MEDIA_ACCESS_DENIED', message: 'CAMERA UNAVAILABLE' });
    component.endSession();
    fixture.detectChanges();
    expect(errorHandler.handleError).toHaveBeenCalled();
    expect(matDialogRef.close).toHaveBeenCalledWith({ reason: 'error', message: 'CAMERA UNAVAILABLE' });
    expect(notificationsService.error).toHaveBeenCalled();
    errorHandler.handleError.calls.reset();
    matDialogRef.close.calls.reset();
    notificationsService.error.calls.reset();
    component.handleError({ name: 'random', message: 'error' });
    expect(errorHandler.handleError).toHaveBeenCalled();
    expect(notificationsService.error).not.toHaveBeenCalled();
  });

  it('should activate tab in side panel', () => {
    const matSideNavSpy = createSpyObj<MatSidenav>('MatSideNav', ['close', 'toggle']);
    component.matSidenav = matSideNavSpy;
    fixture.detectChanges();
    component.openPanel('chat');
    expect(component.selectedTabIndex).toEqual(1);
    expect(matSideNavSpy.toggle).toHaveBeenCalled();
    matSideNavSpy.toggle.calls.reset();
    component.openPanel('streams');
    expect(component.selectedTabIndex).toEqual(0);
    expect(matSideNavSpy.toggle).toHaveBeenCalled();
  });

  it('should track unread messages', async(() => {
    let unread: boolean;
    const unreadSubscription = component.unreadMessages.subscribe(state => unread = state);
    fixture.detectChanges();
    expect(unread).toBe(false);
    component.unreadMessagesHandler(true);
    fixture.detectChanges();
    expect(unread).toBe(true);
    unreadSubscription.unsubscribe();
  }));

  it('should handle connection error', () => {
    connectCallback.and.callFake((token, cb) => {
      cb({name: 'OT_AUTHENTICATION_ERROR', message: 'INVALID TOKEN'});
    });
    fixture.detectChanges();
    component.ngOnInit();
    expect(errorHandler.handleError).toHaveBeenCalled();
    expect(notificationsService.error).toHaveBeenCalled();
    expect(matDialogRef.close).toHaveBeenCalledWith({ reason: 'error', message: 'INVALID TOKEN' });
  });
});
