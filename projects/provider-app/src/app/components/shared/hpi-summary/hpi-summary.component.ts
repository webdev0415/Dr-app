import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { DataService, NotificationsService, StateService } from 'services';
import { catchError, filter, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

const ASCIICharacters = '\x00-\x7F';
const spanishCharacters = '\xA1\xBF\xC1\xC9\xCD\xD1\xD3\xDA\xDC\xE1\xE9\xED\xF1\xF3\xFA\xFC';

@Component({
  selector: 'pa-hpi-summary',
  templateUrl: './hpi-summary.component.html',
  styleUrls: ['./hpi-summary.component.scss']
})
export class HpiSummaryComponent implements OnInit, OnDestroy {
  @Input() sourceName: string;
  @Input() filterByASCII = false;

  public viewOnly;
  public isEditable = false;
  private formControl: FormControl;
  public summary = '';

  private loading = new BehaviorSubject<boolean>(true);
  private _destroy: Subject<void> = new Subject<void>();
  constructor(private dataService: DataService,
              private changeDetector: ChangeDetectorRef,
              private stateService: StateService,
              private notificationService: NotificationsService) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
  }

  ngOnInit() {
    this.formControl = new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^\S+|\s+\S+\s*$/),
        Validators.minLength(3)
      ]
    );
    this.dataService.getSummary().pipe(filter(summary => {
      this.loading.next(summary === null);
      return summary !== null;
    }), takeUntil(this._destroy)).subscribe(res => {
      if (res && res.summary) {
        const regex = new RegExp(`[^${ASCIICharacters}${spanishCharacters}]`, 'g');
        this.summary = this.filterByASCII ? res.summary.replace(regex, '') : res.summary;
        this.changeDetector.detectChanges();
      }
    });
  }

  cancel(): void {
    this.isEditable = false;
    this.formControl.setValue(this.summary);
  }

  public editSummary(): void {
    this.isEditable = true;
    this.formControl.setValue(this.summary);
    this.changeDetector.detectChanges();
  }

  saveSummary() {
    if (this.formControl.invalid) {
      return;
    }
    const value = this.formControl.value.trim();
    this.formControl.setValue(value, {onlySelf: true, emitEvent: false});
    this.dataService.setSummary({summary: value});
    this.isEditable = false;

    this.dataService.saveSummary({ summary: this.summary }, this.stateService.patient.getCurrentId()).pipe(catchError(() => {
      this.notificationService.error('HPI saving failed.');
      return of(null);
    })).subscribe();
  }

  showNotSavedWarning() {
    this.notificationService.warning('HPI summary was not saved!', 'Warning!');
    this.isEditable = false;
  }

  get hpiLoading(): Observable<boolean> { return this.loading.asObservable(); }

  ngOnDestroy(): void {
    this._destroy.next();
    this.changeDetector.detach();
  }
}
