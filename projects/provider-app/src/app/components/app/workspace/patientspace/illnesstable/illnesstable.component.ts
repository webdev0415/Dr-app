import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Data } from 'common/models/data.model';
import { DataService } from 'services/data.service';
import { Helpers } from 'utils/helpers';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { StateService } from 'services/state.service';
import { DialogService } from 'services/app/dialog.service';
import { PpcontributorsComponent } from 'components/shared/popups/ppcontributors/ppcontributors.component';
import { IllnessPresentationTypesEnum } from 'common/enums/illness-presentation-types.enum';
import { SymptomFilterPipe } from 'utils/symptom-filter.pipe';
import { DiagnosisAccordionItem, DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';

@Component({
  selector: 'pa-illnesstable',
  templateUrl: './illnesstable.component.html',
  styleUrls: ['./illnesstable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('0ms')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class IllnessTableComponent {
  @Input() source;
  @Input() triageDict;
  @Input() selection;
  @Input() illnessPresentation;
  @Input() expanded: boolean;
  @Input() group: string;
  @Input() topIllnessQuantity: number;
  @Input() accordionName: string;
  @Input() viewOnly: boolean;
  @Input() reviewed: boolean | undefined;
  @Output() change = new EventEmitter<string>();
  @Output() toggleAccordionEvent = new EventEmitter<{group: string, expanded: boolean}>();
  @Output() reviewDialog = new EventEmitter<any>();
  public Patient: Data;
  public illness = { confidence: 0, iCriticality: 0, icdName: '' };
  public contributors = new MatTableDataSource();
  public helpers = Helpers;
  public illnessPresentationEnum: typeof IllnessPresentationTypesEnum = IllnessPresentationTypesEnum;

  private stdDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    minHeight: '140px',
    maxHeight: '80vh',
    width: '55%'
  };

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private stateService: StateService,
    public dialogService: DialogService
  ) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
  }

  isExtendedRow = (index, item) => item.extend;

  checkIndex = (index) => index < this.topIllnessQuantity;

  toggleAccordion(row) {
    this.expanded = !this.expanded;
    this.toggleAccordionEvent.emit({ expanded: this.expanded, group: row.icdGroup });
  }

  getTriageValue(symptomId: string) {
    return this.dataService.getTriageValue(symptomId, this.triageDict);
  }

  onIllnessChange(e: UIEvent, row: DiagnosticEngine) {
    e.preventDefault();
    this.change.emit(row.icd10);
  }

  isSelected(row) {
    return this.selection.includes(row.icd10);
  }

  private toContributors(icd10: string) {
    if (icd10) {
      this.dialogService.open(PpcontributorsComponent, Object.assign(new MatDialogConfig(), {
        ...this.stdDialogConfig,
        data: {
          illness: icd10,
        }
      })).subscribe();
    }
  }

  clickRow(row): void {
    if (row.contributors.length) {
      this.toContributors(row.icd10);
    } else {
      this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
        ...this.stdDialogConfig,
        data: {
          message: 'This illness doesn\'t have contributors.'
        }
      })).subscribe();
    }
  }

  showInfo(row) {
    const name = (new SymptomFilterPipe()).transform(row.symptomName);
    this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
      ...this.stdDialogConfig,
      data: {
        contribList: true,
        list: row.source,
        message: `${this.group} is associated with ${name} according to the following sources:`,
      }
    })).subscribe();
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
