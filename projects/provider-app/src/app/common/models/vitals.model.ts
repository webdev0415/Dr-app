import { Utils } from 'utils/utils';
import { Triage } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/triage/triage';
import { Measurement } from './data.model';

export class Vitals {
  public DIASTOLIC = 0;
  public SYSTOLIC = 0;
  public HEIGHT = 0;
  public BLOOD_OXYGEN = 0;
  public PULSE = 0;
  public TEMPERATURE = 0;
  public WEIGHT = 0;
  public RESPIRATORY_RATE = 0;
  public LEFT_EYE = '';
  public RIGHT_EYE = '';
  public BMI = '0.00';

  constructor(measurements: Measurement[] = null, bmiSymptom: Triage = null) {
    const isNotEyes = (type) => type !== 'LEFT_EYE' && type !== 'RIGHT_EYE';

    const setVitalIfString = (measurement) => {
      const cloned = Utils.clone(measurement.value.value);
      this[measurement.measureType] = String(cloned);
    };

    const setVitalIfArray = (measurement) => {
      this[measurement.measureType] = Number(Utils.clone(measurement.value.value[0]));
    };

    const setVitalIfNumber = (measurement) => {
      if (isNotEyes(measurement.measureType))
        this[measurement.measureType] = Number(Utils.clone(measurement.value.value));
    };

    const setMeasurements = (measurement) => {
      if (typeof measurement.value.value === 'string') setVitalIfString(measurement);
      else if (Array.isArray(measurement.value.value)) setVitalIfArray(measurement);
      else setVitalIfNumber(measurement);
    };

    const setLatestMeasurementValue = (measurement) => {
      const foundMeasurements = measurements.filter(item => item.measureType === measurement.measureType);
      if (foundMeasurements.length > 1) {
        measurement = foundMeasurements.reduce((a, b) => new Date(a.timestamp) > new Date(b.timestamp) ? a : b);
      }
      setMeasurements(measurement);
    };

    try {
      if (measurements && measurements.length) {
        for (const measurement of measurements) {
          if (measurement.measureType in this) {
            setLatestMeasurementValue(measurement);
          }
        }
      }
      if (bmiSymptom) this.BMI = Number(bmiSymptom.measurement).toFixed(2);
    } catch (e) {
      console.error('Cannot build vitals:', e);
    }
  }
}

export const orderedMeasurementsToVitals = {
  'Respiratory Rate': ['RESPIRATORY_RATE'],
  'Eye Exam': ['LEFT_EYE', 'RIGHT_EYE'],
  'Height': ['HEIGHT'],
  'Weight': ['WEIGHT'],
  'Temperature': ['TEMPERATURE'],
  'Blood Pressure': ['SYSTOLIC', 'DIASTOLIC'],
  'Pulse': ['PULSE'],
  'Oxygen Sat': ['BLOOD_OXYGEN']
};

export interface VitalFieldError {
  measureType: string;
  label: string;
  labName: string;
  validState: boolean;
  recommendation: string;
}

export enum VitalsMeasurements {
  DIASTOLIC,
  SYSTOLIC,
  HEIGHT,
  BLOOD_OXYGEN,
  PULSE,
  TEMPERATURE,
  WEIGHT
}

export class EndpointVitals {
  public json = {
    'blood_pressure': [
      {
        'device_id': '1',
        'systolic': 0,
        'diastolic': 0,
        'trustability_score': 5,
        'bp_timestamp': ''
      }
    ],
    'temperature': [
      {
        'device_id': '1',
        'temperature': 0,
        'trustability_score': 5,
        'temp_timestamp': ''
      }
    ],
    'weight': [
      {
        'device_id': '1',
        'weight': 0,
        'trustability_score': 5,
        'wtimestamp': ''
      }
    ],
    'height': [
      {
        'height': 0,
        'trustability_score': 5,
        'htimestamp': ''
      }
    ],
    'pulse': [
      {
        'device_id': '1',
        'pulse_value': 0,
        'trustability_score': 5,
        'ptimestamp': ''
      }
    ],
    'o2': [
      {
        'device_id': '1',
        'o2value': 0,
        'trustability_score': 5,
        'o2timestamp': ''
      }
    ],
    'mapvalue': [
      {
        'device_id': '1',
        'mapvalue': 0,
        'trustability_score': 5,
        'maptimestamp': ''
      }
    ],
    'respiratory_rate': [
      {
        'device_id': '1',
        'respiratory_rate': 0,
        'trustability_score': 5,
        'timestamp': ''
      }
    ],
    'vision': [
      {
        'device_id': '1',
        'left_eye': '20/20',
        'right_eye': '20/20',
        'trustability_score': 1,
        'timestamp': '2017-04-14 12:30:40'
      }
    ]
  };

