import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';


import { AnswerType } from '../types';
import { QuestionnaireService } from '../questionnaire.service';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';

@Component({
  selector: 'ph-birth-refill',
  templateUrl: './birth-refill.component.html',
  styleUrls: ['./birth-refill.component.scss']
})
export class BirthRefillComponent implements OnInit {
  public patientHistoryQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public assessmentQuestions: { question: string; answer: string, answerType: AnswerType }[];
  public readonly pharmacistAnswerEnum = PharmacistAnswerEnum;

  constructor(
    private questionnaireService: QuestionnaireService
  ) { }

  ngOnInit() {
      this.questionnaireService.getQuestionnaire(PharmacyAssessmentsEnum['BIRTH-CONTROL'])
      .pipe(take(1))
      .subscribe((questions) => {
        this.patientHistoryQuestions = questions.filter(question => question.section === 'history');
        this.assessmentQuestions = questions.filter(question => question.section === 'assessment');
      });
  }

}
