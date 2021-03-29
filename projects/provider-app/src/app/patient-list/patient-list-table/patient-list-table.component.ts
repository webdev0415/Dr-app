import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Store } from '@ngxs/store';


import { catchError, concatMap, first } from 'rxjs/operators';
import { of } from 'rxjs';
import { ascend, descend, omit, prop, sort, sortBy, sortWith, uniq } from 'ramda';
import { MdbTableDirective, MdbTablePaginationComponent } from 'ng-uikit-pro-standard';

import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { GenderEnum } from '../../../../../pharmacist/src/lib/side-models/patient-profile/enums/gender.enum';
import { PreparedPatientListEntity } from '../interfaces/prepared-patient-list-entity.interface';
import {
  closePatientReasons,
  genderIcons,
  patientStatusEnum,
  patientStatusIconGroups
} from '../patient-list.constants';
import { EhrStateColor } from '../ehr-state.enum';
import { UserService } from 'user/user.service';
import { ContinueButton } from '../../components/app/workspace/patientspace/continue-button/continue-button';
import { NotificationsService } from 'components/notifications/notifications.service';
import { StateService } from 'services';
import { PatientListInterface } from '../interfaces/patient-list.interface';
import { PatientListService } from '../services/patient-list.service';
import { PpSearchPatientsComponent } from '../../components/shared/popups/pp-select/pp-search-patients/pp-search-patients.component';
import { DialogService } from '../../services/app/dialog.service';
import { PpcustomdialogComponent } from '../../components/shared/popups/ppcustomdialog/ppcustomdialog.component';
import { DialogSubscribesService } from '../../services/dialogsubscribes.service';
import { PatientTableHeaderInterface } from '../interfaces/patient-table-header.interface';
import { OpenPatientInterface } from '../interfaces/open-patient.interface';
import { CloseReasonInterface } from '../interfaces/close-reason-interface';
import { Sort } from '../store/patients-list.actions';
import { PatientsTablesState } from '../store/patients-list.state';
import { TableSorting } from '../table-sorting.interface';

@Component({
  selector: 'pa-patient-list-table',
  templateUrl: './patient-list-table.component.html',
  styleUrls: ['./patient-list-table.component.scss']
})
export class PatientListTableComponent extends ContinueButton implements OnChanges, AfterViewInit, OnDestroy {
  @Input() headers: PatientTableHeaderInterface[];
  @Input() patientsEntity: PatientListInterface;
  @Input() isFastMed: boolean;
  @Input() isTabletPharmacistView: boolean;
  @Input() roomValues: { [location: string]: string[] };
  @Output() OpenPatient = new EventEmitter<OpenPatientInterface>();

  public userId: number;
  public isTablet: boolean;

  readonly isPICBusiness: boolean;

  constructor(
    private changeDetector: ChangeDetectorRef,
    protected userService: UserService,
    private notificationService: NotificationsService,
    private stateService: StateService,
    private patientListService: PatientListService,
    private dialogService: DialogService,
    private dialogSubscribesService: DialogSubscribesService,
    private store: Store
  ) {
    super(userService);
    const { doctor_id, user_id } = this.userService.getUserData;
    this.userId = doctor_id || user_id;
    this.isTablet = !this.stateService.app.mediaResp().xl.matches;
    this.isPICBusiness = this.userService.isPICModeBusiness;
  }

  @ViewChild('patientsTable', {static: true}) patientsTable: MdbTableDirective;
  @ViewChild('paginator', {static: true}) pagination: MdbTablePaginationComponent;

  ngOnChanges(changes: SimpleChanges) {
    if ('patientsEntity' in changes) {
      setTimeout(() => {
        this.init();
      });
    }
  }

  init(): void {
    if (this.patientsTable && this.pagination) {
      const sortingState: TableSorting = this.store.selectSnapshot(PatientsTablesState.sortingState(this.patientsEntity.type));
      this.patientsEntity.patients = sortWith(
        [
          (sortingState.sortOrder === 'descending' ? descend : ascend)
          (prop<keyof PreparedPatientListEntity, PreparedPatientListEntity>(sortingState.sortBy))
        ],
        // @ts-ignore
        this.patientsEntity.patients
      );
      this.patientsTable.setDataSource(this.patientsEntity.patients);
      this.patientsEntity.patients = this.patientsTable.getDataSource();
      this.pagination.setMaxVisibleItemsNumberTo(25);
      this.pagination.calculateFirstItemIndex();
      this.pagination.calculateLastItemIndex();
      if (this.pagination.firstItemIndex > this.pagination.lastItemIndex) this.pagination.lastPage();
      if (this.pagination.searchDataSource.length === 0) this.pagination.firstPage();
      this.pagination.nextShouldBeDisabled = false;
    }
  }

