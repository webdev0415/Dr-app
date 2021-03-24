import { Injectable } from '@angular/core';


import { HistoryTypesEnums } from 'common/enums';
import { SymptomTypesEnum } from 'common/enums/symptom-types.enum';
import {
    NewSymptom,
    ParsedSymptom,
    SymptomCategory,
    SymptomGroup,
    SymptomGroupCategory
} from 'common/interfaces/symptoms.interface';
import * as DataModel from 'common/models/data.model';
import { clone, equals, flatten, union } from 'ramda';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';
import { blacklistedSymptoms, physicalGroups } from 'static/app.constants';
import { historyCategories, symptomSectionsList } from 'static/patient.constants';
import { blacklistedGroups, groupedSymptomsTypes } from 'static/static.symptomsinfo';
import { DrugConflictInformation, TreatmentTypesItem } from 'treatments/treatments.interface';
import { TreatmentsService } from 'treatments/treatments.service';
import { DateTime } from 'utils/dateTime';
import { Triage } from '../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { HistoryItem } from '../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';

import { drugNameMap } from '../../assets/drug-name-map';
import { PatientDataSectionNameEnum } from '../common/enums/patient-data-section.enum';
import { DiagnosisAccordionGroup } from '../common/interfaces/diagnostic-engine.interface';
import { SourceInfoSymptom } from '../common/interfaces/illness-source-info.interface';
import { SymptomDescription, SymptomDescriptionValue } from '../common/interfaces/pp-select.interface';
import { PatientDataSection } from '../common/types/patient-data-section.type';
import { symptomSourceExcluded } from '../components/app/workspace/patientspace/constants/symptom-excluded-sources.static';
import { defaultGroupedSymptom } from '../components/app/workspace/patientspace/symptoms/symptoms.interface';
import { FormattedTriageLab } from '../labs/interfaces/formatted-triage-lab.interface';
import { returnToWorkPayloadJSON } from '../treatments/static/static.treatments';
import { UpdateDrugConflictsInformationEvent } from '../treatments/store-events/update-drug-conflics-information.event';

import { SymptomError } from '../utils/errors';
import { SentryErrorHandler } from '../utils/sentryErrorHandler';
import { isSymptomPresenting } from '../utils/symptoms';
import { ServicedataService } from './servicedata.service';
import { StateService } from './state.service';

@Injectable()
export class SymptomsService {

  private TreatmentTypes: BehaviorSubject<TreatmentTypesItem[]> = new BehaviorSubject<TreatmentTypesItem[]>(null);
  private Symptoms: BehaviorSubject<ParsedSymptom[]> = new BehaviorSubject<ParsedSymptom[]>(null);
  private SourceInfo: BehaviorSubject<{[icdCode: string]: SourceInfoSymptom[]}> = new BehaviorSubject<{[icdCode: string]: SourceInfoSymptom[]}>(null);
  private SymptomCategories: SymptomCategory[] = [];
  private BodyParts = [];
  private SymptomDescriptions: { [key: string]: SymptomDescription };

  private newTriages: Triage[] = [];
  private removedTriages: Triage[] = [];
  private symptomSourceExcluded = symptomSourceExcluded;

  constructor(
    private dateTimeUtils: DateTime,
    private servicedataService: ServicedataService,
    private errorHandler: SentryErrorHandler,
    private stateService: StateService,
    private treatmentsService: TreatmentsService
  ) { }

  public getParsedSymptoms(): Observable<ParsedSymptom[]> { return this.Symptoms.asObservable(); }
  public getTreatmentTypes(): Observable<TreatmentTypesItem[]> { return this.TreatmentTypes.asObservable(); }
  public setSourceInfo(state): void { this.SourceInfo.next(state); }

  parseBodyParts(data) {
    let codes = [];
    data.forEach(bodyPart => {
      codes = codes.concat(bodyPart.bodyPartsCodes);
      if (bodyPart.subParts) {
        codes = codes.concat(this.parseBodyParts(bodyPart.subParts));
      }
    });
    return codes;
  }

