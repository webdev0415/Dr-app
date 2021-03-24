import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { LabsService } from '../../../../../labs/services/labs.service';
import { DataService, NotificationsService, StateService, SymptomsService } from '../../../../../services';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';
import { WorkingDiagnosisComponent } from './working-diagnosis.component';
import { of as ObservableOf } from 'rxjs';
import { DialogService } from '../../../../../services/app/dialog.service';
import { TestBed } from '@angular/core/testing';
import {
  MockBusinessLabsComponent,
  MockContributorTableComponent,
  MockDataService,
  MockEditableTextComponent,
  MockHPISummaryComponent,
  MockIllnessGroupComponent,
  MockItemListComponent,
  MockLabsRecommendedComponent,
  MockLabsResultsComponent, MockQuestionnairesComponent,
  MockSymptomService,
  MockVitalsTableComponent
} from '../main/main.component.spec';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { Store } from '@ngxs/store';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { InitAccordion } from '../stores/diagnosis-accordion/diagnosis-accordion.actions';
import { testDE, testIllnessInformationDSD, testTriageDSD } from '../../../../../static/dsd-test.constants';
import { DiagnosticEngine } from '../../../../../common/interfaces/diagnostic-engine.interface';
import { MainComponent } from '../main/main.component';
import { SanitizerPipe } from '../../../../../utils/sanitizer.pipe';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogSubscribesService } from '../../../../../services/dialogsubscribes.service';
import { ActivatedRoute } from '@angular/router';
import { mediaDefault, specificMediaAvailable } from '../../../../../static/static.vitals';
import { testTreatmentEngine } from '../../../../../static/test.constants';
import { MockSelectedIllnessesComponent } from '../../../../../../../../provider-documents/src/lib/final-notes/final-notes.component.spec';
import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { UserService } from 'user/user.service';
import { TreatmentsService } from '../../../../../treatments/treatments.service';
import { MeasurementsService } from '../../../../../services/measurements.service';


@Component({
  selector: 'pa-main',
  template: 'Mock Diagnosis Component'
})
export class MockDiagnosisComponent implements OnInit, OnDestroy, BottomButtonsControl {
  @Output() changeTab = new EventEmitter();
  @Output() navigateToTreatments = new EventEmitter();

  getDisabledBottomButtons(): StateBottomButtons {
    return undefined;
  }

  getShownBottomButtons(): StateBottomButtons {
    return undefined;
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  onClickBottomButton(nameButton: string): void {
  }
}

@Component({
  selector: 'pa-treatment',
  template: 'Mock Treatment Component'
})
export class MockTreatmentComponent implements OnDestroy {
  ngOnDestroy(): void {
  }
}

@Component({
  selector: 'pa-pharmacist-summary',
  template: 'Mock Pharmacy Summary Component'
})
class MockPharmacistSummaryComponent {
  @Input() viewOnly;
  @Input() selectedIllnesses;
  @Output() exitPatientFile = new EventEmitter<any>();
  @Output() updateDiagnosis = new EventEmitter<any>();
  @Output() continueWithTreatments = new EventEmitter<any>();
}


xdescribe('WorkingDiagnosisComponent', generateSpecs({
    componentType: WorkingDiagnosisComponent,
    imports: [
      NotificationsTestModule,
      UserTestModule,
      DialogsTestModule,
      StoreTestModule.withoutMock([DataService, SymptomsService, StateService]),
      NavigationTestModule,
      BrowserAnimationsModule,
    ],
    declarations: [
      WorkingDiagnosisComponent,
      MainComponent,
      MockTreatmentComponent,
      MockContributorTableComponent,
      MockEditableTextComponent,
      MockVitalsTableComponent,
      MockLabsResultsComponent,
      MockLabsRecommendedComponent,
      MockItemListComponent,
      MockIllnessGroupComponent,
      MockHPISummaryComponent,
      SanitizerPipe,
      MockSelectedIllnessesComponent,
      MockBusinessLabsComponent,
      MockQuestionnairesComponent,
      MockPharmacistSummaryComponent

    ],
    providers: [
      { provide: DataService, useClass: MockDataService },
      { provide: SymptomsService, useClass: MockSymptomService },
      {
        provide: DialogSubscribesService, useValue: jasmine.createSpyObj('DialogSubscribesService', [
          'patientUnassigned',
          'getConfig'
        ])
      },
      {
        provide: ActivatedRoute,
        useValue: {
          parent: {snapshot: {params: {id: 123}}},
          snapshot: {params: {id: 123}, data: {media: {audits: null, media: mediaDefault, specificMedia: specificMediaAvailable}}}
        }
      },
      {
        provide: TreatmentsService, useValue: jasmine.createSpyObj('TreatmentsService', ['dispatch', 'refreshTreatment'])
      },
      MeasurementsService,
      {
        provide: LabsService, useValue: { initPatientLabs: (triage) => null }
      }
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<WorkingDiagnosisComponent>) => {
    let dataService: DataService;
    let dialogService: DialogService;
    let stateService: StateService;
    let store: Store;
    let notificationsService: NotificationsService;
    let treatmentsService: TreatmentsService;
    let component: WorkingDiagnosisComponent;
    let userService: UserService;

    const mockElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('.page-container').and.returnValue(mockElement);

    beforeEach(() => {
      dataService = TestBed.get(DataService);
      dialogService = TestBed.get(DialogService);
      stateService = TestBed.get(StateService);
      store = TestBed.get(Store);
      treatmentsService = TestBed.get(TreatmentsService);
      userService = TestBed.get(UserService);
      notificationsService = TestBed.get(NotificationsService);
      // @ts-ignore
      store.dispatch(new InitAccordion(testDE as DiagnosticEngine[], testIllnessInformationDSD, testTriageDSD));
      context.detectChanges();
      component = context.component;
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });

    xit('should confirm', () => {
      stateService.patient.tabs.setWorkingDiagnosis(1);
      spyOnProperty(userService, 'getUserRole').and.returnValue(UserRolesEnum.PRACTITIONER);
      stateService.patient.setViewOnly(false);
      component.diagnosisSection.edited = true;
      component.diagnosisSection.reviewed = true;
      component.diagnosisSection.examReviewed = true;

      const saveRequest = spyOn(dataService, 'saveDiagnosis').and.returnValue(ObservableOf({}));
      const rerun = spyOn(treatmentsService, 'refreshTreatment').and.returnValue(ObservableOf({
        additionalInformation: {
          knownDrugAllergies: [],
          knownDrugConflicts: [],
          knownPrecautionConflicts: []
        },
        output: testTreatmentEngine
      }));
      const dialog = spyOn(dialogService, 'open').and.returnValue(ObservableOf(true));
      component.diagnosisSection.confirmDiagnosis();
      expect(dialog).toHaveBeenCalled();
      expect(saveRequest).toHaveBeenCalled();
      expect(rerun).toHaveBeenCalled();
    });
  }
));
