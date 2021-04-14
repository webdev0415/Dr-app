import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';


import { DiagnosisTabsEnum } from '../../common/enums';
import { Data } from '../../common/models/data.model';
import {
  BottomButtonsControl,
  StateBottomButtons
} from '../../components/app/workspace/patientspace/bottom-space/interfaces';

import {
  DataService,
  NavigationService,
  StateService,
} from '../../services';
import { UserService } from '../../user/user.service';

import { pagesTitles } from '../../static/static.pages';

import { ContinueButton } from '../../components/app/workspace/patientspace/continue-button/continue-button';
import { BusinessLabsComponent } from '../business-labs/business-labs.component';
import { OrderLabsComponent } from '../order-labs/order-labs.component';

@Component({
  selector: 'pa-provider-labs',
  templateUrl: './provider-labs.component.html',
  styleUrls: ['./provider-labs.component.scss']
})
export class ProviderLabsComponent extends ContinueButton implements BottomButtonsControl, OnDestroy {
  @ViewChild('businessLabs', { static: false }) private businessLabs: BusinessLabsComponent;
  @ViewChild('orderLabs') orderLabs: OrderLabsComponent;
  public readonly title = pagesTitles.orderLabs;

  public patient: Data;
  public viewOnly: boolean;

  private _destroy$ = new Subject<void>();

  constructor(
    private titleService: Title,
    private stateService: StateService,
    protected userService: UserService,
    private dataService: DataService,
    private navigationService: NavigationService
  ) {
    super(userService);
    this.titleService.setTitle(`Rapid Screenings`);
    this.stateService.app.header.setData(`Rapid Screenings`);

    this.stateService.patient.getViewOnly().pipe(takeUntil(this._destroy$)).subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    this.dataService.getPatient().pipe(filter(data => !!data), takeUntil(this._destroy$)).subscribe(data => this.patient = data);
  }

  getDisabledBottomButtons(): StateBottomButtons {
    const ordersState = this.orderLabs.getDisabledBottomButtons();
    const businessLabsState = this.businessLabs.saveButtonDisabled;
    return {
      ...ordersState,
      saveLab: businessLabsState,
      saveAndExit: businessLabsState,
      continue: false
    };
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      sendOrder: !this.viewOnly && !!this.patient,
      continue: !!this.patient,
      saveLab: !this.viewOnly,
      saveAndExit: !this.viewOnly
    };
  }

  onClickBottomButton(nameButton: string): void {
    switch (nameButton) {
      case 'continue':
        this.businessLabs.saveResults();
        if (this.isPharmacistUserRole()) {
          this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.PHARMACIST_SUMMARY);
          this.stateService.app.setWorkingDiagnosisView('pharmacistDiagnosis');
        }
        this.navigationService.navigate([
          'patients',
          this.stateService.patient.getCurrentId(),
          'diagnosis'
        ]);
        break;
      case 'sendOrder':
        this.orderLabs.completeOrder().subscribe(() => this.businessLabs.cdRef.detectChanges());
        break;
      case 'saveLab':
        this.businessLabs.saveResults();
        break;
      case 'saveAndExit':
        this.businessLabs.saveResults(this.navigationService.navigateToPatients.bind(this.navigationService));
        break;
      case 'previous':
        this.stateService.app.setWorkingDiagnosisView('contributortable');
        this.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
        this.navigationService.navigate([
          'patients',
          this.stateService.patient.getCurrentId(),
          'diagnosis'
        ]);
        break;
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
