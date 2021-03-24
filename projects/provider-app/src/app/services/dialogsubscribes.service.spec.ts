import { fakeAsync, inject, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { BehaviorSubject, of as ObservableOf } from 'rxjs';
import { DataService, KludgesService, NavigationService, OtherdataService, StateService } from 'services/index';
import { additionalInfo, DefaultFinalizePDFFiles, testPatientData } from 'static/test.constants';
import { NotificationsService } from '../components/notifications/notifications.service';
import { DialogService } from './app/dialog.service';

import { DialogSubscribesService } from './dialogsubscribes.service';
import { UserService } from '../user/user.service';
import { TreatmentsService } from '../treatments/treatments.service';
import { DocumentsService } from '../../../../provider-documents/src/lib/services/documents.service';
import { PatientDataFacadeService } from '../patient-core/patient-data-facade.service';
import createSpy = jasmine.createSpy;

class OtherdataServiceMock {
  sendSeverity(patientId, data): void {}
}

describe('DialogSubscribesService', generateSpecs({
    imports: [
      NetworkTestModule,
      NavigationTestModule,
      NotificationsTestModule,
      DialogsTestModule,
      BrowserAnimationsModule,
      UserTestModule
    ],
    providers: [
      { provide: OtherdataService, useClass: OtherdataServiceMock},
      { provide: DataService, useValue: jasmine.createSpyObj(
        'DataService',
          [
            'unassign',
            'getPatientLastValue',
            'saveAdditionalInfo',
            'updatePatient',
            'getPatient'
          ])
      },
      TreatmentsService,
      {
        provide: KludgesService, useValue: jasmine.createSpyObj('KludgesService', ['getTreatments'])
      },
      DialogSubscribesService,
      DocumentsService,
      { provide: PatientDataFacadeService, useValue: jasmine.createSpyObj('PatientDataFacadeService', ['assign', 'unassign']) }
    ]
  },
  () => {
    let dialogSubscribeService: DialogSubscribesService;
    let stateService: StateService;
    let dialogService: DialogService;
    let dataService: DataService;
    let navigationService: jasmine.SpyObj<NavigationService>;
    let notificationService: NotificationsService;
    let userService: UserService;
    let treatmentsService: TreatmentsService;
    let documentsService: DocumentsService;
    let patientDataService: PatientDataFacadeService;

    beforeEach(inject([DialogSubscribesService, StateService, DialogService, DataService,
      NavigationService, NotificationsService, UserService, TreatmentsService, DocumentsService, PatientDataFacadeService], (service: DialogSubscribesService, stateServiceProvider: StateService,
                                                 dialogServiceProvider: DialogService, dataServiceProvider: DataService,
                                                 navigationServiceProvider: jasmine.SpyObj<NavigationService>, notificationServiceProvider: NotificationsService,
                                                 userServiceProvider: UserService, treatmentsServiceProvider: TreatmentsService, documentsServiceProvider: DocumentsService, patientDataServiceProvider: PatientDataFacadeService) => {
      dialogSubscribeService = service;
      stateService = stateServiceProvider;
      dialogService = dialogServiceProvider;
      dataService = dataServiceProvider;
      navigationService = navigationServiceProvider;
      notificationService = notificationServiceProvider;
      userService = userServiceProvider;
      treatmentsService = treatmentsServiceProvider;
      documentsService = documentsServiceProvider;
      patientDataService = patientDataServiceProvider;
    }));

    it('should be created', () => {
      expect(dialogSubscribeService).toBeTruthy();
    });

    it('should check logout dialog', () => {
      const spy = spyOn(dialogService, 'open').and.returnValue(ObservableOf({}));
      // todo: @types/jasmine update error
      // @ts-ignore
      const logout = spyOn(userService, 'logout').and.returnValue(ObservableOf({}));
      dialogSubscribeService.subscribeDialogs();
      userService.auth.emitLogout();
      expect(spy).toHaveBeenCalled();
      expect(logout).toHaveBeenCalled();
      spy.and.returnValue(ObservableOf(false));
      userService.auth.emitLogout();
      expect(spy).toHaveBeenCalled();
      dialogSubscribeService.unsubscribeDialogs();
    });

    it('should check unassign dialog', () => {
      const unassignSubject = new BehaviorSubject(null);
      const unassign = patientDataService.unassign = createSpy().and.returnValue(unassignSubject);
      // todo: @types/jasmine update error
      // @ts-ignore
      const navigate = spyOn(navigationService, 'navigate').and.returnValue(ObservableOf(true));
      const dialog = spyOn(dialogService, 'open').and.returnValue(ObservableOf(true));
      dialogSubscribeService.subscribeDialogs();

      stateService.patient.getUnassignEvent().emit({force: true, patient: {}});
      expect(unassign).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalled();
      unassignSubject.next({type: 4});

      stateService.patient.setViewOnly(true);
      stateService.patient.getUnassignEvent().emit({force: false, patient: {}});
      expect(dialog).toHaveBeenCalled();
      expect(unassign).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalled();

      stateService.patient.setViewOnly(false);
      stateService.patient.getUnassignEvent().emit({force: false, patient: {}});
      expect(dialog).toHaveBeenCalled();
      expect(unassign).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalled();

      dialogSubscribeService.unsubscribeDialogs();
    });

    it('should stay on patient\'s page after unassign dialog', () => {
      const dialog = spyOn(dialogService, 'open').and.returnValue(ObservableOf(false));
      const unassign = patientDataService.unassign = createSpy().and.returnValue(ObservableOf({type: 4}));
      const notification = spyOn(notificationService, 'info');
      // todo: @types/jasmine update error
      // @ts-ignore
      const navigate = spyOn(navigationService, 'navigate').and.returnValue(ObservableOf(true));
      dialogSubscribeService.subscribeDialogs();
      stateService.patient.getUnassignEvent().emit({
        force: false,
        patient: {},
        customMessage: 'message',
        cb: () => notificationService.info('info')
      });
      expect(dialog).toHaveBeenCalled();
      expect(notification).toHaveBeenCalled();
      expect(unassign).not.toHaveBeenCalled();
      expect(navigate).not.toHaveBeenCalled();
      dialogSubscribeService.unsubscribeDialogs();
    });

    xit('should check finalize dialog', fakeAsync(() => {
      stateService.patient.setCurrent(null);
      const finalizeSubject = new BehaviorSubject(false);
      const dialogSubject = new BehaviorSubject(false);
      const dialog = spyOn(dialogService, 'open').and.returnValue(dialogSubject);
      // todo: @types/jasmine update error
      // @ts-ignore
      const navigate = spyOn(navigationService, 'navigateToPatients').and.returnValue(ObservableOf(true));
      const dispatch = spyOn(treatmentsService, 'dispatch').and.returnValue(Promise.resolve());
      // todo: @types/jasmine update error
      // @ts-ignore
      const document = spyOn(documentsService, 'uploadDocument').and.returnValue(ObservableOf([]));
      dialogSubscribeService.subscribeDialogs();
      stateService.app.pdf.emitPdfClosed();
      expect(dialog).toHaveBeenCalled();
      expect(document).not.toHaveBeenCalled();
      expect(dispatch).not.toHaveBeenCalled();
      dialogSubject.next(true);
      expect(dispatch).not.toHaveBeenCalled();
      stateService.patient.setCurrent(testPatientData);
      expect(dispatch).toHaveBeenCalled();
      tick();
      expect(navigate).not.toHaveBeenCalled();
      finalizeSubject.next(true);
      expect(document).toHaveBeenCalled();
      stateService.app.pdf.emitPdfClosed();
      expect(navigate).toHaveBeenCalled();
      dialogSubscribeService.unsubscribeDialogs();
    }));

  xit('should check prefinalize dialog', fakeAsync(() => {
    stateService.patient.setCurrent(null);
    const dialogSubject = new BehaviorSubject(false);
    const dialog = spyOn(dialogService, 'open').and.returnValue(dialogSubject);
    const notes = spyOn(navigationService, 'navigate');
    dialogSubscribeService.subscribeDialogs();
    stateService.patient.emitPrefinalize(['treat', 'treat2']);
    tick();
    expect(dialog).toHaveBeenCalledTimes(2);
    expect(notes).not.toHaveBeenCalled();
    stateService.patient.setCurrent(testPatientData);
    dialogSubject.next(true);
    expect(notes).toHaveBeenCalled();
    dialogSubscribeService.unsubscribeDialogs();
  }));

    it('should check message dialog', () => {
      const dialog = spyOn(dialogService, 'open').and.returnValue(ObservableOf(true));
      dialogSubscribeService.subscribeDialogs();
      stateService.app.message.send('message');
      expect(dialog).toHaveBeenCalled();
      dialogSubscribeService.unsubscribeDialogs();
    });

    it('should check edit notes dialog', () => {
      const dialogSubject = new BehaviorSubject(null);
      const additionalInfoSubject = new BehaviorSubject(null);
      const dialog = spyOn(dialogService, 'open').and.returnValue(dialogSubject);
      const data = dataService.getPatientLastValue = createSpy().and.returnValue({
        additionalInformation: [],
        patientInformation: {patientId: '123'}
      });
      const saveAdditionalInfo = dataService.saveAdditionalInfo = createSpy().and.returnValue(additionalInfoSubject);
      const update = dataService.updatePatient = createSpy().and.returnValue(ObservableOf({additionalInformation: []}));
      const errorNotification = spyOn(notificationService, 'error').and.returnValue(true);
      dialogSubscribeService.subscribeDialogs();
      stateService.patient.editNotes('note');
      expect(data).toHaveBeenCalled();
      expect(dialog).toHaveBeenCalled();
      expect(saveAdditionalInfo).not.toHaveBeenCalled();
      dialogSubject.next(Object.values(additionalInfo));
      expect(saveAdditionalInfo).toHaveBeenCalled();
      expect(update).not.toHaveBeenCalled();
      additionalInfoSubject.next({type: 1});
      expect(update).not.toHaveBeenCalled();
      expect(errorNotification).not.toHaveBeenCalled();
      additionalInfoSubject.next({status: 400});
      expect(update).not.toHaveBeenCalled();
      expect(errorNotification).toHaveBeenCalled();
      additionalInfoSubject.next(additionalInfo);
      expect(update).toHaveBeenCalled();
      dialogSubscribeService.unsubscribeDialogs();
    });

    it('should emit logout routine', () => {
      const forceLogoutEvent = ['Message', 'Title', 1];
      const logoutRoutine = spyOn(userService, 'logout');
      dialogSubscribeService.subscribeDialogs();
      userService.auth.emitForceLogout(forceLogoutEvent);
      expect(logoutRoutine).toHaveBeenCalled();
      dialogSubscribeService.unsubscribeDialogs();
    });
  }
));
