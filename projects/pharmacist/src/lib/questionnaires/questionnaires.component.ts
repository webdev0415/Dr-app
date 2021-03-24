import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { path, prop, sortBy } from 'ramda';
import { PharmacistAnswerEnum } from '../enum/pharmacist-answer.enum';


import { PharmacistRuleData } from '../types/pharmacist-rule-data.type';
import { RuleResult } from '../interfaces/rule-result.interface';
import { QuestionnaireService } from '../questionnaire.service';
import { PharmacyAssessmentsEnum } from '../enum/pharmacy-assessments.enum';
import { PharmacistOverviewSectionTypesEnum } from '../enum/pharmacist-overview-section-types.enum';
import { pharmacistSectionTypesByVisitReason } from '../static/pharmacy-assessments.static';
import { AnswerType } from '../types';

@Component({
  selector: 'ph-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnairesComponent implements OnInit {
  @Input() viewOnly = false;
  @Input() documentView = false;
  @Input() questionnaire: PharmacyAssessmentsEnum;
  @Input() sectionType: PharmacistOverviewSectionTypesEnum;
  @Input() pharmacistRecommendations: PharmacistRuleData;

  public question$: Observable<{ question: string; answer: string, answerType: AnswerType }[]>;

  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    this.question$ = this.questionnaireService.getQuestionnaire(this.questionnaire).pipe(
      filter(questions => Boolean(questions.length)),
      map(questions => {
        questions = this.questionnaireService.addAdditionalQuestionsByVisitReason(questions, this.questionnaire, this.pharmacistRecommendations);
        if (this.questionnaire === PharmacyAssessmentsEnum.UTI) {
          if (questions.find(item => item.section === 'history' && item.index === 10).answer !== PharmacistAnswerEnum.yes) questions = questions.filter(item => !(item.section === 'screenings' && item.index === 4));
          if (questions.find(item => item.section === 'history' && item.index === 0).answer !== PharmacistAnswerEnum.yes) {
            questions = questions.filter(item => !(item.section === 'history' && item.index === 1.1));
          } else questions.find(item => item.section === 'screenings' && item.index === 3).question = 'Did the patient answer questions 3-9 above as “no”?';
        }
        questions = questions.filter(questionItem => pharmacistSectionTypesByVisitReason[this.questionnaire][this.sectionType].includes(questionItem.section) && !questionItem.summaryHidden);
        // @ts-ignore
        questions = sortBy(prop('index'), questions);
        return questions;
      }));
  }

  public trackByQuestion(question: {question: string; answer: boolean}): string {
    return question.question;
  }

  public ruleTestResult(rulePath: string[]): boolean {
    const ruleTestResult: RuleResult = rulePath ? path([rulePath[0], 'results', ...rulePath.slice(1)], this.pharmacistRecommendations) : null;
    return ruleTestResult ? ruleTestResult.passed : true;
  }

}
