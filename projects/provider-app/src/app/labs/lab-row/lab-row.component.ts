import { Component, EventEmitter, Input, Output } from '@angular/core';


import { DateTime } from '../../utils/dateTime';
import { BusinessLab } from '../business-lab.model';
import { LabOption } from '../interfaces/lab-option.interface';
import { FormattedTriageLab } from '../interfaces/formatted-triage-lab.interface';


@Component({
  selector: 'pa-lab-row',
  templateUrl: './lab-row.component.html',
  styleUrls: ['./lab-row.component.scss']
})
export class LabRowComponent {
  @Input() labResult: FormattedTriageLab = null;
  @Input() businessLab: BusinessLab;
  @Input() viewOnly: boolean;
  @Output() removeResult: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateResult: EventEmitter<FormattedTriageLab> = new EventEmitter<FormattedTriageLab>();
  public labOptions: LabOption[] = [{
    active: () => {
      return !this.labResult;
    },
    btnText: () => 'Not Tested',
    color: () => 'primary',
    clickCb: () => {
      if (this.labResult && !this.viewOnly) this.removeResult.emit(this.labResult.SymptomID);
    }
  }, {
    active: () => {
      return !!this.labResult && (this.labResult.Response === 'False' || this.labResult.Response === false);
    },
    btnText: () => 'Negative',
    color: () => 'green',
    clickCb: () => this.emitChange(false)
  }, {
    active: () => {
      return !!this.labResult && (this.labResult.Response === 'Other' || this.labResult.Response === true);
    },
    btnText: () => 'Positive',
    color: () => 'red',
    clickCb: () => this.emitChange(true)
  }];

  constructor(private dateTimeUtils: DateTime) { }

  public emitChange(positiveResult: boolean, measurement: number = null): void {
    if (this.viewOnly) return;
    return;
    // @ts-ignore
    const symptomName = this.businessLab.labData.find(item => !item.listValue).snomedName;
    // @ts-ignore
    const resultDescription = this.businessLab.labData.find(item => item.listValue === (positiveResult ? 'Positive' : 'Negative'));

    const val: FormattedTriageLab = {
      Time: this.dateTimeUtils.currentDate(),
      SymptomSource: 'MA Added',
      Values: [[resultDescription ? resultDescription.listValue : null, null, null]],
      Response: positiveResult ? 'Other' : 'False',
      SymptomID: this.businessLab.symptomId,
      SymptomName: symptomName,
      Measurement: measurement,
      Location: [],
      responseDetails: [{ description: resultDescription ? resultDescription.snomedName : null, duration: null }]
    };
    this.updateResult.emit(val);
  }

}
