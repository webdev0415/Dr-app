import { Component, Inject, Input, OnInit, TemplateRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { filter, first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Date as Sugar } from 'sugar';

import {
  PatientContactInformation,
  PatientInsuranceCard,
  PatientProfile,
  PatientProfileData
} from '../side-models/patient-profile/interfaces';
import { SocialCard } from '../side-models/patient-profile/social-card.model';
import { Photo } from '../side-models/patient-profile/interfaces/photo.interface';

import { QuestionnairesHeaderData } from '../interfaces/questionnaires-header-data.interface';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PharmacistReasonsEnum } from '../enum/pharmacist-reasons.enum';
import { PharmacistHeadersEnum } from '../enum/pharmacist-headers.enum';
import { PATIENT_DATA_PROVIDER, PATIENT_PROFILE_SERVICE, PatientDataService, PatientProfileService } from '../providers';


@Component({
  selector: 'ph-intake-form-container',
  templateUrl: './intake-form-container.component.html',
  styleUrls: ['./intake-form-container.component.scss']
})
export class IntakeFormContainerComponent implements OnInit {
  @Input() readonly userSignature: TemplateRef<HTMLDivElement>;
  @Input() readonly practitionerName: string = '';
  @Input() readonly businessName: string = '';
  @Input() readonly locationName: string = '';
  public readonly currentDate: any = new Sugar().short();
  public patientInsurance$: Observable<QuestionnairesHeaderData<PatientInsuranceCard>>;
  public patientInformation$: Observable<QuestionnairesHeaderData<PatientProfile & PatientContactInformation & { phone: string }>>;
  public visitReason: PharmacistReasonsEnum;
  public socialCard$: Observable<SocialCard> = this.patientDataService.socialCard$;
  public insuranceCard$: Observable<Array<Array<Photo & { side: 'FRONT' | 'BACK'; blob: SafeResourceUrl }>>>;
  public questionnaire: PharmacyAssessmentsEnum;
  public readonly PharmacyAssessmentsEnum = PharmacyAssessmentsEnum;

  constructor(
    @Inject(PATIENT_PROFILE_SERVICE) private patientProfileService: PatientProfileService,
    @Inject(PATIENT_DATA_PROVIDER) private patientDataService: PatientDataService
  ) { }

  ngOnInit(): void {
    this.patientInsurance$ = this.patientProfileService.patientInsurance$.pipe(map(data => {
      const insuranceData = data.find(item => item.primaryInsurance);
      return {
        source: insuranceData,
        value: (args, delimiter= ', ') => insuranceData ? args.map(key => insuranceData[key]).filter(item => !!item).join(delimiter) : '',
        fields: [
          { header: 'Insurance Provider', args: ['insuranceProvider'] },
          { header: 'Provider Phone Number', args: ['providerPhoneNumber'] },
          { header: 'Member ID Number', args: ['memberId'] },
          { header: 'Insurance Claim Address', args: ['providerAddressLine1', 'providerAddressLine2', 'providerCity', 'providerState', 'providerZip'] },
          { header: 'Group Number', args: ['groupId'] },
          { header: 'Plan Number', args: ['planId'] }
        ]
      };
    }));

    this.patientInformation$ = this.patientProfileService.patientProfileData$().pipe(map((profile: PatientProfileData) => {
      const phoneNumberList = profile && profile.contactRecord ? profile.contactRecord.phoneNumberList : [];
      const patientPhone = phoneNumberList.length ? phoneNumberList[0][profile.contactRecord.primaryPhoneType] : '';
      const source = Object.assign(profile.patientProfile, profile.contactRecord, { phone: patientPhone });
      return {
        source: source,
        value: (args, delimiter = ' ') => args.map(key => source[key]).filter(item => !!item).join(delimiter),
        fields: [
          { header: 'Name', args: ['firstName', 'middleName', 'lastName'] },
          { header: 'Primary Care Physician', args: ['primaryCarePhysician'] },
          { header: 'Address', args: ['addressLine1', 'addressLine2', 'city', 'state', 'zip'], delimiter: ', ' },
          { header: 'Sex', args: ['gender'] },
          { header: 'Phone', args: ['countryCode', 'phone'] }
        ]
      };
    }));

    this.insuranceCard$ = this.patientProfileService.patientInsurance$.pipe(map(data => data.filter(item => item.cardImage.length)), map((data: PatientInsuranceCard[]) => {
      return data.sort(item => item.primaryInsurance ? -1 : 1).map((item, insuranceIndex) => item.cardImage.sort(img => img.side === 'FRONT' ? -1 : 1));
    }));

    this.socialCard$.pipe(filter(data => !!data), first()).subscribe(socialCard => {
      this.visitReason = PharmacistReasonsEnum[socialCard.patientVisitReason];
      this.questionnaire = this.PharmacyAssessmentsEnum[this.visitReason];
    });
  }

  public get visitReasonHeader(): string {
    return PharmacistHeadersEnum[this.visitReason];
  }
}
