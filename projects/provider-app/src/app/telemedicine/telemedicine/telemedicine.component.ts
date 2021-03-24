import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ErrorHandler,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

import { OTError, Session } from '@opentok/client';
import { BehaviorSubject, defer, fromEvent, iif, interval, merge, Observable, of, Subject } from 'rxjs';
import {
  filter,
  finalize,
  mapTo,
  mergeMap,
  mergeMapTo,
  sample,
  take,
  takeUntil,
  takeWhile,
  tap,
  timeoutWith,
  withLatestFrom
} from 'rxjs/operators';


import { PatientProfileService } from '../../../../../patient-profile/src/lib/services/patient-profile.service';
import { environment as appEnvironment } from '../../../environments';
import { NotificationsService } from '../../components/notifications/notifications.service';
import { StateService } from '../../services';
import { APP_ENVIRONMENT } from '../environment.token';
import { MAIN_STREAM, MAIN_STREAM_ACTIVE } from '../main-stream.token';
import { OpentokUnhandledRejection } from '../opentok-unhandled-rejection.error';
import { OpentokService } from '../opentok.service';
import { PATIENT_FULL_NAME } from '../patient-full-name.token';
import { OT_SESSION } from '../session.token';

import { TelemedicineInfo } from '../telemedicine-info.interface';
import { VideoSourceEnum } from '../video-source.enum';

