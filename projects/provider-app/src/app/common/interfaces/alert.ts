export interface Alert {
  code: string;
  message: string;
  target: 'ANY' | 'MA' | 'Provider';
  practice?: number;
  patient?: number;
  id?: number;
}
