import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

import { AvatarIconsEnum } from 'common/enums/avatar-icons.enum';
import { DevbarPanelViewType } from 'common/types/devbar-panel-view.type';

import { clone, equals, isNil } from 'ramda';
import { BehaviorSubject, defer, iif, interval, Observable, of } from 'rxjs';
import {
  catchError, concatMapTo,
  filter,
  finalize,
  map,
  mapTo,
  mergeMap,
  mergeMapTo,
  pluck,
  skip,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap
} from 'rxjs/operators';

import { NotificationsService, WindowRefService } from 'services';
import { DialogService } from 'services/app/dialog.service';
import { NavigationService } from 'services/navigation.service';
import { PatientdataService } from 'services/patientdata.service';

import { StateService } from 'services/state.service';
import { UserService } from 'user/user.service';
import { PatientProfileService } from '../../../../../../patient-profile/src/lib/services/patient-profile.service';
import { Triage } from '../../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { PatientIdCard } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-id-card.interface';
import { PatientInsuranceCard } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-insurance-card.interface';
import { PatientProfile } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-profile.interface';
import { PatientContactInformation } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-contact-information.interface';

import { SocialCard } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';
import { versions } from '../../../../environments';
import { UserRolesEnum } from '../../../common/enums/user-roles.enum';
import { PatientDataFacadeService } from '../../../patient-core/patient-data-facade.service';
import { PreparedPatientListEntity } from '../../../patient-list/interfaces/prepared-patient-list-entity.interface';
import { TelemedicineModeEnum } from '../../../patient-list/telemedicine-mode.enum';
import { TelemedicineComponent } from '../../../telemedicine/telemedicine/telemedicine.component';
import { FullNamePipe } from '../../../utils/full-name.pipe';
import { PpcustomdialogComponent } from '../../shared/popups/ppcustomdialog/ppcustomdialog.component';
import { PatientPhoneEnum } from '../../../../../../patient-profile/src/lib/enums';
import { TelemedicineTestComponent } from 'telemedicine/telemedicine-test/telemedicine-test.component';
import { ChatService } from 'chat/chat.service';

@Component({
  selector: 'pa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: {
      showDelay: 500,
      hideDelay: 100
    }},
    FullNamePipe
  ]
})
export class HeaderComponent implements OnInit, DoCheck {

  private readonly defaultPhoto = '/DoctorApp/assets/img/sys/pic-placeholder.png';
  public userRole: UserRolesEnum;
  private isFirstTimeOpenedPatient = true;

  public photo = this.defaultPhoto;
  public patient: PatientProfile;
  public triage: Triage[] = [];
  public currentPatient: PreparedPatientListEntity;
  public isLogged: boolean;
  public data: any;
  public isDevbarAvailable;
  public isPatientsLocation: boolean;
  public viewOnly: boolean;
  public name: string | null;
  public allLocations: string[];
  public selectedLocations: string[];
  public readonly version = versions.app;
  public expansionPanel = false;
  @ViewChild('filter') filter: MatSelect;

  public patientLoaded: boolean;
  private _telemedicineUrl = new BehaviorSubject<string | boolean>(null);
  public telemedicineCallOpened = false;
  public readonly TelemedicineModeEnum = TelemedicineModeEnum;
  public reminderSendingDisabled = true;
  public patientTelemedicineMode: TelemedicineModeEnum;

  readonly isPICBusiness: boolean;

  constructor(
    private stateService: StateService,
    private navigationService: NavigationService,
    private dataService: PatientdataService,
    private userService: UserService,
    private dialogService: DialogService,
    private windowService: WindowRefService,
    private patientProfileService: PatientProfileService,
    private patientDataService: PatientDataFacadeService,
    private fullNamePipe: FullNamePipe,
    private notificationsService: NotificationsService,
    private chatService: ChatService
  ) {
    this.isPICBusiness = this.userService.isPICModeBusiness;
  }

  private static patientTelemedicineMode(patient: PreparedPatientListEntity, userRole: UserRolesEnum): TelemedicineModeEnum {
    const isAdvinowMode = patient.telemedicine_mode === TelemedicineModeEnum.ADVINOW
      && patient.patientListGroup === 'telemedicine'
      && userRole !== UserRolesEnum.PHARMACIST;
    return isAdvinowMode ? TelemedicineModeEnum.ADVINOW : TelemedicineModeEnum.MEMD;
  }

