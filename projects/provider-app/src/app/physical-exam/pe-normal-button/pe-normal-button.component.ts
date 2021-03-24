import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, forkJoin, Observable, Subject, zip } from 'rxjs';
import { first, map, takeUntil, tap } from 'rxjs/operators';

import { StateService } from 'services';
import { PhysicalExamsType } from '../../common/types/physical-exams.type';
import { PhysicalExamPanelState } from '../../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.state';
import { SelectFinding } from '../../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.actions';
import { PEFinding } from 'common/interfaces/physical-exam-panel.interfaces';
import { RelatedBodyPart } from 'common/interfaces/physical-exams.interfaces';

@Component({
  selector: 'pa-pe-normal-button',
  templateUrl: './pe-normal-button.component.html',
  styleUrls: ['./pe-normal-button.component.scss']
})
export class PeNormalButtonComponent implements OnInit, OnDestroy {
  @Input() bodyPart: string;
  @Output() abnormalClick = new EventEmitter<PhysicalExamsType>();

  public isNormal = new BehaviorSubject<boolean>(false);
  private findings: Observable<{finding: PEFinding, system: string, subsystem: string}[]>;
  private examPanelOpenedState = false;
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store, private stateService: StateService) {}

  ngOnInit(): void {
    this.findings = this.store.select(PhysicalExamPanelState.relatedFindings(this.relatedBodyPart));
    this.findings.pipe(takeUntil(this._destroy$), tap(findings => {
      const normalFindings = findings.filter(item => item.finding.defaultNormal);
      const abnormalFindings = findings.filter(item => !item.finding.defaultNormal);
      this.isNormal.next(!abnormalFindings.some(item => item.finding.selected) && normalFindings.every(item => item.finding.selected));
    })).subscribe();
  }

  public onNormalButtonClick(): void {
    this.findings.pipe(first()).subscribe(findings => {
      const selectState = !this.isNormal.getValue();
      const normalFindings = findings.filter(item => item.finding.defaultNormal);
      zip(forkJoin(normalFindings.map(item => this.store.dispatch(new SelectFinding({key: item.finding.key}, item.system, item.subsystem, selectState)).pipe(first()))))
        .subscribe(() => this.selectCommonRelatedFindings(selectState));
    });
  }

  private selectCommonRelatedFindings(selectState: boolean) {
    this.store.select(PhysicalExamPanelState.relatedCommonFindings(this.relatedBodyPart)).pipe(first()).subscribe(commonFindings => {
      commonFindings.forEach(commonFinding => {
        const relatedFindings = commonFinding.finding.commonFindingFor.filter(bodyPart => bodyPart !== this.relatedBodyPart).map(bodyPart => this.store.select(PhysicalExamPanelState.relatedFindings(bodyPart)).pipe(first(), map(findings => {
          return findings.every(item => item.finding.selected === selectState);
        })));

        forkJoin(relatedFindings).pipe(first()).subscribe(findingsSelected => {
          let commonFindingsState = false;
          if (findingsSelected.every(finding => finding) && selectState) commonFindingsState = true;
          if (commonFindingsState) this.store.dispatch(new SelectFinding({key: commonFinding.finding.key}, commonFinding.system, commonFinding.subsystem, commonFindingsState));
        });
      });
    });
  }

  public onAbnormalButtonClick(): void {
    if (!this.abnormalClick.observers.length) {
      this.examPanelOpenedState ? this.stateService.app.examPanel.toggle() : this.stateService.app.examPanel.open(this.examPanelSection);
      this.examPanelOpenedState = !this.examPanelOpenedState;
    } else this.abnormalClick.emit(this.examPanelSection);
  }

  private get relatedBodyPart(): RelatedBodyPart {
    if (this.bodyPart.toLowerCase().includes('sinus')) return 'sinus';
    return this.bodyPart.toLowerCase().trim() as RelatedBodyPart;
  }

  private get examPanelSection(): PhysicalExamsType {
    return this.relatedBodyPart.includes('skin') ? 'Skin' : 'ENT';
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
