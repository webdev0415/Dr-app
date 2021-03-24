import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';

import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { max, reduce, sum } from 'ramda';


import { StateService } from 'services/state.service';
import { UserService } from 'user/user.service';
import { IllnessPresentationTypesEnum } from 'common/enums/illness-presentation-types.enum';
import { Contributor, DiagnosticEngine } from 'common/interfaces/diagnostic-engine.interface';
import { SymptomsService } from '../../../../../services/symptoms.service';
import { Helpers } from 'utils/helpers';
import { DataService } from 'services';
import { SourceInfoSymptom } from '../../../../../common/interfaces/illness-source-info.interface';

@Component({
  selector: 'pa-illness-group',
  templateUrl: './illness-group.component.html',
  styleUrls: ['./illness-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IllnessGroupComponent implements OnDestroy, DoCheck {
  @Input() sortedAccordionGroups: string[];
  @Input() accordionGroups: {[key: string]: DiagnosticEngine[]};
  @Input() groupedContributors: {[key: string]: Contributor[]};
  @Input() expandedElements: {[key: string]: boolean};

  @Input() patientReviewed: Array<boolean>;
  @Input() WDView: Array<boolean>;
  @Input() title = '';
  @Output() illnessChange = new EventEmitter<string>();
  @Output() toggleRowChange = new EventEmitter<{icdGroupName: string, opened: boolean}>();
  @Output() reviewDialog = new EventEmitter();

  public illnessPresentation  = IllnessPresentationTypesEnum[this.userService.getUserData.environment.illness_presentation];
  public illnessPresentationEnum: typeof IllnessPresentationTypesEnum =  IllnessPresentationTypesEnum;
  public helpers = Helpers;
  public infoSources: SourceInfoSymptom[];
  public icd10GroupName: string;
  public reviewed: boolean;
  public examReviewed: boolean;
  public topIllnessQuantity = 5;
  public isIllnessTableView;
  public isContributorTableView;
  private subscription: ISubscription;
  public visitReason;

  constructor(
      private stateService: StateService,
      private userService: UserService,
      private symptomsService: SymptomsService,
      private dataService: DataService) {
    this.visitReason = this.dataService.getPatientLastValue().visitInformation.detailVisitReason;
  }

  ngDoCheck(): void {
    [this.reviewed, this.examReviewed] = this.patientReviewed;
    [this.isIllnessTableView, this.isContributorTableView] = this.WDView;
  }

  onIllnessChange(icdCode: string) {
    this.illnessChange.emit(icdCode);
  }

  toggleRow(row) {
     this.toggleRowChange.emit({icdGroupName: row, opened: !this.expandedElements[row]});
    if (this.isContributorTableView && !this.reviewed) this.stateService.patient.setReviewed('reviewed');
    if (this.isContributorTableView && !this.expandedElements[row.icdGroup] && this.groupedContributors[row] && this.groupedContributors[row].length) {
      this.subscription = this.symptomsService.getSourceInfoData$(this.accordionGroups[row][0].icd10).subscribe(sources => {
        if (!sources) return;
        this.infoSources = sources;
      });
      this.icd10GroupName = row.icdGroup;
    }
  }

  formatRanking(row: DiagnosticEngine[]): string | number {
    if (this.isDoctorAdded(row[0])) {
      return 'DR';
    } else if (this.illnessPresentation === IllnessPresentationTypesEnum.CONFIDENCE) {
      return this.formatProbability(row);
    }
    return '';
  }

  public formatProbability(row: DiagnosticEngine[]): string {
    let probability = sum(row.map(item => (item.confidence || 0) * 100));
    if (this.visitReason.toLowerCase().includes('physical injury') || probability > 100) {
      probability = 100;
    }
    return probability !== null ? probability.toFixed(1) + '%' : '';
  }

  getGroupSelection(icdGroup: string): number {
    return (this.accordionGroups[icdGroup] || []).filter(item => item.isSelected).length;
  }

  private isDoctorAdded(item: DiagnosticEngine): boolean {
    return item.icdGroup === 'Doctor added';
  }

  trackBySelectedAmount(index: number, icdGroup: string): number {
    return this.getGroupSelection(icdGroup);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  getIllnessSourceInfo(icdCode: string): Observable<SourceInfoSymptom[]> {
    return this.symptomsService.getSourceInfoData$(icdCode);
  }

  getGroupCriticality(icdGroup: string): number {
    // @ts-ignore
    return reduce(max, 0, this.accordionGroups[icdGroup].map(item => item.iCriticality));
  }

}