  private parseCategories(categories: SymptomGroupCategory[], groupName: string, symptomCategories: SymptomCategory[]): [ParsedSymptom[], SymptomCategory[]] {
    const symptoms: ParsedSymptom[] = [];
    for (const category of categories) {
      const categoryObject = {
        categoryID: [category.categoryID],
        categoryName: category.name,
        groupName: groupName,
        presenting: [],
        nonPresenting: [],
        expandedPresenting: true,
        expandedNonPresenting: true
      };
      const existingCategory = symptomCategories.find(iterableExistingCategory => iterableExistingCategory.categoryName === category.name);
      if (existingCategory) {
        existingCategory.categoryID.push(category.categoryID);
      } else {
        symptomCategories.push(categoryObject);
      }
      if (category['symptoms']) {
        for (const symptom of category['symptoms']) {
          symptom.categoryID = category['categoryID'];
          if (category['categoryID'].indexOf('PAIN_') >= 0 || category['categoryID'].indexOf('SW_') >= 0) {
            symptom.location = [category.name];
          } else {
            symptom.location = [];
          }
          symptom.blacklisted = blacklistedSymptoms.includes(symptom.symptomID) || blacklistedGroups.includes(groupName);
          symptom.groupName = groupName;
          symptoms.push(symptom);
        }
      }
    }
    return [symptoms, symptomCategories];
  }

  private parseSymptomGroups(symptomGroups: SymptomGroup[]): [ParsedSymptom[], SymptomCategory[], { [key: string]: SymptomDescription }] {
    let result: ParsedSymptom[] = [];
    let symptomCategories: SymptomCategory[] = [];
    let symptomDescriptions: { [key: string]: SymptomDescription } = {};
    symptomGroups.forEach(group => {
      symptomDescriptions = Object.assign(symptomDescriptions, group.dataStoreRefTypes);
      const categories = (group.categories || flatten(group.sections.map(item => item.categories)));
      const parsed = this.parseCategories(categories, group.name, symptomCategories);
      [result, symptomCategories] = [result.concat(parsed[0]), parsed[1]];
    });
    result.sort((prevName, nextName) => {
      const prevSymptom = prevName.name.toLowerCase();
      const nextSymptom = nextName.name.toLowerCase();
      return prevSymptom < nextSymptom ? -1 : prevSymptom > nextSymptom ? 1 : 0;
    });
    return [result, symptomCategories, symptomDescriptions];
  }

  getSymptomCategories(): SymptomCategory[] {
    return this.SymptomCategories;
  }

  getSymptomDescriptions(key: string): SymptomDescriptionValue[] {
    return this.SymptomDescriptions[key].values;
  }

  getBodyParts() {
    return this.BodyParts;
  }

  addSymptom(patient: DataModel.Data, symptom: any, presenting: boolean, section?: string, description?: string[], duration?: [string, string]): DataModel.Data {
    let newSymptom: NewSymptom = {symptomID: '', name: '', values: symptom, historyItem: null};
    let category = '';
    let commonName;
    switch (section) {
      case 'Medications':
        newSymptom.symptomID = HistoryTypesEnums.MEDICATION;
        newSymptom.name = 'Medications ' + symptom;
        commonName = drugNameMap[symptom.toUpperCase()] || symptom.toUpperCase();
        this.treatmentsService.dispatch(new UpdateDrugConflictsInformationEvent({knownDrugConflicts: [{conflict: symptom, potentialDrugs: [commonName]}]} as DrugConflictInformation));
        category = 'Core Symptoms';
        break;

      case 'Drug Allergies':
        newSymptom.symptomID = HistoryTypesEnums['MEDICATION-ALLERGIES'];
        newSymptom.name = 'Allergies To Medication ' + symptom;
        commonName = drugNameMap[symptom.toUpperCase()] || symptom.toUpperCase();
        this.treatmentsService.dispatch(new UpdateDrugConflictsInformationEvent({knownDrugAllergies: [{conflict: symptom, potentialDrugs: [commonName]}]} as DrugConflictInformation));
        category = 'Core Symptoms';
        break;

      case 'Non Drug Allergies':
        newSymptom.symptomID = HistoryTypesEnums.ALLERGIES;
        newSymptom.name = 'History of allergic reaction caused by ' + symptom.listValue.toLowerCase();
        newSymptom.values = symptom.listValue;
        category = 'Personal History';
        break;

      default:
        newSymptom = this.searchParsedSymptom(symptom.symptomID) as any;
        newSymptom.historyItem = symptom.historyItem;
        category = 'Core Symptoms';
        break;
    }
    if (description && description.length) {
      newSymptom.responseDetails = [];
      description.forEach(item => {
        const responseDetail = {
          description: item,
          duration: duration ? duration.join(' ') : '1 weeks'
        };
        newSymptom.responseDetails.push(responseDetail);
      });
    }

    this.addTriage(patient, symptom, presenting, newSymptom, category, duration || ['1', 'weeks']);
    return patient;
  }

