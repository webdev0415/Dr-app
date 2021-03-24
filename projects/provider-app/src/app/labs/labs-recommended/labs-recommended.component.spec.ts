import { TestBed } from '@angular/core/testing';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { testTriage } from 'static/test.constants';
import { SymptomsService } from 'services/symptoms.service';
import { DataService } from '../../services';

import { LabsRecommendedComponent } from './labs-recommended.component';

class MockDataService {
  public patient: BehaviorSubject<any>;

  constructor() {
    const patient = null;
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    return this.patient.asObservable();
  }
}


describe('LabsRecommendedComponent', generateSpecs({
    componentType: LabsRecommendedComponent,
    declarations: [
      LabsRecommendedComponent
    ],
    providers: [
      { provide: SymptomsService, useValue: {
          searchParsedSymptom: (item) => {
            if (item === 'test1') {
              return {
                name: 'test'
              };
            }
            return null;
          }
        }
      },
      { provide: DataService, useClass: MockDataService }
    ],
    beforeEachDetectChanges: false
  },
(context: TestContext<LabsRecommendedComponent>) => {
  let component: LabsRecommendedComponent;
  let dataService: jasmine.SpyObj<MockDataService>;

  beforeEach(() => {
    dataService = TestBed.get(DataService);
    component = context.component;
    component.recommendedLabs = ['SYMPT0000997'];
    component.triage = testTriage;
    context.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.recommendedLabs = ['test1', 'test'];
    component.ngOnInit();
    expect(component.recommendedLabsArray).toEqual([{ id: 'test1', name: 'test'}]);
  });

  it('should change in subscription in constructor', () => {
    dataService.patient.next(null);
    dataService.patient.next({ triage: null, recommendedLabs: ['test'] });
    expect(component.triage).toBeNull();
    expect(component.recommendedLabs).toEqual(['test']);
    dataService.patient.next({ triage: [], recommendedLabsV2: {test: ['test2']}, recommendedLabs: null });
    expect(component.triage).toEqual([]);
    expect(component.recommendedLabs).toEqual(['test2']);
  });
}));
