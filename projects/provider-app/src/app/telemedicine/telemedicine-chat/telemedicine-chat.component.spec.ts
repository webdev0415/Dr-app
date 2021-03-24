import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { NotificationsService } from '../../components/notifications/notifications.service';
import { MaterialModule } from '../../material.module';
import { PATIENT_FULL_NAME } from '../patient-full-name.token';
import { OT_SESSION } from '../session.token';

import { TelemedicineChatComponent } from './telemedicine-chat.component';
import SpyObj = jasmine.SpyObj;


interface MockSession {
  addEventListener: Function;
  removeEventListener: Function;
  signal: Function;
  connection: { connectionId: string };
}

describe('TelemedicineChatComponent', () => {
  let component: TelemedicineChatComponent;
  let fixture: ComponentFixture<TelemedicineChatComponent>;
  const uiEvent = jasmine.createSpyObj('uiEvent', ['preventDefault', 'stopPropagation']);
  let signalReceivedCallback: Function;
  let signalSendCallback: Function;
  let lastSignal = { data: null, type: null };

  let handleErrorSpy;
  let notificationsServiceSpy: SpyObj<NotificationsService>;

  const session: MockSession = {
    addEventListener: jasmine.createSpy().and.callFake((eventName, cb) => {
      signalReceivedCallback = cb;
    }),
    removeEventListener: jasmine.createSpy(),
    signal: jasmine.createSpy().and.callFake((signal: { data: string, type: string }, cb: Function) => {
      lastSignal = {...signal, type: signal.type ? `signal:${signal.type}` : null};
      signalSendCallback = cb;
      signalReceivedCallback({ ...lastSignal, from: { connectionId: 'provider' }});
    }),
    connection: { connectionId: 'provider' }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelemedicineChatComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
      providers: [{
        provide: NotificationsService,
        useValue: jasmine.createSpyObj('NotificationsService', ['error', 'warning'])
      }, {
        provide: OT_SESSION, useValue: session
      }, {
        provide: PATIENT_FULL_NAME, useValue: 'patient full name'
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    notificationsServiceSpy = TestBed.inject(NotificationsService) as SpyObj<NotificationsService>;
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemedicineChatComponent);
    component = fixture.componentInstance;
    component.error.subscribe(err => handleErrorSpy = err);
    signalReceivedCallback = null;
    signalSendCallback = null;
    lastSignal = { data: null, type: null };
    // @ts-ignore
    session.signal.calls.reset();
    fixture.detectChanges();
  });

  it('should emit unread on message income', async(() => {
    // @ts-ignore
    spyOn(component, 'scrollMessages');
    let unread = false;
    let messagesCount = 0;
    component.active = false;
    component.unread.subscribe(event => unread = event);
    component.messages.subscribe(messages => messagesCount = messages.length);
    signalReceivedCallback({type: 'signal:textMessage', data: '{ "id": "some id", "text": "PATIENT MESSAGE" }', from: { connectionId: 'patient' }});
    fixture.detectChanges();

    expect(messagesCount).toBe(1);
    expect(unread).toBe(true);
    component.active = true;
    fixture.detectChanges();
    // @ts-ignore
    component.ngOnChanges({ active: { currentValue: false } });
    expect(unread).toBe(true);
    // @ts-ignore
    component.ngOnChanges({ active: { currentValue: true } });
    expect(unread).toBe(false);
    signalReceivedCallback({type: 'someSignal', data: ''});
    expect(messagesCount).toBe(1);
    expect(unread).toBe(false);
    signalReceivedCallback({type: 'signal:textMessage', data: '{ "id": "another id", "text": "ANOTHER PATIENT MESSAGE" }', from: { connectionId: 'patient' }});
    expect(messagesCount).toBe(2);
    expect(unread).toBe(false);
  }));

  it('should send signal', async(() => {
    let sending = false;
    component.isSending.subscribe(isSending => sending = isSending);
    component.messageForm.patchValue({ message: 'HELLO' }, { onlySelf: false });
    expect(component.messageForm.valid).toBe(true);
    component.sendMessage(uiEvent);
    expect(JSON.parse(lastSignal.data).text).toEqual('HELLO');
    expect(lastSignal.type).toEqual('signal:textMessage');
    expect(session.signal).toHaveBeenCalledTimes(1);
    expect(sending).toBe(true);
    signalSendCallback({ error: 'error' });
    expect(sending).toBe(false);
    expect(component.messageForm.value).toEqual({ message: 'HELLO' });
    lastSignal = { data: null, type: null };
    expect(notificationsServiceSpy.error).toHaveBeenCalled();
    expect(handleErrorSpy).toBeDefined();

    component.sendMessage(uiEvent);
    expect(JSON.parse(lastSignal.data).text).toEqual('HELLO');
    expect(lastSignal.type).toEqual('signal:textMessage');
    expect(session.signal).toHaveBeenCalledTimes(2);
    expect(sending).toBe(true);
    signalSendCallback(null);
    expect(sending).toBe(false);
    expect(component.messageForm.valid).toBe(false);
    expect(component.messageForm.value).toEqual({ message: '' });
  }));

  it('should handle enter keypress', () => {
    component.messageInput.nativeElement.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', shiftKey: false }));
    expect(session.signal).not.toHaveBeenCalled();
    component.messageForm.patchValue({ message: 'message' });
    component.messageInput.nativeElement.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', shiftKey: true }));
    expect(session.signal).not.toHaveBeenCalled();
    component.messageInput.nativeElement.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', shiftKey: false }));
    expect(session.signal).toHaveBeenCalled();
  });

  it('should notify about the message maximum length exceeded', fakeAsync(() => {
    component.messageForm.patchValue({ message: Array(2000).fill('a').join('') });
    tick();
    fixture.detectChanges();
    expect(notificationsServiceSpy.warning).toHaveBeenCalled();
  }));
});
