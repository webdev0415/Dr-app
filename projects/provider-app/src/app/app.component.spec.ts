import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';

import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MDBModule } from './mdb.module';
import { DataService, StateService, SymptomsService } from './services';
import { ProceduresService } from './procedures/procedures.service';
import { DialogSubscribesService } from './services/dialogsubscribes.service';
import { NewVersionAvailableComponent } from './components/shared/popups/new-version-available/new-version-available.component';
import { Audits } from './common/models/data.model';
import { MeasurementsMediaService } from './services/measurements-media.service';
import { LabsService } from './labs/services/labs.service';
import { PatientListService } from './patient-list/services/patient-list.service';

class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    const patient = {
      patientInformation: {
        patientId: '1000',
        photo: {}
      },
      diagnosticEngine: [],
      visitInformation: {},
      measurements: [],
      triage: [],
      treatmentEngine: [],
      patientHealthHistory: [],
      additionalInformation: [],
      drugInformation: []
    };
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }

  public getList(): Observable<any[]> {
    return ObservableOf([]);
  }

  public getVisitData(): Observable<any> {
    return ObservableOf({});
  }

  public unassign(): Observable<any> {
    return ObservableOf({});
  }

  public getDifferentialDiagnosis(): Observable<any> {
    return ObservableOf({});
  }
}

class MockMeasurementsMediaService {
  getAudit(): Observable<Audits> {
    return ObservableOf({results: []});
  }
}

@Component({
  selector: 'pa-header',
  template: 'Mock Header Component'
})
class MockHeaderComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'pa-pdfgag',
  template: 'Mock Display Document Component'
})
export class MockDisplayDocumentComponent implements OnInit {
  @Input() link: SafeResourceUrl;

  ngOnInit(): void {
  }
}


describe('AppComponent', generateSpecs({
    componentType: AppComponent,
    imports: [
      NavigationTestModule,
      NetworkTestModule,
      NotificationsTestModule,
      BrowserAnimationsModule,
      MDBModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      UserTestModule
    ],
    declarations: [
      MockHeaderComponent,
      MockDisplayDocumentComponent,
      AppComponent,
      NewVersionAvailableComponent
    ],
    providers: [
      {
        provide: DataService, useClass: MockDataService
      },
      {
        provide: MeasurementsMediaService, useClass: MockMeasurementsMediaService
      },
      {
        provide: SymptomsService, useValue: jasmine.createSpyObj('SymptomsService',
          [
            'getSymptoms',
            'getBodyPartsData',
            'getTreatmentTypesData'
          ]
        )
      },
      {
        provide: DialogSubscribesService, useValue: jasmine.createSpyObj('DialogSubscribesService',
          [
            'unsubscribeDialogs',
            'subscribeDialogs'
          ]
        )
      },
      {
        provide: ProceduresService, useValue: jasmine.createSpyObj('ProceduresService',
          [
            'getMedicationsData',
            'getInjectionsData'
          ]
        )
      },
      {
        provide: LabsService, useValue: jasmine.createSpyObj('LabsService', ['getLabsData'])
      },
      PatientListService
    ],
    beforeEachDetectChanges: false,
    beforeComponentFixtureCreated: false
  },
  (context: TestContext<AppComponent>) => {
    let debugComponent;
    let symptomsServiceSpy: jasmine.SpyObj<SymptomsService>;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let appSpy;

    beforeAll(() => {
      sessionStorage.setItem(environment.storagePrefix, '{"api_url": "https://testing.advinow.net"}');
      localStorage.setItem(environment.storagePrefix, '{"api_url": "https://testing.advinow.net"}');
    });

    beforeEach(async(() => {
      symptomsServiceSpy =  TestBed.get(SymptomsService);
      stateServiceSpy = TestBed.get(StateService);
    }));

    beforeEach(() => {
      symptomsServiceSpy.getSymptoms.and.callFake(() => {});
      symptomsServiceSpy.getBodyPartsData.and.callFake(() => {});
      symptomsServiceSpy.getTreatmentTypesData.and.callFake(() => {});
      context.componentFixtureCreate();
      debugComponent = context.debugComponent;
      debugComponent.stateService.patient.setCurrent({patient_id: 111});
      const fake = debugComponent.stateService.app;
      appSpy = spyOnProperty(debugComponent.stateService, 'app').and.returnValue(fake);
      context.detectChanges();
    });

    it('should create the app', (() => {
      expect(context.debugElement.componentInstance).toBeTruthy();
    }));

    it('should unload', (() => {
      window.dispatchEvent(new Event('unload'));
    }));

  }
));
