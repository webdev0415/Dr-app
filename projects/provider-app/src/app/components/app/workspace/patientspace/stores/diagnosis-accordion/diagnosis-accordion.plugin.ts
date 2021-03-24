import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { of as ObservableOf } from 'rxjs';
import { getActionTypeFromInstance, NgxsPlugin } from '@ngxs/store';

import { DialogService } from 'services/app/dialog.service';
import { PpcustomdialogComponent } from '../../../../../shared/popups/ppcustomdialog/ppcustomdialog.component';

import { DiagnosisAccordionModel } from 'common/models/diagnosis-accordion.model';
import { AddIllness, ToggleSelection } from './diagnosis-accordion.actions';
import { StateService } from '../../../../../../services';
import { DiagnosisTabsEnum } from '../../../../../../common/enums';


@Injectable()
export class DiagnosisAccordionPlugin implements NgxsPlugin {
  private customDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minHeight: '150px',
    width: '350px'
  };

  constructor(private dialogService: DialogService, private stateService: StateService) {}

  handle(state, action, next) {
    if (getActionTypeFromInstance(action) === AddIllness.type) {
      const model: DiagnosisAccordionModel = state.diagnosisAccordionModel;
      const existingDiagnosisIndex = model.diagnosticEngine.findIndex(item => item.icd10 === action.icd10);
      if (existingDiagnosisIndex > -1) {
        if (this.stateService.patient.tabs.getWorkingDiagnosis() !== DiagnosisTabsEnum.PHARMACIST_SUMMARY) this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
          ...this.customDialogConfig,
          data: { message: 'This illness already exists' }
        })).subscribe();
        if (model.diagnosticEngine[existingDiagnosisIndex].icdGroup === 'Defined Illnesses') return next(state, new ToggleSelection(action.icd10));
        if (model.illnessesInformation.selected_illnesses.findIndex(item => item.icd10_code === action.icd10) < 0)
          return next(state, new ToggleSelection(action.icd10));
        return ObservableOf(state);
      }
    }
    return next(state, action);
  }
}
