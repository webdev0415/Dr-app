import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionnaireService } from '../questionnaire.service';
import { GenderEnum } from '../side-models/patient-profile/enums/gender.enum';


import { PatientProfile } from '../side-models/patient-profile/interfaces';
import { SocialCard } from '../side-models/patient-profile/social-card.model';

import { QuestionnairesHeaderData } from '../interfaces/questionnaires-header-data.interface';

@Component({
  selector: 'ph-questionnaires-header',
  templateUrl: './questionnaires-header.component.html',
  styleUrls: ['./questionnaires-header.component.scss']
})
export class QuestionnairesHeaderComponent<T> {
  @Input() header: string;
  @Input() data: QuestionnairesHeaderData<T>;
  @Input() currentDate: string;
  @Input() socialCard: SocialCard;

  public readonly GenderEnum = GenderEnum;

  constructor(private questionnaireService: QuestionnaireService) {
  }

  get insuranceAddress(): string {
    if (!this.data.source) return '';

    return this.data.source['providerAddressLine1'].length
      ? this.data.value(this.data.fields.find(field => field.header.toLowerCase().includes('address')).args, ', ')
      : '';
  }

  public get allergies(): Observable<string> {
    return this.questionnaireService.allergiesInformation$;
  }

  get fulName(): string {
    // @ts-ignore
    const value: PatientProfile = this.data ? this.data.source : null;
    if (!value) return;
    let fullName;
    fullName = value.firstName + ' ';
    if (value.middleName.length) fullName += value.middleName + '. ';
    fullName += value.lastName;
    return fullName;
  }
}