  private VitalValToValidNum(val: any): number {
    if (typeof val === 'number') return Utils.clone(val);
    if (Array.isArray(val)) return Number(Utils.clone(val[0]));
    if (typeof val === 'string') return Number(Utils.clone(val));
  }

  private deleteVitalFromJson(vitalname: string): void {
    switch (vitalname) {
      case 'HEIGHT': delete this.json['height']; break;
      case 'WEIGHT': delete this.json['weight']; break;
      case 'PULSE': delete this.json['pulse']; break;
      case 'BLOOD_OXYGEN': delete this.json['o2']; break;
      case 'SYSTOLIC': {
          delete this.json['blood_pressure'];
        break;
      }
      case 'DIASTOLIC': {
          delete this.json['blood_pressure'];
        break;
      }
      case 'TEMPERATURE': delete this.json['temperature']; break;
      case 'LEFT_EYE': {
          delete this.json['vision'];
        break;
      }
      case 'RIGHT_EYE': {
          delete this.json['vision'];
        break;
      }
      case 'RESPIRATORY_RATE': delete this.json['respiratory_rate']; break;
      default: throw Error(`Wrong vital name: ${vitalname}`);
    }
  }

  public RemoteNameToFieldName(remoteName: string): string {
    switch (remoteName) {
      case 'blood_pressure': return 'Blood Pressure';
      case 'o2': case 'o2value': return 'Oxygen Sat';
      case 'pulse_value': return 'Pulse';
      default: return remoteName.split('_').map((namePart: string) => namePart.charAt(0).toUpperCase() + namePart.slice(1)).join(' ');
    }
  }

  constructor(vitals: Vitals, filter?: {vital: string, state: boolean }[]) {
    const timestamp = new Date().toISOString();
    this.json.blood_pressure[0].bp_timestamp = timestamp;
    this.json.blood_pressure[0].systolic = this.VitalValToValidNum(vitals.SYSTOLIC);
    this.json.blood_pressure[0].diastolic = this.VitalValToValidNum(vitals.DIASTOLIC);
    this.json.height[0].htimestamp = timestamp;
    this.json.height[0].height = this.VitalValToValidNum(vitals.HEIGHT);
    this.json.o2[0].o2timestamp = timestamp;
    this.json.o2[0].o2value = this.VitalValToValidNum(vitals.BLOOD_OXYGEN);
    this.json.pulse[0].ptimestamp = timestamp;
    this.json.pulse[0].pulse_value = this.VitalValToValidNum(vitals.PULSE);
    this.json.temperature[0].temp_timestamp = timestamp;
    this.json.temperature[0].temperature = this.VitalValToValidNum(vitals.TEMPERATURE);
    this.json.weight[0].wtimestamp = timestamp;
    this.json.weight[0].weight = this.VitalValToValidNum(vitals.WEIGHT);
    this.json.mapvalue[0].maptimestamp = timestamp;
    this.json.respiratory_rate[0].timestamp = timestamp;
    this.json.respiratory_rate[0].respiratory_rate = this.VitalValToValidNum(vitals.RESPIRATORY_RATE);
    this.json.vision[0].timestamp = timestamp;
    this.json.vision[0].left_eye = `${vitals.LEFT_EYE}`;
    this.json.vision[0].right_eye = `${vitals.RIGHT_EYE}`;

    try {
      if (filter) filter.forEach(f => {
        if (f.state === false)
          switch (f.vital) {
            case 'SYSTOLIC': {
              if (!!this.json['blood_pressure'] && filter.find(vital => vital.vital === 'DIASTOLIC' && !vital.state)) this.deleteVitalFromJson(f.vital);
              break;
            }
            case 'DIASTOLIC': {
              if (!!this.json['blood_pressure'] && filter.find(vital => vital.vital === 'SYSTOLIC' && !vital.state)) this.deleteVitalFromJson(f.vital);
              break;
            }
            case 'LEFT_EYE': {
              if (!!this.json['vision'] && filter.find(vital => vital.vital === 'RIGHT_EYE' && !vital.state)) this.deleteVitalFromJson(f.vital);
              break;
            }
            case 'RIGHT_EYE': {
              if (!!this.json['vision'] && filter.find(vital => vital.vital === 'LEFT_EYE' && !vital.state)) this.deleteVitalFromJson(f.vital);
              break;
            }
            default:
              this.deleteVitalFromJson((f.vital));
          }
      });
    } catch (e) { console.error(e); }
  }
}
