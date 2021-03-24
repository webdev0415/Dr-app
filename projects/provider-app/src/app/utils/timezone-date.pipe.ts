import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tzdate'
})
export class AdjustTimezonePipe implements PipeTransform {
    public transform(value: string | Date, location: string) {
      if (value === '') return new Date();

      const date: Date = typeof value === 'string' ? new Date(value) : value;
      const invdate = new Date(
        date.toLocaleString('en-US',
          {timeZone: location || 'America/Phoenix'}
        ));
      const diff = date.getTime() - invdate.getTime();
      const res = new Date(date.getTime() - diff);
      return res;
    }
}
