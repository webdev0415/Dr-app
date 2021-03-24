import * as R from 'ramda';

import { DateTime, DatetimeDifference } from '../common/utils/dateTime';
import { PatientContactInformation } from './interfaces';
import { PatientProfile } from './interfaces/patient-profile.interface';
import { HealthHistory } from '../common/interfaces/health-history/health-history.interface';
import { PatientcardDataEnum } from '../common/enums/patient-card-data.enum';
import { VisitInformation } from '../common/interfaces/patient-data/visit-information.interface';
import { HistoryTypesEnums } from '../common/enums/history-types.enum';
import { Measurement } from '../common/interfaces/measurement/measurement.interface';

export class SocialCard {
  private readonly defaultPhoto = '/DoctorApp/assets/img/sys/pic-placeholder.png';
  public patientHealthHistory: HealthHistory;
  public patientInformation: PatientProfile;
  private visitInformation: VisitInformation;
  private measurements: Measurement[];

  constructor(
    patientProfile: PatientProfile,
    healthHistory: HealthHistory,
    visitInformation: VisitInformation,
    measurements: Measurement[],
    private contactRecord: PatientContactInformation,
    private datetimeUtils: DateTime = new DateTime()
  ) {
    this.patientHealthHistory = healthHistory;
    this.patientInformation = patientProfile;
    this.visitInformation = visitInformation;
    this.measurements = measurements;
  }

  get patientEthnicity(): string {
    return this.patientInformation.ethnicity.join(', ');
  }

  get patientFullName(): string {
    return `${this.patientInformation.firstName}
            ${this.patientInformation.middleName ? this.patientInformation.middleName + '.' : ''}
            ${this.patientInformation.lastName}`;
  }

  get patientVisitReason(): string {
    return this.visitInformation.detailVisitReason;
  }

  get patientAge(): string {
    return this.patientInformation.age.years.toString();
  }

  get patientPhoto(): string {
    return this.patientInformation.photo && this.patientInformation.photo.s3 ? this.patientInformation.photo.s3 : this.defaultPhoto;
  }

  get patientHeight(): string {
    const height = this.measurements.find(measurement => measurement.measureType === PatientcardDataEnum.HEIGHT && measurement.temp === undefined).value.value;
    return `${height} Inches`;
  }

  get patientWeight(): string {
    const weight = this.measurements.find(measurement => measurement.measureType === PatientcardDataEnum.WEIGHT && measurement.temp === undefined).value.value;
    return weight ? `${Math.ceil(weight)} Lbs` : '';
  }

  get patientLastPeriodDate(): string {
    const gender = this.gender.toLowerCase();
    return (gender === 'female' || gender === 'transgender') ? this.patientInformation.lastMenstruationDate : '';
  }

  get patientOtherMenstrualStatus(): string {
    const gender = this.gender.toLowerCase();
    return (gender === 'female' || gender === 'transgender') ? this.patientInformation.otherMenstrualStatus : '';
  }

  get currentSmoking(): string {
    return (this.patientHealthHistory.smokingStartDate && !this.patientHealthHistory.smokingEndDate) ? 'Yes' : 'No';
  }

  get lastSmoked(): string {
    const endDate = this.patientHealthHistory.smokingEndDate;
    return (endDate) ? endDate : '';
  }

  get smokingDuration(): string {
    const startDate = this.patientHealthHistory.smokingStartDate;
    const endDate = this.patientHealthHistory.smokingEndDate || Date.now();
    if (startDate && endDate) {
      const dateDiff: DatetimeDifference = DateTime.diff(startDate, endDate);
      return dateDiff.years.toString() + 'y';
    }
  }

  get smokingDates(): string {
    const startDate = this.patientHealthHistory.smokingStartDate;
    const endDate = this.patientHealthHistory.smokingEndDate;
    if (startDate && endDate) {
      return startDate + ' to ' + endDate;
    }
    if (startDate) return `Patient has been a smoker since ${startDate}.`;
    return '';
  }

  get pregnancyStatus(): string {
    const pregnancyStatus = this.patientInformation.pregnancyStatus;
    if (pregnancyStatus && (this.gender.toLowerCase() === 'female' || this.gender.toLowerCase() === 'transgender')) {
      return pregnancyStatus.charAt(0).toUpperCase() + pregnancyStatus.slice(1).toLowerCase();
    }
    return '';
  }

