import { Component, Inject, Input, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { zip } from 'rxjs';

import { QuestionnaireService } from '../questionnaire.service';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';
import { AnswerSource } from '../interfaces/answer-source.interface';
import { PATIENT_DATA_PROVIDER, PatientDataService } from '../providers';

@Component({
  selector: 'ph-flu-treatment',
  templateUrl: './flu-treatment.component.html',
  styleUrls: ['./flu-treatment.component.scss']
})
export class FluTreatmentComponent implements OnInit {
  @Input() age: number;
  @Input() weight: string;

  public patientHistoryQuestions: AnswerSource[];
  public screeningsQuestions: AnswerSource[];
  public currentSymptomsQuestions: AnswerSource[];
  public rapidInfluenzaTestQuestion: AnswerSource;
  private readonly visitReason: PharmacyAssessmentsEnum = PharmacyAssessmentsEnum['COLD-FLU'];
  public readonly pharmacistAnswerEnum = PharmacistAnswerEnum;

  constructor(private questionnaireService: QuestionnaireService,
              @Inject(PATIENT_DATA_PROVIDER) private patientDataService: PatientDataService,
  ) { }

  ngOnInit(): void {
    zip(
      this.patientDataService.pharmacistRecommendation$.pipe(take(1)),
      this.questionnaireService.getQuestionnaire(this.visitReason).pipe(take(1))
    ).subscribe(([recommendations, questions]) => {
      questions = this.questionnaireService.addAdditionalQuestionsByVisitReason(questions, this.visitReason, recommendations.ruleData);
      this.patientHistoryQuestions = questions.filter(question => question.section === 'history');
      this.screeningsQuestions = questions.filter(question => question.section === 'screenings' || question.section === 'screeningsNotes');
      this.currentSymptomsQuestions = questions.filter(question => question.section === 'currentSymptoms');
      this.rapidInfluenzaTestQuestion = questions.find(questionItem => questionItem.question === 'Rapid Influenza Test');
    });
  }
}
