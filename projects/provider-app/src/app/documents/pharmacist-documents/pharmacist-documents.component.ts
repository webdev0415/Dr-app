import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';
import { StateBottomButtons } from 'components/app/workspace/patientspace/bottom-space/interfaces';
import { BaseDocumentsContainerComponent } from 'documents/base-documents-container/base-documents-container.component';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { PatientProfileService } from '../../../../../patient-profile/src/lib/services/patient-profile.service';
import { flatten } from 'ramda';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, pluck, take, takeUntil } from 'rxjs/operators';
import { LazyService, NavigationService, StateService } from 'services';
import { Detail} from 'treatments/treatments.interface';
import { TreatmentsService } from 'treatments/treatments.service';
import { UserService } from 'user/user.service';
import { GENERATOR_CONTEXT, LOADER } from '../../../../../documents-generator/src/lib/static';
import {
  DE_INFORMATION,
  DRUG_INFORMATION,
  PATIENT_DATA_PROVIDER,
  PATIENT_PROFILE_SERVICE
} from '../../../../../pharmacist/src/lib/providers';
import { QuestionnaireService } from '../../../../../pharmacist/src/lib/questionnaire.service';
import { GeneratorContext } from '../../../../../documents-generator/src/lib/generator-context.model';
import { DrugInformation } from 'treatments/treatments.interface';
import { SentryErrorHandler } from '../../utils/sentryErrorHandler';
import { DrugInformationProvider } from '../models/drug-information.model';

@Component({
  selector: 'pa-pharmacist-documents',
  templateUrl: './pharmacist-documents.component.html',
  styleUrls: ['./pharmacist-documents.component.scss'],
  providers: [
    { provide: LOADER, useFactory: (): BehaviorSubject<boolean> => new BehaviorSubject<false>(false) },
    { provide: GENERATOR_CONTEXT, useFactory: () => new BehaviorSubject<GeneratorContext>(new GeneratorContext({ multiPage: true })) },
    { provide: PATIENT_PROFILE_SERVICE, useExisting: PatientProfileService },
    { provide: PATIENT_DATA_PROVIDER, useExisting: PatientDataFacadeService },
    { provide: DE_INFORMATION, useFactory: () => new BehaviorSubject<DiagnosticEngine[]>([]) },
    { provide: DRUG_INFORMATION, useClass: DrugInformationProvider },
    { provide: QuestionnaireService, useClass: QuestionnaireService, deps: [PatientDataFacadeService, DE_INFORMATION, SentryErrorHandler] }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmacistDocumentsComponent extends BaseDocumentsContainerComponent {
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

    @Inject(DRUG_INFORMATION) drugInformationProvider: DrugInformationProvider,
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
    this.treatmentsService.observe(state => state.drugInformation).pipe(map((drugInformation: DrugInformation[]) => {
      const selectedDrugs: Detail[] = flatten(this.treatmentsService.selectSnapshot().viewModelTreatments.filter(item => !item.forceHide && (item.type === 'Prescription Drugs' || item.type === 'OTC Drugs')).map(treatments => treatments.details.filter(item => item.isSelected)));
      return drugInformation.filter(drug => selectedDrugs.find(item => item.name.toLowerCase() === drug.drugName.toLowerCase()));
    }), takeUntil(this._destroy$)).subscribe(data => drugInformationProvider.drugInformation = data);
  }

  public get locationName(): Observable<string> {
    return this.stateService.patient.getCurrent().pipe(filter(patient => !!patient), pluck('location_name'), take(1));
  }

  public get businessName(): string {
    return this.userService.getUserData.environment.business_name;
  }

  public get providerName(): string {
    return this.userService.getUserData.full_name;
  }

  public showPdf(pdf: string): void {
    this.stateService.patient.watchFinalizeProcessSucceed().pipe(take(1), filter(succeed => !!succeed)).subscribe(() => {
      this.stateService.app.pdf.emitPdfEvent(pdf);
    });
  }

  public uploadForm(file: File): void {
    this.pdfFiles = { questionnaire: file, summary: file };
    this.uploadDocument();
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      previous: true,
      finalize: true
    };
  }

  getDisabledBottomButtons(): StateBottomButtons {
    return {
      previous: this.generationLoader.getValue(),
      finalize: this.generationLoader.getValue()
    };
  }

  onClickBottomButton(nameButton: string): void {
    switch (nameButton) {
      case ('previous'):
        this.navigationService.goBack();
        break;
      case ('finalize'):
        this.generatePdfView.emit(`${this.patientDataService.patientId}-pharmacy-questions.pdf`);
        break;
    }
  }
}
