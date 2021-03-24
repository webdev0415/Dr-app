import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import * as R from 'ramda';
import { Measurement } from 'common/models/data.model';

import { PpcustomdialogComponent } from '../popups/ppcustomdialog/ppcustomdialog.component';
import { Audit, Data} from 'common/models/data.model';
import { DialogService } from 'services/app/dialog.service';
import { PpviewmediaComponent } from '../popups/ppviewmedia/ppviewmedia.component';
import { VitalFieldError } from 'common/models/vitals.model';
import { measurementTypes } from '../../../static/measurement-types.constant';
import { VitalsRangeEnum, MeasurementsService } from 'services/measurements.service';
import { SymptomsService } from '../../../services';
import { VitalsMediaLabelEnum } from '../../../common/enums';

interface MultipleMeasurements {
  value: string|number;
  timestamp: string;
  measurement: string;
  exactTimestamp?: string;
}

@Component({
  selector: 'pa-vitals-field',
  templateUrl: './vitals-field.component.html',
  styleUrls: ['./vitals-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VitalsFieldComponent implements OnInit, AfterContentChecked, OnDestroy {
  @Input() patient: Data;
  @Input() name: string;
  @Input() label: string;
  @Input() measurement = '';
  @Input() checkMin: number;
  @Input() checkMax: number;
  @Input() checkInt = false;
  @Input() value: string[] = [];
  @Input() media: Audit;
  @Input() labname: string;
  @Input() viewOnly: boolean;
  @Input() fieldLength: number;
  @Output() valueChange = new EventEmitter<string[]>();
  @Output() blur = new EventEmitter<any>();
  @Output() valid = new EventEmitter<VitalFieldError>();
  @ViewChild('input', { static: true }) input: ElementRef<HTMLInputElement>;
  public wrong: boolean;
  public needRedo: boolean;
  public inputPattern = /[^0-9\.]/gim;
  public timestamp: string;
  public eyesSelectOptions: Array<any>;

  private decimalSplitter = '.';
  private status = {};
  private orders: Subscription[] = [];
  private multipleMeasurementsTimestamps: Array<MultipleMeasurements> = [];
  private splitter = '/';

  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialogService: DialogService,
    private measurementsService: MeasurementsService,
    private renderer: Renderer2,
    private symptomService: SymptomsService
  ) { }

  ngOnInit() {
    this.input.nativeElement.addEventListener('paste', this.pasteListener.bind(this));
    const description = this.symptomService.getSymptomDescriptions('EyeAcuity');
    this.eyesSelectOptions = R.sortBy(R.prop('displayOrder'))(description).map(value => ({value: value.name, label: value.name}));
    this.prepare();
  }

  /**
   * paste event handler
   * @param event {clipboard event}
   */
  pasteListener(event: ClipboardEvent) {
    this.inputController(event);
  }

  prepare() {
    if (this.value !== undefined) {
      if (!Array.isArray(this.value)) this.value = Array.of(String(this.value));
      this.renderer.setProperty(this.input.nativeElement, 'value', this.value.join(''));
      this.value = this.value.map(val => String(val));
    }

    if (this.patient && (!this.value || !this.value.length)) {
      const ifOrderExists = this.patient.orders
        && this.patient.orders.orderedMeasurements
        && this.patient.orders.orderedMeasurements.includes(this.labname);

      this.needRedo = !ifOrderExists;
    }
  }

  checkMultipleMeasurements(): boolean {
    let isMultiple = false;
    let foundMeasurements: Measurement[];
    this.patient.measurements.forEach(measurement => {
      foundMeasurements = this.patient.measurements.filter(item => (
          item.measureType === measurement.measureType && !item.temp && item.value.value !== 0
        )
      );

      if (foundMeasurements.length > 1 && measurement.measureType === this.labname) {
        isMultiple = true;
      }
    });
    return isMultiple;
  }

  showAllMeasurements(): void {
    const dateOptions = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    let foundMeasurements: Measurement[];

    const findBloodPressurePair = (measurement: Measurement): string => {
      const foundPair = this.patient.measurements.find(
        measure => measure.measureType === 'SYSTOLIC' && measure.timestamp === measurement.timestamp
      );
      return `${foundPair ? foundPair.value.value : 0}/${measurement.value.value}`;
    };

    this.patient.measurements.forEach(measurement => {
      foundMeasurements = this.patient.measurements.filter(item => item.measureType === measurement.measureType);

      if (foundMeasurements.length > 1 && measurement.measureType === this.labname) {
        foundMeasurements.forEach(foundMeasure => {
          if (!foundMeasure.hasOwnProperty('temp')) {
            this.multipleMeasurementsTimestamps.push(
              {
                value: ['SYSTOLIC', 'DIASTOLIC'].includes(this.labname) ? findBloodPressurePair(foundMeasure) : foundMeasure.value.value,
                timestamp: new Date(foundMeasure.timestamp).toLocaleDateString('en-US', dateOptions),
                exactTimestamp: foundMeasure.timestamp,
                measurement: this.measurement
              }
            );
          }
        });
      }
    });

    const prepareMeasurements: (arg: MultipleMeasurements[]) => MultipleMeasurements[] =
      // @ts-ignore
      R.pipe(R.sortBy(R.prop('exactTimestamp')), R.reverse, R.uniqBy(R.prop('exactTimestamp')));

    this.multipleMeasurementsTimestamps = prepareMeasurements(this.multipleMeasurementsTimestamps);


    this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
      autoFocus: true,
      closeOnNavigation: true,
      minWidth: '400px',
      data: {
        title: ['SYSTOLIC', 'DIASTOLIC'].includes(this.labname) ? 'Blood Pressure' : this.labname,
        list: this.multipleMeasurementsTimestamps,
        measurementList: true
      }
    })).subscribe();
  }

  emitBlur(event?) {
    if (event) this.valueChange.emit(event);
    this.blur.emit();
  }

  ngAfterContentChecked() {
    this.checkValue();
  }

  inputController(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement>event.target;
    this.splitValue(target.value.replace(this.inputPattern, ''));
    this.renderer.setProperty(
      this.input.nativeElement,
      'value',
      this.removeDuplicatingSplitters(target.value.replace(this.inputPattern, ''), this.decimalSplitter)
    );
    this.checkValue();
    this.valueChange.emit(this.value);
  }

  /**
   * controls the behavior of splitter crossing
   * @param event {keydown event}
   */
  onKeyDown(event) {
    if (this.input.nativeElement.value.length > 1 && event.data !== '0') {
      this.renderer.setProperty(this.input.nativeElement, 'value', this.input.nativeElement.value.replace(/^0+/, ''));
    }

    this.inputController(event);
  }

  splitValue(target: string) {
    this.value = target.split(this.splitter).map((value: string) => this.removeDuplicatingSplitters(value, this.decimalSplitter));
  }

  get getEyesSelectPlaceholder(): string {
    return this.value[0];
  }

  checkValue() {
    if (!this.value) return;
    let skipChecks = false;

    const check = (name: string, predicate: any) => {
      this.status[name] = !!predicate;
    };

    const checkVitalsRanges = (vital: VitalsRangeEnum) => {
      const value = +this.value[0];
      const [minRange, maxRange] = this.measurementsService.getVitalsRange(this.patient.patientInformation.age.years, vital);
      this.wrong = !(value >= minRange && value <= maxRange);
      skipChecks = true;
    };

    const validateRanges = (value: number): boolean => {
      let result = false;

      if (measurementTypes['Blood Pressure'].includes(this.labname)) {
        result = value > 30 && value < 200;
      } else if (measurementTypes.Pulse.includes(this.labname)) {
        result = value > 0 && value < 300;
      } else if (measurementTypes['Respiratory Rate'].includes(this.labname)) {
        result = value > 1 && value < 100;
      }
      return result;
    };

    if (Object.keys(VitalsRangeEnum).includes(this.labname)) {
      checkVitalsRanges(VitalsRangeEnum[this.labname]);
    } else if (['LEFT_EYE', 'RIGHT_EYE'].includes(this.labname)) {
      skipChecks = true;
      this.wrong = false;
    }

    if (!skipChecks) {
      check('valLength', this.value.every(val => !!val.length));

      if (this.value && this.checkMin) {
        check('minValue', Number(this.value[0]) >= this.checkMin);
      }

      if (this.value && this.checkMax) {
        check(`maxValue`, Number(this.value[0]) <= this.checkMax);
      }

      if (this.value && this.checkInt) {
        check('valInteger', Number.isInteger(Number(this.value)));
      }

      this.wrong = !Object.values(this.status).every(val => !!val);
    }

    this.changeDetector.detectChanges();

    const valuesRecommendation = `${this.name} field value might be in range ${this.checkMin} - ${this.checkMax} ${this.measurement}.`;
    let integerRecomendation = '';
    if (this.checkInt) integerRecomendation = `Field's value might be integer.`;
    this.valid.emit({
      validState: validateRanges(+this.value[0]) || !this.wrong,
      measureType: this.name.toUpperCase(),
      label: this.label,
      labName: this.labname,
      recommendation: [valuesRecommendation, integerRecomendation].join('\n\r')
    });
  }

  removeDuplicatingSplitters(str: string, splitter: string): string {
    if (str.split(splitter).length - 1 > 1) {
      return [str.split(splitter)[0], str.split(splitter).slice(1).join('')].join(splitter);
    } else return str;
  }

  showMedia() {
    this.dialogService.custom(
      PpviewmediaComponent,
      {media: {name: this.getMediaLabel(this.name), url: this.media.s3Blob ? this.media.s3Blob : this.media.s3}},
      null, 'viewmedia'
    );
  }

  private getMediaLabel(value: string): string {
    const upperValue = value.toUpperCase();
    if (upperValue in VitalsMediaLabelEnum) {
      return VitalsMediaLabelEnum[upperValue];
    }
    return value;
  }

  requestMissingMedia() {
    // TODO: figure out the feature actuality
    // this.dialogService.open(PpcustomdialogComponent, {
    //   data: {
    //     message: `Send a request to redo ${this.label} exam?`,
    //     isYesCancelDialog: true
    //   }
    // }).subscribe(result => {
    //   if (result) {
    //     this.orders.push(this.labsService.order(
    //       Number(this.patient.patientInformation.patientId),
    //       {'orderedMeasurements': [this.labname], 'orderedLabs': []},
    //       true
    //     ).subscribe(redoResult => {
    //       if (redoResult) {
    //         // TODO show something if redo request is successful ?
    //       }
    //     }));
    //   }
    // });
  }

  focusAndClearInput() {
    this.input.nativeElement.focus();
    this.renderer.setProperty(this.input.nativeElement, 'value', '');
  }

  getBPfieldsStyles(labName: string): string {
      return ['SYSTOLIC', 'DIASTOLIC'].includes(labName) ? `vital-field-layer-${labName.toLowerCase()}` : '';
  }

  ngOnDestroy() {
    this.input.nativeElement.removeEventListener('paste', this.pasteListener);
    for (const sub of this.orders) sub.unsubscribe();
    this.changeDetector.detach();
  }
}
