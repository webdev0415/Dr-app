/*****************************
 * app.config
 * Package and class imports
 ***************************/


import { Injectable } from '@angular/core';

import { AvailableLanguageTypesEnum } from './common/enums/available-language-types.enum';
import { Translation } from './common/models/translation.model';
import { environment } from '../environments/environment';

/***********************
 * Class declaration
 **********************/

@Injectable()
export class Configuration {

    public readonly notificationsConfiguration = {
    info: {
      actionButton: '',
      closeButton: false,
      timeOut: 0,
      enableHtml: false,
      extendedTimeOut: 5000,
      progressBar: true,
      toastClass: 'toast-notification',
      tapToDismiss: true
    },
    success: {
      actionButton: '',
      closeButton: false,
      timeOut: 10000,
      enableHtml: false,
      extendedTimeOut: 5000,
      progressBar: true,
      toastClass: 'toast-notification',
      tapToDismiss: true
    },
    warning: {
      actionButton: '',
      closeButton: false,
      timeOut: 10000,
      enableHtml: false,
      extendedTimeOut: 5000,
      progressBar: true,
      toastClass: 'toast-notification',
      tapToDismiss: true
    },
    error: {
      actionButton: '',
      closeButton: true,
      timeOut: 0,
      enableHtml: false,
      extendedTimeOut: 0,
      progressBar: true,
      toastClass: 'toast-notification',
      tapToDismiss: false
    }
  };

  public NetworkConfiguration = {
    apiVersion: 'v2',
    retriesOnFail: 0
  };

  public authorizeWorkTranslationList: Translation[] = [
        {
            selector: '#authorizationHeader',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Autorización para regresar al trabajo / escuela'
        },
        {
            selector: '#authorizationHeader',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'Authorization for Return to Work/School'
        },
        {
            selector: '#treatmentDate strong.name',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Fecha de tratamiento'
        },
        {
            selector: '#treatmentDate strong.name',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'Treatment Date:'
        },
        {
            selector: 'label[for="work"]',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Trabajo'
        },
        {
            selector: 'label[for="work"]',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'Work'
        },
        {
            selector: 'label[for="school"]',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Escuela'
        },
        {
            selector: 'label[for="school"]',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'School'
        },
        {
            selector: 'label[for="doNotFrom"]',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Desde:'
        },
        {
            selector: 'label[for="doNotFrom"]',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'From:'
        },
        {
            selector: 'label[for="doNotTo"]',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'A:'
        },
        {
            selector: 'label[for="doNotTo"]',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'To:'
        },
        {
            selector: '#notToGo',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'No vayas a'
        },
        {
            selector: '#notToGo',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'Do not go to'
        },
        {
            selector: 'label[for="limitedFrom"]',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Desde:'
        },
        {
            selector: 'label[for="limitedFrom"]',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'From:'
        },
        {
            selector: 'label[for="limitedTo"]',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'A:'
        },
        {
            selector: 'label[for="limitedTo"]',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'To:'
        },
        {
            selector: '#limited-duty',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Limitaciones de trabajo o trabajo limitado'
        },
        {
            selector: '#limited-duty',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'Limited Duty or Work Restrictions'
        },
        {
            selector: '#restrictions-notes',
            languageKey: AvailableLanguageTypesEnum.SPANISH,
            term: 'Notas:'
        },
        {
            selector: '#restrictions-notes',
            languageKey: AvailableLanguageTypesEnum.ENGLISH,
            term: 'Notes:'
        }
    ];

