import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { NavigationService } from 'services/navigation.service';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { AlertService } from 'services/alert.service';
import { PatientListService } from 'patient-list/services/patient-list.service';

@Injectable()
export class PatientsResolver implements Resolve<any> {

  constructor(
    private patientListService: PatientListService,
    private navigationService: NavigationService,
    private alertService: AlertService
  ) { }

  resolve(): Observable<PatientListEntity[]> | PatientListEntity[] {
    const fetchPatientsOnce = this.navigationService.prevUrl && !this.navigationService.prevUrl.includes('login');
    this.patientListService.getPatientList(true, fetchPatientsOnce);
    this.alertService.getAlerts(!fetchPatientsOnce);
    return this.patientListService.getListLastValue() ? this.patientListService.getListLastValue() : this.patientListService.getList().pipe(take(1));
  }

}
