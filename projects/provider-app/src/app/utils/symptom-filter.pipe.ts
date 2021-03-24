import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSymptomName'
})
export class SymptomFilterPipe implements PipeTransform {

    public transform(value: any) {
        return value.replace('Basic', '').trim();
    }
}
