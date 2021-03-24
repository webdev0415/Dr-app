import { DataService } from 'services/data.service';
import { Data, PaymentInfo } from 'common/models/data.model';
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { StateService } from 'services/state.service';
import { NavigationService } from 'services/navigation.service';
import { filter, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DialogService } from 'services/app/dialog.service';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';

export const buildURLQuery = obj =>
  Object.entries(obj)
    .map(pair => pair.map(encodeURIComponent).join('='))
    .join('&');


export class NavBarUtils {
  private subscriber: Subscription;
  private patient: Data;
  public paymentAvailable: boolean;
  public confirmed: boolean;

  static isPaymentInfo(obj: any): obj is PaymentInfo {
    return ('id' in obj && 'type' in obj &&
      'customer_copay' in obj && 'kiosk_copay' in obj &&
      'kiosk_payment' in obj);
  }

  constructor(
    public stateService: StateService,
    private dataService: DataService,
    private currentPatientId: number | undefined,
    public navigationService: NavigationService,
    public dialogService: DialogService,
    public dialogSubscribesService: DialogSubscribesService,
    public viewOnly: boolean) {

    this.paymentAvailable = false;

    this.dataService.getPatient().pipe(filter(val => val !== null)).subscribe((patient: Data) => {
      this.patient = patient;
    });
    this.stateService.patient.getReviewed().subscribe((reviewed: string) => {
      this.confirmed = reviewed === 'confirmed';
    });

    let current_id: number;
    this.subscriber = this.stateService.patient.getCurrent()
      .pipe(filter(val => val !== null)).subscribe((currentPatient: PatientListEntity) => {
      if (this.viewOnly && currentPatient.patient_id !== current_id)  {
        this.dataService.getPaymentInfo(currentPatient.patient_id).subscribe(response => {
          if (response && response.length && NavBarUtils.isPaymentInfo(response[0])) {
            this.stateService.patient.setPaymentAvailable(true);
            this.stateService.patient.setPaymentInfo(Object.assign({}, response[0], {
              ...response[0],
              customer_copay: this.Money(response[0].customer_copay),
              kiosk_copay: this.Money(response[0].kiosk_copay),
              kiosk_payment: this.Money(response[0].kiosk_payment),
              due: this.Money(+response[0].customer_copay - +response[0].kiosk_payment)
            }));
          }
        });
      }
      current_id = currentPatient.patient_id;
    });

    this.stateService.patient.getPaymentAvailable().subscribe(payment => this.paymentAvailable = payment);
  }

  private Money = (value: any): string => isNaN(+value) ? '0.00' : Number(value).toFixed(2);

  public finalNotes() {
    this.dataService.viewFinalNotes(this.patient.patientInformation.patientId).pipe(take(1))
      .subscribe(result => {
        if (result && 'data' in result) {
          this.stateService.app.pdf.emitPdfEvent(result['data']['doctor_note_s3']);
        }
      });
  }

  public editDrNotes() {
    this.stateService.patient.editNotes();
  }

  public isWellnessReportVisitReason(): boolean {
    return this.patient ? this.patient.visitInformation.initialVisitReason === 'Wellness Check' : false;
  }

  public get diagnosisConfirmed(): boolean {
    return this.viewOnly || this.stateService.patient.getIsConfirmDiagnosis();
  }

  public navigateToTreatments() {
    return this.navigationService.navigate([
      'patients',
      this.stateService.patient.getCurrentId(),
      'treatments'
    ]);
  }

  onDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
