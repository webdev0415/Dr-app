export interface TelemedicineInfo {
  session_id: string;
  session_type: string;
  status: string;
  detailed_status: string;
  platform_information: {
    session_id: string;
    project_id: string;
    client_tokens: {
      doctor: string;
    }
  };
}
