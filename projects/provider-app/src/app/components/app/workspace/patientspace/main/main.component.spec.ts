import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';

import { BehaviorSubject, Observable, of as ObservableOf } from 'rxjs';

import { DataService, StateService } from 'services';
import {
  testDiagnosticEngine,
  testPatientDataMeasurements,
  testPatientHealthHistory,
  testTreatmentEngine,
  testVisitInformation
} from 'static/test.constants';
import { Data} from '../../../../../common/models/data.model';
import { LabsService } from '../../../../../labs/services/labs.service';
import { DialogService } from '../../../../../services/app/dialog.service';
import { DialogSubscribesService } from '../../../../../services/dialogsubscribes.service';
import { SymptomsService } from '../../../../../services/symptoms.service';
import { SanitizerPipe } from '../../../../../utils/sanitizer.pipe';
import { Triage } from '../../../../../../../../shared-models/src/public-api';
import { MainComponent } from './main.component';
import { AuditsDat, mediaDefault, specificMediaAvailable } from '../../../../../static/static.vitals';
import { Store } from '@ngxs/store';
import {
  AddIllness,
  InitAccordion,
  SelectPrimary,
  ToggleGroup
} from '../stores/diagnosis-accordion/diagnosis-accordion.actions';
import {
  Contributor,
  DiagnosisAccordionItem,
  DiagnosticEngine
} from '../../../../../common/interfaces/diagnostic-engine.interface';
import { testDE, testIllnessInformationDSD, testTriageDSD } from '../../../../../static/dsd-test.constants';
import { TreatmentEngine } from '../../../../../treatments/treatments.interface';
import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { UserService } from 'user/user.service';
import { DDX } from 'common/models/additional-doctor-notes.interface';
import { PharmacyAssessmentsEnum } from '../../../../../../../../pharmacist/src/lib/enum/pharmacy-assessments.enum';


export class MockDataService {
  private patient: BehaviorSubject<any>;

  constructor() {
    const patient = {
      patientInformation: {
        patientId: '1000'
      },
      triage: [{symptomId: 'SYMPT0003040', response: true, values: [['']]}],
      additionalInformation: {
        definedIcdCodes: []
      },
      illnessInformation: {
        defined_illnesses: [],
        selected_illnesses: []
      },
      illness: {illness: ['1', '2'], illnessName: ['111', '222']},
      diagnosticEngine: testDiagnosticEngine,
      measurements: testPatientDataMeasurements,
      patientHealthHistory: testPatientHealthHistory,
      visitInformation: testVisitInformation
    };
    this.patient = new BehaviorSubject(patient);
  }

  public getPatient(): Observable<any> {
    // return this.patient.asObservable();
    const patient = {
      patientInformation: {
        patientId: '1000'
      },
      triage: [{symptomId: 'SYMPT0003040', response: true}],
      additionalInformation: {
        definedIcdCodes: []
      },
      illnessInformation: {
        defined_illnesses: [],
        selected_illnesses: []
      },
      illness: {illness: ['1', '2'], illnessName: ['111', '222']},
      diagnosticEngine: testDiagnosticEngine,
      measurements: testPatientDataMeasurements,
      patientHealthHistory: testPatientHealthHistory
    };
    return ObservableOf(patient);
  }

  public getPatientLastValue(): any {
    // return this.patient.getValue();
    return {
      patientInformation: {
        patientId: '1000'
      },
      triage: [{symptomId: 'SYMPT0003040', response: true}],
      additionalInformation: {
        definedIcdCodes: []
      },
      illnessInformation: {
        defined_illnesses: [], selected_illnesses: []
      },
      illness: {illness: ['1', '2'], illnessName: ['111', '222']},
      diagnosticEngine: testDiagnosticEngine,
      measurements: testPatientDataMeasurements
    };
  }

  public getAudit(): Observable<any[]> {
    return ObservableOf([]);
  }

  public getList(): Observable<any[]> {
    return ObservableOf([]);
  }

  public getMedia(): any {
    return {mediaArray: [], specificMedia: []};
  }

  public getSummary(): Observable<any> {
    return ObservableOf({});
  }

  public saveDiagnosis(): Observable<any> {
    return ObservableOf({});
  }

  public saveSummary(...items): Observable<any> {
    return ObservableOf();
  }

  public refreshTreatment(): Observable<any> {
    return ObservableOf({
      additionalInformation: {
      knownDrugAllergies: [],
        knownDrugConflicts: [],
        knownPrecautionConflicts: []
    },
    output: testTreatmentEngine
  });
  }

