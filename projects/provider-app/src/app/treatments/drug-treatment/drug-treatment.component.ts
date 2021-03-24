import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input, NgZone, OnChanges,
  OnDestroy, OnInit,
  Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { compose, map as rMap, filter, prop, flatten, uniq, zipObj } from 'ramda';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { SelectComponent } from 'ng-uikit-pro-standard';


import { DrugTreatmentNameChange } from '../store-events/drug-treatment-name-change.event';
import { DrugCombination, DrugInformation, CombinationGroup, GroupInfo } from '../treatments.interface';
import { TreatmentsService } from '../treatments.service';
import { NotificationsService } from 'components/notifications/notifications.service';
import { DrugSearchResultFM } from 'treatments/treatments.interface';
import { units } from 'treatments/static/static.drugs';
import { PVFrequencyEnum } from '../enum/pv-frequency.enum';


@Component({
  selector: 'pa-drug-treatment',
  templateUrl: './drug-treatment.component.html',
  styleUrls: ['./drug-treatment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugTreatmentComponent implements OnDestroy, AfterViewInit, OnInit, OnChanges {
  @Input() drug: DrugInformation;
  @Input() prescription: boolean;
  @Input() viewOnly: boolean;
  @Input() isFastmed: boolean;
  @Output() informationUpdated = new EventEmitter();
  @Output() remove = new EventEmitter();

  public combinationDrugs: DrugCombination;
  public readonly routeOptions = [];
  public readonly formOptions = [];
  public readonly amountOptions = [];
  public readonly frequencyOptions = [];
  public readonly unitOptions = units;
  public readonly dispenseOptions = [];

  public directionsEditable = false;
  public drugSwitchOptions: {value: string, label: string, group: boolean}[] = [];
  public directionsFormControl: FormControl;
  public currentStrength: string;

  public dosageFormOptions = [];
  public strengthOptions = [];
  public pvRouteOptions = [];

  private combinationDrugsArray: DrugCombination[] = [];
  private drugSearchResult: BehaviorSubject<DrugSearchResultFM[]> = new BehaviorSubject<DrugSearchResultFM[]>([]);

  @ViewChild('directions') directionsInput: ElementRef<HTMLInputElement>;
  @ViewChild('drugSelect') drugSelect: SelectComponent;
  private directionsBlurEvent: Subscription;

  constructor(
    public notificationService: NotificationsService,
    private treatmentsService: TreatmentsService,
    private ngZone: NgZone,
    private changeRef: ChangeDetectorRef
  ) {
    this.routeOptions = this.treatmentsService.drugRoutes;
    this.formOptions = this.treatmentsService.drugForms;
    this.amountOptions = this.treatmentsService.drugAmount;
    this.frequencyOptions = this.treatmentsService.drugFrequency;
    this.dispenseOptions = this.treatmentsService.drugDispenseForm;
  }

  ngOnInit(): void {
    const { rxcui } = this.drug;
    // this.treatmentsService.getCombinationDrugs(`${rxcui}`.split('-pid')[0], !`${rxcui}`.endsWith('-pid')).subscribe(
    //   (combinationDrugs: DrugCombination) => {
    //     const rxcuis = this.treatmentsService.extractRxcuisFromDrugCombination(combinationDrugs);
    //     this.initOptionsWithRxcuis(rxcuis);
    //   }
    // );
    this.initOptionsWithRxcui([rxcui]);

    this.directionsFormControl = new FormControl(
      { value: this.drug.directionsString, disabled: !this.directionsEditable || this.viewOnly },
      [Validators.maxLength(140), Validators.required]
    );
  }

  initOptionsWithRxcui(rxcuis: string[]) {
    // @ts-ignore
    this.ngZone.run(() => {
      this.treatmentsService.filterDrugByBusinessMultiple(rxcuis).subscribe((combinationDrugsArray: DrugCombination[]) => {
        this.combinationDrugsArray = combinationDrugsArray;
        this.drug.description = combinationDrugsArray[0].header.ingredients.length ? combinationDrugsArray[0].header.ingredients[0].description : '';

        this.drug.strength = this.detectStrength;
        this.drug.route = this.detectRoute;
        this.drug.form = this.detectDosageForm;

        this.buildStrengthOptions();
        this.buildDosageFormOptions();
        this.buildRouteOptions();

        this.changeRef.detectChanges();
      });
    });
  }

  private buildStrengthOptions(shouldFilter = true) {
    const newOptions = [];
    for (const combinationDrugs of this.combinationDrugsArray) {
      this.pushOptionIfNotExist(newOptions, this._strengthOptions(combinationDrugs, shouldFilter));
    }

    this.strengthOptions = newOptions;
  }

  private buildDosageFormOptions(shouldFilter = true) {
    const newOptions = [];
    for (const combinationDrugs of this.combinationDrugsArray) {
      this.pushOptionIfNotExist(newOptions, this._dosageFormOptions(combinationDrugs, shouldFilter));
    }

    this.dosageFormOptions = newOptions;
  }

  private buildRouteOptions(shouldFilter = true) {
    const newOptions = [];
    for (const combinationDrugs of this.combinationDrugsArray) {
      this.pushOptionIfNotExist(newOptions, this._routeOptions(combinationDrugs, shouldFilter));
    }

    this.pvRouteOptions = newOptions;
  }

  private pushOptionIfNotExist(options: { value: string; label: string; }[], newOptions: { value: string; label: string; }[]) {
    for (const option of newOptions) {
      if (!options.some(opt => opt.value === option.value)) {
        options.push(option);
      }
    }
  }

  ngAfterViewInit(): void {
    this.directionsBlurEvent = fromEvent<UIEvent>(this.directionsInput.nativeElement, 'blur')
      .pipe(delay(500))
      .subscribe(() => {
        this.updateDirection('directionsString', this.directionsFormControl.value);
        this.toggleDirectionsEdit(false);
      });
    if (!this.prescription) {
      this.buildOTCDrug();
    }
  }

  ngOnDestroy() {
    this.directionsBlurEvent.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.drug) {
      this.drugSwitchOptions = this._drugSwitchOptions;
      if (!changes.drug.firstChange) {
        this.directionsFormControl.patchValue(changes.drug.currentValue.directionsString);
      }
    }
  }

  onNumberInput(event) {
    const unallowedInput = Boolean(event.data && event.data.match(/[\-+eEa-zA-Z]/));
    if (unallowedInput) {
      event.preventDefault();
      this.notificationService.error('Invalid input, you must enter a number.');
    }
  }

  public updateDirection(updatedField: keyof Pick<DrugInformation, 'amount' | 'unit' | 'route' | 'frequency' | 'directionsString'>, value: string): void {
    const directionsChangedByUser = this.directionChangedByUser;
    this.drug[updatedField] = value;
    if (!directionsChangedByUser) this.buildDirections();
    this.updateInfo();
  }

  private buildDirections() {
    this.drug.directionsString = this.prefilledDirections;
    this.directionsFormControl.setValue(this.drug.directionsString);
  }

  private buildOTCDrug() {
    this.drug.amount = '';
    this.drug.form = '';
    this.drug.route = '';
    this.drug.frequency = '';
    this.drug.quantity = null;
    this.buildDirections();
  }

  private get prefilledDirections(): string {
    return this.prescription
      ? `${this.drug.amount} ${this.drug.form} ${this.drug.route || ''} ${PVFrequencyEnum[this.drug.frequency] || ''}`.trim()
      : 'Use as directed';
  }

  public get directionChangedByUser(): boolean {
    return this.prefilledDirections !== this.directionsFormControl.value;
  }

  public get directionsInvalid(): boolean {
    return (!this.directionsFormControl.value.length || this.directionsFormControl.value.length > 140) && !this.directionsEditable;
  }

  public toggleDirectionsEdit(event: boolean): void {
    this.directionsEditable = event;
    if (this.directionsEditable) {
      this.directionsFormControl.enable();
      setTimeout(() => this.directionsInput.nativeElement.focus());
    } else {
      this.directionsFormControl.disable();
      this.updateInfo();
    }
  }

  public updateInfoOnNextTick(): void {
    setTimeout(() => this.updateInfo());
    this.buildStrengthOptions();
    this.buildDosageFormOptions();
    this.buildRouteOptions();
  }

  public updateInfo(field?: keyof DrugInformation) {
    if (this.drug.strength && this.drug.form && this.drug.route) {
      this.combinationDrugsArray.forEach(combinationDrugs => {
        this.drug.specificDrugDescription = this.specificDrugDescription(combinationDrugs);
      });
    }

    this.informationUpdated.emit();
    if (field === 'strength') {
      this.buildDosageFormOptions();
      this.buildRouteOptions();
    } else if (field === 'form') {
      this.buildStrengthOptions();
      this.buildRouteOptions();
    } else if (field === 'route') {
      this.buildStrengthOptions();
      this.buildDosageFormOptions();
    }
  }

  private get _drugSwitchOptions() {
    let primeOptions = (this.drug.similarDrugs || this.drugSearchResult.getValue()).map(item => ({value: item.description, label: item.description, group: false}));
    if (this.drug.combinationDrugs) primeOptions = primeOptions.concat([{value: '', label: 'Other Options', group: true}, ...this.drug.combinationDrugs.map(item => ({value: item.description, label: item.description, group: false}))]);
    return primeOptions;
  }

  public switchDrug(description: string) {
    const similarDrugs = this.drug.similarDrugs.length ? [...this.drug.similarDrugs, ...this.drug.combinationDrugs] : this.drugSearchResult.getValue();
    const drugName = similarDrugs.find(item => item.description === description).name;
    this.treatmentsService.dispatch(new DrugTreatmentNameChange(this.prescription ? 'Prescription Drugs' : 'OTC Drugs', this.drug.drugName, drugName, description, similarDrugs));
  }

  public drugSearch(): (keyword: string) => Observable<string[]> {
    return (keyword: string) => this.treatmentsService.drugSearchFastMed(keyword).pipe(map(result => {
      this.drugSearchResult.next(result);
      return result.map(item => item.description);
    }));
  }

  public get drugSpecified(): boolean {
    return Boolean(this.drugSelect && this.drugSelect.options.find(item => item.value === this.drugSelect._value[0]));
  }

  private buildStrength(strengths: string[]): string {
    const buildConstantUnits = (constantStrengths) => {
      if (constantStrengths.length === 1) {
        return constantStrengths[0];
      }

      const allStrengths = constantStrengths.map(str => str.split('/')).flat();
      const unit = allStrengths[0].replace(/[0-9 .]/g, '').trim();
      const numbers = allStrengths.map(strength => parseFloat(strength)).filter(n => !isNaN(n)).join('-');
      return numbers + (unit.toLowerCase().includes('g') ? ' ' : '' ) + unit;
    };

    if (strengths[0].endsWith('/5mL')) {
      return buildConstantUnits(strengths.map(strength => strength.split('/5mL')[0])) + '/5mL';
    }
    return buildConstantUnits(strengths);
  }

  private filterDrugOptions(groups: CombinationGroup[], filterKeys: Array<keyof Pick<DrugInformation, 'form'|'route'|'strength'>>, targetKey: keyof GroupInfo, shouldFilter = true)
    : { [key in 'label' | 'value']: string }[] {
    let suitableOption = (info: GroupInfo): boolean => {
      if (!info['EMR_med_name']) {
        return false;
      }
      return filterKeys.every(key => {
        const groupKey: keyof GroupInfo = key === 'form' ? 'dosageForm' : key;
        if (!this.drug[key]) {
          return true;
        }
        if (key === 'form' || key === 'route') {
          return info[groupKey].indexOf(this.drug[key]) !== -1;
        }
        return this.buildStrength(info[groupKey]) === this.drug[key];
      });
    };
    if (!shouldFilter) {
      suitableOption = (info: GroupInfo): boolean => !!info['EMR_med_name'];
    }

    const buildField = (fields: string[]): string | string[] => {
      return targetKey === 'strength' ? this.buildStrength(fields) : fields;
    };

    return (<any>compose)(
      rMap(
        compose(
          zipObj(['label', 'value']),
          item => ([item, item])
        )
      ),
      uniq,
      flatten,
      rMap(buildField),
      rMap(prop(targetKey)),
      filter(suitableOption),
      flatten,
      // @ts-ignore
      rMap(prop('groupInformation'))
    )(groups);
  }

  private _strengthOptions(combinationDrugs: DrugCombination, shouldFilter): { value: string; label: string; }[] {
    if (!combinationDrugs) {
      return [];
    }

    const { genericRxcui } = combinationDrugs;

    if (!genericRxcui) {
      return [];
    }

    const groups = !this.drug.daw ? genericRxcui : genericRxcui.filter(group => group.groupType === 'SBD');
    return this.filterDrugOptions(groups, ['route', 'form'], 'strength', shouldFilter);
  }

  private _dosageFormOptions(combinationDrugs: DrugCombination, shouldFilter): { value: string; label: string; }[] {
    if (!combinationDrugs) {
      return [];
    }

    const { genericRxcui } = combinationDrugs;

    if (!genericRxcui) {
      return [];
    }

    const groups = !this.drug.daw ? genericRxcui : genericRxcui.filter(group => group.groupType === 'SBD');
    const options = this.filterDrugOptions(groups, ['strength', 'route'], 'dosageForm', shouldFilter);
    return options;
  }

  private _routeOptions(combinationDrugs: DrugCombination, shouldFilter): { value: string; label: string; }[] {
    if (!combinationDrugs) {
      return [];
    }

    const { genericRxcui } = combinationDrugs;

    if (!genericRxcui) {
      return [];
    }

    const groups = !this.drug.daw ? genericRxcui : genericRxcui.filter(group => group.groupType === 'SBD');
    return this.filterDrugOptions(groups, ['strength', 'form'], 'route', shouldFilter);
  }

  private specificDrugDescription(combinationDrugs): string {
    if (!combinationDrugs) {
      return '';
    }

    const { genericRxcui } = combinationDrugs;

    if (!genericRxcui) {
      return '';
    }

    const groups = !this.drug.daw ? genericRxcui : genericRxcui.filter(group => group.groupType === 'SBD');
    return this.filterDrugOptions(groups, ['form', 'strength', 'route'], 'EMR_med_desc')[0]?.label;
  }

  public get detectStrength(): string {
    this.buildStrengthOptions(false);
    if (!this.strengthOptions) {
      return this.drug.strength;
    }

    return this.strengthOptions.map(s => s.value).indexOf(this.drug.strength) !== -1 ? this.drug.strength : '';
  }

  public get detectRoute(): string {
    this.buildRouteOptions(false);
    if (!this.pvRouteOptions) {
      return this.drug.route;
    }

    return this.pvRouteOptions.map(s => s.value).indexOf(this.drug.route) !== -1 ? this.drug.route : '';
  }

  public get detectDosageForm(): string {
    this.buildDosageFormOptions(false);
    if (!this.dosageFormOptions) {
      return this.drug.form;
    }

    return this.dosageFormOptions.map(s => s.value).indexOf(this.drug.form) !== -1 ? this.drug.form : '';
  }

  public reset() {
    this.drug.strength = '';
    this.drug.form = '';
    this.drug.route = '';
    this.buildStrengthOptions();
    this.buildDosageFormOptions();
    this.buildRouteOptions();
  }
}
