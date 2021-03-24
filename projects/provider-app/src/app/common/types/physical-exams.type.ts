export type PhysicalExamsType =
  'General'|
  'Cardiovascular'|
  'Respiratory'|
  'GI'|
  'Eyes'|
  'Lips'|
  'Voice'|
  'ENT'|
  'Ear, Nose, and Throat'|
  'Skin'|
  'Muscular'|
  'Psychiatric'|
  'Lymph'|
  'Neurological'|
  'Female GU'|
  'Male GU';

export type PhysicalExamMediaCollapsed = {
  [key in PhysicalExamsType]: boolean;
};

export type NavigationType = { [key in PhysicalExamsType]: number[] };
