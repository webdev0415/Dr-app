import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngxs/store';

import { MdbTableDirective, MdbTablePaginationComponent, TableModule } from 'ng-uikit-pro-standard';
import { of, Subject, throwError } from 'rxjs';

import { UserRolesEnum } from '../../common/enums/user-roles.enum';
import { DialogService } from '../../services/app/dialog.service';
import { MediaResp } from '../../services/state';
import { UserService } from '../../user/user.service';
import { PatientListEntity } from '../interfaces/patient-list-entity.model';
import { PreparedPatientListEntity } from '../interfaces/prepared-patient-list-entity.interface';
import { patientStatusEnum } from '../patient-list.constants';
import { testPatients } from '../patient-list.constants.test';
import { PatientListTableComponent } from './patient-list-table.component';
import { NotificationsService, StateService, } from '../../services';
import { DialogSubscribesService } from '../../services/dialogsubscribes.service';
import { PatientListService } from '../services/patient-list.service';

import createSpyObj = jasmine.createSpyObj;
import objectContaining = jasmine.objectContaining;
import Spy = jasmine.Spy;
import arrayContaining = jasmine.arrayContaining;
import SpyObj = jasmine.SpyObj;

describe('PatientListTableComponent', () => {
  let fixture: ComponentFixture<PatientListTableComponent>;
  let component: PatientListTableComponent;

  const notificationsServiceSpy = createSpyObj<NotificationsService>('NotificationsService', ['success', 'error']);
  const dialogSubscribesServiceSpy = createSpyObj<DialogSubscribesService>('DialogSubscribesService', ['openTheDisclaimerDialog', 'getConfig']);
  const patientListServiceSpy = createSpyObj<PatientListService>('PatientListService', [
    'assignRoom',
    'updateListFromPush',
    'unAssignRoom',
    'getIsPatientAssignedToCurrentUser',
    'getIsPatientAssignedToCurrentUser',
    'closePatient',
    'removePatientAssignment',
    'getListLastValue',
    'updateList'
  ]);
  const dialogServiceSpy = createSpyObj<DialogService>(['open']);

  const stateAppMessageSpy = createSpyObj<StateService['app']['message']>(['send']);
  const stateAppSpy = createSpyObj<StateService['app']>(['getParsedSymptomsState', 'mediaResp'], { message: stateAppMessageSpy });
  const statePatientSpy = createSpyObj<StateService['patient']>(['setShowRoomAssignmentDialog']);
  const stateServiceSpy = createSpyObj<StateService>([], { app: stateAppSpy, patient: statePatientSpy });
  const storeSpy = createSpyObj<Store>(['dispatch', 'selectSnapshot']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientListTableComponent],
      providers: [{
        provide: DialogSubscribesService, useValue: dialogSubscribesServiceSpy
      }, {
        provide: NotificationsService, useValue: notificationsServiceSpy
      }, {
        provide: PatientListService, useValue: patientListServiceSpy
      }, {
        provide: DialogService, useValue: dialogServiceSpy
      }, {
        provide: StateService, useValue: stateServiceSpy
      }, {
        provide: UserService, useValue: createSpyObj<UserService>([], { getUserData: createSpyObj<UserService['getUserData']>([], { doctor_id: null, user_id: 123, environment: createSpyObj([], { is_room_active: false }) }) })
      }, {
        provide: Store, useValue: storeSpy
      }],
      imports: [
        NoopAnimationsModule,
        CommonModule,
        MatTableModule,
        TableModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    storeSpy.selectSnapshot.and.returnValue(
      {
        sortBy: 'kiosk_complete',
        sortOrder: 'ascending'
      }
    );
    stateAppSpy.mediaResp.and.returnValue({ xl: { matches: true } } as MediaResp);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<PatientListTableComponent>(PatientListTableComponent);
    component = fixture.componentInstance;
    component.patientsEntity = { isExpanded: false, isHiddenOnEmpty: false, type: 'waiting', patients: [], panelHeaderLabel: 'WAITING' };
    fixture.detectChanges();
  });

  describe('Rooms operations', () => {
    let targetPatient: PatientListEntity;
    const targetRoom = '5';

    beforeEach(() => {
      targetPatient = { ...testPatients[0], room: '2' };
      component.roomValues = { [targetPatient.location_name]: ['1', '5', '6'] };
      notificationsServiceSpy.success.calls.reset();
      patientListServiceSpy.updateListFromPush.calls.reset();
      statePatientSpy.setShowRoomAssignmentDialog.calls.reset();
      patientListServiceSpy.assignRoom.calls.reset();
    });

    it('should change patient room', () => {
      const paginationSpy = spyOn(component.pagination, 'firstPage');
      patientListServiceSpy.assignRoom.and.returnValue(of(true));
      component.onRoomChange({ isUserInput: true, source: { selected: true, value: targetRoom } }, targetPatient);
      fixture.detectChanges();
      expect(component.roomValues[targetPatient.location_name]).toEqual(['1', '6']);
      expect(statePatientSpy.setShowRoomAssignmentDialog).toHaveBeenCalledWith(false);
      expect(notificationsServiceSpy.success).toHaveBeenCalledWith(`Patient ${ targetPatient.patient_id } is assigned to ${ targetRoom }`);
      expect(patientListServiceSpy.updateListFromPush).toHaveBeenCalledWith({ ...targetPatient, room: targetRoom });
      expect(paginationSpy).toHaveBeenCalled();
    });

    it('should remove room assignment', () => {
      const roomAssignmentSubject = new Subject();
      patientListServiceSpy.unAssignRoom.and.returnValue(roomAssignmentSubject.asObservable());
      component.removeRoom(targetPatient);
      fixture.detectChanges();
      roomAssignmentSubject.next();
      fixture.detectChanges();
      expect(notificationsServiceSpy.success).not.toHaveBeenCalled();
      roomAssignmentSubject.next(true);
      fixture.detectChanges();
      expect(statePatientSpy.setShowRoomAssignmentDialog).toHaveBeenCalledWith(false);
      expect(notificationsServiceSpy.success).toHaveBeenCalledWith(`Patient ${ targetPatient.patient_id } is unassigned from room`);
      expect(patientListServiceSpy.updateListFromPush).toHaveBeenCalledWith({ ...targetPatient, room: '' });
      expect(component.roomValues[targetPatient.location_name]).toEqual(['1', '2', '5', '6']);
    });

    it('should not change patient room on error', () => {
      patientListServiceSpy.assignRoom.and.returnValue(throwError('ERROR'));
      component.onRoomChange({ isUserInput: true, source: { selected: true, value: targetRoom } }, targetPatient);
      fixture.detectChanges();
      expect(patientListServiceSpy.updateListFromPush).not.toHaveBeenCalled();
    });

    it('should ignore room change event', () => {
      component.onRoomChange({ isUserInput: true, source: { selected: true, value: targetPatient.room } }, targetPatient);
      fixture.detectChanges();
      expect(patientListServiceSpy.assignRoom).not.toHaveBeenCalled();
    });
  });

  describe('Patient Assignment', () => {
    let openPatientEventSpy: Spy;

    beforeEach(() => {
      notificationsServiceSpy.error.calls.reset();
      openPatientEventSpy = spyOn(component.OpenPatient, 'emit');
      openPatientEventSpy.calls.reset();
      stateAppMessageSpy.send.calls.reset();
      stateAppSpy.getParsedSymptomsState.and.returnValue('success');
    });

    it('should notify about symptomGroups error', () => {
      stateAppSpy.getParsedSymptomsState.and.returnValue('fail');
      component.onPatientRowClick(testPatients[0]);
      expect(notificationsServiceSpy.error).toHaveBeenCalledWith('Cannot assign patient. Please try again later.', 'Unable to load resources.');
      expect(openPatientEventSpy).not.toHaveBeenCalled();
    });

    it('should emit openPatient event', () => {
      patientListServiceSpy.getIsPatientAssignedToCurrentUser.and.returnValue(true);
      component.onPatientRowClick(testPatients[0]);
      expect(openPatientEventSpy).toHaveBeenCalledWith(objectContaining({ patientData: testPatients[0], notAssigned: true, viewOnly: false }));
    });

    it('should prevent patient from assign for OM user', () => {
      patientListServiceSpy.getIsPatientAssignedToCurrentUser.and.returnValue(false);
      // @ts-ignore
      component._userRole = UserRolesEnum.OPERATIONS_MANAGER;
      component.onPatientRowClick({ ...testPatients[0], status: patientStatusEnum.withDoctor });
      fixture.detectChanges();
      expect(openPatientEventSpy).not.toHaveBeenCalled();
    });

    it('should assign with_doc patient to practitioner user', () => {
      const targetPatient = { ...testPatients[0], status: patientStatusEnum.withDoctor, statusString: 'ASSIGNED' };
      // @ts-ignore
      component._userRole = UserRolesEnum.PRACTITIONER;
      patientListServiceSpy.getIsPatientAssignedToCurrentUser.and.returnValue(true);
      component.onPatientRowClick(targetPatient);
      fixture.detectChanges();
      expect(openPatientEventSpy).toHaveBeenCalledWith(objectContaining({ patientData: targetPatient }));
    });

    it('should prevent with_doc patient from assign to practitioner user', () => {
      patientListServiceSpy.getIsPatientAssignedToCurrentUser.and.returnValue(false);
      // @ts-ignore
      component._userRole = UserRolesEnum.PRACTITIONER;
      component.onPatientRowClick({ ...testPatients[0], status: patientStatusEnum.withDoctor, statusString: 'ASSIGNED' });
      fixture.detectChanges();
      expect(stateAppMessageSpy.send).toHaveBeenCalledWith(`Cannot view or assign patient with status "ASSIGNED"`);
      expect(openPatientEventSpy).not.toHaveBeenCalled();
    });
  });

  describe('Patient Status', () => {
    it('should recognize patient as completed', () => {
      expect(component.isCompletedPatient({ ...testPatients[0], status: patientStatusEnum.complete })).toBeTrue();
      expect(component.isCompletedPatient({ ...testPatients[0], status: patientStatusEnum.waiting })).toBeFalse();
    });

    it('should recognize patient as assigned', () => {
      expect(component.isWithProviderPatient({ ...testPatients[0], status: patientStatusEnum.withDoctor })).toBeTrue();
      expect(component.isWithProviderPatient({ ...testPatients[0], status: patientStatusEnum.waiting })).toBeFalse();
    });

    it('should recognize patient as waiting', () => {
      expect(component.isWaitingOrRegisteredPatient({ ...testPatients[0], status: patientStatusEnum.waiting })).toBeTrue();
      expect(component.isWaitingOrRegisteredPatient({ ...testPatients[0], status: patientStatusEnum.registered })).toBeTrue();
      expect(component.isWaitingOrRegisteredPatient({ ...testPatients[0], status: patientStatusEnum.complete })).toBeFalse();
    });

    it('should recognize row as disabled', () => {
      patientListServiceSpy.getIsPatientAssignedToCurrentUser.and.returnValue(false);
      // @ts-ignore
      component._userRole = UserRolesEnum.PRACTITIONER;
      expect(component.getIsRowDisabled({ ...testPatients[0], status: patientStatusEnum.withDoctor, doctor_id: 123 }));
    });
  });

  describe('Patient Row Operations', () => {
    beforeEach(() => {
      dialogServiceSpy.open.calls.reset();
      dialogServiceSpy.open.and.returnValue(of(true));
      patientListServiceSpy.closePatient.calls.reset();
    });

    it('should open patients search dialog', () => {
      component.searchCompletedPatients(createSpyObj(['stopPropagation']));
      expect(dialogServiceSpy.open).toHaveBeenCalled();
    });

    it('should close patient', () => {
      const reason = component.closePatientReason[0];
      patientListServiceSpy.closePatient.and.returnValue(of(true));
      component.closePatient(testPatients[0], reason);
      fixture.detectChanges();
      expect(dialogServiceSpy.open).toHaveBeenCalled();
      expect(patientListServiceSpy.closePatient).toHaveBeenCalledWith(testPatients[0].patient_id.toString(), reason);
    });

    it('should prevent patient from close', () => {
      const reason = component.closePatientReason[0];
      dialogServiceSpy.open.and.returnValue(of(false));
      component.closePatient(testPatients[0], reason);
      fixture.detectChanges();
      expect(dialogServiceSpy.open).toHaveBeenCalled();
      expect(patientListServiceSpy.closePatient).not.toHaveBeenCalled();
    });
  });

  describe('Patient Assignment Remove', () => {
    const targetPatient: PatientListEntity = { ...testPatients[0], doctor_name: 'DOCTOR', doctor_id: 123 };

    beforeEach(() => {
      dialogServiceSpy.open.calls.reset();
      dialogServiceSpy.open.and.returnValue(of(true));
      patientListServiceSpy.updateList.calls.reset();
      notificationsServiceSpy.success.calls.reset();
      patientListServiceSpy.getListLastValue.and.returnValue([targetPatient, testPatients[2]]);
      patientListServiceSpy.removePatientAssignment.calls.reset();
    });

    it('should remove patient assign', () => {
      patientListServiceSpy.removePatientAssignment.and.returnValue(of({ error: false }));
      component.removePatientAssignment(targetPatient);
      fixture.detectChanges();
      expect(patientListServiceSpy.removePatientAssignment).toHaveBeenCalled();
      expect(dialogServiceSpy.open).toHaveBeenCalled();
      expect(notificationsServiceSpy.success).toHaveBeenCalledWith(`Patient ${targetPatient.patient_name} was successfully unassigned from ${targetPatient.doctor_name}.`);
      expect(patientListServiceSpy.updateList).toHaveBeenCalledWith(arrayContaining([objectContaining({ patient_id: targetPatient.patient_id, doctor_id: 0, clerk_id: 0 }), testPatients[2]]));
    });

    it('should prevent assignment from remove', () => {
      dialogServiceSpy.open.and.returnValue(of(false));
      component.removePatientAssignment(targetPatient);
      fixture.detectChanges();
      expect(patientListServiceSpy.removePatientAssignment).not.toHaveBeenCalled();
      patientListServiceSpy.removePatientAssignment.and.returnValue(of({ error: true }));
      dialogServiceSpy.open.and.returnValue(of(true));
      component.removePatientAssignment(targetPatient);
      fixture.detectChanges();
      expect(dialogServiceSpy.open).toHaveBeenCalledTimes(2);
      expect(patientListServiceSpy.removePatientAssignment).toHaveBeenCalled();
      expect(notificationsServiceSpy.success).not.toHaveBeenCalled();
    });
  });

  describe('Patient Chief Compliant', () => {
    it('should modify COVID compliant', () => {
      const reason = 'pneumonia symptoms';
      expect(component.chiefComplaint(reason, true)).toEqual('pneumonia - COVID-19 Risk');
    });

    it('should truncate too long reason', () => {
      expect(component.chiefComplaint('this is very long patient\'s visit reason', false).length).toEqual(30);
    });

    it('should handle null value', () => {
      expect(component.chiefComplaint(null, true)).toEqual('');
    });
  });

  describe('Should Build Patients Table', () => {
    let patientsTableSpy: SpyObj<MdbTableDirective>;
    let paginationSpy: SpyObj<MdbTablePaginationComponent>;
    beforeEach(() => {
      patientsTableSpy = createSpyObj<MdbTableDirective>(['setDataSource', 'getDataSource']);
      patientsTableSpy.getDataSource.and.returnValue(testPatients);
      paginationSpy = createSpyObj<MdbTablePaginationComponent>(
        ['setMaxVisibleItemsNumberTo', 'calculateFirstItemIndex', 'calculateLastItemIndex', 'firstPage', 'lastPage'],
        { searchDataSource: [], firstItemIndex: 0, lastItemIndex: 0 }
      );
      component.patientsTable = patientsTableSpy;
      component.pagination = paginationSpy;
    });

    xit('should handle onChange', () => {
      component.patientsEntity = { patients: testPatients as PreparedPatientListEntity[], panelHeaderLabel: 'LABEL', type: 'waiting', isExpanded: true, isHiddenOnEmpty: false };
      component.ngOnChanges({ patientsEntity: { currentValue: component.patientsEntity } as SimpleChange });
      fixture.detectChanges();
      expect(patientsTableSpy.setDataSource).toHaveBeenCalled();
      expect(patientsTableSpy.getDataSource).toHaveBeenCalled();
      expect(paginationSpy.setMaxVisibleItemsNumberTo).toHaveBeenCalledWith(25);
      expect(paginationSpy.calculateFirstItemIndex).toHaveBeenCalled();
      expect(paginationSpy.calculateLastItemIndex).toHaveBeenCalled();
      expect(paginationSpy.lastPage).not.toHaveBeenCalled();
      expect(paginationSpy.firstPage).toHaveBeenCalled();
    });
  });
});
