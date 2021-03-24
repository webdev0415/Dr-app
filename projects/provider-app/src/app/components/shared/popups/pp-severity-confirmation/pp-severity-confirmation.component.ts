import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { severityViewEnum } from './severity-view.enum';
import { CptData } from './cpt-data.static';
import { SeverityConfirmationInterface } from './severity-confirmation.interface';

@Component({
  selector: 'pa-pp-severity-confirmation',
  templateUrl: './pp-severity-confirmation.component.html',
  styleUrls: ['./pp-severity-confirmation.component.scss']
})
export class PpSeverityConfirmationComponent {
  private severityView: severityViewEnum = severityViewEnum.patientRisk;
  public cptData = CptData;
  public severityConfirmation: SeverityConfirmationInterface = {
    patientRisk: '',
    cptCode: ''
  };

  constructor(
    public dialogRef: MatDialogRef<PpSeverityConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isPicBusiness: boolean }) { }

  selectSeverity(severity: string) {
    this.severityConfirmation.patientRisk = severity;
    if (!this.data.isPicBusiness) {
      this.changeSeverityView(severityViewEnum.cptCode);
    } else this.closeDialog();
  }

  changeSeverityView(view: severityViewEnum) {
    this.severityView = view;
  }

  get isPatientRiskView(): boolean {
    return this.severityView === severityViewEnum.patientRisk;
  }

  get isCptCodeView(): boolean {
    return this.severityView === severityViewEnum.cptCode;
  }

  onPreviousButtonClick(): void {
    this.changeSeverityView(severityViewEnum.patientRisk);
  }

  closeDialog(): void {
    this.dialogRef.close(this.severityConfirmation);
  }
}
