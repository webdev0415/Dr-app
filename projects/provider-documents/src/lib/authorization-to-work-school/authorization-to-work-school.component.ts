import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DischargeNotes } from 'common/models/data.model';
import { DocumentsService } from '../../../../provider-documents/src/lib/services/documents.service';
import { ReturnToSchoolWork } from 'discharge/discharge.interface';

@Component({
  selector: 'doc-authorization-to-work',
  templateUrl: './authorization-to-work-school.component.html',
  styleUrls: ['./authorization-to-work-school.component.scss']
})
export class AuthorizationToWorkSchoolComponent implements OnDestroy {

  @Input() completedDoctor: string;
  @Input() date: string;
  @Input() dischargeNotes: DischargeNotes;
  @Input() RTWSInfo: ReturnToSchoolWork;
  @Input() RTWSUsed: boolean;
  @Input() patientName: string;
  @Output() update = new EventEmitter();

  public dateOptions = {
    dateFormat: 'mm/dd/yyyy',
    minYear: 1970,
    showClearDateBtn: false,
    editableDateField: false
  };

  constructor(public documentsService: DocumentsService) {
  }

  ngOnDestroy() {
    this.update.emit({section: 'authorization', data: this.dischargeNotes});
  }
}
