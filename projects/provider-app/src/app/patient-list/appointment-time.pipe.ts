import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment-timezone';
import { PreparedPatientListEntity } from './interfaces/prepared-patient-list-entity.interface';

@Pipe({
  name: 'appointmentTime'
})
export class AppointmentTimePipe implements PipeTransform {
  transform(patient: PreparedPatientListEntity | null): string {
    const { appointmentTime, locationNameToDisplay } = patient;

    let timeZone = '';

    switch (locationNameToDisplay) {
      case 'Elgin':
      case 'Illinois':
      case 'Wisconsin':
        timeZone = 'America/Chicago';
        break;
      case 'Indiana':
        timeZone = 'America/New_York';
        break;
    }

    const padZero = number => `0${number}`.slice(-2);

    const date = new Date(appointmentTime);
    const dateString = `${date.getUTCFullYear()}-${padZero(date.getUTCMonth() + 1)}-${padZero(date.getUTCDate())} ${padZero(date.getUTCHours())}:${padZero(date.getUTCMinutes())}`;
    const sourceTime = timeZone ? moment.tz(dateString, timeZone) : moment(appointmentTime);

    return appointmentTime ? sourceTime.local().format('dddd, h:mm a') : 'Next Available';
  }
}
