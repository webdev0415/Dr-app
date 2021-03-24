import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core';

import 'rxjs/add/observable/of';

import { PaymentInfo } from '../common/models/data.model';
import { PatientListEntity } from '../patient-list/interfaces/patient-list-entity.model';
import { NavigationExtras } from '@angular/router';
import { DiagnosisTabsEnum } from '../common/enums/tabs.enum';
import { ParsedSymptomsState } from '../common/types/parsed-symptoms-state.type';
import { environment } from '../../environments/environment';
import { DevbarPanelViewType } from '../common/types/devbar-panel-view.type';

export interface ExitPatientRoute {
  route: string;
  extras?: NavigationExtras;
}

export interface RouteState {
  history: string[];
  current: string;
  previous?: string;
  position: number;
  undoBack: Subject<any>;
  exitPatientRoute: ExitPatientRoute;
}

export interface MediaResp {
  s: MediaQueryList;
  m: MediaQueryList;
  l: MediaQueryList;
  xl: MediaQueryList;
  xxl: MediaQueryList;
  xxxl: MediaQueryList;
}

export interface EHRLoggedStatus {
  chicagoland: boolean;
  rockford: boolean;
  indiana: boolean;
  wisconsin: boolean;
}

export interface State {
  URLs: {
    apiUrl: string | null,
    serviceUrl: string | null,
    utilityUrl: string | null,
  };
  route: RouteState;
  patient: {
    assignOrViewEvent: Subject<PatientListEntity>;
    unassignEvent: EventEmitter<any>;
    current: BehaviorSubject<PatientListEntity | null>;
    isChanged: BehaviorSubject<boolean>;
    editNotesEvent: Subject<any>;
    assigned: boolean;
    showRoomAssignmentDialog: BehaviorSubject<boolean>;
    prefinalizeEvent: Subject<string[]>;
    finalizeSuccessEvent: EventEmitter<boolean>;
    drugDirectionsComplete: boolean;
    symptomdetailsEvent: Subject<string>;
    reviewed: Subject<string>;
    examReviewed: Subject<boolean>;
    viewOnly: BehaviorSubject<boolean>;
    isTheDisclaimerSuccess: BehaviorSubject<boolean>;
    isDisclaimerShownOnce: boolean;
    paymentAvailable: Subject<boolean>;
    illnessSelected: Array<string>;
    isConfirmDiagnosis: boolean;
    hasIllness: boolean;
    changedVitals: any[];
    paymentInfo: BehaviorSubject<PaymentInfo | null>;
    isPrimary: boolean;
    tabs: {
      wdSubject: BehaviorSubject<number>
      screenings: number;
    };
    visitCreationIssue: boolean;
  };
  app: {
    ehrLoggedStatus: BehaviorSubject<EHRLoggedStatus>;
    mediaResp: MediaResp;
    events: {
      scrollSideContainer: Subject<Event>;
    }
    sideBar: {
      isShown: boolean;
      shownEvent: EventEmitter<boolean>;
      toggleEvent: EventEmitter<boolean>;
    };
    examPanel: {
      toggler: EventEmitter<any>;
      closer: EventEmitter<any>;
      opener: EventEmitter<any>;
    };
    developmentBar: {
      toggler: EventEmitter<DevbarPanelViewType>;
    }
    header: {
      data: BehaviorSubject<any>;
    };
    workers: {
      wval: number;
      worker: BehaviorSubject<number>;
      loadingTotal: BehaviorSubject<number>;
      loadedNow: BehaviorSubject<number>;
      whatLoading: Subject<string>;
      whatLoaded: Subject<string>;
    };
    pdf: {
      PDFEvent: Subject<string | null>;
      isPdfClosed: EventEmitter<void>;
      isPdfOpen: boolean;
    };
    customUserMessage: BehaviorSubject<string | string[] | null>;
    debug: boolean,
    debugToggleEvent: EventEmitter<boolean>;
    dialogStatus: BehaviorSubject<boolean>;
    overlays: string[];
    workingDiagnosisView: BehaviorSubject<string>;
    parsedSymptomsState: ParsedSymptomsState;
    ddx: boolean;
    additionalDischarge: boolean;
  };
  patientsList: {
    patientArrivedEvent: EventEmitter<PatientListEntity>;
    patientCompletedEvent: EventEmitter<PatientListEntity>;
  };
}

