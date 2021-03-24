import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, PLATFORM_ID, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';
import { Date } from 'sugar';

import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';

import { QuestionnairesHeaderData } from '../interfaces/questionnaires-header-data.interface';
import { DRUG_INFORMATION, DrugInformationService } from '../providers';
import { QuestionnaireService } from '../questionnaire.service';

import { DrugInformation } from '../side-models/common/interfaces/treatment/drug-information.interface';


import { PatientContactInformation, PatientProfile } from '../side-models/patient-profile/interfaces';
import { Photo } from '../side-models/patient-profile/interfaces/photo.interface';
import { SocialCard } from '../side-models/patient-profile/social-card.model';

@Component({
  selector: 'ph-questionnaires-footer',
  templateUrl: './questionnaires-footer.component.html',
  styleUrls: ['./questionnaires-footer.component.scss']
})
export class QuestionnairesFooterComponent implements OnDestroy {
  @Input() insuranceCard$: Observable<Array<Array<Photo & { side: 'FRONT' | 'BACK'; blob: SafeResourceUrl }>>>;
  @Input() questionnaire: PharmacyAssessmentsEnum;
  @Input() patientInformation$: Observable<QuestionnairesHeaderData<PatientProfile & PatientContactInformation & { phone: string }>>;
  @Input() practitionerName: string;
  @Input() socialCard$: Observable<SocialCard>;
  @Input() userSignature: TemplateRef<HTMLDivElement>;

  public drugInformation$: Observable<DrugInformation[]> = this.drugInformationService.drugInformation$;
  public hfaPrescription: string;
  public readonly date: string = new Date().raw.toDateString();
  public readonly PharmacyAssessmentsEnum = PharmacyAssessmentsEnum;
  public isPlatformBrowser: boolean;

  constructor(
    private questionnaireService: QuestionnaireService,
    @Inject(DRUG_INFORMATION) private drugInformationService: DrugInformationService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) platformId
  ) {
    this.hfaPrescription = this.questionnaireService.hfaPrescription;
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

  public get followUpTableShow(): boolean {
    return [this.PharmacyAssessmentsEnum['STREP-THROAT'], this.PharmacyAssessmentsEnum['COLD-SORES'], this.PharmacyAssessmentsEnum['COLD-FLU'], this.PharmacyAssessmentsEnum.UTI].includes(this.questionnaire);
  }

  public get showFaxedDate(): boolean {
    return [this.PharmacyAssessmentsEnum['FLU-SHOT'], this.PharmacyAssessmentsEnum['STREP-THROAT'], this.PharmacyAssessmentsEnum['COLD-FLU']].includes(this.questionnaire);
  }

  ngOnDestroy(): void {
    this.questionnaireService.hfaPrescription = this.hfaPrescription;
  }

  public sanitizeImage(image: SafeResourceUrl): SafeResourceUrl {
    if (image) return this.sanitizer.bypassSecurityTrustResourceUrl(image['changingThisBreaksApplicationSecurity']);
    return null;
  }

  public get pharmacyAddres$(): Observable<string> {
    return this.socialCard$.pipe(filter(card => !!card), pluck('pharmacyAddress'));
  }

  public get prescriptionBlockId(): string {
    switch (this.questionnaire) {
      case PharmacyAssessmentsEnum['COLD-SORES']:
        return 'prescription-information-m';
      case PharmacyAssessmentsEnum.ASTHMA:
        return 'prescription-information-l';
      case PharmacyAssessmentsEnum['STREP-THROAT']:
      case PharmacyAssessmentsEnum.UTI:
      case PharmacyAssessmentsEnum['COLD-FLU']:
        return '';
      default:
        return 'prescription-information';
    }
  }
}
