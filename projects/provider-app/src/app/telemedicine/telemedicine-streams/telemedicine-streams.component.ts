import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { OTError, Session, Subscriber } from '@opentok/client';
import { valuesIn } from 'ramda';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { pluck, scan, takeUntil, tap } from 'rxjs/operators';


import { MAIN_STREAM, MAIN_STREAM_ACTIVE } from '../main-stream.token';
import { Stream } from '../ot-stream.type';
import { OT_SESSION } from '../session.token';
import { VideoSourceEnum } from '../video-source.enum';

@Component({
  selector: 'pa-telemedicine-streams',
  templateUrl: './telemedicine-streams.component.html',
  styleUrls: ['./telemedicine-streams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelemedicineStreamsComponent implements OnInit, OnDestroy {
  @Output() error = new EventEmitter<OTError>();
  @Output() noStreamsLeft = new EventEmitter<void>();
  public readonly videoSource = VideoSourceEnum;

  // @ts-ignore
  public streams: { [key in VideoSourceEnum]: Stream } = {};
  // @ts-ignore
  public subscribers: { [key in VideoSourceEnum]: Subscriber } = {};

  private _destroy$ = new Subject<void>();

  constructor(
    @Inject(MAIN_STREAM) private _mainStream: BehaviorSubject<VideoSourceEnum>,
    @Inject(OT_SESSION) private session: Session,
    @Inject(MAIN_STREAM_ACTIVE) private _mainStreamActive: BehaviorSubject<boolean>,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.mainStream$.pipe(
      scan((prev, curr) => {
        this.switchSections(prev, curr);
        return curr;
      }),
      takeUntil(this._destroy$)
    ).subscribe();

    fromEvent(this.session, 'streamCreated').pipe(
      takeUntil(this._destroy$), pluck('stream')
    ).subscribe((stream: Stream) => {
      this.streams[stream.name] = stream;
      this.subscribe(stream, stream.name === VideoSourceEnum.PATIENT ? VideoSourceEnum.MAIN : stream.name);
      this.cdRef.detectChanges();
    });

    fromEvent(this.session, 'streamDestroyed').pipe(
      takeUntil(this._destroy$),
      tap(() => {
        this._mainStream.next(VideoSourceEnum.PATIENT);
        this.noStreamsLeft.emit();
        this._mainStreamActive.next(false);
      })
    ).subscribe();
  }

  public focus(section: VideoSourceEnum): void {
    this._mainStream.next(section);
  }

  public get mainStream$(): Observable<VideoSourceEnum> {
    return this._mainStream.asObservable();
  }

  private switchSections(currentMain: VideoSourceEnum, selectedSection: VideoSourceEnum): void {
    if (this.subscribers[VideoSourceEnum.MAIN]) {
      console.log('[OPENTOK] CURRENT MAIN UNSUBSCRIBE', this.subscribers[currentMain].stream);
      this.session.unsubscribe(this.subscribers[VideoSourceEnum.MAIN]);
    }
    if (this.subscribers[selectedSection]) {
      console.log('[OPENTOK] SELECTED SECTION UNSUBSCRIBE', this.subscribers[selectedSection].stream);
      this.session.unsubscribe(this.subscribers[selectedSection]);
    }
    if (this.streams[currentMain]) {
      console.log('[OPENTOK] CURRENT MAIN SUBSCRIBE', this.subscribers[currentMain].stream);
      this.subscribe(this.streams[currentMain], currentMain);
    }
    if (this.streams[selectedSection]) {
      console.log('[OPENTOK] SELECTED SECTION SUBSCRIBE', this.subscribers[selectedSection].stream);
      this.subscribe(this.streams[selectedSection], VideoSourceEnum.MAIN);
    }
  }

  private subscribe(stream: Stream, section: VideoSourceEnum): void {
    this.subscribers[section] = this.session.subscribe(stream, section, {
      width: '100%',
      height: '100%',
      insertMode: 'append',
      subscribeToAudio: stream.name === VideoSourceEnum.PATIENT,
      style: { buttonDisplayMode: 'off' },
    }, (error) => {
      if (error) {
        this.error.emit(error);
      } else {
        if (section === VideoSourceEnum.MAIN) {
          this._mainStreamActive.next(true);
          console.log('[OPENTOK] STREAM DETAILS', stream);
        }
        this.cdRef.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    valuesIn(this.subscribers).filter(item => !!item).forEach((item: Subscriber) => this.session.unsubscribe(item));
  }
}
