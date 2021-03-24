import { BehaviorSubject, Observable } from 'rxjs';


import { DrugInformationService } from '../../../../../pharmacist/src/lib/providers';
import { DrugInformation } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/treatment/drug-information.interface';

export class DrugInformationProvider implements DrugInformationService {
  private _drugInformation = new BehaviorSubject<DrugInformation[]>([]);

  public get drugInformation$(): Observable<DrugInformation[]> {
    return this._drugInformation.asObservable();
  }

  public set drugInformation(drugs: DrugInformation[]) {
    this._drugInformation.next(drugs);
  }

}