  public updatePatient(updInfo: object): Observable<boolean> {
    this.patient.next(updInfo);
    return ObservableOf(true);
  }

  public unassign(): Observable<any> {
    return ObservableOf({});
  }

  public addConflicts(old, returned) {
  }

  public getDifferentialDiagnosis(): Observable<DDX> {
    return ObservableOf({
      DDXSummary: '',
      DDXCount: 0,
      DDXRawAnalysis: {
        'M79.602': {
          ICDName: 'Left Arm Pain',
          isSelected: true,
          explanation: '',
          affirmativeSymptoms: [],
          existenceQA: true,
          isCoveredByQA: true,
          ICDGroup: '',
          references: [],
          isDiagnosedByDE: true,
          expectedMDCs: []
        }
      }
    });
  }

  public updateDifferentialDiagnosis() {}
}

export class MockSymptomService {
  public getSymptomCategories(): any[] {
    return [{categoryID: ['CAT0001'], groupName: 'Physical'}, {categoryID: ['CAT0002'], groupName: 'Physical'}];
  }

  public getSymptomDescriptions(): any[] {
    return  [{
      EyeAcuity: {
        title: 'asd',
        values: [{
          code: '',
          name: '',
          m_antithesis: 1,
          count: 1,
          displayListValue: true
        }]
      }
    }];
  }

  public getParsedSymptoms(): Observable<any[]> {
    return ObservableOf([
        {symptomID: 'SYMPT0003040', criticality: 0.5, categoryID: 'CAT0001', displayDrApp: true, name: 'ps name', location: ['Whole Body'], snomedCodes: []}
      ]
    );
  }

  public getSymptoms(): void { }

  public searchParsedSymptom(): any {
    return {symptomID: 'SYMPT0003040', criticality: 0.5, categoryID: 'CAT0001', displayDrApp: true, name: 'ps name', location: ['Whole Body'], snomedCodes: []};
  }

  public loadGroupedSymptom(): void { }

  public getGroupedSymptomType(): string {
    return null;
  }

  public setSourceInfo(): void { }

  public getPresetTreatments(data: TreatmentEngine[]): TreatmentEngine[] {
    return data;
  }

  getGeneralSymptomsCategories(data): void {}
  getBodyParts(): any[] {
    return [{name: 'name', bodyPartsCodes: ['CAT0001']}];
  }
  getSymptomsCategoriesByFilter() { return []; }
  pharmacistSymptomsList(triage: Triage) { return triage; }
}

// tslint:disable-next-line:component-selector
@Component({selector: 'ph-questionnaires', template: 'Questionnaires Mock Component'})
export class MockQuestionnairesComponent {
  @Input() viewOnly: boolean;
  @Input() documentView = false;
  @Input() questionnaire: PharmacyAssessmentsEnum;
}


@Component({
  selector: 'pa-editable-text',
  template: 'Mock Editable Text Component'
})
export class MockEditableTextComponent {
  @Input() data: string | undefined;
  @Input() subtext: string | undefined;
  @Input() reviewed: boolean | undefined;
  @Input() examReviewed: boolean | undefined;
  @Input() multiline: boolean | undefined;
  @Input() illnessPresentation: string;
  @Input() maxLength: number;
  @Input() disabled: boolean;
  @Output() renamed = new EventEmitter<string>();
  @Output() editing = new EventEmitter<boolean>();
  @Output() reviewDialog = new EventEmitter<boolean>();
}
@Component({
  selector: 'pa-hpi-summary',
  template: 'Mock HPI Summary Component'
})
export class MockHPISummaryComponent {
  @Input() sourceName: string;
}

@Component({
  selector: 'pa-vitals-table',
  template: 'Mock Vitals Table Component'
})
export class MockVitalsTableComponent implements AfterViewInit {
  @Input() Patient: Data;
  @Input() vitalFieldClass: string;
  @Input() audits: AuditsDat;

  ngAfterViewInit(): void {
  }
}

@Component({
  selector: 'pa-labs-results',
  template: 'Mock Labs Results Component'
})
export class MockLabsResultsComponent implements OnInit {
  @Input() patient: Data;
  @Input() source: string;

  ngOnInit(): void {
  }
}

@Component({
  selector: 'pa-labs-recommended',
  template: 'Mock Labs Recommended Component'
})
export class MockLabsRecommendedComponent implements OnInit {
  @Input() recommendedLabs;
  @Input() triage: Triage[];
  @Input() source = 'labs';

