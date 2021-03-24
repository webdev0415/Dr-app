import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { PESystem } from '../../common/interfaces/physical-exam-panel.interfaces';
import { clone, isNil } from 'ramda';

@Component({
  selector: 'pa-pe-systems-panel',
  templateUrl: './systems-panel.component.html',
  styleUrls: ['./systems-panel.component.scss']
})
export class SystemsPanelComponent implements OnChanges {
  @Input() system: PESystem;
  @Input() disabled: boolean;
  @Input() hasMedia: boolean;
  @Input() collapsed: boolean;
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isNormal: boolean;
  public media: boolean;
  @ViewChild(TemplateRef) buttons;

  private get hasAbnormalSubsystems(): boolean {
    return this.system.descriptionsArray.some(item => !isNil(item.normal) && !item.normal);
  }

  constructor() { }

  public onClick(clickOnNormalButton: boolean): void {
    this.buttonClick.emit(clickOnNormalButton);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const defaultNormalSubsystems = this.system ? this.system.descriptionsArray.filter(item => item.defaultNormal) : null;
    this.isNormal = this.system ? !this.hasAbnormalSubsystems && defaultNormalSubsystems.length && defaultNormalSubsystems.every(item => item.normal) : false;
    this.media = clone(this.hasMedia);
  }


}
