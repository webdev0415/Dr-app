import { Component, Inject, Input, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { zip } from 'rxjs';


import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { QuestionnaireService } from '../questionnaire.service';
import { AnswerSource } from '../interfaces/answer-source.interface';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';

@Component({
  selector: 'ph-flu-shot',
  templateUrl: './flu-shot.component.html',
  styleUrls: ['./flu-shot.component.scss']
})
export class FluShotComponent implements OnInit {
  @Input() age: number;
  @Input() weight: string;

  public patientFluRiskFactorsQuestions: AnswerSource[];
  public patientHistoryQuestions: AnswerSource[];
  public screeningsQuestions: AnswerSource[];
  private readonly visitReason: PharmacyAssessmentsEnum = PharmacyAssessmentsEnum['FLU-SHOT'];
  public readonly pharmacistAnswerEnum = PharmacistAnswerEnum;

  constructor(
    private questionnaireService: QuestionnaireService,
    @Inject(PATIENT_DATA_PROVIDER) private patientDataService: PatientDataService,
  ) { }

  ngOnInit(): void {
    zip(
      this.patientDataService.pharmacistRecommendation$.pipe(take(1)),
      this.questionnaireService.getQuestionnaire(this.visitReason).pipe(take(1))
    ).subscribe(([recommendations, questions]) => {
      questions = this.questionnaireService.addAdditionalQuestionsByVisitReason(questions, this.visitReason, recommendations.ruleData);
      this.patientFluRiskFactorsQuestions = questions.filter(question => question.section === 'fluRiskFactors');
      this.patientHistoryQuestions = questions.filter(question => question.section === 'history');
      this.screeningsQuestions = questions.filter(question => question.section === 'screenings');
    });
  }

  get eligibility(): boolean {
    const question = this.screeningsQuestions.find(item => item.section === 'screenings' && item.index === 1);
    return question ? question.answer.toLowerCase() === 'yes' : false;
  }
}
