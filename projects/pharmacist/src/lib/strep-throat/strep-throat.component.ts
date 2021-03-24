import { Component, Inject, Input, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { zip } from 'rxjs';


import { QuestionnaireService } from '../questionnaire.service';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { AnswerType } from '../types';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';

@Component({
  selector: 'ph-strep-throat',
  templateUrl: './strep-throat.component.html',
  styleUrls: ['./strep-throat.component.scss']
})
export class StrepThroatComponent implements OnInit {
  @Input() weight: string;

  public readonly visitReason: PharmacyAssessmentsEnum = PharmacyAssessmentsEnum['STREP-THROAT'];
  public patientCurrentSymptomsQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public patientHistoryQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public screeningsQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public labs: { question: string; answer: string, answerType: AnswerType };
  public centorScore: number;
  public readonly pharmacistAnswerEnum = PharmacistAnswerEnum;

  constructor(
    private questionnaireService: QuestionnaireService,
    @Inject(PATIENT_DATA_PROVIDER) private patientDataService: PatientDataService
  ) { }

  ngOnInit(): void {
    zip(
      this.patientDataService.pharmacistRecommendation$.pipe(take(1)),
      this.questionnaireService.getQuestionnaire(this.visitReason).pipe(take(1))
    ).subscribe(([recommendations, questions]) => {
      this.centorScore = recommendations.ruleData.scoringBreakdown.centorScoreOver2.score;

      questions = this.questionnaireService.addAdditionalQuestionsByVisitReason(questions, this.visitReason, recommendations.ruleData);
      this.patientCurrentSymptomsQuestions = questions.filter(question => question.section === 'currentSymptoms');
      this.patientHistoryQuestions = questions.filter(question => question.section === 'history');
      this.labs = questions.find(question => question.section === 'labs');
      this.screeningsQuestions = questions.filter(question => question.section === 'screenings');
    });
  }
}
