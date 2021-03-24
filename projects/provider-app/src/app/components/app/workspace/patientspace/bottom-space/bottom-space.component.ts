import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProviderLabsComponent } from '../../../../../labs/provider-labs/provider-labs.component';
import { ProceduresComponent } from '../../../../../procedures/procedures/procedures.component';


import { StateService } from '../../../../../services/state.service';
import { BottomButtonsControl, StateBottomButtons } from './interfaces';

// components
import { SymptomsComponent } from '../symptoms/symptoms.component';
import { VitalsmediaComponent } from '../vitalsmedia/vitalsmedia.component';
import { WorkingDiagnosisComponent } from '../working-diagnosis/working-diagnosis.component';
import { ClerkLabsComponent } from '../../../../../labs/clerk-labs/clerk-labs.component';
import { PharmacistDocumentsComponent } from 'documents/pharmacist-documents/pharmacist-documents.component';
import { PractitionerDocumentsComponent } from 'documents/practitioner-documents/practitioner-documents.component';
import { SurveysContainerComponent } from 'documents/surveys-container/surveys-container.component';
import { TreatmentComponent } from 'treatments/treatment/treatment.component';
import { SelectedIllnessesComponent } from '../../../../shared/selected-illnesses/selected-illnesses.component';
import { MainComponent } from '../main/main.component';
import { PatientDataComponent } from '../patientdata/patient-data.component';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';


class Components {
  static readonly PatientData = PatientDataComponent;
  static readonly VitalsMedia = VitalsmediaComponent;
  static readonly Symptoms = SymptomsComponent;
  static readonly Labs = ClerkLabsComponent;
  static readonly OrderLabs = ProviderLabsComponent;
  static readonly Medications = ProceduresComponent;
  static readonly Injections = ProceduresComponent;
  static readonly WorkingDiagnosis = WorkingDiagnosisComponent;
  static readonly Surveys = SurveysContainerComponent;
  static readonly Main = MainComponent;
  static readonly SelectedIllnesses = SelectedIllnessesComponent;
  static readonly Treatment = TreatmentComponent;
  static readonly IntakeForm = PharmacistDocumentsComponent;
  static readonly Dischargedocs = PractitionerDocumentsComponent;
}


@Component({
  selector: 'pa-bottom-space',
  templateUrl: './bottom-space.component.html',
  styleUrls: ['./bottom-space.component.scss']
})
export class BottomSpaceComponent implements OnInit {
  @Output() private changeShow: EventEmitter<boolean> = new EventEmitter<boolean>();
  private instanceBottomButtonsControl: BottomButtonsControl | null;
  private _isShow: boolean;

  public readonly Components = Components;

  currentPatient: PatientListEntity;
  finalizeDisabled = false;

  /**
   * Init BottomSpaceComponent
   * @constructor
   */
  constructor(private stateService: StateService) {
    this.instanceBottomButtonsControl = null;
    this._isShow = false;
  }

  ngOnInit(): void {
    this.stateService.patient.getCurrent().subscribe(patient => {
      this.currentPatient = patient;
      if (this.currentPatient?.ehr_location) {
        this.stateService.app.getEhrLoggedStatus(this.currentPatient.ehr_location).subscribe(logged => this.finalizeDisabled = !logged);
      }
    })
  }

  /**
   * Get show bottom buttons states from current instanceBottomButtons component
   * @returns {StateBottomButtons}
   */
  private get shownBottomButtons(): StateBottomButtons {
    return this.instanceBottomButtonsControl.getShownBottomButtons();
  }

  /**
   * Set show bottom buttons panel state
   * @param {boolean} state
   */
  public set isShow(state: boolean) {
    this._isShow = state;
    this.changeShow.emit(state);
  }

  /**
   * Is show bottom buttons panel
   * @returns {boolean}
   */
  public get isShow() {
    return this._isShow;
  }

  /**
   * Change instanceBottomButtons component and update isShow state, component name
   * @param {Function | null} instanceComponent
   */
  @Input('instanceComponent')
  public set instanceComponent(instanceComponent: Function | null) {
    if (instanceComponent === null) return;
    if ('getShownBottomButtons' in instanceComponent && 'onClickBottomButton' in instanceComponent) {
      this.instanceBottomButtonsControl = instanceComponent;
      this.setShowState();
    } else {
      this.instanceBottomButtonsControl = null;
      this.isShow = false;
    }
  }

  /**
   * Switch bottom buttons on change instanceBottomButtons component
   * @param {Function} component
   * @returns {boolean}
   */
  public switchComponent(component: Function): boolean {
    return this.instanceBottomButtonsControl instanceof component;
  }

  /**
   * Set is show or hidden bottom buttons panel
   */
  public setShowState(): void {
    let isShow = false;
    if (this.instanceBottomButtonsControl !== null) {
      isShow = Object.values(this.shownBottomButtons).some((st: boolean) => st);
    }
    this.isShow = isShow;
  }

  /**
   * Call event onClickBottomButton method implemented in current instanceBottomButtons component
   * @param {string} nameButton
   */
  public clickBottomButton(nameButton: string): void {
    this.instanceBottomButtonsControl.onClickBottomButton(nameButton);
  }

  /**
   * Is show bottom button
   * @param {string} nameButton
   * @returns {boolean}
   */
  public isShowButton(nameButton: string): boolean {
    return this.shownBottomButtons[nameButton];
  }

  /**
   * Is disabled bottom button
   * @param {string} nameButton
   * @returns {boolean}
   */
  public isDisabledButton(nameButton: string): boolean {
    if (this.instanceBottomButtonsControl !== null) {
      const state: StateBottomButtons = this.instanceBottomButtonsControl.getDisabledBottomButtons();
      return state[nameButton];
    }
    return false;
  }
}
