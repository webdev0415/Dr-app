import { Component, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { PhysicalExamResultComponent } from '../physical-exam-result/physical-exam-result.component';
import { PEFinding, PESubsystem, PESystem } from '../../common/interfaces/physical-exam-panel.interfaces';
import { PhysicalExamsType } from '../../common/types/physical-exams.type';
import { Store } from '@ngxs/store';
import {
  EditFinding,
  SelectFinding
} from '../../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.actions';
import { CustomSubSystem } from '../physical-exams.constants';
import { isNil } from 'ramda';

@Component({
  selector: 'pa-findings-editable-card',
  templateUrl: './findings-editable-card.component.html',
  styleUrls: ['./findings-editable-card.component.scss']
})
export class FindingsEditableCardComponent implements OnInit {
  @Input() PESystem: PESystem;
  public findings: PEFinding[] = [];
  public subsystemsMapping: {[key: string]: string[]} = {};
  @Input() examName: PhysicalExamsType;
  @ViewChildren(PhysicalExamResultComponent) results: QueryList<PhysicalExamResultComponent>;
  @ViewChild(TemplateRef) contentTemplate;

  constructor(private store: Store) { }

  ngOnInit(): void {
    if (this.PESystem) this.PESystem.descriptionsArray.forEach(subsystem => {
      subsystem.mod.forEach(finding => {
        this.findings.push(finding);
        if (!this.subsystemsMapping[subsystem.description]) this.subsystemsMapping[subsystem.description] = [finding.code];
        else {
          this.subsystemsMapping[subsystem.description].push(finding.code);
        }
      });
    });
  }

  // switchActiveArea(index: number) {
  //   const el = this.results.toArray()[index];
  //   if (el) {
  //     const focusEl = el['findingsText'];
  //     const id = focusEl.nativeElement.id;
  //     focusEl.nativeElement.focus();
  //     setTimeout(() => {
  //       const nextFocusEl = document.querySelector(`[id=${id}]`);
  //       // @ts-ignore
  //       if (nextFocusEl) nextFocusEl.focus();
  //     });
  //   }
  // }

  examResultChange(event) {
    event.findings.forEach(item => {
      const newText = item.text;
      if (newText.length) this.store.dispatch(new EditFinding({key: item.key, text: newText}, this.PESystem.examName, event.subsystem));
      else this.store.dispatch(new SelectFinding({key: item.key}, this.PESystem.examName, event.subsystem, false));
    });

  }

  // getSubsystem(code: string): PESubsystem {
  //   const subsystemName = Object.keys(this.subsystemsMapping).find(key => {
  //     return this.subsystemsMapping[key].includes(code);
  //   });
  //   return this.PESystem.descriptionsArray.find(item => item.description === subsystemName);
  // }

  getSubSystemDescription(subSystem: PESubsystem): string {
    const bodyPart = this.showBodyPart(subSystem) ? subSystem.mod[0].relatedBodyPart : '';
    return [bodyPart, subSystem.description]
      .filter(item => !isNil(item) && item.length)
      .join(' ')
      .toUpperCase();
  }

  showBodyPart(subSystem: PESubsystem): boolean {
    return (subSystem.description === CustomSubSystem.TMDescription && Boolean(subSystem.mod.length));
  }

}