  ngOnInit() {
    this.isDevbarAvailable = this.stateService.app.getDebug();

    this.stateService.app.getToggleDebugEvent().subscribe((debugMode: boolean) => {
      this.isDevbarAvailable = debugMode;
    });

    this.stateService.patient.getCurrent().pipe(
      tap((patient: PreparedPatientListEntity) => {
        this.currentPatient = patient;
        if (!patient) this.clear();
        else {
          this.patientTelemedicineMode = HeaderComponent.patientTelemedicineMode(patient, this.userRole);
        }
      }),
      mergeMap(
        patient => iif(
          () => !isNil(patient) && this.userRole === UserRolesEnum.PRACTITIONER || this.userRole === UserRolesEnum.PHARMACIST,
          this.telemedicineSessionAvailablePolling(),
          of(null)
        ))
    ).subscribe(telemedicineUrl => {
      this._telemedicineUrl.next(telemedicineUrl);
    });

    this.dataService.isPatientLoaded$().subscribe(isLoaded => {
      this.patientLoaded = isLoaded;
      if (this.currentPatient && this.isFirstTimeOpenedPatient && isLoaded) {
        this.expansionPanel = true;
        this.isFirstTimeOpenedPatient = false;
        setTimeout(() => this.expansionPanel = false, 2000);
      }
    });

    this.patientProfileService.patientProfileData$('patientProfile').pipe(
      switchMap((patientProfile: PatientProfile) => {
        this.patient = patientProfile;
        this.photo = patientProfile.photo ? patientProfile.photo.s3 : this.defaultPhoto;
        return this.patientProfileService.patientProfileData$('contactRecord').pipe(
          pluck('phoneNumberList')
        );
      })
    ).subscribe((phoneNumberList: { [key in keyof typeof PatientPhoneEnum]: string }[]) => {
      this.patient.phoneNumberList = phoneNumberList;
    })

    this.patientDataService.triage$.subscribe(triage => this.triage = triage);

    this.userService.isAuthenticated$.subscribe(logged => this.isLogged = logged);
    this.stateService.app.header.getData().subscribe(data => setTimeout(() => this.data = data, 4));

    this.name = this.userService.getUserData.full_name;
    this.userRole = this.userService.getUserRole;

    this.allLocations = this.userService.getUserData.locations;
    const userSettings = this.userService.userSettings.load();
    this.selectedLocations = userSettings['selectedLocations'];
    if (!this.selectedLocations) this.selectedLocations = this.allLocations;

    this.userService.userSettings.watch().pipe(skip(1), tap(settings => {
      this.allLocations = settings.availableLocations;
      this.selectedLocations = settings.selectedLocations;
    })).subscribe();
  }

  isShowChat(isShowChat: boolean) {
    this.chatService.isShowChat(isShowChat, this.patient.patientId);
  }
  
  public get socialCard$(): Observable<SocialCard> {
    return this.patientDataService.socialCard$;
  }

  public get patientInsurance$(): Observable<Readonly<PatientInsuranceCard[]>> {
    return this.patientProfileService.patientInsurance$.pipe(map(data => data.filter(item => item.cardImage.length)));
  }

  public get patientIdCard$(): Observable<Readonly<PatientIdCard[]>> {
    return this.patientProfileService.patientIdCard$;
  }

  selectLoc(selectionEvent) {
    const selected = selectionEvent.value;
    this.userService.userSettings.set({ selectedLocations: [...selected] });
  }

  ngDoCheck() {
    this.viewOnly = this.stateService.patient.getLastViewOnly();
    this.isPatientsLocation = this.navigationService.isPatientsLocation;
  }

  quit() {
    this.userService.auth.emitLogout();
  }

  clear() {
    this.currentPatient = null;
    this.patient = null;
    this.photo = this.defaultPhoto;
    this.isFirstTimeOpenedPatient = true;
    this.expansionPanel = false;
    this._telemedicineUrl.next(null);
    this.patientTelemedicineMode = null;
  }

  returnToPatients() {
    this.navigationService.navigateToPatients(true);
  }

  toggleDevBar(view: DevbarPanelViewType) {
    this.stateService.app.developmentBar.toggle(view);
  }

  goToPasswordChange() {
    if (!this.isPatientsLocation) {
      this.navigationService.setExitPatientRoute('/passwd', { queryParams: {action: 'change'} });
    }
    this.navigationService.navigate('/passwd', { queryParams: {action: 'change'} });
  }

  get avatarIcon(): string {
    if (this.isClerkOrOMUserRole()) {
      return AvatarIconsEnum.CLERK_OR_OM;
    }
    return AvatarIconsEnum.PRACTITIONER;
  }

  private isClerkOrOMUserRole(): boolean {
    return this.userRole === 'office_clerk' || this.userRole === 'operations_manager';
  }

  onFilterStateChanged(isOpened: boolean) {
    if (isOpened) this.filter.disabled = true;
    else this.filter.disabled = false;
  }

  public get isOperationManagerUserRole(): boolean {
    return this.userRole === 'operations_manager';
  }

