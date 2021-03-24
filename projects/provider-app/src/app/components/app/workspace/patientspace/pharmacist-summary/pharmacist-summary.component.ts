import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject, zip } from 'rxjs';
import { defaultIfEmpty, filter, first, map, switchMap, takeUntil } from 'rxjs/operators';
import { CollapseComponent } from 'ng-uikit-pro-standard';
import { pick } from 'ramda';


import { DiagnosticEngine, SelectedIllness } from 'common/interfaces/diagnostic-engine.interface';
import { SentryErrorHandler } from '../../../../../utils/sentryErrorHandler';
import { BottomButtonsControl, StateBottomButtons } from '../bottom-space/interfaces';
import { BusinessLabsComponent } from 'labs/business-labs/business-labs.component';
import { PatientdataService, ServicedataService, SymptomsService } from 'services';
import { Data } from 'common/models/data.model';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { MediaModel } from 'common/models/media.model';
import { VitalsTableComponent } from 'components/shared/vitals-table/vitals-table.component';
import { PatientDataSection } from 'common/types/patient-data-section.type';
import { HistoryTypesEnums } from 'common/enums';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogService } from 'services/app/dialog.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { NodeSearchTypeEnum } from 'common/enums/node-search-type.enum';
import { PharmacistReasonsEnum } from '../../../../../../../../pharmacist/src/lib/enum/pharmacist-reasons.enum';
import { PharmacistDiagnosisEnum } from '../../../../../../../../pharmacist/src/lib/enum/pharmacist-diagnosis.enum';
import { PharmacistRecommendations } from '../../../../../../../../pharmacist/src/lib/interfaces/pharmacist-recommendations.interface';
import { PharmacistOverviewSectionTypesEnum } from '../../../../../../../../pharmacist/src/lib/enum/pharmacist-overview-section-types.enum';
import { QuestionnaireService } from '../../../../../../../../pharmacist/src/lib/questionnaire.service';
import { PhysicalAssessmentInterface } from '../../../../../../../../pharmacist/src/lib/interfaces/physical-assessment.interface';
import { DE_INFORMATION, PATIENT_DATA_PROVIDER, PATIENT_PROFILE_SERVICE } from '../../../../../../../../pharmacist/src/lib/providers';
import { PharmacyAssessmentsEnum } from '../../../../../../../../pharmacist/src/lib/enum/pharmacy-assessments.enum';

import { PatientProfileService } from '../../../../../../../../patient-profile/src/lib/services/patient-profile.service';

@Component({
  selector: 'pa-pharmacist-summary',
  templateUrl: './pharmacist-summary.component.html',
  styleUrls: ['../main/main.component.scss', './pharmacist-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: PATIENT_PROFILE_SERVICE, useExisting: PatientProfileService},
    {provide: PATIENT_DATA_PROVIDER, useExisting: PatientDataFacadeService},
    {provide: QuestionnaireService, useClass: QuestionnaireService, deps: [PatientDataFacadeService, DE_INFORMATION, SentryErrorHandler]}
  ]
})
export class PharmacistSummaryComponent implements OnInit, BottomButtonsControl, AfterViewInit, OnDestroy {
  @Input() selectedIllnesses: SelectedIllness[];
  @Input() viewOnly: boolean;
  @Output() exitPatientFile: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() continueWithTreatments: EventEmitter<null> = new EventEmitter<null>();
  @Output() updateDiagnosis: EventEmitter<{icd10Code: string, name: string}> = new EventEmitter<{icd10Code: string, name: string}>();

  @ViewChild('labs') labs: BusinessLabsComponent;
  @ViewChild('vitals', {static: true}) vitals: VitalsTableComponent;

  @ViewChild('overview') overview: TemplateRef<Node>;
  @ViewChild('questionnaire') questionnaire: TemplateRef<Node>;
  @ViewChild('assessment') assessment: TemplateRef<Node>;
  @ViewChild('businessLabs') businessLabs: TemplateRef<Node>;

  @ViewChildren(CollapseComponent) collapses: QueryList<CollapseComponent>;

  public toggleState: {[key in keyof Partial<PharmacistSummaryComponent>]: boolean} = {overview: true, vitals: true, questionnaire: true, assessment: true, businessLabs: true};


  public mediaModel: MediaModel;
  public Patient: Data;
  public readonly QuestionnairesEnum = PharmacyAssessmentsEnum;
  public patientHealthHistorySections: PatientDataSection = this.symptomsService.healthHistorySections;
  public pharmacistOverviewSectionTypesEnum = PharmacistOverviewSectionTypesEnum;

