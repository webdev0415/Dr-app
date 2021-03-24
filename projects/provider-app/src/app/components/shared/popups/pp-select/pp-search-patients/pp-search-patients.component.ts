import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs/Observable';
import { finalize, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { isNil } from 'ramda';


import { PpSelectBaseComponent } from '../pp-select-base/pp-select-base.component';
import { PpSearchPatientsInputData, PpSearchPatientsListItem } from 'common/interfaces/pp-select.interface';
import { DataService, StateService } from 'services';
import { PatientListService } from '../../../../../patient-list/services/patient-list.service';

@Component({
  selector: 'pa-pp-search-patients',
  templateUrl: './pp-search-patients.component.html',
  styleUrls: ['./pp-search-patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PpSearchPatientsComponent extends PpSelectBaseComponent {
  public dataSource: MatTableDataSource<PpSearchPatientsListItem>;
  public patientTableColumns = ['patientId', 'patientName', 'locationName', 'completedTime'];
  public isNil = isNil;

  constructor(
    public dialogRef: MatDialogRef<PpSearchPatientsComponent>,
    private dataService: DataService,
    private stateService: StateService,
    private patientListService: PatientListService,
    @Inject(MAT_DIALOG_DATA) public data: PpSearchPatientsInputData
  ) {
    super(dialogRef, data);
  }

  searchAsync(): Observable<PpSearchPatientsListItem[]> {
    if (this.formInputControl.value.trim().length >= 3 && this.formInputControl.valid) {
      this.showPreloader$.next(true);
      const inputValue = this.formInputControl.value.trim();

      const payload = /^[0-9]+$/.test(inputValue) ? +inputValue : inputValue;

      return this.patientListService.searchCompletedPatients(payload)
        .pipe(
          finalize(() => {
            this.showPreloader$.next(null);
          }),
          map((response: PpSearchPatientsListItem[]) => {
            if (!response) return [];
            this.dataSource = new MatTableDataSource<PpSearchPatientsListItem>(this.formatPatientList(response));
            return response;
          })
        );

    }
    return of([]);
  }

  onPatientClick(patient: PpSearchPatientsListItem) {
    this.dataService.getCompletedPatientNotesPDF(patient.session_key).subscribe(result => {
      if (!result) return;
      this.stateService.app.pdf.emitPdfEvent(result['notes']);
    });
  }

  formatPatientList(list: PpSearchPatientsListItem[]): PpSearchPatientsListItem[] {
    const dateOptions = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};
    const resultPatientList: PpSearchPatientsListItem[] = [];
    const addedIds = [];

    list.sort((a, b) => new Date(b.treatment_complete_dtm).getTime() - new Date(a.treatment_complete_dtm).getTime())
        .forEach((patient: PpSearchPatientsListItem) => {
          if (!addedIds.includes(patient.patient_id)) {
            resultPatientList.push(...list.filter(item => item.patient_id === patient.patient_id));
            addedIds.push(patient.patient_id);
          }
        });

    return resultPatientList.map((patient: PpSearchPatientsListItem) => {
      return {
        ...patient,
        fullName: `${patient.first_name} ${patient.last_name}`,
        completedTime: patient.treatment_complete_dtm ? new Date(patient.treatment_complete_dtm).toLocaleDateString('en-US', dateOptions) : 'N/A',
        patientId: patient.patient_id,
      };
    });
  }

}
