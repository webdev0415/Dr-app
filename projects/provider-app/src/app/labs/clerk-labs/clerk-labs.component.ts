import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  BottomButtonsControl,
  StateBottomButtons
} from '../../components/app/workspace/patientspace/bottom-space/interfaces';
import { NavigationService, StateService } from '../../services';
import { BusinessLabsComponent } from '../business-labs/business-labs.component';

@Component({
  selector: 'pa-clerk-labs',
  templateUrl: './clerk-labs.component.html',
  styleUrls: ['./clerk-labs.component.scss']
})
export class ClerkLabsComponent implements BottomButtonsControl {
  @ViewChild('businessLabs', { static: false }) businessLabs: BusinessLabsComponent;

  constructor(
    protected titleService: Title,
    protected stateService: StateService,
    protected navigationService: NavigationService
  ) {
    this.titleService.setTitle(`Rapid Screenings`);
    this.stateService.app.header.setData(`Rapid Screenings`);
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      saveLab: true,
      saveAndExit: true
    };
  }

  getDisabledBottomButtons(): StateBottomButtons {
    const businessLabsState = Boolean(this.businessLabs.saveButtonDisabled);
    return {
      saveLab: businessLabsState,
      saveAndExit: businessLabsState
    };
  }

  onClickBottomButton(nameButton: 'saveLab' | 'saveAndExit'): void {
    const exit = nameButton === 'saveAndExit';
    this.businessLabs.saveResults(exit ? this.navigationService.navigateToPatients.bind(this.navigationService) : null);
  }

}
