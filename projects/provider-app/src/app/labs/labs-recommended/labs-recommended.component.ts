import { Component, OnInit, Input } from '@angular/core';

import { flatten, isEmpty, isNil, values } from 'ramda';


import { DataService } from 'services/data.service';
import { SymptomsService } from '../../services/symptoms.service';
import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';

@Component({
  selector: 'pa-labs-recommended',
  templateUrl: './labs-recommended.component.html',
  styleUrls: ['./labs-recommended.component.scss']
})
export class LabsRecommendedComponent implements OnInit {
  @Input() source = 'labs';
  public recommendedLabsArray = [];
  public recommendedLabs = [];
  public triage: Triage[];

  constructor(private dataService: DataService,
              private symptomsService: SymptomsService) {
    this.dataService.getPatient().subscribe(data => {
      if (!data) return;
      this.recommendedLabs = isEmpty(data.recommendedLabs) || isNil(data.recommendedLabs) ? flatten(values(data.recommendedLabsV2)) : data.recommendedLabs;
      this.triage = data.triage;
    });
  }

  ngOnInit() {
    this.recommendedLabsArray = this.recommendedLabs.map(lab => {
      const symptom = this.symptomsService.searchParsedSymptom(lab);
      return {
        id: lab,
        name: symptom ? symptom.name : ''
      };
    }).filter(lab => this.symptomsService.searchParsedSymptom(lab.id, true, this.triage));
  }

}