  addTriage(patient, symptom: any, presenting: boolean, personalSymptom: NewSymptom, category?: string, duration?: [string, string]) {
    let symp = patient.triage.filter(item => item.symptomId === personalSymptom.symptomID);
    const personalSymptomBack = clone(personalSymptom);
    if (symptomSectionsList.includes(personalSymptom.symptomID) && symp) {
      symp = symp.find(item => !item.response || item.values[0][0] === personalSymptom.values);
    } else symp = symp[0];
    if (symp) {
      if (!symp.time || !symp.time.length) symp.time = this.dateTimeUtils.currentDate(true);
      if (symptomSectionsList.includes(personalSymptom.symptomID) && !symp.response) {
        symp.values = [[personalSymptom.values, null, null]];
        symp.symptomSource = 'Doctor Added';
        symp.symptomName = personalSymptom.name;
      }
      symp.response = presenting;
      symp.responseDetails = personalSymptom.responseDetails;
    } else {
      const symptomCategory = this.getHistoryItemCategory(personalSymptom);
      if (personalSymptom.values && !Array.isArray(personalSymptom.values)) {
        personalSymptom.values = [[personalSymptom.values, null, null]];
      } else if (personalSymptom.responseDetails && personalSymptom.responseDetails.length) personalSymptom.values = [];
      if (personalSymptom.responseDetails)
        personalSymptom.responseDetails.forEach(item => {
          const validDuration = duration[0].split(/[\s-]/).reverse()[0];
          personalSymptom.values.push([item.description, Number(validDuration), duration[1]]);
          if (Number(validDuration) > 3) {
            item.duration = 'Longer';
          }
        });
      const nullResponseDetailsValue = [{
        description: null,
        duration: null
      }];
      const newTriage: Triage = {
        location: personalSymptom.location,
        measurement: null,
        response: String(presenting),
        symptomId: personalSymptom.symptomID,
        symptomName: personalSymptom.name,
        symptomSource: 'MA Added',
        time: this.dateTimeUtils.currentDate(),
        values: personalSymptom.values ? personalSymptom.values : [[null, null, null]],
        symptomCategory: symptomCategory ? symptomCategory : '',
        icdGroup: '',
        symptomCategoryId: '',
        symptomGroupId: '',
        categoryName: category ? category : symptomCategory ? symptomCategory : '',
        symptomGroup: 'General',
        responseDetails: personalSymptom.responseDetails || nullResponseDetailsValue
      };
      console.groupCollapsed(`Added symptom: ${newTriage.symptomName}`);
      console.log(JSON.stringify(newTriage, null, 2));
      console.groupEnd();
      patient.triage.push(newTriage);
      patient['triage_edited'] = true;
      this.newTriages.push(newTriage);
    }
    this.addHistoryItem(patient, personalSymptomBack, this.getHistoryItemCategory(personalSymptom), presenting);
  }

  removeSymptom(patient, symptom: any, source: string, forceDelete?: boolean) {
    let parsedSymptom;
    let parsedTriage;
    switch (source) {
      case 'PD':
        parsedSymptom = symptom;
        if (parsedSymptom.values && parsedSymptom.values[0] && parsedSymptom.values[0].length && parsedSymptom.values[0][0] && parsedSymptom.values[0][0].symptomID) {
          parsedSymptom = symptom.values[0][0];
        }
        parsedTriage = patient.triage.find(item => item.symptomId === parsedSymptom.symptomID);
        switch (parsedSymptom.symptomID) {
          case HistoryTypesEnums.MEDICATION:
          case HistoryTypesEnums['MEDICATION-ALLERGIES']:
          case HistoryTypesEnums.ALLERGIES:
            const conflict = [{conflict: parsedSymptom.historyItem}];
            this.treatmentsService.dispatch(new UpdateDrugConflictsInformationEvent({knownDrugConflicts: conflict, knownDrugAllergies: conflict} as DrugConflictInformation, 'remove'));
            parsedTriage = patient.triage.filter(item => item.values[0]).find(item => item.symptomId === parsedSymptom.symptomID && item.values[0][0] === parsedSymptom.historyItem);
            break;
        }
        break;
      case 'HPI':
        parsedTriage = symptom;
        parsedSymptom = patient.patientHealthHistory.historyItem.find(item => item.symptomID === parsedTriage.symptomId);
        switch (parsedTriage.symptomId) {
          case HistoryTypesEnums.ALLERGIES:
            parsedSymptom = patient.patientHealthHistory.historyItem.find(item => item.symptomID === parsedTriage.symptomId && parsedTriage.values[0][0] === item.historyItem);
            break;
        }
        break;
    }
    if (parsedSymptom && forceDelete) {
      patient.patientHealthHistory.historyItem = patient.patientHealthHistory.historyItem.filter(item => !(
        item.symptomID === parsedSymptom.symptomID
        && item.historyType === parsedSymptom.historyType
      ));
    }
    if (parsedSymptom) {

      patient.patientHealthHistory.historyItem = patient.patientHealthHistory.historyItem.filter(item => !(
        item.symptomID === parsedSymptom.symptomID
        && item.historyItem === parsedSymptom.historyItem
        && item.historyType === parsedSymptom.historyType
        && item.itemType === parsedSymptom.itemType
        && item.familyRelationship === parsedSymptom.familyRelationship
      ));
    }

    if (parsedTriage) {
      const remainingHistory = patient.patientHealthHistory.historyItem.some(item => item.symptomID === parsedTriage.symptomId);
      patient.triage = patient.triage.filter((triageSymptom: Triage) => !(
        triageSymptom.symptomId === parsedTriage.symptomId
        && triageSymptom.symptomName === parsedTriage.symptomName
        && equals(triageSymptom.values, parsedTriage.values)
        && (source !== 'PD' || source === 'PD' && !remainingHistory || parsedSymptom.itemType !== 'family')
      ));
      if (!this.newTriages.find(item => item.symptomId === parsedTriage.symptomID)) {
        this.removedTriages.push(parsedTriage);
      } else {
        this.newTriages = this.newTriages.filter(item => item.symptomId !== parsedTriage.symptomID);
      }
      patient['triage_edited'] = true;
    }

    return patient;
  }

