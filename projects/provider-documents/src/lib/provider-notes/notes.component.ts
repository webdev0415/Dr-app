import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'services';
import { PatientAdditionalInformation } from 'common/models/data.model';

@Component({
    selector: 'doc-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class ProviderNotesComponent implements OnInit {

    @Input() readonly title: string;
    @Input() readonly notesType: string;
    @Input() readonly data: PatientAdditionalInformation;

    @ViewChild('textInput') textInputArea;

    public notesText: string;
    public isEditable = false;

    constructor(private dataService: DataService) {}

    get hasData(): boolean {
        return this.notesText && this.notesText !== '';
    }

    ngOnInit() {
        console.log('Patient Additional Information in Notes', this.data);
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
        const additionalFields = ['additionalDoctorNotes', 'diagnosticDoctorNotes', 'medicationInstructions', 'treatmentDoctorNotes', 'schoolNotes'];
        const lastAdditionalInfo = lastPatientValue.additionalInformation;
        const updateAdditionalInfo: boolean = !!additionalFields.filter(field => !!lastAdditionalInfo[field]).length;
        const updatedValue = {
            additionalInformation: {
                ...lastAdditionalInfo
            }
        };
        updatedValue.additionalInformation[this.notesType] = this.notesText;
        this.dataService.saveAdditionalInfo(lastPatientValue.patientInformation.patientId, updatedValue, updateAdditionalInfo)
            .subscribe(response => {
                if (response && this.notesType in response) {
                    this.dataService.updatePatient(updatedValue);
                }
        });
        this.isEditable = false;
    }
}
