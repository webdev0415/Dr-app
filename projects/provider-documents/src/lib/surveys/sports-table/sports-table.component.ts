import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import * as R from 'ramda';

import { Data, SportsCleared, SportsPhysical } from 'common/models/data.model';
import { DataService, StateService } from 'services';


@Component({
  selector: 'doc-sports-table',
  templateUrl: './sports-table.component.html',
  styleUrls: ['./sports-table.component.scss']
})
export class SportsTableComponent implements OnInit, OnDestroy {
  @Input() question;
  @Input() isPdf = false;

  public viewOnly = this.stateService.patient.getLastViewOnly();

  public sportsPhysical: SportsPhysical[] = [
    {
      name: '',
      normal: true,
      abnormal: ''
    }
  ];
  public sportsCleared = {
    cleared: 'cleared',
    sports: '',
    reason: '',
    recommendations: ''
  };

  private abnormalFormControl: FormControl;
  private sportsClearedFormGroup: FormGroup;
  private getPatientSub$: Subscription;

  constructor(private stateService: StateService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.abnormalFormControl = new FormControl('', [Validators.maxLength(127)]);
    this.sportsClearedFormGroup = new FormGroup({
      sports: new FormControl(this.sportsCleared.sports, [Validators.maxLength(255)]),
      reason: new FormControl(this.sportsCleared.reason, [Validators.maxLength(255)]),
      recommendations: new FormControl(this.sportsCleared.recommendations, [Validators.maxLength(255)]),
    });

    this.getPatientSub$ = this.dataService.getPatient().subscribe((patient: Data) => {
      this.sportsPhysical = patient.additionalInformation.sportsPhysical;
      if (patient.additionalInformation.sportsCleared) this.sportsCleared = patient.additionalInformation.sportsCleared;
      this.sortSportsPhysical();
    });
  }

  sortSportsPhysical(): void {
    const nameCheck = (el) => {
      return R.not(R.includes(R.prop('name', el), ['Medical', 'Musculoskeletal']));
    };
    this.sportsPhysical = R.compose(
      R.insert(12, {name: 'Musculoskeletal'}),
      R.insert(0, {name: 'Medical'}),
      R.filter(nameCheck)
    )(this.sportsPhysical[0].name === 'Medical' ? this.sportsPhysical : this.sportsPhysical.reverse());
  }


  onNormalClick(event, data) {
    if (event.checked) {
      data.abnormal = '';
    }
  }

  onClearedChange(event, data) {
    if (!this.viewOnly) {
      event.preventDefault();
      if (this.sportsCleared.cleared !== data) {
        this.sportsCleared.cleared = data;
        if (data !== 'specific') {
          this.sportsCleared.sports = '';
        }
      }
    }
  }

  onSportsClearedEnter(data: SportsCleared, section: string) {
    switch (section) {
      case 'sports':
        data.sports = this.sportsClearedControlsValue(section);
        break;
      case 'reason':
        data.reason = this.sportsClearedControlsValue(section);
        break;
      case 'recommendations':
        data.recommendations = this.sportsClearedControlsValue(section);
        break;
    }
  }

  onAbnormalEnter(data: SportsPhysical) {
    if (data.abnormal.trim() !== '') data.normal = false;
    data.abnormal = this.abnormalControlValue;
  }

  isAbnormalValid(data: SportsPhysical): boolean {
    return data.abnormal !== undefined && !data.normal;
  }

  private get abnormalControlValue(): string {
    return this.abnormalFormControl.value;
  }

  private sportsClearedControlsValue(section: string): string {
    return this.sportsClearedFormGroup.get(section).value;
  }

  public get abnormalControl(): FormControl {
    return this.abnormalFormControl;
  }

  public get sportsClearedControls(): FormGroup {
    return this.sportsClearedFormGroup;
  }

  ngOnDestroy(): void {
    this.getPatientSub$.unsubscribe();
  }
}