  get addedSymptoms(): FormattedTriageLab[] {
    return this.newTriages.map(item => {
      return {
        Time: item.time ? item.time : this.dateTimeUtils.currentDate(),
        SymptomSource: 'MA Added',
        Values: item.values,
        Response: String(item.response).charAt(0).toUpperCase() + String(item.response).substring(1),
        SymptomID: item.symptomId,
        SymptomName: item.symptomName,
        Measurement: item.measurement,
        Location: item.location,
        responseDetails: item.responseDetails
      };
    });
  }

  get removedSymptoms(): string[] {
    return this.removedTriages.map(item => item.symptomId);
  }

  public wipeUpdatedSymptomsData(): void {
    this.removedTriages = [];
    this.newTriages = [];
  }

  getHistoryItemCategory(symptom): string {
    const parsedSymptom = this.searchParsedSymptom(symptom);
    if (parsedSymptom) {
      const categoryID = parsedSymptom.categoryID;
      const symptomCategory = this.SymptomCategories.find(category => category.categoryID.includes(categoryID));
      const isHistoryItem = historyCategories.includes(symptomCategory.categoryName);
      if (isHistoryItem) {
        return symptomCategory.categoryName;
      }
    }
    return null;
  }

  public getSymptomCategory(categoryId: string): SymptomCategory {
    return this.SymptomCategories.find(category => category.categoryID.includes(categoryId));
  }

  public isHealthHistoryItem(symptomID: string, symptomCategoryName: string | boolean): boolean {
    if (symptomCategoryName) return true;
    return [HistoryTypesEnums.ALLERGIES, HistoryTypesEnums.MEDICATION, HistoryTypesEnums['MEDICATION-ALLERGIES'], HistoryTypesEnums.IMMUNIZATIONS].includes(<HistoryTypesEnums>symptomID);
  }

  addHistoryItem(patient: DataModel.Data, personalSymptom, symptomCategoryName, presenting: boolean) {
    if (!(this.isHealthHistoryItem(personalSymptom.symptomID, symptomCategoryName))) return;
    let historyItem = '';
    let historyType = '';
    if (personalSymptom.values && typeof personalSymptom.values === 'string') {
      historyItem = personalSymptom.values;
      historyType = symptomCategoryName ? 'Allergies' : personalSymptom.name.indexOf('Medications') > -1 ? 'Medications' : 'Medication Allergies';
    } else {
      const namePartsArray = personalSymptom.name.split('History of ');
      historyItem = namePartsArray[1] ? '' : namePartsArray[0];
      historyType = namePartsArray[1] ? namePartsArray[1] : '';
      if (personalSymptom.categoryID === HistoryTypesEnums.SURGICAL) historyType = 'Surgical History';
      if (personalSymptom.historyItem) historyItem = personalSymptom.historyItem;
      if (personalSymptom.symptomID === HistoryTypesEnums.IMMUNIZATIONS) {
        switch (historyItem) {
          case 'Tetanus':
            historyType = 'Last Tetanus Shot';
            break;
          case 'Seasonal Flu Vaccine':
            historyType = 'Last Flu Shot';
            break;
          case  'Human Papillomavirus Infection (HPV)':
            historyType = 'HPV Immunization';
            break;
        }
      }
      if (historyType === '') {
        historyType = historyItem;
        historyItem = '';
      }
    }
    const newItem: HistoryItem = {
      dateAdded: this.dateTimeUtils.currentDate(true),
      dateDetected: this.dateTimeUtils.currentDate(true),
      externalID: '',
      familyRelationship: symptomCategoryName === 'Family History' ? 'OTHER' : '',
      symptomID: personalSymptom.symptomID,
      historyValue: presenting,
      historyItem: historyItem,
      historyType: historyType,
      itemType: symptomCategoryName === 'Family History' ? 'family' : 'patient',
      customFields: []
    };
    patient.patientHealthHistory.historyItem.push(newItem);
  }

