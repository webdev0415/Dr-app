import {
  ChangeDetectorRef,
  Component,
  Inject
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Configuration } from 'app.config';
import { AvailableLanguageTypesEnum } from 'common/enums';
import { UserRolesEnum } from 'common/enums/user-roles.enum';
import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';
import { DDX } from 'common/models/additional-doctor-notes.interface';
import { Data, PaymentInfo } from 'common/models/data.model';
import { Translation } from 'common/models/translation.model';
import { DocumentFinalizeFiles, DocumentType } from 'common/types/documents.type';
import { KioskModeType } from 'common/types/kiosk-mode.type';
import { StateBottomButtons } from 'components/app/workspace/patientspace/bottom-space/interfaces';
import { DischargeInstruction, ReturnToSchoolWork } from 'discharge/discharge.interface';
import { BaseDocumentsContainerComponent } from 'documents/base-documents-container/base-documents-container.component';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import {
  PatientContactInformation,
  PatientProfile,
  PatientProfileData,
  PatientUserData
} from '../../../../../patient-profile/src/lib/interfaces';
import { PatientProfileService } from '../../../../../patient-profile/src/lib/services/patient-profile.service';
import * as R from 'ramda';
import { BehaviorSubject, defer, Observable, of } from 'rxjs';
import {
  concatMap, delay,
  filter, finalize,
  map,
  mergeMap,
  pluck,
  take,
  takeUntil,
  tap
} from 'rxjs/operators';
import { LazyService, NavigationService, PatientdataService, StateService } from 'services';
import { MeasurementsService } from 'services/measurements.service';
import { defaultDischargeNotes, defaultSportsExam } from 'static/patient.constants';
import { TreatmentsService } from 'treatments/treatments.service';
import { UserService } from 'user/user.service';
import { AdjustTimezonePipe } from 'utils/timezone-date.pipe';
import { GENERATOR_CONTEXT, LOADER } from '../../../../../documents-generator/src/lib/static';
import { DE_INFORMATION } from '../../../../../pharmacist/src/lib/providers';
import { DocumentsService } from '../../../../../provider-documents/src/lib/services/documents.service';
import { GeneratorContext } from '../../../../../documents-generator/src/lib/generator-context.model';

@Component({
  selector: 'pa-practitioner-documents',
  templateUrl: './practitioner-documents.component.html',
  styleUrls: ['./practitioner-documents.component.scss'],
  providers: [
    { provide: LOADER, useFactory: (): BehaviorSubject<boolean> => new BehaviorSubject<false>(false) },
    { provide: GENERATOR_CONTEXT, useFactory: () => new BehaviorSubject<GeneratorContext>(new GeneratorContext({})) },
    { provide: DE_INFORMATION, useFactory: () => new BehaviorSubject<DiagnosticEngine[]>([]) }
  ],
})
export class PractitionerDocumentsComponent extends BaseDocumentsContainerComponent {
  public ddx$: Observable<DDX> = this.dataService.getDifferentialDiagnosis();
  public Patient$: Observable<Data> = this.dataService.getPatient().pipe(filter(patient => !!patient), map(patient => {
    if (!patient.dischargeNotes) patient.dischargeNotes = {
      saved: false,
      data: R.clone(defaultDischargeNotes)
    };
    if (!patient.sportsExam) patient.sportsExam = {
      saved: false,
      data: R.clone(defaultSportsExam)
    };
    if (R.isNil(patient.dischargeNotes.data.notes)) patient.dischargeNotes.data.notes = [patient.additionalInformation.schoolNotes, patient.additionalInformation.workNotes].join('\n\n').trim();
    return patient;
  }));
  public patientListEntity$: Observable<PatientListEntity> = this.stateService.patient.getCurrent().pipe(filter(data => !!data), tap(patientEntity => this.completedDoctor = patientEntity.doctor_name));
  public kioskMode: KioskModeType = this.userService.getUserData.environment.business_name.includes('fastmed') ? 'FASTMED' : 'AKOS';
  public completedDoctor: string;
  public preFinalizeEmitted: boolean = this.activatedRoute.snapshot.queryParamMap.get('prefinalized') === 'true';
  public isFinalizePDFGenerating: boolean;

  public parsedSymptoms = this.activatedRoute.snapshot.data.parsedSymptoms;
  public symptomCategories = this.activatedRoute.snapshot.data.symptomCategories;

  public date$: Observable<string> = this.Patient$.pipe(pluck('visitInformation'), pluck('locationTimezone'), map(locationTimezone => {
    const now = new AdjustTimezonePipe().transform(new Date(), locationTimezone);
    return `${('0' + (now.getMonth() + 1)).slice(-2)}/${('0' + now.getDate()).slice(-2)}/${now.getFullYear()}`;
  }));

