import { Component, Input, OnInit } from '@angular/core';
import { TreatmentsService } from '../../treatments/treatments.service';
import { PVDischarge } from '../discharge.interface';
import { DocTreatmentItem } from '../../common/interfaces/documents.interface';

@Component({
  selector: 'pa-discharge-disposition-table',
  templateUrl: './discharge-disposition-table.component.html',
  styleUrls: ['./discharge-disposition-table.component.scss']
})
export class DischargeDispositionTableComponent implements OnInit {
  @Input() treatment: DocTreatmentItem;

  public dischargeInfo: PVDischarge;

  constructor(
    private treatmentsService: TreatmentsService
  ) { }

  get hasTreatmentName(): boolean {
    return this.treatment && !!this.treatment.name;
  }

  get hasIcdDescription(): boolean {
    return this.treatment && !!this.treatment.icdDescs && !!this.treatment.icdDescs.length;
  }

  get hasDischargeReturnType(): boolean {
    return this.dischargeInfo.returnIn || this.dischargeInfo.followUp;
  }

  get hasDischargeTime(): boolean {
    return !!this.dischargeInfo.amountOf && !!this.dischargeInfo.time;
  }

  get hasDischargeTherapies(): boolean {
    return !!this.dischargeInfo.therapies && !!this.dischargeInfo.therapies.length;
  }

  ngOnInit() {
    this.dischargeInfo = this.treatmentsService.selectSnapshot().pvDischarge;
  }

  getIcdDescriptionString(): string {
    return this.treatment.icdDescs.join(', ');
  }

  getDischargeReturnTypeString(): string {
    const returnTypes: string[] = [];
    if (this.dischargeInfo.returnIn) {
      returnTypes.push('Return');
    }
    if (this.dischargeInfo.followUp) {
      returnTypes.push('Follow Up');
    }
    return returnTypes.join(' / ');
  }

  getFollowUpWithString(): string {
    return !!this.dischargeInfo.followUpWith ? `${ this.dischargeInfo.followUpWith }` : '';
  }

  getDischargeTimeString(): string {
    const dischargeTime: string[] = [`In ${this.dischargeInfo.amountOf.toString()}`, this.dischargeInfo.time];
    if (this.dischargeInfo.ifNotBetter) {
      dischargeTime.push('If not better');
    }
    return dischargeTime.join(' ');
  }

}
