export interface GroupedSymptom {
  hasDesc: any;
  type: 'Pain/Swelling' | 'Cough' | 'Rash' | 'ChangeRash';
  basic: any;
  description: any;
  fluids: any;
  volumes: any;
  texture: any;
  ps_location: any;
  scale: any;
  pain_swelling_group: any;
  cough: any;
  made_better_by: any;
  made_worse_by: any;
  associated_with: any;
  occurs: any;
  movement: any;
  PS_LOCATION: any;
  started_here: any;
  current_distribution: any;
  distribution_pattern: any;
  soles_and_feet: any;
  rash_change: any;
  rash_size: any;
  rash: any;
  described_as: any;
}

export const defaultGroupedSymptom: GroupedSymptom = {
  hasDesc: false,
  type: 'Pain/Swelling',
  basic: null,
  description: null,
  fluids: null,
  volumes: null,
  ps_location: null,
  texture: null,
  scale: null,
  pain_swelling_group: null,
  cough: null,
  made_better_by: null,
  made_worse_by: null,
  associated_with: null,
  occurs: null,
  movement: null,
  PS_LOCATION: null,
  started_here: null,
  current_distribution: null,
  distribution_pattern: null,
  soles_and_feet: null,
  rash_change: null,
  rash_size: null,
  rash: null,
  described_as: null
};
