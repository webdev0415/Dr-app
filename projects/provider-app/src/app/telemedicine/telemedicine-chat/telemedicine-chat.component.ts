import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input, NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { OTError, Session } from '@opentok/client';

import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { filter, map, take, takeUntil, tap } from 'rxjs/operators';
import { Date as SugarDate } from 'sugar';
import { nanoid } from 'nanoid';


import { NotificationsService } from '../../components/notifications/notifications.service';
import { Message } from '../message.interface';
import { OTSignal } from '../ot-signal.interface';
import { PATIENT_FULL_NAME } from '../patient-full-name.token';
import { OT_SESSION } from '../session.token';

@Component({
  selector: 'pa-telemedicine-chat',
  templateUrl: './telemedicine-chat.component.html',
  styleUrls: ['./telemedicine-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelemedicineChatComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() active: boolean;
  @Output() error = new EventEmitter<OTError>();
  @Output() unread = new EventEmitter<boolean>();
  @ViewChild('messageInput', { static: false }) messageInput: ElementRef<HTMLTextAreaElement>;
  @ViewChild('messagesContainer', { static: true }) messagesContainer: ElementRef<HTMLDivElement>;

  private _sending$ = new BehaviorSubject<boolean>(false);

  public messageMaxLength = 2000;
  public messageForm: FormGroup = this.fb.group({ message: this.fb.control('', [Validators.required, Validators.maxLength(this.messageMaxLength)]) });
  public errorStateMatcher: ErrorStateMatcher = {
    isErrorState(...args): boolean {
      return false;
    }
  };

  private _messages: BehaviorSubject<Message[]> = new BehaviorSubject([]);
  private _destroy$ = new Subject<void>();


  constructor(
    @Inject(OT_SESSION) private session: Session,
    private fb: FormBuilder,
    private notificationsService: NotificationsService,
    private ngZone: NgZone,
    @Inject(PATIENT_FULL_NAME) private patientName: string
  ) {
  }

  ngOnInit(): void {
    fromEvent(this.session, 'signal').pipe(
      takeUntil(this._destroy$),
      filter((signal: OTSignal) => signal.type === 'signal:textMessage'),
      map((signal: OTSignal): Message => ({
        ...JSON.parse(signal.data),
        from: signal.from.connectionId !== this.session.connection.connectionId ? this.patientName : 'you',
        time: Date.now()
      })),
      tap((message: Message) => this.addMessageToArray(message)),
      tap(() => { if (!this.active) this.unread.emit(true); })
    ).subscribe();
  }

  ngAfterViewInit(): void {
    fromEvent(this.messageInput.nativeElement, 'keypress').pipe(
      takeUntil(this._destroy$),
      filter((keypress: KeyboardEvent) => {
        return this.messageForm.valid && !keypress.shiftKey && keypress.key.toLowerCase() === 'enter';
      })
    ).subscribe((keypress) => this.sendMessage(keypress));
    this.messageForm.get('message').valueChanges.pipe(
      filter((message: string) => message.length === 2000),
      tap(() => this.notificationsService.warning('Message maximum length is 2000 chars.', 'Maximum message length exceeded.')),
      takeUntil(this._destroy$)
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.active && changes.active.currentValue) {
      this.unread.emit(false);
    }
  }

  public sendMessage(event: UIEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this._sending$.next(true);
    const message: Pick<Message, 'id' | 'text'> = { id: nanoid(), text: this.messageForm.get('message').value };
    this.session.signal({ data: JSON.stringify(message), type: 'textMessage' }, (err) => {
      this._sending$.next(false);
      if (!err) {
        this.messageForm.reset({ message: '' });
        this.scrollMessages();
      } else {
        this.notificationsService.error('Message could not be sent. Please try again.');
        this.error.emit(err);
      }
    });
  }

  public get messages(): Observable<Message[]> {
    return this._messages.asObservable();
  }

  private addMessageToArray(message: Message): void {
    this._messages.next([...this._messages.getValue(), message]);
    this.scrollMessages();
  }

  public get isSending(): Observable<boolean> {
    return this._sending$.asObservable();
  }

  public parseMessageTime(time: number): string {
    return new SugarDate(time).format('%H:%M').raw;
  }

  ngOnDestroy(): void {
    this._messages.complete();
    this._destroy$.next();
    this._destroy$.complete();
    this._sending$.complete();
  }

  private scrollMessages(): void {
    this.ngZone.onStable.pipe(take(1), filter(() => this.active)).subscribe(() => {
      const lastMessageElement = document.getElementById(`message-${this._messages.getValue().length - 1}`);
      lastMessageElement.scrollIntoView(false);
    });
  }
}
