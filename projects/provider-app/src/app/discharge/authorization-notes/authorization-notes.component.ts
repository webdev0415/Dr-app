import { Component, Input } from '@angular/core';
import { AuthorizationToWorkSchoolComponent } from '../../../../../provider-documents/src/lib/authorization-to-work-school/authorization-to-work-school.component';
import { DocumentsService } from '../../../../../provider-documents/src/lib/services/documents.service';
import { RTSDaysEnum } from '../discharge.enum';

@Component({
  selector: 'pa-authorization-notes',
  templateUrl: './authorization-notes.component.html',
  styleUrls: ['./authorization-notes.component.scss']
})
export class AuthorizationNotesComponent extends AuthorizationToWorkSchoolComponent {
  @Input() viewOnly = false;
  constructor(documentsService: DocumentsService) { super(documentsService); }

  public RTSEnumReverse(day: RTSDaysEnum): string {
    return Object.keys(RTSDaysEnum).find((key: keyof typeof RTSDaysEnum) => RTSDaysEnum[key] === day);
  }

}
