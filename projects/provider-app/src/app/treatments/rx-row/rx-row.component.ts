import { PrescribingItem, Prescription } from 'treatments/prescription/prescription.component';
import { PopoverDirective} from 'ng-uikit-pro-standard';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { ProtocolsService } from 'treatments/protocols.service';
import { MedInfo, SigOption } from 'treatments/treatments.new.interface';
import { PercentPipe } from '@angular/common';

export interface Option {
  value: string;
  label: string;
  disabled: boolean;
}

const optionKeys = ['strength', 'form', 'route', 'freq', 'unit'] as const;
type OptionKey = typeof optionKeys[number];

@Component({
  selector: 'pa-rx-row',
  templateUrl: './rx-row.component.html',
  styleUrls: ['./rx-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxRowComponent implements OnInit {
  @Output() removeItem: EventEmitter<PrescribingItem> = new EventEmitter<PrescribingItem>();

  @ViewChild('pop') pop: PopoverDirective;

  drugNames: Option[] = [];

  strengths: Option[] = [];
  forms: Option[] = [];
  sigs: Option[] = [];
  routes: Option[] = [];
  freqs: Option[] = [];
  units: Option[] = [];

  fPrescriptions: Prescription[] = [];

  conflictLevel = 'Warning';
  conflictMessage = 'This dose is outside of the recommended range based on the patients age and weight. Are you sure you would like to proceed with this dose?';
  conflictAcknowledged = false;
  reason = 'This medication is typically used to treat this illness for this specific reason - This is why you should use this. ';
  dosageHelper = false;

  prescribingItem: PrescribingItem;

  constructor(
    private protocolsService: ProtocolsService,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  @Input() set item(item: PrescribingItem) {
    this.prescribingItem = item;
    this.drugNames = item.drugNames.map(name => ({ value: name.str, label: name.str, disabled: false }));

    this.initOptions();

    this.changeDetectorRef.detectChanges();
  }

  @Input() set favoritePrescriptions(favoritePrescriptions: Prescription[]) {
    this.fPrescriptions = favoritePrescriptions;
    this.sigs = favoritePrescriptions
      .filter(pr => `${pr.rxcui}` === `${this.prescribingItem.prescription.rxcui}`)
      .map(pr => pr.sig)
      .map(sig => ({ value: sig, label: sig, disabled: false }));

    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
  }

  initOptions(): void {
    this.strengths = this.getOptions('strength');
    this.forms = this.getOptions('form');
    this.routes = this.getOptions('route');
    this.freqs = this.getOptions('freq');
    this.units = this.getOptions('unit');

    this.prescribingItem.prescription.EMR_med_name = this.getOptions('EMR_med_name')[0].label;
    this.prescribingItem.prescription.EMR_med_desc = this.getOptions('EMR_med_desc')[0].label;
  }

  drugNameChanged(drugName: string) {
    const dName = this.prescribingItem.drugNames.find(d => d.str === drugName);
    this.prescribingItem.prescription.daw = dName.isBranded;

    this.prescribingItem.prescription.strength = undefined;
    this.prescribingItem.prescription.form = undefined;
    this.prescribingItem.prescription.route = undefined;

    this.initOptions();

    this.changeDetectorRef.detectChanges();
  }

  setRecommendOptions(prescription: Prescription) {
    this.prescribingItem.prescription = {...prescription};
  }

  optionChanged(key: OptionKey | 'sig', option: Option): void {
    if (option.disabled) {
      if (key !== 'sig') {
        this.resetOptions(key, option.value);
      }
    } else {
      const { prescription } = this.prescribingItem;
      prescription[key] = option.value;
      if (key === 'sig') {
        const recommends = this.fPrescriptions.filter(e => e.sig == option.value);
        if (recommends.length) {
          this.setRecommendOptions(recommends[0]);
        }

      } else if (key === 'strength' || key === 'form' || key === 'route' || key === 'freq' || key === 'unit') {
        this.rebuildOptions(key);
      }
    }

    this.prescribingItem.prescription.EMR_med_name = this.getOptions('EMR_med_name')[0].label;
    this.prescribingItem.prescription.EMR_med_desc = this.getOptions('EMR_med_desc')[0].label;

    this.changeDetectorRef.detectChanges();
  }

  resetOptions(excludeKey: OptionKey = null, value: string = '', rowIndex: number = -1): void {
    const { prescription } = this.prescribingItem;
    prescription.strength = undefined;
    prescription.form = undefined;
    prescription.route = undefined;

    if (prescription.dosageHelper?.rows) {
      prescription.dosageHelper.rows.forEach(row => {
        row.freq = undefined;
        row.unit = undefined;
      })
    }

    if (excludeKey) {
      if (rowIndex === -1) {
        prescription[excludeKey] = value;
      } else {
        prescription.dosageHelper.rows[rowIndex][excludeKey] = value;
      }
    }

    this.rebuildOptions(excludeKey);
  }

  private filterDrugOptions(infos: MedInfo[], filterKeys: OptionKey[], targetKey: OptionKey | 'EMR_med_name' | 'EMR_med_desc'): Option[] {
    // const buildStrength = (strengths: string[]): string => {
    //   const buildConstantUnits = (constantStrengths) => {
    //     if (constantStrengths.length === 1) {
    //       return constantStrengths[0];
    //     }

    //     const allStrengths = constantStrengths.map(str => str.split('/')).flat();
    //     const unit = allStrengths[0].replace(/[0-9 .]/g, '').trim();
    //     const numbers = allStrengths.map(strength => parseFloat(strength)).filter(n => !isNaN(n)).join('-');
    //     return numbers + (unit.toLowerCase().includes('g') ? ' ' : '' ) + unit;
    //   };

    //   if (strengths[0].endsWith('/5mL')) {
    //     return buildConstantUnits(strengths.map(strength => strength.split('/5mL')[0])) + '/5mL';
    //   }
    //   return buildConstantUnits(strengths);
    // };

    const filteredInfos = infos.filter(info => {
      const { prescription } = this.prescribingItem;
      return filterKeys.every(key => {
        if (key == 'strength' || key === 'form') {
          if (!prescription[key]) {
            return true;
          }

          const infoValue = key === 'form' ? info.dosage_form_abbr : key === 'strength' ? `${info.strength}${info.strength_uom}` : info[key];
          return infoValue === prescription[key];
        }

        if (key === 'route') {
          if (!prescription[key]) {
            return true;
          }

          const routes = info.route_info;
          return routes.some(r => r.sigtext === prescription[key]);
        }

        if (key === 'freq' || key === 'unit') {
          if (!prescription.dosageHelper?.rows) {
            return true;
          }

          const prescriptionValues = prescription.dosageHelper.rows.map(row => row[key]).filter(Boolean);
          const infoValues = key === 'freq' ? info.frequency_info.map(i => i.sigtext) : info.dosage_unit;
          return prescriptionValues.every(p => infoValues.indexOf(p) !== -1);
        }
      });
    });

    const buildField = (info: MedInfo): string | SigOption[] | string[] => {
      if (targetKey === 'strength') {
        return `${info.strength}${info.strength_uom}`;
      }
      if (targetKey === 'form') {
        return info.dosage_form_abbr;
      }
      if (targetKey === 'route') {
        return info.route_info;
      }
      if (targetKey === 'freq') {
        return info.frequency_info;
      }
      if (targetKey === 'unit') {
        return info.dosage_unit;
      }

      return info[targetKey];
    };

    const filteredValues: Option[] = [];

    const valueExists = value => {
      return filteredValues.some(v => v.value === value);
    }

    filteredInfos.forEach(info => {
      const value = buildField(info);
      if (targetKey === 'strength' || targetKey === 'form' || targetKey === 'EMR_med_name' || targetKey === 'EMR_med_desc') {
        const v = value as string;
        if (!valueExists(v)) {
          filteredValues.push({ value: v, label: v, disabled: false });
        }
      } else if (targetKey === 'route' || targetKey === 'freq') {
        (value as SigOption[]).forEach(sOption => {
          if (!valueExists(sOption.sigtext)) {
            filteredValues.push({ value: sOption.sigtext, label: sOption.option, disabled: false });
          }
        });
      } else if (targetKey === 'unit') {
        (value as string[]).forEach(s => {
          if (!valueExists(s)) {
            filteredValues.push({ value: s, label: s, disabled: false });
          }
        });
      }
    });

    return filteredValues;
  }

  private filteredGroups() {
    const { PICMedInfo } = this.prescribingItem;
    return PICMedInfo;
  }

  // private _strengthOptions(): Option[] {
  //   return this.filterDrugOptions(this.filteredGroups(), ['route', 'form'], 'strength');
  // }

  // private _formOptions(): Option[] {
  //   return this.filterDrugOptions(this.filteredGroups(), ['route', 'strength'], 'form');
  // }

  // private _routeOptions(): Option[] {
  //   return this.filterDrugOptions(this.filteredGroups(), ['strength', 'form'], 'route');
  // }

  // private _emrMedName(): string | null {
  //   const options = this.filterDrugOptions(this.filteredGroups(), ['strength', 'form', 'route'], 'EMR_med_name').filter(opt => opt.value);
  //   return options.length ? options[0].label : null;
  // }

  // private _emrMedDesc(): string {
  //   const options = this.filterDrugOptions(this.filteredGroups(), ['strength', 'form', 'route'], 'EMR_med_desc').filter(opt => opt.value);
  //   return options.length ? options[0].label : null;
  // }

  private getOptions(key: OptionKey | 'EMR_med_name' | 'EMR_med_desc'): Option[] {
    const otherKeys = optionKeys.filter(k => k !== key);
    return this.filterDrugOptions(this.filteredGroups(), otherKeys, key);
  }

  private _rebuildOptions(options: Option[], activeOptions: Option[]) {
    const enabledOptions = options
      .filter(option => !!activeOptions.find(opt => opt.value === option.value))
      .map(({ label, value }) => ({ label, value, disabled: false }));
    const disabledOptions = options
      .filter(option => !activeOptions.find(opt => opt.value === option.value))
      .map(({ label, value }) => ({ label, value, disabled: true }));

    return enabledOptions.concat(disabledOptions);
  }

  private rebuildOptions(key?: OptionKey): void {
    const keys = optionKeys.filter(k => k !== key);
    if (key) {
      keys.forEach(k => {
        this[`${k}s`] = this._rebuildOptions(this[`${k}s`], this.getOptions(k));
      });
    } else {
      keys.forEach(k => {
        this[`${k}s`].forEach(i => i.disabled = false);
      });
    }
  }

  handleSig(sig: string) {
    const formattedSig: Option = {
      value: sig,
      label: sig,
      disabled: false
    };
    this.prescribingItem.prescription.sig = sig;
    this.sigs = [...this.sigs, formattedSig];
    this.dosageHelper = false;
    this.changeDetectorRef.detectChanges();
  }

  prescriptionSave(sig: string) {
    this.protocolsService.createTreatmentProtocol({ ...this.prescribingItem, prescription: { ...this.prescribingItem.prescription, sig } }).subscribe();
  }

  acknowledgeConflict() {
    console.log('The conflict was acknowledged by the doctor');
    this.pop.hide();
  }

  compareFn(selOpt: Option, option: Option): boolean {
    return selOpt && option && selOpt.value === option.value;
  }

  removeSingleItem(item: PrescribingItem) {
    this.removeItem.emit(item);
  }
}
