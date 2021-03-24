import { Input, QueryList, TemplateRef, ViewChildren } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { isNil } from 'ramda';

import { BusinessLab } from './business-lab.model';


import { LabRowType } from './types/lab-row.type';

export abstract class BaseLabRowComponent<T extends LabRowType> {
  @Input() businessLab: BusinessLab;
  @Input() viewOnly: boolean;
  @ViewChildren('td') tdElements: QueryList<TemplateRef<HTMLTableCellElement>>;

  protected stdDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    minHeight: '180px',
    maxHeight: '80%',
    width: '55%'
  };

  public isNil = isNil;


  public updateLabResult(result: T): void {
    if (this.viewOnly) return;
    this.businessLab.updateLabResult(result);
  }

  public get labValue(): Observable<string | number | boolean> { return this.businessLab.value; }

  public isActive(button): Observable<boolean> {
    return this.labValue.pipe(tap(console.log), map(value => !this.isNil(value) && this.businessLab.updateRules[button].predicate(value)));
  }
}
