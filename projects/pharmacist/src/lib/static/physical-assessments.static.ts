import { PharmacistRuleData } from '../types/pharmacist-rule-data.type';
import { PhysicalAssessmentInterface } from '../interfaces/physical-assessment.interface';

export class PharmacistPhysicalAssessment {
  constructor(private patientAge: number, private ruleTestResult: PharmacistRuleData) {}

  private getRuleTestResult(measure: string): boolean {
    const measureChecked = this.ruleTestResult.measurements.ruleResults.hasOwnProperty(measure);
    return measureChecked ? this.ruleTestResult.measurements.ruleResults[measure] : null;
  }

  public get assessment(): PhysicalAssessmentInterface[] {
    return [
      {
        assessment: 'Blood Pressure',
        acceptableRange: 'Systolic BP greater than 100 mmHG',
        passed: this.getRuleTestResult('systolicBpOver100'),
        units: 'mmHG'
      },
      {
        assessment: 'Breathing Rate',
        acceptableRange: `Less than ${this.patientAge < 18 ? 20 : 25} breaths per minute`,
        passed: this.getRuleTestResult('breathingRateInRange'),
        units: 'bpm'
      },
      {
        assessment: 'Breathing Rate',
        acceptableRange: `Less than 25 breaths per minute`,
        passed: this.getRuleTestResult('breathingRateUnder25'),
        units: 'bpm'
      },
      {
        assessment: 'Pulse',
        acceptableRange: `Less than 100 beats per minute`,
        passed: this.getRuleTestResult('pulseUnder100Bpm'),
        units: 'bpm'
      },
      {
        assessment: 'Pulse',
        acceptableRange: `Less than ${this.patientAge < 18 ? 119 : 100} beats per minute`,
        passed: this.getRuleTestResult('pulseInRange'),
        units: 'bpm'
      },
      {
        assessment: 'Oxygenation',
        acceptableRange: 'Greater than 90%',
        passed: this.getRuleTestResult('o2SaturationOver90'),
        units: '%'
      },
      {
        assessment: 'Body Temperature',
        acceptableRange: `Less than ${this.patientAge < 18 ? 102 : 103}°F`,
        passed: this.getRuleTestResult('temperatureInRange'),
        units: '°F'
      },
      {
        assessment: 'Body Temperature',
        acceptableRange: `Less than 103°F`,
        passed: this.getRuleTestResult('temperatureUnder103'),
        units: '°F'
      },
    ];
  }
}
