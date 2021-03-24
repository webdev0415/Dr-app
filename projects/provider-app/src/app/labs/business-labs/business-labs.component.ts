import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { equals, prop, groupWith, sortBy, eqProps, compose } from 'ramda';
import { BehaviorSubject, Observable } from 'rxjs';

import { NotificationsService, StateService } from '../../services';
import { BusinessLab } from '../business-lab.model';
import { LabsService } from '../services/labs.service';


@Component({
  selector: 'pa-business-labs',
  templateUrl: './business-labs.component.html',
  styleUrls: ['./business-labs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessLabsComponent implements OnInit, AfterViewInit {
  public viewOnly: boolean;
  public businessLabsGroups: Array<BusinessLab[]> = [];
  public _expandedPanels: BehaviorSubject<{ [groupName: string]: boolean }> = new BehaviorSubject<{[p: string]: boolean}>({});

  constructor(
    private stateService: StateService,
    private labsService: LabsService,
    public cdRef: ChangeDetectorRef,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.businessLabsGroups = compose(sortBy(group => this.displayGrouped(group[0].groupName) ? 1 : -1), groupWith(eqProps('groupName')), sortBy(prop('groupName')))(this.labsService.businessLabs);
    this.businessLabsGroups.forEach(item => this.expandPanel(item[0].groupName));
    this.viewOnly = this.stateService.patient.getLastViewOnly();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.cdRef.detectChanges());
  }

  public saveResults(cb: () => void = null): void {
    this.labsService.updateLabResults().subscribe((result) => {
      const { removedLabs, updatedLabs } = result;
      this.cdRef.detectChanges();
      if (!removedLabs.length && !updatedLabs.length) {
        this.notificationsService.success('Lab results have been successfully processed and saved');
        this.updateLabsAlert();
      } else this.notificationsService.error('ERROR: Unable to save lab results');
      this.cdRef.detectChanges();
      if (cb) cb();
    });
  }

  public isOrdered(symptomId: string): boolean {
    this.cdRef.markForCheck();
    return this.labsService.orderedLabs.includes(symptomId);
  }

  public isGroupOrdered(group: BusinessLab[]): boolean {
    this.cdRef.markForCheck();
    return group.some(item => this.labsService.orderedLabs.includes(item.symptomId));
  }

  public get saveButtonDisabled(): boolean {
    return !this.labsService.businessLabs.some(item => item.dirty) || this.viewOnly;
  }

  public expandPanel(groupName: string, state = true): void {
    const currentValue = this._expandedPanels.getValue();
    this._expandedPanels.next({ ...currentValue, [groupName]: state });
  }

  private updateLabsAlert(): void {
    this.labsService.pushOrdersState().subscribe();
  }

  public get expandedPanels(): Observable<{[p: string]: boolean}> { return this._expandedPanels.asObservable(); }

  public displayGrouped(groupName: string): boolean {
    return groupName === 'Urine Dip Stick' || groupName === 'Rapid Flu Test';
  }
}