  get gender(): string {
    return this.patientInformation.gender;
  }

  get alcoholConsumption(): boolean {
    return !!this.patientHealthHistory.historyItem.filter((item) => {
      return item.symptomID === HistoryTypesEnums.ALCOHOL
        && item.historyValue === true;
    }).length;
  }

  get lastDrink(): string {
    const today = this.datetimeUtils.currentDate(true);
    const lastDrink = this.patientHealthHistory.lastDrinkDate;
    if (lastDrink) {
      const dateDiff: DatetimeDifference = DateTime.diff(lastDrink, today);
      let time = '';
      if (dateDiff.years) time += dateDiff.years.toString() + 'y ';
      if (dateDiff.months) time += dateDiff.months.toString() + 'm ';
      if (dateDiff.days) time += dateDiff.days.toString() + 'd ';
      if (today === lastDrink) return `${time} Today (${lastDrink})`;
      return `${time} ago (${lastDrink})`;
    }
    return '';
  }

  get caffeineConsumption(): boolean {
    return Boolean(this.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums.CAFFEINE));
  }

  get caffeineConsumptionReport(): string {
    const cupsPerDay = this.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums['CAFFEINE-DRINKS-PER-DAY']);
    return R.isNil(cupsPerDay) ? '' : `Patient reports drinking ${cupsPerDay.historyItem} caffeine drink(s) per day`;
  }

  get smokingReport(): string | boolean {
    const packsPerDay = this.patientHealthHistory.historyItem.find(item => item.historyType === 'Packs Per Day');
    console.table(packsPerDay);
    let smokingDates = this.smokingDates;
    if (packsPerDay && packsPerDay.historyItem !== '') {
      smokingDates += ` Patient reports smoking ${packsPerDay.historyItem} packs per day.`;
    } else {
      smokingDates += 'Patient is a nonsmoker.';
    }
    return smokingDates || false;
  }

  get alcoholConsumptionReport(): string | boolean {
    const drinksPerDay = this.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums['DRINKS-PER-DAY'] && item.historyType.indexOf('Caffeine') < 0);
    let lastDrink = this.patientHealthHistory.lastDrinkDate ? `Patient's last alcoholic drink was ${this.patientHealthHistory.lastDrinkDate}` : null;
    if (drinksPerDay) lastDrink += `. Patient reports drinking ${drinksPerDay.historyItem} drinks per day.`;
    return lastDrink || false;
  }

  get drugUsageReport(): string {
    return this.patientHealthHistory.historyItem
      .filter(item => item.symptomID === HistoryTypesEnums['DRUG-LIST'])
      .map(item => item.historyItem)
      .join(', ');
  }

  get drugUser(): boolean {
    return Boolean(this.patientHealthHistory.historyItem.find(
      item => item.symptomID === HistoryTypesEnums['DRUG-USER']
    ));
  }

  get drugTypes(): Array<any> {
    return this.patientHealthHistory.historyItem
      .filter(item => item.symptomID === HistoryTypesEnums['DRUG-LIST'])
      .map(item => item.historyItem);
  }

  get currentBreastFeeding(): boolean {
    const breastFeedingSymptom = this.patientHealthHistory.historyItem.find(item => item.symptomID === HistoryTypesEnums['BREAST-FEEDING']);
    return breastFeedingSymptom ? breastFeedingSymptom.historyValue : false;
  }

  get pharmacyAddress(): string {
    const pharmacies = this.patientHealthHistory.pharmacies || [];
    const pharmacy = pharmacies.find(item => item.is_primary) || pharmacies[0];
    return pharmacy ? `${pharmacy.Address1}${pharmacy.Address2 ? ' ' + pharmacy.Address2 : ''}, ${pharmacy.City}, ${pharmacy.State}, ${pharmacy.ZipCode}` : '';
  }

  public get patientAddress(): { [key in 'address'|'city'|'state'|'zip']: string } {
    const address = `${this.contactRecord.addressLine1}${this.contactRecord.addressLine2 ? ' ' + this.contactRecord.addressLine2 : ''}`;
    return { address, ...R.pick(['city', 'state', 'zip'], this.contactRecord) };
  }
}