  loadGroupedSymptom(part, symptom) {
    let isOther = true;
    const value = symptom.listValue;
    if (!value) return;
    groupedSymptomsTypes.forEach(type => {
      if (symptom.name.toLowerCase().includes(SymptomTypesEnum[type])) {
        let matches;
        const checkForMatches = (symptomName, enumItem) => (type === 'RASH_CHANGE' || type === 'RASH_SIZE')
          ? symptomName.toLowerCase() === enumItem
          : symptomName.toLowerCase().includes(enumItem);

        matches = groupedSymptomsTypes.filter(item => checkForMatches(symptom.name, SymptomTypesEnum[item]));
        if (matches.length > 1 && type !== matches[0]) return;
        isOther = false;
        if (type !== 'BASIC') part.groupedSymptom.hasDesc = true;
        if (part.groupedSymptom[type.toLowerCase()]) {
          if (!part.groupedSymptom[type.toLowerCase()].includes(value)) part.groupedSymptom[type.toLowerCase()].push(value);
        } else {
          part.groupedSymptom[type.toLowerCase()] = [value];
        }
        return;
      }
    });
    if (isOther) {
      part.groupedSymptom.hasDesc = true;
      if (value.toLowerCase().includes(SymptomTypesEnum.MOVEMENT)) {
        part.groupedSymptom.movement = true;
      } else if (part['other']) {
        if (!part['other'].includes(value)) part['other'].push(value);
      } else {
        part['other'] = [value];
      }
    }
  }

  getGroupedSymptomType(symptom): string {
    const changeRashSymptomsIds = ['SYMPT0000781', 'SYMPT0000779'];
    return symptom.symptomGroup === SymptomTypesEnum.PAIN_SWELLING_GROUP
      ? 'Pain/Swelling'
      : (symptom.name.toLowerCase().includes(SymptomTypesEnum.COUGH) && !symptom.name.toLowerCase().includes('asthma'))
        ? 'Cough'
        : changeRashSymptomsIds.includes(symptom.symptomId)
          ? 'ChangeRash'
          : symptom.name.toLowerCase().includes(SymptomTypesEnum.RASH)
            ? 'Rash'
            :  null;
  }

  getTreatmentTypesData() {
    if (!this.TreatmentTypes.getValue()) {
      this.servicedataService.getTreatmentTypesData().subscribe((treatmentTypes: {treatmentTypes: TreatmentTypesItem[]}) => {
        if (treatmentTypes) {
          if (!treatmentTypes.treatmentTypes.some(type => type.name === 'Return to Work/School Status')) {
            treatmentTypes.treatmentTypes.push(JSON.parse(returnToWorkPayloadJSON));
          }
          this.TreatmentTypes.next(treatmentTypes.treatmentTypes);
        }
      });
    }
  }

  buildSourceInfoData(icdGroups: DiagnosisAccordionGroup[]): void {
    let source = this.SourceInfo.getValue();
    this.servicedataService.getSourceInfoData(flatten(icdGroups.map(group => group.icd10.filter(item => !source || !source[item])))).subscribe(sourceInfo => {
      sourceInfo.forEach(illnessSource => {
        if (source) source[illnessSource.icd10Code] = illnessSource.symptoms;
        else source = {[illnessSource.icd10Code]: illnessSource.symptoms};
        this.SourceInfo.next(source);
      });
    });
  }

  public getSourceInfoData$(icdCode: string): Observable<SourceInfoSymptom[]> {
    return this.SourceInfo.asObservable().pipe(filter(data => !!data), map(data => data[icdCode]));
  }

