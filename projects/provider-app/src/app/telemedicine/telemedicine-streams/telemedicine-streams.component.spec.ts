import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { OTError } from '@opentok/client';
import { BehaviorSubject } from 'rxjs';


import { MAIN_STREAM, MAIN_STREAM_ACTIVE } from '../main-stream.token';
import { Stream } from '../ot-stream.type';
import { OT_SESSION } from '../session.token';
import { VideoSourceEnum } from '../video-source.enum';

import { TelemedicineStreamsComponent } from './telemedicine-streams.component';
import SpyObj = jasmine.SpyObj;

describe('TelemedicineStreamsComponent', () => {
  let component: TelemedicineStreamsComponent;
  let fixture: ComponentFixture<TelemedicineStreamsComponent>;

  const subscribeCallBack = jasmine.createSpy('subscribeCallBack');
  const sessionEvents: { [key: string]: Function[] } = {
    streamCreated: [],
    streamDestroyed: []
  };
  const session = {
    addEventListener: (eventName, cb) => sessionEvents[eventName].push(cb),
    removeEventListener: (eventName) => sessionEvents[eventName] = [],

    subscribe: subscribeCallBack,
    unsubscribe: (stream: Stream) => {}
  };
  const errorEventSpy: SpyObj<EventEmitter<OTError>> = jasmine.createSpyObj<EventEmitter<OTError>>('error', ['emit']);
  const noStreamsLeftEventSpy: SpyObj<EventEmitter<void>> = jasmine.createSpyObj<EventEmitter<void>>('noStreamsLeft', ['emit']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemedicineStreamsComponent ],
      providers: [{
        provide: MAIN_STREAM,
        useValue: new BehaviorSubject<VideoSourceEnum>(VideoSourceEnum.PATIENT)
      }, {
        provide: MAIN_STREAM_ACTIVE,
        useValue: new BehaviorSubject<boolean>(false)
      }, {
        provide: OT_SESSION,
        useValue: session
      }],
      imports: [CommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemedicineStreamsComponent);
    component = fixture.componentInstance;
    component.error = errorEventSpy;
    component.noStreamsLeft = noStreamsLeftEventSpy;
    fixture.detectChanges();
  });

  afterEach(() => {
    subscribeCallBack.and.stub();
    sessionEvents.streamCreated = [];
    sessionEvents.streamDestroyed = [];
    errorEventSpy.emit.calls.reset();
    noStreamsLeftEventSpy.emit.calls.reset();
    fixture.detectChanges();
  });

  it('should switch between streams', async(() => {
    subscribeCallBack.and.callFake((stream: Stream, element: string, props: any, cb: Function) => {
      setTimeout(() => cb(null));
      return { name: stream.name };
    });
    fixture.detectChanges();
    let mainStream: VideoSourceEnum;
    const mainStreamSubscription = component.mainStream$.subscribe(val => mainStream = val);
    sessionEvents.streamCreated.forEach(listener => listener({ stream: { name: VideoSourceEnum.PATIENT } }));
    fixture.detectChanges();
    sessionEvents.streamCreated.forEach(listener => listener({ stream: { name: VideoSourceEnum.MOUTH } }));
    fixture.detectChanges();
    expect(mainStream).toBe(VideoSourceEnum.PATIENT);
    component.focus(VideoSourceEnum.MOUTH);
    expect(mainStream).toBe(VideoSourceEnum.MOUTH);
    component.focus(VideoSourceEnum.EAR);
    mainStreamSubscription.unsubscribe();
  }));

  it('should handle subscription error', fakeAsync(() => {
    subscribeCallBack.and.callFake((stream: Stream, element: string, props: any, cb: Function) => {
      setTimeout(() => cb({ name: 'UNEXPECTED ERROR' }));
      return null;
    });
    fixture.detectChanges();
    sessionEvents.streamCreated.forEach(listener => listener({ stream: { name: VideoSourceEnum.NOSE } }));
    fixture.detectChanges();
    tick();
    expect(errorEventSpy.emit).toHaveBeenCalled();
  }));

  it('should notify about no streams left', fakeAsync(() => {
    subscribeCallBack.and.callFake((stream: Stream, element: string, props: any, cb: Function) => {
      setTimeout(() => cb(null));
      return { name: stream.name };
    });
    const mainStreamActive = TestBed.inject(MAIN_STREAM_ACTIVE);
    fixture.detectChanges();
    sessionEvents.streamCreated.forEach(listener => listener({ stream: { name: VideoSourceEnum.PATIENT } }));
    sessionEvents.streamCreated.forEach(listener => listener({ stream: { name: VideoSourceEnum.NOSE } }));
    fixture.detectChanges();
    tick();
    expect(mainStreamActive.getValue()).toBe(true);
    sessionEvents.streamDestroyed.forEach(listener => listener({ stream: { name: VideoSourceEnum.PATIENT } }));
    sessionEvents.streamDestroyed.forEach(listener => listener({ stream: { name: VideoSourceEnum.NOSE } }));
    fixture.detectChanges();
    tick();
    expect(noStreamsLeftEventSpy.emit).toHaveBeenCalled();
    expect(mainStreamActive.getValue()).toBe(false);
  }));
});