  // todo: move translation staff to related components
  protected config: Configuration = new Configuration;
  public isAuthoSpanish = false;
  public isDischargeSpanish = false;
  public authorizeWorkTranslationList: Translation[] = this.config.authorizeWorkTranslationList;
  public dischargeNoteTranslationList: Translation[] = this.config.dischargeNoteTranslationList;

  public paymentInfo$: Observable<PaymentInfo> = this.stateService.patient.getPaymentInfo();

  private _pdfFiles: BehaviorSubject<DocumentFinalizeFiles> = new BehaviorSubject<DocumentFinalizeFiles>({});
  private _section: BehaviorSubject<DocumentType> = new BehaviorSubject<DocumentType>(this.activatedRoute.snapshot.queryParamMap.get('section') as DocumentType);

  constructor(
    patientDataService: PatientDataFacadeService,
    stateService: StateService,
    treatmentsService: TreatmentsService,
    activatedRoute: ActivatedRoute,
    navigationService: NavigationService,
    userService: UserService,
    lazyLoader: LazyService,
    @Inject(LOADER) generationLoader: BehaviorSubject<boolean>,
    @Inject(DE_INFORMATION) DEInformation: BehaviorSubject<DiagnosticEngine[]>,
    @Inject(GENERATOR_CONTEXT) generatorContext: BehaviorSubject<GeneratorContext>,
    private patientProfileService: PatientProfileService,
    private dataService: PatientdataService,
    public measurementsService: MeasurementsService,
    private documentsService: DocumentsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super(
      patientDataService,
      stateService,
      treatmentsService,
      activatedRoute,
      navigationService,
      userService,
      lazyLoader,
      generationLoader,
      DEInformation
    );
    if (this.section === 'summary') this.generationLoader.pipe(takeUntil(this._destroy$)).subscribe(loading => this.isFinalizePDFGenerating = loading);
    this.activatedRoute.queryParams.pipe(takeUntil(this._destroy$), pluck('section')).subscribe((section) => this.section = section);
    this.section$.pipe(takeUntil(this._destroy$)).subscribe(section => {
      generatorContext.next(new GeneratorContext({
        multiPage: section === 'summary',
        hideBrElements: section === 'sports',
        pageBreakMethod: section === 'sports' ? {after: ['#rounded-personal-info'], avoid: ['#docbody doc']} : {mode: ['css', 'avoid-all']}
      }));
    });
  }

  private get isActiveSectionDocument(): boolean { return this.section === this.activatedRoute.snapshot.queryParamMap.get('section'); }

  protected get pdfFiles(): DocumentFinalizeFiles {
    return this._pdfFiles.getValue();
  }

  protected set pdfFiles(files: DocumentFinalizeFiles) {
    if (!this._pdfFiles) return;
    this._pdfFiles.next(files);
  }

  public set section(section: DocumentType) {
    this._section.next(section);
  }

  public get section$(): Observable<DocumentType> {
    return this._section.asObservable();
  }

  public get section(): DocumentType {
    return this._section.getValue();
  }

  public uploadForm(file: File): void {
    this.pdfFiles = {...this.pdfFiles, [this.section]: file};
    this.uploadDocument();
  }

  public showPdf(pdf: string): void {
    if (!this.isActiveSectionDocument) return;
    if (this.section === 'summary' && this.preFinalizeEmitted) this.stateService.patient.watchFinalizeProcessSucceed().pipe(take(1), filter((finalizeSuccess: boolean) => finalizeSuccess)).subscribe(() => {
      this.stateService.app.pdf.emitPdfEvent(pdf);
      this.pdfFiles = {};
    });
    else {
      this._pdfFiles.asObservable().pipe(pluck(this.section), filter(file => !!file), take(1), mergeMap(file => this.documentsService.uploadDocument(this.section === 'authorization' ? 'return_to_work' : this.section, String(this.patientDataService.patientId), file))).subscribe(() => {
        this.stateService.app.pdf.emitPdfEvent(pdf);
        this.pdfFiles = {};
      });
    }
  }

  protected uploadDocument(): void {
    if (this.isActiveSectionDocument && this.preFinalizeEmitted) {
      this.finalizeVisit();
    }
  }

  private finalizeRoutine(): void {
    this.stateService.patient.watchFinalizeProcessSucceed().pipe(take(1), filter(succeed => !succeed)).subscribe(() => this.pdfFiles = {});

    of('discharge', 'authorization', 'summary').pipe(
      concatMap((section: DocumentType) => {
        return defer(() => {
          this.section = section;
          this.changeDetectorRef.markForCheck();
          setTimeout(() => this.generatePdfView.emit(`${this.patientDataService.patientId}-${section}.pdf`));
          return this._pdfFiles.asObservable().pipe(
            pluck(this.section),
            filter(file => !!file),
            take(1),
            delay(100),
            finalize(() => this.changeDetectorRef.detectChanges())
          );
        });
      }),
      mergeMap(() => this._pdfFiles.asObservable()),
      filter(files => Object.keys(files).length === 3),
      take(1),
      mergeMap(() => this.stateService.patient.watchFinalizeProcessSucceed().pipe(filter(succeed => succeed))),
      takeUntil(this.stateService.patient.watchFinalizeProcessSucceed()),
      finalize(() => this.pdfFiles = {})
    ).subscribe();
  }

