import { Component, Inject, OnInit } from '@angular/core';
import { PpSelectBaseComponent } from '../pp-select-base/pp-select-base.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PpSelectTreatmentsInputData, PpSelectTreatmentsListItem } from 'common/interfaces/pp-select.interface';

@Component({
  selector: 'pa-pp-add-treatments',
  templateUrl: './pp-add-treatments.component.html',
  styleUrls: ['./pp-add-treatments.component.scss']
})
export class PpAddTreatmentsComponent extends PpSelectBaseComponent implements OnInit {
  public selected: number[] = [];
  public list: PpSelectTreatmentsListItem[] = [];

  constructor(
    public dialogRef: MatDialogRef<PpAddTreatmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PpSelectTreatmentsInputData
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.selected = this.data.selection;
    this.list = this.data.list;
  }

  public domainOf(link: string) {
    if (link && typeof link === 'string') {
      const www = link.indexOf('www.');
      const com = link.indexOf('.com') + 4;
      return link.substring(www, com);
    } else return '';
  }
}
