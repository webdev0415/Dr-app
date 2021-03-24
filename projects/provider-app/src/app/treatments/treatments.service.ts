import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, of as ObservableOf, zip, forkJoin } from 'rxjs';
import { catchError, concatMap, distinctUntilChanged, filter, finalize, flatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { clone, equals, isNil, omit, uniq } from 'ramda';


import { KludgesService } from 'services/kludges.service';
import { AddDrugTreatmentEvent } from './store-events/add-drug-treatment.event';
import { AddFastmedDrugTreatmentEvent } from './store-events/add-fastmed-drug-treatment.event';
import { DrugTreatmentNameChange } from './store-events/drug-treatment-name-change.event';
import { InitTreatments } from './store-events/init-treatments.event';
import { TreatmentsStoreEvent } from './store-events/treatments-store.event';
import { UpdateDrugConflictsInformationEvent } from './store-events/update-drug-conflics-information.event';
import { UpdateDrugInformationEvent } from './store-events/update-drug-information.event';
import { DrugCombination, DrugInformation } from './treatments.interface';
import { NotificationsService } from '../components/notifications/notifications.service';
import { StateService } from '../services/state.service';
import { UserService } from '../user/user.service';

import { Data } from 'common/models/data.model';
import { TreatmentsStateSnapshot, TreatmentType } from './treatments.type';
import {
  BackendTreatment,
  DrugConflictInformation,
  DrugSearchResultFM,
  TreatmentsState
} from './treatments.interface';

import { initialTreatments } from 'treatments/static/static.treatments';

import { PVAmount, PVDispenseForm, PVForms, PVRoutes } from './static/static.drugs';
import { CryptographicService } from '../services/cryptographic.service';
import { PVFrequencyEnum } from './enum/pv-frequency.enum';
import {
  DischargeInstruction,
  DischargeInstructionDB,
  PVDischargeBackendModel,
  ReturnToSchoolWork
} from '../discharge/discharge.interface';
import { drugNameMap } from '../../assets/drug-name-map';
import { Utils } from '../utils/utils';
import { RTSDaysEnum } from '../discharge/discharge.enum';
import { RTWRestrictionType } from '../discharge/discharge.type';


@Injectable()
export class TreatmentsService {
  private treatmentsState: BehaviorSubject<TreatmentsState> = new BehaviorSubject<TreatmentsState>(clone(initialTreatments));
  private treatmentState$: Observable<TreatmentsState> = this.treatmentsState.asObservable();

  private PVRoutes = PVRoutes;
  private PVForms = PVForms;
  private PVAmount = PVAmount;
  private PVFrequency = Object.keys(PVFrequencyEnum).map(key => ({value: key, label: key}));
  private PVDispenseForm = PVDispenseForm;
  private drugNameMap = drugNameMap;

  private static rtwRestrictionString(restrictionType: RTWRestrictionType, additionalInfo?: string): string {
    switch (restrictionType) {
      case 'None':
        return 'Patient can return to work without restrictions.';
      case 'Reevaluation':
        return 'Patient is excused until re-evaluated.';
      case 'Restricted':
        return ['Fit for work with the following restrictions:', additionalInfo].join('\n');
    }
  }

  constructor(
    private kludges: KludgesService,
    private notificationService: NotificationsService,
    private stateService: StateService,
    private userService: UserService,
    private cryptographicService: CryptographicService
  ) {
  }

  observe(mapFunction: (state: TreatmentsState) => any): Observable<any> {
    return this.treatmentState$.pipe(map(state => mapFunction(state)), distinctUntilChanged((a, b) => equals(a, b)));
  }

  observeNoDistinction(): Observable<TreatmentsState> {
    return this.treatmentState$;
  }

  dispatch(event: TreatmentsStoreEvent): Promise<any> {
    return new Promise<any>((resolve => {
      // @ts-ignore
      if (event.type === 'Add Treatment' && event.treatmentType.includes('Drug')) {
        if (this.isFastmed) {
          // @ts-ignore
          this.drugSearchFastMed(event.treatmentName, true).pipe(concatMap(drugs => {
            if (drugs.length) return this.kludges.getCombinationDrugsFastMed(drugs.map(item => item.pvid)).map(combinationDrugs => [drugs, combinationDrugs]);
            else return [drugs, []];
          })).subscribe(searchResults => {
            // @ts-ignore
            event = new AddFastmedDrugTreatmentEvent(event.icdCodes, event.treatmentType, event.treatmentName, event.treatmentTypes, this.isFastmed, searchResults[0], searchResults[1]);
            this.treatmentsState.next(event.getNewState(clone(this.treatmentsState.getValue())));
            resolve();
          });
          return;
        } else {
          // @ts-ignore
          event = new AddDrugTreatmentEvent(event.icdCodes, event.treatmentType, event.treatmentName, event.treatmentTypes, this.isFastmed, [], [], event.groupName, event.rxcui);
        }
      }
      this.treatmentsState.next(event.getNewState(clone(this.treatmentsState.getValue())));
      resolve();
    }));
  }

  /**
   * fetching saved treatments and save result in patient object
   * @param {Data} patient
   * @param {string[]} illnesses
   */
  restoreTreatments(patient: Data, illnesses: string[], primaryIllness: string): Promise<boolean> {
    const conflictInformation: DrugConflictInformation = {
      knownPrecautionConflicts: patient.additionalInformation.knownPrecautionConflicts,
      knownDrugConflicts: patient.additionalInformation.knownDrugConflicts,
      knownDrugAllergies: patient.additionalInformation.knownDrugAllergies
    };
    this.dispatch(new UpdateDrugConflictsInformationEvent(conflictInformation, 'replace'));

    return new Promise<boolean>(resolve => {
      this.kludges.getTreatments(patient.visitInformation.sessionId).pipe(catchError(error => {
        console.error(error);
        this.notificationService.warning('Unable to load treatments for visit.');
        return ObservableOf(null);
      })).subscribe((response: { treatments: BackendTreatment[], pvDischarge: PVDischargeBackendModel, dischargeInstructions: DischargeInstruction[], customInstruction: string, returnToWorkSchool: ReturnToSchoolWork }) => {
        const treatments = response.treatments;
        const isPatientCompleted = patient.visitInformation.status === 'TREATMENT_COMPLETE';
        this.dispatch(new InitTreatments(
          treatments.filter(item => this.userService.businessAvailableTreatments.includes(item.treatment_type)),
          illnesses,
          response.pvDischarge,
          response.customInstruction,
          Utils.toCamelCase<DischargeInstruction[]>(JSON.stringify(response.dischargeInstructions || [])),
          patient.patientInformation.age.years,
          isPatientCompleted,
          response.returnToWorkSchool
        )).then(() => {
          if (this.isFastmed && !this.stateService.patient.getLastViewOnly()) this.buildFastmedDrugInfo();
          resolve(true);
        });
      });
    });
  }

  public buildFastmedDrugInfo(): void {
    const drugInformation: DrugInformation[] = this.selectSnapshot().drugInformation;
    const drugs: { name: string, type: TreatmentType, description: string }[] = [];
    const drugUpdateEvent: DrugTreatmentNameChange[] = [];
    this.selectSnapshot().viewModelTreatments.filter(item => ['Prescription Drugs', 'OTC Drugs'].includes(item.type)).forEach(item => item.details.filter(detail => detail.isSelected).forEach(detail => drugs.push({
      name: detail.name,
      type: item.type,
      description: detail.nameDetails
    })));
    zip(...drugs.map(drug => this.drugSearchFastMed(drug.name, true).pipe(
      switchMap(result => {
        if (!result.length) return this.drugSearchFastMed(drug.name);
        return of(result);
      }),
      filter(result => Boolean(!!result)),
      concatMap((result: DrugSearchResultFM[]) => {
        return this.kludges.getCombinationDrugsFastMed(result.map(item => item.pvid)).map(combinationResult => [result, combinationResult]);
      }),
      tap((result: [DrugSearchResultFM[], DrugSearchResultFM[]]) => {
        const targetDrug = drugInformation.find(item => item.drugName.toLowerCase() === drug.name.toLowerCase());
        targetDrug.similarDrugs = result[0];
        targetDrug.combinationDrugs = result[1];
        let selectedDrug;
        if (drug.description !== 'Name Details Placeholder') selectedDrug = result[0].find(item => item.description === drug.description);
        else {
          selectedDrug = result[0].filter(item => item.name.toLowerCase() === targetDrug.drugName.toLowerCase())
            .filter(item => !targetDrug.strength ? !item.strength : item.strength && item.strength === targetDrug.strength)
            .filter(item => !targetDrug.unit ? !item.strength_units : item.strength_units && item.strength_units.toLowerCase() === targetDrug.unit.toLowerCase())[0];
        }
        targetDrug.description = (selectedDrug || drug).description;
        drugUpdateEvent.push(new DrugTreatmentNameChange(drug.type, targetDrug.drugName, targetDrug.drugName.toUpperCase(), targetDrug.description));
      })
    ))).subscribe(() => this.dispatch(new UpdateDrugInformationEvent(drugInformation, false))
      .then(() => {
        drugUpdateEvent.forEach(event => this.dispatch(event));
    }));
  }

  private getDrugCommonName(drugName: string): string {
    return this.drugNameMap[drugName.toUpperCase()] || drugName;
  }

  private get isFastmed(): boolean {
    return this.userService.getIsFastmedBusiness;
  }

  public drugSearchFastMed(search: string, exactMatch = false): Observable<DrugSearchResultFM[]> {
    const searchString = exactMatch ? search : search.replace(/([^(\s|\w)]|\/)/g, ' ').replace(/[\s]+/g, ' ').replace(/^\s*/g, '');
    return this.kludges.getDrugsByNameFastMed(searchString, exactMatch);
  }

  public getDrugsByName(search: string, exactMatch = false, type?: TreatmentType): Observable<string[] | { [key in 'label' | 'value']: string }[]> {
    if (this.isFastmed) {
      return this.drugSearchFastMed(search, exactMatch).pipe(switchMap(result => {
        if (exactMatch && !result) return this.drugSearchFastMed(this.getDrugCommonName(search));
        else return of(result);
      }), catchError(() => of([])), map((result: DrugSearchResultFM[]) => uniq(result.map(item => item.name))));
    } else return this.kludges.getDrugsByNameV1(search, type === 'OTC Drugs' ? 'OTC' : 'PRESCRIPTION').pipe(map(result => result.map(item => ({ label: item.name, value: item.productIds[0] }))));
  }

  public getDrugProductDetails(productId: string): Observable<{ group: string; rxcui: string; }> {
    return this.kludges.getDrugProductDetails(productId);
  }

  public getCombinationDrugs(productId: string, useRxcui = false): Observable<DrugCombination> {
    return this.kludges.getCombinationDrugs(productId, useRxcui);
  }

  public extractRxcuisFromDrugCombination(drugCombination: DrugCombination): string[] {
    const { header, genericRxcui } = drugCombination;

    const rxcuis = [];
    if (genericRxcui) {
      rxcuis.push(...genericRxcui.reduce((grxcuis, group) => {
        const newRxcuis = group.groupInformation.reduce((irxcuis, groupInfo) => {
          if (groupInfo.drugType === 'Prescription Drug') {
            return [...irxcuis, groupInfo.rxcui];
          }
          return [...irxcuis];
        }, []);
        return [...grxcuis, ...newRxcuis];
      }, []));
    }
    if (header && header.atcgroups) {
      rxcuis.push(...header.atcgroups.reduce((arxcuis, atcInfo) => [...arxcuis, atcInfo.rxcui], []));
    }

    return rxcuis;
  }

  public filterDrugByBusiness(rxcui: string): Observable<DrugCombination> {
    const business = this.userService.isPICModeBusiness ? 1 : 0;
    return this.kludges.filterDrugByBusiness(rxcui, business);
  }

  public filterDrugByBusinessMultiple(rxcuis: string[]): Observable<DrugCombination[]> {
    return forkJoin(rxcuis.map(rxcui => this.filterDrugByBusiness(rxcui)));
  }

  public getRxcuisWithDrugName(drugName: string): Observable<string[]> {
    return this.getDrugsByName(drugName).pipe(
      mergeMap((drugs: { value: string; label: string }[]) => forkJoin(drugs.map(({value}) => this.getCombinationDrugs(value)))),
      map(combinationDrugsArray => combinationDrugsArray.reduce((rxcuis, combinationDrug) => {
        const newRxcuis = this.extractRxcuisFromDrugCombination(combinationDrug);
        return [...new Set<string>([...rxcuis, ...newRxcuis])];
      }, []))
    );
  }

  public getRxcui(icdCode: string, group: string, name: string, prescription): Observable<string> {
    return this.kludges.getRxcui(icdCode, group, name, prescription);
  }

  public getRxcuisWithIcd(icdCode: string, group: string, drugName: string, prescription: boolean): Observable<string[]> {
    return this.getRxcui(icdCode, group, drugName, prescription).pipe(
      mergeMap(ingredientRxcui => this.getCombinationDrugs(ingredientRxcui, true)),
      map(combinationDrugs => this.extractRxcuisFromDrugCombination(combinationDrugs))
    );
  }

  public refreshTreatment(patient: Data): Observable<any> {
    return this.kludges.refreshTreatment(patient, this.userService.isPICModeBusiness);
  }

  public get dischargeSelected(): boolean {
    const dischargeTreatments = this.selectSnapshot().viewModelTreatments.find(item => item.type === 'Discharge Disposition');
    return !dischargeTreatments.forceHide && dischargeTreatments.details.some(item => item.isSelected) && !equals(initialTreatments.pvDischarge, this.selectSnapshot().pvDischarge);
  }

  public get RTWSSelected(): boolean {
    const RTWSTreatments = this.selectSnapshot().viewModelTreatments.find(item => item.type === 'Return to Work/School Status');
    return !RTWSTreatments.forceHide && RTWSTreatments.details.some(item => item.isSelected) && this.selectSnapshot().returnToWorkSchool.returnTo !== 'NONE';
  }

  public get isRTWSEmpty(): boolean {
    const checkedFields = ['rtsDays', 'rtwRestrictionType', 'rtwWasIll'];
    return Object.entries(this.selectSnapshot().returnToWorkSchool).filter(
      ([key, value]) => checkedFields.includes(key)
    ).every(
      ([key, value]) => isNil(value) || !value
    );
  }

  private get preparedRTSWData(): ReturnToSchoolWork {
    const rtswData = clone(this.selectSnapshot().returnToWorkSchool);
    Object.keys(rtswData).forEach(item => {
      if (!rtswData[item]) rtswData[item] = null;
      else if (
        ['rtswStart', 'rtswStop'].includes(item)) {
        if ((rtswData.returnTo === 'SCHOOL' && rtswData.rtsDays !== 'Other') ||
          (rtswData.returnTo === 'WORK' && rtswData.rtwRestrictionType !== 'DateRange')) rtswData[item] = null;
        // todo: uncomment when OE validation changed
        // else rtswData[item] = rtswData[item].replace('/', '-');
      }
    });
    if (this.isRTWSEmpty) rtswData.returnTo = 'NONE';
    if (!rtswData.rtwWasIll) rtswData.rtwSeenFor = '';
    if (rtswData.returnTo === 'SCHOOL') rtswData.rtwRestrictionType = null;
    else rtswData.rtsDays = null;
    if (rtswData.rtwRestrictionType !== 'Restricted') rtswData.rtwRestrictions = '';
    return rtswData;
  }

  public RTSEnumReverse(day: RTSDaysEnum): string {
    return Object.keys(RTSDaysEnum).find((key: keyof typeof RTSDaysEnum) => RTSDaysEnum[key] === day);
  }

  private get prefinalizedRTSW(): string {
    let mainPart: string;
    let wasIllPart: string;
    const rtswData = clone(this.selectSnapshot().returnToWorkSchool);

    if (rtswData.returnTo === 'SCHOOL') {
      mainPart = `Patient can return to school${[RTSDaysEnum.Today, RTSDaysEnum.Tomorrow].includes(rtswData.rtsDays) ? ' ' : ' in'} ${this.RTSEnumReverse(rtswData.rtsDays)}`;
    } else if (rtswData.returnTo === 'WORK') {
      wasIllPart = rtswData.rtwWasIll ? `Patient was ill and seen for ${rtswData.rtwSeenFor}` : null;
      mainPart = TreatmentsService.rtwRestrictionString(rtswData.rtwRestrictionType, rtswData.rtwRestrictions);
    }

    if (rtswData.returnTo === 'SCHOOL' && rtswData.rtsDays === RTSDaysEnum.Other || rtswData.returnTo === 'WORK' && rtswData.rtwRestrictionType === 'DateRange') {
      mainPart = `Patient is excused from ${rtswData.returnTo === 'SCHOOL' ? 'school' : 'work'} from: ${rtswData.rtswStart} until: ${rtswData.rtswStop}`;
    }
    return [wasIllPart, mainPart].filter(part => !!part).join('\n');
  }

  public saveTreatments(patient_id: string, data: any) {
    const ehrCredentials = this.cryptographicService.encryptedCredentials;
    const dischargeInfoVM = this.selectSnapshot().pvDischarge;
    const dischargeInfo: PVDischargeBackendModel = this.dischargeSelected ? Object.assign(dischargeInfoVM, {therapies: dischargeInfoVM.therapies || null, followUpWith: dischargeInfoVM.followUpWith || '', time: dischargeInfoVM.time || '' }) : null;

    const payload = {
      treatments: data.rxTreatments,
      DMEs: data.DMEs,
      fast_med_blob: '',
      pvDischarge: dischargeInfo,
      customInstruction: this.selectSnapshot().customInstructions,
      dischargeInstructions:  this.stateService.app.developmentBar.additionalDischargeEnabled() ? Utils.toSnakeCase<DischargeInstructionDB[]>(JSON.stringify(this.selectSnapshot().dischargeInstructions)) : [],
      returnToWorkSchool: this.RTWSSelected ? omit(['rtwWasIll'], this.preparedRTSWData) : undefined
    };

    if (this.userService.getUserData.has_ehr_auth && !ehrCredentials) {
      this.notificationService.warning('You didn\'t provide credentials for your company\'s health record system', 'Health Record System');
    }

    if (this.userService.getUserData.has_ehr_auth && ehrCredentials) {
      payload.fast_med_blob = ehrCredentials;
    }

    return this.kludges.saveTreatments(patient_id, payload).pipe(finalize(() => {
      const state = clone(this.treatmentsState.getValue());
      state.treatmentsDirty = false;
      this.treatmentsState.next(state);
    }));
  }

  public selectSnapshot(): Readonly<TreatmentsStateSnapshot> {
    return <TreatmentsStateSnapshot>Object.freeze(this.treatmentsState.getValue());
  }

  get treatmentsDirty(): boolean {
    return this.selectSnapshot().treatmentsDirty;
  }

  public get shouldSaveTreatments(): boolean { return !(this.stateService.patient.getLastViewOnly()) && this.treatmentsDirty; }

  public get drugRoutes(): {value: string, label: string}[] { return this.PVRoutes; }
  public get drugForms(): {value: string, label: string}[] { return this.PVForms; }
  public get drugAmount(): { value: string, label: string }[] { return this.PVAmount; }
  public get drugFrequency(): { value: string, label: string }[] { return this.PVFrequency; }
  public get drugDispenseForm(): { value: string, label: string }[] { return this.PVDispenseForm; }
  public get prefinalizedTreatmentsList(): string[] {
    const treatmentsState = this.selectSnapshot();
    let prefinalizedTreatmentsList: string[] = [];
    treatmentsState.viewModelTreatments.filter(group => !['Return to Work/School Status', 'Discharge Disposition'].includes(group.type) && (group.details.some(treatment => treatment.isSelected) || group.forceShow) && !group.forceHide).forEach(group => {
      prefinalizedTreatmentsList = prefinalizedTreatmentsList.concat(group.details.filter(item => item.isSelected).map(item => item.name));
    });
    if (!this.isRTWSEmpty) prefinalizedTreatmentsList.push(this.prefinalizedRTSW);
    if (this.dischargeSelected) prefinalizedTreatmentsList.push('Patient has been discharged.');
    return prefinalizedTreatmentsList;
  }
}
