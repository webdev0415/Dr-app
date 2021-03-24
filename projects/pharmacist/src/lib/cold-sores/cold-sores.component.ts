import { Component, Inject, OnInit } from '@angular/core';

import { zip } from 'rxjs';
import { take } from 'rxjs/operators';
import { prop, sortBy } from 'ramda';


import { QuestionnaireService } from '../questionnaire.service';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { albertsonsQuestions } from '../static/pharmacy-questionnaire.static';
import { AnswerSource } from '../interfaces/answer-source.interface';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';

@Component({
  selector: 'ph-cold-sores',
  templateUrl: './cold-sores.component.html',
  styleUrls: ['./cold-sores.component.scss']
})
export class ColdSoresComponent implements OnInit {
  public currentSymptomsQuestions: AnswerSource[] = [];
  public historyQuestions: AnswerSource[] = [];
  public screeningsQuestions: AnswerSource[] = [];
  private readonly visitReason: PharmacyAssessmentsEnum = PharmacyAssessmentsEnum['COLD-SORES'];

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
      // @ts-ignore
      this.currentSymptomsQuestions = sortBy(prop('index'), questions.filter(item => item.section === 'currentSymptoms'));
      // @ts-ignore
      this.historyQuestions = sortBy(prop('index'), questions.filter(item => item.section === 'history' || item.section === 'historyNotes'));
      const medicationsAnswer = this.historyQuestions.find(item => item.index === 8);
      if (medicationsAnswer.answer.toLowerCase() === 'no') {
        medicationsAnswer.question = albertsonsQuestions['ALBERTSONS-11'].question;
        medicationsAnswer.answerType = 'boolean';
      }
      const sickDurationAnswer = this.historyQuestions.find(item => item.index === 1);
      if (sickDurationAnswer.answer.toLowerCase() === 'no') {
        sickDurationAnswer.question = questions.find(item => item.index === 1 && item.section === 'historySummary').question;
        sickDurationAnswer.answerType = 'boolean';
      }
      // @ts-ignore
      this.screeningsQuestions = sortBy(prop('index'), questions.filter(item => item.section === 'screenings'));
    });
  }

  public positiveAnswerChecked(answer: AnswerSource): boolean {
    switch (answer.answerType) {
      case 'boolean':
        return answer.answer === PharmacistAnswerEnum.yes;
      case 'text':
        return Boolean(answer.answer.trim().length);
      case 'score':
        return Boolean(+answer.answer);
    }
  }

  public isMissedAnswer(answer: AnswerSource): boolean {
    return answer.answer === PharmacistAnswerEnum.unknown;
  }

  public hasSpecificAnswer(answer: AnswerSource): boolean {
    return answer.answerType !== 'boolean' && this.positiveAnswerChecked(answer);
  }
}
