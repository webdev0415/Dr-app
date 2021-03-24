import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { RTSDaysEnum } from '../discharge.enum';
import { ReturnToSchoolWork } from '../discharge.interface';
import { dateOptions } from '../static.discharge';
import { initialTreatments } from '../../treatments/static/static.treatments';

@Component({
  selector: 'pa-return-to-school',
  templateUrl: './return-to-school.component.html',
  styleUrls: ['./return-to-school.component.scss']
})
export class ReturnToSchoolComponent {
  @Input() RTSDays: RTSDaysEnum;
  @Input() viewOnly: boolean;
  @Input() RTSWStart: string;
  @Input() RTSWStop: string;
  @Output() RTWSUpdate = new EventEmitter<Partial<ReturnToSchoolWork>>();

  public readonly RTSDaysOptions: Array<keyof typeof RTSDaysEnum> = ['Today', 'Tomorrow', '2 Days', '3 Days', '4 Days', '5 Days'];
  public readonly RTSDaysEnum = RTSDaysEnum;
  public readonly dateOptions = dateOptions;

  public RTSDaysUpdate(days: keyof typeof RTSDaysEnum, event: boolean = null): void {
    this.RTSDays = event === false ? null : this.RTSDaysEnum[days];
    this.update();
  }

  public get datesValid(): boolean {
    return !(this.RTSDays === this.RTSDaysEnum.Other && new Date(this.RTSWStop) <= new Date(this.RTSWStart));
  }

  public dateUpdate(dateType: 'RTSWStart' | 'RTSWStop', date: string): void {
    if (dateType) this[dateType] = date;
    this.update();
  }

  public update(): void {
    this.RTWSUpdate.emit({rtsDays: this.RTSDays, rtswStart: this.RTSWStart, rtswStop: this.RTSWStop});
  }

  public get RTSWStopDateOptions() {
    const startDate = (this.RTSWStart || initialTreatments.returnToWorkSchool.rtswStart).split('/');
    return {
      ...this.dateOptions,
      disableUntil: {month: +startDate[0] - 1, day: +startDate[1] + 1, year: +startDate[2]},
      showTodayBtn: false
    };
  }

  public get RTSWStartDateOptions() {
    const startDate = initialTreatments.returnToWorkSchool.rtswStart.split('/');
    return {
      ...this.dateOptions,
      disableUntil: {month: +startDate[0] - 1, day: +startDate[1], year: +startDate[2]},
    };
  }

}
