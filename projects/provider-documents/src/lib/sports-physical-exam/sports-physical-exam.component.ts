import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  PatientAdditionalInformation,
  SportsExam,
  SportsPhysical
} from 'common/models/data.model';
import { DischargedocsEnum } from 'common/enums/dischargedocs.enum';
import { Vitals } from 'common/models/vitals.model';
import { PatientProfile } from '../../../../patient-profile/src/public-api';

@Component({
  selector: 'doc-sports-physical-exam',
  templateUrl: './sports-physical-exam.component.html',
  styleUrls: ['./sports-physical-exam.component.scss']
})
export class SportsPhysicalExamComponent implements OnInit {
  @Input() patientAdditionalInformation: PatientAdditionalInformation;
  @Input() patientInformation: PatientProfile;
  @Input() vitals: Vitals;
  @Input() date: string;
  @Input() completedDoctor: string;
  @Input() sportsExam: SportsExam;
  @Output() update = new EventEmitter();

  public examsListMedical: string[] = [
    'Appearance',
    'Eyes/Ears/Throat/Nose',
    'Hearing',
    'Lymph Nodes',
    'Heart',
    'Murmurs',
    'Pulses',
    'Lungs',
    'Abdomen',
    'Genitourinary'
  ];
  public examsListMusculoskeletal: string[] = [
    'Skin',
    'Neck',
    'Back',
    'Shoulder/Arm',
    'Elbow/Forearm',
    'Wrist/Hands/Fingers',
    'Hip/Thigh',
    'Knee',
    'Leg/Ankle',
    'Foot/Toe'
  ];
  public dischargedocsEnum: typeof DischargedocsEnum =  DischargedocsEnum;


  private static uncheckedCheckbox(checkboxId: string): void {
    const checkbox = document.querySelector(`#${checkboxId}`);
    checkbox['checked'] = false;
  }

  private static toggleCheckboxes(event: Event): void {
    const elementId: string = (event.target as Element).id;
    switch (elementId) {
      case DischargedocsEnum.EQPUPILS:
        SportsPhysicalExamComponent.uncheckedCheckbox(DischargedocsEnum.PUPILUNEQ);
        break;
      case DischargedocsEnum.PUPILUNEQ:
        SportsPhysicalExamComponent.uncheckedCheckbox(DischargedocsEnum.EQPUPILS);
        break;
      case DischargedocsEnum.CORRECTEDY:
        SportsPhysicalExamComponent.uncheckedCheckbox(DischargedocsEnum.CORRECTEDN);
        break;
      case DischargedocsEnum.CORRECTEDN:
        SportsPhysicalExamComponent.uncheckedCheckbox(DischargedocsEnum.CORRECTEDY);
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  public findExamByName(name: string): SportsPhysical {
    const found = this.patientAdditionalInformation.sportsPhysical.find(sport => sport.name === name);
    return found || {abnormal: '', name: '', normal: true};
  }

}
