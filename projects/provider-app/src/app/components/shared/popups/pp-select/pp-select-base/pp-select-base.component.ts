import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, first, takeUntil, tap } from 'rxjs/operators';

import { PpSelectComponentInterface, PpSelectInputData } from 'common/interfaces/pp-select.interface';

@Component({
  selector: 'pa-pp-select-base',
  template: ''
})
export class PpSelectBaseComponent implements OnInit, PpSelectComponentInterface, OnDestroy {
  public selected: any[] = [];
  public list: any[] = [];
  public formInputControl: FormControl = null;
  public showPreloader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  @ViewChild('contentWrapper') contentWrapper: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<PpSelectBaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PpSelectInputData
  ) { }

  ngOnInit(): void {
    this.formInputControl = this.inputControl;
    this.formInputControl.valueChanges.pipe(takeUntil(this.destroy$), tap(() => this.showPreloader$.next(false)), debounceTime(500), distinctUntilChanged(), tap(() => {
      this.onClickSearch();
    })).subscribe();
    this.checkBackdropClick();
  }

  checkBackdropClick(): void {
    if (!this.dialogRef.disableClose) {
      this.dialogRef.backdropClick().subscribe(() => this.cancelDialog());
      this.dialogRef.keydownEvents().pipe(filter(keydown => keydown.code === 'Escape')).subscribe(() => this.cancelDialog());
    }
  }

  noResults(): Observable<boolean> { return of(true); }

  drugInputChange(value: string): Observable<any[]> {
    return of([]);
  }

  selectItem(item): void {
    if (this.selected[0] === item) {
      this.selected = [];
    } else {
      this.selected = [item];
    }
  }

  toggleItem(index: number, presenting?: boolean): void {
    if (this.selected.includes(index)) {
      this.selected.splice(this.selected.indexOf(index), 1);
    } else {
      this.selected.push(index);
    }
  }

  get inputControl(): FormControl {
    if (this.formInputControl === null) {
      const form = new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.pattern(/^[ a-zA-Z0-9%._,\-]+( [a-zA-Z0-9%._\-]+)*$/),
            Validators.minLength(3)
          ],
          updateOn: 'change'
        }
      );
      this.formInputControl = form;
      return form;
    }
    return this.formInputControl;
  }

  searchAsync(): Observable<any[]> {
    this.selected = [];
    return of([]);
  }

  onClickSearch(): void {
    this.searchAsync().pipe(first(), tap(() => {
      if (this.viewPort) {
        this.viewPort.scrollToIndex(0, 'auto');
      } else {
        this.contentWrapper.nativeElement.scrollTop = 0;
      }
    })).subscribe(result => {
      this.data.list = result;
    });
  }

  public confirmSelected(): void {
    this.closeDialog(this.selected);
  }

  public cancelDialog(): void {
    this.closeDialog([]);
  }

  public closeDialog(result: any[]): void {
    this.dialogRef.close({ selected: result });
  }

  get confirmButtonDisabled(): boolean { return false; }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
