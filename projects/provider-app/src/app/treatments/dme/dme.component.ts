import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MdbAutoCompleterComponent } from 'ng-uikit-pro-standard';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { DataService } from 'services';
import { DME } from 'treatments/treatments.new.interface';
import { NewTreatmentsService } from 'treatments/treatments.new.service';
import { FormControl } from '@angular/forms';

export interface AutoCompleteOption {
  label: string;
  dme: DME;
}


@Component({
  selector: 'pa-dme',
  templateUrl: './dme.component.html',
  styleUrls: ['./dme.component.scss']
})
export class DmeComponent implements OnInit {

  dmeSearchText = new Subject();
  dmeSearchResults = new BehaviorSubject<AutoCompleteOption[]>([]);
  selectedDme: DME;
  selectControl;
  optionICDs = [];
  dmes:DME[];

  @ViewChild('dmeSearchInput') dmeSearchInput: ElementRef<HTMLInputElement>;
  @ViewChild('dmeAutoComplete') autocomplete: MdbAutoCompleterComponent;

  constructor(private newTreatmentService: NewTreatmentsService,
    private patientDataService: DataService ) {
      this.dmes = this.newTreatmentService.selectedDmes;
      this.selectedDme = this.newTreatmentService.currentDme;
      this.selectControl = this.newTreatmentService.selectControl;
    }

  ngOnInit(): void {
    this.dmeSearchText.pipe(
      debounceTime(500),
      switchMap(() => this.dmeSearch(this.dmeSearchInput.nativeElement.value))
    ).subscribe(searchResult => {
      this.dmeSearchResults.next(searchResult)
    });

    const diagnosticEngine = JSON.parse(sessionStorage.getItem('xDiagnosticEnginex'));
    this.optionICDs = diagnosticEngine.filter(e => e.isSelected).map(e => ({value: e.icd10, label: e.icd10, isPrimary: e.isPrimary}));
    this.selectControl.setValue(this.optionICDs.filter(e => e.isPrimary).map(e => e.value));
    console.log('optionICDs: ', this.optionICDs);

    // this.patientDataService.getVisitData().subscribe((vd: Data) => {
    //   this.optionICDs = vd.illnessInformation.selected_illnesses.map(e => ({value: e.icd10_code, label: e.icd10_code, isPrimary: e.is_primary}))
    //   this.selectControl.setValue(this.optionICDs.filter(e => e.isPrimary).map(e => e.value))

    //   console.log('optionICDs: ', this.optionICDs)
    // });

    this.selectedDme.instructions = 'As directed';
  }


  onDmeSearchOptionSelected(option: any): void {
    const { label } = option.text;
    Object.assign(this.selectedDme, option.text.dme);
    this.dmeSearchText.next(label);
    this.dmeSearchResults.next([]);
    this.dmeSearchInput.nativeElement.blur();
  }

  buildPrescribingItem(treatment: any, arg1: boolean, arg2: boolean): any {
    throw new Error('Method not implemented.');
  }

  getDmeByQuery(query: string): Observable<AutoCompleteOption[]> {
    return this.newTreatmentService.getDmeByQuery(query).pipe(
      map(
        dmes => dmes.map(dme => ({
          label: dme.MED_NAME,
          dme
        }))
      )
    );
  }

  dmeSearch(value: string): Observable<AutoCompleteOption[]> {
    const filterValue = value.toLowerCase();
    return filterValue.length < 3 ? of([]) : this.getDmeByQuery(filterValue);
  }

  addDme() {
    this.dmes.push({...this.selectedDme, icds: this.selectControl.value});

    //this.addDmeEvent.emit({...this.selectedDme, instructions: this.selectedInstructions, quantity: this.selectedQuantity, icds: this.selectControl.value});
    // Reset
    this.dmeSearchText.next('');
    Object.assign(this.selectedDme, {});
    this.selectedDme.MED_NAME = undefined;
    this.selectedDme.quantity = undefined;
    this.selectedDme.instructions = 'As directed';
    this.selectControl.setValue(this.optionICDs.filter(e => e.isPrimary).map(e => e.value))
  }

  isValidData() {
    return this.selectedDme && this.selectedDme.MED_NAME && this.selectedDme.quantity && this.selectControl.value.length;
  }


  public removeDme(index: number){
    this.dmes.splice(index, 1);
  }
}

