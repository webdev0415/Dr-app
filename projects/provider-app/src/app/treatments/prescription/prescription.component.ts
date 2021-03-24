import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input
} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, of, Subject} from 'rxjs';
import {debounceTime, filter, map, switchMap} from 'rxjs/operators';
import {TreatmentsService} from 'treatments/treatments.service';
import {MedInfo, NewTreatment, TreatmentName} from 'treatments/treatments.new.interface';
import {NewTreatmentsService} from 'treatments/treatments.new.service';
import {MdbAutoCompleterComponent} from 'ng-uikit-pro-standard';
import {NewTreatmentType} from 'treatments/treatments.new.type';

export interface AutoCompleteOption {
  label: string;
  treatment: NewTreatment;
}

export interface DmeAutoCompleteOption {
  label: string;
  treatment: NewTreatment;
}

export interface DosHelperItem {
  amount?: number;
  unit?: string;
  freq?: string;
  durationAmount?: number;
  durationUnit?: string;
}

export interface DosageHelper {
  rows: DosHelperItem[];
  sig?: string;
}

// Not completed interface
export interface Prescription {
  drugName: string;
  rxcui: number;
  strength?: string;
  form?: string;
  sig?: string;
  route?: string;
  daw?: boolean; // Separate the generic/branded, field name will be determined
  quantity?: number;
  refills?: number;
  EMR_med_name?: string | null;
  EMR_med_desc?: string | null;
  dosageHelper?: DosageHelper;
}

export interface PrescribingItem {
  drugNames: TreatmentName[];
  groupName: string;
  PICMedInfo: MedInfo[];
  isSelected: boolean;
  type: NewTreatmentType;

  // From here, these are prescribable items
  prescription: Prescription;
}

export interface MicaTreatmentGroup {
  groupName: string;
  drugNames: {
    name: string;
    isSelected: boolean;
  }[];
}

