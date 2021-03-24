import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PEFinding, PESubsystem, PESystem } from 'common/interfaces/physical-exam-panel.interfaces';
import { Store } from '@ngxs/store';
import {
  Navigate,
  SelectFinding
} from '../../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.actions';
import {
  CustomSubSystem,
  ENTParts,
  optionalNormalFindings,
  TMDescriptionFields
} from 'physical-exam/physical-exams.constants';
import { OrderStateEnum } from 'common/enums';
import { FindingsEditableCardComponent } from 'physical-exam/findings-editable-card/findings-editable-card.component';

@Component({
  selector: 'pa-pe-findings-panel',
  templateUrl: './findings-panel.component.html',
  styleUrls: ['./findings-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindingsPanelComponent implements OnInit {
  @Input() system: PESystem;
  @Input() store: Store;
  @Input() bodyPartIndex: number;
  @Input() activeSubsystemIndex: number;
  @Input() viewOnly = false;
  @Input() separateDisplay = false;
  private readonly diamondBreak = '/DoctorApp/assets/img/sys/diamond-break.png';
  public readonly tmDescriptionFields = TMDescriptionFields;
  public bodyPart: string;
  public OrderStateEnum = OrderStateEnum;
  @ViewChild(TemplateRef) content;
  @ContentChild(FindingsEditableCardComponent) findingsEditablePanel;

  constructor() { }

  get activeSubsystem(): PESubsystem {
    return this.system.descriptionsArray[this.activeSubsystemIndex];
  }

  ngOnInit(): void {
    if (this.system.examName === 'ENT') this.bodyPart = ENTParts[this.bodyPartIndex];
  }

  onSubsystemSelect(subsystemIndex: number, normal = null): void {
    if (normal !== null) {
        this.system.descriptionsArray[subsystemIndex].mod
          .filter(item => this.needToToSelect(item, normal))
          .forEach(item => this.onFindingSelect(item, subsystemIndex));
    }
    setTimeout(() => this.store.dispatch(new Navigate(this.system.examName, subsystemIndex, this.bodyPartIndex)));
  }

  needToToSelect(finding: PEFinding, normal: boolean): boolean {
    const isOptionalNormal = optionalNormalFindings.some(item => item === finding.code);
    const isRequiredNormal = !isOptionalNormal && finding.normal && finding.selected !== normal;
    const isNotRequiredNormal = isOptionalNormal && finding.selected;
    const isNotRequiredAbnormal = !finding.normal && finding.defaultNormal && finding.selected && normal;
    return (isRequiredNormal || isNotRequiredNormal || isNotRequiredAbnormal);
  }

  onFindingSelect(finding: PEFinding, subsystemIndex = this.activeSubsystemIndex): void {
    setTimeout(() =>
      this.store.dispatch(
        new SelectFinding(
          {key: finding.key},
          this.system.examName,
          this.system.descriptionsArray[subsystemIndex].description,
          !finding.selected
        )
      )
    );
  }

  public subsystemAbnormal(subsystem: PESubsystem): boolean | null {
    const selectedFindings = subsystem.mod.filter(item => item.selected);
    if (!selectedFindings.length) return null;
    return selectedFindings.some(item => !item.normal);
  }

  // public subsystemSelected(subsystem: PESubsystem): boolean {
  //   return subsystem.mod.some(item => item.selected);
  // }

  isTmDescriptionSubsystem(subsystem: PESubsystem): boolean {
    return subsystem.description === CustomSubSystem.TMDescription;
  }

  getButtonTextFontSize(text: string): string {
    if (text.length >= 35) {
      return '0.6rem';
    } else if (text.length >= 30) {
      return '0.68rem';
    } else if (text.length >= 15) {
      return '0.75rem';
    }
    return '1rem';
  }

  getSpecificFindingsByCodes(codes: string[]): PEFinding[] {
    return this.activeSubsystem.mod.filter(finding => codes.some(code => finding.code.includes(code)));
  }

  getSubsystemButtonText(subsystem: PESubsystem): string {
    return subsystem.buttonText ? subsystem.buttonText : subsystem.description;
  }
}
