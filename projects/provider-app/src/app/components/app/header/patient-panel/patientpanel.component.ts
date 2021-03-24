import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { isNil } from 'ramda';
import { Triage } from 'common/models/data.model';
import { HistoryItem } from '../../../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';


import { DialogService } from 'services/app/dialog.service';
import { NotificationsService } from 'components/notifications/notifications.service';

import { PpviewmediaComponent } from 'components/shared/popups/ppviewmedia/ppviewmedia.component';
import { SocialCard } from '../../../../../../../pharmacist/src/lib/side-models/patient-profile/social-card.model';

import { PatientIdCard, PatientInsuranceCard, PatientProfile } from '../../../../../../..//patient-profile/src/lib/interfaces';

import { HistoryTypesEnums } from 'common/enums';
import { GenderEnum } from '../../../../../../../patient-profile/src/lib/enums';
import { PatientCardsEnum } from '../../../../../../../pharmacist/src/lib/side-models/patient-profile/enums/patient-cards.enum';


@Component({
  selector: 'pa-patient-panel',
  templateUrl: './patientpanel.component.html',
  styleUrls: ['./patientpanel.component.scss'],
})
export class PatientPanelComponent implements OnInit {
  @Input() detailVisitReason: string;
  @Input() photo: string;
  @Input() patientProfile: PatientProfile;
  @Input() triage: Triage[] = [];
  @Input() socialCard: SocialCard;
  @Input() isOM: boolean;
  @Input() viewOnly: boolean;
  @Input() patientInsurance: PatientInsuranceCard[] = [];
  @Input() patientIdCard: PatientIdCard[] = [];
  @Input() patientLocation: string;
  @Output() panelToggle = new EventEmitter<boolean>();
  @Output() changeEvent = new EventEmitter<Partial<PatientProfile>>();
  @Output() editPatientName = new EventEmitter<void>();

  public bmiValue;
  public isEditable: { [key in keyof Partial<PatientProfile>]: boolean } = {
    gender: false,
    birthDate: false
  };
  public editableOptions: Partial<PatientProfile> = {
    gender: null,
    birthDate: ''
  };
  public dateOptions = {
    dateFormat: 'mm/dd/yyyy',
    minYear: 1900,
    maxYear: 2019,
    showClearDateBtn: false,
    editableDateField: false
  };

  public readonly genderEnum = GenderEnum;

  constructor(
    private dialogService: DialogService,
    private notificationService: NotificationsService
  ) {}

  ngOnInit(): void {
    const bmiSymptom = this.triage.find(item => item.symptomId === HistoryTypesEnums.BMI);
    if (bmiSymptom) {
      this.bmiValue = Number(bmiSymptom.measurement).toFixed(2);
    }
  }

  convertDate(birthDate: string): string {
    if (!birthDate) return;
    const convertedDate = birthDate.split('-').reverse();
    [convertedDate[0], convertedDate[1]] = [convertedDate[1], convertedDate[0]];
    return convertedDate.join('/');
  }

  convertToDefisDate(birthDate: string): string {
    if (!birthDate) return;
    const convertedDate = birthDate.split('/').reverse();
    [convertedDate[1], convertedDate[2]] = [convertedDate[2], convertedDate[1]];
    return convertedDate.join('-');
  }

  /**
   * Get patientHealthHistory section
   * @param {string} section
   */
  getSection(section: string): HistoryItem[] {
    return this.socialCard ? this.socialCard.patientHealthHistory.historyItem.filter(item => item.historyType === section && (item.historyItem as string).length) : [];
  }

  showFullImg(image: 'patientInsurance' | 'patientIdCard'): void {
    const data: { name: string, url: string, url2: string }[] = [];

    this[image].forEach(card => {
      data.push({
        name: isNil(card.primaryInsurance) ? 'Driver License' : card.primaryInsurance ? 'Insurance Card' : 'Insurance Card Secondary',
        url: (card.cardImage || card.images).find(item => item.side === 'FRONT').s3,
        url2: (card.cardImage || card.images).find(item => item.side === 'BACK').s3
      });
    });

    const dialogData = {
      media: data,
      index: 0
    };
    if (data.length) {
      this.dialogService.custom(PpviewmediaComponent, dialogData, {positionStrategy: {width: '100% !important'}}, 'patientcard');
    } else {
      this.notificationService.info('No ' + PatientCardsEnum[image] + ' Image');
    }
  }

  editField(src: keyof Partial<PatientProfile>): void {
    this.isEditable[src] = true;
  }

  saveFieldChange(src: keyof Partial<PatientProfile>): void {
    this.isEditable[src] = false;
    this.changeEvent.emit({
      [src]: this.editableOptions[src],
    });
  }

  cancelFieldChange(src: keyof Partial<PatientProfile>): void {
    this.isEditable[src] = false;
  }

  onEditPatientName() {
    this.editPatientName.emit();
  }

  showPhoneNumber(phoneNumber: string) {
    if (phoneNumber) {
      return phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6);
    } else {
      return '';
    }
  }
}