  public patientProfileData$(which: 'patientProfile' | 'contactRecord'): Observable<PatientProfileData | PatientProfile | PatientContactInformation | PatientUserData> {
    return this.patientProfileService.patientProfileData$(which);
  }

  public get RTWSInfo(): { data: ReturnToSchoolWork, isUsed: boolean } {
    return {
      data: this.treatmentsService.selectSnapshot().returnToWorkSchool,
      isUsed: this.treatmentsService.RTWSSelected
    };
  }

  /**
   * translate
   *
   * @param {AvailableLanguageTypesEnum} lang - Language to translate to.
   * @param {Translation[]} convertList - Array of terms to translate to / from
   *
   * Translate all the given terms in the convertList
   * (found by the selector for the term) to the Language specified.
   */
  public translate(lang = AvailableLanguageTypesEnum.SPANISH, convertList = this.dischargeNoteTranslationList): void {
    const switchedToSpanish = lang !== AvailableLanguageTypesEnum.ENGLISH;
    if (this.section === 'authorization') {
      this.isAuthoSpanish = switchedToSpanish;
      this.documentsService.setAuthorizationSpanish = switchedToSpanish;
    } else if (this.section === 'discharge') {
      this.isDischargeSpanish = switchedToSpanish;
      this.documentsService.setDischargeSpanish = switchedToSpanish;
    }

    convertList.filter(clause => clause.languageKey === lang).forEach(phrase => {
      const el = document.querySelector(phrase.selector);
      if (el) el.innerHTML = phrase.term;
    });
  }

  onClickNA() {
    if (this.isDischargeSpanish) setTimeout(() => this.translate());
  }

  public get dischargeInstructions(): { articles: DischargeInstruction[], custom: string } {
    return { articles: this.treatmentsService.selectSnapshot().dischargeInstructions, custom: this.treatmentsService.selectSnapshot().customInstructions };
  }

  public reportArticleReview(article: DischargeInstruction): void {
    this.documentsService.reportArticleReview([article]);
  }

  public documentUpdate(event: { section: string, data: any }): void {
    this.dataService.updatePatient({dischargeNotes: {data: event.data}});
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      authorizationSpanish: Boolean(!this.isAuthoSpanish && this.section === 'authorization' && !this.isFinalizePDFGenerating),
      authorizationEnglish: Boolean(this.isAuthoSpanish && this.section === 'authorization' && !this.isFinalizePDFGenerating),
      dischargeSpanish: Boolean(!this.isDischargeSpanish && this.section === 'discharge' && !this.isFinalizePDFGenerating),
      dischargeEnglish: Boolean(this.isDischargeSpanish && this.section === 'discharge' && !this.isFinalizePDFGenerating),
      generatePDF: Boolean((this.section !== 'summary' || (this.userRole !== 'practitioner') || this.stateService.patient.getLastViewOnly()) && !this.isFinalizePDFGenerating),
      previous: Boolean(this.userRole === UserRolesEnum.PRACTITIONER && this.section === 'summary' && !this.isFinalizePDFGenerating),
      finalize: Boolean(this.userRole === UserRolesEnum.PRACTITIONER && this.section === 'summary' && this.preFinalizeEmitted && !this.isFinalizePDFGenerating)
    };
  }

  onClickBottomButton(nameButton: string): void {
    switch (nameButton) {
      case ('authorizationSpanish'):
        this.translate(AvailableLanguageTypesEnum.SPANISH, this.authorizeWorkTranslationList);
        break;
      case ('authorizationEnglish'):
        this.translate(AvailableLanguageTypesEnum.ENGLISH, this.authorizeWorkTranslationList);
        break;
      case ('dischargeSpanish'):
        this.translate();
        break;
      case ('dischargeEnglish'):
        this.translate(AvailableLanguageTypesEnum.ENGLISH);
        break;
      case ('generatePDF'):
        this.generatePdfView.emit(`${this.patientDataService.patientId}-${this.section}.pdf`);
        break;
      case ('previous'):
        this.navigationService.goBack();
        break;
      case ('finalize'):
        this.finalizeRoutine();
        break;
    }
  }

  public get userRole(): UserRolesEnum { return this.userService.getUserRole; }

}
