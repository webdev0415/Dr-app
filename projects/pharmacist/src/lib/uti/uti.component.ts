import { Component, Inject, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { zip } from 'rxjs';
import { prop, sortBy } from 'ramda';


import { QuestionnaireService } from '../questionnaire.service';
import { AnswerSource } from '../interfaces/answer-source.interface';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { AnswerType } from '../types';

@Component({
  selector: 'ph-uti',
  templateUrl: './uti.component.html',
  styleUrls: ['./uti.component.scss']
})
export class UtiComponent implements OnInit {
  public currentSymptomsQuestions: AnswerSource[] = [];
  public historyQuestions: AnswerSource[] = [];
  public screeningsQuestions: AnswerSource[] = [];
  private readonly visitReason: PharmacyAssessmentsEnum = PharmacyAssessmentsEnum.UTI;
  public isInteger = Number.isInteger;
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
      questions = this.questionnaireService.addAdditionalQuestionsByVisitReason(questions, this.visitReason, recommendations.ruleData);
      // @ts-ignore
      this.currentSymptomsQuestions = sortBy(prop('index'), questions.filter(item => item.section === 'currentSymptoms'));
      // @ts-ignore
      this.historyQuestions = sortBy(prop('index'), questions.filter(item => item.section === 'history' || item.section === 'historyNotes'));
      // @ts-ignore
      this.screeningsQuestions = sortBy(prop('index'), questions.filter(item => item.section === 'screenings' || item.section === 'screeningsNotes'));
      if (questions.find(item => item.section === 'history' && item.index === 10).answer !== PharmacistAnswerEnum.yes) this.screeningsQuestions = this.screeningsQuestions.filter(item => !(item.section === 'screenings' && item.index === 4));
      if (questions.find(item => item.section === 'history' && item.index === 0).answer !== PharmacistAnswerEnum.yes) this.historyQuestions = this.historyQuestions.filter(item => !(item.section === 'history' && item.index === 1.1));
    });
  }
}
