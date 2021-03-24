import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SymptomsService } from '../../../services/symptoms.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class SymptomsResolver implements Resolve<any> {
  constructor(private symptomsService: SymptomsService) {}

  resolve(): Observable<any> {
    return this.symptomsService.getParsedSymptoms().pipe(first(symptoms => !!symptoms));
  }
}
