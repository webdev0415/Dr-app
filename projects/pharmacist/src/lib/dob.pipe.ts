import { Pipe, PipeTransform } from '@angular/core';
import { Date } from 'sugar';

@Pipe({
  name: 'dob'
})
export class DobPipe implements PipeTransform {

  transform(dobDate: string): string {
    if (!dobDate) return '';
    return new Date(dobDate || new Date().raw).format('%m/%d/%Y').raw;
  }

}
