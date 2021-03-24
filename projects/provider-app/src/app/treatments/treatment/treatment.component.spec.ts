import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';

import { MdbAutoCompleterComponent } from 'ng-uikit-pro-standard';
import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';
import { DataService, KludgesService, NotificationsService, StateService } from 'services';
import {
  testDiagnosticEngine,
  testPatientDataMeasurements,
  testPatientHealthHistory,
  testPatientInformation,
  testTreatmentEngine
} from 'static/test.constants';
import { DateTime } from 'utils/dateTime';
import { Treatment, DrugInformation } from 'treatments/treatments.interface';
import { PatientListService } from '../../patient-list/services/patient-list.service';
import { SymptomsService } from 'services/symptoms.service';
import { SharedModule } from '../../components/shared/shared.module';
import { MockPatientDataFacade } from '../../tests/common-test.module';
import { TreatmentComponent } from './treatment.component';
import { ProceduresService } from '../../procedures/procedures.service';
import { TreatmentsModule } from '../treatments.module';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { first } from 'rxjs/operators';
import { TreatmentsService } from '../treatments.service';
import { DischargeModule } from '../../discharge/discharge.module';
import { PatientDataFacadeService } from '../../patient-core/patient-data-facade.service';
import createSpy = jasmine.createSpy;


class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    const patient = {
      diagnosticEngine: testDiagnosticEngine,
      treatmentEngine: testTreatmentEngine,
      triage: [{symptomId: 'SYMPT0003040', response: true}],
      patientHealthHistory: testPatientHealthHistory,
      additionalInformation: {
        physicalExam: [],
        knownDrugAllergies: [{potentialDrugs: ['TRICLOSAN']}]
      },
      measurements: testPatientDataMeasurements,
      visitInformation: {status: 'PATIENT_WITH_DOCTOR'},
      drugInformation: [{quantity: 1, strength: '10', drugName: 'Name 2'}],
      treatmentsDirty: false,
      patientInformation: testPatientInformation,
      illness: ['J04.0', 'J04.11', 'J05.0']
    };
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }

  public getSymptomInfo(): Observable<any[]> {
    return ObservableOf([]);
  }

  public getSourceInfoData(): Observable<any[]> {
    return ObservableOf([{symptomID: 'SYMPT0003040', sourceInformation: ['source info ']}]);
  }

  public getParsedSymptoms(): Observable<any[]> {
    return ObservableOf([{symptomID: 'SYMPT0003040', criticality: 0.5}]);
  }

  public nodeSearch(): Observable<any> {
    return ObservableOf({body: {nodes: [{name: 'some t', icd10Code: 'J04.11'}]}});
  }

  public updatePatient(updInfo: object): Observable<any[]> {
    this.patient.next(updInfo);
    return ObservableOf([]);
  }

  public buildDrugInfo(): void {}
}

class MockSymptomsService {
  public getTreatmentTypes(): Observable<any> {
    return ObservableOf([
        {name: 'OTC Drugs'}, {name: 'Activity', treatmentTypeDesc: [{shortName: 'As needed'}]}
      ]
    );
  }
}

@Component({
  selector: 'pa-drug-treatment',
  template: 'Mock Drug Treatment Component'
})
export class MockDrugTreatmentComponent implements AfterViewInit, OnDestroy {
  @Input() drug: DrugInformation;
  @Input() drugInformation: DrugInformation[];
  @Input() prescription: boolean;
  @Output() change = new EventEmitter();

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }
}

@Component({
  selector: 'pa-treatments-search-bar',
  template: 'Mock Treatment Search Bar Component'
})
export class MockTreatmentsSearchBarComponent {
  @Input() viewOnly: boolean;
  @Input() searchFunction: (keyword: string) => Observable<string[]>;
  @Input() placeholder: string;
  @Input() initialAutocompleteList: string[];
  @Output() optionSelected: EventEmitter<{text: string; element: any}> = new EventEmitter();
}


xdescribe('TreatmentComponent', generateSpecs({
    componentType: TreatmentComponent,
    imports: [
      SharedModule,
      NavigationTestModule,
      DialogsTestModule,
      BrowserAnimationsModule,
      TreatmentsModule.forRoot(),
      StoreTestModule.withoutMock([SymptomsService, DataService, StateService]),
      UserTestModule,
      DischargeModule
    ],
    declarations: [
      MockDrugTreatmentComponent,
      MockTreatmentsSearchBarComponent
    ],
    providers: [
      {
        provide: DataService, useClass: MockDataService
      },
      {
        provide: SymptomsService, useClass: MockSymptomsService
      },
      {
        provide: NotificationsService, useValue: jasmine.createSpyObj('NotificationsService', ['warning'])
      },
      {
        provide: KludgesService, useValue: jasmine.createSpyObj('KludgesService', ['getTreatments'])
      },
      DateTime,
      PatientListService,
      ProceduresService,
      { provide: PatientDataFacadeService, useClass: MockPatientDataFacade }
    ]
  },
  (context: TestContext<TreatmentComponent>) => {
    let component: TreatmentComponent;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let stateSpy: jasmine.Spy;
    let kludges: jasmine.SpyObj<KludgesService>;
    let treatmentsServiceSpy: jasmine.SpyObj<TreatmentsService>;

    beforeEach(async(() => {
      stateServiceSpy = TestBed.get(StateService);
      kludges = TestBed.get(KludgesService);
      // todo: @types/jasmine update error
      // @ts-ignore
      kludges.getTreatments.and.returnValue(ObservableOf([]));
      treatmentsServiceSpy = TestBed.get(TreatmentsService);
    }));


    beforeEach(() => {
      stateSpy = spyOnProperty(stateServiceSpy, 'patient').and.returnValue({
        getCurrent: () => ObservableOf(true),
        getViewOnly: () => ObservableOf(false),
        getPatientArrivedEvent: () => new EventEmitter<any>(),
        getPatientCompletedEvent: () => new EventEmitter<any>(),
        emitPrefinalize: () => {},
        tabs: {}
      });
      spyOn(treatmentsServiceSpy, 'getDrugsByName').and.returnValue(ObservableOf(['1', '2']));
      component = context.component;
    });

    it('should load data', () => {
      component.loadData();
      expect(component).toBeTruthy();
    });

    it('should finalize', () => {
      component.dialogService.open = createSpy().and.returnValue(ObservableOf(
        null
      ));
      component.loadData();
      component.finalize();
      expect(component).toBeTruthy();
    });

    it('should search', () => {
      component.loadData();
      const group = {type: 'OTC Drugs'} as Treatment;
      const searchInput = {blur: () => {}, value: 'value'} as HTMLInputElement;
      const auto = {selectedItemChanged: () => ObservableOf({text: 'As needed'})} as MdbAutoCompleterComponent;
      const event = {relatedTarget: {textContent: 'Cancel'}};
      component.search(group, searchInput, auto, event);
      component.results.pipe(first()).subscribe(result => expect(result.length).toBe(2));
      searchInput.value = 'va';
      component.search(group, searchInput, auto, event);
      component.results.pipe(first()).subscribe(result => expect(result.length).toBe(0));
      group.type = 'Activity';
      searchInput.value = 'As';
      component.search(group, searchInput, auto, event);
      component.results.pipe(first()).subscribe(result => expect(result.length).toBe(1));

    });
  }
));
