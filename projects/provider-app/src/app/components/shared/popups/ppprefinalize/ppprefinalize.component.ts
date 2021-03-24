import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from 'services/state.service';
import { MatDialogConfig } from '@angular/material/dialog';
import {DialogService} from '../../../../services/app/dialog.service';

interface DialogData extends MatDialogConfig {
  treatments: string[];
}

@Component({
  selector: 'pa-ppprefinalize',
  templateUrl: './ppprefinalize.component.html',
  styleUrls: ['./ppprefinalize.component.scss']
})
export class PpprefinalizeComponent {
  constructor(
    private stateService: StateService,
    public dialogRef: MatDialogRef<PpprefinalizeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogService: DialogService ) { }

    closeDialog() {
      this.dialogRef.close(false);
    }

    editNotes() {
      this.stateService.patient.editNotes('treatment');
    }

    finalize() {
      this.dialogRef.close(true);
    }

    openSeverityDialog() {
      this.dialogRef.close(true);
    }

}
