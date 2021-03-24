import { Pipe, PipeTransform } from '@angular/core';
import { PatientProfile } from '../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-profile.interface';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: PatientProfile): string {
    if (!value) return;
    let fullName;
    fullName = value.firstName + ' ';
    if (value.middleName.length) fullName += value.middleName + '. ';
    fullName += value.lastName;
    return fullName;
  }

}
