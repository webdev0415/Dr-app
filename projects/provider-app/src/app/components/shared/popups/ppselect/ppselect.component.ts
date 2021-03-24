import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { DataService } from 'services/data.service';
import { TreatmentsService } from '../../../../treatments/treatments.service';

import { PpcustomdialogComponent } from '../ppcustomdialog/ppcustomdialog.component';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { DialogService } from 'services/app/dialog.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import * as R from 'ramda';
import { TreatmentEngine } from 'treatments/treatments.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { NodeSearchTypeEnum } from '../../../../common/enums/node-search-type.enum';


@Component({
  selector: 'pa-ppselect',
  templateUrl: './ppselect.component.html',
  styleUrls: ['./ppselect.component.scss']
})
export class PpselectComponent implements OnInit, OnDestroy {
  public name: string;
  public list = [];
  public selected = [];
  public used = false;
  public treatment: any;
  public isInputValid = false;
  public filters = [];
  public waitingCounter = 0;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public formInputControl: FormControl = null;
  private noResultsDetection = new BehaviorSubject<boolean>(false);
  public noResultsDetectionObserver;

  public isOtherInput: boolean;
  public otherInputValue = '';
  public isOtherInputUntouched = true;
  public otherInputControl: FormControl;

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  @ViewChild('contentWrapper') contentWrapper: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<PpselectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    private treatmentsService: TreatmentsService,
    private dialogSubscribesService: DialogSubscribesService,
    public dialogService: DialogService,
    private sanitizer: DomSanitizer
  ) {
    this.noResultsDetectionObserver = this.noResultsDetection.asObservable();
    switch (data.type) {
      case 'list': {
        this.selected = [];
        break;
      }
      case 'immunization':
      case 'search': {
        this.selected = [];
        this.list = JSON.parse(JSON.stringify(this.data.searchList));
        this.isOtherInput = data.showOtherInput;
        this.otherInputValue = data.otherInputText ? data.otherInputText : '';
        break;
      }
      case 'listmultiple': {
        if (data.selection) {
          this.selected = data.selection.length > 0 ? data.selection : data.defaultSelection;
          this.used = data.selection.length > 0;
        } else {
          this.selected = [];
          this.used = false;
        }
        if (!this.data.list.hasOwnProperty('index')) this.data.list = this.data.list.map((item, index) => ({...item, index}));
        this.list = JSON.parse(JSON.stringify(this.data.list));
        this.isOtherInput = data.showOtherInput;
        this.otherInputValue = data.otherInputText ? data.otherInputText : '';
        break;
      }
      case 'modifiers': {
        this.selected = data.selection;
        break;
      }
    }
  }

  ngOnInit(): void {
    this.otherInputControl = new FormControl(this.otherInputValue, [
      Validators.maxLength(40),
      Validators.pattern(/^\S+|\s+\S+\s*$/),
    ]);
  }

  noResults() {
    let results = true;
    switch (this.data.type) {
      case ('immunization'):
      case ('listmultiple'):
      case ('search'):
        results = this.list && !this.list.length;
        break;
      case ('drugs'):
      case ('diagnosis'):
      case ('symptoms'):
        results = this.data.list && !this.data.list.length && (this.formInputControl && this.formInputControl.valid);
        break;
      default:
        results = false;
        break;
    }
    this.noResultsDetection.next(results);
  }

  drugInputChange(value: string): Observable<Array<any>> {
    switch (this.data.type) {
      case 'search': {
        this.selected = [];
        let list = this.data.searchList.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0);
        this.filters.forEach(filter => {
          list = list.filter(item => item[filter.type] === filter.name);
        });
        return of(list);
      }
      case 'drugs': {
        if (value.trim().replace(' ', '').length >= 3) {
          this.waitingCounter += 1;
          return this.treatmentsService.getDrugsByName(value).map((response) => {
            if (!response) return [];
            let list = response;
            // todo: remove unused parts on the class
            // @ts-ignore
            list = this.data.excluded ? list.filter(item => !this.data.excluded.includes(item)) : list;
            this.waitingCounter -= 1;
            return list;
          });
        }
        return of([]);
      }
      case 'diagnosis': {
        if (value.length >= 3) {
          this.data.list = [];
          this.selected = [];
          this.waitingCounter += 2;

          const searchIllness = (type: NodeSearchTypeEnum) => {
            return this.dataService.nodeSearch(value, type).pipe(map((response) => {
              // @ts-ignore
              if (!response || !response.nodes) return [];
              // @ts-ignore
              const list = R.uniqBy(illness => [illness.name, illness.icd10Code].join(), response.nodes);
              this.waitingCounter -= 2;
              return this.data.excluded ? list.filter(item => !this.data.excluded.includes(item)) : list;
            }));
          };

          if (/^([a-zA-Z])?(\d+)*(\s)*(\.\s*\d+.*)*$/.test(value)) {
            return searchIllness(NodeSearchTypeEnum.ICD);
          } else {
            return searchIllness(NodeSearchTypeEnum.STRING);
          }
        }
        return of([]);
      }
      case 'listmultiple': {
        if (value.length >= 0) {
          return of(this.data.list.filter(item => {
            const name = item.icdDesc || item.listValue || item.name || item.shortName;
            return name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
          }));
        }
        return of([]);
      }
      case 'symptoms': {
        if (value.length >= 3) {
          this.data.list = [];
          let list = this.data.parsedSymptoms.filter(item => (item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) && !this.data.excluded.includes(item.symptomID));
          this.filters.forEach(filter => {
            list = list.filter(item => item[filter.type] === filter.name);
          });
          list = list.map(item => {
            const category = this.data.symptomCategories.find(cat => cat.categoryID.includes(item.categoryID));
            return Object.assign(item, {categoryName: category.categoryName, groupName: category.groupName});
          });
          list.sort((prevName, nextName) => {
            const prevGroupName = prevName.groupName.toLowerCase();
            const nextGroupName = nextName.groupName.toLowerCase();
            if (prevGroupName > nextGroupName) return 1;
            if (prevGroupName < nextGroupName) return -1;
            if (prevGroupName === nextGroupName) {
              return prevName.categoryName < nextName.categoryName ? -1 : prevName.categoryName > nextName.categoryName ? 1 : 0;
            }
          });
          return of(list);
        } else return of([]);
      }
    }
  }

  selectItem(name) {
    if (this.selected[0] === name) {
      this.selected = [];
    } else {
      this.selected = [name];
    }
  }

  toggleItem(index) {
    if (this.data.type === 'listmultiple' && this.data.search) index = this.data.list.indexOf(this.data.list.find(item => item.name === this.list[index].name));
    if (this.data.type === 'symptoms') {
      if (this.selected.includes(this.data.list[index].symptomID)) {
        this.selected.splice(this.selected.indexOf(this.data.list[index].symptomID), 1);
      } else {
        this.selected.push(this.data.list[index].symptomID);
      }
    } else {
      if (this.selected.includes(index)) {
        this.selected.splice(this.selected.indexOf(index), 1);
      } else {
        this.selected.push(index);
      }
    }
  }

  listMultipleChecked(index): boolean {
    if (this.data.type === 'listmultiple' && this.data.search) index = this.data.list.indexOf(this.list[index]);
    return this.selected.includes(index);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  confirm() {
    if (!this.selected.length && this.otherInputControl.invalid && this.otherInputControl.untouched) {
      this.notSelectedAlert();
    } else {
      this.close();
    }
  }

  notSelectedAlert() {
    this.dialogService.open(PpcustomdialogComponent, this.dialogSubscribesService.getConfig({
      isWarningDialog: true,
      descriptionWarning: 'You have selected no items',
      message: 'Are you sure you want to close the dialog?'
    }, {
      width: '550px',
      autoFocus: false,
      closeOnNavigation: false,
      disableClose: true
    })).subscribe((result: boolean) => {
      if (result) {
        this.close();
      }
    });
  }

  close() {
    let data: any;
    switch (this.data.type) {
      case 'listmultiple':
        const selected = [];
        this.selected.forEach(item => {
          selected.push(this.data.list[item]);
        });
        data = { selected: selected, treatment: this.data.treatment, name: this.data.name, otherInput: this.otherInputControl.value };
        break;
      case 'list': data = { selected: this.selected[0], treatment: this.data.treatment }; break;
      case 'drugs': data = { selected: this.selected[0], treatment: this.data.treatment }; break;
      case 'diagnosis': data = { selected: this.selected[0] }; break;
      case 'immunization': case 'search': data = { selected: this.selected, list: this.list, otherInput: this.otherInputControl.value }; break;
      case 'modifiers': data = { selected: this.selected }; break;
      case 'symptoms': data = { selected: this.selected }; break;
    }
    this.dialogRef.close([this.data, data]);
  }

  unselect() {
    this.dialogRef.close([this.data, {treatment: this.data.treatment, name: this.data.name}, 'unselect']);
  }

  updateList(value: Array<any>): void {
    if (this.viewPort) {
      this.viewPort.scrollToIndex(0, 'auto');
    } else {
      this.contentWrapper.nativeElement.scrollTop = 0;
    }
    if (this.data.type === 'listmultiple' || this.data.type === 'search' || this.data.type === 'immunization') {
      this.list = value;
      this.noResults();
    } else if (value && value.length) {
      this.data.list = value;
      this.noResultsDetection.next(false);
    } else {
      this.data.list = [];
      this.noResults();
    }
  }

  get inputControl(): FormControl {
    if (this.formInputControl === null) {
      const form = new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.pattern(/^[ a-zA-Z0-9%._,\-]+( [a-zA-Z0-9%._\-]+)*$/),
            Validators.minLength(3)
          ],
          updateOn: 'change'
        }
      );
      if (this.data.search) {
        form.valueChanges.pipe(debounceTime(1000), distinctUntilChanged(), switchMap(() => {
          this.waitingCounter = 0;
          return this.searchAsync();
        })).subscribe((value: Array<any>) => {
          this.updateList(value);
        });
      }
      this.formInputControl = form;
      return form;
    }
    return this.formInputControl;
  }

  searchAsync(): Observable<any> {
    const form = this.formInputControl;
    const valid = this.isInputValid = form.valid;
    if (valid || this.data.type === 'listmultiple' || this.data.type === 'search') {
      const valueTrimmed = form.value.trim();
      return this.drugInputChange(valueTrimmed);
    } else {
      if ((!form.value.length && this.data.type === 'drugs') || (this.data.type === 'symptoms' && !form.value.length)) return of([]);
      return of(this.data.list);
    }
  }

  onClickSearch(): void {
    this.searchAsync().subscribe((value: Array<any>) => {
      this.updateList(value);
    });
  }

  add(filter, type): void {
    if ((filter).trim() && !this.filters.find(item => item.name === filter.trim())) {
      this.filters.push({name: filter.trim(), type: type});
      this.onClickSearch();
    }
  }

  remove(filter): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
      this.onClickSearch();
    }
  }

  removeOtherInfo(): void {
    this.otherInputControl.setValue('');
    this.isOtherInputUntouched = false;
  }

  get isSourceLinks(): boolean {
    let result: boolean|Array<any> = false || [];
    this.list.forEach(illness => {
      result = this.sourceLinks(illness);
    });
    return typeof result === 'boolean' ? result : Boolean(result.length);
  }

  sourceLinks(illness: TreatmentEngine): boolean|Array<any> {
    if (!illness.treatments) return false;
    const ttment = illness.treatments.find(treatment => treatment.type === this.data.treatment);
    if (ttment) {
      const links = [];
      const details = ttment.details.filter(detail => detail.sources && detail.sources.length);
      details.forEach(det => {
        Array.prototype.concat.apply([], det.sources).forEach(src => {
          if (src !== null && !src.includes('no ')) {
            links.push(src);
          }
        });
      });
      return links.length ? links : false;
    }
    return false;
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  domainOf(link: String) {
    if (link && typeof link === 'string') {
      const www = link.indexOf('www.');
      const com = link.indexOf('.com') + 4;
      return link.substring(www, com);
    } else return '';
  }

  get confirmButtonDisabled(): boolean {
    return Boolean((!this.isOtherInput && !this.selected.length)
        || (!this.selected.length && !this.otherInputControl.value.length && this.isOtherInputUntouched)
        || ((!this.selected.length || this.selected.length) && this.otherInputControl.errors));
  }

  ngOnDestroy(): void {
    this.otherInputValue = '';
    this.otherInputControl.setValue('');
    this.isOtherInputUntouched = true;
  }
}
