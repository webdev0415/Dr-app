import { AnswerType } from '../types';

export const albertsonsQuestions: { [key: string]: { question: string; es_question: string, answerType: AnswerType } } = {
  'ALBERTSONS-1': {
    question: 'Has the pharmacy you expect to use issue contraceptives to you before?',
    es_question: '¿La farmacia que espera usar le suministra anticonceptivos antes?',
    answerType: 'boolean'
  },
  'ALBERTSONS-2': {
    question: 'Do you want to continue to use your current contraceptive?',
    es_question: '¿Desea continuar usando su anticonceptivo actual?',
    answerType: 'boolean'
  },
  'ALBERTSONS-3': {
    question: 'How many doses of the HPV immunization have you had?',
    es_question: '¿Cuántas dosis de la vacuna contra el VPH ha recibido?',
    answerType: 'score'
  },
  'ALBERTSONS-4': {
    question: 'Do you have any birth defects that might be related to a UTI?',
    es_question: '¿Tiene algún defecto congénito que pueda estar relacionado con una infección urinaria?',
    answerType: 'boolean'
  },
  'ALBERTSONS-5': {
    question: 'Is your diabetes under control?',
    es_question: '¿Su diabetes está bajo control?',
    answerType: 'boolean'
  },
  'ALBERTSONS-6': {
    question: 'Have you received more than 2 inhalers written by a pharmacist in the last 12 months?',
    es_question: '¿Ha recibido más de 2 inhaladores escritos por un farmacéutico en los últimos 12 meses?',
    answerType: 'boolean'
  },
  'ALBERTSONS-7': {
    question: 'Have you used an asthma rescue inhaler more than twice a week for the last 4 weeks?',
    es_question: '¿Ha usado un inhalador de rescate para el asma más de dos veces por semana durante las últimas 4 semanas?',
    answerType: 'boolean'
  },
  'ALBERTSONS-8': {
    question: 'Have you received more than 2 rescue inhalers in the last month for reasons other than travel or misplaced or lost medication?',
    es_question: '¿Ha recibido más de 2 inhaladores de rescate en el último mes por razones distintas a viajes o extravío o pérdida de medicamentos?',
    answerType: 'boolean'
  },
  'ALBERTSONS-9': {
    question: 'Do you have a cold sore that has not healed from a previous episode?',
    es_question: '¿Tiene un herpes labial que no se ha curado de un episodio anterior?',
    answerType: 'boolean'
  },
  'ALBERTSONS-10': {
    question: 'Have you had more than than 6 cold sores in the last 12 months?',
    es_question: '¿Ha tenido más de 6 herpes labial en los últimos 12 meses?',
    answerType: 'boolean'
  },
  'ALBERTSONS-11': {
    question: 'Have you tried medications for cold sores in the past?', es_question: '¿Has probado medicamentos para el dolor en el pasado?',
    answerType: 'boolean'
  },
  'ALBERTSONS-12': {
    question: 'What medications have you tried?', es_question: '¿Qué medicamentos has probado?',
    answerType: 'text'
  },
  'ALBERTSONS-13': {
    question: 'Have you ever had an adverse reaction to previous flu shots?',
    es_question: '¿Alguna vez ha tenido una reacción adversa a las vacunas contra la gripe anteriores?',
    answerType: 'boolean'
  },
  'ALBERTSONS-14': {
    question: 'Is anyone in your household being treated for Flu?',
    es_question: '¿Alguien en su hogar recibe tratamiento para la gripe?',
    answerType: 'boolean'
  },
  'ALBERTSONS-15': {
    question: 'Do you currently have any flu symptoms?',
    es_question: '¿Actualmente tiene algún síntoma de gripe?',
    answerType: 'boolean'
  },
  'ALBERTSONS-16': {
    question: 'Flu Shot in last 30 days',
    es_question: 'Vacuna contra la gripe en los últimos 30 días',
    answerType: 'boolean'
  },
  'ALBERTSONS-17': {
    question: 'Have you had an office visit with a health provider in which you assessed your asthma control in the last 15 months?',
    es_question: '¿Ha tenido una visita al consultorio con un proveedor de salud en el que valuó su control del asma en los últimos 15 meses?',
    answerType: 'boolean'
  },
  'ALBERTSONS-18': {
    question: 'Have you been taking antibiotics in the last 30 days?',
    es_question: '¿Has estado tomando antibióticos en los últimos 30 días?',
    answerType: 'boolean'
  },
  'ALBERTSONS-19': {
    question: 'Do you have a current prescription for Asthma medication?',
    es_question: 'ВїTiene una receta actual para medicamentos para el asma?',
    answerType: 'boolean'
  },
  'ALBERTSONS-20': {
    question: 'Do you currently have sores any place other than around your mouth and lips?',
    es_question: '',
    answerType: 'text'
  },
  'ALBERTSONS-21': {
    question: 'Do you have any allergies or adverse reactions to medications?',
    es_question: '',
    answerType: 'text'
  },
  'ALBERTSONS-22': {
    question: 'What medications?',
    es_question: '',
    answerType: 'text'
  },
  'ALBERTSONS-23': {
    question: 'Are you allergic to any of the following; acyclovir, penciclovir or valacyclovir?',
    es_question: '',
    answerType: 'text'
  },
};