  editPatientName() {
    this.dialogService.open(PpcustomdialogComponent, {
      autoFocus: true,
      closeOnNavigation: true,
      minWidth: '500px',
      width: '45%',
      data: {
        title: 'Change name',
        isDialog: true,
        okIsConfirm: true,
        patient: this.patient,
        isChangeNameDialog: true
      }
    }).subscribe(result => {
      if (result) {
        this.saveChanges(result[1].returnValue[0]);
      }
    });
  }

  panelToggle() {
    if (this.currentPatient)
      this.expansionPanel = !this.expansionPanel;
  }

  saveChanges(patientProfile: Partial<PatientProfile>) {
    this.patientProfileService.updatePersonalInfo(patientProfile).pipe(
      concatMapTo(
        iif(
          () => 'gender' in patientProfile || 'birthDate' in patientProfile,
          this.dataService.rerunTriage([], this.patient.patientId, false, true)
        ),
      )
    ).subscribe();
  }

  public get telemedicineUrl(): Observable<string | boolean> { return this._telemedicineUrl.asObservable(); }

  public openInWindow(telemedicineUrl: string | boolean) {
    const patientFullName = this.fullNamePipe.transform(this.patient);
    if (typeof telemedicineUrl === 'string') {
      this.windowService.nativeWindow.open(telemedicineUrl, patientFullName, 'width=1024,height=768,resizeable');
    } else {
      this.telemedicineCallOpened = true;
      this.patientProfileService.getTelemedicineInfo().pipe(
        catchError(err => {
          this._telemedicineUrl.next(null);
          this.notificationsService.error('Patient left televisit session.');
          return of(null);
        }),
        filter(data => !!data),
        mergeMap(data => this.dialogService.open<{ reason: 'error' | 'complete' | 'hold' | 'drop', message: string }>(TelemedicineComponent, {
          data: { ...data, patientFullName },
          autoFocus: true,
          closeOnNavigation: false,
          minWidth: '360px',
          minHeight: '200px',
          height: '90%',
          width: '95%',
          disableClose: true,
          role: 'alertdialog',
          backdropClass: 'telemedicine-wrapper',
          hasBackdrop: false
        }, null, true)),
        filter(dialogResult => !!dialogResult),
        mergeMap((dialogResult) => iif(
          () => !['error', 'hold'].includes(dialogResult.reason),
          this.patientProfileService.completeTelemedicineSession().pipe(mapTo(dialogResult)),
          of(dialogResult)
        )),
        tap(dialogResult => {
          switch (dialogResult.reason) {
            case 'complete':
              this.notificationsService.info('Televisit session finished.');
              break;
            case 'drop':
              this.notificationsService.info('Televisit session finished.', 'Patient left session.');
              break;
            case 'hold':
              this.notificationsService.warning('Televisit session on hold.');
              break;
          }
        }),
        mergeMap(() => this.parseTelemedicineUrl(this.currentPatient).pipe(tap(result => this._telemedicineUrl.next(result)))),
        finalize(() => this.telemedicineCallOpened = false)
      ).subscribe();
    }
  }

  openTestConnectionDialog(): void {
    this.dialogService.open(TelemedicineTestComponent, {
      autoFocus: true,
      closeOnNavigation: false,
      minWidth: '360px',
      minHeight: '200px',
      height: '90%',
      width: '60%',
      disableClose: true,
      role: 'alertdialog',
      backdropClass: 'telemedicine-wrapper',
      hasBackdrop: false
    }, null, true).subscribe();
  }

  private parseTelemedicineUrl(patient: PreparedPatientListEntity): Observable<string | boolean> {
    if (!patient) return of(null);
    if (this.patientTelemedicineMode === TelemedicineModeEnum.ADVINOW) {
      return this.patientProfileService.checkTelemedicineAvailability().pipe(
        catchError(() => of(null))
      );
    } else {
      return of(patient.telemedecine_url);
    }
  }

  public sendTelemedicineLinkToPatient(): void {
    const sendingSuccessMessage: Observable<void> = defer(() => of(this.notificationsService.success('Appointment link was sent to patient.')));
    const sendingErrorMessage: Observable<void> = defer(() => of(this.notificationsService.error('Appointment link was not sent to patient.', 'Something goes wrong.')));
    this.patientProfileService.sendTelemdicineLinkToPatient(this.currentPatient.session_key).pipe(
      mergeMap((result: boolean) =>
        iif(
          () => result,
          sendingSuccessMessage,
          sendingErrorMessage
        )
      )
    ).subscribe();
  }

  private telemedicineSessionAvailablePolling(): Observable<boolean> {
    const currentPatient = clone(this.currentPatient);
    return interval(5000).pipe(
      take(600),
      takeUntil(this.stateService.patient.getCurrent().pipe(filter(patient => !equals(patient, currentPatient)), take(1))),
      mergeMap(() => this.parseTelemedicineUrl(this.currentPatient)),
      tap(url => this._telemedicineUrl.next(url)),
      map(url => !!url),
      takeWhile(url => !url)
    );
  }
}
