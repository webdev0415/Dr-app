import { Component, Inject } from '@angular/core';

import { map, take } from 'rxjs/operators';
import { Observable, zip } from 'rxjs';
import { pick, prop, groupWith, flatten, eqProps, isNil } from 'ramda';


import { Measurement } from '../side-models/common/interfaces/measurement/measurement.interface';
import { AuditMeasurementsTypes } from '../side-models/common/types/audit-measurement.type';

import { QuestionnaireService } from '../questionnaire.service';
import { PhysicalAssessmentInterface } from '../interfaces/physical-assessment.interface';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';

@Component({
  selector: 'ph-physical-assessment-table',
  templateUrl: './physical-assessment-table.component.html',
  styleUrls: ['./physical-assessment-table.component.scss']
})
export class PhysicalAssessmentTableComponent {
  private measurements: Measurement[];
  public tableData: Observable<{ assessment: string, value: string, acceptableRange: string }[]> = zip(
    this.questionnaireService.physicalAssessment$,
    this.patientDataService.measurement$.pipe(take(1))
  ).pipe(map(([assessments, measurements]) => {
    this.measurements = measurements;
    return this.buildTableData(assessments);
  }));

  constructor(
    @Inject(PATIENT_DATA_PROVIDER) private patientDataService: PatientDataService,
    private questionnaireService: QuestionnaireService
  ) {}

  private getLatestBPVitalsPair(measurements: Measurement[] = this.measurements): string {
    const systolics: Measurement[] = measurements.filter(item => item.measureType === 'SYSTOLIC')
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    const diastolics: Measurement[] = measurements.filter(item => item.measureType === 'DIASTOLIC')
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    if (!systolics.length || !diastolics.length) return '';

    return systolics[0].timestamp === diastolics[0].timestamp ? `${systolics[0].value.value}/${diastolics[0].value.value}` : '';
  }

  private getLatestVitalsByType(type: AuditMeasurementsTypes, measurements: Measurement[] = this.measurements): string {
    const sortedMeasurements = measurements
      .filter(item => item.measureType === type && item.value.value !== 0)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    return sortedMeasurements.length ? sortedMeasurements[0].value.value.toString() : '';
  }

  private buildTableData(assessments: PhysicalAssessmentInterface[]): { assessment: string, value: string, acceptableRange: string }[] {
    return flatten(groupWith(eqProps('assessment'), assessments).map(assessment => assessment.filter(item => !isNil(item.passed)))).map((item, index) => {
      let vitalsType: AuditMeasurementsTypes;
      switch (index) {
        case 1: vitalsType = 'RESPIRATORY_RATE'; break;
        case 2: vitalsType = 'PULSE'; break;
        case 3: vitalsType = 'BLOOD_OXYGEN'; break;
        case 4: vitalsType = 'TEMPERATURE'; break;
      }
      return pick(['assessment', 'value', 'acceptableRange'], {...item, value: `${!index ? this.getLatestBPVitalsPair() : this.getLatestVitalsByType(vitalsType)} ${item.units}`});
    });
  }

}
