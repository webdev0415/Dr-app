export interface LabOption {
  active: () => boolean;
  clickCb: () => void;
  btnText: () => string;
  color: () => 'green' | 'red' | 'primary';
}
