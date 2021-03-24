import { Component, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PpSelectBaseComponent } from '../pp-select-base/pp-select-base.component';
import { PpSelectSymptomInputData, PpSelectSymptomListItem } from 'common/interfaces/pp-select.interface';


@Component({
  selector: 'pa-pp-add-symptom-component',
  templateUrl: './pp-add-symptom.component.html',
  styleUrls: ['./pp-add-symptom.component.scss'],
})
export class PpAddSymptomComponent extends PpSelectBaseComponent {
  public filters: {name: string, type: string}[] = [];
  public selected: { symptomID: string, presenting: boolean, hasMultipleValue: boolean}[] = [];

  constructor(
    public dialogRef: MatDialogRef<PpAddSymptomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PpSelectSymptomInputData
  ) {
    super(dialogRef, data);
  }

  drugInputChange(value: string): Observable<PpSelectSymptomListItem[]> {
    let list: PpSelectSymptomListItem[] = this.data.parsedSymptoms.filter(item => (item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) && !this.data.excluded.includes(item.symptomID));
    list = list.map(item => {
      const category = this.data.symptomCategories.find(cat => cat.categoryID.includes(item.categoryID));
      return {...item, categoryName: category.categoryName, groupName: category.groupName};
    });
    this.filters.forEach(filter => {
      list = list.filter(item => item[filter.type] === filter.name);
    });
    list.sort((prevName, nextName) => {
      const prevGroupName = prevName.groupName.toLowerCase();
      const nextGroupName = nextName.groupName.toLowerCase();
      if (prevGroupName > nextGroupName) return 1;
      if (prevGroupName < nextGroupName) return -1;
      if (prevGroupName === nextGroupName) {
        return prevName.categoryName < nextName.categoryName ? -1 : prevName.categoryName > nextName.categoryName ? 1 : 0;
      }
    });
    this.selected = [];
    return of(list);
  }

  searchAsync(): Observable<PpSelectSymptomListItem[]> {
    const form = this.formInputControl;
    if (form.valid) return this.drugInputChange(form.value.trim());
    else return of([]);
  }

  toggleItem(index: number): void {
    const existingSelectedItemIndex = this.selected.findIndex(item => item.symptomID === this.data.list[index].symptomID);
    if (existingSelectedItemIndex > -1) {
      const existingSelectedItem = this.selected[existingSelectedItemIndex];
      this.selected.splice(existingSelectedItemIndex, 1);
      delete this.data.list[index].response;
    } else {
      this.selected.push({ symptomID: this.data.list[index].symptomID, presenting: true, hasMultipleValue: false });
    }
    this.isSymptomAdmits(index);
  }

  isSymptomAdmits(index: number): boolean {
    let existingSelectedItemIndex;
    if (this.data.list[index]) {
      existingSelectedItemIndex = this.selected.findIndex(item => item.symptomID === this.data.list[index].symptomID);
    } else return false;
    if (existingSelectedItemIndex > -1 && this.data.list[index].multipleValues) {
      const existingSelectedItem = this.selected[existingSelectedItemIndex];
      if (existingSelectedItem.presenting === true) {
        existingSelectedItem.hasMultipleValue = true;
        return true;
      }
    } else {
      return false;
    }
  }

  addFilter(filter: string, type: string): void {
    if ((filter).trim() && !this.filters.find(item => item.name === filter.trim())) {
      this.filters.push({name: filter.trim(), type: type});
      this.onClickSearch();
    }
  }

  removeFilter(filter: {name: string, type: string}): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
      this.onClickSearch();
    }
  }

  get confirmButtonDisabled(): boolean {
    return !this.selected.length;
  }

  public disabled(symptomID: string): boolean {
    return Boolean(this.selected.length && this.selected[0].symptomID !== symptomID);
  }

  public togglePresenting(symptomID): void {
    const selectedItem = this.selected.find(item => item.symptomID === symptomID);
    selectedItem.presenting = !selectedItem.presenting;
  }

}
