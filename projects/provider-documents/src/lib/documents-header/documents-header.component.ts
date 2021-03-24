import { Component, Input, OnInit } from '@angular/core';

import { PhoneNumberPipe } from '../../../../../projects/provider-documents/src/lib/phone-number.pipe';
import { AkosDocumentsHeaderImage } from '../../../../../projects/provider-app/src/app/components/app/workspace/patientspace/main/constants';
import { UserService } from '../../../../../projects/provider-app/src/app/user/user.service';
import { PatientContactInformation } from '../../../../patient-profile/src/lib/interfaces';

@Component({
  selector: 'doc-documents-header',
  templateUrl: './documents-header.component.html',
  styleUrls: ['./documents-header.component.scss']
})
export class DocumentsHeaderComponent implements OnInit {
  @Input() patientName: string;
  @Input() patientInformation: PatientContactInformation;
  @Input() kioskMode: string;
  @Input() source: string;

  public imageUrl;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.imageUrl = this.userService.getUserData.environment.logo_url || AkosDocumentsHeaderImage;
  }

  get patientPhoneNumber(): string {
    if (!this.patientInformation) return '';
    const patientPhones = this.patientInformation.phoneNumberList[0];
    if (!patientPhones) return '';
    const patientPhoneNumber = patientPhones[this.patientInformation.primaryPhoneType];
    return new PhoneNumberPipe().transform(patientPhoneNumber);
  }

}