  ngOnDestroy(): void {
    this.changeDetector.detach();
  }

  ngAfterViewInit(): void {
    this.init();
    this.changeDetector.detectChanges();
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  onRoomChange(event, patient: PatientListEntity): void {
    if (event.source.selected && event.source.value && event.isUserInput && event.source.value !== patient.room) {
      this.patientListService.assignRoom({ session: patient.session_key, room: event.source.value })
        .pipe(catchError(() => of(null)))
        .subscribe(assigned => {
          if (assigned) {
            this.roomValues[patient.location_name] = this.roomValues[patient.location_name].filter(room => room !== event.source.value);
            this.stateService.patient.setShowRoomAssignmentDialog(false);
            this.notificationService.success(`Patient ${patient.patient_id} is assigned to ${event.source.value}`);
            patient.room = event.source.value;
            this.patientListService.updateListFromPush(patient);
            this.pagination.firstPage();
          }
        });
    }
  }

  removeRoom(patient: PatientListEntity): void {
    this.patientListService.unAssignRoom({ session: patient.session_key }).subscribe(unassigned => {
      if (unassigned) {
        this.roomValues[patient.location_name] = sort(ascend(i => i), uniq<string>([...this.roomValues[patient.location_name], patient.room]));
        patient.room = '';
        this.stateService.patient.setShowRoomAssignmentDialog(false);
        this.notificationService.success(`Patient ${patient.patient_id} is unassigned from room`);
        this.patientListService.updateListFromPush(patient);
      }
    });
  }

  onPatientRowClick(patient_data: PatientListEntity): void {
    if (this.stateService.app.getParsedSymptomsState() !== 'success') {
      this.notificationService.error('Cannot assign patient. Please try again later.', 'Unable to load resources.');
      return;
    }

    if (this.isWithProviderPatient(patient_data)) {
      if (this.isOMUserRole && !this.patientListService.getIsPatientAssignedToCurrentUser(patient_data, this.userId)) return;
      if (this.getIsRowDisabled(patient_data)) {
        this.stateService.app.message.send(`Cannot view or assign patient with status "${patient_data.statusString}"`);
        return;
      }
    }

    if (this.isPICBusiness) {
      this.stateService.app.getEhrLoggedStatus(patient_data.ehr_location).pipe(first()).subscribe(status => {
        if (!status) {
          this.dialogSubscribesService.showEhrAuthModal(patient_data.ehr_location, true).pipe(first()).subscribe(() => {
            this.OpenPatient.emit({
              patientData: patient_data,
              viewOnly: Boolean(patient_data.treatment_complete) || this.isCompletedPatient(patient_data),
              notAssigned: this.patientListService.getIsPatientAssignedToCurrentUser(patient_data, this.userId)
            });
          })
        } else {
          this.OpenPatient.emit({
            patientData: patient_data,
            viewOnly: Boolean(patient_data.treatment_complete) || this.isCompletedPatient(patient_data),
            notAssigned: this.patientListService.getIsPatientAssignedToCurrentUser(patient_data, this.userId)
          });
        }
      });
    } else {
      this.OpenPatient.emit({
        patientData: patient_data,
        viewOnly: Boolean(patient_data.treatment_complete) || this.isCompletedPatient(patient_data),
        notAssigned: this.patientListService.getIsPatientAssignedToCurrentUser(patient_data, this.userId)
      });
    }
  }

  public getIsRowDisabled(row: PatientListEntity): boolean {
    return this.isCompletedPatient(row) || (
      this.isWithProviderPatient(row)
      && (!(!this.isClerkOrOMUserRole && !row.doctor_id)
        && !this.patientListService.getIsPatientAssignedToCurrentUser(row, this.userId))
    );
  }

  public searchCompletedPatients(event: MouseEvent): void {
    event.stopPropagation();
    this.dialogService.open(PpSearchPatientsComponent, {
      autoFocus: true,
      closeOnNavigation: true,
      minWidth: '300px',
      height: '80%',
      width: '60%',
      data: {
        name: `Search Patients - Last Name or Patient ID`
      }
    }).subscribe();
  }

  closePatient(patient: PatientListEntity, reason: CloseReasonInterface): void {
    this.dialogService.open(
      PpcustomdialogComponent,
      this.dialogSubscribesService.getConfig({ message: 'Approve and sign notes ?', isDialog: true })
    ).pipe(
        concatMap(result => {
          if (result) {
            reason.session_key = patient.session_key;
            return this.patientListService.closePatient(String(patient.patient_id), reason);
          } else {
            return of(null);
          }
        }),
      ).subscribe();
  }

  /**
   * remove patient's assignment
   * @param patient
   */
  public removePatientAssignment(patient: PatientListEntity): void {
    const employeeName = patient.clerk_name || patient.doctor_name;
    this.dialogService.open(PpcustomdialogComponent, {
      data: {
        isViewAssign: false,
        isDialog: true,
        message: `Are you going to unassign patient ${patient.patient_name} from ${employeeName}?`
      }
    }).subscribe(dialogResult => {
      if (dialogResult) {
        this.patientListService.removePatientAssignment(patient.patient_id).subscribe(result => {
          if (!result.error) {
            const patientsList = this.patientListService.getListLastValue().map(patientListItem => {
              if (patientListItem.patient_id === patient.patient_id) {
                patientListItem.status = patientListItem.treatment_complete ? patientStatusEnum.complete : patientStatusEnum.waiting;
                patientListItem.doctor_id = 0;
                patientListItem.clerk_id = 0;
              }
              return patientListItem;
            });
            this.notificationService.success(`Patient ${patient.patient_name} was successfully unassigned from ${employeeName}.`);
            this.patientListService.updateList(patientsList);
          }
        });
      }
    });
  }

  get closePatientReason(): CloseReasonInterface[] {
    return closePatientReasons;
  }

  isWaitingOrRegisteredPatient(patient: PatientListEntity): boolean {
    return patient.status === patientStatusEnum.waiting || patient.status === patientStatusEnum.registered || patient.status === patientStatusEnum.inKiosk;
  }

  isCompletedPatient(patient: PatientListEntity): boolean {
    return patient.status === patientStatusEnum.complete;
  }

  isWithProviderPatient(patient: PatientListEntity): boolean {
    return patient.status === patientStatusEnum.withDoctor;
  }

  isTelemedicinePatient(patient: PreparedPatientListEntity): boolean {
    return patient.patientListGroup === 'telemedicine';
  }

  getGenderIcon(gender: GenderEnum): genderIcons {
    return genderIcons[gender];
  }

  get patientStatusIconGroups(): string[] {
    return patientStatusIconGroups;
  }

  chiefComplaint(visitReason: string, covidRisk: boolean): string {
    if (!visitReason) return '';
    if (covidRisk) visitReason = visitReason.replace(/symptoms$/i, '- COVID-19 Risk');
    return visitReason.length <= 30
      ? visitReason
      : visitReason.substr(0, 27).concat('...');
  }

  getPatientStatusIcon(iconGroup: string, patient): string {
    return `/DoctorApp/assets/img/sys/${iconGroup}_${patient[iconGroup + '_ordered'] ? 'ordered' : 'completed'}.svg`;
  }

  public ehrStateClass(stateClass: string): string {
    return EhrStateColor[stateClass];
  }

  public isRoomActive(): boolean {
    return this.userService.getUserData.environment.is_room_active;
  }

  public onTableSort(sortingEvent: { data: PreparedPatientListEntity[]; sortBy: keyof PreparedPatientListEntity; sortOrder: 'ascending' | 'descending' }): void {
    this.store.dispatch(new Sort(omit(['data'], sortingEvent), this.patientsEntity.type));
  }

  public getPatientRowClass(row: PreparedPatientListEntity): string {
    if (row.patientListGroup === 'telemedicine') {
      return row.telemedicineStatus;
    } else return row.status.toLowerCase();
  }
}