@Component({
  selector: 'pa-telemedicine',
  templateUrl: './telemedicine.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./telemedicine.component.scss'],
  providers: [{
    provide: MAIN_STREAM,
    useFactory: () => new BehaviorSubject<VideoSourceEnum>(VideoSourceEnum.PATIENT)
  }, {
    provide: OT_SESSION,
    useFactory: (telemedicineInfo: TelemedicineInfo, OT: OpentokService) => OT.initSession(telemedicineInfo.platform_information.project_id, telemedicineInfo.platform_information.session_id),
    deps: [MAT_DIALOG_DATA, OpentokService]
  }, {
    provide: MAIN_STREAM_ACTIVE,
    useFactory: () => new BehaviorSubject<boolean>(false)
  }, {
    provide: PATIENT_FULL_NAME, useFactory: (dialogData: TelemedicineInfo & { patientFullName: string }) => dialogData.patientFullName, deps: [MAT_DIALOG_DATA]
  }]
})
export class TelemedicineComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly token: string;
  public readonly videoSource = VideoSourceEnum;

  private _destroy$ = new Subject<void>();
  private _minified = new BehaviorSubject<boolean>(false);
  public dragPosition = { x: 0, y: 0 };
  private result: { reason: 'error' | 'complete' | 'hold' | 'drop', message: string } = null;
  private _reconnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private dialogOpened = false;

  // @ts-ignore
  private defaultZoneHandling: { promiseRejection: Function; consoleIgnore: boolean } = { promiseRejection: window.Zone['__zone_symbol__unhandledPromiseRejectionHandler'], consoleIgnore: window.Zone['__zone_symbol__ignoreConsoleErrorUncaughtError'] };

  @ViewChild('matSidenav') matSidenav: MatSidenav;

  public selectedTabIndex = 0;
  private _unreadMessages = new BehaviorSubject<boolean>(false);

  constructor(
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private telemedicineInfo: TelemedicineInfo,
    private matDialogRef: MatDialogRef<TelemedicineComponent>,
    private elementRef: ElementRef,
    private notificationsService: NotificationsService,
    private errorHandler: ErrorHandler,
    private stateService: StateService,
    private patientProfileService: PatientProfileService,
    private OT: OpentokService,
    @Inject(MAIN_STREAM) private _mainStream: BehaviorSubject<VideoSourceEnum>,
    @Inject(OT_SESSION) private session: Session,
    @Inject(MAIN_STREAM_ACTIVE) private _mainStreamActive: BehaviorSubject<boolean>,
    @Inject(APP_ENVIRONMENT) environment: typeof appEnvironment
  ) {
    this.token = telemedicineInfo.platform_information.client_tokens.doctor;
    if (environment.name !== 'local') {
      // todo: replace global zone implementation with ngZone
      // @ts-ignore
      window.Zone['__zone_symbol__unhandledPromiseRejectionHandler'] = (error) => {
        this.errorHandler.handleError(new OpentokUnhandledRejection(error));
      };
      // @ts-ignore
      window.Zone['__zone_symbol__ignoreConsoleErrorUncaughtError'] = true;
    }
  }

  ngOnInit(): void {
    this.initializeSession();
    merge(
      this.stateService.patient.getUnassignEvent(),
      this.stateService.patient.watchFinalizeProcessSucceed()
    ).pipe(takeUntil(this._destroy$)).subscribe(() => {
      this.result = { reason: 'hold', message: 'Session hold on.' };
      this.closeDialog();
    });
  }

  ngAfterViewInit(): void {
    fromEvent(document, 'click').pipe(
      takeUntil(this._destroy$),
      withLatestFrom(this.isMinified),
      filter(([event, modalMinified]): boolean => {
        const isNotificationToast = (event.target as HTMLElement)?.className?.match(/md-toast/gi);
        return !isNotificationToast && !modalMinified  && !this.dialogOpened && !this.elementRef.nativeElement.contains(event.target);
      })
    ).subscribe(([event, modalMinified]) => {
        event.preventDefault();
        event.stopPropagation();
        this.minimizeWindow();
    });

    merge(
      fromEvent(this.elementRef.nativeElement, 'mousedown').pipe(mapTo(true)),
      fromEvent(this.elementRef.nativeElement, 'mousemove').pipe(mapTo(false)),
    ).pipe(
      sample(fromEvent(this.elementRef.nativeElement, 'mouseup')),
      takeUntil(this._destroy$),
      withLatestFrom(this.isMinified),
      filter(([target, modalMinified]) => target && modalMinified)
    ).subscribe(event => {
      this.restoreFullSize();
    });
  }

  public checkSessionAvailability(): void {
    this.patientProfileService.checkTelemedicineAvailability().pipe(
      mergeMap((sessionActive: boolean) => iif(
        () => sessionActive,
        this.pollPatientSessionClose(),
        of(sessionActive)
      )),
      filter(sessionActive => !sessionActive)
    ).subscribe((sessionActive: boolean) => {
      if (!this.result) this.result = {reason: 'drop', message: 'Patient left televisit session.'};
      this.closeDialog();
    });
  }

  private initializeSession(): void {
    this.OT.setLogLevel(0);

    fromEvent(this.session, 'streamCreated').pipe(
      mapTo(true),
      take(1),
      timeoutWith(40000, this.pollPatientSessionClose()),
      filter(sessionActive => !sessionActive),
      takeUntil(this._destroy$)
    ).subscribe(sessionActive => this.closeDialog());

    this.session.connect(this.token, (error) => {
      if (error) {
        this.handleError(error);
      }
    });
  }

  public handleError(error: OTError): void {
    if (error) {
      switch (error.name) {
        case 'OT_AUTHENTICATION_ERROR':
          this.notificationsService.error('Unable to establish televisit session.');
          this.result = { reason: 'error', message: error.message };
          this.closeDialog();
          break;
        case 'OT_USER_MEDIA_ACCESS_DENIED':
        case 'OT_HARDWARE_UNAVAILABLE':
          this.notificationsService.error('Media device is unavailable.');
          this.result = { reason: 'error', message: error.message };
          break;
        default:
          console.error(error);
      }
      this.errorHandler.handleError({...error, telemedicineSessionData: this.telemedicineInfo});
    }
  }

  public get isMinified(): Observable<boolean> {
    return this._minified.asObservable();
  }

  public minimizeWindow(): void {
    this.matDialogRef.addPanelClass('telemedicine-wrapper');
    this.matDialogRef.updateSize('5%', '5%').updatePosition({ right: '5px', bottom: '5px' });
    this._minified.next(true);
    this.matSidenav.close();
  }

  public restoreFullSize(): void {
    this.dragPosition = { x: 0, y: 0 };
    this.matDialogRef.removePanelClass('telemedicine-wrapper');
    this.matDialogRef.updateSize('90%', '90%').updatePosition(null);
    this._minified.next(false);
  }

  public endSession(): void {
    if (!this.result) this.result = { reason: 'complete', message: 'Televisit session complete.' };
    this.closeDialog();
  }

  private closeDialog(): void {
    this.matSidenav.close();
    this.matDialogRef.close(this.result);
  }

  private pollPatientSessionClose(): Observable<boolean> {
    return defer(() => {
      this._reconnect.next(true);
      const reconnect = fromEvent(this.session, 'streamCreated').pipe(
        take(1),
        tap(() => this.result = null),
        takeUntil(this._destroy$)
      );
      return interval(5000).pipe(
        takeUntil(this._destroy$),
        takeUntil(reconnect),
        mergeMapTo(this.patientProfileService.checkTelemedicineAvailability().pipe(tap(sessionActive => {
          if (sessionActive) this.result = { reason: 'hold', message: 'Patient did not connect to televisit session.' };
          else this.result = { reason: 'drop', message: 'Patient left televisit session.' };
        }))),
        takeWhile(sessionActive => sessionActive, true),
        finalize(() => this._reconnect.next(false))
      );
    });
  }

  public get reconnectObserver$(): Observable<boolean> {
    return this._reconnect.asObservable();
  }

  public get mainStreamActive$(): Observable<boolean> {
    return this._mainStreamActive.asObservable();
  }

  public openPanel(tab: 'chat' | 'streams'): void {
    this.selectedTabIndex = tab === 'chat' ? 1 : 0;
    this.matSidenav.toggle();
    this.cdRef.detectChanges();
  }

  public unreadMessagesHandler(unreadState: boolean): void {
    this._unreadMessages.next(unreadState);
  }

  public get unreadMessages(): Observable<boolean> {
    return this._unreadMessages;
  }

  ngOnDestroy(): void {
    this._reconnect.complete();
    this.session.disconnect();
    this._destroy$.next();
    this._destroy$.complete();
    this._mainStream.complete();
    this._mainStreamActive.complete();
    this._unreadMessages.complete();

    // todo: replace global zone implementation with ngZone
    // @ts-ignore
    window.Zone['__zone_symbol__unhandledPromiseRejectionHandler'] = this.defaultZoneHandling.promiseRejection;
    // @ts-ignore
    window.Zone['__zone_symbol__ignoreConsoleErrorUncaughtError'] = this.defaultZoneHandling.consoleIgnore;
  }
}
