import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { GroupedSymptom } from '../symptoms.interface';

@Component({
  selector: 'pa-grouped-symptoms',
  templateUrl: './grouped-symptoms.component.html',
  styleUrls: ['./grouped-symptoms.component.scss']
})
export class GroupedSymptomsComponent implements OnInit {
  @Input() symptom;
  @Input() viewOnly: boolean;
  @Output() removeGroupEvent = new EventEmitter();

  public groupedSymptom: GroupedSymptom;

  constructor() { }

  ngOnInit() {
    this.groupedSymptom = this.symptom.groupedSymptom;
  }

  removeGroup(symptom) {
    this.removeGroupEvent.emit(symptom);
  }

}
