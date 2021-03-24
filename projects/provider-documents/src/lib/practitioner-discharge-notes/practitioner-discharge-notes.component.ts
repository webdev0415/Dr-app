import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PatientAdditionalInformation } from 'common/models/data.model';
import { TreatmentsService } from 'treatments/treatments.service';
import { DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';
import { DiagnosisAccordionState } from 'components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.state';
import { Store } from '@ngxs/store';
import { DataService } from 'services';
import { BuildBackendTreatments } from '../../../../provider-app/src/app/treatments/store-events/build-backend-treatments.event';
import { DischargeInstructionsUpdate } from '../../../../provider-app/src/app/treatments/store-events/discharge-instructions-update.event';
import { NewTreatmentsService } from 'treatments/treatments.new.service';

@Component({
  selector: 'doc-practitioner-discharge-notes',
  templateUrl: './practitioner-discharge-notes.component.html',
  styleUrls: ['./practitioner-discharge-notes.component.scss']
})
export class PractitionerDischargeNotesComponent implements OnInit {

  @Input() readonly title: string;
  @Input() readonly notesType: string;
  @Input() readonly data: PatientAdditionalInformation;

  @ViewChild('textInput') textInputArea;

  public notesText: string;
  public isEditable = false;

  constructor(
    private dataService: DataService,
    private treatmentsService: TreatmentsService,
    private newTreatmentService: NewTreatmentsService,
    private store: Store,
  ) {}

  get hasData(): boolean {
    return this.notesText && this.notesText !== '';
  }

  ngOnInit() {
    this.notesText = this.data[this.notesType];
  }

  cancel(): void {
    this.isEditable = false;
  }

  editNotes(): void {
    this.isEditable = true;
  }

  saveNotes(): void {
    this.notesText = this.textInputArea.nativeElement.value.trim();
    const lastPatientValue = this.dataService.getPatientLastValue();
    this.treatmentsService.dispatch(new DischargeInstructionsUpdate('customInstructions', this.notesText))
      .then(() => {
        this.treatmentsService.saveTreatments(lastPatientValue.visitInformation.sessionId, this.newTreatmentService.prepareTreatmentsForSaving).subscribe();
      });
    this.isEditable = false;
  }

  private get diagnosticEngine(): DiagnosticEngine[] {
    return this.store.selectSnapshot(DiagnosisAccordionState.diagnosticEngine);
  }

  public get prepareTreatmentsToSave() {
    this.treatmentsService.dispatch(new BuildBackendTreatments(this.diagnosticEngine));
    return this.treatmentsService.selectSnapshot().backendTreatments.filter(item => {
      return this.diagnosticEngine.find(de => item.contributor.icd_code === de.icd10) && this.diagnosticEngine.find(de => item.contributor.icd_code === de.icd10).isSelected;
    });
  }
}