  getBodyPartsData() {
    if (!this.BodyParts.length) {
      this.servicedataService.getBodyPartsData().subscribe((response: any) => {
        if (response) {
          const body = response;
          const array = body.subParts || [];
          body.subParts = [];
          array.push(response);
          array.forEach(bodyPart => {
            if (bodyPart.subParts &&  bodyPart.bodyPartsCodes) {
              bodyPart.bodyPartsCodes = bodyPart.bodyPartsCodes.concat(this.parseBodyParts(bodyPart.subParts));
            }
          });
          this.BodyParts = array;
        }
      });
    }
  }

  getSymptoms(): void {
    if (!this.Symptoms.getValue() && this.stateService.app.getParsedSymptomsState() !== 'inProgress') {
      this.stateService.app.setParsedSymptomsState('inProgress');
      this.servicedataService.getSymptoms().subscribe(([response1, response2]) => {
        this.stateService.app.setParsedSymptomsState('success');
        const parsedSymptoms = this.parseSymptomGroups(response1.symptomGroups);
        this.SymptomCategories = parsedSymptoms[1];
        this.SymptomDescriptions = parsedSymptoms[2];
        const symptoms = parsedSymptoms[0].map(item => {
          if (([HistoryTypesEnums.CANCER, HistoryTypesEnums['CANCER-FAMILY']] as string[]).includes(item.symptomID)) {
            const snomedCodes = response2.cancerList.map(cancerItem => {
              return {
                code: null,
                listValue: cancerItem.name,
                listValueCode: null,
                name: cancerItem.name
              };
            });
            item.snomedCodes = item.snomedCodes.concat(snomedCodes);
            return item;
          } else return item;
        });
        this.Symptoms.next(symptoms);
      });
    }
  }

  searchParsedSymptom(symptom: any, displayDrApp?: boolean, exclude?: any[]): ParsedSymptom {
    const symptomID = symptom.symptomID || symptom.symptomId || symptom;
    const symptomName = symptom.symptomName || symptom.name;
    const parsedSymptom = this.Symptoms.getValue().find(item => item.symptomID === symptomID);
    if (!parsedSymptom) {
      this.sendSymptomErrorReport('Symptom ID was not found in symptomgroups', symptomName, symptomID);
      return;
    }
    if (displayDrApp && parsedSymptom.displayDrApp === false) return;
    if (exclude &&
      (exclude.includes(parsedSymptom.symptomID || parsedSymptom.categoryID) ||
        exclude.find(item => {
          const itemID = item.symptomId || item.symptomID;
          return itemID === parsedSymptom.symptomID || (typeof item === 'string' && item.toLowerCase().indexOf(parsedSymptom.name.toLowerCase()) > -1);
        }))) {
      return;
    }
    if (parsedSymptom.snomedCodes.some(item => !item.name)) {
      parsedSymptom.snomedCodes = parsedSymptom.snomedCodes.filter(item => item.name);
      this.sendSymptomErrorReport('Snomed code with name is NULL', parsedSymptom.name, parsedSymptom.symptomID);
    }
    return parsedSymptom;
  }

  private sendSymptomErrorReport(message: string, symptomName, symptomID) {
    const error = new SymptomError(message, {
      symptomID: symptomID,
      symptomName: symptomName
    });
    this.errorHandler.handleError(error);
  }

  getSymptomDescription(parsedSymptom: ParsedSymptom): SymptomDescription {
    const multipleValue = parsedSymptom.multipleValues;
    const description = this.SymptomDescriptions[multipleValue];
    if (!description.values.length) {
      // todo: adjust snomedCodes - descriptionValue relation
      // @ts-ignore
      description.values = parsedSymptom.snomedCodes;
    }
    return description;
  }

  getGeneralSymptomsCategories(GeneralSymptomsGategories) {
    clone(this.SymptomCategories)
      .filter(category => !historyCategories.includes(category.categoryName) || category.groupName !== 'Measurements')
      .forEach(item => {
        if (physicalGroups.includes(item.groupName.toLowerCase())) return;
        const existing = GeneralSymptomsGategories[0].data.find(category => category.categoryName === item.categoryName);
        if (existing) {
          existing.categoryID = union(existing.categoryID, item.categoryID);
        } else {
          GeneralSymptomsGategories[0].data.push(item);
        }
      });
    return GeneralSymptomsGategories;
  }

