import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  PhysicalExamModifier,
  AddedExamViewModel
} from 'common/interfaces/physical-exams.interfaces';
import * as R from 'ramda';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  Navigate,
  SelectFinding,
  EditFinding,
  ClearEmpty
} from '../stores/physical-exam-panel/physical-exam-panel.actions';
import { PhysicalExamPanelState } from '../stores/physical-exam-panel/physical-exam-panel.state';
import { PhysicalExam as PhysicalExamViewModel } from 'common/models/data.model';
import { PhysicalExamPanelModel } from 'common/models/physical-exam-panel.model';
import { PESystem, PESubsystem } from 'common/interfaces/physical-exam-panel.interfaces';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'pa-exam-panel',
  templateUrl: './exampanel.component.html',
  styleUrls: ['./exampanel.component.scss']
})
export class ExamPanelComponent implements OnInit, OnDestroy {
  @Input() panel: MatSidenav;
  @Input() section: any;
  @Input() store: Store;
  @Input() viewOnly: boolean;
  @Input() narrow = false;

  public subscribes = [];
  public selectedExamDescription: PESystem = null;
  public selectedDescriptionMods: PESubsystem = null;
  @Select(PhysicalExamPanelState) physicalExamState$: Observable<PhysicalExamPanelModel>;
  @Select(PhysicalExamPanelState.viewModelExams) physicalExamResult$: Observable<PhysicalExamViewModel[]>;
  public physicalExamSystems: PESystem[];

  constructor() { }

  ngOnInit() {
    // this.physicalExamState$.pipe(filter(state => !!state)).subscribe(state => {
    //   this.physicalExamSystems = state.systems;
    //   if (this.physicalExamSystems) {
    //     this.selectedExamDescription = !R.isNil(state.active.system) ? this.physicalExamSystems[state.active.system] : null;
    //     this.selectedDescriptionMods = !R.isNil(state.active.subsystem) ? this.selectedExamDescription.descriptionsArray[state.active.subsystem] : null;
    //   }
    // });

    if (!this.panel) return;
    this.subscribes.push(this.panel.openedStart.subscribe(() => {
      const exam = this.section ? this.physicalExamSystems.findIndex(item => item.examName === this.section) : null;
      this.navigate(exam, null);
    }));
    this.subscribes.push(this.panel.openedChange.pipe(filter((opened: boolean) => opened === false)).subscribe(() => this.store.dispatch(new ClearEmpty())));
  }

  ngOnDestroy() {
    this.subscribes.forEach(sub => {
      sub.unsubscribe();
    });
  }

  removeFinding(systemName: string, finding: AddedExamViewModel) {
    this.store.dispatch(new SelectFinding({key: finding.modifier.key}, systemName, finding.description));
  }

  public navigate(system: number | null, subsystem: number | null) {
    if (system === undefined) system = this.physicalExamSystems.findIndex(item => item.examName === this.selectedExamDescription.examName);
    if (system === 0) {
      system = this.selectedDescriptionMods ? null : 0;
      subsystem = this.selectedDescriptionMods ? null : 0;
    }
    // this.store.dispatch(new Navigate(system, subsystem));
  }

  public selectFinding(finding: PhysicalExamModifier) {
    this.store.dispatch(new SelectFinding({key: finding.key}, this.selectedExamDescription.examName, this.selectedDescriptionMods.description));
  }

  public onChange(event, exam: PhysicalExamViewModel, finding: AddedExamViewModel): void {
    const newText: string = event.target.value;
    if (newText.length) this.store.dispatch(new EditFinding({text: event.target.value, key: finding.modifier.key}, exam.examName, finding.description));
    else this.store.dispatch(new SelectFinding({key: finding.modifier.key}, exam.examName, finding.description));
  }
}
