import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import {
  and,
  append,
  chain,
  compose,
  eqProps,
  equals,
  flatten,
  groupWith, gt,
  head, lt,
  map as rMap,
  of,
  omit,
  uniq,
  zipObj
} from 'ramda';
import { Subject } from 'rxjs';
import { filter, map, mergeMap, pluck, takeUntil, tap } from 'rxjs/operators';


import { DiagnosticEngine } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/diagnostic-engine/diagnostic-engine.interface';
import { GenderEnum } from '../../../../../pharmacist/src/lib/side-models/patient-profile/enums/gender.enum';
import { DialogService } from '../../services/app/dialog.service';
import { stdDialogConfig } from '../../static/app.constants';
import { ProtocolKeys } from '../enum/protocol-keys.enum';
import { TreatmentProtocolDetails } from '../interface/treatment-protocol-details.interface';
import { TreatmentProtocolItem } from '../interface/treatment-protocol-item.interface';
import { PpLoadProtocolComponent } from '../pp-load-protocol/pp-load-protocol.component';
import { PpSaveProtocolComponent } from '../pp-save-protocol/pp-save-protocol.component';
import { ProtocolsService } from '../protocols.service';
import { nonTreatmentTypes } from '../static/static.treatments';
import { AddTreatmentEvent } from '../store-events/add-treatment.event';
import { LoadProtocolEvent } from '../store-events/load-protocol.event';
import {
  Detail,
  DrugInformation,
  PrescriptionDetail,
  Treatment,
  TreatmentPrescriptions,
  TreatmentsState, TreatmentTypesItem
} from '../treatments.interface';
import { TreatmentsService } from '../treatments.service';
import { TreatmentType } from '../treatments.type';

