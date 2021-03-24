import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';
import { DataService } from 'services';
import { MeasurementsService } from 'services/measurements.service';
import { SymptomsService } from 'services/symptoms.service';
import { testDiagnosticEngine } from 'static/test.constants';
import { OrderStateEnum } from '../../../../../common/enums';
import { Lab } from '../../../../../common/interfaces/labs.interface';
import { Data, Vitals } from '../../../../../common/models/data.model';
import { PopupsModule } from '../../../../shared/popups/popups.module';
import { SymptomsComponent } from './symptoms.component';
import createSpy = jasmine.createSpy;


class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    const patient = {
      diagnosticEngine: testDiagnosticEngine,
      triage: [{symptomId: 'SYMPT0003040', response: true, symptomName: 'symptom name'}],
      patientHealthHistory: {medications: [], allergies: []},
      additionalInformation: {physicalExam: []},
      measurements: []
    };
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }

  public getPatientLastValue(): any {
    return this.patient.getValue();
  }

  public getTriageValue(): string {
    return 'tval';
  }

  public updatePatient(updInfo: object): any {
    this.patient.next(updInfo);
    return {};
  }
}

class MockSymptomsService {
  public getSymptomCategories(): any[] {
    return [{categoryID: ['CAT0001'], groupName: 'Physical'}, {categoryID: ['CAT0002'], groupName: 'Physical'}];
  }

  public getSymptomDescriptions(): any[] {
    return [{}];
  }

  public getParsedSymptoms(): Observable<any[]> {
    return ObservableOf([
      {
        symptomID: 'SYMPT0003040',
        criticality: 0.5,
        categoryID: 'CAT0001',
        displayDrApp: true,
        name: 'ps name',
        location: ['Whole Body']
      }
    ]);
  }

  public getBodyParts(): any[] {
    return [{name: 'name', bodyPartsCodes: ['CAT0001']}];
  }

  public addSymptom(): any {
    return {
      diagnosticEngine: testDiagnosticEngine,
      triage: [{symptomId: 'SYMPT0003040', response: true}],
      patientHealthHistory: {medications: [], allergies: []},
      additionalInformation: {physicalExam: []},
      measurements: []
    };
  }

  public removeSymptom(): any {
    return {};
  }

  public searchParsedSymptom(): any {
    return {symptomID: '1', name: 'symptom'};
  }
  getGeneralSymptomsCategories(data): void {}
  getSymptomsCategoriesByFilter() { return {symptomCategories: [], triage: []}; }
}

class MockLabsService {
  public labsByBusiness(): Lab[] {
    return [{
      name: 'SomeName',
      ids: ['SYMPT0003951'],
      ordering: true,
      regular: true,
      negative: true,
      prefix: '',
      code: 'pregnancy',
      state: OrderStateEnum.NONE
    }];
  }
}

class MockMeasurementsService {
  getVitals(measurements): Vitals {
    return {
      BP: {SYSTOLIC: 120, DIASTOLIC: 80},
      WEIGHT: 100,
      PULSE: 100,
      BLOOD_OXYGEN: 100,
      HEIGHT: 100,
      TEMPERATURE: 100
    };
  }
}


@Pipe({ name: 'filterSymptomName' })
class MockSymptomFilterPipe implements PipeTransform {
  public transform(value) {
    return value;
  }
}

@Component({
  selector: 'pa-labs-results',
  template: 'Mock Labs Results Component'
})
export class MockLabsResultsComponent implements OnInit {
  @Input() patient: Data[];
  @Input() source: string;

  ngOnInit(): void {
  }
}

@Component({
  selector: 'pa-hpi-summary',
  template: 'Mock HPI Summary Component'
})
class MockHPISummaryComponent {
  @Input() sourceName: string;
}

@Component({
  selector: 'pa-grouped-symptoms',
  template: 'Mock Grouped Symptoms Component'
})
class MockGroupedSymptomsComponent {
  @Input() symptom;
  @Input() viewOnly: boolean;
  @Output() removeGroupEvent = new EventEmitter();
}


describe('SymptomsComponent', generateSpecs({
    componentType: SymptomsComponent,
    imports: [
      NavigationTestModule,
      PopupsModule,
      UserTestModule
    ],
    declarations: [
      MockSymptomFilterPipe,
      MockLabsResultsComponent,
      SymptomsComponent,
      MockHPISummaryComponent,
      MockGroupedSymptomsComponent
    ],
    providers: [
      {
        provide: DataService, useClass: MockDataService
      },
      {
        provide: SymptomsService, useClass: MockSymptomsService
      },
      {
        provide: MeasurementsService, useClass: MockMeasurementsService
      }
    ]
  },
  (context: TestContext<SymptomsComponent>) => {
    let dataService: DataService;
    let symptomsService: SymptomsService;

    beforeEach(async(() => {
      dataService = TestBed.get(DataService);
      symptomsService = TestBed.get(SymptomsService);
    }));

    beforeEach(() => {
      symptomsService.addSymptom = createSpy().and.returnValue({
        diagnosticEngine: testDiagnosticEngine,
        triage: [{symptomId: 'SYMPT0003040', response: true}],
        patientHealthHistory: {medications: [], allergies: []},
        additionalInformation: {physicalExam: []},
        measurements: []
      });
      symptomsService.removeSymptom = createSpy().and.returnValue({});
      dataService.updatePatient = createSpy().and.returnValue({});
    });

    it('should add symptom', () => {
      const afterClosed = ObservableOf({selected: [{symptomID: '1', presenting: true, description: ''}]});
      const spy = spyOn(context.component.dialogService, 'open').and.returnValue(afterClosed);
      context.component.addSymptom();
      expect(spy).toBeTruthy();
      expect(symptomsService.addSymptom).toBeTruthy();
      expect(dataService.updatePatient).toBeTruthy();
    });

    it('should remove symptom', () => {
      context.component.removeSymptom({});
      expect(symptomsService.removeSymptom).toBeTruthy();
      expect(dataService.updatePatient).toBeTruthy();
    });
  }
));
