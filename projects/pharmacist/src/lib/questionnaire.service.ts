import { ErrorHandler, Inject, Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { PharmacistAnswerEnum } from './enum/pharmacist-answer.enum';


import { DiagnosticEngine } from './side-models/common/interfaces/diagnostic-engine/diagnostic-engine.interface';
import { Answer } from './side-models/common/interfaces/behavior-data/anwer.interface';

import { PharmacistRuleData } from './types/pharmacist-rule-data.type';
import { PharmacyAssessmentsEnum } from './enum/pharmacy-assessments.enum';
import {
  additionalQuestionsByVisitReason,
  assessmentsPredication,
  PharmacistAssessments
} from './static/pharmacy-assessments.static';
import { AnswerSource } from './interfaces/answer-source.interface';
import { PharmacistPhysicalAssessment } from './static/physical-assessments.static';
import { ScoringBreakdown as ScoringBreakdownRecommendations } from './static/scoring-breakdown.static';
import { ScoringBreakdownKeysEnum } from './enum/scoring-breakdown-keys.enum';
import { DE_INFORMATION, PATIENT_DATA_PROVIDER, PatientDataService } from './providers';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  constructor(
    @Inject(PATIENT_DATA_PROVIDER) private corePatientDataService: PatientDataService,
    @Inject(DE_INFORMATION) private DE: BehaviorSubject<DiagnosticEngine[]>,
    @Inject(ErrorHandler) private errorHandler: ErrorHandler
  ) { }

  private _hfaPrescription: string;

  public get hfaPrescription() {
    return this._hfaPrescription;
  }

  public set hfaPrescription(hfa) {
    this._hfaPrescription = hfa;
  }

  public getQuestionnaire(questionnaireType: PharmacyAssessmentsEnum): Observable<AnswerSource[]> {
    if (!assessmentsPredication.hasOwnProperty(questionnaireType)) return of([]);
    return combineLatest([
      this.corePatientDataService.triage$.pipe(filter(data => !!data)),
      this.corePatientDataService.socialCard$.pipe(filter(data => !!data)),
      this.patientQuestionnaire$
    ]).pipe(
      filter(data => data.length === 3),
      map(([symptoms, socialCard, questionnaire]) => {
        const assessments: AnswerSource[] = new PharmacistAssessments(symptoms, questionnaire, socialCard, questionnaireType).answers;
        if (assessments)
          assessments.forEach(assessment => {
            if (assessment.error) {
              this.errorHandler.handleError(assessment.error);
            }
          });
        return assessments;
      }));
  }

  private get patientQuestionnaire$(): Observable<Answer[]> {
    return this.corePatientDataService.patientQuestionnaire$.pipe(map(data => {
      if (!data || !data.length) return [];
      const pharmacyQuestions = data.find(item => item.subject === 'pharmacy_questions');
      return pharmacyQuestions ? pharmacyQuestions.answers : [];
    }));
  }

  public addAdditionalQuestionsByVisitReason(questions: AnswerSource[], visitReason: PharmacyAssessmentsEnum, pharmacistRecommendations: PharmacistRuleData): AnswerSource[] {
    const history = questions.filter(item => item.section === 'history' || item.section === 'historySummary');
    const currentSymptoms = questions.filter(item => item.section === 'currentSymptoms');
    additionalQuestionsByVisitReason[visitReason].forEach(item =>
      questions.push({
        question: item.question,
        answer: item.answer(history, currentSymptoms, pharmacistRecommendations, this.DE.getValue()),
        answerType: 'boolean',
        section: item.section,
        index: item.index,
        ruleSetPath: item.ruleSetPath,
        error: null
      })
    );
    questions = questions.filter(questionItem => questionItem.question !== 'age over 65');
    return questions;
  }

  public get physicalAssessment$(): Observable<{ assessment: string, acceptableRange: string, passed: boolean, units: string }[]> {
    return combineLatest([
      this.corePatientDataService.pharmacistRecommendation$,
      this.corePatientDataService.socialCard$.pipe(pluck('patientAge'))
    ]).pipe(map(([recommendations, patientAge]) => {
      return new PharmacistPhysicalAssessment(+patientAge, recommendations.ruleData).assessment;
    }));
  }

  public get scoringTooLow(): Observable<boolean> {
    return this.corePatientDataService.pharmacistRecommendation$.pipe(filter(recommendations => !!recommendations), map(recommendations => {
      const scoringBreakdownKey = ScoringBreakdownKeysEnum[recommendations.rulesetTested];
      return scoringBreakdownKey && recommendations.ruleData && recommendations.ruleData.scoringBreakdown[scoringBreakdownKey] && recommendations.ruleData.scoringBreakdown[scoringBreakdownKey].score < recommendations.ruleData.scoringBreakdown[scoringBreakdownKey].minimumScore;
    }));
  }

  public get scoringBreakdown(): Observable<{ recommendations: string[]; currentScore: number; minimumScore: number }> {
    return this.corePatientDataService.pharmacistRecommendation$.pipe(filter(recommendations => !!recommendations), map(recommendations => {
      const scoringBreakdownKey = ScoringBreakdownKeysEnum[recommendations.rulesetTested];
      const ruleResult = recommendations.ruleData.scoringBreakdown[scoringBreakdownKey];
      return { recommendations: new ScoringBreakdownRecommendations(ruleResult.ruleResults).recommendations, currentScore: ruleResult.score, minimumScore: ruleResult.minimumScore };
    }));
  }

  public get allergiesInformation$(): Observable<string> {
    return this.patientQuestionnaire$.pipe(map(answers => {
      const hasAllergiesAnswer = answers.find(item => item.questionId === 'ALBERTSONS-21');
      const hasAllergies = hasAllergiesAnswer && hasAllergiesAnswer.answer.toLowerCase() === PharmacistAnswerEnum.yes;
      const allergiesDetails = (answers.find(item => item.questionId === 'ALBERTSONS-22') || { answer: 'Ask Patient' });
      return hasAllergies ? allergiesDetails.answer : 'N.K.A';
    }));
  }
}
