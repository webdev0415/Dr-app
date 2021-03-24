import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { generateSpecs, TestContext } from 'tests/test-context';
import { UserTestModule } from 'tests/user-test.module';
import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';
import { DataService } from 'services';
import { behaviorsPatient } from 'static/test.constants';
import { Utils } from 'utils/utils';

import { SurveysComponent } from '../../../../provider-documents/src/lib/surveys/surveys.component';
import { Component, Input } from '@angular/core';
import { PatientProfile } from '../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-profile.interface';


class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    this.patient = new BehaviorSubject(Utils.clone(behaviorsPatient));
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }

  public getPatientLastValue(): any {
    return this.patient.getValue();
  }

  public getSymptomCategories(): Observable<any[]> {
    return ObservableOf([]);
  }

  public getParsedSymptoms(): Observable<any[]> {
    return ObservableOf([]);
  }

  public updatePatient(updInfo: object): Observable<boolean> {
    this.patient.next(updInfo);
    return ObservableOf(true);
  }
}

@Component({
  selector: 'doc-sports-table',
  template: 'Mock Sports Table Component',
})
class SportsTableComponent {
  @Input() question;
  @Input() isPdf = false;
}

@Component({
  selector: 'doc-sports-table',
  template: 'Mock Documents Header Component',
})
class MockDocumentsHeaderComponent {
  @Input() patientInformation: PatientProfile;
  @Input() kioskMode: string;
  @Input() source: string;

}

describe('SurveysComponent', generateSpecs({
    componentType: SurveysComponent,
    imports: [
      BrowserAnimationsModule,
      UserTestModule
    ],
    declarations: [
      SurveysComponent,
      SportsTableComponent,
      MockDocumentsHeaderComponent
    ],
    providers: [
      {
        provide: DataService,
        useClass: MockDataService
      }
    ]
  },
  (context: TestContext<SurveysComponent>) => {
    let servicespy: jasmine.SpyObj<DataService>;

    beforeEach(async(() => {
      servicespy = TestBed.get(DataService);
    }));

    it('should load symptoms', () => {
      const newPatient = servicespy.getPatientLastValue();
      // @ts-ignore
      newPatient.behavioralScreening[0].answers.push({
        question_id: 'SPT-11', answer: 'No'
      }, {
        question_id: 'SPT-10', answer: 'No'
      }, {
        question_id: 'SPT-9', answer: 'No'
      });
      servicespy.updatePatient(newPatient);
      context.detectChanges();
      expect(context.component.behavioralScreening.length).toBeGreaterThan(0);
    });

    it('should change active tab', () => {
      const tabCSSRDe = context.debugElement.queryAll(By.css('.mat-tab-label'));
      tabCSSRDe.forEach(el => {
        if (el.nativeElement.textContent === 'COLUMBIA-SUICIDE SEVERITY RATING') {
          context.component.selectedTab = 1;
          context.detectChanges();
          expect(el.attributes['aria-selected']).toBe('true');
        }
      });
    });
  }
));
