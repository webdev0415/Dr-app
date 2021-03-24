import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick
} from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BehaviorSubject, NEVER, of, Subject, throwError } from 'rxjs';


import { NavigationService, NotificationsService, PatientdataService, WindowRefService } from 'services';
import { StateService } from 'services/state.service';
import { testPatientData, testTriage } from 'static/test.constants';
import { PatientProfileService } from '../../../../../../patient-profile/src/lib/services/patient-profile.service';
import { testContactInformation, testPatientProfile } from '../../../../../../patient-profile/src/lib/test.constants';
import { GenderEnum } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/enums/gender.enum';
import { PatientProfile } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces';
import { PatientIdCard } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-id-card.interface';
import { PatientInsuranceCard } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-insurance-card.interface';
import { AvatarIconsEnum } from '../../../common/enums';
import { UserRolesEnum } from '../../../common/enums/user-roles.enum';
import { PatientDataFacadeService } from '../../../patient-core/patient-data-facade.service';
import { testSocialCard } from '../../../patient-core/test.constants';
import { PreparedPatientListEntity } from '../../../patient-list/interfaces/prepared-patient-list-entity.interface';
import { TelemedicineModeEnum } from '../../../patient-list/telemedicine-mode.enum';
import { DialogService } from '../../../services/app/dialog.service';
import { TelemedicineInfo } from '../../../telemedicine/telemedicine-info.interface';
import { UserService } from '../../../user/user.service';
import { FullNamePipe } from '../../../utils/full-name.pipe';
import { HeaderComponent } from './header.component';

