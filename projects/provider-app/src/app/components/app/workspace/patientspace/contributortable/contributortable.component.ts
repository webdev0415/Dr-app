import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialogConfig } from '@angular/material/dialog';


import { StateService } from 'services/state.service';
import { DialogService } from 'services/app/dialog.service';
import { ContributorsEnum } from '../../../../../common/enums/contributors.enum';
import { IllnessPresentationTypesEnum } from '../../../../../common/enums/illness-presentation-types.enum';
import { PpcustomdialogComponent } from 'components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { SymptomFilterPipe } from 'utils/symptom-filter.pipe';
import { SourceInfoSymptom } from '../../../../../common/interfaces/illness-source-info.interface';

@Component({
  selector: 'pa-contributortable',
  templateUrl: './contributortable.component.html',
  styleUrls: ['./contributortable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('0ms')),
    ]),
  ],
})
export class ContributorTableComponent implements OnInit, OnChanges {
  @Input() source;
  @Input() infoSources: SourceInfoSymptom[];
  @Input() icd10GroupName;
  @Input() illnessPresentation;
  public viewOnly: boolean;
  public colLength = ContributorsEnum.COLUMN_LENGTH;
  public firstColumnLength: number;
  public illnessPresentationEnum: typeof IllnessPresentationTypesEnum = IllnessPresentationTypesEnum;
  public showMoreOrLess = false;

  public firstColumn: any[] = [];
  public secondColumn: any[] = [];

  private stdDialogConfig = {
    autoFocus: true,
    closeOnNavigation: true,
    minWidth: '520px',
    minHeight: '180px',
    maxHeight: '80%',
    width: '55%'
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private stateService: StateService,
    public dialogService: DialogService
  ) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
  }

  ngOnInit(): void {
    this.buildData();
  }

  buildData(): void {
    if (this.illnessPresentation === this.illnessPresentationEnum.RANKING) {
      this.source = this.source.map(item => ({ ...item, contribution: Math.abs(item.contribution) }));
    }
    this.source = this.source.sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution));
    this.firstColumn = this.getFirstColumn;
    this.secondColumn = this.getSecondColumn;
  }

  public get getFirstColumn(): any[] {
    if (this.infoSources) {
      this.source.map(contributor => {
        const infoSource = this.infoSources.find(source => source.symptomID === contributor.symptomId);
        if (infoSource) {
          contributor.source = infoSource['sourceInformation'];
        }
      });
    }
    this.firstColumnLength = this.source.slice(0, this.colLength).length;
    return this.source.slice(0, this.colLength);
  }

  public get getSecondColumn(): any[] {
    return this.source.slice(this.colLength, 2 * this.colLength);
  }

  getIsLabsContributor(contrib: string): boolean {
    return contrib === 'Labs';
  }

  toggleTable(): void {
    const length = this.source.length;
    if (length > (2 * ContributorsEnum.COLUMN_LENGTH) && !this.showMoreOrLess) {
      this.colLength = Math.floor(length / 2) + ((length % 2) ? 1 : 0);
    } else {
      this.colLength = ContributorsEnum.COLUMN_LENGTH;
    }
    this.showMoreOrLess = !this.showMoreOrLess;
    this.ngOnChanges();
  }

  showSourceLinkInfo(row): void {
    const name = (new SymptomFilterPipe()).transform(row.symptomName);
    const sources = row.source.map(item => {
      return {
        source: item['source'],
        name: item['sourceType']
      };
    });
    this.dialogService.open(PpcustomdialogComponent, Object.assign(new MatDialogConfig(), {
      ...this.stdDialogConfig,
      data: {
        linkList: sources,
        title: `${this.icd10GroupName} is associated with ${name} according to the following sources:`
      }
    })).subscribe();
  }

  ngOnChanges() {
    this.firstColumn = this.getFirstColumn;
    this.secondColumn = this.getSecondColumn;
  }
}
