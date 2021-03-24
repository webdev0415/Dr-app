import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { RTWRestrictionType } from '../discharge.type';
import { ReturnToSchoolComponent } from '../return-to-school/return-to-school.component';

@Component({
  selector: 'pa-return-to-work',
  templateUrl: './return-to-work.component.html',
  styleUrls: ['./return-to-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReturnToWorkComponent extends ReturnToSchoolComponent implements OnInit {
  @Input() RTWSeenFor: string;
  @Input() RTWRestrictions: string;
  @Input() RTWRestrictionType: RTWRestrictionType;
  @Input() RTWWasIll: boolean;

  public restrictionsControl: FormControl;

  ngOnInit(): void {
    this.restrictionsControl = new FormControl(
      {value: this.RTWRestrictions, disabled: this.viewOnly || this.RTWRestrictionType !== 'Restricted'},
      [Validators.required, Validators.maxLength(255), Validators.minLength(10)]);
  }

  public restrictionsUpdate(restriction: RTWRestrictionType): void {
    this.RTWRestrictionType = this.RTWRestrictionType === restriction ? null : restriction;
    this.toggleRestrictedTextArea(restriction);
    this.update();
  }

  public update(): void {
    this.RTWSUpdate.emit({
      rtwSeenFor: this.RTWSeenFor,
      rtwWasIll: this.RTWWasIll,
      rtwRestrictionType: this.RTWRestrictionType,
      rtwRestrictions: this.validateRestrictions,
      rtswStart: this.RTSWStart,
      rtswStop: this.RTSWStop
    });
  }

  private get validateRestrictions(): string | null {
    return this.restrictionsControl.valid ? this.restrictionsControl.value : null;
  }

  private toggleRestrictedTextArea(restriction: RTWRestrictionType) {
    if (restriction === 'Restricted' && !this.viewOnly) {
      this.restrictionsControl.enable();
    } else {
      this.restrictionsControl.disable();
    }
  }

  public get datesValid(): boolean {
    return !(this.RTWRestrictionType === 'DateRange' && new Date(this.RTSWStop) <= new Date(this.RTSWStart));
  }
}
