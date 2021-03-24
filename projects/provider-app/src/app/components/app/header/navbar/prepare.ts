import { NavBarUtils } from './utils';
import { pagesTitles } from 'static/static.pages';
import { NavList } from './interfaces';
import { DiagnosisTabsEnum } from 'common/enums/tabs.enum';


export const getNavBarLinks = (instanceComponent: NavBarUtils): NavList => {
  return {
    summary: {
      name: 'Overview',
      url: 'diagnosis',
      forViewOnly: true,
      viewForRoles: [
        'practitioner',
        'pharmacist'
      ],
      exact: true,
      sections: [],
      expandable: false,
      onClickCallback: () => {
        if (instanceComponent.stateService.patient.tabs.getWorkingDiagnosis() !== DiagnosisTabsEnum.PHARMACIST_SUMMARY) {
          instanceComponent.stateService.app.setWorkingDiagnosisView('contributortable');
          instanceComponent.stateService.patient.tabs.setWorkingDiagnosis(DiagnosisTabsEnum.WORKING_DIAGNOSIS);
        }
      },
      activeCallback: () => {
        return (instanceComponent.stateService.patient.tabs.getWorkingDiagnosis() === DiagnosisTabsEnum.WORKING_DIAGNOSIS
          || instanceComponent.stateService.patient.tabs.getWorkingDiagnosis() === DiagnosisTabsEnum.PHARMACIST_SUMMARY) &&
          instanceComponent.navigationService.routeState.current.includes('diagnosis');
      },
      icon: 'clinic-medical',
      tooltip: 'Patient Overview'
    },
    patientData: {
      name: 'Patient Data',
      url: 'patient-data',
      forViewOnly: true,
      viewForRoles: [
        'practitioner',
        'office_clerk',
        'operations_manager'
      ],
      sections: [],
      exact: true,
      expandable: false,
      activeCallback: () => {
        return instanceComponent.navigationService.routeState.current.includes('patient-data');
      },
    },
    hpi: {
      name: pagesTitles.symptoms,
      url: 'symptoms',
      exact: true,
      viewForRoles: ['pharmacist'],
      forViewOnly: true
    },
    documents: {
      name: 'Documents',
      forViewOnly: true,
      viewOnly: true,
      viewForRoles: [
        'office_clerk',
        'operations_manager'
      ],
      sections: [
        {
          name: 'Discharge Notes',
          url: ['docs', 'practitioner'],
          queryParamsCallback: () => {
            return {
              section: 'discharge'
            };
          },
          forViewOnly: true,
          exact: true
        },
        {
          name: 'Return To Work/School',
          url: ['docs', 'practitioner'],
          queryParamsCallback: () => {
            return {
              section: 'authorization'
            };
          },
          forViewOnly: true,
          exact: true
        },
        {
          name: 'Sports Physical Exam',
          url: ['docs', 'practitioner'],
          queryParamsCallback: () => {
            return {
              section: 'sports'
            };
          },
          forViewOnly: true,
          exact: true
        },
        {
          name: 'Receipt',
          url: ['docs', 'practitioner'],
          queryParamsCallback: () => {
            return {
              section: 'receipt'
            };
          },
          forViewOnly: true,
          exact: true,
          showCallback: () => instanceComponent.paymentAvailable
        },
        {
          name: 'Final Provider Notes',
          forViewOnly: true,
          exact: true,
          disabledCallback: () => {
            return instanceComponent.isWellnessReportVisitReason();
          },
          onClickCallback: instanceComponent.finalNotes
        }
      ],
      exact: true,
      expandable: true
    },
    visitData: {
      name: 'Visit Data',
      forViewOnly: true,
      viewForRoles: [
        'practitioner',
        'office_clerk',
        'operations_manager'
      ],
      sections: [
        {
          name: pagesTitles.symptoms,
          url: 'symptoms',
          forViewOnly: true,
          viewForRoles: [
            'practitioner',
            'pharmacist'
          ],
          exact: false
        },
        {
          name: pagesTitles.physicalExam,
          url: 'vm',
          forViewOnly: true,
          viewForRoles: [
            'practitioner',
            'office_clerk',
            'operations_manager'
          ],
          exact: false
        }
      ],
      exact: false,
      expandable: true
    },
    procedures: {
      name: 'Local Procedures',
      forViewOnly: true,
      viewForRoles: [
        'practitioner',
        'office_clerk',
        'operations_manager'
      ],
      icon: 'scalpel-path',
      tooltip: 'Local Procedures',
      sections: [
        {
          name: 'Injections',
          url: ['procedures', 'injections'],
          forViewOnly: true,
          viewForRoles: [
            'practitioner',
            'office_clerk',
            'operations_manager'
          ],
          icon: 'syringe',
          tooltip: 'Injections',
          exact: false
        },
        {
          name: 'Medications',
          url: ['procedures', 'medications']                                                                                                                                  ,
          forViewOnly: true,
          viewForRoles: [
            'practitioner',
            'office_clerk',
            'operations_manager'
          ],
          icon: 'pills',
          tooltip: 'Medications',
          exact: false
        }
      ],
      exact: false,
      expandable: true
    },
    orderLabs: {
      name: 'Labs',
      url: 'order-labs',
      forViewOnly: true,
      viewForRoles: [
        'practitioner'
      ],
      icon: 'vial',
      tooltip: 'Labs',
      exact: true,
      sections: [],
      expandable: false
    },
    labs: {
      name: 'Labs',
      url: 'labs',
      forViewOnly: false,
      viewForRoles: [
        'office_clerk',
        'operations_manager'
      ],
      icon: 'vial',
      tooltip: 'Labs',
      exact: false,
      sections: [],
      expandable: false
    },
    treatments: {
      name: 'Treatments',
      url: 'treatments',
      forViewOnly: true,
      viewForRoles: [
        'practitioner'
      ],
      icon: 'clipboard-prescription',
      exact: true,
      sections: [],
      expandable: false,
      disabledCallback: () => {
        return !instanceComponent.diagnosisConfirmed;
      },
      onClickCallback: () => {
        instanceComponent.navigateToTreatments();
      },
      activeCallback: () => {
        return instanceComponent.navigationService.routeState.current.includes('treatments');
      }
    },
    surveys: {
      name: pagesTitles.surveys,
      url: ['docs', 'surveys'],
      forViewOnly: true,
      viewForRoles: [
        'practitioner'
      ],
      exact: true
    },
    doctorNotes: {
      name: 'Provider Notes',
      forViewOnly: true,
      viewForRoles: [
        'practitioner',
        'pharmacist'
      ],
      icon: 'pen-alt',
      tooltip: 'Provider Notes',
      exact: false,
      expandable: true,
      sections: [
        {
          name: instanceComponent.viewOnly ? 'View' : 'Add',
          forViewOnly: true,
          viewOnly: instanceComponent.viewOnly,
          viewForRoles: [
            'practitioner'
          ],
          exact: false,
          onClickCallback: instanceComponent.editDrNotes,
        },
        {
          name: 'Review',
          forViewOnly: false,
          viewOnly: false,
          viewForRoles: [
            'practitioner'
          ],
          exact: true,
          url: ['docs', 'practitioner'],
          queryParamsCallback: () => {
            return {
              section: 'summary'
            };
          },
          disabledCallback: () => {
            return instanceComponent.isWellnessReportVisitReason();
          }
        },
        {
          name: 'Final Provider Notes',
          forViewOnly: true,
          viewOnly: true,
          viewForRoles: [
            'practitioner',
            'pharmacist'
          ],
          exact: false,
          onClickCallback: instanceComponent.finalNotes,
          disabledCallback: () => {
            return instanceComponent.isWellnessReportVisitReason();
          }
        }
      ]
    },
    exit: {
      name: 'Exit Patient File',
      forViewOnly: true,
      viewForRoles: ['practitioner', 'office_clerk', 'operations_manager', 'pharmacist'],
      exact: true,
      ignoreQueryParams: true,
      expandable: false,
      sections: [],
      onClickCallback: () => {
        instanceComponent.navigationService.navigateToPatients();
      },
      icon: 'sign-out',
      tooltip: 'Exit Patient File'
    }
  };
};
