/*******************************
 *  patient-list-table-entity.model
 *******************************/

import { EhrStateEnum } from '../ehr-state.enum';
import { TelemedicineModeEnum } from '../telemedicine-mode.enum';

/******************************
  * Class declaration
  *****************************/

export interface PatientListEntity {
  patient_id: number;
  location_id: number;
  kiosk: string;
  doctor_name: string;
  location_name: string;
  clinic_name: string;
  session_create: string;
  treatment_complete: string;
  status: string;
  detail_visit_reason: string;
  kiosk_complete: string;
  patient_name: string;
  gender: string;
  doctor_id: number;
  labs: string;
  vitals: string;
  injections: string;
  medications: string;
  room: string;
  statusString?: string;
  waitingTime?: string;
  clerk_name?: string;
  clerk_id?: number;
  session_key?: string;
  ehr_success: boolean;
  edb_final: boolean;
  is_virtual_doctor: boolean;
  telemedecine_url: string;
  appointment_data: {
    is_telemedicine: boolean;
    appointment_datetime: string;
    telemedicine_queue_position: number;
    telemedicine_queue_time: string;
    telemedicine_session_status: boolean;
    notification_sent: boolean;
  };
  edb_state: keyof typeof EhrStateEnum;
  covid_19_possible: boolean;
  telemedicine_mode: TelemedicineModeEnum;
  ehr_location: string;
}