@Component({
  selector: 'pa-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriptionComponent implements OnInit, AfterViewInit {
  @Input() isRx: boolean;

  searchText = new Subject();
  searchResults = new BehaviorSubject<AutoCompleteOption[]>([]);

  micaTreatmentGroups: MicaTreatmentGroup[] = [];
  rxTreatments: NewTreatment[] = [];
  rxPrescribingItems: PrescribingItem[];
  favoritePrescriptions: Prescription[];

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') autocomplete: MdbAutoCompleterComponent;

  constructor(
    private treatmentService: TreatmentsService,
    private newTreatmentService: NewTreatmentsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.searchText.pipe(
      debounceTime(500),
      switchMap(() => this.drugSearch(this.searchInput.nativeElement.value))
    ).subscribe(searchResult => this.searchResults.next(searchResult));

    this.newTreatmentService.treatmentGroups$.subscribe(treatmentGroups => {
      this.micaTreatmentGroups = [];
      this.rxPrescribingItems = this.isRx ? this.newTreatmentService.rxPrescribingItems : this.newTreatmentService.otcPrescribingItems;
      this.favoritePrescriptions = this.isRx ? this.newTreatmentService.rxFavoritePrescriptions : this.newTreatmentService.otcFavoritePrescriptions;
      this.rxTreatments = treatmentGroups.reduce((treatments: NewTreatment[], treatmentGroup) => {
        const tGroupByType = treatmentGroup.TreatmentTypes.find(treatmentGroupByType => treatmentGroupByType.Types.indexOf(this.isRx ? 'RX' : 'OTC') !== -1);
        const newTreatments = [...treatments];
        if (tGroupByType) {
          tGroupByType.Treatments.forEach(tr => {
            if (!newTreatments.some(t => t.Ingredient.rxcui === tr.Ingredient.rxcui)) {
              newTreatments.push(tr);
            }
          });
        }
        return newTreatments;
      }, []);

      this.rxPrescribingItems.push(...this.buildPrescribingItemsFromRxTreatments());
      this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    fromEvent<UIEvent>(this.searchInput.nativeElement, 'blur').pipe(
      filter((event: FocusEvent) =>
        (this.autocomplete.isOpen() && !this.autocomplete.dropdown.nativeElement.contains(event.relatedTarget))
      )).subscribe(() => {
      this.autocomplete.hide();
      this.changeDetectorRef.detectChanges();
    });
  }

  onSearchOptionSelected(option: { text: AutoCompleteOption; }): void {
    // this.changeDetectorRef.detach();
    console.log('ON OPTION SELECTED -------', option);

    const name = option.text.label;
    const treatment: NewTreatment = JSON.parse(JSON.stringify(option.text.treatment));

    const isOptionExisted = this.rxPrescribingItems.map((pItem, index) => {
      const dName = pItem.drugNames.find(d => d.str.toLowerCase() === name.toLowerCase());
      if (!dName) {
        return false;
      }

      // pItem.isSelected = true;
      // pItem.prescription = { ...pItem.prescription, drugName: dName.str };
      this.rxPrescribingItems[index] = { ...this.rxPrescribingItems[index], isSelected: true,
        prescription: { ...this.rxPrescribingItems[index].prescription, drugName: dName.str } };

      this.micaTreatmentGroups.forEach(group => {
        const drug = group.drugNames.find(d => d.name === pItem.drugNames[0].str);
        if (drug) {
          drug.isSelected = true;
        }
      })

      this.changeDetectorRef.detectChanges();
      return true;
    }).some(Boolean);

    if (!isOptionExisted) {
      const searchedTreatments = this.searchResults.getValue();
      const isIngredient = !!treatment.Ingredient.str;

      if (isIngredient) {
        searchedTreatments.forEach(t => {
          if (treatment.relatedToRxcui) {
            if (t.treatment.BrandNames.length && treatment.relatedToRxcui === t.treatment.BrandNames[0].rxcui) {
              treatment.BrandNames.push({ ...t.treatment.BrandNames[0] });
              treatment.PICMedInfo.push(...t.treatment.PICMedInfo);
            }
          } else if (t.treatment.relatedToRxcui === treatment.Ingredient.rxcui) {
            treatment.BrandNames.push({ ...t.treatment.BrandNames[0] });
            treatment.PICMedInfo.push(...t.treatment.PICMedInfo);
          }
        });
      } else {
        if (treatment.relatedToRxcui) {
          searchedTreatments.forEach(t => {
            if (t.treatment.Ingredient.str) {
              if (treatment.relatedToRxcui === t.treatment.Ingredient.rxcui) {
                treatment.Ingredient = { ...t.treatment.Ingredient };
                treatment.PICMedInfo.push(...t.treatment.PICMedInfo);
              }
            } else if (treatment.relatedToRxcui === t.treatment.relatedToRxcui) {
              treatment.BrandNames.push({ ...t.treatment.BrandNames[0] });
              treatment.PICMedInfo.push(...t.treatment.PICMedInfo);
            }
          });
        } else {
          const relatedIngredientTreatment = searchedTreatments.find(t => t.treatment.relatedToRxcui === treatment.BrandNames[0].rxcui);
          if (relatedIngredientTreatment) {
            treatment.Ingredient = { ...relatedIngredientTreatment.treatment.Ingredient };
            treatment.PICMedInfo.push(...relatedIngredientTreatment.treatment.PICMedInfo);
          }
        }

        const duplicatIndex = this.rxPrescribingItems.findIndex(pItem => pItem.drugNames[0].str.toLowerCase() === treatment.Ingredient.str.toLowerCase());
        if (duplicatIndex !== -1) {
          const duplicateItem: PrescribingItem = JSON.parse(JSON.stringify(this.rxPrescribingItems[duplicatIndex]));
          duplicateItem.drugNames.push(...treatment.BrandNames);
          duplicateItem.drugNames = duplicateItem.drugNames.filter((d, index) => duplicateItem.drugNames.findIndex(dn => dn.str === d.str) === index);
          duplicateItem.PICMedInfo.push(...treatment.PICMedInfo);
          duplicateItem.prescription.drugName = treatment.BrandNames[0].str;
          this.rxPrescribingItems[duplicatIndex] = duplicateItem;

          this.changeDetectorRef.detectChanges();

          this.searchText.next('');
          this.searchResults.next([]);
          this.searchInput.nativeElement.blur();

          return;
        }
      }

      this.rxTreatments.push(treatment);
      this.rxPrescribingItems.push(this.buildPrescribingItem(treatment, true, !isIngredient));
      this.changeDetectorRef.detectChanges();
    }

    this.searchText.next('');
    this.searchResults.next([]);
    this.searchInput.nativeElement.blur();
  }

  onTreatmentSelected(drugName: string, event?: MouseEvent) {
    if (event) event.preventDefault();


    // Change is selected in the left side bar
    this.micaTreatmentGroups.forEach(group => {
      const drug = group.drugNames.find(d => d.name === drugName);
      if (drug) {
        drug.isSelected = !drug.isSelected;
      }
    });

    // Change is selected in the prescribing items
    const item = this.rxPrescribingItems.find(pItem => pItem.drugNames.some(d => d.str === drugName));
    if (item) {
      item.isSelected = !item.isSelected;
    }
  }

  private toLargeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // private buildTreatmentAndPrescribingItemWithProductID(productID: string, drugName: string): Observable<{ treatment: NewTreatment; prescribingItem: PrescribingItem; }> {
  //   return this.treatmentService.getDrugProductDetails(productID).pipe(
  //     switchMap(({ rxcui }) => this.treatmentService.filterDrugByBusiness(rxcui)),
  //     map((combinationDrugs: DrugCombination) => {
  //       const { header, genericRxcui } = combinationDrugs;
  //       const { rxcui } = header.ingredients[0];

  //       const treatment: NewTreatment = {
  //         Adjustments: [],
  //         BrandNames: [],
  //         Dosages: [],
  //         Ingredient: {
  //           rxcui,
  //           str: this.toLargeFirstLetter(drugName),
  //           isBranded: false
  //         }
  //       };

  //       const prescribingItem: PrescribingItem = {
  //         drugNames: [{ ...treatment.Ingredient }],
  //         groupName: header.atcgroups[0].micaGroupName,
  //         genericRxcui,
  //         isSelected: true,
  //         type: this.isRx ? 'RX' : 'OTC',

  //         prescription: {
  //           drugName: this.toLargeFirstLetter(drugName),
  //           rxcui,
  //           daw: false
  //         }
  //       };

  //       return { treatment, prescribingItem };
  //     }),
  //     tap(({ prescribingItem }) => this.addPrescribingToGrouped(prescribingItem, true))
  //   );
  // }

  private buildPrescribingItem(treatment: NewTreatment, shouldSelect: boolean = false, shouldBrandSelect: boolean = false): PrescribingItem {
    const {rxcui, str} = treatment.Ingredient;
    const drugNames = [{...treatment.Ingredient, isBranded: false}]
      .concat(treatment.BrandNames.map(name => ({...name, isBranded: true})));

    if (drugNames[0].str === '') {
      drugNames.shift();
      const prescribingItem: PrescribingItem = {
        drugNames,
        groupName: treatment.PICMedInfo[0] ? treatment.PICMedInfo[0].class_etc : 'Unknown Group',
        PICMedInfo: treatment.PICMedInfo,
        isSelected: shouldSelect,
        type: this.isRx ? 'RX' : 'OTC',
        prescription: {
          drugName: drugNames[0].str,
          rxcui,
          daw: false
        }
      };

      this.addPrescribingToGrouped(prescribingItem, shouldSelect);
      return prescribingItem;
    } else {

      const prescribingItem: PrescribingItem = {
        drugNames,
        groupName: treatment.PICMedInfo[0] ? treatment.PICMedInfo[0].class_etc : 'Unknown Group',
        PICMedInfo: treatment.PICMedInfo,
        isSelected: shouldSelect,
        type: this.isRx ? 'RX' : 'OTC',
        prescription: {
          drugName: shouldBrandSelect ? drugNames[1].str : str,
          rxcui,
          daw: false
        }
      };

      this.addPrescribingToGrouped(prescribingItem, shouldSelect);
      return prescribingItem;
    }
  }

  private buildPrescribingItemsFromRxTreatments(): PrescribingItem[] {
    return this.rxTreatments.map(rxTreatment => this.buildPrescribingItem(rxTreatment));
  }

  private addPrescribingToGrouped(prescribingItem: PrescribingItem, shouldSelect: boolean = false) {
    const micaGroup = this.micaTreatmentGroups.find(g => g.groupName === prescribingItem.groupName);
    if (micaGroup) {
      micaGroup.drugNames.push({
        name: prescribingItem.drugNames[0].str,
        isSelected: shouldSelect
      });
    } else {
      this.micaTreatmentGroups.push({
        groupName: prescribingItem.groupName,
        drugNames: [
          {
            name: prescribingItem.drugNames[0].str,
            isSelected: shouldSelect
          }
        ]
      });
    }
  }

  getDrugsByName(value: string): Observable<AutoCompleteOption[]> {
    const filterValue = value.toLowerCase();
    return this.newTreatmentService.getDrugsByName(filterValue).pipe(
      map(
        treatments => treatments.map(treatment => ({
          label: treatment.Ingredient.str || treatment.BrandNames[0].str,
          treatment: treatment
        }))
      )
    );
  }

  drugSearch(value: string): Observable<AutoCompleteOption[]> {
    const filterValue = value.toLowerCase();
    return filterValue.length < 3 ? of([]) : this.getDrugsByName(filterValue);
  }
}
