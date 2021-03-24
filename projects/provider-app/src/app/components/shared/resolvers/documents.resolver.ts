import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PatientdataService } from 'services/patientdata.service';
import { Data } from 'common/models/data.model';

@Injectable()
export class DocumentsResolver implements Resolve<Data> {
  constructor(private patientdataService: PatientdataService) {}

  resolve() {
    return this.patientdataService.getPatientLastValue();
  }
}
