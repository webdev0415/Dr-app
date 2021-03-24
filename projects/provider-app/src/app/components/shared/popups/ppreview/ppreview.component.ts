import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pa-ppcustomdialog',
  templateUrl: './ppreview.component.html',
  styleUrls: ['./ppreview.component.scss']
})
export class PpreviewComponent {
  public info = {
    title: '', message: ''
  };
  public list = [
    'Patient Symptoms',
    'Patient Physical Exams'
  ];

  constructor(
    public dialogRef: MatDialogRef<PpreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      switch (this.data.type) {
        case 'ReviewBoth' : {
          this.info = {
            title: 'Item' +
            '(s) Waiting To Be Reviewed',
            message: 'Before you can enter a diagnostic into the system, you must review and acknowledge:'
          };
          break;
        }
        case 'ReviewSymptoms': {
          this.info = {
            title: 'Review Patient Symptoms',
            message: 'Before you can enter a diagnostic into the system, you must review and acknowledge the patient symptoms'
          };
          break;
        }
        case 'ReviewExams': {
          this.info = {
            title: 'Review Patient Physical Exams',
            message: 'Before you can enter a diagnostic into the system, you must review and acknowledge the Patient Physical Exams'
          };
          break;
        }
      }
    }

  saveDialog(link) {
    this.dialogRef.close(link);
  }

  cancelDialog() {
    this.dialogRef.close(false);
  }

}
