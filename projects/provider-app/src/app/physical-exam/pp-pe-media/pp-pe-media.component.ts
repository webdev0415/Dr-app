import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';

import { Select, Store } from '@ngxs/store';
import { flatten } from 'ramda';
import { Observable } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';


import { PESystem } from '../../common/interfaces/physical-exam-panel.interfaces';
import { PhysicalExam } from '../../common/models/data.model';
import { PhysicalExamsType } from '../../common/types/physical-exams.type';
import { PhysicalExamPanelState } from '../../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.state';
import { NotificationsService } from '../../components/notifications/notifications.service';
import { PpviewmediaComponent } from '../../components/shared/popups/ppviewmedia/ppviewmedia.component';
import { StateService } from '../../services';
import { CUSTOM_OVERLAY_DATA, CustomOverlayRef } from '../../services/app/dialog.service';
import { ENTParts } from '../physical-exams.constants';
import { PhysicalFindingsService } from '../physical-findings.service';
import { SplitToBodyPartsPipe } from '../split-to-body-parts.pipe';

@Component({
  selector: 'pa-pp-pe-media',
  templateUrl: './pp-pe-media.component.html',
  styleUrls: ['./pp-pe-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PpPeMediaComponent extends PpviewmediaComponent implements OnInit, OnDestroy {
  public panelOpened = false;
  public bodyPart: string;
  @ViewChild('exampanel') exampanel: MatSidenav;
  @Select(PhysicalExamPanelState.viewModelExams) physicalExam$: Observable<PhysicalExam[]>;
  public PENavigationTree$: Observable<number>;
  public system$: Observable<PESystem>;
  public physicalExamResult$: Observable<PESystem>;
  public bodyPartIndex: number;
  public examPanelSection: PhysicalExamsType = 'ENT';
  public viewOnly = true;
  private examsReviewed: boolean;

  constructor(
    protected rc: CustomOverlayRef,
    @Inject(CUSTOM_OVERLAY_DATA) public data: any,
    protected changeDetector: ChangeDetectorRef,
    protected sanitizer: DomSanitizer,
    protected stateService: StateService,

    public store: Store,
    private notificationService: NotificationsService,
    private physicalFindingsService: PhysicalFindingsService,
    private bodyPartsPipe: SplitToBodyPartsPipe,
  ) {
    super(rc, data, changeDetector, sanitizer, stateService);
    this.bodyPartIndex = ENTParts.findIndex(item => item === this.data.bodyPart.toLowerCase());
    if (this.bodyPartIndex < 0) this.bodyPartIndex = 0;
    this.system$ = this.store.select(PhysicalExamPanelState.systems).pipe(map(systems => {
      return bodyPartsPipe.transform(systems.find(item => item.examName === this.examPanelSection))[this.bodyPartIndex];
    }));
    this.PENavigationTree$ = this.store.select(PhysicalExamPanelState.navigation).pipe(map(tree => {
      return tree[this.examPanelSection][this.bodyPartIndex];
    }));
    this.physicalExamResult$ = this.store.select(PhysicalExamPanelState.exams).pipe(
      map(systems => systems.find(item => item.examName === this.examPanelSection)),
      filter(system => !!system),
      map(system => {
        return bodyPartsPipe.transform(system)[this.bodyPartIndex];
      })
    );
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.viewOnly = this.data.viewOnly;
    this.bodyPart = this.urls[this.index].name || this.data.bodyPart;
    this.stateService.patient.getExamReviewed().pipe(takeUntil(this._destroy)).subscribe(reviewed => this.examsReviewed = reviewed);
  }

  ngOnDestroy(): void {
    this.physicalExam$.pipe(first()).subscribe(physicalExams => {
      const peChanges = flatten(Object.values(this.physicalFindingsService.changedSystems(physicalExams)));
      const examName = this.bodyPart.match(/skin/i) ? 'Skin' : 'ENT';
      if (this.examsReviewed || peChanges.every(item => item.examName === examName)) this.physicalFindingsService.savePEChanges(physicalExams).subscribe();
      else if (peChanges.length) {
        this.notificationService.info('Your changes are not saved. You need to review all media to save it', 'Not saved');
      }
    });
    super.ngOnDestroy();
  }

  public togglePanel(section: PhysicalExamsType) {
    this.examPanelSection = section;
    this.exampanel.toggle();
    this.panelOpened = !this.panelOpened;
  }

}