export const initialState: State = {
  URLs: {
    apiUrl: environment['apiDomain'],
    serviceUrl: environment['serviceDomain'],
    utilityUrl: environment['utilityDomain'],
  },
  route: {
    current: '',
    previous: '',
    history: [],
    position: 0,
    undoBack: new Subject<any>(),
    exitPatientRoute: {
      route: '/patients',
      extras: {}
    }
  },
  patient: {
    assignOrViewEvent: new Subject<PatientListEntity>(),
    unassignEvent: new EventEmitter(),
    current: new BehaviorSubject<PatientListEntity | null>(null),
    isChanged: new BehaviorSubject<boolean>(false),
    editNotesEvent: new Subject(),
    assigned: false,
    showRoomAssignmentDialog: new BehaviorSubject<boolean>(true),
    prefinalizeEvent: new Subject<any[]>(),
    finalizeSuccessEvent: new EventEmitter(),
    drugDirectionsComplete: false,
    symptomdetailsEvent: new Subject<string>(),
    reviewed: new BehaviorSubject<string>('reviewed'),
    examReviewed: new BehaviorSubject<boolean>(false),
    viewOnly: new BehaviorSubject<boolean>(false),
    isTheDisclaimerSuccess: new BehaviorSubject<boolean>(null),
    isDisclaimerShownOnce: false,
    paymentAvailable: new Subject<boolean>(),
    illnessSelected: [],
    isConfirmDiagnosis: false,
    hasIllness: true,
    changedVitals: [],
    paymentInfo: new BehaviorSubject<PaymentInfo>(null),
    isPrimary: false,
    tabs: {
      wdSubject: new BehaviorSubject<number>(DiagnosisTabsEnum.WORKING_DIAGNOSIS),
      screenings: 0
    },
    visitCreationIssue: false
  },
  app: {
    ehrLoggedStatus: new BehaviorSubject<EHRLoggedStatus>({
      chicagoland: false,
      rockford: false,
      indiana: false,
      wisconsin: false
    }),
    mediaResp: {
      s: null,
      m: null,
      l: null,
      xl: null,
      xxl: null,
      xxxl: null
    },
    events: {
      scrollSideContainer: new Subject<Event>()
    },
    sideBar: {
      isShown: false,
      shownEvent: new EventEmitter<boolean>(),
      toggleEvent: new EventEmitter<boolean>()
    },
    examPanel: {
      toggler: new EventEmitter(),
      opener: new EventEmitter(),
      closer: new EventEmitter()
    },
    developmentBar: {
      toggler: new EventEmitter()
    },
    header: {
      data: new BehaviorSubject(null)
    },
    workers: {
      wval: 0,
      worker: new BehaviorSubject(0),
      loadingTotal: new BehaviorSubject<number>(0),
      loadedNow: new BehaviorSubject<number>(0),
      whatLoading: new Subject<string>(),
      whatLoaded: new Subject<string>()
    },
    pdf: {
      PDFEvent: new Subject(),
      isPdfClosed: new EventEmitter<void>(),
      isPdfOpen: false
    },
    customUserMessage: new BehaviorSubject<string | null>(null),
    debug: false,
    debugToggleEvent: new EventEmitter(),
    dialogStatus: new BehaviorSubject<boolean>(false),
    overlays: [],
    workingDiagnosisView: new BehaviorSubject<string>('contributortable'),
    parsedSymptomsState: null,
    ddx: !environment.forProd,
    additionalDischarge: true
  },
  patientsList: {
    patientArrivedEvent: new EventEmitter<PatientListEntity>(),
    patientCompletedEvent: new EventEmitter<PatientListEntity>()
  }
};