  public pharmacistRecommendation$: Observable<PharmacistRecommendations> = this.patientCoreService.pharmacistRecommendation$;
  public physicalAssessment$: Observable<PhysicalAssessmentInterface[]> = this.questionnaireService.physicalAssessment$.pipe(filter(data => !!data), defaultIfEmpty([]), map(data => data.filter(item => item.passed === false)));
  private finalizeDisabled = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private symptomsService: SymptomsService,
              private patientCoreService: PatientDataFacadeService,
              private activeRoute: ActivatedRoute,
              private patientDataService: PatientdataService,
              private cdRef: ChangeDetectorRef,
              private dialogService: DialogService,
              private dialogSubscribesService: DialogSubscribesService,
              private serviceDataService: ServicedataService,
              private ngZone: NgZone,
              private questionnaireService: QuestionnaireService,
              private patientProfileService: PatientProfileService
  ) { }

  ngOnInit(): void {
    this.patientDataService.getPatient().pipe(filter(data => !!data), takeUntil(this.destroy$)).subscribe(data => {
      this.Patient = data;
      const historyItems = this.Patient.patientHealthHistory.historyItem;
      this.patientHealthHistorySections.personalHistory.data = historyItems.filter(item => this.patientHealthHistorySections.personalHistory.list.find(listItem => listItem.symptomID === item.symptomID));
      this.patientHealthHistorySections.drugAllergies.data = historyItems.filter(item => item.symptomID === HistoryTypesEnums['MEDICATION-ALLERGIES']);
    });
    this.mediaModel = this.activeRoute.snapshot.data.media;
    if (!this.selectedIllnesses.length) {
      this.patientDataService.getPatient().pipe(filter(data => !!data), first()).subscribe(data => {
        const icdCode = PharmacistDiagnosisEnum[data.visitInformation.detailVisitReason];
        if (icdCode) {
          this.serviceDataService.nodeSearch(icdCode, NodeSearchTypeEnum.ICD, false).subscribe(searchResult => {
            let diagnosis = searchResult.nodes[0];
            if (!diagnosis) diagnosis = {name: this.visitReason, icd10Code: icdCode};
            this.updateDiagnosis.emit(diagnosis);
          });
        }
      });
    }
    this.pharmacistRecommendation$.pipe(takeUntil(this.destroy$)).subscribe(recommendations => {
      if (!recommendations) {
        this.finalizeDisabled = true;
        return;
      }
      this.finalizeDisabled = !(recommendations.passed && recommendations.rulesetTested !== 'albertsons-visit-reason');
    });
  }

  ngAfterViewInit(): void {
    this.pharmacistRecommendation$.pipe(filter(data => !!data), first()).subscribe((recommendations: PharmacistRecommendations) => {
      this.ngZone.runOutsideAngular(() => Object.keys(this.toggleState).forEach((key: keyof PharmacistSummaryComponent) => {
        let stayClosed = true;
        switch (key) {
          case 'overview':
            stayClosed = recommendations.ruleData.symptomsPresent.passed;
            break;
          case 'questionnaire':
            stayClosed = recommendations.ruleData.baseQuestions.passed;
            break;
          case 'assessment':
            stayClosed = recommendations.ruleData.screening.passed;
            break;
          case 'vitals':
            stayClosed = recommendations.ruleData.measurements.passed;
            break;
        }
        if (!stayClosed) setTimeout(() => this.toggle(key));
      }));
    });
    // zip(this.pharmacistRecommendation$.pipe(filter(data => !!data), first()),
    //   this.patientDataService.getPatient(),
    //   this.patientProfileService.patientProfileData$()).subscribe(([pharmacistRecommendations, visitData, patientProfile]) => {
    //   console.log(JSON.stringify({visitData: visitData, patientProfile: patientProfile, pharmacistRecommendations: pharmacistRecommendations, businessName: 'PRINTING TEST', patientInsurance: []}));
    // });
  }

  public get chiefCompliant(): string {
    return this.Patient.visitInformation.detailVisitReason;
  }

  public get visitReason(): PharmacistReasonsEnum {
    if (this.Patient) return PharmacistReasonsEnum[this.Patient.visitInformation.detailVisitReason];
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      exitPatient: true,
      unableToTreat: true,
      referToClinic: true,
      continueWithTreatment: true
    };
  }

  onClickBottomButton(nameButton: string): void {
    switch (nameButton) {
      case 'continueWithTreatment': {
        this.continueWithTreatments.emit();
        break;
      }
      case 'exitPatient': {
        this.exitPatientFile.emit();
        break;
      }
      case 'unableToTreat': {
        this.dialogService.open<boolean>(PpcustomdialogComponent, this.dialogSubscribesService.getConfig({ message: 'Approve and sign notes ?', isDialog: true })).pipe(filter(response => !!response)).subscribe(() => {
          const selectedIllness = this.selectedIllnesses.find(item => item.is_primary);
          const payload = Object.assign(selectedIllness ? pick(['icd10_code', 'icd10_name'], selectedIllness) : {}, {session_key: this.patientCoreService.sessionKey});
          const closeRequest: Observable<{detail: string}> = this.patientDataService.closePatient(String(this.patientCoreService.patientId), payload);
          this.patientCoreService.unassign(this.patientCoreService.patientId).pipe(switchMap(unassignResult => closeRequest)).subscribe(() => {
            this.exitPatientFile.emit(true);
          });
        });
        break;
      }
      case 'referToClinic': {
        this.dialogService.open<boolean>(PpcustomdialogComponent, this.dialogSubscribesService.getConfig({ message: 'Refer patient to clinic ?', isDialog: true })).pipe(filter(response => !!response)).subscribe(() => {
          this.patientCoreService.finalizeWithState().pipe(switchMap(() => this.patientCoreService.unassign(this.patientCoreService.patientId))).subscribe(() => {
            this.exitPatientFile.emit(true);
          });
        });
        break;
      }
    }
  }

  getDisabledBottomButtons(): StateBottomButtons {
    return {
      exitPatient: false,
      unableToTreat: false,
      referToClinic: false,
      continueWithTreatment: this.finalizeDisabled
    };
  }

  public toggle(group: keyof PharmacistSummaryComponent): void {
    // @ts-ignore
    this.toggleState[group] = !this.toggleState[group];
    const collapseIndex = Object.keys(this.toggleState).findIndex(key => key === group);
    this.collapses.find((item, index) => index === collapseIndex).toggle();
  }

  public getSectionNumber(group: keyof PharmacistSummaryComponent): number {
    return Object.keys(this.toggleState).findIndex(key => key === group) + 1;
  }

  public get scoringFailed(): Observable<boolean> {
    return this.questionnaireService.scoringTooLow;
  }

  public get scoringBreakdown(): Observable<{ recommendations: string[]; currentScore: number; minimumScore: number }> {
    return this.questionnaireService.scoringBreakdown;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.cdRef.detach();
  }

}
