import { DischargeNotes, SportsExam } from 'common/models/data.model';
import { HealthHistory } from 'common/models/healthHistory.model';
import { HistoryTypesEnums } from 'common/enums';

export const historyCategories = ['Personal History', 'Family History', 'Surgical History'];

export const symptomSections = {
  'Medications': HistoryTypesEnums.MEDICATION,
  'Drug Allergies': HistoryTypesEnums['MEDICATION-ALLERGIES'],
  'Non Drug Allergies': HistoryTypesEnums.ALLERGIES,
  'Immunizations': HistoryTypesEnums.IMMUNIZATIONS,
  'Previous Visits': HistoryTypesEnums['PREVIOUS-HISTORY']
};
export const symptomSectionsList = [HistoryTypesEnums.MEDICATION, HistoryTypesEnums['MEDICATION-ALLERGIES'], HistoryTypesEnums.ALLERGIES, HistoryTypesEnums.IMMUNIZATIONS] as string[];

export const patientsCards = ['idCard', 'insuranceCard', 'secondaryInsuranceCard'];

export const questionnaire = [
  {
    subject: 'Anxiety',
    questions: [
      {id: 'ANX-1', text: 'Feeling nervous, anxious, or on edge'},
      {id: 'ANX-2', text: 'Not being able to stop or control worrying'},
      {id: 'ANX-3', text: 'Worrying too much about different things'},
      {id: 'ANX-4', text: 'Trouble relaxing'},
      {id: 'ANX-5', text: 'Being so restless that it is hard to sit still'},
      {id: 'ANX-6', text: 'Becoming easily annoyed or irritable'},
      {id: 'ANX-7', text: 'Feeling afraid, as if something awful might happen'}
    ]
  }, {
    subject: 'Depression',
    questions: [
      {id: 'DEP-1', text: 'Little interest or pleasure in doing things'},
      {id: 'DEP-2', text: 'Feeling down, depressed, or hopeless'},
      {id: 'DEP-3', addition: ['DEP-3A'], text: 'Trouble falling or staying asleep, or sleeping too much'},
      {id: 'DEP-4', text: 'Feeling tired or having little energy'},
      {id: 'DEP-5', addition: ['DEP-5A'], text: 'Poor appetite or overeating'},
      {id: 'DEP-6', text: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down'},
      {id: 'DEP-7', text: 'Trouble concentrating on things, such as reading the newspaper or watching television'},
      {id: 'DEP-8', addition: ['DEP-8A', 'DEP-8B'], text: 'Moving or speaking so slowly that other people could have noticed'},
      {id: 'DEP-9', text: 'Thoughts that you would be better off dead, or of hurting yourself'},
      {id: 'DEP-10', text: 'If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?'},
    ]
  }, {
    subject: 'Bipolar',
    questions: [
      {
        relatedTo: ['BIP-1A', 'BIP-1B', 'BIP-1C', 'BIP-1D', 'BIP-1E', 'BIP-1F', 'BIP-1G', 'BIP-1H', 'BIP-1K', 'BIP-1K', 'BIP-1L'],
        text: 'Has there ever been a period of time when you were not your usual self and…'
      },
      {id: 'BIP-1A', subQuestion: true, text: 'You felt so good or hyper that other people thought you were not your normal self or were so hyper that you got into trouble?'},
      {id: 'BIP-1B', subQuestion: true, text: 'You were so irritable that you shouted at people or started fights or arguments?'},
      {id: 'BIP-1C', subQuestion: true, text: 'You felt much more self-confident than usual?'},
      {id: 'BIP-1D', subQuestion: true, text: 'You got much less sleep than usual and found you didn’t really miss it?'},
      {id: 'BIP-1E', subQuestion: true, text: 'You were much more talkative or spoke much faster than usual?'},
      {id: 'BIP-1F', subQuestion: true, text: 'Thoughts raced through your head or you couldn’t slow your mind down?'},
      {id: 'BIP-1G', subQuestion: true, text: 'You were so easily distracted by things around you that you had trouble concentrating or staying on track?'},
      {id: 'BIP-1H', subQuestion: true, text: 'You had much more energy than usual?'},
      {id: 'BIP-1I', subQuestion: true, text: 'You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?'},
      {id: 'BIP-1J', subQuestion: true, text: 'You were much more interested in sex than usual?'},
      {id: 'BIP-1K', subQuestion: true, text: 'You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?'},
      {id: 'BIP-1L', subQuestion: true, text: 'Spending money got you or your family into trouble?'},
      {id: 'BIP-2', text: 'If you checked YES to more than one of the above, have several of these ever happened during the same period of time?'},
      {id: 'BIP-3', text: 'How much of a problem did any of these cause you?'},
      {id: 'BIP-4', text: 'Have any of your blood relatives had manic-depressive illness or bipolar disorder?'},
      {id: 'BIP-5', text: 'Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?'},
    ]
  }, {
    subject: 'Psychosis',
    questions: [
      {id: 'PSY-1', text: 'Do familiar surroundings sometimes seem strange, confusing, or unreal to you?'},
      {id: 'PSY-1A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-2', text: 'Have you heard unusual sounds like banging, clicking, hissing, clapping or ringing in your ears?'},
      {id: 'PSY-2A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-3', text: 'Do things that you see appear different from the way they usually do?'},
      {id: 'PSY-3A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-4', text: 'Have you had experiences with telepathy, psychic forces, or fortune telling?'},
      {id: 'PSY-4A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-5', text: 'Have you felt that you are not in control of your own ideas or thoughts?'},
      {id: 'PSY-5A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-6', text: 'Do you have difficulty getting your point across, because you ramble or go off the track a lot when you talk?'},
      {id: 'PSY-6A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-7', text: 'Do you have strong feelings or beliefs about being unusually gifted or talented in some way'},
      {id: 'PSY-7A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-8', text: 'Do you feel that other people are watching you or talking about you?'},
      {id: 'PSY-8A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-9', text: 'Do you sometimes get strange feelings on or just beneath your skin, like bugs crawling?'},
      {id: 'PSY-9A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-10', text: 'Do you sometimes feel suddenly distracted by distant sounds that you are not normally aware of'},
      {id: 'PSY-10A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-11', text: 'Have you had the sense that some person or force is around you, although you couldn’t see anyone?'},
      {id: 'PSY-11A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-12', text: 'Do you worry at times that something may be wrong with your mind?'},
      {id: 'PSY-12A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-13', text: 'Have you ever felt that you don\'t exist, the world does not exist, or that you are dead?'},
      {id: 'PSY-13A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-14', text: 'Have you been confused at times whether something you experienced was real or imaginary?'},
      {id: 'PSY-14A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-15', text: 'Do you hold beliefs that other people would find unusual or bizarre?'},
      {id: 'PSY-15A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-16', text: 'Do you feel that parts of your body have changed in some way, or that parts of your body are working differently?'},
      {id: 'PSY-16A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-17', text: 'Are your thoughts sometimes so strong that you can almost hear them?'},
      {id: 'PSY-17A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-18', text: 'Do you find yourself feeling mistrustful or suspicious of other people?'},
      {id: 'PSY-18A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-19', text: 'Have you seen unusual things like flashes, flames, blinding light, or geometric figures?'},
      {id: 'PSY-19A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-20', text: 'Have you seen things that other people can\'t see or don\'t seem to see?'},
      {id: 'PSY-20A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
      {id: 'PSY-21', text: 'Do people sometimes find it hard to understand what you are saying?'},
      {id: 'PSY-21A', subQuestion: true, text: 'When this happens, I feel frightened, concerned, or it causes problems for me:'},
    ],
    titles: []
  }, {
    subject: 'Eating Disorder',
    questions: [
      {id: 'ED-1', text: 'How much more or less do you feel you worry about your weight and body shape than other people your age?'},
      {id: 'ED-2', text: 'How afraid are you of gaining 3 pounds?'},
      {id: 'ED-3', text: 'When was the last time you went on a diet?'},
      {id: 'ED-4', text: 'Compared to other things in your life, how important is your weight to you?'},
      {id: 'ED-5', text: 'Do you ever feel fat?'},
      {id: 'ED-6', text: 'In the past 3 months, how many times have you had a sense of loss of control AND you also ate what most people would regard as an unusually large amount of food at one time, defined as definitely more than most people would eat under similar circumstances?'},
      {
        relatedTo: ['ED-6A', 'ED-6B', 'ED-6C', 'ED-6D', 'ED-6E'],
        text: 'During these episodes of eating an unusually large amount of food with a sense of loss of control, do you:'
      },
      {id: 'ED-6A', subQuestion: true, text: 'Eat much more rapidly than normal?'},
      {id: 'ED-6B', subQuestion: true, text: 'Eat until feeling uncomfortably full?'},
      {id: 'ED-6C', subQuestion: true, text: 'Eat large amounts of food when not feeling physically hungry?'},
      {id: 'ED-6D', subQuestion: true, text: 'Eat alone because of feeling embarrassed by how much you are eating?'},
      {id: 'ED-6E', subQuestion: true, text: 'Feel disgusted, depressed, or very guilty afterward?'},
      {id: 'ED-6F', text: 'How distressed or upset have you felt about these episodes?'},
      {
        relatedTo: ['ED-7A', 'ED-7B', 'ED-7C', 'ED-7D'],
        text: 'In the past 3 months, how many times have you done any of the following as a means to control your weight and shape:'
      },
      {id: 'ED-7A', subQuestion: true, text: 'Made yourself throw-up?'},
      {id: 'ED-7B', subQuestion: true, text: 'Used diuretics or laxatives?'},
      {id: 'ED-7C', subQuestion: true, text: 'Exercised excessively?'},
      {id: 'ED-7D', subQuestion: true, text: 'Fasted?'},
      {id: 'ED-8', text: 'Do you consume a small amount of food (i.e., less than 1200 calories/day) on a regular basis to influence your shape or weight?'},
      {id: 'ED-9', text: 'Do you struggle with a lack of interest in eating or food?'},
      {id: 'ED-10', text: 'Do you avoid certain or many foods because of such features as texture, consistency, temperature, or smell?'},
      {id: 'ED-11', text: 'Do you avoid certain or many foods because of fear of experiencing negative consequences like choking or vomiting, or have other people suggested this may be the case for you?'},
      {id: 'ED-12', text: 'Have you experienced significant weight loss* but are not overly concerned with the size or shape of your body?'},
      {id: 'ED-13', text: 'Are you currently in treatment for an eating disorder?'},
      {id: 'ED-14', text: 'Have you lost more than 14 pounds in last three months?'},
    ]
  }, {
    subject: 'PTSD',
    questions: [
      {id: 'PTSD-1', text: 'Have had nightmares about it or thought about it when you did not want to?'},
      {id: 'PTSD-2', text: 'Tried hard not to think about it or went out of your way to avoid situations that reminded you of it?'},
      {id: 'PTSD-3', text: 'Were constantly on guard, watchful, or easily startled?'},
      {id: 'PTSD-4', text: 'Felt numb or detached from others, activities, or your surroundings?'},
    ]
  }, {
    subject: 'Sports Physical',
    questions: [
      {id: 'SPT-1', text: 'Has a doctor ever denied or restricted your participation in sports for any reason?'},
      {id: 'SPT-5', text: 'Does your heart race or skip beats during exercise?'},
      {id: 'SPT-5A', subQuestion: true, text: 'Which one?'},
      {id: 'SPT-7', text: 'Have you ever spent the night in a hospital?'},
      {id: 'SPT-8', text: 'Have you ever had surgery?'},
      {id: 'SPT-9', text: 'Have you ever had an injury (sprain, muscle/ligament tear, tendinitis, etc.) that caused you to miss a practice or game?'},
      {id: 'SPT-10', text: 'Have you had any broken/fractured bones or dislocated joints?'},
      {id: 'SPT-11', text: 'Have you had a bone/joint injury that required X-rays, MRI, CT, surgery, injections, rehabilitation physical therapy, a brace, a cast or crutches?'},
      {special: 'sports'},
      {id: 'SPT-12', text: 'Have you ever had a stress fracture?'},
      {id: 'SPT-13', text: 'Have you ever been told that you have, or have you had an X-ray for atlantoaxial (neck) instability?'},
      {id: 'SPT-14', text: 'Do you regularly use a brace or assistive device?'},
      {id: 'SPT-16', text: 'Do you cough, wheeze or have difficulty breathing during or after exercise?'},
      {id: 'SPT-16A', subQuestion: true, text: 'Please select which'},
      {id: 'SPT-19', text: 'Were you born without, are you missing, or do you have a nonfunctioning kidney, eye, testicle or any other organ?'},
      {id: 'SPT-20', text: 'Have you had infectious mononucleosis (mono) within the last month?'},
      {id: 'SPT-21', text: 'Do you have any rashes, pressure sores or other skin problems?'},
      {id: 'SPT-23', text: 'Have you ever had an injury to your face, head, skull or brain (including a concussion, confusion, memory loss or headache from a hit to your head, having your “bell rung” or getting “dinged”)?'},
      {id: 'SPT-24', text: 'Have you ever had a seizure?'},
      {id: 'SPT-26', text: 'Have you ever had numbness, tingling or weakness in your arms or legs after being hit, falling, stingers or burners?'},
      {id: 'SPT-27', text: 'While exercising in the heat, do you have severe muscle cramps or become ill?'},
      {id: 'SPT-30', text: 'Have you had any major problems with your eyes or vision?'},
      {id: 'SPT-31', text: 'Do you wear glasses or contact lenses?'},
      {id: 'SPT-31A', subQuestion: true, text: 'Please tell us which'},
      {id: 'SPT-33', text: 'Are you happy with your weight?'},
      {id: 'SPT-34', text: 'Are you trying to gain or lose weight?'},
      {id: 'SPT-35', text: 'Has anyone recommended you change your weight or eating habits?'},
      {id: 'SPT-38', text: 'Have you ever had a menstrual period?'},
      {id: 'SPT-39', text: 'How old were you when you had your first menstrual period?'},
      {id: 'SPT-40', text: 'How many periods have you had in the last year?'},
    ]
  }, {
    subject: 'COLUMBIA-SUICIDE SEVERITY RATING',
    questions: [
      {id: 'SCD-1', text: 'Have you actually had any thoughts of killing yourself?'},
      {id: 'SCD-2', text: 'Have you been thinking about how you might do this?'},
      {id: 'SCD-3', text: `Have you had these thoughts and had some intention of acting on them? As opposed to "I have the thoughts but I definitely will not do anything about them."`},
      {id: 'SCD-4', text: 'Have you started to work out or worked out the details of how to kill yourself? Do you intend to carry out this plan?'
      },
      {id: 'SCD-5', text: 'Have you ever done anything, started to do anything, or prepared to do anything to end your life?'},
      {id: 'SCD-5B', text: 'Was this within the past three months?'},
    ]
  }, {
    subject: 'Diabetes',
    questions: [
      {
        relatedTo: ['DIA-1A', 'DIA-1B', 'DIA-1C', 'DIA-1D', 'DIA-1E', 'DIA-1F', 'DIA-1G', 'DIA-1H', 'DIA-1I', 'DIA-1J',
          'DIA-1K', 'DIA-1L', 'DIA-1M', 'DIA-1N', 'DIA-1O', 'DIA-1P', 'DIA-1Q'],
        text: 'Please tell us if you are experiencing any of the following'
      },
      {id: 'DIA-1A', subQuestion: true, text: 'Increased Thirst'},
      {id: 'DIA-1B', subQuestion: true, text: 'Increased Hunger'},
      {id: 'DIA-1C', subQuestion: true, text: 'Frequent Urination'},
      {id: 'DIA-1D', subQuestion: true, text: 'Weight Loss'},
      {id: 'DIA-1E', subQuestion: true, text: 'Fatigue'},
      {id: 'DIA-1F', subQuestion: true, text: 'Changes in Vision'},
      {id: 'DIA-1G', subQuestion: true, text: 'More frequent infections'},
      {id: 'DIA-1H', subQuestion: true, text: 'Slow healing sores'},
      {id: 'DIA-1I', subQuestion: true, text: 'Numbness'},
      {id: 'DIA-1J', subQuestion: true, text: 'Pain'},
      {id: 'DIA-1K', subQuestion: true, text: 'Constipation'},
      {id: 'DIA-1L', subQuestion: true, text: 'Diarrhea'},
      {id: 'DIA-1M', subQuestion: true, text: 'Urine retention'},
      {id: 'DIA-1N', subQuestion: true, text: 'Swelling'},
      {id: 'DIA-1O', subQuestion: true, text: 'Difficulty with erection'},
      {id: 'DIA-1P', subQuestion: true, text: 'Vaginal dryness'},
      {id: 'DIA-1Q', subQuestion: true, text: 'Regurgitation'},
      {id: 'DIA-T2-1', text: 'How are things doing with your diabetes or blood sugars?'},
      {id: 'DIA-T2-2', text: 'Have you had episodes of low blood sugar?'},
      {id: 'DIA-T2-3', text: 'How many times since last visit has it happened?'},
      {id: 'DIA-T2-4', text: 'Does this occur at a specific time of day?'},
      {id: 'DIA-T2-5', text: 'When was your last visit for your diabetes?'},
      {id: 'DIA-T2-6', text: 'Do you exercise regularly?'},
      {id: 'DIA-T2-6A', subQuestion: true, text: 'How many times a week do you exercise?'},
      {id: 'DIA-T2-6B', subQuestion: true, text: 'How long do you typically exercise?'},
      {id: 'DIA-T2-7', text: 'Are you following the diabetic diet?'},
      {id: 'DIA-T2-8', text: 'Have you had labs run for your diabetes in the last year?'},
      {id: 'DIA-MC-1', text: 'Medication Compliance'},
      {id: 'DIA-MC-1A', subQuestion: true, text: 'Are you taking this medication regularly as prescribed?'},
      {id: 'DIA-MC-1B', subQuestion: true, text: 'Do you have difficulty taking this medication?'},
      {id: 'DIA-MC-1C', subQuestion: true, text: 'Do you need a refill of this medication?'},
      {id: 'DIA-MC-1D', subQuestion: true, text: 'Do you know what this medication is for and how it helps you?'},
      {id: 'DIA-MC-1E', subQuestion: true, text: 'How many times a week do you miss this medication?'},
      {id: 'DIA-MC-2', text: 'Are you having any adverse reactions to the medications you are taking?'},
    ]
  }, {
    subject: 'Asthma',
    questions: [
      {id: 'ASTHMA-1', text: 'How frequently do you lay awake from sleep due to shortness of breath?'},
      {id: 'ASTHMA-2', text: 'How frequently do you experience wheezing?'},
      {id: 'ASTHMA-3', text: 'How frequently are you coughing?'},
      {id: 'ASTHMA-4', text: 'How often do you use your inhaler?'},
      {id: 'ASTHMA-5', text: 'Do you experience shortness of breath that interferes with normal activities?'},
      {id: 'ASTHMA-6', text: 'Are you here today for a breathing or Asthma related issue?'},
    ]
  }
];

export const sportsScreeningItems = [
  'Head',
  'Hand/Fingers',
  'Knee',
  'Neck',
  'Chest',
  'Calf/Shin',
  'Shoulder',
  'Upper Back',
  'Ankle',
  'Upper Arm',
  'Lower Back',
  'Foot/Toes',
  'Elbow',
  'Hip',
  'Forearm',
  'Thigh',
];

export const sportsPhysicalTable = [
  {name: 'Medical'},
  {name: 'Appearance', normal: true, abnormal: ''},
  {name: 'Eyes / Ears / Throat / Nose', normal: true, abnormal: ''},
  {name: 'Hearing', normal: true, abnormal: ''},
  {name: 'Lymph Nodes', normal: true, abnormal: ''},
  {name: 'Heart', normal: true, abnormal: ''},
  {name: 'Murmurs', normal: true, abnormal: ''},
  {name: 'Pulses', normal: true, abnormal: ''},
  {name: 'Lungs', normal: true, abnormal: ''},
  {name: 'Abdomen', normal: true, abnormal: ''},
  {name: 'Genitourinary', normal: true, abnormal: ''},
  {name: 'Skin', normal: true, abnormal: ''},
  {name: 'Musculoskeletal'},
  {name: 'Neck', normal: true, abnormal: ''},
  {name: 'Back', normal: true, abnormal: ''},
  {name: 'Shoulder / Arm', normal: true, abnormal: ''},
  {name: 'Elbow / Forearm', normal: true, abnormal: ''},
  {name: 'Wrist / Hands / Fingers', normal: true, abnormal: ''},
  {name: 'Hip / Thigh', normal: true, abnormal: ''},
  {name: 'Knee', normal: true, abnormal: ''},
  {name: 'Leg / Ankle', normal: true, abnormal: ''},
  {name: 'Foot / Toe', normal: true, abnormal: ''},
];

export const sportsCleared = {
  cleared: 'cleared',
  sports: '',
  reason: '',
  recommendations: ''
};

export const defaultPatientHealthHistory: HealthHistory = {
  drinkingStartDate: null,
  drinkingEndDate: null,
  lastDrinkDate: null,
  historyItem: [],
  smokingEndDate: null,
  smokingStartDate: null,
  otherSurgery: '',
  familyOtherCancer: '',
  patientOtherCancer: '',
  medsAllergyReactions: '',
  version: '2.0',
  pharmacies: []
};

export const patientDefaultValue = {
  additionalInformation: {
    additionalDoctorNotes: '',
    definedIcdCodes: [],
    knownDrugConflicts: [],
    knownDrugAllergies: [],
    physicalExam: [],
    sportsCleared: JSON.parse(JSON.stringify(sportsCleared)),
    sportsPhysical: JSON.parse(JSON.stringify(sportsPhysicalTable))
  },
  orders: {
    orderedLabs: [],
    orderedMeasurements: []
  },
  drugInformation: [],
  illness: [],
  mediaReviewed: {
    Edited: true,
    General: true,
    Cardiovascular: true,
    Respiratory: true,
    GI: true,
    Eyes: true,
    ENT: true,
    Skin: true,
    Muscular: true,
    Psychiatric: true,
    Lymph: true,
    Neurological: true,
    'Female GU': true,
    'Male GU': true
  },
  recommendedLabs: [],
  patientHealthHistory: JSON.parse(JSON.stringify(defaultPatientHealthHistory))
};

export const defaultDischargeNotes: DischargeNotes = {
  foodMedProvided: null,
  patientGivenInfoQuit: null,
  conditionHangoutsGiven: null,
  hhanNA: null,
  equipmentNA: null,
  medicationInstructions: null,
  homeHealthAgencyName: null,
  hhaPhoneNumber: null,
  equipment: null,
  equipmentProvidedBy: null,
  equipmentPhone: null,
  equipmentProvidedDate: null,
  doNotGoToWork: null,
  doNotGoToSchool: null,
  doNotGoToPE: null,
  donotFrom: null,
  donotTo: null,
  limitedFrom: null,
  limitedTo: null,
  notes: null,
  responsiblePerson: null,
  lpnRnMd: null
};

export const defaultSportsExam: SportsExam = {
  eqpupils: true,
  corrected: false,
  address: '',
  phone: '',
  signature: '',
};
