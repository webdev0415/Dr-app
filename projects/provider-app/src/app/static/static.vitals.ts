import { Audit} from 'common/models/data.model';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { NavigationType, PhysicalExamMediaCollapsed } from '../common/types/physical-exams.type';

import { clone } from 'ramda';

interface AuditsDat {
  DIASTOLIC: Audit | undefined;
  SYSTOLIC: Audit | undefined;
  HEIGHT: Audit | undefined;
  BLOOD_OXYGEN: Audit | undefined;
  PULSE: Audit | undefined;
  TEMPERATURE: Audit | undefined;
  WEIGHT: Audit | undefined;
  MEAN_ARTERIAL_PRESSURE: Audit | undefined;
}

interface MediaItem {
  bodyPart: string;
  bodySide: string;
  measureType: string;
  data: Measurement[];
}

interface ImageMedia {
  bodyPart: string;
  data: Measurement[];
  video: Measurement[];
  audits: Array<any>;
  lib: string;
}

interface AudioMedia {
  raw: Measurement | {};
  low: Measurement | {};
  medium: Measurement | {};
  high: Measurement | {};
}

interface Media {
  nose: ImageMedia[];
  mouth: ImageMedia[];
  skin: ImageMedia[];
  ears: ImageMedia[];
  heart: {
    tricuspid: { data: AudioMedia },
    pulmonic: { data:  AudioMedia },
    mitral_apex: { data:  AudioMedia },
    '3rd_ics': { data:  AudioMedia },
    audits: Array<any>
  };
  abdomen: {
    right_lower_quadrant: { data: AudioMedia },
    right_upper_quadrant: { data: AudioMedia },
    mid: { data: AudioMedia },
    left_upper_quadrant: { data: AudioMedia },
    left_lower: { data: AudioMedia },
    audits: Array<any>
  };
  lungs: { right_upper: { data: AudioMedia },
    left_upper: { data: AudioMedia },
    right_middle: { data: AudioMedia },
    left_middle: { data: AudioMedia },
    right_lower: { data: AudioMedia },
    left_lower: { data: AudioMedia },
    audits: Array<any>
  };
}

interface SpecificMedia {
  nose: boolean;
  mouth: boolean;
  ears: boolean;
  skin: boolean;
  heart: boolean;
  abdomen: boolean;
  lungs: boolean;
}

const audits: AuditsDat = {
  BLOOD_OXYGEN: undefined,
  DIASTOLIC: undefined,
  HEIGHT: undefined,
  PULSE: undefined,
  SYSTOLIC: undefined,
  TEMPERATURE: undefined,
  WEIGHT: undefined,
  MEAN_ARTERIAL_PRESSURE: undefined,
};

const specificMediaReviewed = {
  General: false,
  Cardiovascular: false,
  Respiratory: false,
  GI: false,
  Eyes: false,
  ENT: false,
  'Ear, Nose, Throat': false,
  Skin: false,
  Lips: false,
  Voice: false,
  Muscular: false,
  Psychiatric: false,
  Lymph: false,
  Neurological: false,
  'Female GU': false,
  'Male GU': false
};

const mediaCollapsed: PhysicalExamMediaCollapsed = {
  General: true,
  Cardiovascular: true,
  Respiratory: true,
  GI: true,
  Eyes: true,
  ENT: true,
  'Ear, Nose, and Throat': true,
  Skin: true,
  Lips: true,
  Voice: true,
  Muscular: true,
  Psychiatric: true,
  Lymph: true,
  Neurological: true,
  'Female GU': true,
  'Male GU': true
};

const navigationTree: NavigationType = {
  General: [],
  Cardiovascular: [],
  Respiratory: [],
  GI: [],
  Eyes: [],
  ENT: [],
  'Ear, Nose, and Throat': [],
  Skin: [],
  Lips: [],
  Voice: [],
  Muscular: [],
  Psychiatric: [],
  Lymph: [],
  Neurological: [],
  'Female GU': [],
  'Male GU': []
};

const audioData: AudioMedia = {
  raw: {},
  low: {},
  medium: {},
  high: {}
};

const mediaDefault: Media = {
  nose: [
    {
      bodyPart: 'Left Sinus',
      data: [],
      video: [],
      audits: [],
      lib: 'nose'
    }, {
      bodyPart: 'Right Sinus',
      data: [],
      video: [],
      audits: [],
      lib: 'nose'
    }
  ],
  mouth: [
    {
      bodyPart: 'Throat Exam',
      data: [],
      video: [],
      audits: [],
      lib: 'mouth'
    }
  ],
  skin: [
    {
      bodyPart: 'Skin Exam',
      data: [],
      video: [],
      audits: [],
      lib: 'skin'
    }
  ],
  ears: [
    {
      bodyPart: 'Left Ear',
      data: [],
      video: [],
      audits: [],
      lib: 'ears'
    }, {
      bodyPart: 'Right Ear',
      data: [],
      video: [],
      audits: [],
      lib: 'ears'
    }
  ],
  heart: {
    tricuspid: {
      data: clone(audioData)
    },
    pulmonic: {
      data: clone(audioData)
    },
    mitral_apex: {
      data: clone(audioData)
    },
    '3rd_ics': {
      data: clone(audioData)
    },
    audits: []
  },
  abdomen: {
    right_lower_quadrant: {
      data: clone(audioData)
    },
    right_upper_quadrant: {
      data: clone(audioData)
    },
    mid: {
      data: clone(audioData)
    },
    left_upper_quadrant: {
      data: clone(audioData)
    },
    left_lower: {
      data: clone(audioData)
    },
    audits: []
  },
  lungs: {
    right_upper: {
      data: clone(audioData)
    },
    left_upper: {
      data: clone(audioData)
    },
    right_middle: {
      data: clone(audioData)
    },
    left_middle: {
      data: clone(audioData)
    },
    right_lower: {
      data: clone(audioData)
    },
    left_lower: {
      data: clone(audioData)
    },
    audits: []
  }
};

const specificMediaAvailable: SpecificMedia = {
  nose: false,
  mouth: false,
  ears: false,
  skin: false,
  heart: false,
  abdomen: false,
  lungs: false
};

const audioParts = ['heart', 'abdomen', 'lungs'];
const imagesParts = ['nose', 'mouth', 'ears', 'skin'];

const partNames = {
  nose: 'Nose',
  mouth: 'Throat',
  ears: 'Ear',
  skin: 'Skin',
  heart: 'Heart',
  abdomen: 'Abdomen',
  lungs: 'Lungs'
};

const partLocations = {
  ears: 'ear',
  nose: 'nose',
  mouth: 'throat',
  heart: 'chest',
  abdomen: 'abdomen',
  lungs: 'chest'
};

export {
  audits,
  AuditsDat,
  MediaItem,
  Media,
  SpecificMedia,
  specificMediaReviewed,
  mediaDefault,
  specificMediaAvailable,
  audioParts,
  imagesParts,
  partNames,
  partLocations,
  navigationTree,
  mediaCollapsed
};
