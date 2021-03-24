import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject
} from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors } from '@angular/forms';


import { pagesTitles } from 'static/static.pages';
import { OrderStateEnum } from '../../common/enums';
import { Medication } from '../interfaces/medication.interface';
import { BaseProceduresComponent } from '../base-procedures/base-procedures.component';
import { BusinessMedication } from '../interfaces/business-medication.interface';
import { MedicationOrderItem } from '../interfaces/medication-order-item.interface';
import { NOTIFICATIONS_PROVIDER } from '../tokens/notifications-provider.token';
import { PATIENT_DATA_SERVICE } from '../tokens/patient-data.token';
import { PROCEDURES_UPDATE_SERVICE } from '../tokens/procedures-update.token';
import { USER_ROLE } from '../tokens/user-role.token';

@Component({
  selector: 'pa-labs',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedicationsComponent extends BaseProceduresComponent<MedicationOrderItem, Medication, BusinessMedication, 'medications'> {
  public readonly title = pagesTitles.medications;
  protected readonly procedureType = 'medications';

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

  protected getBusinessProcedures(): BusinessMedication[] {
    return this.proceduresService.getBusinessMedications();
  }

  protected getDefaultOrderState(procedure: BusinessMedication): Partial<Medication> {
    return { ...super.getDefaultOrderState(procedure), form: ''};
  }

  protected validateOrder(data: AbstractControl): ValidationErrors {
    const order: Partial<Medication> = data.value;
    if (order && order.state === OrderStateEnum.ORDERED && !(order.route && order.dosage && order.form)) {
      return { invalid: true };
    }
    return null;
  }
}
