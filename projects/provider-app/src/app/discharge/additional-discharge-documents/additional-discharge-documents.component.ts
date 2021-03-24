import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { DialogService } from '../../services/app/dialog.service';
import { PpCustomDischargeArticleComponent } from '../../components/shared/popups/pp-custom-discharge-article/pp-custom-discharge-article.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { stdDialogConfig } from '../../static/app.constants';
import { Utils } from '../../utils/utils';
import { omit } from 'ramda';
import { KludgesService, ServicedataService } from '../../services';
import { CNTDischargeResponse, DischargeArticle, DischargeInstruction } from '../discharge.interface';
import { UserService } from '../../user/user.service';
import { CntSiteKeyEnum } from '../cnt-site-key.enum';
import { NodeSearchTypeEnum } from '../../common/enums/node-search-type.enum';

@Component({
  selector: 'pa-additional-discharge-documents',
  templateUrl: './additional-discharge-documents.component.html',
  styleUrls: ['./additional-discharge-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdditionalDischargeDocumentsComponent implements OnDestroy, OnInit, OnChanges {
  @Input() selectedIllnesses: { illnesses: string[], primary: string, primaryName: string };
  @Input() customInstructions = '';
  @Input() addedDocuments: DischargeInstruction[] = [];
  @Input() viewOnly: boolean;
  @Output() customChange = new EventEmitter<string>();
  @Output() addedDocumentsChange = new EventEmitter<DischargeInstruction[]>();
  public readonly articlesPerPageOptions = [{label: 5, value: 5}, {label: 10, value: 10}, {label: 20, value: 20}];
  public searchKey: string;
  public searchInput: string;
  public pageNumber = 0;
  public totalArticlesAmount = 0;
  private _articlesPerPage = new BehaviorSubject<5| 10 | 20>(5);
  private _searchResults = new BehaviorSubject<DischargeArticle[]>([]);
  private readonly stdDialogConfig = stdDialogConfig;
  private readonly icdRegExp = /\w{1}\d{2}(\.\d{1,3})?/g;

  constructor(private kludges: KludgesService, private dialogService: DialogService, private serviceDataService: ServicedataService, private changeDetector: ChangeDetectorRef, private userService: UserService) { }

  ngOnInit(): void {
    this.prefillSearchResults();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const illnessesChange = changes.selectedIllnesses;
    if (illnessesChange && !illnessesChange.firstChange && illnessesChange.currentValue.primary && illnessesChange.currentValue.primary !== illnessesChange.previousValue.primary) this.prefillSearchResults();
  }

  private prefillSearchResults(): void {
    if (this.viewOnly) return;
    this.searchInput = this.selectedIllnesses.primary;
    this.onInput();
  }

  private get currentArticlesPerPage(): number {
    return this._articlesPerPage.getValue();
  }

  public get searchResult$(): Observable<DischargeArticle[]> {
    return this._searchResults.asObservable().pipe(map((results: DischargeArticle[]) => {
      const start = this.pageNumber * this.currentArticlesPerPage;
      const stop = (this.pageNumber + 1) * this.currentArticlesPerPage;
      return results.slice(start, stop);
    }), mergeMap((results: DischargeArticle[]) => {
      const start = this.pageNumber * this.currentArticlesPerPage;
      const stop = (this.pageNumber + 1) * this.currentArticlesPerPage;
      const validResults = results.filter(item => !!item);

      const lastPage = this.pageNumber + 1 === Math.ceil(this.totalArticlesAmount / this.currentArticlesPerPage) || ! this.totalArticlesAmount;
      if (validResults.length < this.currentArticlesPerPage && !lastPage || lastPage && validResults.length < this._searchResults.getValue().slice(start, stop).length) this.fetchArticles(start);
      return of(results.filter(item => item && !this.documentAdded(item.link)));
    }));
  }

  public get articlesPerPage$(): Observable<5 | 10 | 20> {
    return this._articlesPerPage.asObservable();
  }

  public set articlesPerPage(amountPerPage: 5| 10 | 20) {
    if (amountPerPage > this.totalArticlesAmount) {
      this.pageNumber = 0;
    } else {
      const prevAmount = this._articlesPerPage.getValue();
      let currentPosition = (this.pageNumber + 1) * prevAmount - 1;
      if (currentPosition >= this.totalArticlesAmount) currentPosition = this.totalArticlesAmount;
      if (this.pageNumber) {
        if (prevAmount < amountPerPage) {
          this.pageNumber = Math.floor(Math.floor(this.totalArticlesAmount / amountPerPage) * (currentPosition / this.totalArticlesAmount));
        } else {
          this.pageNumber = Math.floor(currentPosition / amountPerPage);
        }
      }
    }
    this._articlesPerPage.next(amountPerPage);
  }

  public get totalArticlePagesAmount$(): Observable<number> {
    return this.articlesPerPage$.pipe(map(articlesPerPage => {
      return Math.ceil(this.totalArticlesAmount / articlesPerPage);
    }));
  }

  public removeDocument(documentLink: string): void {
    this.addedDocuments = this.addedDocuments.filter(item => item.link !== documentLink);
    this.addedDocumentsChange.emit(this.addedDocuments);
  }

  public addDocument(article: DischargeArticle): void {
    const instruction: DischargeInstruction = { ...omit(['contentImg', 'modifyTimestamp', 'description', 'id'], article), siteKey: this.userService.getIsFastmedBusiness ? CntSiteKeyEnum.FASTMED : CntSiteKeyEnum.AKOS, articleId: article.id };
    this.addedDocuments.push(instruction);
    this.addedDocumentsChange.emit(this.addedDocuments);
  }

  public documentAdded(documentLink: string): boolean {
    return !!this.addedDocuments.find(item => item.link === documentLink);
  }

  private get parseSearchKey(): [string, string[]] {
    let keyword = '';
    let icdCodes = [];
    const input = this.searchInput.trim();
    if (input.match(this.icdRegExp)) icdCodes = [input.toUpperCase()];
    else if (input.length > 4) keyword = input;
    return [keyword, icdCodes];
  }

  @Utils.debounce(150)
  private fetchArticles(start = 0): void {
    const [keyword, icdCodes] = this.parseSearchKey;
    this.kludges.receiveDischargeArticles(icdCodes, keyword, start, this._articlesPerPage.getValue(), this.userService.getIsFastmedBusiness ? CntSiteKeyEnum.FASTMED : CntSiteKeyEnum.AKOS).subscribe((result: CNTDischargeResponse) => {
      let currentResultsArray = this._searchResults.getValue();
      if (!currentResultsArray.length) currentResultsArray = Array(result.recordsTotal).fill(undefined);
      currentResultsArray = currentResultsArray.map((item, index) => {
        if (index >= start && index <= start + this._articlesPerPage.getValue()) return result.data[index - start];
        else return item;
      });
      this._searchResults.next(currentResultsArray);
      this.totalArticlesAmount = result.recordsTotal;
    });
  }

  @HostListener('input', ['$event'])
  @Utils.debounce(1000)
  onInput(): void {
    const [keyword, icdCodes] = this.parseSearchKey;
    if (!icdCodes.length && !keyword) return;
    this.searchKey = keyword;
    this.pageNumber = 0;
    this.totalArticlesAmount = 0;
    this._searchResults.next([]);
    if (icdCodes.length) this.serviceDataService.nodeSearch(icdCodes, NodeSearchTypeEnum.ICD, true, true).subscribe((result: { nodes: { name: string, icd10Code: string }[] }) => {
      this.searchKey = icdCodes.map(code => {
        const illness = result.nodes.find(icd => icd.icd10Code === code.toUpperCase());
        return `${code.toUpperCase()}${illness ? ' - ' + illness.name : ''}`;
      }).join(', ');
      this.changeDetector.detectChanges();
    });
    this.fetchArticles();
  }

  public changePage(increase = false, max = false) {
    if (increase) {
      if (max) this.totalArticlePagesAmount$.pipe(first()).subscribe(number => this.pageNumber = number - 1);
      else this.pageNumber++;
    } else {
      if (max) this.pageNumber = 0;
      else this.pageNumber--;
    }
  }

  public addCustomArticle(): void {
    const config = Object.assign(new MatDialogConfig(), { ...this.stdDialogConfig, data: this.customInstructions,
      width: 'auto',
      minWidth: '70vw',
      panelClass: 'top-mat-dialog-container',
      maxHeight: '80%',
    });
    this.dialogService.open(PpCustomDischargeArticleComponent, config).subscribe(result => {
      if (typeof result === 'string') {
        this.customChange.emit(result);
      }
    });
  }

  trackByLink(index: number, item: DischargeArticle): string {
    return item.link;
  }

  ngOnDestroy(): void {
    this._searchResults.complete();
    this._articlesPerPage.complete();
    this.changeDetector.detach();
  }

}
