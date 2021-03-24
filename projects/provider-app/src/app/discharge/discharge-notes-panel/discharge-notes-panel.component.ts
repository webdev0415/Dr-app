import { Component, Input } from '@angular/core';
import { StateService } from '../../services';

@Component({
  selector: 'pa-discharge-notes-panel',
  templateUrl: './discharge-notes-panel.component.html',
  styleUrls: ['./discharge-notes-panel.component.scss']
})
export class DischargeNotesPanelComponent {
  @Input() which: string | undefined;

  constructor(private stateService: StateService) { }

  public openNotes(event: UIEvent, document: string = null): void {
    event.preventDefault();
    event.stopPropagation();
    this.stateService.patient.editNotes(document || this.which);
  }

}
