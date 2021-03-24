import { async, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';

import { DataService } from 'services';
import { testDiagnosticEngine, testPatientData } from 'static/test.constants';
import { SymptomsService } from '../../../../services/symptoms.service';
import { PopupsModule } from '../popups.module';
import { PpcontributorsComponent } from './ppcontributors.component';
import { Pipe, PipeTransform } from '@angular/core';


class MockDataService {
  public testPatientsList: BehaviorSubject<any> = new BehaviorSubject([testPatientData]);

  getPatient(): Observable<any> {
    return ObservableOf({
      diagnosticEngine: testDiagnosticEngine,
      triage: [{symptomId: 'SYMPT0003040', response: true}],
      patientHealthHistory: {medications: [], allergies: []},
      additionalInformation: {physicalExam: []},
      measurements: []
    });
  }
}

class MockSymptomsService {
  getParsedSymptoms(): Observable<any> {
    return ObservableOf([{symptomID: 'SYMPT0003040', criticality: 0.5}]);
  }

  getSourceInfoData$(): Observable<any> {
    return ObservableOf([{symptomID: 'SYMPT0003040', sourceInformation: ['source info ']}]);
  }
}

@Pipe({ name: 'filterSymptomName' })
class MockSymptomFilterPipe implements PipeTransform {
  public transform(value) {
    return value;
  }
}


describe('PpcontributorsComponent', generateSpecs({
    componentType: PpcontributorsComponent,
    imports: [
      PopupsModule,
      NavigationTestModule, // for PopupsModule
      BrowserAnimationsModule,
      UserTestModule
    ],
    declarations: [
      MockSymptomFilterPipe
    ],
    providers: [
      { provide: DataService, useClass: MockDataService },
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      {
        provide: SymptomsService, useClass: MockSymptomsService
      }
    ]
  },
  (context: TestContext<PpcontributorsComponent>) => {
    let servicespy: jasmine.SpyObj<DataService>;

    beforeEach(async(() => {
      servicespy = TestBed.get(DataService);
    }));

    it('should build data', () => {
      context.component.symptomId = 'J04.0';
      context.component.buildData();
      expect(context.component.contributors).toBeDefined();
    });
  }
));