  getSymptomsCategoriesByFilter(symptomCategories, triage, excludedSymptoms = [], symptomsFilter = 'all') {
    const isMain: boolean = symptomsFilter === 'chief complaint' || symptomsFilter === 'all';
    const isChronic: boolean = symptomsFilter === 'chronic' || symptomsFilter === 'all';

    const getSymptomCategory = (id) => {
      const parsedSymptom = this.searchParsedSymptom(id, true, excludedSymptoms);
      if (!parsedSymptom) return;
      const categoryID = parsedSymptom.categoryID;
      let symptomCategory;
      symptomCategories.forEach(item => {
        const foundCategory = item.data.find(category => category.categoryID.includes(categoryID));
        if (foundCategory) symptomCategory = foundCategory;
      });
      return symptomCategory;
    };

    symptomCategories.forEach(sympCat => {
      sympCat.data.forEach(category => {
        category.presenting = [];
        category.nonPresenting = [];
      });
    });
    const existingNames = [];
    triage = triage
      .filter(symptom => !this.symptomSourceExcluded(symptom.symptomSource));
    triage.forEach(symptom => {
      const sympIsChronic = symptom.symptomSource
        ? symptom.symptomSource.includes('Screening')
        : false;

      if (((sympIsChronic && isChronic)
        || (!sympIsChronic && isMain)) && symptom.symptomId !== HistoryTypesEnums.BMI) {
        if (existingNames.includes(symptom.symptomName)) symptom.hidden = true;

        existingNames.push(symptom.symptomName);
        const presenting = isSymptomPresenting(symptom);
        const symptomCategory = getSymptomCategory(symptom.symptomId);
        const parsedSymptom = this.searchParsedSymptom(symptom, false, excludedSymptoms);
        const isBasic = parsedSymptom
          ? parsedSymptom.name.toLowerCase().includes(SymptomTypesEnum.BASIC)
          : symptom.symptomName.toLowerCase().includes(SymptomTypesEnum.BASIC);

        if (!symptomCategory || !parsedSymptom) return;
        symptom.name = parsedSymptom.name;
        symptom.categoryID = parsedSymptom.categoryID;

        const changeRashSymptomsIds = ['SYMPT0000781', 'SYMPT0000779'];
        const groupedSymptomType = this.getGroupedSymptomType(symptom);

        if (groupedSymptomType && presenting) {
          const symptomIdCheck = (item) => groupedSymptomType === 'ChangeRash' ? changeRashSymptomsIds.includes(item.symptomID) : !item.symptomId;
          if (!symptomCategory['presenting'].find(item => item.categoryID === parsedSymptom.categoryID && symptomIdCheck(item))) {
            symptomCategory['presenting']
              .push({
                categoryID: parsedSymptom.categoryID,
                groupedSymptom: clone(defaultGroupedSymptom),
                symptomID: parsedSymptom.symptomID,
                name: parsedSymptom.name
              });
          }
          const groupedSymptomCategory = symptomCategory['presenting']
            .find(item => item.categoryID === parsedSymptom.categoryID && symptomIdCheck(item));

          groupedSymptomCategory.groupedSymptom.type = groupedSymptomType;
          const snomedCode = parsedSymptom.snomedCodes
            .find(code => code && (code.name.toLowerCase() === symptom.symptomName.toLowerCase()));

          if (symptom.values[0] && symptom.values[0][0] && isNaN(Number(symptom.values[0][0]))) {
            symptom.listValue = symptom.values[0][0];
          } else if (snomedCode && snomedCode.listValue && isNaN(Number(snomedCode.listValue))) {
            symptom.listValue = snomedCode.listValue;
          } else if (isBasic) symptom.listValue = symptom.symptomName;

          this.loadGroupedSymptom(groupedSymptomCategory, symptom);
          return;
        } else if (groupedSymptomType) {
          symptom.groupedSymptom = clone(defaultGroupedSymptom);
          symptom.groupedSymptom.type = groupedSymptomType;
        }
        if (isBasic) {
          symptomCategory[presenting ? 'presenting' : 'nonPresenting'].unshift(symptom);
        } else {
          symptomCategory[presenting ? 'presenting' : 'nonPresenting'].push(symptom);
        }
      }
    });
    symptomCategories.forEach(category => {
      category.data.forEach(dataItem => {
        dataItem.nonPresenting.forEach(symptom => {
          if (symptom.symptomGroup !== SymptomTypesEnum.PAIN_SWELLING_GROUP && !symptom.name.toLowerCase().includes(SymptomTypesEnum.COUGH)) return;
          const isBasic = symptom.name.toLowerCase().includes(SymptomTypesEnum.BASIC);
          if (isBasic)  {
            dataItem.presenting.concat(dataItem.nonPresenting)
              .filter(item => item.categoryID === symptom.categoryID && item.groupedSymptom && item.groupedSymptom.type === 'Pain/Swelling')
              .forEach(item => {
                if (item.name) {
                  if (!item.name.toLowerCase().includes(SymptomTypesEnum.BASIC))
                    item.hidden = true;
                  return;
                }
                item.hidden = true;
              });
          }
        });
      });
    });
    return {
      symptomCategories: symptomCategories,
      triage: triage
    };
  }

