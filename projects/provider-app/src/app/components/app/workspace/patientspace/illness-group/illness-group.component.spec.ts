import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';

import { of } from 'rxjs/internal/observable/of';

import { SymptomsService, DataService } from 'services';
import { IllnessGroupComponent } from './illness-group.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utils } from '../../../../../utils/utils';
import { testVisitData } from '../../../../../static/test.constants';
import { DiagnosticEngine } from '../../../../../common/interfaces/diagnostic-engine.interface';


@Component({
  selector: 'pa-illnesstable',
  template: 'Mock Illness Table Component'
})
class MockIllnessTableComponent {
  @Input() source;
  @Input() triageDict;
  @Input() selection;
  @Input() illnessPresentation;
  @Input() expanded: boolean;
  @Input() checkbox: boolean;
  @Input() group: string;
  @Input() topIllnessQuantity: number;
  @Input() accordionName: string;
  @Input() viewOnly: boolean;
  @Input() reviewed: boolean | undefined;
  @Output() change = new EventEmitter();
  @Output() reviewDialog = new EventEmitter<any>();
}

@Component({
  selector: 'pa-contributortable',
  template: 'Mock Contributor Table Component'
})
class MockContributorTableComponent implements OnInit {
  @Input() source;
  @Input() infoSources;
  @Input() icd10GroupName;
  @Input() illnessPresentation;

  ngOnInit(): void {
  }
}

class MockDataService {
  private patient: BehaviorSubject<any> = new BehaviorSubject(Utils.clone(testVisitData));

  public getPatientLastValue(): any {
    return this.patient.getValue();
  }
}

describe('IllnessGroupComponent', generateSpecs({
    componentType: IllnessGroupComponent,
    imports: [UserTestModule],
    declarations: [
      MockIllnessTableComponent,
      MockContributorTableComponent,
      IllnessGroupComponent
    ],
    providers: [
      {
        provide: DataService,
        useClass: MockDataService
      },
      {
        provide: SymptomsService, useValue: jasmine.createSpyObj('SymptomsService',
          [
            'getSourceInfoData$'
          ]
        )
      }
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<IllnessGroupComponent>) => {
    let component: IllnessGroupComponent;
    let symptomsServiceSpy: jasmine.SpyObj<SymptomsService>;

    beforeEach(async(() => {
      symptomsServiceSpy = TestBed.get(SymptomsService);
    }));

    beforeEach(() => {
      symptomsServiceSpy.getSourceInfoData$.and.returnValue(of([]));
      component = context.component;
      component.patientReviewed = [true, true];
      component.WDView = [true, false];
      component.sortedAccordionGroups = ['Pain in upper arm'];
      component.groupedContributors = {'Pain in upper arm': []};
      component.accordionGroups = {'Pain in upper arm': [{icdGroup: 'Doctor added'} as DiagnosticEngine]};
      component.expandedElements = {'Pain in upper arm': false};
      context.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
);