  public dischargeNoteTranslationList: Translation[] = [
    {
      selector: '#dischargeTitle',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Indicaciones de Egreso'
    },
    {
      selector: '#dischargeTitle',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Discharge Instructions'
    },
    {
      selector: '#prescribed_instructions',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: `Medicamentos recetados: Consulte con su médico cualquier duda sobre los medicamentos prescritos
             y lea la Información General relacionada con el uso del medicamento impreso con su prescripción una vez que sea surtida.`

    },
    {
      selector: '#prescribed_instructions',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: `Medications Prescribed: Please check with your physician regarding medication orders and
      refer to General Information related to Medication Use printed along with your prescriptions once they are
      filled.`
    },
    {
      selector: '#diet',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Dieta / Nutrición: '
    },
    {
      selector: '#diet',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Diet/Nutrition:'
    },
    {
      selector: '#dischargeDisposition',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Condiciones de Egreso'
    },
    {
      selector: '#dischargeDisposition',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Discharge Disposition: '
    },
    {
      selector: '#homeMedications',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Medicamentos Caseros: '
    },
    {
      selector: '#homeMedications',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Home Medications: '
    },
    {
      selector: '#instructions strong.name',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Instrucciones especiales de medicación '
    },
    {
      selector: '#instructions strong.name',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Special Medication Instructions:'
    },
    {
      selector: 'label[for="food_med_provided"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Instrucciones de alimentos / medicación proporcionados? '
    },
    {
      selector: 'label[for="food_med_provided"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Food/Medication instructions provided'
    },
    {
      selector: '#smokingStatus',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Tabaco / Fumar Estado: '
    },
    {
      selector: '#smokingStatus',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Tobacco/Smoking Status: '
    },
    {
      selector: 'label[for="patient_given_nfo_quit"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Información dada por el paciente para dejar de fumar '
    },
    {
      selector: 'label[for="patient_given_nfo_quit"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Patient given information on quitting'
    },
    {
      selector: 'label[For="conditions_given"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Folletos específicos de la condición dados'
    },
    {
      selector: 'label[For="conditions_given"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Condition specific handouts given'
    },
    {
      selector: '#selectedNeeds',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'En función de sus necesidades individuales, ha seleccionado lo siguiente: '
    },
    {
      selector: '#selectedNeeds',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Based on your individual needs you have selected the following:'
    },
    {
      selector: '#homeHealthAgencyName strong.name',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Nombre de la Agencia de Salud en el Hogar: '
    },
    {
      selector: '#homeHealthAgencyName strong.name',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Home Health Agency Name:'
    },
    {
      selector: '#hhaPhoneNumber',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'El número de teléfono de esta agencia es '
    },
    {
      selector: '#hhaPhoneNumber',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'The phone number for this agency is '
    },
    {
      selector: '#no_hhaPhoneNumber',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Por favor, póngase en contacto con este número si no se comunica con usted en las próximas 24 horas.'
    },
    {
      selector: '#no_hhaPhoneNumber',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Please contact this number if you are not contacted in the next 24 hours.'
    },
    {
      selector: '#equipment strong.name',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Equipo: '
    },
    {
      selector: '#equipment strong.name',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Equipment: '
    },
    {
      selector: '#equipmentProvidedBy span',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Su equipo médico será provisto por: '
    },
    {
      selector: '#equipmentProvidedBy span',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Your medical equipment will be provided by:'
    },
    {
      selector: 'label[for="equipmentPhone"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'El número de teléfono de esta agencia es'
    },
    {
      selector: 'label[for="equipmentPhone"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'The phone number for this agency is'
    },
    {
      selector: 'label[for="equipmentProvidedDate"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Se espera la entrega de este equipo en este <br />fecha:'
    },
    {
      selector: 'label[for="equipmentProvidedDate"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Delivery of this equipment is expected on this <br />date:'
    },
    {
      selector: '#not_arrived',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Si no ha llegado, contáctese con el número anterior.'
    },
    {
      selector: '#not_arrived',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'If it has not arrived, contact the above number.'
    },
    {
      selector: '#understand_care strong.name',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Entiendo las pautas para mi cuidado: '
    },
    {
      selector: '#understand_care strong.name',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'I understand the guidelines for my care: '
    },
    {
      selector: '#discharge_articles strong.name',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Artículos de descarga: '
    },
    {
      selector: '#discharge_articles strong.name',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Discharge Articles: '
    },
    {
      selector: 'label[for="responsiblePerson"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Persona responsable'
    },
    {
      selector: 'label[for="responsiblePerson"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Responsible Person'
    },
    {
      selector: 'label[for="rp_date"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Fecha'
    },
    {
      selector: 'label[for="rp_date"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Date'
    },
    {
      selector: 'label[for="dr_date"]',
      languageKey: AvailableLanguageTypesEnum.SPANISH,
      term: 'Fecha'
    },
    {
      selector: 'label[for="dr_date"]',
      languageKey: AvailableLanguageTypesEnum.ENGLISH,
      term: 'Date'
    },
  ];
}
