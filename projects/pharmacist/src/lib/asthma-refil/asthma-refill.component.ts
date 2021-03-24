import { Component, Inject, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { zip } from 'rxjs';


import { QuestionnaireService } from '../questionnaire.service';
import { AnswerType } from '../types';
import { prop, sortBy } from 'ramda';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';


@Component({
  selector: 'ph-asthma-refill',
  templateUrl: './asthma-refill.component.html',
  styleUrls: ['./asthma-refill.component.scss']
})
export class AsthmaRefillComponent implements OnInit {

  public patientHistoryQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public assessmentQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public readonly pharmacistAnswerEnum = PharmacistAnswerEnum;

  constructor(
    private questionnaireService: QuestionnaireService,
    @Inject(PATIENT_DATA_PROVIDER) private patientDataService: PatientDataService,
  ) { }

  ngOnInit() {
    zip(this.patientDataService.pharmacistRecommendation$.pipe(take(1)),
    this.questionnaireService.getQuestionnaire(PharmacyAssessmentsEnum.ASTHMA))
      .pipe(take(1))
      .subscribe(([recommendations, questions]) => {
        questions = this.questionnaireService.addAdditionalQuestionsByVisitReason(questions, PharmacyAssessmentsEnum.ASTHMA, recommendations.ruleData);
        // @ts-ignore
        questions = sortBy(prop('index'), questions);
        this.patientHistoryQuestions = questions.filter(question => question.section === 'history');
        this.assessmentQuestions = questions.filter(question => question.section === 'assessment');
      });
  }
}
