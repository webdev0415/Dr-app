import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByDate'
})
export class GroupByDatePipe implements PipeTransform {

  transform(collection: Array<any>, property: string): Array<any> {
    if (!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});

    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

}
