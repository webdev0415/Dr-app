import { Pipe, PipeTransform } from '@angular/core';

import { compose, prop, sortBy } from 'ramda';


import { OrderStateEnum } from '../common/enums';
import { OrderedStateSorting } from './enums/ordered-state-sorting.enum';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends { state: OrderStateEnum }> implements PipeTransform {

  transform(value: Array<T>): T[] {
    return sortBy(compose((itemState: OrderStateEnum) => OrderedStateSorting[itemState], prop('state')), value);
  }

}
