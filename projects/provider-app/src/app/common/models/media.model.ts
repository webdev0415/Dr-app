import { mediaDefault, audits as defaultAudits, AuditsDat } from 'static/static.vitals';
import { AuditMeasurementsTypes } from './data.model';
import { Audit} from './data.model';
import * as R from 'ramda';

export class MediaModel {
  private _media;
  private _audits;
  private _specificMedia;

  constructor(mediaArray: any, audits: Audit[] | AuditsDat, specificMedia: any) {
    this._media = mediaArray || R.clone(mediaDefault);
    this._audits = audits || R.clone(defaultAudits);
    this._specificMedia = R.clone(specificMedia);

    this.saveBodyPartsMedia(audits);
    this.saveVitalsAudit(audits);
  }

  private saveBodyPartsMedia(audits) {
    const save = (measurementsType: AuditMeasurementsTypes , description, path) => {
      let found;
      switch (measurementsType) {
        case 'STETHOSCOPE':
          found = this.searchAuditBodyPartsStethoscope(audits, description);
          break;
        case 'OTOSCOPE':
          found = this.searchAuditBodyPartsOtoscope(audits, description);
          break;
      }
      if (found) {
        path['audits'] = found;
      }
    };

    save('STETHOSCOPE', 'heart', this._media.heart);
    save('STETHOSCOPE', 'lung', this._media.lungs);
    save('STETHOSCOPE', 'abdomen', this._media.abdomen);
    save('OTOSCOPE', 'mouth', this._media.mouth[0]);
    save('OTOSCOPE', 'ear|left', this._media.ears[0]);
    save('OTOSCOPE', 'ear|right', this._media.ears[1]);
    save('OTOSCOPE', 'sinus|left', this._media.nose[0]);
    save('OTOSCOPE', 'sinus|left', this._media.nose[1]);
  }

  private searchAuditBodyPartsOtoscope(audits: Audit[], type: string): Audit[] | undefined {
    return audits.filter(aud => aud.description && aud.description.toLowerCase().includes(type));
  }

  private searchAuditBodyPartsStethoscope(audits: any[], type: string): Audit[] | undefined {
    const stethoscopeAudits = audits.find(item => !!item.data && item.measureType === 'STETHOSCOPE');
    return stethoscopeAudits ? stethoscopeAudits.data.filter(aud => aud.description && aud.description.toLowerCase().includes(type)) : undefined;
  }

  private saveVitalsAudit(audits) {
    this._audits.DIASTOLIC = this.searchAudit(audits, 'DIASTOLIC');
    this._audits.SYSTOLIC = this.searchAudit(audits, 'SYSTOLIC');
    this._audits.HEIGHT = this.searchAudit(audits, 'HEIGHT');
    this._audits.BLOOD_OXYGEN = this.searchAudit(audits, 'BLOOD_OXYGEN');
    this._audits.PULSE = this.searchAudit(audits, 'PULSE');
    this._audits.TEMPERATURE = this.searchAudit(audits, 'TEMPERATURE');
    this._audits.WEIGHT = this.searchAudit(audits, 'WEIGHT');
    this._audits.MEAN_ARTERIAL_PRESSURE = this.searchAudit(audits, 'MEAN_ARTERIAL_PRESSURE');
  }

  private searchAudit(audits: Audit[], measurement: AuditMeasurementsTypes): Audit | undefined {
    return audits.find(aud => aud.measurement_type === measurement);
  }

  public get media() {
    return this._media;
  }

  public get audits() {
    return this._audits;
  }

  public get specificMedia() {
    return this._specificMedia;
  }
}
