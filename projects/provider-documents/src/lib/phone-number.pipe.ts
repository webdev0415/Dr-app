import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phone: number | string): string {
    if (!phone) return '';
    const str = phone.toString();
    if (!str.length) return '';
    return  '(' + str.slice(0, 3) + ') ' + str.slice(3, 6) + '-' + str.slice(6);
  }

}
