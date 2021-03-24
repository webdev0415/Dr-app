import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectOptions'
})
export class SelectOptionsPipe implements PipeTransform {

  transform(options: string[], selectedOption: string): { value: string; label: string }[] {
    if (!options) {
      options = [];
    }
    if (selectedOption && !options.includes(selectedOption)) options.push(selectedOption);
    return options.map(item => ({ value: item, label: item }));
  }

}
