import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataService, StateService } from 'services';
import { Audit, Data } from 'common/models/data.model';
import { VitalFieldError } from 'common/models/vitals.model';
import { MeasurementsService } from 'services/measurements.service';
import { LabsService } from '../../../labs/services/labs.service';

import { VitalsTableComponent } from './vitals-table.component';
import { testVisitData } from '../../../static/test.constants';


class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    const patient = testVisitData;
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }

  public getPatientLastValue(): any {
    return this.patient.getValue();
  }
}


@Component({
  selector: 'pa-vitals-field',
  template: 'Mock Vitals Field Component'
})
class MockVitalsFieldComponent implements OnInit, OnChanges, AfterContentChecked, OnDestroy {
  @Input() patient: Data;
  @Input() name: string;
  @Input() label: string;
  @Input() measurement = '';
  @Input() checkMin: number[] = [];
  @Input() checkMax: number[] = [];
  @Input() checkInt = false;
  @Input() value: string[] = [];
  @Input() media: Audit;
  @Input() values: number;
  @Input() labname: string;
  @Input() viewOnly: boolean;
  @Input() fieldLength: number;
  @Output() valueChange = new EventEmitter<string[]>();
  @Output() blur = new EventEmitter<any>();
  @Output() valid = new EventEmitter<VitalFieldError>();

  ngAfterContentChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}


describe('VitalsTableComponent', generateSpecs({
    componentType: VitalsTableComponent,
    imports: [
      NotificationsTestModule,
      UserTestModule,
      NotificationsTestModule,
      StoreTestModule.withoutMock([DataService, StateService])
    ],
    declarations: [
      MockVitalsFieldComponent,
      VitalsTableComponent
    ],
    providers: [
      MeasurementsService,
      {
        provide: LabsService, useValue: {
          pushOrdersState: (...args) => of(true),
          removeMeasurementsOrder: (...args) => null,
          orderedMeasurements: []
        },
      },
      { provide: DataService, useClass: MockDataService }
    ],
  beforeEachDetectChanges: false,
  },
  (context: TestContext<VitalsTableComponent>) => {
    beforeEach(() => {
      context.component.audits = {
        HEIGHT: null,
        WEIGHT: null,
        PULSE: null,
        MEAN_ARTERIAL_PRESSURE: null,
        TEMPERATURE: null,
        BLOOD_OXYGEN: null,
        SYSTOLIC: null,
        DIASTOLIC: null,
      };
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
