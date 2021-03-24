import { Pipe, PipeTransform } from '@angular/core';

import { Date } from 'sugar';

@Pipe({
  name: 'messageReceivedTime'
})
export class MessageReceivedTimePipe implements PipeTransform {
  transform(time: number): string {
    const rewindTime = new Date(time).minutesAgo().toNumber().raw;
    return rewindTime ? `${rewindTime} minutes ago` : 'now';
  }
}