  ngOnInit(): void {
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
  @Input() cardTitleBackground;
  @Output() change = new EventEmitter();
}


@Component({
  selector: 'pa-illness-group',
  template: 'Mock Illness Group Component'
})
export class MockIllnessGroupComponent implements OnDestroy, DoCheck {
  @Input() sortedAccordionGroups: string[];
  @Input() accordionGroups: {[key: string]: DiagnosticEngine[]};
  @Input() groupedContributors: {[key: string]: Contributor[]};
  @Input() expandedElements: {[key: string]: boolean};
  @Input() patientReviewed: Array<boolean>;
  @Input() WDView: Array<boolean>;
  @Input() title = '';
  @Output() illnessChange = new EventEmitter<string>();
  @Output() toggleRowChange = new EventEmitter<{icdGroupName: string, opened: boolean}>();
  @Output() reviewDialog = new EventEmitter();

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }
}


@Component({
  selector: 'pa-contributortable',
  template: 'Mock Contributor Table Component'
})
export class MockContributorTableComponent implements OnInit, OnChanges {
  @Input() source;
  @Input() infoSources;
  @Input() icd10GroupName;
  @Input() illnessPresentation;

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }
}

@Component({
  selector: 'pa-business-labs',
  template: 'Mock Business Labs Component'
})
export class MockBusinessLabsComponent {
  get saveButtonDisabled(): boolean { return true; }
  saveResults() { }
}


