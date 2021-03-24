import { Component, Inject, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { NotesTabs } from 'common/models/data.model';
import { StateService } from 'services/state.service';
import { DataService } from 'services';

@Component({
  selector: 'pa-ppdrnotes',
  templateUrl: './ppdrnotes.component.html',
  styleUrls: ['./ppdrnotes.component.scss']
})
export class PpdrnotesComponent implements AfterViewInit {

  public notes: string;
  public treatnotes: string;
  public diagnotes: string;
  public medicationInstructions: string;
  public schoolNotes: string;
  public workNotes: string;
  public therapyOrders: string;
  public doc2doc: string;

  public viewOnly: boolean;
  public focusLost = false;

  public index = 0;

  public formControlDiagNotes: FormControl;

  constructor(
    private stateService: StateService,
    private dataService: DataService,
    public dialogRef: MatDialogRef<PpdrnotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    switch (data['which']) {
      case 'other': { this.index = NotesTabs.Other; break; }
      case 'treatment': { this.index = NotesTabs.Treatment; break; }
      case 'medicationInstructions': { this.index = NotesTabs.MedicationInstructions; break; }
      case 'schoolNotes' : { this.index = NotesTabs.SchoolNotes; break; }
      case 'workNotes' : { this.index = NotesTabs.WorkNotes; break; }
      case 'therapyOrders' : { this.index = NotesTabs.TherapyOrders; break; }
      case 'doc2doc' : { this.index = NotesTabs.Doc2Doc; break; }
      default: { this.index = NotesTabs.Other; break; }
    }
    this.formControlDiagNotes = new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^\S+|\s+\S+\s*$/),
        Validators.minLength(3)
      ]
    );
    this.notes = data['additionalDoctorNotes'];
    this.treatnotes = data['treatmentDoctorNotes'];
    this.dataService.getSummary().subscribe(res => {
      if (res && res.summary) {
        this.diagnotes = res.summary;
      }
    });
    this.formControlDiagNotes.setValue(this.diagnotes);

    this.medicationInstructions = data['medicationInstructions'];
    this.schoolNotes = data['schoolNotes'];
    this.workNotes = data['workNotes'];
    this.therapyOrders = data['therapyOrders'];
    this.doc2doc = data['doc2doc'];
  }

  closeDialog() {
    this.formControlDiagNotes.setValue(this.diagnotes);
    this.dialogRef.close(false);
  }

  saveNotes() {
    this.formControlDiagNotes.setValue(this.formControlDiagNotes.value.trim(), {onlySelf: true, emitEvent: false});
    this.dataService.setSummary({ summary: this.formControlDiagNotes.value.trim() });
    this.dataService.saveSummary({ summary: this.formControlDiagNotes.value.trim() }, this.stateService.patient.getCurrentId()).subscribe();
    this.dialogRef.close(['', this.treatnotes, this.notes, this.medicationInstructions, this.schoolNotes, this.workNotes, this.therapyOrders, this.doc2doc]);
  }

  /**
   disable active tab's textarea and input elements if patient is completed
   */
  onTabChange(): void {
    if (!this.viewOnly) {
      this.focusOnTextArea();
    } else {
      this.disableTextAreas();
    }
  }

  focusOnTextArea() {
    ['textArea'].forEach(elementType => {
      document.querySelectorAll(elementType)
        .forEach((element: HTMLInputElement) => {
          if (element.getAttribute('index') === this.index.toString()) {
            if (!this.focusLost) {
              element.addEventListener('blur', () => {this.blured(element); });
            }
            element.focus();
          }
        });
    });
  }

  disableTextAreas() {
    ['textArea', 'input'].forEach(elementType => {
      document.querySelectorAll(elementType)
        .forEach((element: HTMLInputElement) => {
          element.disabled = true;
        });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.viewOnly) {
        this.disableTextAreas();
      } else {
        this.focusOnTextArea();
      }
    });
  }

  blured(element: HTMLInputElement) {
    if (!this.focusLost) {
      this.focusLost = true;
      element.focus();
    }
  }

}
