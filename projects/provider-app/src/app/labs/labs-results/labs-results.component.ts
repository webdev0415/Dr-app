import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { isNil } from 'ramda';


import { Data} from 'common/models/data.model';
import { FormattedTriageLab } from '../interfaces/formatted-triage-lab.interface';
import { LabsService } from '../services/labs.service';

@Component({
  selector: 'pa-labs-results',
  templateUrl: './labs-results.component.html',
  styleUrls: ['./labs-results.component.scss']
})
export class LabsResultsComponent implements OnInit, OnChanges {
  @Input() patient: Data;
  @Input() source: string;
  public patientId;
  public labs: FormattedTriageLab[] = [];

  constructor(
    private labsService: LabsService
  ) { }

  ngOnChanges() {
    this.getLabResults();
  }

  ngOnInit() {
    if (this.patient) {
      this.patientId = this.patient.patientInformation.patientId;
    }
    this.getLabResults();
  }

  private getLabResults(): void {
    this.labs = this.labsService.businessLabs.filter(item => !isNil(item.currentValue)).map(item => item.labResult);
  }

  getLink(link: string) {
    return [
      '/patients',
      this.patientId,
      link
    ];
  }

}
