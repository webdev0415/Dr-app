import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KludgesService } from 'services';
import { UserService } from 'user/user.service';
import { PrescribingItem, Prescription } from './prescription/prescription.component';
import { DME, NewTreatment, NewTreatmentGroup } from './treatments.new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewTreatmentsService {

  treatmentGroups$ = new BehaviorSubject<NewTreatmentGroup[]>([]);
  rxPrescribingItems: PrescribingItem[] = [];
  otcPrescribingItems: PrescribingItem[] = [];

  rxFavoritePrescriptions: Prescription[] = [];
  otcFavoritePrescriptions: Prescription[] = [];
  selectedDmes: DME[] = [];
  currentDme: DME = {
    options: {
      MEDID: 0,
      e_prescribe: false,
      MED_MEDID_DESC: ''
    },
    MED_NAME: '',
    MED_NAME_ID: 0
  };
  selectControl = new FormControl();

  constructor(private kludgesService: KludgesService, private userService: UserService) {
    this.currentDme.MED_NAME = undefined;
   }

  refreshTreatmentGroups(newGroups: NewTreatmentGroup[]) {
    this.rxPrescribingItems = [];
    this.otcPrescribingItems = [];

    this.kludgesService.fetchProtocols().subscribe(protocols => {
      this.rxFavoritePrescriptions = protocols.filter(protocol => protocol.type === 'RX');
      this.otcFavoritePrescriptions = protocols.filter(protocol => protocol.type === 'OTC');
      this.treatmentGroups$.next(newGroups);
    });
  }

  public get dmes() {
    console.log('preparingTreatmentsForSaving, selected dmes: ', this.selectedDmes);
    const DMEs = [ ...this.selectedDmes ];
    const lIndex = DMEs.length - 1;
    if (this.currentDme && this.currentDme.MED_NAME && this.currentDme.quantity && this.selectControl.value.length) {
      if (this.currentDme.MED_NAME !== this.selectedDmes[lIndex].MED_NAME || this.currentDme.quantity !== this.selectedDmes[lIndex].quantity
        || this.currentDme.instructions !== this.selectedDmes[lIndex].instructions || this.currentDme.icds[0] !== this.selectedDmes[lIndex].icds[0]) {
          DMEs.push({ ...this.currentDme });
        }
    }

    console.log('preparingTreatmentsForSaving', DMEs);
    return DMEs;
  }

  public get prepareTreatmentsForSaving() {
    return {
      rxTreatments: this.selectedPrescribingItems.map(item => ({
          treatment_type: item.type,
          name: item.prescription.drugName,
          dosage: item.prescription.form || '',
          long_name: item.groupName,
          group_name: item.groupName,
          rank: 1,
          priority: 1,
          name_details: item.prescription.drugName,
          prescriptions: { ...item.prescription, direction_object: []}
        })),
      DMEs: this.dmes
    };
  }

  public get selectedPrescribingItems() {
    return this.rxPrescribingItems
      .concat(this.otcPrescribingItems).filter(item => item.isSelected);
  }

  public get selectedTreatments() {
    return this.selectedPrescribingItems.map(item => item.drugNames[0].str).concat(this.dmes.map(item => item.MED_NAME));
  }

  public getDrugsByName(query: string): Observable<NewTreatment[]> {
    // Changed both to PIC the false case should be default - Return it back once resolved
    const business = this.userService.isPICModeBusiness ? 'PIC' : 'PIC';

    return this.kludgesService.getDrugsByName(query, business).pipe(
      map(searchResults => searchResults['hints'].map(result => {
        const treatment: NewTreatment = {
          Adjustments: result.adjustments,
          Ingredient: result.tty !== 'BrandName' ? { str: result.name, rxcui: result.rxcui, isBranded: false } : { str: '', rxcui: 0, isBranded: false },
          BrandNames: result.tty === 'BrandName' ? [{ str: result.name, rxcui: result.rxcui, isBranded: true }] : [],
          PICMedInfo: result.PIC_med_info,
          Dosages: [],
          relatedToRxcui: result.related_to_rxcui
        };
        return treatment;
      }))
    );
  }

  //https://devservices.advinow.net/search_drug/search_dme?distance=30&limit=20&query=cane

  public getDmeByQuery(query: string): Observable<DME[]> {
    return this.kludgesService.getDmeByQuery(query).pipe(
      map(searchResults => searchResults['DME'])
    );
  }

  public quickDrugSearch(query: string): Observable<string[]> {
    // Changed both to PIC the false case should be default - Return it back once resolved
    const business = this.userService.isPICModeBusiness ? 'PIC' : 'PIC';

    return this.kludgesService.quickDrugSearch(query, business);
  }
}
