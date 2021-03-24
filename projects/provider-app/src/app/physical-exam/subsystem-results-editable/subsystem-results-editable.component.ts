import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { PEFinding, PESubsystem } from '../../common/interfaces/physical-exam-panel.interfaces';
import { clone } from 'ramda';

@Component({
  selector: 'pa-subsystem-results-editable',
  templateUrl: './subsystem-results-editable.component.html',
  styleUrls: ['./subsystem-results-editable.component.scss']
})
export class SubsystemResultsEditableComponent implements OnInit {
  @Input() PESubsystem: PESubsystem;
  @Output() examResultChange: EventEmitter<{findings: PEFinding[], subsystem: string}> = new EventEmitter<{findings: PEFinding[], subsystem: string}>();
  private findings: {key: string, text: string[]}[];
  public findingsTemplateData: {key: string, text: string[]}[];

  constructor() { }

  @HostListener('document:click')
  clickOutside() {
    this.emitValue();
  }

  ngOnInit() {
    this.findings = this.PESubsystem.mod.map(item => ({key: item.key, text: item.text.split('\n')}));
    this.findingsTemplateData = clone(this.findings);
  }

  public onBlur(event): void {
    this.findings.forEach(item => {
      const el = event.srcElement.childNodes[0];
      if (item.key === el.id) {
        item.text = [el.textContent];
      }
    });
    this.emitValue();
  }

  public emitValue(): void {
    const findingsData = [];
    this.findings.forEach(item => {
      findingsData.push({ key: item.key, text: item.text.filter(textPart => textPart !== '\n').join('\n') });
    });
    this.examResultChange.emit({ subsystem: this.PESubsystem.description, findings: findingsData as PEFinding[] });
  }

  public onModelChange(data: {key: string, value: string[]}[]): void {
    this.findings.filter(item => data.find(i => i.key === item.key)).forEach(item => item.text = data.find(i => i.key === item.key).value);
  }
}
