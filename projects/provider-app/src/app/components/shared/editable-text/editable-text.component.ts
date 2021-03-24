import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { StateService } from 'services/state.service';
import { IllnessPresentationTypesEnum } from 'common/enums/illness-presentation-types.enum';

@Component({
  selector: 'pa-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {
  @Input() data: string | undefined;
  @Input() subtext: string | undefined;
  @Input() prefix: string | undefined;
  @Input() reviewed: boolean | undefined = true;
  @Input() examReviewed: boolean | undefined = true;
  @Input() allowEmpty = false;
  @Input() multiline: boolean | undefined;
  @Input() illnessPresentation: string;
  @Input() maxLength: number;
  @Input() disabled: boolean;
  @Output() renamed = new EventEmitter<string>();
  @Output() editing = new EventEmitter<boolean>();
  @Output() reviewDialog = new EventEmitter<boolean>();

  private formControl: FormControl;
  private _isEditable = false;
  public viewOnly: boolean;
  public illnessPresentationEnum: typeof IllnessPresentationTypesEnum =  IllnessPresentationTypesEnum;

  constructor(
    private stateService: StateService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
  }

  ngOnInit(): void {
    const validators = [
      Validators.pattern(/^\S+|\s+\S+\s*$/),
      this.multiline ? Validators.minLength(3) : this.maxLength ? Validators.maxLength(this.maxLength) : Validators.maxLength(255),
    ];
    if (!this.allowEmpty) validators.push(Validators.required);
    this.formControl = new FormControl('', validators);
  }

  private get controlValue(): string {
    return this.formControl.value;
  }

  private set controlValue(value: string) {
    this.formControl.setValue(value);
  }

  public set isEditable(value: boolean) {
    this.editing.emit(value);
    this._isEditable = value;
  }

  public get isEditable(): boolean {
    return this._isEditable;
  }

  public get control(): FormControl {
    return this.formControl;
  }

  public edit(): void {
    if (!this.reviewed || !this.examReviewed) {
      this.reviewDialog.emit();
      return;
    }
    this.controlValue = this.data;
    this.isEditable = true;
    this.changeDetector.detectChanges();
  }

  cancel(): void {
    this.isEditable = false;
    this.formControl.setValue(this.data);
  }

  save(): void {
    const value = this.controlValue.trim();
    this.formControl.setValue(value, {onlySelf: true, emitEvent: false});
    this.renamed.emit(value);
    this.isEditable = false;
  }
}
