import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StateService } from 'services/state.service';
import { RoomsEnum } from 'common/enums/rooms.enum';
import { PatientProfile } from '../../../../../../../pharmacist/src/lib/side-models/patient-profile/interfaces/patient-profile.interface';


interface DialogData {
  title?: string;
  message?: string;
  list?: Array<string> | Array<{value: string|number, timestamp: string, measurement: string}>;
  linkList?: Array<any>;
  srcImage?: string;
  textArea?: string;
  input?: string;
  selectRoom?: RoomsEnum | boolean;
  inputMin?: number;
  inputMax?: number;
  isPatientCardDialog?: boolean;
  isWarningDialog?: boolean;
  isAlertDialog?: boolean;
  isViewAssign?: boolean;
  isDialog?: boolean;
  diagnosisConfirm?: boolean;
  treatmentConfirm?: boolean;
  additionalButtons?: Array<string>;
  okText?: string;
  cancelText?: string;
  patient?: PatientProfile;
  returnValue?: boolean | Array<any>;
  descriptionWarning?: string;
  contribList?: boolean;
  measurementList?: boolean;
  background?: string;
  displayTime?: number;
  viewOnly: boolean;
  column?: boolean;
  validatorRegExp?: string;
  isChangeNameDialog?: boolean;
}


@Component({
  selector: 'pa-ppcustomdialog',
  templateUrl: './ppcustomdialog.component.html',
  styleUrls: ['./ppcustomdialog.component.scss']
})
export class PpcustomdialogComponent implements OnInit {
  public contribList = Array<string>();
  public roomValues: string[] = [];
  private isRoomSelected = false;
  private formInputNumberControl: FormControl = null;
  public nameFormGroup: FormGroup;
  public nameControl = {
    firstName: '',
    middleName: '',
    lastName: ''
  };

  constructor(
    private stateService: StateService,
    public dialogRef: MatDialogRef<PpcustomdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => data.viewOnly = viewOnly);
    if (this.data.contribList) {
      this.buildStringFromContribs(this.data.list);
    }
    if (this.data.isPatientCardDialog) {
      this.dialogRef.keydownEvents().subscribe(event => this.handleKeydown(event));
      this.dialogRef.backdropClick().subscribe(() => this.cancelDialog());
    }
    Object.values(RoomsEnum).forEach(room => this.roomValues.push(room));
    if (this.data.isChangeNameDialog) {
      this.nameControl = {
        firstName: this.data.patient.firstName,
        middleName: this.data.patient.middleName,
        lastName: this.data.patient.lastName
      };
    }
  }

  ngOnInit(): void {
    this.nameFormGroup = new FormGroup({
      firstName: new FormControl(this.nameControl.firstName, [
        Validators.maxLength(128),
        Validators.required,
        Validators.pattern(/^\S+|\s+\S+\s*$/)]),
      middleName: new FormControl(this.nameControl.middleName, [
        Validators.maxLength(1)]),
      lastName: new FormControl(this.nameControl.lastName, [
        Validators.maxLength(128),
        Validators.required,
        Validators.pattern(/^\S+|\s+\S+\s*$/)])
    });
    /*this.nameFormControl = new FormControl(this.nameFormControl, [
      Validators.maxLength(40),
      Validators.pattern(/^\S+|\s+\S+\s*$/),
    ]);*/
  }

  private nameFormControlsValue(section: string): string {
    return this.nameFormGroup.get(section).value;
  }

  onNameFormEnter(data: any, section: string) {
    switch (section) {
      case 'firstName':
        data.firstName = this.nameFormControlsValue(section).trim();
        break;
      case 'middleName':
        data.middleName = this.nameFormControlsValue(section).trim();
        break;
      case 'lastName':
        data.lastName = this.nameFormControlsValue(section).trim();
        break;
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Esc' || event.key === 'Escape') {
      if (this.stateService.app.dialog.getLastOverlayName() !== 'patientcard') {
        this.dialogRef.close(this.data.returnValue ? [false, this.data] : false);
      }
    }
  }

  buildStringFromContribs(contribSource: any[]) {
    contribSource.forEach((src, contribIndex, contribArr) => {
      this.contribList[contribIndex] = this.contribList[contribIndex] || '';
      if (src.sources && Array.isArray(src.sources)) {
        src.sources.forEach((source, index, arr) => {
          this.contribList[contribIndex] += `${source}${index < (arr.length - 1) ? ', ' : ''}`;
        });
      }
    });
  }

  okDialog() {
    if (this.data.input !== undefined) this.data.input = this.inputNumberControl.value;
    if (this.data.isChangeNameDialog) {
      this.data.returnValue = [];
      this.data.returnValue.push(this.nameControl);
    }
    this.dialogRef.close(this.data.returnValue ? [true, this.data] : true);
  }

  disableOkButton(): boolean {
    return this.inputNumberControl.invalid && (
      this.data.input !== undefined || (this.data.validatorRegExp !== undefined && this.data.textArea !== undefined)
    ) || (this.data.selectRoom && !this.isRoomSelected);
  }

  buttonClick(button) {
    this.dialogRef.close(button);
  }

  cancelDialog() {
    this.dialogRef.close(false);
  }

  assignPatient() {
    this.dialogRef.close(['assign', this.data]);
  }

  editNotes(which) {
    this.stateService.patient.editNotes(which);
  }

  get inputNumberControl(): FormControl {
    if (this.formInputNumberControl === null) {
      const pattern = this.data.validatorRegExp ? this.data.validatorRegExp : /^\s*([0-9]{1,10}(\.[0-9]{1,3})?)\s*$/;
      const validators: ValidatorFn[] = [Validators.required, Validators.pattern(pattern)];
      if (this.data.inputMin !== undefined) {
        validators.push(Validators.min(this.data.inputMin));
      }
      if (this.data.inputMax !== undefined) {
        validators.push(Validators.max(this.data.inputMax));
      }
      const dataInput = this.data.validatorRegExp ? this.data.textArea : this.data.input;
      const form = new FormControl(dataInput, validators);
      this.formInputNumberControl = form;
      return form;
    }
    return this.formInputNumberControl;
  }

  onRoomSelected(event: MatOptionSelectionChange) {
    this.data.selectRoom = event.source.value;
    this.isRoomSelected = true;
  }
}
