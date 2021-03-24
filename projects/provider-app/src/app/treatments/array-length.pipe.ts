import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLengthPipe'
})
export class ArrayLengthPipe implements PipeTransform {
  public transform(array: any[] | any, key?: string): number {
    if (!array) return null;
    if (Array.isArray(array)) return array.length;
    else {
      return array[key] ? array[key].length : null;
    }
  }
}
