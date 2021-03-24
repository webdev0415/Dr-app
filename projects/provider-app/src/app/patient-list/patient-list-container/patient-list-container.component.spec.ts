import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BehaviorSubject, of, Subject } from 'rxjs';


import { DataService, NavigationService, NotificationsService, PatientdataService, StateService } from 'services';
import { AlertService } from 'services/alert.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { testPatientData } from 'static/test.constants';
import { UserService } from 'user/user.service';
import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { Alert } from '../../common/interfaces/alert';
import { Data } from '../../common/models/data.model';
import { UserSettingsModel } from '../../common/models/user-info.model';
import { PatientDataFacadeService } from '../../patient-core/patient-data-facade.service';
import { PatientListEntity } from '../interfaces/patient-list-entity.model';
import { PreparedPatientListEntity } from '../interfaces/prepared-patient-list-entity.interface';
import { defaultTableHeaders, patientStatusEnum } from '../patient-list.constants';
import { PatientListService } from '../services/patient-list.service';

import { PatientListContainerComponent } from './patient-list-container.component';

import { alerts, testPatients } from '../patient-list.constants.test';

import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import Spy = jasmine.Spy;
import arrayContaining = jasmine.arrayContaining;

// todo: FIX SPEC SUITE AFTER PA-4772 IMPLEMENTED
xdescribe('PatientsListContainerComponent', () => {
  let component: PatientListContainerComponent;
  let fixture: ComponentFixture<PatientListContainerComponent>;
  const userRole = UserRolesEnum.PRACTITIONER;

  const patientsListSubject = new BehaviorSubject<PatientListEntity[]>([]);
  const alertsDataSubject = new BehaviorSubject<Alert[]>([]);
  const assignedPatientSubject = new BehaviorSubject<Data>(null);
  const userSettingsSubject = new BehaviorSubject<UserSettingsModel>({ selectedLocations: ['QA-PIC-Training Virtual'] });
  const patientLoadedSubject = new Subject<boolean>();
  const assignSubject = new Subject<{ sessionKey: string }>();

  const setHeaderDataSpy = createSpy('setHeaderData');
  const toggleDebugSpy = createSpy('toggleDebug');
  const mediaRespSpy = createSpy('mediaResp');
  const setPatientViewOnlySpy = createSpy('setPatientViewOnly');
  const setCurrentPatientSpy = createSpy('setCurrentPatient');
  const setPatientAssignmentSpy = createSpy('setPatientAssignment');

  const stateServiceSpy: SpyObj<StateService> = {
    ...createSpyObj<StateService>('StateService', ['app', 'patient']),
    app: {
      // @ts-ignore
      header: {
        setData: setHeaderDataSpy
      },
      toggleDebug: toggleDebugSpy,
      mediaResp: mediaRespSpy
    },
    // @ts-ignore
    patient: {
      setViewOnly: setPatientViewOnlySpy,
      setCurrent: setCurrentPatientSpy,
      setAssignment: setPatientAssignmentSpy
    }
  };

  const loadUserSettingsSpy = createSpy('loadUserSettings');
  const watchUserSettingsSpy = createSpy('watchUserSettings');

  const userServiceSpy: SpyObj<UserService> = createSpyObj<UserService>('UserService', [
    'setIsDisclaimerShownOnce',
    'setIsTheDisclaimerSuccess',
    'getUserData',
    'setAlerts',
    'getUserRole',
    'userSettings'
  ], {
    getUserRole: userRole,
    userSettings: createSpyObj<UserService['userSettings']>([], {
      load: loadUserSettingsSpy,
      watch: watchUserSettingsSpy,
    }),
    getUserData: createSpyObj([], {
      locations: ['QA-PIC-Training Virtual'],
      environment: { is_room_active: false },
      alerts: []
    }),
    getIsDisclaimerShownOnce: false
  });

  const dataServiceSpy = createSpyObj<DataService>('DataService', ['getPatient', 'getPatientData']);
  const dialogSubscribesServiceSpy = createSpyObj<DialogSubscribesService>('DialogSubscribesService', ['openTheDisclaimerDialog']);
  const notificationsServiceSpy = createSpyObj<NotificationsService>('NotificationsService', ['error']);
  const alertsServiceSpy = createSpyObj<AlertService>('AlertService', ['getAlertsData', 'checkShowByTarget']);
  const corePatientDataServiceSpy = createSpyObj<PatientDataFacadeService>('PatientDataFacadeService', ['assign']);
  const patientDataServiceSpy = createSpyObj<PatientdataService>('PatientdataService', ['isPatientLoaded$']);
  const patientListServiceSpy = createSpyObj<PatientListService>('PatientListService', ['getListLastValue', 'updateList', 'getList']);
  const navigationServiceSpy = createSpyObj<NavigationService>(['navigateToPatients', 'clearHistory', 'setExitPatientRoute', 'navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListContainerComponent ],
      imports: [RouterTestingModule],
      providers: [{
        provide: StateService, useValue: stateServiceSpy
      }, {
        provide: UserService, useValue: userServiceSpy
      }, {
        provide: DataService, useValue: dataServiceSpy
      }, {
        provide: DialogSubscribesService, useValue: dialogSubscribesServiceSpy
      }, {
        provide: NotificationsService, useValue: notificationsServiceSpy
      }, {
        provide: AlertService, useValue: alertsServiceSpy
      }, {
        provide: PatientDataFacadeService, useValue: corePatientDataServiceSpy
      }, {
        provide: PatientdataService, useValue: patientDataServiceSpy
      }, {
        provide: PatientListService, useValue: patientListServiceSpy
      }, {
        provide: NavigationService, useValue: navigationServiceSpy
      }, {
        provide: ActivatedRoute, useValue: { get snapshot() { return { data: {  } }; } }
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mediaRespSpy.and.returnValue({ xl: { matches: false } });
    patientListServiceSpy.getList.and.returnValue(patientsListSubject.asObservable());
    alertsServiceSpy.getAlertsData.and.returnValue(alertsDataSubject.asObservable());
    dataServiceSpy.getPatient.and.returnValue(assignedPatientSubject.asObservable());
    loadUserSettingsSpy.and.returnValue(userSettingsSubject.getValue());
    watchUserSettingsSpy.and.returnValue(userSettingsSubject.asObservable());
    patientDataServiceSpy.isPatientLoaded$.and.returnValue(patientLoadedSubject.asObservable());
    corePatientDataServiceSpy.assign.and.returnValue(assignSubject.asObservable());
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListContainerComponent);
    component = fixture.componentInstance;
  });

  describe('Patient assign', () => {
    beforeEach(() => {
      patientDataServiceSpy.isPatientLoaded$.calls.reset();
      navigationServiceSpy.navigate.calls.reset();
    });

    it('should check openPatient for practitioner', () => {
      fixture.detectChanges();
      component.openPatient({patientData: testPatientData, viewOnly: false, notAssigned: false});
      expect(corePatientDataServiceSpy.assign).toHaveBeenCalled();
      expect(patientDataServiceSpy.isPatientLoaded$).not.toHaveBeenCalled();
      assignSubject.next();
      fixture.detectChanges();
      expect(patientDataServiceSpy.isPatientLoaded$).toHaveBeenCalled();
      expect(navigationServiceSpy.navigate).not.toHaveBeenCalled();
      patientLoadedSubject.next(false);
      fixture.detectChanges();
      expect(navigationServiceSpy.navigate).not.toHaveBeenCalled();
      patientLoadedSubject.next(true);
      const patientId: number = testPatientData.patient_id;
      expect(navigationServiceSpy.navigate).toHaveBeenCalledWith(['patients', patientId, 'diagnosis']);
    });

    it('should check openPatient for office_clerk', () => {
      component.userRole = UserRolesEnum.OFFICE_CLERK;
      fixture.detectChanges();
      component.openPatient({patientData: testPatientData, viewOnly: false, notAssigned: false});
      fixture.detectChanges();
      assignSubject.next();
      fixture.detectChanges();
      patientLoadedSubject.next(true);
      fixture.detectChanges();
      const patientId: number = testPatientData.patient_id;
      expect(navigationServiceSpy.navigate).toHaveBeenCalledWith(['patients', patientId]);
    });

    it('should check openPatient for operations_manager', () => {
      component.userRole = UserRolesEnum.OPERATIONS_MANAGER;
      fixture.detectChanges();
      component.openPatient({patientData: testPatientData, viewOnly: false, notAssigned: false});
      fixture.detectChanges();
      assignSubject.next();
      fixture.detectChanges();
      patientLoadedSubject.next(true);
      fixture.detectChanges();
      const patientId: number = testPatientData.patient_id;
      expect(navigationServiceSpy.navigate).toHaveBeenCalledWith(['patients', patientId]);
    });

    it('should display disclaimer', fakeAsync(() => {
      dialogSubscribesServiceSpy.openTheDisclaimerDialog.calls.reset();
      userServiceSpy.setIsDisclaimerShownOnce.calls.reset();
      component.userRole = UserRolesEnum.OFFICE_CLERK;
      component.ngAfterViewInit();
      tick(2000);
      expect(dialogSubscribesServiceSpy.openTheDisclaimerDialog).not.toHaveBeenCalled();
      expect(userServiceSpy.setIsDisclaimerShownOnce).not.toHaveBeenCalled();
      component.userRole = UserRolesEnum.PRACTITIONER;
      component.ngAfterViewInit();
      tick(2000);
      expect(dialogSubscribesServiceSpy.openTheDisclaimerDialog).toHaveBeenCalled();
      expect(userServiceSpy.setIsDisclaimerShownOnce).toHaveBeenCalledWith(true);
    }));

    it('should set disclaimerSuccess for viewOnly patient', () => {
      corePatientDataServiceSpy.assign.and.returnValue(of({ sessionKey: '123' }));
      userServiceSpy.setIsTheDisclaimerSuccess.calls.reset();
      component.openPatient({ patientData: testPatients[0], viewOnly: true, notAssigned: true });
      fixture.detectChanges();
      expect(userServiceSpy.setIsTheDisclaimerSuccess).toHaveBeenCalledWith(true);
    });
  });

  describe('Debug toggle', () => {
    let routeSnapshotSpy: Spy;
    let activatedRoute: ActivatedRoute;

    beforeEach(() => {
      activatedRoute = TestBed.inject(ActivatedRoute);
      routeSnapshotSpy = spyOnProperty(activatedRoute, 'snapshot', 'get');
      toggleDebugSpy.calls.reset();
      navigationServiceSpy.navigateToPatients.calls.reset();
    });

    it('should enable debug mode', () => {
      routeSnapshotSpy.and.returnValue({ data: { debugMode: true } });
      fixture = TestBed.createComponent(PatientListContainerComponent);
      fixture.detectChanges();
      expect(toggleDebugSpy).toHaveBeenCalled();
      expect(navigationServiceSpy.navigateToPatients).toHaveBeenCalled();
    });

    it('should not enable debug mode', () => {
      routeSnapshotSpy.and.returnValue({ data: { debugMode: false } });
      fixture = TestBed.createComponent(PatientListContainerComponent);
      fixture.detectChanges();
      expect(toggleDebugSpy).not.toHaveBeenCalled();
      expect(navigationServiceSpy.navigateToPatients).not.toHaveBeenCalled();
    });
  });

  describe('User Selected Locations', () => {

    afterEach(() => {
      userSettingsSubject.next({ selectedLocations: ['QA-PIC-Training Virtual'] });
      patientListServiceSpy.getListLastValue.and.stub();
      patientListServiceSpy.updateList.and.stub();
    });

    it('should obtain selected locations from session storage', () => {
      const storageLocations = ['1', '2'];
      userSettingsSubject.next({ selectedLocations: storageLocations });
      fixture = TestBed.createComponent(PatientListContainerComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance.locations).toEqual(storageLocations);
    });

    it('should obtain selected locations from userService', () => {
      userSettingsSubject.next({ selectedLocations: null });
      loadUserSettingsSpy.and.returnValue(userSettingsSubject.getValue());
      fixture = TestBed.createComponent(PatientListContainerComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance.locations).toEqual(['QA-PIC-Training Virtual']);
    });

    it('should filter patients by location', () => {
      patientListServiceSpy.getListLastValue.and.returnValue(testPatients);
      patientListServiceSpy.updateList.and.callFake((patientsList) => patientsListSubject.next(patientsList));
      userSettingsSubject.next({ selectedLocations: null });
      fixture.detectChanges();
      userSettingsSubject.next({ selectedLocations: ['RANDOM LOCATION'] });
      fixture.detectChanges();
      expect(component.waiting_patients.length).toEqual(0);
      expect(component.test_patients.length).toEqual(0);
      expect(component.completed_patients.length).toEqual(0);
      expect(component.telemedicine_patients.length).not.toEqual(0);
    });
  });

  describe('Patients sorting', () => {
    beforeEach(() => {
      userSettingsSubject.next({ selectedLocations: ['QA-PIC-Training Virtual'] });
    });

    it('should left telemedicine patients displayed even when assigned location not selected', () => {
      userSettingsSubject.next({ selectedLocations: [] });
      patientsListSubject.next(testPatients);
      fixture.detectChanges();
      expect(component.telemedicine_patients.length).toBeGreaterThan(0);
    });

    it('should filter out test patients from telemedicine group', () => {
      patientsListSubject.next(testPatients.map(item => ({ ...item, appointment_data: { ...item.appointment_data, is_telemedicine: true } })));
      fixture.detectChanges();
      expect(component.test_patients.length).toBeGreaterThan(0);
    });

    it('should filter telemedicine patients by appointment_data instead of PATIENT_WAITING_TELEMEDICINE status', () => {
      patientsListSubject.next(testPatients);
      fixture.detectChanges();
      const isTargetPatient = (patient: PreparedPatientListEntity): boolean => patient.status === patientStatusEnum.telemedicine && !patient.appointment_data.is_telemedicine;
      expect(component.telemedicine_patients.find(item => isTargetPatient(item))).toBeUndefined();
      expect(component.waiting_patients.find(item => isTargetPatient(item))).toBeDefined();
    });
  });

  describe('Table headers', () => {
    it('should return headers for waiting patients table', () => {
      expect(component.getTableHeaders()).toEqual(defaultTableHeaders);
    });

    it('should return headers for completed patients table', () => {
      expect(component.getTableHeaders('completed')).toEqual(arrayContaining([
        {value: 'treatment_complete', label: 'Completed', sortable: true},
        {value: 'provider', label: 'Provider', sortable: false},
      ]));
    });

    it('should return headers for assigned patients table', () => {
      expect(component.getTableHeaders('completed'));
    });

    it('should include room column for waiting, test, telemedicine and assigned patients', () => {
      const withRoomColumnHeaders = arrayContaining([{value: 'room', label: 'Exam room', sortable: false}]);
      // @ts-ignore
      component.userService = {
        ...userServiceSpy,
        getUserData: createSpyObj([], {
          locations: ['QA-PIC-Training Virtual'],
          environment: { is_room_active: true },
          alerts: []
        })
      };
      expect(component.getTableHeaders()).toEqual(withRoomColumnHeaders);
      expect(component.getTableHeaders('provider')).toEqual(withRoomColumnHeaders);
      expect(component.getTableHeaders('test')).toEqual(withRoomColumnHeaders);
      expect(component.getTableHeaders('completed')).not.toEqual(withRoomColumnHeaders);
    });
  });

  describe('Alerts display', () => {
    beforeEach(() => {
      alertsServiceSpy.checkShowByTarget.and.callFake((isDoctor: boolean, { target: alertTarget }: Alert): boolean => {
        return alertTarget === 'ANY' || (isDoctor ? alertTarget === 'Provider' : alertTarget === 'MA');
      });
      notificationsServiceSpy.error.calls.reset();
      userServiceSpy.setAlerts.calls.reset();
      patientsListSubject.next(testPatients);
      fixture.detectChanges();
    });

    it('should handle null alertsData value', () => {
      component.showAlertsNotifications(null);
      expect(notificationsServiceSpy.error).not.toHaveBeenCalled();
      expect(userServiceSpy.setAlerts).not.toHaveBeenCalled();
    });

    it('should display MA alerts', fakeAsync(() => {
      // @ts-ignore
      component.userService = {
        ...userServiceSpy,
        getUserData: createSpyObj([], {
          locations: ['QA-PIC-Training Virtual'],
          environment: { is_room_active: false },
          alerts: null
        }),
      };
      component.userRole = UserRolesEnum.OPERATIONS_MANAGER;
      component.showAlertsNotifications(alerts);
      tick();
      expect(notificationsServiceSpy.error).toHaveBeenCalledTimes(4);
      expect(userServiceSpy.setAlerts).toHaveBeenCalledWith(alerts);
      flushMicrotasks();
    }));

    it('should display provider alerts', fakeAsync(() => {
      component.userRole = UserRolesEnum.PRACTITIONER;
      component.showAlertsNotifications(alerts);
      tick();
      expect(notificationsServiceSpy.error).toHaveBeenCalledTimes(1);
      flushMicrotasks();
    }));

    it('should not show completed patient alert', fakeAsync(() => {
      const notifications: string[] = [];
      notificationsServiceSpy.error.and.callFake((msg: string) => notifications.push(msg));
      component.showAlertsNotifications(alerts);
      tick();
      expect(notificationsServiceSpy.error).toHaveBeenCalled();
      expect(notifications.length).toBeGreaterThan(0);
      expect(notifications.find(item => item.includes(`${alerts[4].patient}`))).toBeUndefined();
      flushMicrotasks();
    }));

    it('should not display alerts second time', fakeAsync(() => {
      // @ts-ignore
      component.userService = {
        ...userServiceSpy,
        getUserData: createSpyObj([], {
          locations: ['QA-PIC-Training Virtual'],
          environment: { is_room_active: false },
          alerts: alerts
        }),
      };
      component.showAlertsNotifications(alerts);
      tick();
      expect(notificationsServiceSpy.error).not.toHaveBeenCalled();
      flushMicrotasks();
    }));
  });
});
