import { isNil } from 'ramda';
import { DischargeInstruction, PVDischargeBackendModel, ReturnToSchoolWork } from '../../discharge/discharge.interface';
import { PVFollowUpType, PVTimeUnitType } from '../../discharge/discharge.type';
import { BackendTreatment, TreatmentsState } from '../treatments.interface';
import { TreatmentsStoreEvent } from './treatments-store.event';

export class InitTreatments extends TreatmentsStoreEvent {

  constructor(
    payload: BackendTreatment[],
    public illnesses: string[],
    public pvDischarge: PVDischargeBackendModel,
    public customInstructions: string,
    public dischargeInstructions: DischargeInstruction[],
    public patientAge: number,
    public patientCompleted: boolean,
    public RTWS: ReturnToSchoolWork
  ) {
    super(payload);
  }

  getDefaultReturnToValue(): 'SCHOOL' | 'WORK' | 'NONE' {
    return this.patientCompleted ? 'NONE' : this.patientAge < 17 ? 'SCHOOL' : 'WORK';
  }

  getNewState(state: TreatmentsState): TreatmentsState {
    if (this.pvDischarge) state.pvDischarge = Object.assign(this.pvDischarge, {
      time: this.pvDischarge.time as PVTimeUnitType || null,
      followUpWith: this.pvDischarge.followUpWith as PVFollowUpType || null
    });
    state.dischargeInstructions = this.dischargeInstructions;

    state.customInstructions = this.customInstructions || '';
    if (!this.RTWS) state.returnToWorkSchool.returnTo = this.getDefaultReturnToValue();
    else {
      if (this.RTWS.returnTo === 'NONE') state.returnToWorkSchool.returnTo = this.getDefaultReturnToValue();
      ['rtswStart', 'rtswStop'].forEach(key => {
        if (!this.RTWS[key]) this.RTWS[key] = state.returnToWorkSchool[key];
      });
      state.returnToWorkSchool = this.RTWS;
      state.returnToWorkSchool.rtwWasIll = !!state.returnToWorkSchool.rtwSeenFor;

      // todo: uncomment when OE validation changed
      // state.returnToWorkSchool.rtswStart = (state.returnToWorkSchool.rtswStart || '').replace('-', '/');
      // state.returnToWorkSchool.rtswStop = (state.returnToWorkSchool.rtswStop || '').replace('-', '/');
    }

    if (this.payload) {
      const [treatmentEngine, drugInfo] = this.buildPatientTreatments(this.payload);

      const viewModelTreatments = this.getPresetTreatments(treatmentEngine, state, this.illnesses)[1];

      this.payload.filter(treatment => !isNil(treatment.force_hide) || !isNil(treatment.force_show)).forEach((treatment: BackendTreatment) => {
        const viewModelTreatment = viewModelTreatments.find(item => item.type === treatment.treatment_type);
        if (!isNil(treatment.force_hide)) viewModelTreatment.forceHide = treatment.force_hide;
        if (!isNil(treatment.force_show)) viewModelTreatment.forceShow = treatment.force_show;
      });

      return {
        ...state,
        patientTreatments: treatmentEngine,
        drugInformation: drugInfo,
        viewModelTreatments: viewModelTreatments
      };
    }

    return state;
  }
}
