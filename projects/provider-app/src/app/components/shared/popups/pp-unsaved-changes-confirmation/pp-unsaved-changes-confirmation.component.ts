import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pa-pp-unsaved-changes-confirmation',
  templateUrl: './pp-unsaved-changes-confirmation.component.html',
  styleUrls: ['./pp-unsaved-changes-confirmation.component.scss']
})
export class PpUnsavedChangesConfirmationComponent {

  constructor(
    private readonly dialogRef: MatDialogRef<PpUnsavedChangesConfirmationComponent, boolean>,
  ) {
  }

  onClickCancel() {
    this.dialogRef.close(false);
  }

  onClickConfirm() {
    this.dialogRef.close(true);
  }

}
