export const NetworkRoutes = {
  // API&Services hosts
  api: {
    dev: 'https://testing.advinow/net/api/',
    pilot: 'https://pilot.advinow.net/api/',
    prod: 'https://production.advinow.com/api/',
  },
  services: {
    dev: 'https://devservices.advinow.net/',
    pilot: 'https://services.advinow.net/',
    prod: 'https://services.advinow.net/'
  },

  // Sentry
  sentry: 'https://95900c1cfa9c4199be87a3d8ab14fdb2@sentry.io/1227349',

  // Endpoints
  endpoints: {
    services: {
      treatmentTypes: '2070Services/treatment/types',
      symptomGorups: '2070Services/drapp/template/symptomgroups',
      bodyParts: '2070Services/es/generic/bodyparts/all',
      icdNodeSearch: 'ICD10NodeSearch/nodeSearch/',
      icdCodeSearch: 'ICD10NodeSearch/idc10code/',
      nlpSourceInfo: '2070Services/mica/api/sourceinfo/'
    },
    api: {
      auth: {
        login: 'auth/user_login/',
        logout: 'auth/user_logout/'
      },
      webPushNotifications: 'auth/web_push_notifications/',
      patients: 'patients',
      patient: {
        data: '/visit-data',
        audits: '/audit_event',
        assign: '/assign',
        unassign: '/unassign',
        restore: '/restore',
        pdf: '/temp-notes',
        final: '/doctors-notes',
        labs: '/labs',
        updateVitals: '/measurements',
        paymentInfo: '/payment_info',
        rerunTriage: '/rerun_triage'
      },
    }
  }
};

export const ICD10Link = 'https://www.icd10data.com/ICD10CM/Codes';

export const notLoggedUrls = [
  'auth/user_logout',
  'dr_app/log',
  'auth/web_push_notifications',
  'assets/versions.json'
];

export const handlerUrls = {
  removeAssign: ['/remove_assign'],
  assign: ['assign'],
  assignRoom: ['assign_room'],
  unassign: ['unassign'],
  changePassword: ['new_password', 'password_change'],
  resetPassword: ['users/reset_password'],
  other: ['/audit_event', 'auth/web_push_notifications/'],
  labs: ['/labs'],
  login: ['auth/user_login', 'api/auth/sso_session/extension'],
  ehrAuth: ['ehr_credential_verification', 'pubkey'],
  utilities: ['generate-hpi', 'hpi-summary'],
  nodeSearch: ['ICD10NodeSearch'],
  services: ['2070Services', 'RESTfulIllness'],
  notesUpload: ['notes/final'],
  documentUpload: ['behavior', 'return_to_work', 'discharge'],
  procedures: ['medications', 'injections'],
  rerunDE: ['health_history', 'rerun_triage'],
  treatments: ['treatments', 'rerun_te'],
  measurements: ['measurements'],
  patientsSearch: ['patient/search', 'visits'],
  visitData: ['visit-data'],
  illness: ['illness'],
  patientDataModification: ['physical_exam'],
  ddx: ['generate-ddx'],
  alerts: ['alerts'],
  signature: ['signature'],
  // todo: change to API endpoint
  cntApiDemo: ['https://cntapidemo.myhealthfeed.com'],
  recommendationEngine: ['referal'],
  telemedecine: ['telemedicine']
};
