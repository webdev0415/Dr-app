import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SymptomsService } from 'services/symptoms.service';

@Injectable()
export class SymptomCategoriesResolver implements Resolve<any> {
  constructor(private symptomsService: SymptomsService) {
  }

  resolve(): any[] {
    return this.symptomsService.getSymptomCategories();
  }
}
