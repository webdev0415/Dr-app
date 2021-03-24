import { Component, Input } from '@angular/core';

import { DateTime } from 'utils/dateTime';
import { DialogService } from 'services/app/dialog.service';
import { PpviewmediaComponent } from '../popups/ppviewmedia/ppviewmedia.component';
import { SocialCard } from '../../../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';
import { GenderEnum } from '../../../../../../patient-profile/src/lib/enums';

@Component({
  selector: 'pa-patientcard',
  templateUrl: './patientcard.component.html',
  styleUrls: ['./patientcard.component.scss']
})
export class PatientcardComponent {
  public imgs = [];

  @Input() socialCard: SocialCard;
  @Input() less: Boolean = false;
  @Input() isFull: Boolean = false;
  @Input() isDialog: Boolean = false;

  constructor(
    private dateTimeUtils: DateTime,
    private dialogService: DialogService
  ) { }

  get currentAlcoholSmokingLgClassSize(): string {
    if (this.isFull) {
      return 'col-lg-12';
    }
    return 'col-lg-3';
  }

  get visibleLastDrink(): boolean {
    return !!this.socialCard.patientHealthHistory.lastDrinkDate || !this.isDialog;
  }

  get visibleLastSmoked(): boolean {
    return !!this.socialCard.patientHealthHistory.smokingEndDate || !this.isDialog;
  }

  get visiblePregnancyStatus(): boolean {
    return (!!this.socialCard.pregnancyStatus &&
      this.socialCard.gender === GenderEnum.FEMALE);
  }

  get visibleSmokingDurationOrDates(): boolean {
    const startDate = this.socialCard.patientHealthHistory.smokingStartDate;
    const endDate = this.socialCard.patientHealthHistory.smokingEndDate;
    return  (startDate !== null && endDate !== null) || !this.isDialog;
  }

  showFullImg(image, index) {
    const data = [];
    let frontUrl = '';
    let backUrl = '';
    for (const card of this.imgs) {
      const name = card.name;
      frontUrl = card.front.image || card.front.s3;
      backUrl = card.back.image || card.back.s3;
      data.push({ name: name,  url: frontUrl, url2: backUrl
      });
    }
    const dialogData = {
      media: data,
      index: index
    };
    this.dialogService.custom(PpviewmediaComponent, dialogData, { positionStrategy: { width: '100% !important' } }, 'patientcard');
  }
}
