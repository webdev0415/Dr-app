import { PhysicalExam, RelatedBodyPart } from 'common/interfaces/physical-exams.interfaces';
import { OrderStateEnum } from '../common/enums';

// Standard Physical Exam

export const physicalExamDesc: PhysicalExam[] = [
  {
    examName: 'General',
    descriptionsArray:
      [{
        description: 'General',
        defaultNormal: true,
        mod:
          [{
            text: 'Well appearing, without acute distress.',
            normal: true,
            buttonText: '',
            key: 'Normal',
            code: 'gg-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0002901'],
            symptomName: ['General Physical appearance'],
            listValues: ['Well Appearing']
          },
            {
              text: 'Appears ill.',
              normal: false,
              buttonText: '',
              key: 'Toxic',
              code: 'gg-0-0a',
              symptomIds: ['SYMPT0002901'],
              symptomName: ['General Physical appearance'],
              listValues: ['Toxic']
            },
            {
              text: 'Appears distressed.',
              normal: false,
              buttonText: '',
              key: 'Distressed',
              code: 'gg-0-0a',
              symptomIds: ['SYMPT0002901'],
              symptomName: ['General Physical appearance'],
              listValues: ['Distressed']
            },
            {
              text: 'Appears disheveled.',
              normal: false,
              buttonText: '',
              key: 'Poor Self Care',
              code: 'gg-0-0a',
              symptomIds: ['SYMPT0002901'],
              symptomName: ['General Physical appearance'],
              listValues: ['Disheveled']
            },
            {
              text: 'Appears obese.',
              normal: false,
              key: 'Obese',
              code: 'gg-0-0a',
              symptomIds: ['SYMPT0002901'],
              symptomName: ['General Physical appearance'],
              listValues: ['Obese']
            }]
      }]
  },
  {
    examName: 'Cardiovascular',
    descriptionsArray:
      [{
        description: 'Heart auscultation',
        defaultNormal: true,
        mod:
          [{
            text:
              'Normal S1 and S2, with normal rate and rhythm. No murmurs, rubs, gallops.',
            normal: true,
            key: 'Normal Findings',
            code: 'ch-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0001982'],
            symptomName: ['Heart Auscultation'],
            listValues: ['Normal']
          },
            {
              text: 'Tachycardic S1 and S2, with regular rhythm.',
              normal: false,
              key: 'Tachycardia',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Rate - Tachycardia']
            },
            {
              text: 'Bradycardic S1 and S2, with regular rhythm.',
              normal: false,
              key: 'Bradycardia',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Rate - Bradycardia']
            },
            {
              text: 'Irregular S1 and S2, with normal rate.',
              normal: false,
              key: 'Irregular Rhythm',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Rhythm - Irregular']
            },
            {
              text: 'Tachycardic and irregular.',
              normal: false,
              key: 'Irregular Tachycardia',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982', 'SYMPT0001982'],
              symptomName: ['Heart Auscultation', 'Heart Auscultation'],
              listValues: ['Rate - Tachycardia', 'Rhythm - Irregular']
            },
            {
              text: 'Bradycardic and irregular.',
              normal: false,
              key: 'Irregular Bradycardia',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982', 'SYMPT0001982'],
              symptomName: ['Heart Auscultation', 'Heart Auscultation'],
              listValues: ['Rate - Bradycardia', 'Rhythm - Irregular']
            },
            {
              text: 'Irregularly irregular with normal rate.',
              normal: false,
              key: 'Irregularly Irregular',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Rhythm - Irregularly Irregular']
            },
            {
              text: 'Irregularly irregular and tachycardic.',
              normal: false,
              key: 'Irregularly Irregular Tachycardia',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982', 'SYMPT0001982'],
              symptomName: ['Heart Auscultation', 'Heart Auscultation'],
              listValues: ['Rate - Tachycardia', 'Rhythm - Irregularly Irregular']
            },
            {
              text: 'Irregularly irregular and bradycardic.',
              normal: false,
              key: 'Irregularly Irregular Bradycardia',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982', 'SYMPT0001982' ],
              symptomName: ['Heart Auscultation', 'Heart Auscultation'],
              listValues: ['Rate - Bradycardia', 'Rhythm - Irregularly Irregular']
            },
            {
              text: 'Systolic murmur noted.',
              normal: false,
              key: 'Murmur, Systolic',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Murmur - Systolic']
            },
            {
              text: 'Diastolic murmur noted.',
              normal: false,
              key: 'Murmur, Diastolic',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Murmur - Diastolic']
            },
            {
              text: 'S3, S4 gallup is noted.',
              normal: false,
              key: 'S3, S4 gallop',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982', 'SYMPT0001982'],
              symptomName: ['Heart Auscultation', 'Heart Auscultation'],
              listValues: ['Sound - S3 Gallup', 'Sound - S4 Gallup']
            },
            {
              text: 'Friction rub is noted.',
              normal: false,
              key: 'Friction Rub',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Sound - Friction Rub']
            },
            {
              text: 'Murmur is noted when patient undergoes valsalva maneuvers.',
              normal: false,
              key: 'Valsalva Maneuver Murmur',
              code: 'ch-0-0a',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Valsalva Maneuver Murmur']
            }]
      },
        {
          description: 'Extremities',
          mod:
            [{
              text: 'No clubbing, cyanosis, or edema.',
              normal: true,
              key: 'Normal Findings',
              code: 'ce-1-0n',
              symptomIds: ['SYMPT0007856'],
              symptomName: ['Extremities'],
              listValues: ['Normal']
            },
              {
                text: 'Pitting edema is noted.',
                normal: false,
                key: 'Pitting Edema',
                code: 'ce-1-0a',
                symptomIds: ['SYMPT0007856'],
                symptomName: ['Extremities'],
                listValues: ['Pitting Edema']
              },
              {
                text: 'Non-pitting edema noted.',
                normal: false,
                key: 'Non-Pitting Edema',
                code: 'ce-1-0a',
                symptomIds: ['SYMPT0007856'],
                symptomName: ['Extremities'],
                listValues: ['Non-Pitting Edema']
              },
              {
                text: 'Cyanosis is noted.',
                normal: false,
                key: 'Cyanosis',
                code: 'ce-1-0a',
                symptomIds: ['SYMPT0007856'],
                symptomName: ['Extremities'],
                listValues: ['Cyanosis']
              },
              {
                text: 'Clubbing is noted.',
                normal: false,
                key: 'Clubbing',
                code: 'ce-1-0a',
                symptomIds: ['SYMPT0007856'],
                symptomName: ['Extremities'],
                listValues: ['Clubbing']
              },
              {
                text: 'Varicosities are noted.',
                normal: false,
                key: 'Varicosities',
                code: 'ce-1-0a',
                symptomIds: ['SYMPT0000995'],
                symptomName: ['Varicose Veins in Legs'],
                listValues: ['']
              },
              {
                text: 'Normal capillary refill.',
                normal: true,
                key: 'Normal Capillary Refill',
                code: 'ce-1-1n',
                symptomIds: ['SYMPT0007856'],
                symptomName: ['Extremities'],
                listValues: ['Normal Capillary Refill']
              },
              {
                text: 'Delayed capillary refill.',
                normal: false,
                key: 'Abnormal Capillary Refill',
                code: 'ce-1-1a',
                symptomIds: ['SYMPT0007856'],
                symptomName: ['Extremities'],
                listValues: ['Abnormal Capillary Refill']
              }]
        },
        {
          description: 'Palpation',
          mod:
            [{
              text: 'PMI normal location, no thrills or heave noted.',
              normal: true,
              key: 'Normal',
              code: 'cp-2-0n',
              symptomIds: ['SYMPT0007855'],
              symptomName: ['Chest Palpation'],
              listValues: ['Normal']
            },
              {
                text: 'PMI is displaced laterally and/or inferiorly.',
                normal: false,
                key: 'PMI Displaced',
                code: 'cp-2-0a',
                symptomIds: ['SYMPT0007855'],
                symptomName: ['Chest Palpation'],
                listValues: ['PMI Displaced']
              }]
        },
        {
          description: 'Pulses',
          mod:
            [{
              text: 'Peripheral pulses are normal and symmetric.',
              normal: true,
              key: 'Normal Peripheral Pulses',
              code: 'cp-3-0n',
              symptomIds: ['SYMPT0004282'],
              symptomName: ['Weak Pulse'],
              listValues: ['Normal']
            },
              {
                text: 'Peripheral pulses are weak.',
                normal: false,
                key: 'Diminished Peripheral Pulses',
                code: 'cp-3-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Any']
              },
              {
                text: 'Peripheral pulses are not symmetric.',
                normal: false,
                key: 'Asymmetric Peripheral Pulses',
                code: 'cp-3-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Asymmetric Peripheral Pulses']
              }]
        },
        {
          description: 'Carotids',
          mod:
            [{
              text: 'Carotid pulse normal, without bruits.',
              normal: true,
              key: 'Normal Carotid Exam',
              code: 'cc-4-0n',
              symptomIds: ['SYMPT0001982'],
              symptomName: ['Heart Auscultation'],
              listValues: ['Carotids Normal']
            },
              {
                text: 'Right carotid bruit is noted.',
                normal: false,
                key: 'Carotid Bruit, Right',
                code: 'cc-4-0a',
                symptomIds: ['SYMPT0001982'],
                symptomName: ['Heart Auscultation'],
                listValues: ['Right Carotid Bruit']
              },
              {
                text: 'Left carotid bruit is noted.',
                normal: false,
                key: 'Carotid Bruit, Left',
                code: 'cc-4-0a',
                symptomIds: ['SYMPT0001982'],
                symptomName: ['Heart Auscultation'],
                listValues: ['Left Carotid Bruit']
              },
              {
                text: 'Right carotid pulse is weak.',
                normal: false,
                key: 'Diminished Carotid Pulse, Right',
                code: 'cc-4-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Right Carotid']
              },
              {
                text: 'Left carotid pulse is weak.',
                normal: false,
                key: 'Diminished Carotid Pulse, Left',
                code: 'cc-4-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Left Carotid']
              }]
        },
        {
          description: 'Abdominal aorta',
          mod:
            [{
              text: 'No abdominal aortic bruit or pulsatile mass noted.',
              normal: true,
              key: 'Normal Abdominal Aorta',
              code: 'ca-5-0n',
              symptomIds: ['SYMPT0001983'],
              symptomName: ['Abdomen Sounds'],
              listValues: ['No Abdomen Bruit']
            },
              {
                text: 'Abdominal aotic bruit is noted.',
                normal: false,
                key: 'Abdominal Aortic Bruit',
                code: 'ca-5-0a',
                symptomIds: ['SYMPT0001983'],
                symptomName: ['Abdomen Sounds'],
                listValues: ['Bruit']
              },
              {
                text: 'Pulsatile mass of the abdomen is noted.',
                normal: false,
                key: 'Abdominal Pulsatile Mass',
                code: 'ca-5-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['Pulsatile Mass']
              }]
        },
        {
          description: 'Femoral pulses',
          mod:
            [{
              text: 'Femoral pulses are normal and symmetric.',
              normal: true,
              key: 'Normal Findings',
              code: 'cf-6-0n',
              symptomIds: ['SYMPT0004282'],
              symptomName: ['Weak Pulse'],
              listValues: ['Normal Femoral']
            },
              {
                text: 'Right femoral pulse is weak.',
                normal: false,
                key: 'Decreased Femoral Pulses, Right',
                code: 'cf-6-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Right Femoral']
              },
              {
                text: 'Left femoral pulse is weak.',
                normal: false,
                key: 'Decreased Femoral Pulses, Left',
                code: 'cf-6-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Left Femoral']
              },
              {
                text: 'Femoral pulses are not symmetric.',
                normal: false,
                key: 'Asymmetric Femoral Pulses',
                code: 'cf-6-0a',
                symptomIds: ['SYMPT0004282'],
                symptomName: ['Weak Pulse'],
                listValues: ['Femoral Assymetric']
              }]
        },
        {
          description: 'Jugular Veins',
          mod:
            [{
              text: 'No jugular venous distension (JVD).',
              normal: true,
              key: 'Normal Findings',
              code: 'cj-7-0n',
              symptomIds: ['SYMPT0007858'],
              symptomName: ['Jugular Venous Distention'],
              listValues: ['Not Present']
            },
              {
                text: 'Jugular venous distension (JVD) is noted.',
                normal: false,
                key: 'Jugular Venous Distension (JVD)',
                code: 'cj-7-0a',
                symptomIds: ['SYMPT0007858'],
                symptomName: ['Jugular Venous Distention'],
                listValues: ['Present']
              },
              {
                text: 'No hepatojugular reflux noted.',
                normal: true,
                key: 'Hepatojugular Reflux Maneuver, Negative',
                code: 'cj-7-1n',
                symptomIds: ['SYMPT0007859'],
                symptomName: ['Hepato Jugular Reflux'],
                listValues: ['Negative']
              },
              {
                text: 'The patient has hepatojugular reflux.',
                normal: false,
                key: 'Hepatojugular Reflux Maneuver, Positive',
                code: 'cj-7-1a',
                symptomIds: ['SYMPT0007859'],
                symptomName: ['Hepato Jugular Reflux'],
                listValues: ['Positive']
              }]
        }]
  },
  {
    examName: 'Respiratory',
    descriptionsArray:
      [{
        description: 'Respiratory distress',
        defaultNormal: true,
        mod:
          [{
            text: 'No increased work of breathing.',
            normal: true,
            key: 'No Respiratory Distress',
            code: 'rr-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007787'],
            symptomName: ['Respiratory Effort'],
            listValues: ['No Distress']
          },
            {
              text: 'Increased work of breathing.',
              normal: false,
              key: 'Respiratory Distress',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007787'],
              symptomName: ['Respiratory Effort'],
              listValues: ['Respiratory Distress']
            },
            {
              text: 'Tracheal deviation is noted.',
              normal: false,
              key: 'Tracheal Deviation',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007852'],
              symptomName: ['Tracheak Deviation'],
              listValues: ['']
            },
            {
              text: 'Hemoptysis is noted.',
              normal: false,
              key: 'Hemoptysis',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007853'],
              symptomName: ['Hemoptysis'],
              listValues: ['']
            },
            {
              text: 'Breathless.',
              normal: false,
              key: 'Shortness of Breath',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007787'],
              symptomName: ['Respiratory Effort'],
              listValues: ['Shortness of Breath']
            },
            {
              text: 'Tachypnea.',
              normal: false,
              key: 'Tachypnea',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0002903'],
              symptomName: ['Abnormal Respiratory Rate'],
              listValues: ['Tachypnea']
            },
            {
              text: 'Bradypnea.',
              normal: false,
              key: 'Bradypnea',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0002903'],
              symptomName: ['Abnormal Respiratory Rate'],
              listValues: ['Bradypnea']
            }]
      },
        {
          description: 'Breath sounds',
          defaultNormal: true,
          mod:
            [{
              text:
                'Chest is clear to auscultation, without wheezes, rales, or rhonchi.',
              normal: true,
              key: 'Normal Exam',
              code: 'rb-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0001981'],
              symptomName: ['Respiratory Sounds'],
              listValues: ['Clear']
            },
              {
                text: 'Wheezing is heard.',
                normal: false,
                key: 'Wheezing',
                code: 'rb-1-0a',
                symptomIds: ['SYMPT0001981'],
                symptomName: ['Respiratory Sounds'],
                listValues: ['Wheezing']
              },
              {
                text: 'Rales (crackles) are heard.',
                normal: false,
                key: 'Rales (Crackles)',
                code: 'rb-1-0a',
                symptomIds: ['SYMPT0001981'],
                symptomName: ['Respiratory Sounds'],
                listValues: ['Crackles/Rales']
              },
              {
                text: 'Rhonchi are heard.',
                normal: false,
                key: 'Rhonchi',
                code: 'rb-1-0a',
                symptomIds: ['SYMPT0001981'],
                symptomName: ['Respiratory Sounds'],
                listValues: ['Rhonchi']
              },
              {
                text: 'Diminished breath sounds are heard.',
                normal: false,
                key: 'Decreased Breath Sounds',
                code: 'rb-1-0a',
                symptomIds: ['SYMPT0001981'],
                symptomName: ['Respiratory Sounds'],
                listValues: ['Diminished Breath Sounds']
              },
              {
                text: 'Absent breath sounds noted.',
                normal: false,
                key: 'Absent Breath Sounds',
                code: 'rb-1-0a',
                symptomIds: ['SYMPT0001981'],
                symptomName: ['Respiratory Sounds'],
                listValues: ['No Breath Sounds']
              },
              {
                text: 'Pleural rub is noted.',
                normal: false,
                key: 'Pleural Rub',
                code: 'rb-1-0a',
                symptomIds: ['SYMPT0001981'],
                symptomName: ['Respiratory Sounds'],
                listValues: ['Pleural Rub']
              }]
        },
        {
          description: 'Percussion',
          mod:
            [{
              text: 'No dullness to percussion.',
              normal: true,
              key: 'Normal Exam',
              code: 'rp-2-0n',
              symptomIds: ['SYMPT0007854'],
              symptomName: ['Chest Percussion'],
              listValues: ['Normal']
            },
              {
                text: 'Dullness to percussion is noted.',
                normal: false,
                key: 'Abnormal',
                code: 'rp-2-0a',
                symptomIds: ['SYMPT0007854'],
                symptomName: ['Chest Percussion'],
                listValues: ['Dullness']
              }]
        },
        {
          description: 'Tacile fremitus',
          mod:
            [{
              text: 'Normal tactile fremitus noted.',
              normal: true,
              key: 'Normal Tactile Fremitus',
              code: 'rt-3-0n',
              symptomIds: ['SYMPT0007855'],
              symptomName: ['Chest Palpation'],
              listValues: ['Normal']
            },
              {
                text: 'Increased tactile fremitus noted.',
                normal: false,
                key: 'Increased Tactile Fremitus',
                code: 'rt-3-0a',
                symptomIds: ['SYMPT0007855'],
                symptomName: ['Chest Palpation'],
                listValues: ['Increased Tactile Fremitus']
              },
              {
                text: 'Decreased tactile Fremitus noted.',
                normal: false,
                key: 'Decreased Tactile Fremitus',
                code: 'rt-3-0a',
                symptomIds: ['SYMPT0007855'],
                symptomName: ['Chest Palpation'],
                listValues: ['Decreased Tactile Fremitus']
              }]
        }]
  },
  {
    examName: 'GI',
    descriptionsArray:
      [{
        description: 'Auscultation',
        defaultNormal: true,
        mod:
          [{
            text: 'Normal bowel sounds are present.',
            normal: true,
            key: 'Normal Bowel Sounds',
            code: 'ga-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0001983'],
            symptomName: ['Abdomen Sounds'],
            listValues: ['Normal Bowel Sounds']
          },
            {
              text: 'Hyperactive bowel sounds are present.',
              normal: false,
              key: 'Increased Bowel Sounds',
              code: 'ga-0-0a',
              symptomIds: ['SYMPT0001983'],
              symptomName: ['Abdomen Sounds'],
              listValues: ['Hyperactive']
            },
            {
              text: 'Hypoactive bowel sounds are present.',
              normal: false,
              key: 'Decreased Bowel Sounds',
              code: 'ga-0-0a',
              symptomIds: ['SYMPT0001983'],
              symptomName: ['Abdomen Sounds'],
              listValues: ['Hypoactive']
            },
            {
              text: 'High-pitched bowel sounds are present.',
              normal: false,
              key: 'High-Pitched Bowel Sounds',
              code: 'ga-0-0a',
              symptomIds: ['SYMPT0001983'],
              symptomName: ['Abdomen Sounds'],
              listValues: ['High Pitched Bowel']
            },
            {
              text: 'No bowel sounds are present in all 4 quadrants.',
              normal: false,
              key: 'Absent Bowel Sounds',
              code: 'ga-0-0a',
              symptomIds: ['SYMPT0001983'],
              symptomName: ['Abdomen Sounds'],
              listValues: ['Silent Abdomen']
            }]
      },
        {
          description: 'Palpation',
          defaultNormal: true,
          mod:
            [{
              text: 'Abdomen is soft, non-tender, and non-distended.',
              normal: true,
              key: 'Normal Abdominal Exam',
              code: 'gp-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007785'],
              symptomName: ['Abdominal Palpation'],
              listValues: ['Normal']
            },
              {
                text: 'Firmness of the abdominal wall is noted.',
                normal: false,
                key: 'Guarding',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0004232'],
                symptomName: ['Board-Like Abdomen'],
                listValues: ['']
              },
              {
                text: 'Tenderness is elicited on palpation of RUQ.',
                normal: false,
                key: 'Tenderness, RUQ',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['RUQ - Tender']
              },
              {
                text: 'Tenderness is elicited on palpation of epgastic area.',
                normal: false,
                key: 'Tenderness, Epigastric',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['Epigastric - Tender']
              },
              {
                text: 'Tenderness is elicited on palpation of LUQ.',
                normal: false,
                key: 'Tenderness, LUQ',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['LUQ - Tender']
              },
              {
                text: 'Tenderness is elicited on palpation of RLQ.',
                normal: false,
                key: 'Tenderness, RLQ',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['RLQ - Tender']
              },
              {
                text: 'Tenderness is elicited on palpation of LLQ.',
                normal: false,
                key: 'Tenderness, LLQ',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['LLQ - Tender']
              },
              {
                text:
                  'Tenderness is elicited on palpation of suprapubic/hypogastic area.',
                normal: false,
                key: 'Tenderness, Suprapubic/\nHypogastric',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['Suprapubic - Tender']
              },
              {
                text: 'Distention of the abdomen is noted.',
                normal: false,
                key: 'Distention',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['Distended']
              },
              {
                text: 'Surgical scar is noted.',
                normal: false,
                key: 'Surgical Scar',
                code: 'gp-1-0a',
                symptomIds: ['SYMPT0007860'],
                symptomName: ['Abdominal Surgical Scar'],
                listValues: ['']
              }]
        },
        {
          description: 'Mass',
          defaultNormal: true,
          mod:
            [{
              text: 'No palpable mass(es).',
              normal: true,
              key: 'Normal',
              code: 'gm-2-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007785'],
              symptomName: ['Abdominal Palpation'],
              listValues: ['No Mass']
            },
              {
                text: 'Palpable mass is noted.',
                normal: false,
                key: 'Mass On Palpation',
                code: 'gm-2-0a',
                symptomIds: ['SYMPT0003465'],
                symptomName: ['Abdominal Exam'],
                listValues: ['Mass']
              }]
        },
        {
          description: 'Liver or spleen enlarged',
          defaultNormal: true,
          mod:
            [{
              text: 'No hepato-splenomegaly noted.',
              normal: true,
              key: 'Normal',
              code: 'gl-3-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007786'],
              symptomName: ['Abdominal Palpation'],
              listValues: ['No Hepato-Splenomegaly']
            },
              {
                text: 'Hepatomegaly is noted.',
                normal: false,
                key: 'Liver Enlargement',
                code: 'gl-3-0a',
                symptomIds: ['SYMPT0003465'],
                symptomName: ['Abdominal Exam'],
                listValues: ['Enlarged Liver']
              },
              {
                text: 'Splenomegaly is noted.',
                normal: false,
                key: 'Spleen Enlargement',
                code: 'gl-3-0a',
                symptomIds: ['SYMPT0003465'],
                symptomName: ['Abdominal Exam'],
                listValues: ['Enlarged Spleen']
              }]
        },
        {
          description: 'Murphys sign',
          mod:
            [{
              text:
                'No pain is elicited, with deep breath, during palpation of the gall bladder fossae.',
              normal: true,
              key: 'Murphys Sign, Negative',
              code: 'gm-4-0n',
              symptomIds: ['SYMPT0007785'],
              symptomName: ['Abdominal Palpation'],
              listValues: [`Murphy's Sign Negative`]
            },
              {
                text:
                  'Pain is elicited, with deep breath, during palpation of the gall bladder fossae.',
                normal: false,
                key: 'Murphys Sign, Positive',
                code: 'gm-4-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: [`Murphy's Sign Positive`]
              }]
        },
        {
          description: 'Rectal exam',
          mod:
            [{
              text:
                'Normal sphincter tone, non-tender, no hemorrhoids or masses.',
              normal: true,
              key: 'Normal Exam',
              code: 'gr-5-0n',
              symptomIds: ['SYMPT0003924'],
              symptomName: ['Rectal Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Abnormal sphincter tone noted.',
                normal: false,
                key: 'Sphincter Tone, Abnormal',
                code: 'gr-5-0a',
                symptomIds: ['SYMPT0003924'],
                symptomName: ['Rectal Exam'],
                listValues: ['Poor Sphincter']
              },
              {
                text: 'Rectal tenderness is noted.',
                normal: false,
                key: 'Tenderness',
                code: 'gr-5-0a',
                symptomIds: ['SYMPT0003924'],
                symptomName: ['Rectal Exam'],
                listValues: ['Tender']
              },
              {
                text: 'Hemorrhoid(s) noted.',
                normal: false,
                key: 'Hemorrhoids',
                code: 'gr-5-0a',
                symptomIds: ['SYMPT0003924'],
                symptomName: ['Rectal Exam'],
                listValues: ['Hemorroids']
              },
              {
                text: 'Rectal mass(es) noted.',
                normal: false,
                key: 'Masses',
                code: 'gr-5-0a',
                symptomIds: ['SYMPT0003924'],
                symptomName: ['Rectal Exam'],
                listValues: ['Anal Mass']
              }]
        },
        {
          description: 'Hernia',
          mod:
            [{
              text: 'No ventral or inguinal hernia noted.',
              normal: true,
              key: 'Normal',
              code: 'gh-6-0n',
              symptomIds: ['SYMPT0003465'],
              symptomName: ['Abdominal Exam'],
              listValues: ['No Hernia']
            },
              {
                text: 'Hernia of the abdominal wall noted.',
                normal: false,
                key: 'Ventral Hernia',
                code: 'gh-6-0a',
                symptomIds: ['SYMPT0003465'],
                symptomName: ['Abdominal Exam'],
                listValues: ['Hernia']
              },
              {
                text: 'Inguinal hernia noted.',
                normal: false,
                key: 'Inguinal Hernia',
                code: 'gh-6-0a',
                symptomIds: ['SYMPT0003465'],
                symptomName: ['Abdominal Exam'],
                listValues: ['Hernia']
              }]
        },
        {
          description: 'Hemetest: stool',
          mod:
            [{
              text: 'Fecal occult blood, negative.',
              normal: true,
              key: 'Negative Test',
              code: 'gh-7--1n',
              symptomIds: ['SYMPT0003875'],
              symptomName: ['Fecal occult blood Test(FOBT)'],
              listValues: ['Negative']
            },
              {
                text: 'Fecal occult blood, positive.',
                normal: false,
                key: 'Positive Test',
                code: 'gh-7--1a',
                symptomIds: ['SYMPT0003875'],
                symptomName: ['Fecal occult blood Test(FOBT)'],
                listValues: ['Positive']
              }]
        }]
  },
  {
    examName: 'ENT',
    descriptionsArray:
      [{
        description: 'External Ear and Nose',
        defaultNormal: true,
        mod:
          [{
            text:
              'Inspection and palpation of the external ear and nose are unremarkable.',
            normal: true,
            key: 'Normal Exam Ear and Nose',
            code: 'ee-1-0n',
            commonFindingFor: ['left ear', 'right ear', 'nostril'],
            defaultNormal: true,
            findingFor: ['left ear', 'right ear', 'left nostril', 'right nostril'],
            symptomIds: ['SYMPT0007849', 'SYMPT0001328', 'SYMPT0001329'],
            symptomName: ['External Nose', 'Otoscope Ear', 'Otoscope Ear'],
            listValues: ['Normal Exam', 'Right External Ear - Normal Exam', 'Left External Ear - Normal Exam']
          },
            {
              text: 'No inflammation or tenderness noted, right ear.',
              normal: true,
              key: 'Right Ear Normal',
              code: 'ee-1-1n',
              findingFor: ['right ear'],
              symptomIds: ['SYMPT0001328'],
              symptomName: ['Otoscope Ear'],
              listValues: ['Right External Ear - Normal Exam']
            },
            {
              text: 'Inflammation is noted, right ear.',
              normal: false,
              key: 'Right Ear Erythema/Swelling',
              code: 'ee-1-1a',
              findingFor: ['right ear'],
              symptomIds: ['SYMPT0001328'],
              symptomName: ['Otoscope Ear'],
              listValues: ['Inflammation of Outer Ear']
            },
            {
              text: 'Palpation elicits tenderness, right ear.',
              normal: false,
              key: 'Right Ear Tenderness',
              code: 'ee-1-1a',
              findingFor: ['right ear'],
              symptomIds: ['SYMPT0007847'],
              symptomName: ['Right External Ear'],
              listValues: ['Tenderness']
            },
            {
              text: 'No inflammation or tenderness noted, left ear.',
              normal: true,
              key: 'Left Ear Normal',
              code: 'ee-1-2n',
              findingFor: ['left ear'],
              symptomIds: ['SYMPT0001329'],
              symptomName: ['Otoscope Ear'],
              listValues: ['Left External Ear - Normal Exam']
            },
            {
              text: 'Inflammation is noted, left ear.',
              normal: false,
              key: 'Left Ear Erythema/Swelling',
              code: 'ee-1-2a',
              findingFor: ['left ear'],
              symptomIds: ['SYMPT0001328'],
              symptomName: ['Otoscope Ear'],
              listValues: ['Inflammation of Outer Ear']
            },
            {
              text: 'Palpation elicits tenderness, left ear.',
              normal: false,
              key: 'Left Ear Tenderness',
              code: 'ee-1-2a',
              findingFor: ['left ear'],
              symptomIds: ['SYMPT0007848'],
              symptomName: ['Left External Ear'],
              listValues: ['Tenderness']
            },
            {
              text: 'No inflammation or tenderness of the nose noted, left nostril.',
              normal: true,
              key: 'Normal, Left Nostril',
              code: 'ee-1-3n',
              findingFor: ['left nostril'],
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Normal Exam']
            },
            {
              text: 'Inflammation of the nose is noted, left nostril.',
              normal: false,
              key: 'Erythema/Swelling, Left Nostril',
              code: 'ee-1-3a',
              findingFor: ['left nostril'],
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Inflammation']
            },
            {
              text: 'Palpation of the nose elicits tenderness, left nostril.',
              normal: false,
              key: 'Tenderness, Left Nostril',
              code: 'ee-1-3a',
              findingFor: ['left nostril'],
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Tenderness']
            },
            {
              text: 'Nasal discharge is noted, left nostril.',
              normal: false,
              key: 'Discharge, Left Nostril',
              code: 'ee-1-3a',
              findingFor: ['left nostril'],
              symptomIds: ['SYMPT0002001'],
              symptomName: ['Scope Exam of Nose'],
              listValues: ['Discharge']
            },
            {
              text: 'No inflammation or tenderness of the nose noted, right nostril.',
              normal: true,
              key: 'Normal, Right Nostril',
              code: 'ee-1-4n',
              findingFor: ['right nostril'],
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Normal Exam']
            },
            {
              text: 'Inflammation of the nose is noted, right nostril.',
              normal: false,
              key: 'Erythema/Swelling, Right Nostril',
              code: 'ee-1-4a',
              findingFor: ['right nostril'],
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Inflammation']
            },
            {
              text: 'Palpation of the nose elicits tenderness, right nostril.',
              normal: false,
              key: 'Tenderness, Right Nostril',
              code: 'ee-1-4a',
              findingFor: ['right nostril'],
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Tenderness']
            },
            {
              text: 'Nasal discharge is noted, right nostril.',
              normal: false,
              key: 'Discharge, Right Nostril',
              code: 'ee-1-4a',
              findingFor: ['right nostril'],
              symptomIds: ['SYMPT0002001'],
              symptomName: ['Scope Exam of Nose'],
              listValues: ['Discharge']
            }]
      },
        {
          description: 'External ear canal',
          defaultNormal: true,
          mod:
            [{
              text:
                'Right ear canal is patent without inflammation or discharge.',
              normal: true,
              key: 'Normal, Right Canal',
              code: 'ee-2-1n',
              relatedBodyPart: 'right ear',
              defaultNormal: true,
              findingFor: ['right ear'],
              symptomIds: ['SYMPT0007641'],
              symptomName: ['Right Ear - Exam External Ear Canal'],
              listValues: ['Normal Exam']
            },
              {
                text: 'Redness and swelling of the right ear canal noted.',
                normal: false,
                key: 'Inflammation, Right Canal',
                code: 'ee-2-1a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007641'],
                symptomName: ['Right Ear - Exam External Ear Canal'],
                listValues: ['Skin(Canal) - Edema', 'Skin(Canal) - Erythema']
              },
              {
                text: 'Discharge from right ear canal noted.',
                normal: false,
                key: 'Dischage, Right Canal',
                code: 'ee-2-1a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007641'],
                symptomName: ['Right Ear - Exam External Ear Canal'],
                listValues: ['Any Discharge']
              },
              {
                text: 'Foreign body is seen in right ear canal.',
                normal: false,
                key: 'Foreign Body, Right Canal',
                code: 'ee-2-1a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007641'],
                symptomName: ['Right Ear - Exam External Ear Canal'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Cerumen impaction of right ear.',
                normal: false,
                key: 'Cerumen Impaction, Right Canal',
                code: 'ee-2-1a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007641'],
                symptomName: ['Right Ear - Exam External Ear Canal'],
                listValues: ['Cerumen - Impacted']
              },
              {
                text:
                  'Left ear canal is patent without inflammation or discharge.',
                normal: true,
                key: 'Normal, Left Canal',
                code: 'ee-2-2n',
                relatedBodyPart: 'left ear',
                defaultNormal: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007642'],
                symptomName: ['Left Ear - Exam External Ear Canal'],
                listValues: ['Normal Exam']
              },
              {
                text: 'Redness and swelling of the left ear canal noted.',
                normal: false,
                key: 'Inflammation, Left Canal',
                code: 'ee-2-2a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007642', 'SYMPT0007642'],
                symptomName: ['Left Ear - Exam External Ear Canal', 'Left Ear - Exam External Ear Canal'],
                listValues: ['Skin(Canal) - Edema', 'Skin(Canal) - Erythema']
              },
              {
                text: 'Discharge from left ear canal noted.',
                normal: false,
                key: 'Discharge, Left Canal',
                code: 'ee-2-2a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007642'],
                symptomName: ['Left Ear - Exam External Ear Canal'],
                listValues: ['Any Discharge']
              },
              {
                text: 'Foreign body is seen in left ear canal.',
                normal: false,
                key: 'Foreign body, Left Canal',
                code: 'ee-2-2a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007642'],
                symptomName: ['Left Ear - Exam External Ear Canal'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Cerumen impaction of left ear.',
                normal: false,
                key: 'Cerumen impaction, Left Canal',
                code: 'ee-2-2a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007642'],
                symptomName: ['Left Ear - Exam External Ear Canal'],
                listValues: ['Cerumen - Impacted']
              }]
        },
        {
          description: 'Hearing',
          mod:
            [{
              text: 'Hearing intact bilaterally.',
              normal: true,
              key: 'Normal, Bilateral',
              code: 'eh-4-0n',
              findingFor: ['right ear', 'left ear'],
              symptomIds: ['SYMPT0007850'],
              symptomName: ['Hearing Exam'],
              listValues: ['Normal Exam']
            },
              {
                text: 'Hearing intact, right ear.',
                normal: true,
                key: 'Normal, Right Ear',
                code: 'eh-4-1n',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Right - Normal Hearing']
              },
              {
                text: 'Decreased hearing, right ear.',
                normal: false,
                key: 'Decreased, Right Ear',
                code: 'eh-4-1a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Right - Decreased']
              },
              {
                text: 'Absent hearing, right ear.',
                normal: false,
                key: 'Absent, Right Ear',
                code: 'eh-4-1a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Right - Absent']
              },
              {
                text: 'Hearing intact, left ear.',
                normal: true,
                key: 'Normal, Left Ear',
                code: 'eh-4-2n',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Left - Normal']
              },
              {
                text: 'Decreased hearing, left ear.',
                normal: false,
                key: 'Decreased, Left Ear',
                code: 'eh-4-2a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Left - Decreased']
              },
              {
                text: 'Absent hearing, left ear.',
                normal: false,
                key: 'Absent, Left Ear',
                code: 'eh-4-2a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Left - Absent']
              },
              {
                text: 'No lateralization on Weber test.',
                normal: true,
                key: 'Weber Test, Normal',
                code: 'eh-4-3n',
                findingFor: ['right ear', 'left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Weber - No Lateralization']
              },
              {
                text:
                  'Patient has lateralization of sound to right ear on Weber test.',
                normal: false,
                key: 'Right Lateralization',
                code: 'eh-4-3a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Weber - Right Lateralization']
              },
              {
                text:
                  'Patient has lateralization of sound to left ear on Weber test.',
                normal: false,
                key: 'Left Lateralization',
                code: 'eh-4-3a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Weber - Left Lateralization']
              },
              {
                text: 'Rinne test negative right ear.',
                normal: true,
                key: 'Rinne Test, Normal, Right',
                code: 'eh-4-4n',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Rinne - Negative Right']
              },
              {
                text: 'Rinne test positive right ear.',
                normal: false,
                key: 'Rinne Test, Abnormal, Right',
                code: 'eh-4-4a',
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Rinne - Positive Right']
              },
              {
                text: 'Rinne test negative left ear.',
                normal: true,
                key: 'Rinne Test, Normal, Left',
                code: 'eh-4-5n',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Rinne - Negative Left']
              },
              {
                text: 'Rinne test positive left ear.',
                normal: false,
                key: 'Rinne Test, Abnormal, Left',
                code: 'eh-4-5a',
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007850'],
                symptomName: ['Hearing Exam'],
                listValues: ['Rinne - Positive Left']
              }]
        },
        {
          description: 'Tympanic membrane',
          buttonText: 'TM Description',
          defaultNormal: true,
          mod:
            [
              {
                text: 'Contour-normal.',
                normal: true,
                key: 'Contour-normal, right ear',
                buttonText: 'Normal',
                code: 'edr-5-1n',
                relatedBodyPart: 'right ear',
                defaultNormal: true,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Contour - Normal']
              },
              {
                text: 'Contour-retracted.',
                normal: false,
                key: 'Contour-retracted, right ear',
                buttonText: 'Retracted',
                code: 'edr-5-1a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Contour - Retracted']
              },
              {
                text: 'Contour-bulging.',
                normal: false,
                key: 'Contour-bulging, right ear',
                buttonText: 'Bulging',
                code: 'edr-5-1a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Contour - Bulging']
              },
              {
                text: 'Color-gray.',
                normal: true,
                key: 'Color-gray, right ear',
                buttonText: 'Gray',
                code: 'edr-5-2n',
                relatedBodyPart: 'right ear',
                defaultNormal: true,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Gray']
              },
              {
                text: 'Color-yellow.',
                normal: false,
                key: 'Color-yellow, right ear',
                buttonText: 'Yellow',
                code: 'edr-5-2a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Yellow']
              },
              {
                text: 'Color-amber.',
                normal: false,
                key: 'Color-amber, right ear',
                buttonText: 'Amber',
                code: 'edr-5-2a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Amber']
              },
              {
                text: 'Color-white.',
                normal: false,
                key: 'Color-white, right ear',
                buttonText: 'White',
                code: 'edr-5-2a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Color - White']
              },
              {
                text: 'Color-red.',
                normal: false,
                key: 'Color-red, right ear',
                buttonText: 'Red',
                code: 'edr-5-2a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Red']
              },
              {
                text: 'Color-blue.',
                normal: false,
                key: 'Color-blue, right ear',
                buttonText: 'Blue',
                code: 'edr-5-2a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Blue']
              },
              {
                text: 'Translucency-translucent.',
                normal: true,
                key: 'Translucency-translucent, right ear',
                buttonText: 'Translucent',
                code: 'edr-5-3n',
                relatedBodyPart: 'right ear',
                defaultNormal: true,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Translucency - Translucent']
              },
              {
                text: 'Translucency-semiopaque.',
                normal: false,
                key: 'Translucency-semiopaque, right ear',
                buttonText: 'Semiopaque',
                code: 'edr-5-3a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Translucency - Semiopaque']
              },
              {
                text: 'Translucency-opaque.',
                normal: false,
                key: 'Translucency-opaque, right ear',
                buttonText: 'Opaque',
                code: 'edr-5-3a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Translucency - Opaque']
              },
              {
                text: 'Normal mobility with insufflation.',
                normal: true,
                key: 'Mobility-normal, right ear',
                buttonText: 'Normal',
                code: 'edr-5-4n',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Normal']
              },
              {
                text: 'Increased mobility with insufflation.',
                normal: false,
                key: 'Mobility-increased, right ear',
                buttonText: 'Increased',
                code: 'edr-5-4a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Increased']
              },
              {
                text: 'Decreased mobility with insufflation.',
                normal: false,
                key: 'Mobility-decreased, right ear',
                buttonText: 'Decreased',
                code: 'edr-5-4a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Decreased']
              },
              {
                text: 'Absent mobility with insufflation.',
                normal: false,
                key: 'Mobility-absent, right ear',
                buttonText: 'Absent',
                code: 'edr-5-4a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Absent']
              },
              {
                text: 'Perforation noted.',
                normal: false,
                key: 'Perforation, right ear',
                buttonText: 'Perforation',
                code: 'edr-5-5a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Other - Perforation']
              },
              {
                text: 'PE tube in place.',
                normal: false,
                key: 'Tube, right ear',
                buttonText: 'Tube',
                code: 'edr-5-6a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Other - Tube']
              },
              {
                text: 'Fluid level noted behind TM.',
                normal: false,
                key: 'Fluid Level, right ear',
                buttonText: 'Fluid Level',
                code: 'edr-5-7a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Fluid Level']
              },
              {
                text: 'Bubbles noted.',
                normal: false,
                key: 'Bubbles Present, right ear',
                buttonText: 'Bubbles',
                code: 'edr-5-8a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Bubbles Present']
              },
              {
                text: 'Scarring/Sclerosis of TM noted.',
                normal: false,
                key: 'Sclerosis, right ear',
                buttonText: 'Sclerosis',
                code: 'edr-5-9a',
                relatedBodyPart: 'right ear',
                defaultNormal: false,
                findingFor: ['right ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Sclerosis']
              },
              {
                text: 'Contour-normal.',
                normal: true,
                key: 'Contour-normal, left ear',
                buttonText: 'Normal',
                code: 'edl-5-1n',
                relatedBodyPart: 'left ear',
                defaultNormal: true,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007639'],
                symptomName: ['Right Ear - Exam Tympanic Membrane'],
                listValues: ['Contour - Normal']
              },
              {
                text: 'Contour-retracted.',
                normal: false,
                key: 'Contour-retracted, left ear',
                buttonText: 'Retracted',
                code: 'edl-5-1a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Contour - Retracted']
              },
              {
                text: 'Contour-bulging.',
                normal: false,
                key: 'Contour-bulging, left ear',
                buttonText: 'Bulging',
                code: 'edl-5-1a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Contour - Bulging']
              },
              {
                text: 'Color-gray.',
                normal: true,
                key: 'Color-gray, left ear',
                buttonText: 'Gray',
                code: 'edl-5-2n',
                relatedBodyPart: 'left ear',
                defaultNormal: true,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Gray']
              },
              {
                text: 'Color-yellow.',
                normal: false,
                key: 'Color-yellow, left ear',
                buttonText: 'Yellow',
                code: 'edl-5-2a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Yellow']
              },
              {
                text: 'Color-amber.',
                normal: false,
                key: 'Color-amber, left ear',
                buttonText: 'Amber',
                code: 'edl-5-2a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Amber']
              },
              {
                text: 'Color-white.',
                normal: false,
                key: 'Color-white, left ear',
                buttonText: 'White',
                code: 'edl-5-2a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Color - White']
              },
              {
                text: 'Color-red.',
                normal: false,
                key: 'Color-red, left ear',
                buttonText: 'Red',
                code: 'edl-5-2a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Red']
              },
              {
                text: 'Color-blue.',
                normal: false,
                key: 'Color-blue, left ear',
                buttonText: 'Blue',
                code: 'edl-5-2a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Color - Blue']
              },
              {
                text: 'Translucency-translucent.',
                normal: true,
                key: 'Translucency-translucent, left ear',
                buttonText: 'Translucent',
                code: 'edl-5-3n',
                relatedBodyPart: 'left ear',
                defaultNormal: true,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Translucency - Translucent']
              },
              {
                text: 'Translucency-semiopaque.',
                normal: false,
                key: 'Translucency-semiopaque, left ear',
                buttonText: 'Semiopaque',
                code: 'edl-5-3a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Translucency - Semiopaque']
              },
              {
                text: 'Translucency-opaque.',
                normal: false,
                key: 'Translucency-opaque, left ear',
                buttonText: 'Opaque',
                code: 'edl-5-3a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Translucency - Opaque']
              },
              {
                text: 'Normal mobility with insufflation.',
                normal: true,
                key: 'Mobility-normal, left ear',
                buttonText: 'Normal',
                code: 'edl-5-4n',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Normal']
              },
              {
                text: 'Increased mobility with insufflation.',
                normal: false,
                key: 'Mobility-increased, left ear',
                buttonText: 'Increased',
                code: 'edl-5-4a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Increased']
              },
              {
                text: 'Decreased mobility with insufflation.',
                normal: false,
                key: 'Mobility-decreased, left ear',
                buttonText: 'Decreased',
                code: 'edl-5-4a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Decreased']
              },
              {
                text: 'Absent mobility with insufflation.',
                normal: false,
                key: 'Mobility-absent, left ear',
                buttonText: 'Absent',
                code: 'edl-5-4a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                isSinglePick: true,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Mobility - Absent']
              },
              {
                text: 'Perforation noted.',
                normal: false,
                key: 'Perforation, left ear',
                buttonText: 'Perforation',
                code: 'edl-5-5a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Other - Perforation']
              },
              {
                text: 'PE tube in place.',
                normal: false,
                key: 'Tube, left ear',
                buttonText: 'Tube',
                code: 'edl-5-6a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Other - Tube']
              },
              {
                text: 'Fluid level noted behind TM.',
                normal: false,
                key: 'Fluid Level, left ear',
                buttonText: 'Fluid Level',
                code: 'edl-5-7a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Fluid Level']
              },
              {
                text: 'Bubbles noted.',
                normal: false,
                key: 'Bubbles Present, left ear',
                buttonText: 'Bubbles',
                code: 'edl-5-8a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Bubbles Present']
              },
              {
                text: 'Scarring/Sclerosis of TM noted.',
                normal: false,
                key: 'Sclerosis, left ear',
                buttonText: 'Sclerosis',
                code: 'edl-5-9a',
                relatedBodyPart: 'left ear',
                defaultNormal: false,
                findingFor: ['left ear'],
                symptomIds: ['SYMPT0007640'],
                symptomName: ['Left Ear - Exam Tympanic Membrane'],
                listValues: ['Sclerosis']
              },
            ]
        },
        {
          description: 'Sinus tenderness',
          mod:
            [{
              text: 'No sinus tenderness elicited from palpation or percussion, left nostril.',
              normal: true,
              key: 'Normal, Left Nostril',
              code: 'es-5-1n',
              relatedBodyPart: 'left nostril',
              findingFor: ['left nostril'],
              symptomIds: ['SYMPT0002071'],
              symptomName: ['Sinus Tenderness'],
              listValues: ['Normal']
            },
              {
                text:
                  'Tenderness is elicited with palpation/percussion of sinuses, left nostril.',
                normal: false,
                key: 'Palpation/Percussion Tenderness, Left Nostril',
                code: 'es-5-1a',
                findingFor: ['left nostril'],
                symptomIds: ['SYMPT0002071'],
                symptomName: ['Sinus Tenderness'],
                listValues: ['Left']
              },
              {
                text: 'No sinus tenderness elicited from palpation or percussion, right nostril.',
                normal: true,
                key: 'Normal, Right Nostril',
                code: 'es-5-2n',
                relatedBodyPart: 'right nostril',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002071'],
                symptomName: ['Sinus Tenderness'],
                listValues: ['Normal']
              },
              {
                text:
                  'Tenderness is elicited with palpation/percussion of sinuses, right nostril.',
                normal: false,
                key: 'Palpation/Percussion Tenderness, Right Nostril',
                code: 'es-5-2a',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002071'],
                symptomName: ['Sinus Tenderness'],
                listValues: ['Right']
              }]
        },
        {
          description: 'Nasal mucosa',
          mod:
            [{
              text:
                'Normal appearing nasal mucosa, without swelling, ulcers, or polyps, left nostril.',
              normal: true,
              key: 'Normal, Left Nostril',
              code: 'en-6-1n',
              relatedBodyPart: 'left nostril',
              findingFor: ['left nostril'],
              symptomIds: ['SYMPT0002001'],
              symptomName: ['Scope Exam of Nose'],
              listValues: ['Normal']
            },
              {
                text: 'Nasal mucosa appears swollen, left nostril.',
                normal: false,
                key: 'Mucosal Swelling, Left Nostril',
                code: 'en-6-1a',
                findingFor: ['left nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Swollen']
              },
              {
                text: 'Mucosal ulceration is noted, left nostril.',
                normal: false,
                key: 'Mucosal Ulcer, Left Nostril',
                code: 'en-6-1a',
                findingFor: ['left nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Ulcer']
              },
              {
                text: 'Nasal polyp(s) noted, left nostril.',
                normal: false,
                key: 'Nasal Polyps, Left Nostril',
                code: 'en-6-1a',
                findingFor: ['left nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Nasal Polyps']
              },
              {
                text: 'Rhinorrhea noted, left nostril.',
                normal: false,
                key: 'Rhinorrhea, Left Nostril',
                code: 'en-6-1a',
                findingFor: ['left nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Discharge']
              },
              {
                text: 'Epistaxis noted, left nostril.',
                normal: false,
                key: 'Epistaxis, Left Nostril',
                code: 'en-6-1a',
                findingFor: ['left nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Blood']
              },
              {
                text:
                  'Normal appearing nasal mucosa, without swelling, ulcers, or polyps, right nostril.',
                normal: true,
                key: 'Normal, Right Nostril',
                code: 'en-6-2n',
                relatedBodyPart: 'right nostril',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Normal']
              },
              {
                text: 'Nasal mucosa appears swollen, right nostril.',
                normal: false,
                key: 'Mucosal Swelling, Right Nostril',
                code: 'en-6-2a',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Swollen']
              },
              {
                text: 'Mucosal ulceration is noted, right nostril.',
                normal: false,
                key: 'Mucosal Ulcer, Right Nostril',
                code: 'en-6-2a',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Ulcer']
              },
              {
                text: 'Nasal polyp(s) noted, right nostril.',
                normal: false,
                key: 'Nasal Polyps, Right Nostril',
                code: 'en-6-2a',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Nasal Polyps']
              },
              {
                text: 'Rhinorrhea noted, right nostril.',
                normal: false,
                key: 'Rhinorrhea, Right Nostril',
                code: 'en-6-2a',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Discharge']
              },
              {
                text: 'Epistaxis noted, right nostril.',
                normal: false,
                key: 'Epistaxis, Right Nostril',
                code: 'en-6-2a',
                findingFor: ['right nostril'],
                symptomIds: ['SYMPT0002001'],
                symptomName: ['Scope Exam of Nose'],
                listValues: ['Blood']
              }]
        },
        {
          description: 'Mouth',
          defaultNormal: true,
          mod:
            [{
              text: 'Oral mucosa is moist without lesions.',
              normal: true,
              key: 'Normal Exam',
              code: 'em-7-0n',
              relatedBodyPart: 'throat exam',
              defaultNormal: true,
              findingFor: ['throat exam'],
              symptomIds: ['SYMPT0002007'],
              symptomName: ['Scope Exam of Mouth'],
              listValues: ['Normal']
            },
              {
                text: 'Oral mucosa is dry.',
                normal: false,
                key: 'Dry Mucosa',
                code: 'em-7-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Dry Mucosa']
              },
              {
                text: 'Oral mucosal lesions/ulcers noted.',
                normal: false,
                key: 'Mucosal Lesions/Ulcers',
                code: 'em-7-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Ulcers']
              },
              {
                text: 'Right parotid gland is swollen.',
                normal: false,
                key: 'Parotid Swelling, Right',
                code: 'em-7-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0007851'],
                symptomName: ['Parotid Exam'],
                listValues: ['Right Parotid Swollen']
              },
              {
                text: 'Left parotid gland is swollen.',
                normal: false,
                key: 'Parotid Swelling, Left',
                code: 'em-7-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0007851'],
                symptomName: ['Parotid Exam'],
                listValues: ['Left Parotid Swollen']
              }]
        },
        {
          description: 'Pharynx and tonsils',
          defaultNormal: true,
          mod:
            [{
              text:
                'Unremarkable pharynx/tonsils without erythema, edema, or exudate.',
              normal: true,
              key: 'Normal Exam',
              code: 'ep-0-0n',
              relatedBodyPart: 'throat exam',
              defaultNormal: true,
              findingFor: ['throat exam'],
              symptomIds: ['SYMPT0002007'],
              symptomName: ['Scope Exam of Mouth'],
              listValues: ['Normal']
            },
              {
                text: 'Pharyngeal redness and swelling are noted.',
                normal: false,
                key: 'Pharyx Erythema/Swelling',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Pharyngitis']
              },
              {
                text: 'Pharyngeal exudate noted.',
                normal: false,
                key: 'Pharynx Exudate',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Pharyngeal Exudate']
              },
              {
                text: 'Right tonsil redness and swelling noted.',
                normal: false,
                key: 'Right Tonsil Erythema/Swelling',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007', 'SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth', 'Scope Exam of Mouth'],
                listValues: ['Red Tonsil', 'Scope Exam of Mouth']
              },
              {
                text: 'Right tonsil exudate noted.',
                normal: false,
                key: 'Right Tonsil Exudate',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Right Tonsil Exudate']
              },
              {
                text: 'Left tonsil redness and swelling noted.',
                normal: false,
                key: 'Left Tonsil Erythema/swelling',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007', 'SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth', 'Scope Exam of Mouth'],
                listValues: ['Red Tonsil', 'Scope Exam of Mouth']
              },
              {
                text: 'Left tonsil exudate noted.',
                normal: false,
                key: 'Left Tonsil Exudate',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Left Tonsil Exudate']
              },
              {
                text: 'Tonsils removed.',
                normal: false,
                key: 'Tonsils removed',
                code: 'ep-0-0a',
                findingFor: ['throat exam'],
                symptomIds: ['SYMPT0002007'],
                symptomName: ['Scope Exam of Mouth'],
                listValues: ['Tonsils Removed']
              }]
        }]
  },
  {
    examName: 'Skin',
    descriptionsArray:
      [{
        description: 'Ecchymosis or rash',
        defaultNormal: true,
        mod:
          [{
            text: 'No ecchymosis or rash noted.',
            normal: true,
            key: 'Normal Exam',
            code: 'se-0-0n',
            relatedBodyPart: 'skin exam',
            defaultNormal: true,
            symptomIds: ['SYMPT0007817', 'SYMPT0007808'],
            symptomName: ['Bruising Exam', 'Rash Morphology'],
            listValues: ['No Bruising', 'No Rash']
          },
            {
              text: 'Ecchymosis is noted.',
              normal: false,
              key: 'Ecchymosis',
              code: 'se-0-0a',
              symptomIds: ['SYMPT0007817'],
              symptomName: ['Bruising Exam'],
              listValues: ['Any Bruising']
            },
            {
              text: 'Rash is noted.',
              normal: false,
              key: 'Rash',
              code: 'se-0-0a',
              symptomIds: ['SYMPT0007808'],
              symptomName: ['Rash Morphology'],
              listValues: ['Has Rash']
            }]
      },
        {
          description: 'Lesions',
          defaultNormal: true,
          mod:
            [{
              text: 'No skin lesions noted.',
              normal: true,
              key: 'Normal Exam',
              code: 'sl-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007805'],
              symptomName: ['Skin Lesions'],
              listValues: ['No Skin Lesion']
            },
              {
                text: 'Skin lesion(s) noted.',
                normal: false,
                key: 'Lesion(s)',
                code: 'sl-1-0a',
                symptomIds: ['SYMPT0007805'],
                symptomName: ['Skin Lesions'],
                listValues: ['Any Lesion']
              }]
        },
        {
          description: 'Temperature and texture',
          defaultNormal: true,
          mod:
            [{
              text: 'Skin is warm and dry.',
              normal: true,
              key: 'Normal',
              code: 'st-2-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007802'],
              symptomName: ['Temperature and Texture'],
              listValues: ['Warm and Dry']
            },
              {
                text: 'Skin hot.',
                normal: false,
                key: 'Hot',
                code: 'st-2-0a',
                symptomIds: ['SYMPT0007802'],
                symptomName: ['Temperature and Texture'],
                listValues: ['Hot']
              },
              {
                text: 'Cold skin.',
                normal: false,
                key: 'Cold',
                code: 'st-2-0a',
                symptomIds: ['SYMPT0007802'],
                symptomName: ['Temperature and Texture'],
                listValues: ['Cold']
              },
              {
                text: 'Moist skin.',
                normal: false,
                key: 'Moist',
                code: 'st-2-0a',
                symptomIds: ['SYMPT0007802'],
                symptomName: ['Temperature and Texture'],
                listValues: ['Moist']
              },
              {
                text: 'Oily skin',
                normal: false,
                key: 'Oily',
                code: 'st-2-0a',
                symptomIds: ['SYMPT0007802'],
                symptomName: ['Temperature and Texture'],
                listValues: ['Oily']
              }]
        },
        {
          description: 'Wound',
          defaultNormal: true,
          mod:
            [{
              text: 'No skin wounds noted.',
              normal: true,
              key: 'Normal Exam',
              code: 'sw-3-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007804'],
              symptomName: ['Wound'],
              listValues: ['No Wound']
            },
              {
                text: 'Skin wound(s) noted.',
                normal: false,
                key: 'Wound(s)',
                code: 'sw-3-0a',
                symptomIds: ['SYMPT0007804'],
                symptomName: ['Wound'],
                listValues: ['Any Wound']
              }]
        },
        {
          description: 'Breast inspection',
          defaultNormal: true,
          mod:
            [{
              text:
                'Normal chest contours, without deformity, asymmetry or discharge.',
              normal: true,
              key: 'Normal',
              code: 'sb-4-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007840'],
              symptomName: ['Breast Inspection'],
              listValues: ['Normal Inspection']
            },
              {
                text: 'Breast asymmetrical.',
                normal: false,
                key: 'Asymmetrical',
                code: 'sb-4-0a',
                symptomIds: ['SYMPT0007840'],
                symptomName: ['Breast Inspection'],
                listValues: ['Asymmetry']
              },
              {
                text: 'Discharge noted.',
                normal: false,
                key: 'Discharge',
                code: 'sb-4-0a',
                symptomIds: ['SYMPT0007840'],
                symptomName: ['Breast Inspection'],
                listValues: ['Discharge - Any']
              }]
        },
        {
          description: 'Breast palpation',
          defaultNormal: true,
          mod:
            [{
              text: 'No nodules, masses or tenderness.',
              normal: true,
              key: 'Normal',
              code: 'sb-5-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007841'],
              symptomName: ['Breast Palpation'],
              listValues: ['Normal Palpation Bilateral']
            },
              {
                text: 'Tenderness on palpation of right breast.',
                normal: false,
                key: 'Right Breast Tenderness',
                code: 'sb-5-0a',
                symptomIds: ['SYMPT0007841'],
                symptomName: ['Breast Palpation'],
                listValues: ['Right - Tenderness']
              },
              {
                text: 'Tenderness on palpation of left breast.',
                normal: false,
                key: 'Left Breast Tenderness',
                code: 'sb-5-0a',
                symptomIds: ['SYMPT0007841'],
                symptomName: ['Breast Palpation'],
                listValues: ['Left - Tenderness']
              },
              {
                text: 'Mass/nodule noted, right breast.',
                normal: false,
                key: 'Right Breast Mass/Nodule',
                code: 'sb-5-0a',
                symptomIds: ['SYMPT0007841'],
                symptomName: ['Breast Palpation'],
                listValues: ['Right - Lesion']
              },
              {
                text: 'Mass/nodule noted, left breast.',
                normal: false,
                key: 'Left Breast Mass/Nodule',
                code: 'sb-5-0a',
                symptomIds: ['SYMPT0007841'],
                symptomName: ['Breast Palpation'],
                listValues: ['Left - Lesion']
              }]
        }]
  },
  {
    examName: 'Muscular',
    descriptionsArray:
      [{
        description: 'Gait and Posture',
        defaultNormal: true,
        mod:
          [{
            text: 'Normal gait and posture.',
            normal: true,
            key: 'Normal',
            code: 'mg-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0004220', 'SYMPT0007819'],
            symptomName: ['Gait', 'Posture'],
            listValues: ['Normal Gait', 'Normal Posture']
          },
            {
              text: 'Abnormal gait is noted.',
              normal: false,
              key: 'Gait Abnormal',
              code: 'mg-0-0a',
              symptomIds: ['SYMPT0004220'],
              symptomName: ['Gait'],
              listValues: ['Any']
            },
            {
              text: 'Abnormal posture is noted.',
              normal: false,
              key: 'Posture Abnormal',
              code: 'mg-0-0a',
              symptomIds: ['SYMPT0007819'],
              symptomName: ['Posture'],
              listValues: ['Any']
            }]
      },
        {
          description: 'Head and neck',
          mod:
            [{
              text: 'Neck is supple with normal range of motion.',
              normal: true,
              key: 'Normal Exam',
              code: 'mh-1-0n',
              symptomIds: ['SYMPT0007842'],
              symptomName: ['Cervical Spine Exam'],
              listValues: ['Normal Cervical Exam']
            },
              {
                text: 'Decreased range of motion.',
                normal: false,
                key: 'Range of Motion',
                code: 'mh-1-0a',
                symptomIds: ['SYMPT0007842'],
                symptomName: ['Cervical Spine Exam'],
                listValues: ['ROM - Decreased']
              },
              {
                text: 'Bony tenderness is noted.',
                normal: false,
                key: 'Bony Tenderness',
                code: 'mh-1-0a',
                symptomIds: ['SYMPT0007842'],
                symptomName: ['Cervical Spine Exam'],
                listValues: ['Bony Tenderness']
              },
              {
                text: 'Neck mass is noted.',
                normal: false,
                key: 'Neck Mass',
                code: 'mh-1-0a',
                symptomIds: ['SYMPT0007842'],
                symptomName: ['Cervical Spine Exam'],
                listValues: ['Mass']
              }]
        },
        {
          description: 'Spine, ribs, pelvis',
          mod:
            [{
              text: 'Normal alignment, without bony tenderness.',
              normal: true,
              key: 'Normal Exam',
              code: 'ms-2-0n',
              symptomIds: ['SYMPT0007843'],
              symptomName: ['Thoracic Spine/Ribs Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Bony tenderness is noted.',
                normal: false,
                key: 'Bony Tenderness',
                code: 'ms-2-0a',
                symptomIds: ['SYMPT0007843'],
                symptomName: ['Thoracic Spine/Ribs Exam'],
                listValues: ['Bony Tenderness']
              },
              {
                text: 'Angulation of the spine is noted.',
                normal: false,
                key: 'Kyphosis',
                code: 'ms-2-0a',
                symptomIds: ['SYMPT0007843'],
                symptomName: ['Thoracic Spine/Ribs Exam'],
                listValues: ['Kyphosis']
              },
              {
                text: 'Lateral deviation of the spine is noted.',
                normal: false,
                key: 'Scoliosis',
                code: 'ms-2-0a',
                symptomIds: ['SYMPT0007843'],
                symptomName: ['Thoracic Spine/Ribs Exam'],
                listValues: ['Scoliosis']
              }]
        },
        {
          description: 'Upper extremities',
          defaultNormal: true,
          mod:
            [{
              text:
                'Normal range of motion, without bony deformities, joint abnormalities, muscle atrophy, or point tenderness.',
              normal: true,
              key: 'Normal Exam',
              code: 'mu-3-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007844'],
              symptomName: ['Upper Extermity Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Decreased range of motion.',
                normal: false,
                key: 'Range of Motion',
                code: 'mu-3-0a',
                symptomIds: ['SYMPT0007844'],
                symptomName: ['Upper Extermity Exam'],
                listValues: ['ROM - Decreased']
              },
              {
                text: 'Bony deformity is noted.',
                normal: false,
                key: 'Bony Deformities',
                code: 'mu-3-0a',
                symptomIds: ['SYMPT0007844'],
                symptomName: ['Upper Extermity Exam'],
                listValues: ['Bone Deformity']
              },
              {
                text: 'Joint abnormality is noted.',
                normal: false,
                key: 'Joint Abnormalities',
                code: 'mu-3-0a',
                symptomIds: ['SYMPT0007844'],
                symptomName: ['Upper Extermity Exam'],
                listValues: ['Joint Abnormality']
              },
              {
                text: 'Muscle atrophy is noted.',
                normal: false,
                key: 'Muscle Atrophy',
                code: 'mu-3-0a',
                symptomIds: ['SYMPT0007844'],
                symptomName: ['Upper Extermity Exam'],
                listValues: ['Muscle Atrophy']
              },
              {
                text: 'Point tenderness is noted.',
                normal: false,
                key: 'Point Tenderness',
                code: 'mu-3-0a',
                symptomIds: ['SYMPT0007844'],
                symptomName: ['Upper Extermity Exam'],
                listValues: ['Point Tenderness']
              }]
        },
        {
          description: 'Lower extremities',
          defaultNormal: true,
          mod:
            [{
              text:
                'Normal range of motion, without bony deformities, joint abnormalities, muscle atrophy, or point tenderness.',
              normal: true,
              key: 'Normal Exam',
              code: 'ml-4-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007845'],
              symptomName: ['Lower Extremity Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Decreased range of motion.',
                normal: false,
                key: 'Range of Motion',
                code: 'ml-4-0a',
                symptomIds: ['SYMPT0007845'],
                symptomName: ['Lower Extremity Exam'],
                listValues: ['ROM - Decreased']
              },
              {
                text: 'Bony deformity is noted.',
                normal: false,
                key: 'Bony Deformities',
                code: 'ml-4-0a',
                symptomIds: ['SYMPT0007845'],
                symptomName: ['Lower Extremity Exam'],
                listValues: ['Bone Deformity']
              },
              {
                text: 'Joint abnormality is noted.',
                normal: false,
                key: 'Joint Abnormalities',
                code: 'ml-4-0a',
                symptomIds: ['SYMPT0007845'],
                symptomName: ['Lower Extremity Exam'],
                listValues: ['Joint Abnormality']
              },
              {
                text: 'Muscle atrophy is noted.',
                normal: false,
                key: 'Muscle Atrophy',
                code: 'ml-4-0a',
                symptomIds: ['SYMPT0007845'],
                symptomName: ['Lower Extremity Exam'],
                listValues: ['Muscle Atrophy']
              },
              {
                text: 'Point tenderness is noted.',
                normal: false,
                key: 'Point Tenderness',
                code: 'ml-4-0a',
                symptomIds: ['SYMPT0007845'],
                symptomName: ['Lower Extremity Exam'],
                listValues: ['Point Tenderness']
              }]
        },
        {
          description: 'Strength, right upper extremity',
          defaultNormal: true,
          mod:
            [{
              text: 'Intact strength of right upper extremity.',
              normal: true,
              key: 'Normal',
              code: 'ms-5-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007820'],
              symptomName: ['Upper Extremity Strength'],
              listValues: ['Normal - Right Arm']
            },
              {
                text: 'Impaired strength of right upper extremity.',
                normal: false,
                key: 'Abnormal',
                code: 'ms-5-0a',
                symptomIds: ['SYMPT0007820'],
                symptomName: ['Upper Extremity Strength'],
                listValues: ['Any Right Arm Weakness']
              }]
        },
        {
          description: 'Strength, left upper extremity',
          defaultNormal: true,
          mod:
            [{
              text: 'Intact strength of left upper extremity.',
              normal: true,
              key: 'Normal',
              code: 'ms-6-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007820'],
              symptomName: ['Upper Extremity Strength'],
              listValues: ['Normal - Left Arm']
            },
              {
                text: 'Impaired strength of left upper extremity.',
                normal: false,
                key: 'Abnormal',
                code: 'ms-6-0a',
                symptomIds: ['SYMPT0007820'],
                symptomName: ['Upper Extremity Strength'],
                listValues: ['Any Left Arm Weakness']
              }]
        },
        {
          description: 'Strength, right lower extremity',
          defaultNormal: true,
          mod:
            [{
              text: 'Intact strength of right lower extremity.',
              normal: true,
              key: 'Normal',
              code: 'ms-7-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007821'],
              symptomName: ['Lower Extremity Strength'],
              listValues: ['Normal - Right Leg']
            },
              {
                text: 'Impaired strength of right lower extremity.',
                normal: false,
                key: 'Abnormal',
                code: 'ms-7-0a',
                symptomIds: ['SYMPT0007821'],
                symptomName: ['Lower Extremity Strength'],
                listValues: ['Any Right Leg Weakness']
              }]
        },
        {
          description: 'Strength, left lower extremity',
          defaultNormal: true,
          mod:
            [{
              text: 'Intact strength of left lower extremity.',
              normal: true,
              key: 'Normal',
              code: 'ms-8-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007821'],
              symptomName: ['Lower Extremity Strength'],
              listValues: ['Normal - Left Leg']
            },
              {
                text: 'Impaired strength of left lower extremity.',
                normal: false,
                key: 'Abnormal',
                code: 'ms-8-0a',
                symptomIds: ['SYMPT0007821'],
                symptomName: ['Lower Extremity Strength'],
                listValues: ['Any Left Leg Weakness']
              }]
        }]
  },
  {
    examName: 'Psychiatric',
    descriptionsArray:
      [{
        description: 'Orientation',
        defaultNormal: true,
        mod:
          [{
            text: 'Awake, alert and oriented x 3.',
            normal: true,
            key: 'Awake/Alert/Oriented',
            code: 'po-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007818'],
            symptomName: ['Level of consciousness'],
            listValues: ['Awake and Alert']
          },
            {
              text: 'Appears somnolent.',
              normal: false,
              key: 'Somnolent',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Somnolent']
            },
            {
              text: 'Appears lethargic.',
              normal: false,
              key: 'Lethargic',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Lethargic']
            },
            {
              text: 'Appears obtunded.',
              normal: false,
              key: 'Obtunded',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Obtunded']
            },
            {
              text: 'Appears comatose.',
              normal: false,
              key: 'Comatose',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Comatose']
            },
            {
              text: 'Appears disoriented.',
              normal: false,
              key: 'Disoriented',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Disoriented']
            }]
      },
        {
          description: 'Mood and affect',
          defaultNormal: true,
          mod:
            [{
              text: 'Euthymia with congruent affect.',
              normal: true,
              key: 'Normal Mood and Affect',
              code: 'pm-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007836', 'SYMPT0007836'],
              symptomName: ['Emotions', 'Emotions'],
              listValues: ['Affect - Normal', 'Mood - Normal']
            },
              {
                text: 'Anxious with congruent affect.',
                normal: false,
                key: 'Anxious Mood and Affect',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Anxious']
              },
              {
                text: 'Manic mood.',
                normal: false,
                key: 'Mania',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Euphoric']
              },
              {
                text: 'Depressed mood.',
                normal: false,
                key: 'Depressed',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Depressed']
              },
              {
                text: 'Dysthymic mood.',
                normal: false,
                key: 'Dysthymic',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Dysphoric']
              },
              {
                text: 'Congruent affect.',
                normal: false,
                key: 'Affect congruent',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Affect - Congruent']
              },
              {
                text: 'Incongruent affect.',
                normal: false,
                key: 'Affect incongruent',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Affect - Incongruent']
              }]
        },
        {
          description: 'Judgement and Insight',
          mod:
            [{
              text: 'Has normal judgement and insight.',
              normal: true,
              key: 'Normal Judgement and Insight',
              code: 'pj-2-0n',
              symptomIds: ['SYMPT0007837'],
              symptomName: ['Cognition'],
              listValues: ['Insight/Judgment - Normal']
            },
              {
                text: 'Has poor judgement and lacks insight.',
                normal: false,
                key: 'Poor Judgement and Insight',
                code: 'pj-2-0a',
                symptomIds: ['SYMPT0007837'],
                symptomName: ['Cognition'],
                listValues: ['Insight/Judgement - Poor']
              }]
        },
        {
          description: 'Memory',
          mod:
            [{
              text: 'Has normal memory.',
              normal: true,
              key: 'Normal Memory',
              code: 'pm-3-0n',
              symptomIds: ['SYMPT0007837'],
              symptomName: ['Cognition'],
              listValues: ['Memory - Normal']
            },
              {
                text: 'Has impaired memory.',
                normal: false,
                key: 'Impaired Memory',
                code: 'pm-3-0a',
                symptomIds: ['SYMPT0007837'],
                symptomName: ['Cognition'],
                listValues: ['Memory - Impaired']
              }]
        }]
  },
  {
    examName: 'Eyes',
    descriptionsArray:
      [{
        description: 'Eyelids, Adnexa',
        defaultNormal: true,
        mod:
          [{
            text: 'Eyelids and adnexa are unremarkable.',
            normal: true,
            key: 'Normal',
            code: 'ee-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007577'],
            symptomName: ['Eye Lid Exam'],
            listValues: ['Normal']
          },
            {
              text: 'Blepheritis of right eyelid.',
              normal: false,
              key: 'Blepheritis, Right',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Blepheritis']
            },
            {
              text: 'Blepheritis of left eyelid.',
              normal: false,
              key: 'Blepheritis, Left',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Blepherities']
            },
            {
              text: 'Bilateral blepheritis noted.',
              normal: false,
              key: 'Blepheritis, Bilateral',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Blepherities']
            },
            {
              text: 'Hordeolum of right eyelid.',
              normal: false,
              key: 'Hordeolum, Right',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Any Hordeolum Right']
            },
            {
              text: 'Hordeolum of left eyelid.',
              normal: false,
              key: 'Hordeolum, Left',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Any Hordeolum Left']
            },
            {
              text: 'Hordeolum of both eyes.',
              normal: false,
              key: 'Hordeolum, Bilateral',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577', 'SYMPT0007577'],
              symptomName: ['Eye Lid Exam', 'Eye Lid Exam'],
              listValues: ['Any Hordeolum Right', 'Any Hordeolum Left']
            }]
      },
        {
          description: 'Conjunctivae, sclerae',
          defaultNormal: true,
          mod:
            [{
              text:
                'The conjunctive and sclera are unremarkable and without injection.',
              normal: true,
              key: 'Normal Exam',
              code: 'ec-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0003870', 'SYMPT0003871'],
              symptomName: ['Conjunctiva', 'Sclera'],
              listValues: ['Normal', 'Normal']
            },
              {
                text: 'Paleness of the conjunctiva is noted.',
                normal: false,
                key: 'Pale Conjunctiva',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Pale']
              },
              {
                text: 'Conjunctival injection is noted, right eye.',
                normal: false,
                key: 'Red Conjunctiva, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Injected/Inflamed']
              },
              {
                text: 'Conjunctival injection is noted, left eye.',
                normal: false,
                key: 'Red Conjunctiva, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Injected/Inflamed']
              },
              {
                text: 'Bilateral conjunctival injection is noted.',
                normal: false,
                key: 'Red Conjunctiva, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Injected/Inflamed']
              },
              {
                text: 'Conjunctival swelling, right eye.',
                normal: false,
                key: 'Swollen Conjunctiva, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Swelling']
              },
              {
                text: 'Conjunctival swelling, left eye.',
                normal: false,
                key: 'Swollen Conjunctiva, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Swelling']
              },
              {
                text: 'Bilateral conjunctival swelling.',
                normal: false,
                key: 'Swollen Conjunctiva, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Swelling']
              },
              {
                text: 'Foreign body, right eye.',
                normal: false,
                key: 'Foreign Body, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Foreign body, left eye.',
                normal: false,
                key: 'Foreign Body, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Foreign body, both eyes.',
                normal: false,
                key: 'Foreign Body, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Blueness of the sclera is noted.',
                normal: false,
                key: 'Blue Sclera',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003871'],
                symptomName: ['Sclera'],
                listValues: ['Blue']
              },
              {
                text: 'Scleral icterus is noted.',
                normal: false,
                key: 'Yellow Sclera',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003871'],
                symptomName: ['Sclera'],
                listValues: ['Yellow']
              },
              {
                text: 'Purulent discharge in right eye.',
                normal: false,
                key: 'Purulent Discharge, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800'],
                symptomName: ['Right Eye Discharge'],
                listValues: ['Purulent']
              },
              {
                text: 'Purulent discharge in left eye.',
                normal: false,
                key: 'Purulent Discharge, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007801'],
                symptomName: ['Left Eye Discharge'],
                listValues: ['Purulent']
              },
              {
                text: 'Purulent discharge in both eyes.',
                normal: false,
                key: 'Purulent Discharge, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007801', 'SYMPT0007800'],
                symptomName: ['Left Eye Discharge', 'Right Eye Discharge'],
                listValues: ['Purulent', 'Purulent']
              },
              {
                text: 'Clear discharge in right eye.',
                normal: false,
                key: 'Clear Discharge, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800'],
                symptomName: ['Right Eye Discharge'],
                listValues: ['Clear']
              },
              {
                text: 'Clear discharge in left eye.',
                normal: false,
                key: 'Clear Discharge, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007801'],
                symptomName: ['Left Eye Discharge'],
                listValues: ['Clear']
              },
              {
                text: 'Clear discharge in both eyes.',
                normal: false,
                key: 'Clear Discharge, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800', 'SYMPT0007801'],
                symptomName: ['Right Eye Discharge', 'Left Eye Discharge'],
                listValues: ['Clear', 'Clear']
              },
              {
                text: 'Subconjunctival hemorrhage of right eye.',
                normal: false,
                key: 'Subconjuntival Hemorrhage, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Hemorrhage']
              },
              {
                text: 'Subconjunctival hemorrhage of left eye.',
                normal: false,
                key: 'Subconjunctival Hemorrhage, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Hemorrhage']
              },
              {
                text: 'Subconjunctival hemorrhages in both eyes.',
                normal: false,
                key: 'Subconjunctival Hemorrhage, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Hemorrhage']
              }]
        },
        {
          description: 'Pupils',
          defaultNormal: true,
          mod:
            [{
              text: 'Pupils are equal in size, round, and reactive to light.',
              normal: true,
              key: 'Normal Exam',
              code: 'ep-2-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007839'],
              symptomName: ['N II'],
              listValues: ['PEERL']
            },
              {
                text: 'Pupils are not equal in size.',
                normal: false,
                key: 'Anisocoria',
                code: 'ep-2-0a',
                symptomIds: ['SYMPT0007823'],
                symptomName: ['N III/IV/VI'],
                listValues: ['Anisocoria']
              },
              {
                text: 'Right pupil does not react to light.',
                normal: false,
                key: 'Non-Reactive Pupil, Right',
                code: 'ep-2-0a',
                symptomIds: ['SYMPT0007839'],
                symptomName: ['N II'],
                listValues: ['Pupils - Right Non-Reactive Direct Light']
              },
              {
                text: 'Left pupil does not react to light.',
                normal: false,
                key: 'Non-Reactive Pupil, Left',
                code: 'ep-2-0a',
                symptomIds: ['SYMPT0007839'],
                symptomName: ['N II'],
                listValues: ['Pupils - Left Non-Reactive Direct Light']
              },
              {
                text: 'No pupil reaction to light.',
                normal: false,
                key: 'Non-Reactive Pupils',
                code: 'ep-2-0a',
                symptomIds: ['SYMPT0007839', 'SYMPT0007839'],
                symptomName: ['N II', 'N II'],
                listValues: ['Pupils - Right Non-Reactive Direct Light', 'Pupils - Left Non-Reactive Direct Light']
              },
              {
                text: 'Photophobia right eye.',
                normal: false,
                key: 'Photophobia, Right',
                code: 'ep-2-0a',
                symptomIds: ['SYMPT0007839'],
                symptomName: ['N II'],
                listValues: ['Photophobia']
              },
              {
                text: 'Photophobia left eye.',
                normal: false,
                key: 'Photophobia, Left',
                code: 'ep-2-0a',
                symptomIds: ['SYMPT0007839'],
                symptomName: ['N II'],
                listValues: ['Photophobia']
              }]
        },
        {
          description: 'Ophtalmoscopic exam',
          mod:
            [{
              text:
                'Fundi are visualized without lesions, "A-V-nicking", hemorrhages, or papiledema.',
              normal: true,
              key: 'Normal Exam',
              code: 'eo-3-0n',
              symptomIds: ['SYMPT0003411', 'SYMPT0003409'],
              symptomName: ['Right Eye Ophthalmoscopic Exam', 'Left Eye Ophthalmoscopic Exam'],
              listValues: ['Normal', 'Normal']
            },
              {
                text: 'Retinal lesion(s) noted, right eye.',
                normal: false,
                key: 'Retinal Lesion, Right',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003411'],
                symptomName: ['Right Eye Ophthalmoscopic Exam'],
                listValues: ['Any Lesion']
              },
              {
                text: 'A-V-nicking is noted, right eye.',
                normal: false,
                key: 'Arterial Wall Thickening, Right',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003411'],
                symptomName: ['Right Eye Ophthalmoscopic Exam'],
                listValues: ['AV Nicking']
              },
              {
                text: 'Superficial retinal hemorrhages noted, right eye.',
                normal: false,
                key: 'Flame-Shaped Streaks, Right',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003411'],
                symptomName: ['Right Eye Ophthalmoscopic Exam'],
                listValues: ['Retinal Hemorrhage']
              },
              {
                text: 'Papiledema is noted, right eye.',
                normal: false,
                key: 'Papiledema, Right',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003411'],
                symptomName: ['Right Eye Ophthalmoscopic Exam'],
                listValues: ['Papiledma']
              },
              {
                text: 'Retinal lesion(s) noted, left eye.',
                normal: false,
                key: 'Retinal Lesion, Left',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003409'],
                symptomName: ['Left Eye Ophthalmoscopic Exam'],
                listValues: ['Any Lesion']
              },
              {
                text: 'A-V-nicking is noted, left eye.',
                normal: false,
                key: 'Arterial Wall Thickening, Left',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003409'],
                symptomName: ['Left Eye Ophthalmoscopic Exam'],
                listValues: ['AV Nicking']
              },
              {
                text: 'Superficial retinal hemorrhages noted, left eye.',
                normal: false,
                key: 'Flame-Shaped Streaks, Left',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003409'],
                symptomName: ['Left Eye Ophthalmoscopic Exam'],
                listValues: ['Retinal Hemorrhages']
              },
              {
                text: 'Papiledema is noted, left eye.',
                normal: false,
                key: 'Papiledema, Left',
                code: 'eo-3-0a',
                symptomIds: ['SYMPT0003409'],
                symptomName: ['Left Eye Ophthalmoscopic Exam'],
                listValues: ['Papiledma']
              }]
        },
        {
          description: 'Corneal exam',
          mod:
            [{
              text: 'No corneal abrasion(s) noted.',
              normal: true,
              key: 'Normal',
              code: 'ec-4-0n',
              symptomIds: ['SYMPT0004286'],
              symptomName: ['Cornea'],
              listValues: ['Normal']
            },
              {
                text: 'Corneal abrasion(s) of right eye noted.',
                normal: false,
                key: 'Corneal Abrasion, Right',
                code: 'ec-4-0a',
                symptomIds: ['SYMPT0004286'],
                symptomName: ['Cornea'],
                listValues: ['Abrasion']
              },
              {
                text: 'Corneal abrasion(s) of left eye noted.',
                normal: false,
                key: 'Corneal Abrasion, Left',
                code: 'ec-4-0a',
                symptomIds: ['SYMPT0004286'],
                symptomName: ['Cornea'],
                listValues: ['Abrasion']
              }]
        },
        {
          description: 'Periorbital Edema',
          mod:
            [{
              text: 'No periorbital edema.',
              normal: true,
              key: 'Normal',
              code: 'ep-5-0n',
              symptomIds: ['SYMPT0007846'],
              symptomName: ['Periorbital Edema'],
              listValues: ['Normal']
            },
              {
                text: 'Periorbital edema noted, right.',
                normal: false,
                key: 'Edema, Right',
                code: 'ep-5-1a',
                symptomIds: ['SYMPT0007846'],
                symptomName: ['Periorbital Edema'],
                listValues: ['Right']
              },
              {
                text: 'Periorbital edema noted, left.',
                normal: false,
                key: 'Edema, Left',
                code: 'ep-5-1a',
                symptomIds: ['SYMPT0007846'],
                symptomName: ['Periorbital Edema'],
                listValues: ['Left']
              },
              {
                text: 'Bilateral periorbital edema noted.',
                normal: false,
                key: 'Edema, Bilateral',
                code: 'ep-5-1a',
                isSinglePick: true,
                symptomIds: ['SYMPT0007846', 'SYMPT0007846'],
                symptomName: ['Periorbital Edema', 'Periorbital Edema'],
                listValues: ['Right', 'Left']
              }]
        }]
  },
  {
    examName: 'Lymph',
    descriptionsArray:
      [{
        description: 'Thyroid',
        mod:
          [{
            text: 'No thyroid enlargement or nodules noted.',
            normal: true,
            key: 'Normal Exam',
            code: 'lt-0-0n',
            symptomIds: ['SYMPT0003864'],
            symptomName: ['Thyroid Paplation'],
            listValues: ['Normal']
          },
            {
              text: 'Enlargement of the thyroid gland is noted.',
              normal: false,
              key: 'Thyroid Enlargement',
              code: 'lt-0-0a',
              symptomIds: ['SYMPT0003864', 'SYMPT0003864'],
              symptomName: ['Thyroid Paplation', 'Thyroid Paplation'],
              listValues: ['Enlarged Left Lobe', 'Enlarged Right Lobe']
            },
            {
              text: 'Thyroid nodule is noted.',
              normal: false,
              key: 'Thyroid Nodule',
              code: 'lt-0-0a',
              symptomIds: ['SYMPT0003864', 'SYMPT0003864'],
              symptomName: ['Thyroid Paplation', 'Thyroid Paplation'],
              listValues: ['Left Nodule', 'Right Nodule']
            }]
      },
        {
          description: 'Cervical lymph nodes',
          defaultNormal: true,
          mod:
            [{
              text: 'No cervical lymph node enlargement.',
              normal: true,
              key: 'Normal Exam',
              code: 'lc-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007788'],
              symptomName: ['Anterior Cervical'],
              listValues: ['Normal']
            },
              {
                text: 'Cervical lymph node enlargement is noted.',
                normal: false,
                key: 'Enlargement',
                code: 'lc-1-0a',
                symptomIds: ['SYMPT0007788'],
                symptomName: ['Anterior Cervical'],
                listValues: ['Size - Enlarged']
              },
              {
                text: 'Cervical lymph node tenderness is noted.',
                normal: false,
                key: 'Tenderness',
                code: 'lc-1-0a',
                symptomIds: ['SYMPT0007788'],
                symptomName: ['Anterior Cervical'],
                listValues: ['Pain - Tender']
              },
              {
                text: 'Submandibular lymph nodes are swollen.',
                normal: false,
                key: 'Submandibular Lymph Node Swelling',
                code: 'lc-1-0a',
                symptomIds: ['SYMPT0007789'],
                symptomName: ['Submandibular'],
                listValues: ['Size - Enlarged']
              }]
        },
        {
          description: 'Axillary Lymph nodes',
          mod:
            [{
              text: 'No axillary lymph node enlargement.',
              normal: true,
              key: 'Normal Exam',
              code: 'la-2-0n',
              symptomIds: ['SYMPT0007796'],
              symptomName: ['Axillary'],
              listValues: ['Normal']
            },
              {
                text: 'Axillary lymph node enlargement noted.',
                normal: false,
                key: 'Enlargement',
                code: 'la-2-0a',
                symptomIds: ['SYMPT0007796'],
                symptomName: ['Axillary'],
                listValues: ['Size - Enlarged']
              },
              {
                text: 'Axillary lymph node tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'la-2-0a',
                symptomIds: ['SYMPT0007796'],
                symptomName: ['Axillary'],
                listValues: ['Pain - Tender']
              }]
        },
        {
          description: 'Inguinal Lymph Nodes',
          mod:
            [{
              text: 'No inguinal lymph node enlargement.',
              normal: true,
              key: 'Normal Exam',
              code: 'li-3-0n',
              symptomIds: ['SYMPT0007797'],
              symptomName: ['Inguinal'],
              listValues: ['Normal']
            },
              {
                text: 'Inguinal lymph node enlargement noted.',
                normal: false,
                key: 'Enlargement',
                code: 'li-3-0a',
                symptomIds: ['SYMPT0007797'],
                symptomName: ['Inguinal'],
                listValues: ['Size - Enlarged']
              },
              {
                text: 'Inguinal lymph node tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'li-3-0a',
                symptomIds: ['SYMPT0007797'],
                symptomName: ['Inguinal'],
                listValues: ['Pain - Tender']
              },
              {
                text: 'Lymphangitis of lower extremities noted.',
                normal: false,
                key: 'Lymphangitis of lower extremities',
                code: 'li-3-0a',
                symptomIds: ['SYMPT0007814', 'SYMPT0007812'],
                symptomName: ['Rash Color', 'Rash Shape'],
                listValues: ['Red', 'Linear']
              }]
        }]
  },
  {
    examName: 'Neurological',
    descriptionsArray:
      [{
        description: 'Cranial nerves',
        defaultNormal: true,
        mod:
          [{
            text: 'Intact sense of smell.',
            normal: true,
            key: 'CN I, Normal',
            code: 'nc-0-0n',
            symptomIds: ['SYMPT0007822'],
            symptomName: ['N I'],
            listValues: ['Normal']
          },
            {
              text: 'Impaired sense of smell.',
              normal: false,
              key: 'CN I, Abnormal',
              code: 'nc-0-0a',
              symptomIds: ['SYMPT0007822'],
              symptomName: ['N I'],
              listValues: ['No Smell']
            },
            {
              text: 'Cranial nerves (II-XII) are intact.',
              normal: true,
              key: 'CN II-XII, Normal',
              code: 'nc-0-1n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007839', 'SYMPT0007823', 'SYMPT0007824', 'SYMPT0007825'],
              symptomName: ['N II', 'N III/IV/VI', 'N V', 'N VII'],
              listValues: ['Normal', 'Normal', 'Normal']
            },
            {
              text: 'Impaired vision.',
              normal: false,
              key: 'CN II, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007839'],
              symptomName: ['N II'],
              listValues: ['Any']
            },
            {
              text: 'Impaired pupil reaction to light, eye opening.',
              normal: false,
              key: 'CN III, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007823'],
              symptomName: ['N III/IV/VI'],
              listValues: ['Any']
            },
            {
              text: 'Impaired extraocular movements.',
              normal: false,
              key: 'CN IV, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007823'],
              symptomName: ['N III/IV/VI'],
              listValues: ['Any']
            },
            {
              text: 'Impaired corneal reflex.',
              normal: false,
              key: 'CN V, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007824'],
              symptomName: ['N V'],
              listValues: ['Any']
            },
            {
              text: 'Impaired extraocular movements.',
              normal: false,
              key: 'CN VI, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Any']
            },
            {
              text: 'Impaired eye closing, facial movements.',
              normal: false,
              key: 'CN VII, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Any']
            },
            {
              text: 'Impaired hearing.',
              normal: false,
              key: 'CN VIII, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007826'],
              symptomName: ['N VIII'],
              listValues: ['Any']
            },
            {
              text: 'Impaired gag reflex.',
              normal: false,
              key: 'CN IX, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007827'],
              symptomName: ['N IX'],
              listValues: ['Any']
            },
            {
              text: 'Impaired elevation of palate.',
              normal: false,
              key: 'CN X, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007828'],
              symptomName: ['N X'],
              listValues: ['Any']
            },
            {
              text: 'Impaired shoulder shrug.',
              normal: false,
              key: 'CN XI, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007829'],
              symptomName: ['N XI'],
              listValues: ['Any']
            },
            {
              text: 'Impaired motor function of tongue.',
              normal: false,
              key: 'CN XII, Abnormal',
              code: 'nc-0-1a',
              symptomIds: ['SYMPT0007830'],
              symptomName: ['N XII'],
              listValues: ['Any']
            }]
      },
        {
          description: 'Cognition',
          defaultNormal: true,
          mod:
            [{
              text: 'Cognitive ability intact.',
              normal: true,
              key: 'Normal',
              code: 'nc-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007837'],
              symptomName: ['Cognition'],
              listValues: ['Normal']
            },
              {
                text: 'Impaired cognitive ability.',
                normal: false,
                key: 'Impaired',
                code: 'nc-1-0a',
                symptomIds: ['SYMPT0007837'],
                symptomName: ['Cognition'],
                listValues: ['Any']
              }]
        },
        {
          description: 'Sensation upper extremities',
          defaultNormal: true,
          mod:
            [{
              text: 'Sensation of right upper extremity intact.',
              normal: true,
              key: 'Normal, Right',
              code: 'ns-2-1n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007831'],
              symptomName: ['Sensory Exam'],
              listValues: ['RUE - Normal']
            },
              {
                text: 'Sensation of left upper extremity intact.',
                normal: true,
                key: 'Normal, Left',
                code: 'ns-2-2n',
                defaultNormal: true,
                symptomIds: ['SYMPT0007831'],
                symptomName: ['Sensory Exam'],
                listValues: ['RLE - Normal']
              },
              {
                text: 'Impaired sensation of right upper extremity.',
                normal: false,
                key: 'Abnormal, Right',
                code: 'ns-2-1a',
                symptomIds: ['SYMPT0007831'],
                symptomName: ['Sensory Exam'],
                listValues: ['RUE - Any']
              },
              {
                text: 'Impaired sensation of left upper extremity.',
                normal: false,
                key: 'Abnormal, Left',
                code: 'ns-2-2a',
                symptomIds: ['SYMPT0007831'],
                symptomName: ['Sensory Exam'],
                listValues: ['LUE - Any']
              }]
        },
        {
          description: 'Sensation lower extremities',
          defaultNormal: true,
          mod:
            [{
              text: 'Sensation of right lower extremity intact.',
              normal: true,
              key: 'Normal, Right',
              code: 'ns-3-1n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007831'],
              symptomName: ['Sensory Exam'],
              listValues: ['RLE - Normal']
            },
              {
                text: 'Sensation of left lower extremity intact.',
                normal: true,
                key: 'Normal, Left',
                code: 'ns-3-2n',
                defaultNormal: true,
                symptomIds: ['SYMPT0007831'],
                symptomName: ['Sensory Exam'],
                listValues: ['LLE - Normal']
              },
              {
                text: 'Impaired sensation of right lower extremity.',
                normal: false,
                key: 'Abnormal, Right',
                code: 'ns-3-1a',
                symptomIds: ['SYMPT0007831'],
                symptomName: ['Sensory Exam'],
                listValues: ['RLE - Any']
              },
              {
                text: 'Impaired sensation of left lower extremity.',
                normal: false,
                key: 'Abnormal, Left',
                code: 'ns-3-2a',
                symptomIds: ['SYMPT0007831'],
                symptomName: ['Sensory Exam'],
                listValues: ['LLE - Any']
              }]
        },
        {
          description: 'DTR upper',
          defaultNormal: true,
          mod:
            [{
              text: 'Normal DTR\'s of right upper extremity.',
              normal: true,
              key: 'Normal, Right',
              code: 'nd-4-1n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007832'],
              symptomName: ['DTR'],
              listValues: ['RUE - Normal']
            },
              {
                text: 'Normal DTR\'s of left upper extremity.',
                normal: true,
                key: 'Normal, Left',
                code: 'nd-4-2n',
                defaultNormal: true,
                symptomIds: ['SYMPT0007832'],
                symptomName: ['DTR'],
                listValues: ['LUE - Normal']
              },
              {
                text: 'Abnormal DTR\'s of right upper extremity.',
                normal: false,
                key: 'Abnormal, Right',
                code: 'nd-4-1a',
                symptomIds: ['SYMPT0007832'],
                symptomName: ['DTR'],
                listValues: ['RUE - Abnormal']
              },
              {
                text: 'Abnormal DTR\'s of left upper extremity.',
                normal: false,
                key: 'Abnormal, Left',
                code: 'nd-4-2a',
                symptomIds: ['SYMPT0007832'],
                symptomName: ['DTR'],
                listValues: ['LUE - Abnormal']
              }]
        },
        {
          description: 'DTR lower',
          defaultNormal: true,
          mod:
            [{
              text: 'Normal DTR\'s of right lower extremity.',
              normal: true,
              key: 'Normal, Right',
              code: 'nd-5-1n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007832'],
              symptomName: ['DTR'],
              listValues: ['RLE - Normal']
            },
              {
                text: 'Normal DTR\'s of left lower extremity.',
                normal: true,
                key: 'Normal, Left',
                code: 'nd-5-2n',
                defaultNormal: true,
                symptomIds: ['SYMPT0007832'],
                symptomName: ['DTR'],
                listValues: ['LLE - Normal']
              },
              {
                text: 'Abnormal DTR\'s of right lower extremity.',
                normal: false,
                key: 'Abnormal, Right',
                code: 'nd-5-1a',
                symptomIds: ['SYMPT0007832'],
                symptomName: ['DTR'],
                listValues: ['RLE - Abnormal']
              },
              {
                text: 'Abnormal DTR\'s of left lower extremity.',
                normal: false,
                key: 'Abnormal, Left',
                code: 'nd-5-2a',
                symptomIds: ['SYMPT0007832'],
                symptomName: ['DTR'],
                listValues: ['LLE - Abnormal']
              }]
        },
        {
          description: 'Superficial reflexes',
          mod:
            [{
              text: 'Negative Babinski, on right.',
              normal: true,
              key: 'Normal Plantar Reflex, Right',
              code: 'ns-6-1n',
              symptomIds: ['SYMPT0007833'],
              symptomName: ['Babinski'],
              listValues: ['Negative Right']
            },
              {
                text: 'Negative Babinski, on left.',
                normal: true,
                key: 'Normal Plantar Reflex, Left',
                code: 'ns-6-2n',
                symptomIds: ['SYMPT0007833'],
                symptomName: ['Babinski'],
                listValues: ['Negative Left']
              },
              {
                text: 'Positive Babinski, on right.',
                normal: false,
                key: 'Abnormal Plantar Reflex, Right',
                code: 'ns-6-1a',
                symptomIds: ['SYMPT0007833'],
                symptomName: ['Babinski'],
                listValues: ['Positive Right']
              },
              {
                text: 'Positive Babinski, on left.',
                normal: false,
                key: 'Abnormal Plantar Reflex, Left',
                code: 'ns-6-2a',
                symptomIds: ['SYMPT0007833'],
                symptomName: ['Babinski'],
                listValues: ['Positive Left']
              }]
        },
        {
          description: 'Language',
          mod:
            [{
              text: 'Spontaneous speech with normal comprehension.',
              normal: true,
              key: 'Normal',
              code: 'nl-0-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007868'],
              symptomName: ['Language'],
              listValues: ['Normal']
            },
              {
                text: 'Impaired Comprehension',
                normal: false,
                key: 'Impaired Comprehension',
                code: 'nl-0-0a',
                symptomIds: ['SYMPT0007868'],
                symptomName: ['Language'],
                listValues: ['Impaired Comprehension']
              }]
        }
     ]
  },
  {
    examName: 'Female GU',
    descriptionsArray:
      [
        {
          description: 'External genitalia',
          mod:
            [
              {
                text: 'Normal female genitalia, without rash, lesions, or masses.',
                normal: true,
                key: 'Normal',
                code: 'fe-0-0n',
                symptomIds: ['SYMPT0007861'],
                symptomName: ['Female External Genitalia'],
                listValues: ['Normal']
              },
              {
                text: 'Rash noted.',
                normal: false,
                key: 'Rash',
                code: 'fe-0-0a',
                symptomIds: ['SYMPT0007861'],
                symptomName: ['Female External Genitalia'],
                listValues: ['Rash']
              },
              {
                text: 'Lesion(s) noted.',
                normal: false,
                key: 'Lesions',
                code: 'fe-0-0a',
                symptomIds: ['SYMPT0007861'],
                symptomName: ['Female External Genitalia'],
                listValues: ['Lesions']
              },
              {
                text: 'Mass(es) noted.',
                normal: false,
                key: 'Masses',
                code: 'fe-0-0a',
                symptomIds: ['SYMPT0004143'],
                symptomName: ['Labial Mass'],
                listValues: ['']
              }]
        },
        {
          description: 'Urethra',
          mod:
            [{
              text: 'No urethral inflammation, or discharge noted.',
              normal: true,
              key: 'Normal',
              code: 'fu-1-0n',
              symptomIds: ['SYMPT0007861'],
              symptomName: ['Female External Genitalia'],
              listValues: ['Urethra - Normal']
            },
              {
                text: 'Urethral inflammation noted.',
                normal: false,
                key: 'Inflammation',
                code: 'fu-1-0a',
                symptomIds: ['SYMPT0007861'],
                symptomName: ['Female External Genitalia'],
                listValues: ['Urethra - Inflammation']
              },
              {
                text: 'Urethral discharge noted.',
                normal: false,
                key: 'Discharge',
                code: 'fu-1-0a',
                symptomIds: ['SYMPT0007861'],
                symptomName: ['Female External Genitalia'],
                listValues: ['Urethra - Discharge']
              }]
        },
        {
          description: 'Vagina',
          mod:
            [{
              text:
                'Normal appearance, without discharge, lesions, cystocele, or rectocele.',
              normal: true,
              key: 'Normal',
              code: 'fv-2-0n',
              symptomIds: ['SYMPT0007862'],
              symptomName: ['Vaginal/Cervix Exam'],
              listValues: ['Vagina - Normal']
            },
              {
                text: 'Discharge noted.',
                normal: false,
                key: 'Discharge',
                code: 'fv-2-0a',
                symptomIds: ['SYMPT0007862'],
                symptomName: ['Vaginal/Cervix Exam'],
                listValues: ['Discharge - Any Discharge']
              },
              {
                text: 'Lesion(s) noted.',
                normal: false,
                key: 'Lesions',
                code: 'fv-2-0a',
                symptomIds: ['SYMPT0007862'],
                symptomName: ['Vaginal/Cervix Exam'],
                listValues: ['Lesion']
              },
              {
                text: 'Cystocele noted.',
                normal: false,
                key: 'Cystocele',
                code: 'fv-2-0a',
                symptomIds: ['SYMPT0007862'],
                symptomName: ['Vaginal/Cervix Exam'],
                listValues: ['Cystocele']
              },
              {
                text: 'Rectocele noted.',
                normal: false,
                key: 'Rectocele',
                code: 'fv-2-0a',
                symptomIds: ['SYMPT0007862'],
                symptomName: ['Vaginal/Cervix Exam'],
                listValues: ['Rectocele']
              }]
        },
        {
          description: 'Cervix',
          mod:
            [{
              text: 'Normal appearance, without lesions, or discharge.',
              normal: true,
              key: 'Normal',
              code: 'fc-3-0n',
              symptomIds: ['SYMPT0007862'],
              symptomName: ['Vaginal/Cervix Exam'],
              listValues: ['Cervix - Normal']
            },
              {
                text: 'Cervical lesion(s) noted.',
                normal: false,
                key: 'Lesions',
                code: 'fc-3-0a',
                symptomIds: ['SYMPT0007862'],
                symptomName: ['Vaginal/Cervix Exam'],
                listValues: ['Cervix - Lesion']
              },
              {
                text: 'Cervical discharge noted.',
                normal: false,
                key: 'Discharge',
                code: 'fc-3-0a',
                symptomIds: ['SYMPT0007862'],
                symptomName: ['Vaginal/Cervix Exam'],
                listValues: ['Cervix - Discharge']
              }]
        },
        {
          description: 'Uterus',
          mod:
            [{
              text: 'Normal size and position, without tenderness.',
              normal: true,
              key: 'Normal',
              code: 'fu-4-0n',
              symptomIds: ['SYMPT0007863'],
              symptomName: ['Bimanual Exam'],
              listValues: ['Uterus - Normal']
            },
              {
                text: 'Uterus is enlarged.',
                normal: false,
                key: 'Enlarged',
                code: 'fu-4-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Uterus Size - Enlarged']
              },
              {
                text: 'Uterine atrophy noted.',
                normal: false,
                key: 'Shrunken',
                code: 'fu-4-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Uterus Size - Atrophy']
              },
              {
                text: 'Uterus position is anteverted (normal).',
                normal: false,
                key: 'Anteverted',
                code: 'fu-4-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Uterine Position - Anteverted']
              },
              {
                text: 'Uterus position is retroverted.',
                normal: false,
                key: 'Retroverted',
                code: 'fu-4-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Uterine Position - Retroflexed']
              },
              {
                text: 'Uterine tenderness is noted.',
                normal: false,
                key: 'Tenderness',
                code: 'fu-4-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Uterine Tenderness - Any Tenderness']
              }]
        },
        {
          description: 'Adnexa',
          mod:
            [{
              text: 'No masses, tenderness, or nodularity.',
              normal: true,
              key: 'Normal',
              code: 'fa-5-0n',
              symptomIds: ['SYMPT0007863'],
              symptomName: ['Bimanual Exam'],
              listValues: ['Adnexae - Normal']
            },
              {
                text: 'Right adnexal mass(es) noted.',
                normal: false,
                key: 'Masses, Right',
                code: 'fa-5-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Right Adnexae - Mass']
              },
              {
                text: 'Left adnexal mass(es) noted.',
                normal: false,
                key: 'Masses, Left',
                code: 'fa-5-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Left Adnexae - Mass']
              },
              {
                text: 'Right adnexal tenderness noted.',
                normal: false,
                key: 'Tenderness, Right',
                code: 'fa-5-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Right Adnexae - Tender']
              },
              {
                text: 'Left adnexal tenderness noted.',
                normal: false,
                key: 'Tenderness, Left',
                code: 'fa-5-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Left Adnexae - Tender']
              },
              {
                text: 'Right adnexal nodularity noted.',
                normal: false,
                key: 'Nodularity, Right',
                code: 'fa-5-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Right Adnexae - Nodularity']
              },
              {
                text: 'Left adnexal nodularity noted.',
                normal: false,
                key: 'Nodularity, Left',
                code: 'fa-5-0a',
                symptomIds: ['SYMPT0007863'],
                symptomName: ['Bimanual Exam'],
                listValues: ['Left Adnexae - Nodularity']
              }]
        },
        {
          description: 'Bladder',
          mod:
            [{
              text: 'No suprapubic tenderness.',
              normal: true,
              key: 'Normal',
              code: 'fb-6-0n',
              symptomIds: ['SYMPT0007785'],
              symptomName: ['Abdominal Palpation'],
              listValues: ['Suprapubic - No Tenderness']
            },
              {
                text: 'Suprapubic tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'fb-6-0a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['Suprapubic - Tender']
              }]
        },
        {
          description: 'Anus and perineum',
          mod:
            [{
              text: 'No lesions or masses.',
              normal: true,
              key: 'Normal',
              code: 'fa-7-0n',
              symptomIds: ['SYMPT0003924'],
              symptomName: ['Rectal Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Lesion(s) noted.',
                normal: false,
                key: 'Lesions',
                code: 'fa-7-0a',
                symptomIds: ['SYMPT0003924'],
                symptomName: ['Rectal Exam'],
                listValues: ['Lesion']
              },
              {
                text: 'Mass(es) noted.',
                normal: false,
                key: 'Masses',
                code: 'fa-7-0a',
                symptomIds: ['SYMPT0003924'],
                symptomName: ['Rectal Exam'],
                listValues: ['Anal Mass']
              }]
        },
        {
          description: 'CVA tenderness',
          mod:
            [{
              text: 'No CVA tenderness on right.',
              normal: true,
              key: 'Normal, Right',
              code: 'fc-8-1n',
              symptomIds: ['SYMPT0007785'],
              symptomName: ['Abdominal Palpation'],
              listValues: ['CVA - No Right Tenderness']
            },
              {
                text: 'No CVA tenderness on left.',
                normal: true,
                key: 'Normal, Left',
                code: 'fc-8-2n',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['CVA - No Left Tenderness']
              },
              {
                text: 'CVA tenderness on right.',
                normal: false,
                key: 'Abnormal, Right',
                code: 'fc-8-1a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['CVA - Left Tenderness']
              },
              {
                text: 'CVA tenderness on left.',
                normal: false,
                key: 'Abnormal, Left',
                code: 'fc-8-2a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['CVA - Right Tenderness']
              }]
        },
        {
          description: OrderStateEnum.NONE, defaultNormal: true, mod: [
            {
              normal: true,
              defaultNormal: true,
              text: 'No GU exam performed.',
              key: OrderStateEnum.NONE,
              code: OrderStateEnum.NONE
            }
          ]
        }
      ]
  },
  {
    examName: 'Male GU',
    descriptionsArray:
      [{
        description: 'Anus and perineum',
        mod:
          [{
            text: 'No lesions or masses.',
            normal: true,
            key: 'Normal',
            code: 'ma-0-0n',
            symptomIds: ['SYMPT0003924'],
            symptomName: ['Rectal Exam'],
            listValues: ['Normal']
          },
            {
              text: 'Lesion(s) noted.',
              normal: false,
              key: 'Lesions',
              code: 'ma-0-0a',
              symptomIds: ['SYMPT0003924'],
              symptomName: ['Rectal Exam'],
              listValues: ['Lesion']
            },
            {
              text: 'Mass(es) noted.',
              normal: false,
              key: 'Masses',
              code: 'ma-0-0a',
              symptomIds: ['SYMPT0003924'],
              symptomName: ['Rectal Exam'],
              listValues: ['Anal Mass']
            }]
      },
        {
          description: 'Prostate',
          mod:
            [{
              text: 'No enlargement, nodularity, or tenderness.',
              normal: true,
              key: 'Normal',
              code: 'mp-1-0n',
              symptomIds: ['SYMPT0003477'],
              symptomName: ['Prostate Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Prostate is enlarged.',
                normal: false,
                key: 'Enlarged',
                code: 'mp-1-0a',
                symptomIds: ['SYMPT0003477'],
                symptomName: ['Prostate Exam'],
                listValues: ['Enlarged Prostate']
              },
              {
                text: 'Prostatic nodule(s) noted.',
                normal: false,
                key: 'Nodularity',
                code: 'mp-1-0a',
                symptomIds: ['SYMPT0003477'],
                symptomName: ['Prostate Exam'],
                listValues: ['Prostatic Mass']
              },
              {
                text: 'Prostatic tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'mp-1-0a',
                symptomIds: ['SYMPT0003477'],
                symptomName: ['Prostate Exam'],
                listValues: ['Tender Prostate']
              }]
        },
        {
          description: 'Seminal vesicles',
          mod:
            [{
              text: 'No tenderness noted.',
              normal: true,
              key: 'Normal',
              code: 'ms-2-0n',
              symptomIds: ['SYMPT0007864'],
              symptomName: ['Scrotal Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'ms-2-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Seminal Vesicles - Tenderness']
              }]
        },
        {
          description: 'Scrotum',
          mod:
            [{
              text: 'No hydrocele, spermatocele, or tenderness of cord.',
              normal: true,
              key: 'Normal',
              code: 'ms-3-0n',
              symptomIds: ['SYMPT0007864'],
              symptomName: ['Scrotal Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Hydrocele noted.',
                normal: false,
                key: 'Hydrocele',
                code: 'ms-3-0a',
                symptomIds: ['SYMPT0003138'],
                symptomName: ['Hydrocele'],
                listValues: ['']
              },
              {
                text: 'Spermatocele noted.',
                normal: false,
                key: 'Spermatocele',
                code: 'ms-3-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Spermatocele']
              },
              {
                text: 'Tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'ms-3-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Tenderness']
              }]
        },
        {
          description: 'Epididymides',
          mod:
            [{
              text: 'No tenderness noted.',
              normal: true,
              key: 'Normal',
              code: 'me-4-0n',
              symptomIds: ['SYMPT0007864'],
              symptomName: ['Scrotal Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'me-4-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Epididymides - Tenderness']
              }]
        },
        {
          description: 'Testes',
          mod:
            [{
              text: 'No tenderness, enlargement, or masses.',
              normal: true,
              key: 'Normal',
              code: 'mt-5-0n',
              symptomIds: ['SYMPT0007864'],
              symptomName: ['Scrotal Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Tenderness noted.',
                normal: false,
                key: 'Tenderness',
                code: 'mt-5-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Testes - Tenderness']
              },
              {
                text: 'Testicular enlargement noted.',
                normal: false,
                key: 'Enlargement',
                code: 'mt-5-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Testes - Enlargement']
              },
              {
                text: 'Testicular mass(es) noted.',
                normal: false,
                key: 'Masses',
                code: 'mt-5-0a',
                symptomIds: ['SYMPT0007864'],
                symptomName: ['Scrotal Exam'],
                listValues: ['Testes - Mass']
              }]
        },
        {
          description: 'Penis',
          mod:
            [{
              text: 'No rash, lesions, or ulcers noted.',
              normal: true,
              key: 'Normal',
              code: 'mp-6-0n',
              symptomIds: ['SYMPT0007865'],
              symptomName: ['Penis Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Rash noted.',
                normal: false,
                key: 'Rash',
                code: 'mp-6-0a',
                symptomIds: ['SYMPT0007865'],
                symptomName: ['Penis Exam'],
                listValues: ['Rash']
              },
              {
                text: 'Lesion(s) noted.',
                normal: false,
                key: 'Lesions',
                code: 'mp-6-0a',
                symptomIds: ['SYMPT0007865'],
                symptomName: ['Penis Exam'],
                listValues: ['Lesion - Any']
              },
              {
                text: 'Ulcer(s) noted.',
                normal: false,
                key: 'Ulcers',
                code: 'mp-6-0a',
                symptomIds: ['SYMPT0007865'],
                symptomName: ['Penis Exam'],
                listValues: ['Ulcer']
              }]
        },
        {
          description: 'Urethra',
          mod:
            [{
              text: 'No urethral inflammation, or discharge noted.',
              normal: true,
              key: 'Normal',
              code: 'mu-7-0n',
              symptomIds: ['SYMPT0007857'],
              symptomName: ['Urethral Exam'],
              listValues: ['Normal']
            },
              {
                text: 'Urethral inflammation noted.',
                normal: false,
                key: 'Inflammation',
                code: 'mu-7-0a',
                symptomIds: ['SYMPT0007857'],
                symptomName: ['Urethral Exam'],
                listValues: ['Inflammation']
              },
              {
                text: 'Urethral discharge noted.',
                normal: false,
                key: 'Discharge',
                code: 'mu-7-0a',
                symptomIds: ['SYMPT0007857'],
                symptomName: ['Urethral Exam'],
                listValues: ['Discharge - Any']
              }]
        },
        {
          description: 'CVA tenderness',
          mod:
            [{
              text: 'No CVA tenderness on right.',
              normal: true,
              key: 'Normal, Right',
              code: 'mc-8-1n',
              symptomIds: ['SYMPT0007785'],
              symptomName: ['Abdominal Palpation'],
              listValues: ['CVA - No Right Tenderness']
            },
              {
                text: 'No CVA tenderness on left.',
                normal: true,
                key: 'Normal, Left',
                code: 'mc-8-2n',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['CVA - No Left Tenderness']
              },
              {
                text: 'CVA tenderness on right.',
                normal: false,
                key: 'Abnormal, Right',
                code: 'mc-8-1a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['CVA - Right Tenderness']
              },
              {
                text: 'CVA tenderness on left.',
                normal: false,
                key: 'Abnormal, Left',
                code: 'mc-8-2a',
                symptomIds: ['SYMPT0007785'],
                symptomName: ['Abdominal Palpation'],
                listValues: ['CVA - Left Tenderness']
              }]
        },
        {
          description: OrderStateEnum.NONE, defaultNormal: true, mod: [
            {
              normal: true,
              defaultNormal: true,
              text: 'No GU exam performed.',
              key: OrderStateEnum.NONE,
              code: OrderStateEnum.NONE
            }
          ]
        }]
  },
];

// Telemed Exam for PIC

export const telemedExamPIC: PhysicalExam[] = [
  {
    examName: 'General',
    descriptionsArray:
      [{
        description: 'General Appearance',
        defaultNormal: true,
        mod:
          [{
            text: 'Well appearing.',
            normal: true,
            key: 'Normal',
            code: 'gg-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0002901'],
            symptomName: ['General Physical appearance'],
            listValues: ['Well Appearing']
          },
            {
              text: 'Patient is not well appearing.',
              normal: false,
              key: 'Abnormal',
              code: 'gg-0-0a',
              symptomIds: ['SYMPT0002901', 'SYMPT0002901'],
              symptomName: ['General Physical appearance', 'General Physical appearance'],
              listValues: ['Toxic', 'Distressed']
            }],
      },
        {
          description: 'Toxic',
          defaultNormal: true,
          mod:
            [{
              text: 'Non-toxic appearance.',
              normal: true,
              key: 'Normal',
              code: 'gg-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0002901'],
              symptomName: ['General Physical appearance'],
              listValues: ['Well Appearing']
            },
              {
                text: 'Patient appears ill.',
                normal: false,
                key: 'Abnormal',
                code: 'gg-1-0a',
                symptomIds: ['SYMPT0002901'],
                symptomName: ['General Physical appearance'],
                listValues: ['Toxic']
              }],
        },
        {
          description: 'Distress',
          defaultNormal: true,
          mod:
            [{
              text: 'No distress.',
              normal: true,
              key: 'Normal',
              code: 'gg-2-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0002901'],
              symptomName: ['General Physical appearance'],
              listValues: ['Well Appearing']
            },
              {
                text: 'Appears distressed.',
                normal: false,
                key: 'Abnormal',
                code: 'gg-2-0a',
                symptomIds: ['SYMPT0002901'],
                symptomName: ['General Physical appearance'],
                listValues: ['Distressed']
              }],
        },
      ]
  },
  {
    examName: 'Respiratory',
    descriptionsArray:
      [{
        description: 'Respiratory distress',
        defaultNormal: true,
        mod:
          [{
            text: 'No increased work of breathing.',
            normal: true,
            key: 'No Respiratory Distress',
            code: 'rr-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007787'],
            symptomName: ['Respiratory Effort'],
            listValues: ['No Distress']
          },
            {
              text: 'Increased work of breathing.',
              normal: false,
              key: 'Respiratoy Distress',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007787'],
              symptomName: ['Respiratory Effort'],
              listValues: ['Respiratory Distress']
            },
            {
              text: 'Hemoptysis is noted.',
              normal: false,
              key: 'Hemoptysis',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007853'],
              symptomName: ['Hemoptysis'],
              listValues: ['']
            },
            {
              text: 'Breathless.',
              normal: false,
              key: 'Shortness of Breath',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0007787'],
              symptomName: ['Respiratory Effort'],
              listValues: ['Shortness of Breath']
            },
            {
              text: 'Tachypnea.',
              normal: false,
              key: 'Tachypnea',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0002903'],
              symptomName: ['Abnormal Respiratory Rate'],
              listValues: ['Tachypnea']
            },
            {
              text: 'Bradypnea.',
              normal: false,
              key: 'Bradypnea',
              code: 'rr-0-0a',
              symptomIds: ['SYMPT0002903'],
              symptomName: ['Abnormal Respiratory Rate'],
              listValues: ['Bradypnea']
            }]
      }]
  },
  {
    examName: 'Ear, Nose, and Throat',
    descriptionsArray: [{
      description: 'Lips',
      defaultNormal: true,
      mod:
        [{
          text: 'Normal color, no lesions or swelling.',
          normal: true,
          key: 'Normal',
          code: 'lp-0-0n',
          defaultNormal: true,
          symptomIds: ['SYMPT0007866'],
          symptomName: ['Lips'],
          listValues: ['Normal']
        },
          {
            text: 'Vesicles noted on lips.',
            normal: false,
            key: 'Vesicle',
            code: 'lp-0-0a',
            symptomIds: ['SYMPT0007866'],
            symptomName: ['Lips'],
            listValues: ['Vesicles']
          },
          {
            text: 'Lips swollen.',
            normal: false,
            key: 'Swelling',
            code: 'lp-0-0a',
            symptomIds: ['SYMPT0007866'],
            symptomName: ['Lips'],
            listValues: ['Swelling']
          },
          {
            text: 'Ulceration noted.',
            normal: false,
            key: 'Ulceration',
            code: 'lp-0-0a',
            symptomIds: ['SYMPT0007866'],
            symptomName: ['Lips'],
            listValues: ['Ulceration']
          },
          {
            text: 'Laceration on lip.',
            normal: false,
            key: 'Laceration',
            code: 'lp-0-0a',
            symptomIds: ['SYMPT0007866'],
            symptomName: ['Lips'],
            listValues: ['Laceration']
          },
          {
            text: 'Lip cyanosis.',
            normal: false,
            key: 'Cyanosis',
            code: 'lp-0-0a',
            symptomIds: ['SYMPT0007866'],
            symptomName: ['Lips'],
            listValues: ['Lip Cyanosis']
          }]
    },
      {
        description: 'Voice',
        defaultNormal: true,
        mod:
          [{
            text: 'Normal voice.',
            normal: true,
            key: 'Normal',
            code: 'vc-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007867'],
            symptomName: ['Voice Exam'],
            listValues: ['Normal']
          },
            {
              text: 'Hoarse voice.',
              normal: false,
              key: 'Hoarse',
              code: 'vc-0-0a',
              symptomIds: ['SYMPT0007867'],
              symptomName: ['Voice Exam'],
              listValues: ['Hoarse']
            },
            {
              text: 'Muffled voice.',
              normal: false,
              key: 'Muffled',
              code: 'vc-0-0a',
              symptomIds: ['SYMPT0007867'],
              symptomName: ['Voice Exam'],
              listValues: ['Muffled']
            },
            {
              text: 'Weak voice.',
              normal: false,
              key: 'Weak',
              code: 'vc-0-0a',
              symptomIds: ['SYMPT0007867'],
              symptomName: ['Voice Exam'],
              listValues: ['Weak']
            },
            {
              text: 'Nasal voice.',
              normal: false,
              key: 'Nasal',
              code: 'vc-0-0a',
              symptomIds: ['SYMPT0007867'],
              symptomName: ['Voice Exam'],
              listValues: ['Nasal']
            },
            {
              text: 'Breathy voice.',
              normal: false,
              key: 'Breathy',
              code: 'vc-0-0a',
              symptomIds: ['SYMPT0007867'],
              symptomName: ['Voice Exam'],
              listValues: ['Breathy']
            }]
      },
      {
        description: 'Nose discharge',
        defaultNormal: true,
        mod:
          [{
            text: 'No visible discharge from nose.',
            normal: true,
            key: 'Normal',
            code: 'nd-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007849'],
            symptomName: ['External Nose'],
            listValues: ['Normal']
          },
            {
              text: 'Nasal discharge appears Clear.',
              normal: true,
              key: 'Clear',
              code: 'nd-0-0a',
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Clear']
            },
            {
              text: 'Nasal discharge appears Bloody.',
              normal: false,
              key: 'Bloody',
              code: 'nd-0-0a',
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Bloody']
            },
            {
              text: 'Nasal discharge appears Dirty.',
              normal: false,
              key: 'Dirty',
              code: 'nd-0-0a',
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Dirty']
            },
            {
              text: 'Nasal discharge appears Green.',
              normal: false,
              key: 'Green',
              code: 'nd-0-0a',
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Green']
            },
            {
              text: 'Nasal discharge appears Purulent.',
              normal: false,
              key: 'Purulent',
              code: 'nd-0-0a',
              symptomIds: ['SYMPT0007849'],
              symptomName: ['External Nose'],
              listValues: ['Purulent']
            }]
      }]
  },
  {
    examName: 'Skin',
    descriptionsArray:
      [{
        description: 'Ecchymosis or rash',
        defaultNormal: true,
        mod:
          [{
            text: 'No ecchymosis or rash noted.',
            normal: true,
            key: 'Normal Exam',
            code: 'se-0-0n',
            relatedBodyPart: 'skin exam',
            defaultNormal: true,
            symptomIds: ['SYMPT0007817', 'SYMPT0007808'],
            symptomName: ['Bruising Exam', 'Rash Morphology'],
            listValues: ['No Bruising', 'No Rash']
          },
            {
              text: 'Ecchymosis is noted.',
              normal: false,
              key: 'Ecchymosis',
              code: 'se-0-0a',
              symptomIds: ['SYMPT0007817'],
              symptomName: ['Bruising Exam'],
              listValues: ['Any Bruising']
            },
            {
              text: 'Rash is noted.',
              normal: false,
              key: 'Rash',
              code: 'se-0-0a',
              symptomIds: ['SYMPT0007808'],
              symptomName: ['Rash Morphology'],
              listValues: ['Has Rash']
            }]
      },
        {
          description: 'Lesions',
          defaultNormal: true,
          mod:
            [{
              text: 'No skin lesions noted.',
              normal: true,
              key: 'Normal Exam',
              code: 'sl-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007805'],
              symptomName: ['Skin Lesions'],
              listValues: ['No Skin Lesion']
            },
              {
                text: 'Skin lesion(s) noted.',
                normal: false,
                key: 'Lesion(s)',
                code: 'sl-1-0a',
                symptomIds: ['SYMPT0007805'],
                symptomName: ['Skin Lesions'],
                listValues: ['Any Lesion']
              }]
        },
        {
          description: 'Hair',
          defaultNormal: true,
          mod:
            [{
              text: 'Normal Hair',
              normal: true,
              key: 'Normal',
              code: 'sh-6-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007807'],
              symptomName: ['Hair'],
              listValues: ['Normal']
            },
              {
                text: 'Broken hairs noted.',
                normal: false,
                key: 'Broken Hairs',
                code: 'sh-6-0a',
                symptomIds: ['SYMPT0007807'],
                symptomName: ['Hair'],
                listValues: ['Broken']
              },
              {
                text: 'Hair appears coarse.',
                normal: false,
                key: 'Coarse Hair',
                code: 'sh-6-0a',
                symptomIds: ['SYMPT0007807'],
                symptomName: ['Hair'],
                listValues: ['Coarse']
              },
              {
                text: 'Hair appears greasy.',
                normal: false,
                key: 'Greasy Hair',
                code: 'sh-6-0a',
                symptomIds: ['SYMPT0007807'],
                symptomName: ['Hair'],
                listValues: ['Greasy']
              },
              {
                text: 'Patchy hair loss noted.',
                normal: false,
                key: 'Patchy Hair Loss',
                code: 'sh-6-0a',
                symptomIds: ['SYMPT0007807'],
                symptomName: ['Hair'],
                listValues: ['Patchy Loss']
              },
              {
                text: 'White patches of hair noticed.',
                normal: false,
                key: 'White Patch',
                code: 'sh-6-0a',
                symptomIds: ['SYMPT0007807'],
                symptomName: ['Hair'],
                listValues: ['White Patch']
              }]
        }]
  },
  {
    examName: 'Muscular',
    descriptionsArray:
      [{
        description: 'Gait and Posture',
        defaultNormal: true,
        mod:
          [{
            text: 'Normal gait and posture.',
            normal: true,
            key: 'Normal',
            code: 'mg-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0004220', 'SYMPT0007819'],
            symptomName: ['Gait', 'Posture'],
            listValues: ['Normal Gait', 'Normal Posture']
          },
            {
              text: 'Abnormal gait is noted.',
              normal: false,
              key: 'Gait Abnormal',
              code: 'mg-0-0a',
              symptomIds: ['SYMPT0004220'],
              symptomName: ['Gait'],
              listValues: ['Any']
            },
            {
              text: 'Abnormal posture is noted.',
              normal: false,
              key: 'Posture Abnormal',
              code: 'mg-0-0a',
              symptomIds: ['SYMPT0007819'],
              symptomName: ['Posture'],
              listValues: ['Any']
            }]
      },
        {
          description: 'Head and neck',
          defaultNormal: true,
          mod:
            [{
              text: 'Neck is supple with normal range of motion.',
              normal: true,
              key: 'Normal Exam',
              code: 'mh-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007842'],
              symptomName: ['Cervical Spine Exam'],
              listValues: ['Normal Cervical Exam']
            },
              {
                text: 'Decreased range of motion.',
                normal: false,
                key: 'Range of Motion',
                code: 'mh-1-0a',
                symptomIds: ['SYMPT0007842'],
                symptomName: ['Cervical Spine Exam'],
                listValues: ['ROM - Decreased']
              },
              {
                text: 'Neck mass is noted.',
                normal: false,
                key: 'Neck Mass',
                code: 'mh-1-0a',
                symptomIds: ['SYMPT0007842'],
                symptomName: ['Cervical Spine Exam'],
                listValues: ['Mass']
              }]
        }]
  },
  {
    examName: 'Psychiatric',
    descriptionsArray:
      [{
        description: 'Orientation',
        defaultNormal: true,
        mod:
          [{
            text: 'Awake, alert and oriented x 3.',
            normal: true,
            key: 'Awake/Alert/Oriented',
            code: 'po-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007818'],
            symptomName: ['Level of consciousness'],
            listValues: ['Awake and Alert']
          },
            {
              text: 'Appears somnolent.',
              normal: false,
              key: 'Somnolent',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Somnolent']
            },
            {
              text: 'Appears lethargic.',
              normal: false,
              key: 'Lethargic',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Lethargic']
            },
            {
              text: 'Appears obtunded.',
              normal: false,
              key: 'Obtunded',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Obtunded']
            },
            {
              text: 'Appears comatose.',
              normal: false,
              key: 'Comatose',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Comatose']
            },
            {
              text: 'Appears disoriented.',
              normal: false,
              key: 'Disoriented',
              code: 'po-0-0a',
              symptomIds: ['SYMPT0007818'],
              symptomName: ['Level of consciousness'],
              listValues: ['Disoriented']
            }]
      },
        {
          description: 'Mood',
          defaultNormal: true,
          mod:
            [{
              text: 'Euthymia with congruent affect.',
              normal: true,
              key: 'Normal Mood',
              code: 'pm-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007836', 'SYMPT0007836'],
              symptomName: ['Emotions', 'Emotions'],
              listValues: ['Mood - Normal', 'Affect - Congruent']
            },
              {
                text: 'Anxious with congruent affect.',
                normal: false,
                key: 'Anxious Mood and Affect',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836', 'SYMPT0007836'],
                symptomName: ['Emotions', 'Emotions'],
                listValues: ['Mood - Anxious', 'Affect - Congruent']
              },
              {
                text: 'Manic mood.',
                normal: false,
                key: 'Mania',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Manic']
              },
              {
                text: 'Depressed mood.',
                normal: false,
                key: 'Depressed',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Depressed']
              },
              {
                text: 'Dysthymic mood.',
                normal: false,
                key: 'Dysthymic',
                code: 'pm-1-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Mood - Dysphoric']
              }]
        },
        {
          description: 'Affect',
          defaultNormal: true,
          mod:
            [
              {
                text: 'Congruent affect.',
                normal: true,
                key: 'Congruent Affect',
                code: 'pm-2-0n',
                defaultNormal: true,
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Affect - Congruent']
              },
              {
                text: 'Incongruent affect.',
                normal: false,
                key: 'Affect incongruent',
                code: 'pm-2-0a',
                symptomIds: ['SYMPT0007836'],
                symptomName: ['Emotions'],
                listValues: ['Affect - Incongruent']
              }]
        }]
  },
  {
    examName: 'Eyes',
    descriptionsArray:
      [{
        description: 'Lids and Lashes',
        defaultNormal: true,
        mod:
          [{
            text: 'Eyelids and adnexa are unremarkable.',
            normal: true,
            key: 'Normal',
            code: 'ee-0-0n',
            defaultNormal: true,
            symptomIds: ['SYMPT0007577'],
            symptomName: ['Eye Lid Exam'],
            listValues: ['Normal']
          },
            {
              text: 'Blepheritis of right eyelid.',
              normal: false,
              key: 'Blepheritis, Right',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Blepheritis']
            },
            {
              text: 'Blepheritis of left eyelid.',
              normal: false,
              key: 'Blepheritis, Left',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Blepheritis']
            },
            {
              text: 'Bilateral blepheritis noted.',
              normal: false,
              key: 'Blepheritis, Bilateral',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Blepheritis']
            },
            {
              text: 'Hordeolum of right eyelid.',
              normal: false,
              key: 'Hordeolum, Right',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Any Hordeolum Right']
            },
            {
              text: 'Hordeolum of left eyelid.',
              normal: false,
              key: 'Hordeolum, Left',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577'],
              symptomName: ['Eye Lid Exam'],
              listValues: ['Any Hordeolum Left']
            },
            {
              text: 'Hordeolum of both eyes.',
              normal: false,
              key: 'Hordeolum, Bilateral',
              code: 'ee-0-0a',
              symptomIds: ['SYMPT0007577', 'SYMPT0007577'],
              symptomName: ['Eye Lid Exam', 'Eye Lid Exam'],
              listValues: ['Any Hordeolum Right', 'Any Hordeolum Left']
            }]
      },
        {
          description: 'Conjunctivae',
          defaultNormal: true,
          mod:
            [{
              text:
                'The conjunctive and sclera are unremarkable and without injection.',
              normal: true,
              key: 'Normal Exam',
              code: 'ec-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0003870', 'SYMPT0003871'],
              symptomName: ['Conjunctiva', 'Conjunctiva'],
              listValues: ['Normal', '']
            },
              {
                text: 'Paleness of the conjunctiva is noted.',
                normal: false,
                key: 'Pale Conjunctiva',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Pale']
              },
              {
                text: 'Conjunctival injection is noted, right eye.',
                normal: false,
                key: 'Red Conjunctiva, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Injected/Inflamed']
              },
              {
                text: 'Conjunctival injection is noted, left eye.',
                normal: false,
                key: 'Red Conjunctiva, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Injected/Inflamed']
              },
              {
                text: 'Bilateral conjunctival injection is noted.',
                normal: false,
                key: 'Red Conjunctiva, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Injected/Inflamed']
              },
              {
                text: 'Conjunctival swelling, right eye.',
                normal: false,
                key: 'Swollen Conjunctiva, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Swelling']
              },
              {
                text: 'Conjunctival swelling, left eye.',
                normal: false,
                key: 'Swollen Conjunctiva, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Swelling']
              },
              {
                text: 'Bilateral conjunctival swelling.',
                normal: false,
                key: 'Swollen Conjunctiva, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Swelling']
              },
              {
                text: 'Foreign body, right eye.',
                normal: false,
                key: 'Foreign Body, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Foreign body, left eye.',
                normal: false,
                key: 'Foreign Body, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Foreign body, both eyes.',
                normal: false,
                key: 'Foreign Body, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Foreign Body']
              },
              {
                text: 'Blueness of the sclera is noted.',
                normal: false,
                key: 'Blue Sclera',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003871'],
                symptomName: ['Sclera'],
                listValues: ['Blue']
              },
              {
                text: 'Scleral icterus is noted.',
                normal: false,
                key: 'Yellow Sclera',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003871'],
                symptomName: ['Sclera'],
                listValues: ['Yellow']
              },
              {
                text: 'Purulent discharge in right eye.',
                normal: false,
                key: 'Purulent Discharge, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800'],
                symptomName: ['Right Eye Discharge'],
                listValues: ['Purulent']
              },
              {
                text: 'Purulent discharge in left eye.',
                normal: false,
                key: 'Purulent Discharge, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007801'],
                symptomName: ['Left Eye Discharge'],
                listValues: ['Purulent']
              },
              {
                text: 'Purulent discharge in both eyes.',
                normal: false,
                key: 'Purulent Discharge, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800', 'SYMPT0007801'],
                symptomName: ['Right Eye Discharge', 'Left Eye Discharge'],
                listValues: ['Purulent', 'Purulent']
              },
              {
                text: 'Clear discharge in right eye.',
                normal: false,
                key: 'Clear Discharge, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800'],
                symptomName: ['Right Eye Discharge'],
                listValues: ['Clear']
              },
              {
                text: 'Clear discharge in left eye.',
                normal: false,
                key: 'Clear Discharge, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007801'],
                symptomName: ['Left Eye Discharge'],
                listValues: ['Clear']
              },
              {
                text: 'Clear discharge in both eyes.',
                normal: false,
                key: 'Clear Discharge, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0007800', 'SYMPT0007801'],
                symptomName: ['Right Eye Discharge', 'Left Eye Discharge'],
                listValues: ['Clear', 'Clear']
              },
              {
                text: 'Subconjunctival hemorrhage of right eye.',
                normal: false,
                key: 'Subconjuntival Hemorrhage, Right',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Hemorrhage']
              },
              {
                text: 'Subconjunctival hemorrhage of left eye.',
                normal: false,
                key: 'Subconjunctival Hemorrhage, Left',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Hemorrhage']
              },
              {
                text: 'Subconjunctival hemorrhages in both eyes.',
                normal: false,
                key: 'Subconjunctival Hemorrhage, Bilateral',
                code: 'ec-1-0a',
                symptomIds: ['SYMPT0003870'],
                symptomName: ['Conjunctiva'],
                listValues: ['Hemorrhage']
              }]
        }]
  },
  {
    examName: 'Lymph',
    descriptionsArray:
      [
        {
          description: 'Cervical lymph nodes',
          defaultNormal: true,
          mod:
            [{
              text: 'No cervical lymph node enlargement.',
              normal: true,
              key: 'Normal Exam',
              code: 'lc-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007788'],
              symptomName: ['Anterior Cervical'],
              listValues: ['Normal']
            },
              {
                text: 'Cervical lymph node enlargement is noted.',
                normal: false,
                key: 'Enlargement',
                code: 'lc-1-0a',
                symptomIds: ['SYMPT0007788'],
                symptomName: ['Anterior Cervical'],
                listValues: ['Size - Enlarged']
              },
              {
                text: 'Cervical lymph node tenderness is noted.',
                normal: false,
                key: 'Tenderness',
                code: 'lc-1-0a',
                symptomIds: ['SYMPT0007788'],
                symptomName: ['Anterior Cervical'],
                listValues: ['Pain - Tender']
              },
              {
                text: 'Submandibular lymph nodes are swollen.',
                normal: false,
                key: 'Submandibular Lymph Node Swelling',
                code: 'lc-1-0a',
                symptomIds: ['SYMPT0007789'],
                symptomName: ['Submandibular'],
                listValues: ['Size - Enlarged']
              }]
        }]
  },
  {
    examName: 'Neurological',
    descriptionsArray:
      [
        {
          description: 'Cognition',
          defaultNormal: true,
          mod:
            [{
              text: 'Cognitive ability intact.',
              normal: true,
              key: 'Normal',
              code: 'nc-1-0n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007837'],
              symptomName: ['Cognition'],
              listValues: ['Normal']
            },
              {
                text: 'Impaired cognitive ability.',
                normal: false,
                key: 'Impaired',
                code: 'nc-1-0a',
                symptomIds: ['SYMPT0007837'],
                symptomName: ['Cognition'],
                listValues: ['Any']
              }]
        },
        {
          description: 'Cranial Nerves',
          defaultNormal: true,
          mod: [
            {
              text: 'No facial asymmetry.',
              normal: true,
              key: 'Normal',
              code: 'nf-1-1n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Normal']
            },
            {
              text: 'Facial Droop - Right Side.',
              normal: false,
              key: 'Facial Droop - Right',
              code: 'nf-1-1a',
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Right - Facial Droop']
            },
            {
              text: 'Facial Droop - Left Side.',
              normal: false,
              key: 'Facial Droop - Left',
              code: 'nf-1-1b',
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Left - Facial Droop']
            },
            {
              text: 'Impaired eye closing - Right Side.',
              normal: false,
              key: 'Impaired eye closing - Right',
              code: 'nf-1-1c',
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Right - Impaired Eye Closing']
            },
            {
              text: 'Impaired eye closing - Left Side.',
              normal: false,
              key: 'Impaired eye closing - Left',
              code: 'nf-1-1d',
              symptomIds: ['SYMPT0007825'],
              symptomName: ['N VII'],
              listValues: ['Left - Impaired Eye Closing']
            }
          ]
        },
        {
          description: 'Language',
          defaultNormal: true,
          mod: [
            {
              text: 'Spontaneous speech with normal comprehension.',
              normal: true,
              key: 'Normal',
              code: 'nl-1-2n',
              defaultNormal: true,
              symptomIds: ['SYMPT0007868'],
              symptomName: ['Language'],
              listValues: ['Normal']
            },
            {
              text: 'Impaired comprehension.',
              normal: true,
              key: 'Impaired Comprehension',
              code: 'nl-1-2a',
              symptomIds: ['SYMPT0007868'],
              symptomName: ['Language'],
              listValues: ['Impaired Comprehension']
            }
          ]
        }

      ]
  }
];

export enum CustomSubSystem {
  TMDescription = 'Tympanic membrane'
}

export const indexesForSubSystems: { [key in CustomSubSystem]: number } = {
  [CustomSubSystem.TMDescription]: 3
};

export const optionalNormalFindings = ['edl-5-4n', 'edr-5-4n'];

export const TMDescriptionFields: { field: string, code: string[] }[] = [
  {
    field: 'Contour',
    code: ['edr-5-1', 'edl-5-1']
  },
  {
    field: 'Color',
    code: ['edr-5-2', 'edl-5-2']
  },
  {
    field: 'Translucency',
    code: ['edr-5-3', 'edl-5-3']
  },
  {
    field: 'Mobility',
    code: ['edr-5-4', 'edl-5-4']
  },
  {
    field: 'Other',
    code: [
      'edr-5-5', 'edr-5-6', 'edr-5-7', 'edr-5-8', 'edr-5-9',
      'edl-5-5', 'edl-5-6', 'edl-5-7', 'edl-5-8', 'edl-5-9'
    ]
  },
];

export const mediaSections = [
  'General',
  'Skin',
  'Eyes',
  'Ear, Nose, and Throat',
  'Respiratory',
  'Neurological',
  'Muscular',
  'Lymph',
  'Psychiatric',
  'Cardiovascular',
  'GI',
  'ENT',
  'Female GU',
  'Male GU'
];

export const ENTParts: RelatedBodyPart[] = ['left ear', 'right ear', 'left nostril', 'right nostril', 'throat exam'];
