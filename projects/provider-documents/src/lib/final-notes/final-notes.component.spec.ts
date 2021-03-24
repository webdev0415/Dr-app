import { generateSpecs, TestContext } from 'tests/test-context';
import { UserTestModule } from 'tests/user-test.module';
import { Observable, of, of as ObservableOf } from 'rxjs';
import { MockPatientDataFacade } from '../../../../provider-app/src/app/tests/common-test.module';

import { FinalNotesComponent } from '../final-notes/final-notes.component';
import { ProviderNotesComponent } from '../provider-notes/notes.component';
import {
  testCompletedPatient,
  testParsedSymptoms,
  testPatientData,
  testPatientDataMeasurements,
  testSymptomCategories
} from 'static/test.constants';
import { Vitals } from 'common/models/vitals.model';
import { StateService } from 'services/state.service';
import { DataService } from 'services';
import { Component, Input, Output } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AdjustTimezonePipe } from 'utils/timezone-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullNamePipe } from 'utils/full-name.pipe';
import { ReactionPipe } from 'utils/reaction.pipe';
import { DDX } from 'common/models/additional-doctor-notes.interface';
import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';
import { DischargeDispositionTableComponent } from 'discharge/discharge-disposition-table/discharge-disposition-table.component';
import { ReturnToSchoolWork } from 'discharge/discharge.interface';
import { DischargeNotes } from 'common/models/data.model';
import { initialTreatments } from 'treatments/static/static.treatments';
import { MeasurementsMediaService } from 'services/measurements-media.service';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { TreatmentsService } from 'treatments/treatments.service';
import { NewTreatmentsService } from 'treatments/treatments.new.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pa-editable-text',
  template: 'Mock Editable Text Component'
})
class MockEditableTextComponent {
  @Input() data: string | undefined;
  @Input() multiline: boolean | undefined;
  @Input() disabled: boolean;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pa-practitioner-discharge-notes',
  template: 'Mock Discharge Notes Component',
})
class MockDischargeNotesComponent {
  @Input() title: string;
  @Input() notesType: string;
  @Input() data: any;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pa-hpi-summary',
  template: 'HPI SUMMARY'
})
class MockHpiSummaryComponent {
  @Input() sourceName;
  @Input() filterByASCII;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pa-selected-illnesses',
  template: 'SELECTED ILLNESSES'
})
export class MockSelectedIllnessesComponent {
  @Input() ddx: DDX;
  @Input() diagnosticEngine: DiagnosticEngine[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pa-authorization-notes',
  template: 'AUTHORIZATION NOTES'
})
export class MockAuthorizationNotesComponent {
  @Input() RTWSInfo: ReturnToSchoolWork;
  @Input() viewOnly: boolean;
  @Input() dischargeNotes: DischargeNotes;
  @Input() patientName: string;
  @Output() update;
}

class MockDataService {
  constructor() {}
  public getSummary() {
    return ObservableOf([]);
  }
  public saveSummary(...items): Observable<any> {
    return ObservableOf();
  }
}

class MockTreatmentsService {
  dispatch() {}
  saveTreatments() {}
  selectSnapshot() {
    return initialTreatments;
  }
}

class MockMeasurementsMediaService {
  constructor() {}
  public getMeasurements(): Observable<any> {
    return ObservableOf([]);
  }
}

xdescribe('FinalNotesComponent', generateSpecs({
    componentType: FinalNotesComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      UserTestModule
    ],
    declarations: [
      AdjustTimezonePipe,
      FinalNotesComponent,
      ProviderNotesComponent,
      MockHpiSummaryComponent,
      MockEditableTextComponent,
      MockSelectedIllnessesComponent,
      MockEditableTextComponent,
      MockAuthorizationNotesComponent,
      DischargeDispositionTableComponent,
      FullNamePipe,
      ReactionPipe,
      MockDischargeNotesComponent,
    ],
    providers: [
      { provide: StateService, useValue: jasmine.createSpyObj('StateService', ['patient'])},
      { provide: DataService, useValue: MockDataService },
      { provide: TreatmentsService, useClass: MockTreatmentsService },
      { provide: MeasurementsMediaService, useClass: MockMeasurementsMediaService },
      { provide: PatientDataFacadeService, useClass: MockPatientDataFacade },
      { provide: NewTreatmentsService }
    ],
    beforeEachDetectChanges: false,
    noErrorsSchema: true
  },
  (context: TestContext<FinalNotesComponent>) => {
    let component: FinalNotesComponent;
    let stateServiceSpy: jasmine.SpyObj<StateService>;

    beforeEach(async() => {
      stateServiceSpy = TestBed.get(StateService);
    });

    beforeEach(() => {
      stateServiceSpy.patient.getViewOnly = jasmine.createSpy().and.returnValue(of(true));
      component = context.component;
      component.parsedSymptoms = testParsedSymptoms;
      component.symptomCategories = testSymptomCategories;
      component.vitals = new Vitals(testPatientDataMeasurements);
      component.patientListEntity = testPatientData;
      component.patient = testCompletedPatient;
      component.RTWSInfo = {isUsed: false, data: initialTreatments.returnToWorkSchool};
      component.severityConfirmation = of({
        patientRisk: null,
        cptCode: null
      });
      context.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
);
