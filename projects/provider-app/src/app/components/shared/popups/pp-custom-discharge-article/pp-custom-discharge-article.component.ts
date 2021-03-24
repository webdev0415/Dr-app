import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pa-pp-custom-discharge-article',
  templateUrl: './pp-custom-discharge-article.component.html',
  styleUrls: ['./pp-custom-discharge-article.component.scss']
})
export class PpCustomDischargeArticleComponent {

  constructor(
    public dialogRef: MatDialogRef<PpCustomDischargeArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.dialogRef.backdropClick().subscribe(() => {
      this.closeDialog();
    });
  }

  public closeDialog(): void {
    this.dialogRef.close(this.data);
  }

  public cancelDialog(): void {
    this.dialogRef.close();
  }

}
