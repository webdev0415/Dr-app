import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ContinueButtonTestModule } from '@pa-tests/patient-space/continue-button-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { LabsService } from '../../../../labs/services/labs.service';
import { testMeasurements } from '../../../../patient-core/test.constants';
import { LazyService, NotificationsService, PatientdataService } from '../../../../services';
import { PatientSpaceComponent } from './patientspace.component';
import { NgxsModule, Store } from '@ngxs/store';
import { PhysicalExamPanelState } from './stores/physical-exam-panel/physical-exam-panel.state';
import { DialogSubscribesService } from '../../../../services/dialogsubscribes.service';
import { TreatmentsService } from '../../../../treatments/treatments.service';
import { of } from 'rxjs';
import SpyObj = jasmine.SpyObj;


@Component({
  selector: 'pa-sidenavbar',
  template: 'Mock Sidenavbar Component'
})
class MockSidenavbarComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}

@Component({
  selector: 'pa-bottom-space',
  template: 'Mock Bottom Space Component'
})
export class MockBottomSpaceComponent {
  @Output() private changeShow: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input('instanceComponent')
  public set instanceComponent(instanceComponent: Function | null) {}
}


@Component({
  selector: 'pa-exam-panel',
  template: 'Mock Exam Panel Component '
})
export class MockExamPanelComponent implements OnInit, OnDestroy {
  @Input() panel: any;
  @Input() section: any;
  @Input() store: Store;
  @Input() viewOnly: boolean;

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}


describe('PatientSpaceComponent', generateSpecs({
    componentType: PatientSpaceComponent,
    imports: [
      ContinueButtonTestModule,
      BrowserAnimationsModule,
      NgxsModule.forRoot([PhysicalExamPanelState])
    ],
    declarations: [
      MockSidenavbarComponent,
      MockBottomSpaceComponent,
      MockExamPanelComponent,
      PatientSpaceComponent
    ],
    providers: [
      {
        provide: Router, useValue: {
          routeReuseStrategy: {
            e: new EventEmitter<any>().asObservable(),
            h: {}
          },
          events: new EventEmitter<any>().asObservable()
        },
      },
      {
        provide: LazyService, useValue: jasmine.createSpyObj('LazyService',
          [
            'revokeBlobURLs'
          ]
        )
      },
      {
        provide: DialogSubscribesService, useValue: jasmine.createSpyObj('DialogSubscribesService', ['patientUnassigned'])
      },
      {
        provide: TreatmentsService, useValue: jasmine.createSpyObj('TreatmentsService', ['dispatch'])
      },
      {
        provide: LabsService, useValue: { initPatientLabs: (...args) => null }
      },
      {
        provide: PatientdataService, useValue: jasmine.createSpyObj('PatientdataService', ['getPatient'])
      },
      {
        provide: NotificationsService, useValue: jasmine.createSpyObj('NotificationsService', ['warning'])
      }
    ],
  beforeEachDetectChanges: false
  },
  (context: TestContext<PatientSpaceComponent>) => {
  let patientDataService: SpyObj<PatientdataService>;
  let notificationsService: SpyObj<NotificationsService>;
  let fixture: ComponentFixture<PatientSpaceComponent>;
  beforeEach(async(() => {
    fixture = context.fixture;
    patientDataService = TestBed.get(PatientdataService);
    notificationsService = TestBed.get(NotificationsService);
    // todo: @types/jasmine update error
    // @ts-ignore
    patientDataService.getPatient.and.returnValue(of({ triage: [], measurements: [] }));
  }));

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });

    it('should not show vitals alert', () => {
      notificationsService.warning.calls.reset();
      fixture.detectChanges();
      expect(notificationsService.warning).toHaveBeenCalled();
    });

    it('should show vitals alert', () => {
      notificationsService.warning.calls.reset();
      // todo: @types/jasmine update error
      // @ts-ignore
      patientDataService.getPatient.and.returnValue(of({ triage: [], measurements: testMeasurements }));
      fixture.detectChanges();
      expect(notificationsService.warning).not.toHaveBeenCalled();
    });
  }
));
