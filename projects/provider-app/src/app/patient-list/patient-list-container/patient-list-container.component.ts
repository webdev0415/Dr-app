import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'

import { ascend, prop, propEq, sortWith, splitWhen, equals, isNil, find, compose, not, filter as rFilter, clone, concat, append, slice } from 'ramda'
import { delay, distinctUntilChanged, filter, publishReplay, refCount, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { MdbTableDirective, MdbTablePaginationComponent } from 'ng-uikit-pro-standard'

import { DialogSubscribesService } from 'services/dialogsubscribes.service'
import { StateService } from 'services/state.service'
import { DataService } from 'services/data.service'
import { UserService } from 'user/user.service'
import { AlertService, PatientdataService } from 'services'
import { NotificationsService } from 'components/notifications/notifications.service'
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service'
import { Data } from 'common/models/data.model'
import { PatientListInterface } from '../interfaces/patient-list.interface'
import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model'
import { DateTime } from 'utils/dateTime'
import { Helpers } from 'utils/helpers'
import { NavigationService } from 'services/navigation.service'
import { OrderStateEnum } from 'common/enums/order-state.enum'
import { RoomsEnum } from 'common/enums/rooms.enum'
import { Alert } from 'common/interfaces/alert'
import { UserRolesEnum } from 'common/enums/user-roles.enum'
import { Configuration } from 'app.config'

import { PatientListService } from '../services/patient-list.service'
import { defaultTableHeaders, patientStatusEnum } from '../patient-list.constants'
import { PatientTableHeaderInterface } from '../interfaces/patient-table-header.interface'
import { PatientListGroup, PreparedPatientListEntity } from '../interfaces/prepared-patient-list-entity.interface'

@Component({
  selector: 'pa-patients-list-container',
  templateUrl: './patient-list-container.component.html',
  styleUrls: ['./patient-list-container.component.scss']
})
export class PatientListContainerComponent implements AfterViewInit, OnDestroy, OnInit {
  private subscribes = []
  public tablesContent: PatientListInterface[] = []

  patientData: Data
  public helpers = Helpers
  public locations: string[] = []
  public roomValues: { [location: string]: string[] } = {}

  @ViewChild('waitingPaginator', { static: true }) waitingPagination: MdbTablePaginationComponent
  @ViewChild('withDocPaginator', { static: true }) withDocPagination: MdbTablePaginationComponent
  @ViewChild('completedPaginator', { static: true }) completedPagination: MdbTablePaginationComponent
  @ViewChild('testPaginator', { static: true }) testPagination: MdbTablePaginationComponent

  @ViewChild('waitingPatientsTable', { static: true }) waitingTable: MdbTableDirective
  @ViewChild('withDocPatientsTable', { static: true }) withDocTable: MdbTableDirective
  @ViewChild('completedPatientsTable', { static: true }) completedTable: MdbTableDirective
  @ViewChild('testPatientsTable', { static: true }) testTable: MdbTableDirective

  public userRole: string
  public selectedNoLocations: boolean

  public waiting_patients: PreparedPatientListEntity[]
  public telemedicine_patients: PreparedPatientListEntity[]
  public withdoc_patients: PreparedPatientListEntity[]
  public completed_patients: PreparedPatientListEntity[]
  public test_patients: PreparedPatientListEntity[]
  public isDesktopDevice: boolean

  private readonly defaultTableHeaders = defaultTableHeaders

  constructor(
    public stateService: StateService,
    private userService: UserService,
    private navigationService: NavigationService,
    private titleService: Title,
    private changeDetector: ChangeDetectorRef,
    private activeRoute: ActivatedRoute,
    private dataService: DataService,
    private dialogSubscribesService: DialogSubscribesService,
    public notificationService: NotificationsService,
    private alertService: AlertService,
    private corePatientDataService: PatientDataFacadeService,
    private patientDataService: PatientdataService,
    private patientListService: PatientListService
  ) {
    if (activeRoute.snapshot.data.debugMode) {
      this.stateService.app.toggleDebug()
      this.navigationService.navigateToPatients()
    }
    this.stateService.patient.setCurrent(null)
    this.stateService.patient.setViewOnly(false)
    this.stateService.patient.setAssignment(false)
    this.userRole = this.userService.getUserRole
    this.navigationService.clearHistory()
    this.stateService.app.header.setData('Patients list')
    this.titleService.setTitle('Provider Application')
    this.subscribes.push(
      this.dataService.getPatient().subscribe(patient => {
        this.patientData = patient
      })
    )

    const locs = this.userService.userSettings.load()['selectedLocations']

    if (locs) this.locations = locs
    else this.locations = this.userService.getUserData.locations

    this.navigationService.setExitPatientRoute('/patients')

    this.subscribes.push(
      this.userService.userSettings
        .watch()
        .pipe(
          publishReplay(1),
          refCount(),
          distinctUntilChanged(equals),
          filter((settings: any) => !isNil(settings))
        )
        .subscribe(settings => {
          const locations = settings['selectedLocations']
          if (locations) this.locations = locations
          const lastList = this.patientListService.getListLastValue() || []
          const filteredList = lastList.filter((patient: PatientListEntity) => patient.appointment_data.is_telemedicine || this.locations.includes(patient.location_name))
          this.patientListService.updateList(filteredList)
          this.selectedNoLocations = !filteredList.length
          this.initTablesContent()
        })
    )
    this.isDesktopDevice = this.stateService.app.mediaResp().xl.matches
  }

  private static buildClientStatusString(rawStatus: string): string {
    switch (rawStatus) {
      case patientStatusEnum.waiting:
        return 'Waiting'
      case patientStatusEnum.telemedicine:
        return 'Waiting Telemedicine'
      case patientStatusEnum.complete:
        return 'Complete'
      case patientStatusEnum.withDoctor:
        return 'With Provider'
      case patientStatusEnum.registered:
        return 'Registered'
      default:
        return rawStatus
    }
  }

  private static getPatientGroup(patient: PatientListEntity): PatientListGroup {
    const { status: patientStatus, patient_name, appointment_data, telemedicine_mode } = patient

    switch (patientStatus) {
      case patientStatusEnum.complete:
        return 'completed'
      case patientStatusEnum.withDoctor:
        return 'assigned'
      case patientStatusEnum.registered:
      case patientStatusEnum.waiting:
      case patientStatusEnum.inKiosk:
      case patientStatusEnum.telemedicine:
        if (patient_name.match(/(.*Test.*\s.*Test.*)|(test pagejump)/i)) return 'test'
        if (telemedicine_mode === 'MEMD' || appointment_data.is_telemedicine) return 'telemedicine'
        return 'waiting'
      default:
        return null
    }
  }
  private static prepareDoctorOrClerkNameID(data: PatientListEntity): string {
    if (data.doctor_id !== 0) return `${data.doctor_name}`
    if (data.clerk_id !== 0) return `${data.clerk_name}`
    return 'No Provider Found'
  }

  getTableHeaders(patientHeaderType = 'waiting'): PatientTableHeaderInterface[] {
    const headers = clone(this.defaultTableHeaders)
    switch (patientHeaderType) {
      case 'completed':
        return [
          ...headers.slice(0, -3),
          { value: 'treatment_complete', label: 'Completed', sortable: true },
          { value: 'provider', label: 'Provider', sortable: false },
          ...headers.slice(-2)
        ]
      case 'provider':
        return this.userService.getUserData.environment.is_room_active
          ? [...headers.slice(0, -2), { value: 'room', label: 'Exam room', sortable: false }, { value: 'provider', label: 'Provider', sortable: false }, ...headers.slice(-2)]
          : [...headers.slice(0, -2), { value: 'provider', label: 'Provider', sortable: true }, ...headers.slice(-1)]
      case 'telemedicine':
        return concat(
          compose(append({ value: 'appointmentTime', label: 'Appointment Time', sortable: true }), slice(0, -3))(headers),
          slice(6, Infinity, headers)
        ) as PatientTableHeaderInterface[]
      default:
        return this.userService.getUserData.environment.is_room_active
          ? [...headers.slice(0, -2), { value: 'room', label: 'Exam room', sortable: false }, ...headers.slice(-2)]
          : headers
    }
  }

  private sortPatients(list: PatientListEntity[]): void {
    let modifiedList: PreparedPatientListEntity[]

    const isOrderedOrCompleted = (flag: string, completed = false): boolean => {
      if (completed) return flag === OrderStateEnum.COMPLETED
      return flag === OrderStateEnum.ORDERED
    }

    if (Array.isArray(list)) {
      modifiedList = list
        .map(
          (patient: PatientListEntity): PreparedPatientListEntity => {
            // For Wellness Check
            if (patient.status === patientStatusEnum.complete && patient.detail_visit_reason === 'Wellness Check') patient.treatment_complete = patient.kiosk_complete
            return {
              ...patient,
              locationNameToDisplay: patient.location_name.trim().replace(/(\s|^|\W|_|-|$)virtual(\s|^|\W|_|-|$)/i, (match, start, end) => (end ? start : '')),
              clinicName: patient.clinic_name,
              statusString: PatientListContainerComponent.buildClientStatusString(patient.status),
              waitingTime: patient.kiosk_complete ? DateTime.w8TimeFormatter(DateTime.waiting(patient.kiosk_complete)) : 'N/A',
              completedTime: DateTime.w8TimeFormatter(DateTime.waiting(patient.treatment_complete)),
              provider: PatientListContainerComponent.prepareDoctorOrClerkNameID(patient),
              labs_ordered: isOrderedOrCompleted(patient.labs),
              labs_completed: isOrderedOrCompleted(patient.labs, true),
              vitals_ordered: isOrderedOrCompleted(patient.vitals),
              vitals_completed: isOrderedOrCompleted(patient.vitals, true),
              injections_ordered: isOrderedOrCompleted(patient.injections),
              injections_completed: isOrderedOrCompleted(patient.injections, true),
              medications_ordered: isOrderedOrCompleted(patient.medications),
              medications_completed: isOrderedOrCompleted(patient.medications, true),
              patientListGroup: PatientListContainerComponent.getPatientGroup(patient),
              appointmentTime: patient.appointment_data.appointment_datetime || '',
              telemedicineStatus: patient.appointment_data.telemedicine_session_status ? 'awaiting' : patient.appointment_data.notification_sent ? 'notified' : 'offline'
            }
          }
        )
        .filter((patient: PreparedPatientListEntity) => patient.patientListGroup === 'telemedicine' || this.locations.includes(patient.location_name))

      this.selectedNoLocations = !modifiedList.length

      const sortByQuePosition = (patient: PreparedPatientListEntity) => {
        const queuePosition = patient.appointment_data.telemedicine_queue_position
        if (patient.patientListGroup === 'telemedicine' && !isNil(queuePosition)) {
          return queuePosition
        }
        return Infinity
      }

      const sortByRoom = (patient: PreparedPatientListEntity) => {
        return patient.room || 'z'
      }

      const sortByTelemedicineStatus = (patient: PreparedPatientListEntity) => {
        return patient.patientListGroup === 'telemedicine' ? patient.telemedicineStatus : Infinity
      }

      let sortedList: PreparedPatientListEntity[] = sortWith(
        [
          ascend(prop('patientListGroup')),
          ascend(sortByTelemedicineStatus),
          ascend(sortByQuePosition),
          ascend(prop('appointmentTime')),
          ascend(prop('completedTime')),
          ascend(sortByRoom),
          ascend(prop('waitingTime'))
        ],
        rFilter(compose(not, isNil, prop('patientListGroup')))(modifiedList)
      );

      [this.withdoc_patients, sortedList] = splitWhen(compose(not, propEq('patientListGroup', 'assigned')), sortedList);
      [this.completed_patients, sortedList] = splitWhen(compose(not, propEq('patientListGroup', 'completed')), sortedList);
      [this.telemedicine_patients, sortedList] = splitWhen(compose(not, propEq('patientListGroup', 'telemedicine')), sortedList);
      [this.test_patients, sortedList] = splitWhen(compose(not, propEq('patientListGroup', 'test')), sortedList);
      [this.waiting_patients, sortedList] = splitWhen(compose(not, propEq('patientListGroup', 'waiting')), sortedList);

      this.locations.forEach(loc => {
        const rooms: string[] = []
        Object.values(RoomsEnum).forEach(room => rooms.push(room))
        this.roomValues[loc] = rooms
      })

      this.updateRooms(this.telemedicine_patients)
      this.updateRooms(this.waiting_patients)
      this.updateRooms(this.test_patients)
    }
  }

  private updateRooms(patients: PreparedPatientListEntity[]): void {
    patients.forEach(patient => {
      if (this.roomValues[patient.location_name]) {
        this.roomValues[patient.location_name] = this.roomValues[patient.location_name].filter(room => patient.room !== room)
      }
    })
  }

  ngOnInit(): void {
    this.sortPatients(this.activeRoute.snapshot.data.patientsList)
    this.subscribes.push(
      this.patientListService.getList().subscribe(list => {
        this.sortPatients(list)
        setTimeout(() => {
          this.initTablesContent()
        })
      }),
      this.alertService.getAlertsData().subscribe(alerts => {
        this.showAlertsNotifications(alerts)
      })
    )
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe())
    this.changeDetector.detach()
  }

  ngAfterViewInit() {
    this.subscribes.push(
      of(true)
        .pipe(
          delay(1000),
          tap(() => {
            if (this.isPractitionerUserRole && !this.userService.getIsDisclaimerShownOnce) {
              this.dialogSubscribesService.openTheDisclaimerDialog()
              this.patientListService.getPatientList(true)
              this.userService.setIsDisclaimerShownOnce(true)
            }
          })
        )
        .subscribe()
    )

    this.initTablesContent()

    this.changeDetector.detectChanges()
  }

  public get isPractitionerUserRole(): boolean {
    return this.userRole === UserRolesEnum.PRACTITIONER
  }

  public get isPharmacistUserRole(): boolean {
    return this.userRole === UserRolesEnum.PHARMACIST
  }

  public initTablesContent(): void {
    this.tablesContent = [
      {
        patients: this.waiting_patients ? this.waiting_patients : [],
        isHiddenOnEmpty: false,
        panelHeaderLabel: 'Waiting / Registered Patients',
        type: 'waiting',
        isExpanded: true
      },
      {
        patients: this.telemedicine_patients ? this.telemedicine_patients : [],
        isHiddenOnEmpty: false,
        panelHeaderLabel: 'Telemedicine Patients',
        type: 'telemedicine',
        isExpanded: true
      },
      {
        patients: this.withdoc_patients ? this.withdoc_patients : [],
        isHiddenOnEmpty: true,
        panelHeaderLabel: 'Patients with Provider',
        type: 'provider',
        isExpanded: false
      },
      {
        patients: this.completed_patients ? this.completed_patients : [],
        isHiddenOnEmpty: false,
        panelHeaderLabel: 'Completed Patients',
        type: 'completed',
        isExpanded: true
      },
      {
        patients: this.test_patients ? this.test_patients : [],
        isHiddenOnEmpty: true,
        panelHeaderLabel: 'Test Patients',
        type: 'test',
        isExpanded: false
      }
    ]
  }

  private navigateToPatient(patient_id: number, start: string | null): void {
    const url = ['patients', patient_id]
    if (start !== null) url.push(start)
    this.navigationService.navigate(url)
  }

  public openPatient(patientInfo: { patientData: PatientListEntity; viewOnly: boolean; notAssigned: boolean }): void {
    this.userService.setIsTheDisclaimerSuccess(null)
    this.stateService.patient.setViewOnly(patientInfo.viewOnly)

    let assignEmitted = false
    const id = patientInfo.patientData.patient_id

    const getCurrentPatient = start => {
      if (patientInfo.viewOnly) this.userService.setIsTheDisclaimerSuccess(true)
      this.stateService.patient.setCurrent(patientInfo.patientData)
      this.dataService.getPatientData(patientInfo.patientData.patient_id)
      this.subscribes.push(
        this.patientDataService.isPatientLoaded$().subscribe(loaded => {
          if (loaded) {
            this.navigateToPatient(id, start)
          }
        })
      )
    }

    const doAssign = (start: string | null, skipAssign: boolean) => {
      if (!assignEmitted) {
        assignEmitted = true
        this.corePatientDataService.assign(patientInfo.patientData, skipAssign).subscribe(() => {
          getCurrentPatient(start)
        })
      }
    }

    let startPage = null

    if (this.isPractitionerUserRole || this.isPharmacistUserRole) {
      this.userService.setIsDisclaimerShownOnce(true)
      startPage = 'diagnosis'
    }

    doAssign(startPage, patientInfo.notAssigned)
  }

  trackByIndex(index: number, item: any): number {
    return index
  }

  showAlertsNotifications(alertsData: Alert[]): void {
    if (isNil(alertsData)) return
    const stateAlerts = this.userService.getUserData.alerts
    const uncompletedPatients = this.withdoc_patients.concat(this.waiting_patients, this.test_patients, this.telemedicine_patients)

    setTimeout(() => {
      alertsData.forEach(alert => {
        const condition = stateAlerts ? !stateAlerts.some(stateAlert => stateAlert.id === alert.id) : true

        if (this.alertService.checkShowByTarget(this.userRole === UserRolesEnum.PRACTITIONER, alert) && condition) {
          const patient = find<PatientListEntity>(propEq('patient_id', alert.patient))(uncompletedPatients)
          if ((alert.code === 'labsOrdered' || alert.code === 'injectionsOrdered' || alert.code === 'medicationsOrdered') && patient) {
            this.notificationService.error(`Patient ${patient.patient_name} has ${alert.code.replace('Ordered', '')} ordered.`, `Alert Patient ID: ${alert.patient}`)
          } else if (patient) {
            const options = new Configuration()

            this.notificationService.error(`Alert Patient ID: ${alert.patient}. </br>` + alert.message, '', {
              ...options.notificationsConfiguration.error,
              enableHtml: true
            })
          }
        }
      })
      this.userService.setAlerts(alertsData)
    })
  }
}
