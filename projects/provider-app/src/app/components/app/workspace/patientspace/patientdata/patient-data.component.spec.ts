import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { ContinueButtonTestModule } from '@pa-tests/patient-space/continue-button-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';
import { DataService } from 'services';
import { testPatientDataMeasurements, testPatientHealthHistory, testPatientInformation, testVisitInformation } from 'static/test.constants';
import { DateTime } from 'utils/dateTime';
import { Data } from '../../../../../common/models/data.model';
import { DialogSubscribesService } from '../../../../../services/dialogsubscribes.service';
import { SymptomsService } from '../../../../../services/symptoms.service';

import { PatientDataComponent } from './patient-data.component';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { PatientDataSection } from '../../../../../common/types/patient-data-section.type';
import { PatientDataSectionNameEnum } from '../../../../../common/enums/patient-data-section.enum';


class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    const patient = {
      triage: [],
      patientHealthHistory: testPatientHealthHistory,
      patientInformation: testPatientInformation,
      visitInformation: testVisitInformation,
      measurements: testPatientDataMeasurements
    };
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }

  public nodeSearch(): Observable<any> {
    return ObservableOf({body: {nodes: [{name: 'some t', icd10Code: 'J04.11'}]}});
  }
}

class MockSymptomService {
  public getSymptomCategories(): Observable<any[]> {
    return ObservableOf([]);
  }

  public getParsedSymptoms(): Observable<any[]> {
    return ObservableOf([{
      symptomID: 'SYMPT0000234',
      snomedCodes: [],
      categoryID: 'SYMPTCG03'
    }]);
  }

  get healthHistorySections() {
    const sections = {};
    Object.keys(PatientDataSectionNameEnum).forEach(key => {
      Object.assign(sections, {[key]: {
          name: PatientDataSectionNameEnum[key],
          data: [],
          list: [],
          showPersonalHistory: key === 'personalHistory'
        }});
    });
    return sections;
  }
}

@Component({
  selector: 'pa-item-list',
  template: 'Mock Item List Component'
})
export class MockItemListComponent {
  @Input() section;
  @Input() patient;
  @Input() symptomCategories;
  @Input() viewOnly;
  @Input() noTitle;
  @Input() maxItems;
  @Output() change = new EventEmitter();
}


describe('PatientDataComponent', generateSpecs({
    componentType: PatientDataComponent,
    imports: [
      NetworkTestModule,
      ContinueButtonTestModule,
      NotificationsTestModule,
      UserTestModule
    ],
    declarations: [
      MockItemListComponent,
      PatientDataComponent
    ],
    providers: [
      {
        provide: DataService, useClass: MockDataService
      },
      {
        provide: SymptomsService, useClass: MockSymptomService
      },
      {
        provide: DialogSubscribesService, useValue: jasmine.createSpyObj('DialogSubscribesService', [
          'patientUnassigned'
        ])
      },
      DateTime
    ]
  },
  (context: TestContext<PatientDataComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });

    it('should get date ago', () => {
      expect(context.component.getDateAgo('2017-03-02')).toEqual(jasmine.any(String));
    });

    it('should toggle previous visits', () => {
      context.component.isPreviousVisitsShownMore = false;
      context.component.togglePreviousVisits();
      expect(context.component.isPreviousVisitsShownMore).toBeTruthy();
    });
  }
));
