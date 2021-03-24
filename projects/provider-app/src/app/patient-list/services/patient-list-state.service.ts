import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PatientListEntity } from '../interfaces/patient-list-entity.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientListStateService {
  private _patientList: Subject<PatientListEntity[]> = new Subject<PatientListEntity[]>();
  private _patientListLastValue: BehaviorSubject<PatientListEntity[] | null> = new BehaviorSubject<PatientListEntity[]>(null);

  constructor() { }

  public get patientList$(): Observable<PatientListEntity[]> {
    return this._patientList.asObservable();
  }

  public set patientList(value: PatientListEntity[]) {
    this._patientList.next(value);
  }

  public get patientListLastValue(): PatientListEntity[] {
    return this._patientListLastValue.getValue();
  }

  public get patientListLastValue$(): Observable<PatientListEntity[]> {
    return this._patientListLastValue.asObservable();
  }

  public set patientListLastValue(value: PatientListEntity[]) {
    this._patientListLastValue.next(value);
  }
}
