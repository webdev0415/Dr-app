import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { OTError, Publisher, ScreenSharingCapabilityResponse, Session } from '@opentok/client';
import { filter, take } from 'rxjs/operators';


import { NotificationsService } from '../../components/notifications/notifications.service';
import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogService } from '../../services/app/dialog.service';
import { stdDialogConfig } from '../../static/app.constants';
import { OpentokService } from '../opentok.service';
import { OT_SESSION } from '../session.token';
import { VideoSourceEnum } from '../video-source.enum';

@Component({
  selector: 'pa-telemedicine-controls',
  templateUrl: './telemedicine-controls.component.html',
  styleUrls: ['./telemedicine-controls.component.scss']
})
export class TelemedicineControlsComponent implements OnInit, OnDestroy {
  @Output() error = new EventEmitter<OTError>();
  @Output() openPanel = new EventEmitter<'chat' | 'streams'>();
  @Output() endSessionEvent: EventEmitter<void> = new EventEmitter<void>();
  @Input() sidePanelOpened: boolean;
  @Input() unreadMessages: boolean;

  private publisher: Publisher;
  private screenSharingPublisher: Publisher;
  public screenSharingActive = false;
  public micEnabled = true;
  public cameraEnabled = true;
  public sessionConnected = false;

  private readonly stdDialogConfig = stdDialogConfig;

  constructor(
    @Inject(OT_SESSION) private session: Session,
    private OT: OpentokService,
    private notificationsService: NotificationsService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.publisher = this.OT.initPublisher(
      'self',
      {insertMode: 'append', width: '100%', height: '100%', fitMode: 'cover', showControls: false, name: VideoSourceEnum.PROVIDER},
      (error) => this.error.emit(error)
    );
    this.session.once('sessionConnected', (session) => {
      this.session.publish(this.publisher, (err) => this.error.emit(err));
      this.sessionConnected = true;
    });
  }

  ngOnDestroy(): void {
    this.session.unpublish(this.publisher);
    this.session.unpublish(this.screenSharingPublisher);
  }

  public openSidePanel(activeSection: 'streams' | 'chat'): void {
    this.openPanel.emit(activeSection);
  }

  public startScreenSharing(event: UIEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.OT.checkScreenSharingCapability((response: ScreenSharingCapabilityResponse) => {
      if (!response.supported || response.extensionRegistered === false) {
        this.notificationsService.error('Your browser does not support screen sharing.', 'Sorry.');
      } else if (response.extensionInstalled === false) {
        this.notificationsService.warning('Please install the screen sharing extension.');
      } else {
        this.screenSharingPublisher = this.OT.initPublisher(document.createElement('div'), { videoSource: 'screen', name: VideoSourceEnum.SCREEN });
        this.screenSharingActive = true;
        this.session.publish(this.screenSharingPublisher, (error => {
          if (error) {
            this.error.emit(error);
            this.screenSharingActive = false;
          }
        }));
      }
    });
  }

  public stopScreenSharing(event: UIEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.session.unpublish(this.screenSharingPublisher);
    this.screenSharingActive = false;
  }

  public endSession(event: UIEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialogService.open<boolean>(PpcustomdialogComponent, {
      ...new MatDialogConfig(), ...this.stdDialogConfig,
      data: { message: 'Are you sure you want to finish televisit session?', isDialog: true }
    }).pipe(
      take(1),
      filter(answer => answer),
    ).subscribe(() => this.endSessionEvent.emit());
  }

  public toggleMic(event: UIEvent, state: boolean): void {
    event.stopPropagation();
    this.publisher.publishAudio(state);
    this.micEnabled = state;
  }

  public toggleCamera(event: UIEvent, state: boolean): void {
    event.stopPropagation();
    this.publisher.publishVideo(state);
    this.cameraEnabled = state;
  }
}