  public pharmacistSymptomsList(triage: Triage[]): Array<Triage & { isAdmit: boolean; name: string }> {

    const symptomCategoriesPharmacist = [
      {
        name: 'General',
        data: [],
      }, {
        name: 'Physical',
        data: [],
      }
    ];
    this.getGeneralSymptomsCategories(symptomCategoriesPharmacist);

    this.getBodyParts()
      .forEach(item => {
        const symptomCategory = this.SymptomCategories.find(symptomCategoryItem =>
          symptomCategoryItem.categoryID.some(id => item.bodyPartsCodes.includes(id))
        );
        const category = {
          categoryName: item.name,
          categoryID: item.bodyPartsCodes,
          expandedNonPresenting: true,
          expandedPresenting: true,
          nonPresenting: [],
          presenting: [],
          groupName: symptomCategory.groupName
        };
        symptomCategoriesPharmacist[1].data.push(category);
      });
    symptomCategoriesPharmacist.forEach(sympCat => {
      sympCat.data.forEach(category => {
        category.presenting = [];
        category.nonPresenting = [];
      });
    });

    const symptoms = [];
    this.getSymptomsCategoriesByFilter(clone(symptomCategoriesPharmacist), clone(triage)).symptomCategories.forEach(category => {
      category.data.forEach((symptomsList) => {
        ['nonPresenting', 'presenting'].forEach((field) => {
          symptomsList[field]
            .filter((symptom) => !symptom.hidden)
            .forEach((symptom) => {
              symptoms.push({
                ...symptom,
                isAdmit: field === 'presenting'
              });
            });
        });
      });
    });
    return symptoms;
  }

  public get healthHistorySections(): PatientDataSection {
    // @ts-ignore
    const sections: PatientDataSection = {};
    Object.keys(PatientDataSectionNameEnum).forEach(key => {
      Object.assign(sections, {[key]: {
          name: PatientDataSectionNameEnum[key],
          data: [],
          list: [],
          showPersonalHistory: key === 'personalHistory'
        }});
    });

    const parsedSymptoms = this.Symptoms.getValue();

    sections.personalHistory.list = parsedSymptoms.filter(item => item['categoryID'] === HistoryTypesEnums.PERSONAL && item.symptomID !== HistoryTypesEnums['PREVIOUS-HISTORY']);
    sections.familyHistory.list = parsedSymptoms.filter(item => item['categoryID'] === HistoryTypesEnums.FAMILY);
    sections.patientSurgicalHistory.list = parsedSymptoms.filter(item => item['categoryID'] === HistoryTypesEnums.SURGICAL);
    // TIP: May be in future we will
    // need it from SymptomGroups.
    sections.immunization.list = [{
      name: 'Had Flu Shot in Last 6 Months',
      symptomID: HistoryTypesEnums.IMMUNIZATIONS,
      blacklisted: false,
      criticality: 1,
      snomedCodes: [],
      displayDrApp: true,
      displayOrder: 74,
      genderGroup: null,
      location: [],
      categoryID: 'SYMPTCG01',
      historyType: 'Annual Flu Shot',
      historyItem: 'Seasonal Flu Vaccine',
    }, {
      name: 'Had Tetanus Shot in Last 10 Years',
      symptomID: HistoryTypesEnums.IMMUNIZATIONS,
      blacklisted: false,
      criticality: 1,
      snomedCodes: [],
      displayDrApp: true,
      displayOrder: 74,
      genderGroup: null,
      location: [],
      categoryID: 'SYMPTCG01',
      historyType: 'Last Tetanus Shot',
      historyItem: 'Tetanus'
    }, {
      name: 'Patient Has HPV Immunization',
      symptomID: HistoryTypesEnums.IMMUNIZATIONS,
      blacklisted: false,
      criticality: 1,
      snomedCodes: [],
      displayDrApp: true,
      displayOrder: 74,
      genderGroup: null,
      location: [],
      categoryID: 'SYMPTCG01',
      historyType: 'HPV Immunization',
      historyItem: 'Human Papillomavirus Infection (HPV)'
    }];
    const nonDrugAllergies = this.getSymptomDescriptions('Allergy').map(item => (
        {
          name: item.name,
          symptomID: HistoryTypesEnums.ALLERGIES,
          listValue: item.name,
          listValueCode: item.code
        }
      )
    );
    // @ts-ignore
    sections.nonDrugAllergies.list = nonDrugAllergies || [];

    return sections;
  }

}
