import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { StateResetAll } from 'ngxs-reset-plugin';


import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';
import { LazyService } from 'services/lazy.service';
import { StateService } from 'services/state.service';
import { TreatmentsService } from 'treatments/treatments.service';
import { Data } from '../../../../common/models/data.model';
import { Vitals } from '../../../../common/models/vitals.model';
import { LabsService } from '../../../../labs/services/labs.service';
import { NotificationsService, PatientdataService } from '../../../../services';
import { PATIENT_ID_TOKEN } from '../../../../tokens/patient-id.token';
import { ClearTreatmentsEvent } from '../../../../treatments/store-events/clear-treeatments.event';
import { ForRegisteredPatientAlert, registeredPatientAlertRequiredVitals } from './main/constants';
import { UserService } from 'user/user.service';


@Component({
  selector: 'pa-patientspace',
  templateUrl: './patientspace.component.html',
  styleUrls: ['./patientspace.component.scss'],
  providers: [
    { provide: PATIENT_ID_TOKEN, useFactory: (stateService: StateService) => stateService.patient.getCurrentId(), deps: [StateService] },
  ]
})
export class PatientSpaceComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('main') private mainSection: ElementRef;
  @ViewChild('exampanel') exampanel: MatSidenav;
  @ViewChild('paExampanel') paExampanel;

  private readonly activatedComponents: Map<string, Function>;
  private subscribes: Subscription[] = [];
  public _activatedComponent: BehaviorSubject<Function | null> = new BehaviorSubject<Function|null>(null);
  private _isShowBottomSpace: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public examPanelSection: string;
  public viewOnly: boolean;
  private patientListEntity: PatientListEntity;

  readonly isPICBusiness: boolean;

  ehrLocations = ['chicagoland', 'rockford', 'indiana', 'wisconsin'];
  ehrLoggedStatus = {
    chicagoland: false,
    rockford: false,
    indiana: false,
    wisconsin: false
  }

  public get PEStore() {
    return this.store;
  }

  constructor(private stateService: StateService,
              private lazyService: LazyService,
              private renderer: Renderer2,
              private router: Router,
              private route: ActivatedRoute,
              private viewportScroller: ViewportScroller,
              private store: Store,
              private dialogSubscribesService: DialogSubscribesService,
              private treatmentsService: TreatmentsService,
              private cdRef: ChangeDetectorRef,
              private labsService: LabsService,
              private patientDataService: PatientdataService,
              private notificationsService: NotificationsService,
              private userService: UserService) {
    this.subscribes.push(this.stateService.app.examPanel.getStateEv().toggler.subscribe(() => {
      if (this.exampanel) this.exampanel.toggle();
    }));

    this.isPICBusiness = this.userService.isPICModeBusiness;

    this.subscribes.push(this.stateService.app.examPanel.getStateEv().opener.subscribe((type) => {
      if (this.exampanel && !this.exampanel.opened) {
        this.examPanelSection = type;
        this.exampanel.open();
      }
    }));

    this.subscribes.push(this.stateService.app.examPanel.getStateEv().closer.subscribe(() => {
      if (this.exampanel && this.exampanel.opened) this.exampanel.close();
    }));

    this.activatedComponents = new Map<string, Function>();
    this.subscribes.push(this.stateService.patient.getViewOnly().subscribe(result => this.viewOnly = result));

    this.subscribes.push(
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
            const key = this.currentChildPath;
            if (this.isCurrentChildShouldReuse && this.activatedComponents.has(key)) {
              this._activatedComponent.next(this.activatedComponents.get(key));
            }
          }
        ));

    this.subscribes.push(this.stateService.patient.getCurrent().subscribe((currentPatient: PatientListEntity) => {
      this.patientListEntity = currentPatient;
      for (let location of this.ehrLocations) {
        this.stateService.app.getEhrLoggedStatus(location).subscribe(logged => this.ehrLoggedStatus[location] = logged);
      }
    }));
    this.subscribes.push(this.stateService.patient.getPatientArrivedEvent()
      .subscribe((arrivedPatient: PatientListEntity) => this.dialogSubscribesService.patientUnassigned(arrivedPatient, this.patientListEntity)));
  }

  ehrLogin(location: string) {
    if (!this.ehrLoggedStatus[location]) {
      this.dialogSubscribesService.showEhrAuthModal(location).subscribe();
    }
  }

  private get currentChildPath(): string {
    return this.route.snapshot.firstChild.routeConfig.path;
  }

  private get isCurrentChildShouldReuse(): boolean {
    const data = this.route.snapshot.firstChild.data;
    return 'shouldReuse' in data ? data.shouldReuse : false;
  }

  private scrollerSubscriber(): void {
    const pageContainer =  this.mainSection.nativeElement.firstChild;
    this.subscribes.push(this.router.events.pipe(
      filter(event => event instanceof Scroll)).subscribe((event: Scroll) => {
        if (event.position) {
          pageContainer.scrollTo(...event.position);
        } else if (event.anchor) {
          this.viewportScroller.scrollToAnchor(event.anchor);
        } else {
          pageContainer.scrollTo(0, 0);
        }
    }));
  }

  /**
   * Set current active sub-component on activated patient route
   * @param {Function} instanceComponent
   */
  public onActivateComponent(instanceComponent: Function | null): void {
    if (this.isCurrentChildShouldReuse) {
      this.activatedComponents.set(this.currentChildPath, instanceComponent);
    }
    this._activatedComponent.next(instanceComponent);
  }

  /**
   * Set show or hidden bottom space on change show in current active sub-component
   * @param {boolean} state
   */
  public onChangeShowBottomSpace(state: boolean): void {
    this.isShowBottomSpace = state;
  }

  ngOnInit(): void {
    this.subscribes.push(
      this.patientDataService.getPatient()
        .pipe(filter(data => !!data), first())
        .subscribe((patient) => {
          this.labsService.initPatientLabs(patient.triage);
          this.showRegisteredAlert(patient);
        })
    );
  }

  ngAfterViewInit(): void {
    this.scrollerSubscriber();
  }

  ngOnDestroy() {
    this.lazyService.revokeBlobURLs();
    this.store.dispatch(new StateResetAll());
    this.treatmentsService.dispatch(new ClearTreatmentsEvent());
    this.stateService.patient.setCurrent(null);
    this.subscribes.forEach(s => s.unsubscribe());
    this.cdRef.detach();
  }

  public set isShowBottomSpace(state: boolean) { this._isShowBottomSpace.next(state); }
  public get isShowBottomSpace$(): Observable<boolean> { return this._isShowBottomSpace.asObservable(); }
  public get activatedComponent$(): Observable<Function | null> { return this._activatedComponent.asObservable(); }

  private showRegisteredAlert(patient: Data): void {
    const vitals = new Vitals(patient.measurements);
    if (registeredPatientAlertRequiredVitals.some(item => {
      return !vitals[item];
    }))
      this.notificationsService.warning(ForRegisteredPatientAlert['message'], ForRegisteredPatientAlert['title']);
  }
}