describe('MainComponent', generateSpecs({
    componentType: MainComponent,
    imports: [
      NavigationTestModule,
      DialogsTestModule,
      BrowserAnimationsModule,
      StoreTestModule.withoutMock([DataService, SymptomsService, StateService]),
      UserTestModule
    ],
    declarations: [
      MockContributorTableComponent,
      MockEditableTextComponent,
      MockVitalsTableComponent,
      MockLabsResultsComponent,
      MockLabsRecommendedComponent,
      MockItemListComponent,
      MockIllnessGroupComponent,
      MainComponent,
      MockHPISummaryComponent,
      SanitizerPipe,
      MockBusinessLabsComponent,
      MockQuestionnairesComponent
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
        provide: LabsService, useValue: { initPatientLabs: (triage) => null }
      }
    ]
  },
  (context: TestContext<MainComponent>) => {
    let dataService: DataService;
    let dialogService: DialogService;
    let stateService: StateService;
    let component: MainComponent;
    let userService: UserService;
    let store: Store;

    beforeEach(async(() => {
      dataService = TestBed.get(DataService);
      dialogService = TestBed.get(DialogService);
      stateService = TestBed.get(StateService);
      store = TestBed.get(Store);
      userService = TestBed.get(UserService);
    }));

    beforeEach(() => {
      // @ts-ignore
      store.dispatch(new InitAccordion(testDE as DiagnosticEngine[], testIllnessInformationDSD, testTriageDSD));
      component = context.component;
    });

    it('should add and delete and restore diagnosis', () => {
      component.reviewed = true;
      component.examReviewed = true;
      const illnessCount = component.selectedIllness.length;
      const DECount = component.diagnosticEngine.length;
      store.dispatch(new AddIllness('200', 'illness'));
      const illnessCountAfterAdded = component.selectedIllness.length;
      const DECountAfterAdded = component.diagnosticEngine.length;
      expect(illnessCountAfterAdded).toEqual(illnessCount + 1);
      expect(DECountAfterAdded).toEqual(DECount + 1);
      component.toggleSelection('200');
      const illnessCountAfterDeleted = component.selectedIllness.length;
      const DECountAfterDeleted = component.diagnosticEngine.length;
      expect(illnessCountAfterDeleted).toEqual(illnessCountAfterAdded - 1);
      expect(DECountAfterDeleted).toEqual(DECountAfterAdded);
      store.dispatch(new AddIllness('200', '200name'));
      const illnessCountAfterAddDeleted = component.selectedIllness.length;
      const DECountAfterAddDeleted = component.diagnosticEngine.length;
      expect(illnessCountAfterAddDeleted).toEqual(illnessCountAfterAdded);
      expect(DECountAfterAddDeleted).toEqual(DECountAfterAdded);
    });

    it('should check and uncheck illness', () => {
      component.reviewed = true;
      component.examReviewed = true;
      component.toggleSelection('N13.721');
      expect(component.diagnosticEngine.find(item => item.icd10 === 'N13.721').isSelected).toBeTruthy();
      component.toggleSelection('N13.721');
      expect(component.diagnosticEngine.find(item => item.icd10 === 'N13.721').isSelected).toBeFalsy();
    });

    it('should expand group', () => {
      store.dispatch(new ToggleGroup('Acute laryngitis and tracheitis', true));
      const expanded = component.expandedElements['Acute laryngitis and tracheitis'];
      expect(expanded).toBeTruthy();
    });

    it('should add diagnosis', () => {
      const count = component.diagnosticEngine.length;
      store.dispatch(new AddIllness('3', 'name'));
      expect(component.diagnosticEngine.length).toEqual(count + 1);
    });

    it('should show full audit image', () => {
      // todo: @types/jasmine update error
      // @ts-ignore
      const dialog = spyOn(dialogService, 'custom').and.returnValue(ObservableOf([]));
      component.showFullImg({bodyPart: 'ENT', data: [{value: {fileBlob: ''}}], audits: [{}]}, false, 0);
      expect(dialog).toHaveBeenCalled();
    });

    it('should change primary diagnosis', () => {
      let illnessDE = component.diagnosticEngine.find(item => item.icd10 === 'E11.8');
      let illness = component.selectedIllness.find(item => item.icd10_code === 'E11.8');
      let primaryIllnessDE = component.diagnosticEngine.find(item => item.isPrimary);
      let primaryIllness = component.selectedIllness.find(item => item.is_primary);
      expect(primaryIllnessDE.isSelected).toBeTruthy();
      expect(illnessDE.isSelected).toBeTruthy();
      expect(illnessDE.isPrimary).toBeFalsy();
      expect(illness.is_primary).toBeFalsy();
      store.dispatch(new SelectPrimary('E11.8'));
      illnessDE = component.diagnosticEngine.find(item => item.icd10 === 'E11.8');
      illness = component.selectedIllness.find(item => item.icd10_code === 'E11.8');
      primaryIllnessDE = component.diagnosticEngine.find(item => item.icd10 === primaryIllnessDE.icd10);
      primaryIllness = component.selectedIllness.find(item => item.icd10_code === primaryIllness.icd10_code);
      expect(illnessDE.isSelected).toBeTruthy();
      expect(illnessDE.isPrimary).toBeTruthy();
      expect(primaryIllnessDE.isPrimary).toBeFalsy();
      expect(primaryIllness.is_primary).toBeFalsy();
      expect(illness.is_primary).toBeTruthy();
    });

    // it('should show Please select primary illness message', () => {
    //   stateService.patient.setReviewed('reviewed');
    //   stateService.patient.setViewOnly(false);
    //   spyOnProperty(userService, 'getUserRole').and.returnValue(UserRolesEnum.PRACTITIONER);
    //   component.examReviewed = true;
    //   context.detectChanges();
    //
    //   const primaryIllness = component.selectedIllness.find(item => item.is_primary);
    //   const primaryAccordionItem = component.DiagnosisAccordion.find(item => item.icd10.includes(primaryIllness.icd10_code))
    //     .data.find(item => item.icd10 === primaryIllness.icd10_code);
    //   store.dispatch(new SelectIllness(primaryAccordionItem));
    //   const reviewDialog = spyOn(component, 'reviewDialog');
    //   const openConfirmDialog = spyOn(component, 'openConfirmDialog');
    //   const selectPrimaryDialog = spyOn(dialogService, 'open');
    //   context.detectChanges();
    //
    //   component.confirmDiagnosis();
    //   expect(reviewDialog).not.toHaveBeenCalled();
    //   expect(openConfirmDialog).not.toHaveBeenCalled();
    //   expect(selectPrimaryDialog).toHaveBeenCalled();
    // });

    xit('should confirm diagnosis only once', () => {
      component.changeTab.subscribe(event => {
        console.warn(event);
      });
      stateService.patient.setReviewed('reviewed');
      stateService.patient.setViewOnly(false);
      spyOnProperty(userService, 'getUserRole').and.returnValue(UserRolesEnum.PRACTITIONER);
      component.examReviewed = true;
      context.detectChanges();

      const reviewDialog = spyOn(component, 'reviewDialog');
      const confirmDialog = spyOn(dialogService, 'open').and.returnValue(ObservableOf(true));
      component.confirmDiagnosis();

      expect(reviewDialog).not.toHaveBeenCalled();
      expect(confirmDialog).toHaveBeenCalled();
      context.detectChanges();

      expect(component.confirmed).toBeTruthy();
      expect(component.edited).toBeFalsy();
      component.confirmDiagnosis();
      expect(reviewDialog).not.toHaveBeenCalled();
      expect(confirmDialog).toHaveBeenCalledTimes(1);
    });
  }
));
