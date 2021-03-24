import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';
import { MdbAutoCompleterComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'pa-treatments-search-bar',
  templateUrl: './treatments-search-bar.component.html',
  styleUrls: ['./treatments-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentsSearchBarComponent implements OnDestroy, AfterViewInit {
  @Input() viewOnly: boolean;
  @Input() searchFunction: (keyword: string) => Observable<Array<string | { label: string, value: string }>>;
  @Input() placeholder: string;
  @Input() initialAutocompleteList: string[];
  @Output() optionSelected: EventEmitter<{text: string; element: any}> = new EventEmitter();

  public searchSubject: Subject<Array<string | { label: string, value: string }>> = new Subject<Array<string | { label: string, value: string }>>();
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') autocomplete: MdbAutoCompleterComponent;


  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.searchSubject.next(this.initialAutocompleteList);
    fromEvent<UIEvent>(this.searchInput.nativeElement, 'input').pipe(debounceTime(1000), mergeMap(() => this.searchFunction(this.searchInput.nativeElement.value))).subscribe(searchResult => this.searchSubject.next(searchResult));
    fromEvent<UIEvent>(this.searchInput.nativeElement, 'blur').pipe(filter((event: FocusEvent) => {
      return this.autocomplete.isOpen() && !this.autocomplete.dropdown.nativeElement.contains(event.relatedTarget);
    })).subscribe(() => {
      this.autocomplete.hide();
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  public onOptionSelect(option: {text: string; element: any}): void {
    this.optionSelected.emit(option);
    this.searchInput.nativeElement.value = '';
    this.searchSubject.next(this.initialAutocompleteList);
    this.searchInput.nativeElement.blur();
  }

}
