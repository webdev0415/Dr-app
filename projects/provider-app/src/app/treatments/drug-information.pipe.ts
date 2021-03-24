import { Pipe, PipeTransform } from '@angular/core';
import { DrugInformation } from '../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-information.interface';

@Pipe({
  name: 'drugInformationPipe'
})
export class DrugInformationPipe implements PipeTransform {
  public transform(drugInformation: DrugInformation[], drugName: string): DrugInformation {
    return drugInformation ? drugInformation.find(item => item.drugName.toLowerCase() === drugName.toLowerCase()) : null;
  }
}
