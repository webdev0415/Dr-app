import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Event as REvent, NavigationEnd, Router } from '@angular/router';

import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { Observable } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { isNil } from 'ramda';

import { NotificationsService } from './components/notifications/notifications.service';
import { DialogSubscribesService } from './services/dialogsubscribes.service';
import { DataService, NavigationService, StateService, SymptomsService, WindowRefService } from './services';
import { ProceduresService } from './procedures/procedures.service';
import { UserService } from 'user/user.service';
import { VersionCheckService } from './services/version-check.service';
import { MeasurementsMediaService } from './services/measurements-media.service';
import { Helpers } from './utils/helpers';
import { PatientListEntity } from './patient-list/interfaces/patient-list-entity.model';
import { DevbarPanelViewType } from './common/types/devbar-panel-view.type';
import { environment } from '../environments/environment';
import { LabsService } from './labs/services/labs.service';
import { PatientListService } from './patient-list/services/patient-list.service';
import * as FullStory from '@fullstory/browser';

declare let gtag: Function;

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscribes = [];

  public logged: boolean;
  public PDFLink: SafeResourceUrl;
  public PDFAvailable: boolean;
  public isAnyDialogs: Observable<boolean> = this.stateService.app.dialog.getDialogOpenedStatus();
  public devbarPanelView: DevbarPanelViewType;

  public currentDataDev: Observable<string> = this.dataService.getPatient().pipe(map(list => JSON.stringify(list, null, 2)));
  public patientsListDev: Observable<string> = this.patientListService.listLastValue.pipe(debounceTime(500), map(list => JSON.stringify(list, null, 2)));
  public auditListDev: Observable<string> = this.measurementsMediaService.getAudit().pipe(map(list => JSON.stringify(list, null, 2)));
  public visitDataDev: Observable<string> = this.dataService.getVisitData().pipe(map(list => JSON.stringify(list, null, 2)));

  private newVersionAvailable: boolean;
  private delayUpdate: boolean;

  private currentPatient: PatientListEntity;

  @ViewChild('devviewer') devviewer: MatSidenav;

  constructor(
    private stateService: StateService,
    private userService: UserService,
    private navigationService: NavigationService,
    private dataService: DataService,
    private symptomsService: SymptomsService,
    private proceduresService: ProceduresService,
    private domSanitizer: DomSanitizer,
    private dialogSubscribesService: DialogSubscribesService,
    private mdbSpinningPreloader: MDBSpinningPreloader,
    private notificationService: NotificationsService,
    private changeDetector: ChangeDetectorRef,
    private windowService: WindowRefService,
    private router: Router,
    private versionCheckService: VersionCheckService,
    private measurementsMediaService: MeasurementsMediaService,
    private labsService: LabsService,
    private patientListService: PatientListService
  ) {  FullStory.init({ orgId: environment.fullstoryOrgId, devMode: !environment.production }  ); }

  

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: REvent) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (environment.googleAnalyticsID) {
          gtag('config', environment.googleAnalyticsID, { page_path: event.urlAfterRedirects });
        }
        this.logged = this.userService.isAuthenticated && !this.router.routerState.snapshot.url.match(/telemedicine/);
      });

    this.dialogSubscribesService.subscribeDialogs();

    this.subscribes.push(this.stateService.app.getToggleDebugEvent().subscribe((debugMode: boolean) => {
      this.notificationService.info(`Debug mode was ${debugMode ? 'enabled' : 'disabled'}.`);
    }));

    this.fetchInitData();

    this.watchPdfEvent();
    this.watchDebugPanelToggle();
    this.watchSpinnerPreloader();
    this.watchWindowReloadEvent();
    this.watchAuthError();

    this.checkForVersionChange();



  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.navigationService.goBack(true);
  }

  showUpdateVersionBar(): boolean {
    return this.router.url === '/patients' && this.newVersionAvailable && !this.delayUpdate;
  }

  get showTimer(): boolean {
    return isNil(this.currentPatient);
  }

  toggleAdditionalDischargeSection(): void {
    this.stateService.app.developmentBar.toggleAdditionalDischarge();
  }

  get additionalDischargeEnabled(): boolean {
    return this.stateService.app.developmentBar.additionalDischargeEnabled();
  }

  private checkForVersionChange(): void {
    this.subscribes.push(this.versionCheckService.newVersionAvailable$.subscribe(res => (this.newVersionAvailable = res)));
    this.subscribes.push(this.versionCheckService.delayUpdate$.subscribe(res => (this.delayUpdate = res)));
    this.versionCheckService.initVersionCheck();
  }

  private watchPdfEvent(): void {
    this.subscribes.push(this.stateService.app.pdf.watchPdfEvent().subscribe(link => {
      if (link) {
        this.PDFAvailable = true;
        if (Helpers.isPlatformiOS()) {
          this.PDFLink = link;
        } else {
          this.PDFLink = this.domSanitizer.bypassSecurityTrustResourceUrl(link);
        }
      } else {
        this.PDFAvailable = false;
        this.notificationService.error('Document link is invalid.', 'Unable to open the document.');
      }
    }));
    this.subscribes.push(this.stateService.app.pdf.watchPdfClosed().subscribe(() => {
      this.PDFAvailable = false;
    }));
  }

  private watchWindowReloadEvent(): void {
    this.windowService.nativeWindow['drAppBeforeUnloadFn'] = (ev) => {
      ev.preventDefault();
      const e = ev || this.windowService.nativeWindow.event;
      if (e) e.returnValue = '';
      return '';
    };

    this.stateService.patient.getCurrent().subscribe(patient => {
      this.currentPatient = patient;
      if (patient !== null) {
        this.windowService.nativeWindow.addEventListener('beforeunload', this.windowService.nativeWindow['drAppBeforeUnloadFn']);
        this.windowService.nativeWindow.addEventListener('unload', () => {
          if (!this.windowService.nativeWindow['unloadEventAlreadyEmitted']) {
            this.windowService.nativeWindow['unloadEventAlreadyEmitted'] = true;
          }
        });
      } else {
        this.windowService.nativeWindow.removeEventListener('beforeunload', this.windowService.nativeWindow['drAppBeforeUnloadFn']);
      }
    });
  }

  private watchAuthError(): void {
    this.subscribes.push(
      this.userService.auth.getAuthError().pipe(filter(item => Boolean(item && item.message)))
        .subscribe((authError) => {
          switch (authError.priority) {
            case -1:
              break;
            case 0:
              this.notificationService.info(authError.message, authError.title);
              break;
            case 1:
              this.notificationService.success(authError.message, authError.title);
              break;
            case 2:
              this.notificationService.warning(authError.message, authError.title);
              break;
            case 3:
            default:
              this.notificationService.error(authError.message, authError.title);
              break;
          }
        })
    );
  }

  private watchSpinnerPreloader(): void {
    this.subscribes.push(this.stateService.app.workers.get().subscribe((workers: number) => {
      if (workers > 0) {
        this.mdbSpinningPreloader.start();
      } else {
        this.mdbSpinningPreloader.stop();
      }
    }));
  }

  private watchDebugPanelToggle(): void {
    this.subscribes.push(
      this.stateService.app.developmentBar.getStateEv().toggler
        .pipe(filter(() => !isNil(this.devviewer)))
        .subscribe((panel: DevbarPanelViewType) => {
          if (panel === this.devbarPanelView || !this.devviewer.opened) {
            this.devbarPanelView = panel;
            this.devviewer.toggle();
            return;
          }
          this.devviewer.close().then(() => {
            this.devbarPanelView = panel;
            this.devviewer.open();
          });
      })
    );
  }

  private fetchInitData(): void {
    this.userService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        FullStory.identify(this.userService.getUserData.full_name);
        this.symptomsService.getSymptoms();
        this.symptomsService.getBodyPartsData();
        this.symptomsService.getTreatmentTypesData();
        this.proceduresService.getMedicationsData();
        this.proceduresService.getInjectionsData();
        this.labsService.getBusinessLabsData();
      }
    });
  }

  ngOnDestroy() {
    this.changeDetector.detach();
    this.dialogSubscribesService.unsubscribeDialogs();
    this.subscribes.forEach(s => s.unsubscribe());
    this.windowService.nativeWindow.removeEventListener('beforeunload', this.windowService.nativeWindow['drAppBeforeUnloadFn']);
  }

}