import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;
import objectContaining = jasmine.objectContaining;
import SpyObj = jasmine.SpyObj;

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;


  const navigationServiceSpy: SpyObj<NavigationService> = createSpyObj<NavigationService>(
    'NavigationService',
    ['navigate', 'navigateToPatients', 'setExitPatientRoute'],
    ['isPatientsLocation']
  );
  const notificationsServiceSpy: SpyObj<NotificationsService> = createSpyObj<NotificationsService>('NotificationsService', ['error', 'info', 'warning', 'success']);
  const patientDataServiceSpy: SpyObj<PatientdataService> = createSpyObj<PatientdataService>('PatientdataService', ['rerunTriage', 'isPatientLoaded$']);
  const dialogServiceSpy: SpyObj<DialogService> = createSpyObj<DialogService>('DialogService', ['open']);
  const openWindowSpy = createSpy('open');
  const statePatientSpy: SpyObj<StateService['patient']> = createSpyObj<StateService['patient']>(['getCurrent', 'getLastViewOnly']);

  const developmentBarToggleSpy = createSpy('developmentBarToggle');
  const headerDataSubject = new Subject();
  const stateAppSpy: SpyObj<StateService['app']> = createSpyObj<StateService['app']>(
    'StateServiceApp',
    ['getDebug', 'getToggleDebugEvent'],
    {
      developmentBar: { toggle: developmentBarToggleSpy } as unknown as StateService['app']['developmentBar'],
      header: { getData: () => headerDataSubject.asObservable() } as unknown as StateService['app']['header']
    }
  );
  const userSettingsSpy: SpyObj<UserService['userSettings']> = createSpyObj<UserService['userSettings']>(['load', 'watch', 'set']);
  const userDataSpy: SpyObj<UserService['getUserData']> = createSpyObj<UserService['getUserData']>([], { full_name: 'USER FULL NAME', locations: ['LOC 1'] });
  const emitLogoutSpy = createSpy('emitLogout');
  const isAuthenticatedSubject = new Subject<boolean>();
  let userRole: UserRolesEnum = UserRolesEnum.PRACTITIONER;
  const patientProfileSpy: SpyObj<PatientProfileService> = createSpyObj<PatientProfileService>(
    'PatientProfileService',
    ['patientProfileData$', 'updatePersonalInfo', 'getTelemedicineInfo', 'completeTelemedicineSession', 'checkTelemedicineAvailability', 'sendTelemdicineLinkToPatient'],
    { patientInsurance$: of([{cardImage: []}] as PatientInsuranceCard[]) , patientIdCard$: of([] as PatientIdCard[]) }
    );

  const toggleDebugEvent = new EventEmitter<boolean>();
  const currentPatientSubject = new Subject<PreparedPatientListEntity>();
  const isPatientLoadedSubject = new Subject<boolean>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        FullNamePipe
      ],
      providers: [
        FullNamePipe,
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: NotificationsService, useValue: notificationsServiceSpy },
        { provide: PatientdataService, useValue: patientDataServiceSpy },
        { provide: WindowRefService, useValue: createSpyObj<WindowRefService>([], { nativeWindow: { open: openWindowSpy } }) },
        { provide: DialogService, useValue: dialogServiceSpy },
        { provide: PatientDataFacadeService, useValue: createSpyObj<PatientDataFacadeService>('PatientDataFacadeService', [], { triage$: of(testTriage), socialCard$: of(testSocialCard) }) },
        { provide: StateService, useValue: createSpyObj<StateService>([], { patient: statePatientSpy, app: stateAppSpy }) },
        { provide: PatientProfileService, useValue: patientProfileSpy },
        {
          provide: UserService,
          useValue: createSpyObj(
            [],
            {
              isAuthenticated$: isAuthenticatedSubject.asObservable(),
              getUserData: userDataSpy,
              getUserRole: userRole,
              userSettings: userSettingsSpy,
              auth: {emitLogout: emitLogoutSpy}
            }
          )
        }
      ],
      imports: [
        NoopAnimationsModule,
        MatMenuModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    userRole = UserRolesEnum.PRACTITIONER;
    stateAppSpy.getToggleDebugEvent.and.returnValue(toggleDebugEvent);
    statePatientSpy.getCurrent.and.returnValue(currentPatientSubject.asObservable());
    patientDataServiceSpy.isPatientLoaded$.and.returnValue(isPatientLoadedSubject.asObservable());
    patientProfileSpy.patientProfileData$.and.callFake((which) => {
      const patientProfile = {
        patientProfile: testPatientProfile,
        contactRecord: testContactInformation
      };
      return of(which ? patientProfile[which] : patientProfile);
    });
    userSettingsSpy.load.and.returnValue({ selectedLocations: [] });
    userSettingsSpy.watch.and.returnValue(of({ availableLocations: [], selectedLocations: [] }));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<HeaderComponent>(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Patient information update', () => {
    let rerunTriageResponse: BehaviorSubject<boolean>;
    const profileUpdateSpec = (profileUpdateData: Partial<PatientProfile>): void => {
      component.saveChanges(profileUpdateData);
      fixture.detectChanges();
      expect(patientProfileSpy.updatePersonalInfo).toHaveBeenCalledWith(objectContaining(profileUpdateData));
    };

    beforeEach(() => {
      rerunTriageResponse = new BehaviorSubject<boolean>(true);
      patientDataServiceSpy.rerunTriage.calls.reset();
      patientDataServiceSpy.rerunTriage.and.returnValue(rerunTriageResponse.asObservable());
      patientProfileSpy.updatePersonalInfo.calls.reset();
      patientProfileSpy.updatePersonalInfo.and.returnValue(of({ status: 'OK' }));
      fixture.detectChanges();
      currentPatientSubject.next(testPatientData as PreparedPatientListEntity);
    });

    it('should save patient gender', () => {
      profileUpdateSpec({ gender: GenderEnum.TRANSGENDER });
      expect(patientDataServiceSpy.rerunTriage).toHaveBeenCalledWith([], testPatientProfile.patientId, false, true);
      expect(rerunTriageResponse.observers.length).toEqual(1);
      rerunTriageResponse.complete();
    });

    it('should save patient DOB', () => {
      profileUpdateSpec({ birthDate: '1987-11-11' });
      expect(patientDataServiceSpy.rerunTriage).toHaveBeenCalledWith([], testPatientProfile.patientId, false, true);
      expect(rerunTriageResponse.observers.length).toEqual(1);
      rerunTriageResponse.complete();
    });

    it('should save patient name', () => {
      profileUpdateSpec({ firstName: 'ivan' });
      expect(rerunTriageResponse.observers.length).toEqual(0);
      rerunTriageResponse.complete();
    });

    it('should update patient data with dialog result', () => {
      let dialogData;
      dialogServiceSpy.open.and.callFake((componentType, { data }) => {
        dialogData = data;
        return of(null);
      });
      component.editPatientName();
      fixture.detectChanges();
      expect(dialogServiceSpy.open).toHaveBeenCalled();
      expect(dialogData).toEqual(objectContaining({ patient: testPatientProfile }));
      expect(patientProfileSpy.updatePersonalInfo).not.toHaveBeenCalled();
      const editedPatientData: Partial<PatientProfile> = { firstName: 'ivan' };
      dialogServiceSpy.open.and.returnValue(of([true, { returnValue: [editedPatientData] }]));
      fixture.detectChanges();
      component.editPatientName();
      fixture.detectChanges();
      expect(patientProfileSpy.updatePersonalInfo).toHaveBeenCalledWith(objectContaining(editedPatientData));
    });

    it('should use default img url instead of patient profile photo', () => {
      patientProfileSpy.patientProfileData$.and.callFake((which) => {
        const patientProfile = {
          patientProfile: { ...testPatientProfile, photo: null },
          contactRecord: testContactInformation
        };
        return of(which ? patientProfile[which] : patientProfile);
      });
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.photo).toEqual('/DoctorApp/assets/img/sys/pic-placeholder.png');
    });
  });

  describe('User related operations', () => {
    it('should logout', () => {
      emitLogoutSpy.calls.reset();
      component.quit();
      expect(emitLogoutSpy).toHaveBeenCalled();
    });

    it('should get avatar icon', () => {
      component.userRole = UserRolesEnum.OFFICE_CLERK;
      fixture.detectChanges();
      expect(component.avatarIcon).toEqual(AvatarIconsEnum.CLERK_OR_OM);
      component.userRole = UserRolesEnum.PRACTITIONER;
      fixture.detectChanges();
      expect(component.avatarIcon).toEqual(AvatarIconsEnum.PRACTITIONER);
      component.userRole = UserRolesEnum.OPERATIONS_MANAGER;
      fixture.detectChanges();
      expect(component.avatarIcon).toEqual(AvatarIconsEnum.CLERK_OR_OM);
    });

    it('should use all available locations as selected', () => {
      userSettingsSpy.load.and.returnValue({ selectedLocations: null });
      userSettingsSpy.watch.and.returnValue(NEVER);
      component.ngOnInit();
      expect(component.selectedLocations).toEqual(['LOC 1']);
    });

    it('should track user settings update', () => {
      const locations = ['LOC 1', 'LOC 2'];
      const settingsSubject = new Subject();
      userSettingsSpy.watch.and.returnValue(settingsSubject.asObservable());
      component.ngOnInit();
      settingsSubject.next({ selectedLocations: locations[0], availableLocations: locations });
      fixture.detectChanges();
      expect(component.selectedLocations).toEqual([]);
      expect(component.allLocations).toEqual([locations[0]]);
      settingsSubject.next({ selectedLocations: locations, availableLocations: locations });
      fixture.detectChanges();
      expect(component.allLocations).toEqual(locations);
      expect(component.selectedLocations).toEqual(locations);
    });

    it('should track isAuthenticated state', () => {
      isAuthenticatedSubject.next(false);
      expect(component.isLogged).toBeFalse();
      isAuthenticatedSubject.next(true);
      expect(component.isLogged).toBeTrue();
    });

    it('should track header data update', fakeAsync(() => {
      const data = { data: 'HEADER DATA' };
      headerDataSubject.next(data);
      tick(5);
      expect(component.data).toEqual(data);
    }));
  });

  describe('Telemedicine url parsing', () => {
    beforeEach(() => {
      notificationsServiceSpy.error.calls.reset();
      notificationsServiceSpy.success.calls.reset();
      patientProfileSpy.checkTelemedicineAvailability.calls.reset();
      patientProfileSpy.sendTelemdicineLinkToPatient.calls.reset();
      fixture.detectChanges();
    });

    it('should fetch telemedicine link from OE', () => {
      patientProfileSpy.checkTelemedicineAvailability.and.returnValue(of(true));
      currentPatientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW } as PreparedPatientListEntity);
      fixture.detectChanges();
      expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalled();
      expect(patientProfileSpy.sendTelemdicineLinkToPatient).not.toHaveBeenCalled();
    });

    // it('should send reminder to patient on patient assign', () => {
    //   patientProfileSpy.checkTelemedicineAvailability.and.returnValue(of(false));
    //   patientProfileSpy.sendTelemdicineLinkToPatient.and.returnValue(of(true));
    //   currentPatientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW } as PreparedPatientListEntity);
    //   fixture.detectChanges();
    //   expect(patientProfileSpy.sendTelemdicineLinkToPatient).toHaveBeenCalled();
    //   expect(notificationsServiceSpy.success).toHaveBeenCalledWith('Appointment link was sent to patient.');
    // });

    // it('should notify user about failed attempt to send appointment link', () => {
    //   patientProfileSpy.checkTelemedicineAvailability.and.returnValue(of(false));
    //   patientProfileSpy.sendTelemdicineLinkToPatient.and.returnValue(of(false));
    //   currentPatientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW } as PreparedPatientListEntity);
    //   fixture.detectChanges();
    //   expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalled();
    //   expect(patientProfileSpy.sendTelemdicineLinkToPatient).toHaveBeenCalled();
    //   expect(notificationsServiceSpy.error).toHaveBeenCalledWith('Appointment link was not sent to patient.', 'Something goes wrong.');
    // });

    // it('should disable reminder sending until sending interval ends', fakeAsync(() => {
    //   const patientSubject = new Subject<PreparedPatientListEntity>();
    //   statePatientSpy.getCurrent.and.returnValue(patientSubject.asObservable());
    //   patientProfileSpy.checkTelemedicineAvailability.and.returnValue(of(false));
    //   patientProfileSpy.sendTelemdicineLinkToPatient.and.returnValue(of(true));
    //   fixture = TestBed.createComponent(HeaderComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();
    //   patientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW } as PreparedPatientListEntity);
    //   expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalled();
    //   expect(patientProfileSpy.sendTelemdicineLinkToPatient).toHaveBeenCalled();
    //   expect(component.reminderSendingDisabled).toBeTrue();
    //   patientProfileSpy.checkTelemedicineAvailability.calls.reset();
    //   tick(60000);
    //   fixture.detectChanges();
    //   expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalledTimes(12);
    //   expect(component.reminderSendingDisabled).toBeFalse();
    //   tick(1000);
    //   discardPeriodicTasks();
    //   flushMicrotasks();
    // }));

    // it('should stop telemedicine availability polling on patient unassign', fakeAsync(() => {
    //   const patientSubject = new Subject<PreparedPatientListEntity>();
    //   statePatientSpy.getCurrent.and.returnValue(patientSubject.asObservable());
    //   patientProfileSpy.checkTelemedicineAvailability.and.returnValue(of(false));
    //   patientProfileSpy.sendTelemdicineLinkToPatient.and.returnValue(of(true));
    //   fixture = TestBed.createComponent(HeaderComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();
    //   patientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW } as PreparedPatientListEntity);
    //   expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalled();
    //   patientProfileSpy.checkTelemedicineAvailability.calls.reset();
    //   expect(component.reminderSendingDisabled).toBeTrue();
    //   tick(30000);
    //   fixture.detectChanges();
    //   expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalledTimes(6);
    //   expect(component.reminderSendingDisabled).toBeTrue();
    //   patientSubject.next(null);
    //   tick(1000);
    //   fixture.detectChanges();
    //   expect(component.currentPatient).toBeNull();
    //   expect(component.reminderSendingDisabled).toBeFalse();
    //   discardPeriodicTasks();
    //   flushMicrotasks();
    // }));

    it('should use telemedicine_url property as telemedicine link', () => {
      let telemedicineUrl: string | boolean;
      const urlSubscription = component.telemedicineUrl.subscribe(url => telemedicineUrl = url);
      currentPatientSubject.next({ ...testPatientData, telemedecine_url: 'TELEMDICINE URL' } as PreparedPatientListEntity);
      fixture.detectChanges();
      expect(component.patientTelemedicineMode).toEqual(TelemedicineModeEnum.MEMD);
      expect(telemedicineUrl).toEqual('TELEMDICINE URL');
      component.userRole = UserRolesEnum.PHARMACIST;
      currentPatientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW, telemedecine_url: 'PHARMACIST TELEMDICINE URL' } as PreparedPatientListEntity);
      fixture.detectChanges();
      expect(telemedicineUrl).toEqual('PHARMACIST TELEMDICINE URL');
      component.openInWindow('PHARMACIST TELEMDICINE URL');
      fixture.detectChanges();
      expect(openWindowSpy).toHaveBeenCalled();
      urlSubscription.unsubscribe();
    });

    it('should handle telemedicine availability check error', () => {
      let telemedicineUrl: string | boolean;
      const urlSubscription = component.telemedicineUrl.subscribe(url => telemedicineUrl = url);
      patientProfileSpy.checkTelemedicineAvailability.and.returnValue(throwError('ERROR'));
      currentPatientSubject.next({ ...testPatientData, patientListGroup: 'telemedicine', telemedicine_mode: TelemedicineModeEnum.ADVINOW } as PreparedPatientListEntity);
      fixture.detectChanges();
      expect(patientProfileSpy.checkTelemedicineAvailability).toHaveBeenCalled();
      expect(patientProfileSpy.sendTelemdicineLinkToPatient).not.toHaveBeenCalled();
      expect(telemedicineUrl).toBeNull();
      urlSubscription.unsubscribe();
    });
  });

  describe('Header controls', () => {
    it('should disable debug panel', () => {
      toggleDebugEvent.emit(true);
      expect(component.isDevbarAvailable).toBeTrue();
      toggleDebugEvent.emit(false);
      expect(component.isDevbarAvailable).toBeFalse();
    });

    it('should navigate to change password', () => {
      component.goToPasswordChange();
      component.isPatientsLocation = true;
      component.goToPasswordChange();
      expect(navigationServiceSpy.setExitPatientRoute).toHaveBeenCalledTimes(1);
      expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(2);
    });

    it('should change location', () => {
      userSettingsSpy.set.calls.reset();
      expect(component.selectedLocations).toEqual([]);
      component.selectLoc({ value: ['test'] });
      expect(userSettingsSpy.set).toHaveBeenCalledWith({ selectedLocations: ['test'] });
    });

    it('should return to patients', () => {
      component.returnToPatients();
      expect(navigationServiceSpy.navigateToPatients).toHaveBeenCalled();
    });

    it('should toggle panel', () => {
      expect(component.expansionPanel).toBeFalsy();
      component.panelToggle();
      expect(component.expansionPanel).toBeFalsy();
      currentPatientSubject.next(testPatientData as PreparedPatientListEntity);
      fixture.detectChanges();
      component.panelToggle();
      expect(component.expansionPanel).toBeTruthy();
    });

    it('should toggle expansion panel on patient assign', fakeAsync(() => {
      currentPatientSubject.next(testPatientData as PreparedPatientListEntity);
      fixture.detectChanges();
      isPatientLoadedSubject.next(true);
      fixture.detectChanges();
      expect(component.expansionPanel).toBeTrue();
      tick(3000);
      expect(component.expansionPanel).toBeFalse();
      isPatientLoadedSubject.next(false);
      fixture.detectChanges();
      expect(component.expansionPanel).toBeFalse();
    }));

    it('should emit devbar toggle', () => {
      developmentBarToggleSpy.calls.reset();
      component.toggleDevBar('devbarPanel');
      expect(developmentBarToggleSpy).toHaveBeenCalledWith('devbarPanel');
    });

    it('should toggle filter', () => {
      component.onFilterStateChanged(true);
      expect(component.filter.disabled).toBeTruthy();
      component.onFilterStateChanged(false);
      expect(component.filter.disabled).toBeFalsy();
    });
  });

  describe('ADVINOW televisit mode', () => {
    beforeEach(() => {
      notificationsServiceSpy.error.calls.reset();
      notificationsServiceSpy.info.calls.reset();
      notificationsServiceSpy.warning.calls.reset();
      patientProfileSpy.getTelemedicineInfo.and.returnValue(of({ session_id: '123' } as TelemedicineInfo));
      patientProfileSpy.checkTelemedicineAvailability.and.returnValue(of(false));
      patientProfileSpy.completeTelemedicineSession.and.returnValue(of(null));
      fixture.detectChanges();
      currentPatientSubject.next(testPatientData as PreparedPatientListEntity);
    });

    it('should detect patient left televisit session on call init', () => {
      patientProfileSpy.getTelemedicineInfo.and.returnValue(throwError('SOME ERROR'));
      component.openInWindow(true);
      fixture.detectChanges();
      expect(notificationsServiceSpy.error).toHaveBeenCalledWith('Patient left televisit session.');
    });

    it('should handle patient left televisit session', () => {
      dialogServiceSpy.open.and.returnValue(of({ reason: 'drop', message: 'patient left' }));
      component.openInWindow(true);
      fixture.detectChanges();
      expect(notificationsServiceSpy.info).toHaveBeenCalledWith('Televisit session finished.', 'Patient left session.');
    });

    it('should handle televisit completion', () => {
      dialogServiceSpy.open.and.returnValue(of({ reason: 'complete', message: 'visit complete' }));
      component.openInWindow(true);
      fixture.detectChanges();
      expect(notificationsServiceSpy.info).toHaveBeenCalledWith('Televisit session finished.');
    });

    it('should handle televisit session hold', () => {
      dialogServiceSpy.open.and.returnValue(of({ reason: 'hold', message: 'call on hold' }));
      patientProfileSpy.completeTelemedicineSession.and.returnValue(of(null));
      component.openInWindow(true);
      fixture.detectChanges();
      expect(notificationsServiceSpy.warning).toHaveBeenCalledWith('Televisit session on hold.');
    });
  });
});