@Component({
  selector: 'pa-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentPlanComponent<T extends Detail | PrescriptionDetail> implements OnInit, OnChanges, OnDestroy {
  @Input() treatmentType: TreatmentType;
  @Input() diagnosticEngine: DiagnosticEngine[];
  @Input() patientData: { gender: GenderEnum; weight: number };
  @Input() treatmentTypes: TreatmentTypesItem[];
  public protocols: TreatmentProtocolItem[] = [];
  private contributors: {[icdCode: string]: string};
  private drugInformation: {[drugName: string]: DrugInformation};
  private treatmentDetails: T[] = [];
  private selectedDetails: T[] = [];
  private wrappedProtocols: T[] = [];

  private readonly dialogConfig: Partial<MatDialogConfig> = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '300px',
    height: '600px',
    panelClass: ['rounded'],
    width: '500px'
  };

  private _destroy$ = new Subject<void>();

  constructor(
    private dialogService: DialogService,
    private protocolsService: ProtocolsService,
    private treatmentsService: TreatmentsService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    // this.loadProtocols();
    this.treatmentsService.observeNoDistinction().pipe(
      takeUntil(this._destroy$),
      tap((state: TreatmentsState) => {
        const drugInformation = state.drugInformation;
        this.drugInformation = zipObj(drugInformation.map(item => item.drugName.toLowerCase()), drugInformation);
      }),
      pluck('viewModelTreatments'),
      map((treatments: Treatment[]): Detail[] => treatments.find(item => item.type === this.treatmentType).details),
      tap((details: T[]) => {
        if (this.isDrugTreatments) {
          // @ts-ignore
          this.treatmentDetails = details.map((item: PrescriptionDetail): PrescriptionDetail => ({...item, prescriptions: this.getDrugPrescriptions(item)}));
        } else this.treatmentDetails = details;
      }),
      tap((details: T[]) => this.selectedDetails = this.treatmentDetails.filter(item => item.isSelected)),
      tap(() => this.cdRef.detectChanges())
    ).subscribe();
  }

  private loadProtocols(): void {
    this.protocolsService.getTreatmentsProtocols()
      .pipe(
        map(data => data.filter(item => item.type === this.treatmentType
          && this.contributors[item.icdCode]
          && item.keys.some(key => this.keyAllowed(key)))),
        tap(data => {
          this.protocols = data;
          this.wrappedProtocols = this.wrapProtocols(data);
        })
      ).subscribe();
  }

  private keyAllowed(key: string|ProtocolKeys): boolean {
    return !!this.contributors[key] || this.parseKey(key)(this.patientData);
  }

  private parseKey(key: string|ProtocolKeys): (patientData: { gender: GenderEnum; weight: number }) => boolean {
    switch (key) {
      case ProtocolKeys.FEMALE:
        return (patientData) => patientData.gender === GenderEnum.FEMALE;
      case ProtocolKeys.MALE:
        return (patientData) => patientData.gender === GenderEnum.MALE;
      case ProtocolKeys.WEIGHT_LT_50:
        return (patientData) => lt(patientData.weight, 50);
      case ProtocolKeys.WEIGHT_GT_100:
        return (patientData) => gt(patientData.weight, 100);
      case ProtocolKeys.WEIGHT_RANGE:
        return (patientData) => and(gt(patientData.weight, 50), lt(patientData.weight, 100));
      default:
        return () => false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.diagnosticEngine && changes.diagnosticEngine.currentValue) {
      const diagnosticEngine = changes.diagnosticEngine.currentValue;
      this.contributors = zipObj(diagnosticEngine.map(item => item.icd10), diagnosticEngine.map(item => item.icdName));
    }
  }

  public openLoadProtocolDialog(): void {
    const selectedIllnesses = this.diagnosticEngine.filter(item => item.isSelected).map(item => <{ [key in 'label'|'value']: string }>zipObj(['label', 'value'], [item.icd10, item.icd10]));
    const treatments = this.wrappedProtocols.filter(item => this.protocolNotImplemented(item, 'selectedDetails')).map(item => ({ name: item.name, toTreat: item.toTreat }));
    const data: { protocolName: string; treatments: { name: string; toTreat: string[] }[]; selectedIllnesses: { [key in 'label'|'value']: string }[]; nonTreatmentType: boolean } = {
      selectedIllnesses, treatments, protocolName: '', nonTreatmentType: this.isNonTreatmentType
    };
    const config: MatDialogConfig = { ...new MatDialogConfig(), ...stdDialogConfig, ...this.dialogConfig, data: data };

    this.dialogService.open<{ name: string; toTreat: string[] }[]>(PpLoadProtocolComponent, config)
      .pipe(filter(result => !!result))
      .subscribe(result => {
        this.treatmentsService.dispatch(this.isNonTreatmentType ?
          new AddTreatmentEvent(selectedIllnesses.map(item => item.value), this.treatmentType, result[0].name, this.treatmentTypes)
          : new LoadProtocolEvent(result.map(treatment => {
          const wrappedProtocol = this.wrappedProtocols.find(item => item.name === treatment.name);
          return { ...wrappedProtocol, toTreat: treatment.toTreat, isSelected: true, doctorAdded: true };
        }), this.treatmentType));
      });
  }

  public openSaveProtocolDialog(): void {
    // const treatments = this.selectedDetails.filter(item => this.protocolNotImplemented(item, 'wrappedProtocols')).map(item => item.name);
    // const icdKeys = flatten(this.selectedDetails.map(item => item.toTreat));
    // // @ts-ignore
    // const icdCodes: { [key in 'label'|'value']: string }[] = compose(rMap(compose(zipObj(['label', 'value']), chain(append, head), of)), uniq)(icdKeys);
    // const data: { icdCodes: { [key in 'label'|'value']: string }[]; treatments: string[] } = { icdCodes, treatments };
    // const config: MatDialogConfig = { ...new MatDialogConfig(), ...stdDialogConfig, ...this.dialogConfig, data: data };
    // this.dialogService.open<TreatmentProtocolDetails>(PpSaveProtocolComponent, config).pipe(filter(result => !!result), mergeMap(protocolDetails => {
    //   const selectedDetails = protocolDetails.treatments.filter(item => item.isSelected).map(item => this.selectedDetails.find(detail => detail.name.toLowerCase() === item.name.toLowerCase()));
    //   return this.protocolsService.createTreatmentProtocol(this.wrapDetails(selectedDetails, protocolDetails.keys));
    // })).subscribe(result => {
    //   this.loadProtocols();
    // });
  }

  private getDrugPrescriptions(detail: PrescriptionDetail): Omit<TreatmentPrescriptions, 'direction_object'|'EMR_med_name'|'EMR_med_desc'> {
    const drugInformation = this.drugInformation[detail.name.toLowerCase()];
    return {
      route: drugInformation.route || 'none',
      strength: drugInformation.strength || 'none',
      quantity: drugInformation.quantity?.toString() || null,
      directions: drugInformation.directionsString,
      unit: drugInformation.unit,
      form: drugInformation.form,
      amount: drugInformation.amount,
      frequency: drugInformation.frequency,
      daw: drugInformation.daw,
      prn: drugInformation.prn,
      dispenseForm: drugInformation.dispenseForm,
    };
  }

  private wrapDetails(details: T[], keys: string[]): TreatmentProtocolItem[] {
    const protocols: TreatmentProtocolItem[][] = details.map((detail): TreatmentProtocolItem[] => {
      const icdCodes = detail.toTreat;
      const drugInformation = this.isDrugTreatments ? this.drugInformation[detail.name.toLowerCase()] : { strength: 'no', unit: 'dosage' };
      const prescriptions = this.isDrugTreatments ? this.getDrugPrescriptions(detail as PrescriptionDetail) : null;
      return icdCodes.map(icdCode => {
        const protocol = {
          ...omit(['doctorAdded', 'isSelected'], detail),
          id: null,
          keys: keys,
          type: this.treatmentType,
          isIllness: true,
          icdCode: icdCode,
          icdDesc: this.contributors[icdCode],
          directions: [],
          prescriptions: prescriptions,
          dosage: `${drugInformation.strength} ${drugInformation.unit}`,
          doctorId: null,
          businessId: null
        };
        return protocol;
      });
    });
    return flatten(protocols);
  }

  private wrapProtocols(protocols: TreatmentProtocolItem[]): T[] {
    const selectedCodes = this.diagnosticEngine.filter(item => item.isSelected).map(item => item.icd10);
    return groupWith(eqProps('name'), protocols).map((items: TreatmentProtocolItem[]) => {
      const item = items[0];
      // @ts-ignore
      let wrappedProtocol: T = {
        ...omit(['businessId', 'doctorId', 'id', 'keys', 'type', 'icdDesc', 'icdCode', 'isIllness', 'dosage'], item),
        toTreat: this.isNonTreatmentType ? selectedCodes : items.map(p => p.icdCode)
      };
      if (!this.isDrugTreatments) {
        // @ts-ignore
        wrappedProtocol = omit(['prescriptions'], wrappedProtocol);
      }
      return wrappedProtocol;
    });
  }

  public get protocolsAvailable(): boolean {
    return this.wrappedProtocols.some(item => this.protocolNotImplemented(item, 'selectedDetails'));
  }

  public get informationToSaveAvailable(): boolean {
    return this.selectedDetails.some(item => this.protocolNotImplemented(item, 'wrappedProtocols'));
  }

  private protocolNotImplemented(protocol: T, implementationsKey: 'selectedDetails'|'wrappedProtocols'): boolean {
    const implementation = this[implementationsKey].find(detail => protocol.name.toLowerCase() === detail.name.toLowerCase());
    if (!implementation) return true;
    const distinctKeys = ['toTreat', 'isSelected', 'doctorAdded', 'dosage', 'directions', 'type', 'sources'];
    if (!this.isDrugTreatments) distinctKeys.push('prescriptions');
    // @ts-ignore
    const noChanges = equals(omit(distinctKeys, protocol), omit(distinctKeys, implementation));
    return !implementation || !noChanges;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private get isDrugTreatments(): boolean {
    return !!this.treatmentType.match(/drugs$/i);
  }

  private get isNonTreatmentType(): boolean {
    return nonTreatmentTypes.includes(this.treatmentType);
  }
}
