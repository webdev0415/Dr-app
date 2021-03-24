import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { Injection } from '../interfaces/injection.interface';
import { pagesTitles } from '../../static/static.pages';
import { BaseProceduresComponent } from '../base-procedures/base-procedures.component';
import { BusinessInjection } from '../interfaces/business-injection.interface';
import { InjectionOrderItem } from '../interfaces/injection-order-item.interface';
import { NOTIFICATIONS_PROVIDER } from '../tokens/notifications-provider.token';
import { PATIENT_DATA_SERVICE } from '../tokens/patient-data.token';
import { PROCEDURES_UPDATE_SERVICE } from '../tokens/procedures-update.token';
import { USER_ROLE } from '../tokens/user-role.token';

@Component({
  selector: 'pa-injections',
  templateUrl: './injections.component.html',
  styleUrls: ['./injections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjectionsComponent extends BaseProceduresComponent<InjectionOrderItem, Injection, BusinessInjection, 'injections'> {
  public readonly title = pagesTitles.injections;
  protected readonly procedureType = 'injections';

  constructor(
    @Inject(PROCEDURES_UPDATE_SERVICE) proceduresService,
    @Inject(PATIENT_DATA_SERVICE) patientDataService,
    @Inject(USER_ROLE) userRole,
    @Inject(NOTIFICATIONS_PROVIDER) notificationsService,
    fb: FormBuilder,
    cdRef: ChangeDetectorRef
  ) {
    super(proceduresService, patientDataService, userRole, notificationsService, fb, cdRef);
  }

  protected getBusinessProcedures(): BusinessInjection[] {
    return this.proceduresService.getBusinessInjections();
  }

}
