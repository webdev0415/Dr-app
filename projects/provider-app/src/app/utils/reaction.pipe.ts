import { Pipe, PipeTransform } from '@angular/core';
import { HistoryItem } from '../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';

@Pipe({
  name: 'reaction'
})
export class ReactionPipe implements PipeTransform {

  transform(value: HistoryItem): string {
    if (!value) return;
    if (!value.customFields.length) return (value.historyItem['name'] as string);

    return `${value.historyItem['name']} | ${value.customFields[0].value}`;
  }

}
