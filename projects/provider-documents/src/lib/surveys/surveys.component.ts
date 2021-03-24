import { Component, Input, OnInit } from '@angular/core';
import { PatientContactInformation } from '../../../../patient-profile/src/lib/interfaces';
import { DataService } from 'services/data.service';

import { questionnaire, sportsScreeningItems } from 'static/patient.constants';
import { StateService } from 'services/state.service';
import { pagesTitles } from 'static/static.pages';
import { UserService } from 'user/user.service';
import { Data } from 'common/models/data.model';
import { KioskModeType } from 'common/types/kiosk-mode.type';
import { DocumentsService } from '../services/documents.service';

@Component({
  selector: 'doc-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  @Input() contactInformation: PatientContactInformation;
  @Input() patientFullName: string;
  public readonly title = pagesTitles.surveys;

  public behavioralScreening = [];
  public viewOnly: boolean;
  public selectedTab: number;
  public isPdfOpened = false;
  public patient: Data;
  public kioskMode: KioskModeType;

  constructor(
    private stateService: StateService,
    protected userService: UserService,
    private dataService: DataService,
    private documentsService: DocumentsService
  ) {
  }

  ngOnInit(): void {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly);
    this.selectedTab = this.stateService.patient.tabs.getScreenings();
    this.loadSymptoms();

    const businessName = this.userService.getUserData.environment.business_name;
    this.kioskMode = businessName && businessName.toLowerCase().includes('fastmed') ? 'FASTMED' : 'AKOS';
  }

  loadSymptoms() {
    this.dataService.getPatient().subscribe(data => {
      if (data) {
        this.patient = data;
        this.behavioralScreening = [];
        this.buildTable(data.behavioralScreening ? data.behavioralScreening : []);
      }
    });
  }

  buildTable(data) {
    data.forEach(subject => {
      const behaviorSubject = {
        subject: subject.subject,
        version: subject.version,
        answers: []
      };
      const questionnaireObject = questionnaire.find(item => item.subject === subject.subject);
      const questionsList: any = questionnaireObject ? questionnaireObject.questions : [];
      questionsList.forEach(item => {
        if (item.id && subject.answers.find(answer => answer.question_id === item.id)) {
          const answerData = subject.answers.find(found => found.question_id === item.id);
          if (answerData.answer_multiple && answerData.answer_multiple.length) {
            if (item.text !== '') behaviorSubject.answers.push({question: item.text, answer: '', subQuestion: false, noBorder: false});
            answerData.answer_multiple.forEach(mAnswer => {
              if (mAnswer.header) behaviorSubject.answers.push({question: mAnswer.header, answer: '', subQuestion: false, noBorder: false});
              mAnswer.answers.forEach(answer => {
                const foundQuestion = questionsList.find(question => question.id === answer.question_id);
                const subjectAnswerItem = {
                  question: foundQuestion.text,
                  answer: answer.answer,
                  subQuestion: true,
                  noBorder: Boolean(item.noBorder),
                  addition: []
                };
                behaviorSubject.answers.push(subjectAnswerItem);
              });
            });
          } else {
            let answer = answerData.answer;
            if (['SPT-9', 'SPT-10', 'SPT-11'].includes(item.id)) answer = 'See below';
            const subjectAnswerItem = {
              question: item.text,
              answer: answer,
              subQuestion: Boolean(item.subQuestion),
              noBorder: Boolean(item.noBorder),
              addition: []
            };
            behaviorSubject.answers.push(subjectAnswerItem);
          }
        } else if (item.relatedTo && subject.answers.find(answer => item.relatedTo.includes(answer.question_id))) {
          behaviorSubject.answers.push({question: item.text, addition: []});
        } else if (item.special) {
          const sprain = subject.answers.find(answer => answer.question_id === 'SPT-9');
          const fracture = subject.answers.find(answer => answer.question_id === 'SPT-10');
          const procedure = subject.answers.find(answer => answer.question_id === 'SPT-11');
          const tableData = {
            sprain: sprain ? sprain.answer.split(', ') : [],
            fracture: fracture ? fracture.answer.split(', ') : [],
            procedure: procedure ? procedure.answer.split(', ') : [],
          };
          const tableOne = [];
          const tableTwo = [];
          sportsScreeningItems.forEach((bodyPart, index) => {
            if (index < (sportsScreeningItems.length / 2)) {
              tableOne.push(bodyPart);
            } else {
              tableTwo.push(bodyPart);
            }
          });
          if (sprain || fracture || procedure) behaviorSubject.answers.push({special: item.special, data: tableData, first: tableOne, second: tableTwo});
        }
        if (item.addition && item.addition.length) {
          item.addition.forEach(addition => {
            const found = subject.answers.find(answer => answer.question_id === addition);
            if (found) {
              behaviorSubject.answers[behaviorSubject.answers.length - 1].addition.push(found);
            }
          });
        }
      });
      if (behaviorSubject.answers && behaviorSubject.answers.length) {
        this.behavioralScreening.push(behaviorSubject);
      }
    });
  }

  getAdditions(row) {
    let text = '';
    if (row.addition.length) {
      row.addition.forEach((addition, index) => {
        text += (addition.answer + (index !== (row.addition.length - 1) ? ', ' : ''));
      });
      return `(${text})`;
    } else {
      return '';
    }
  }

  makePDF() {
    this.stateService.app.workers.add();
    this.isPdfOpened = true;

    setTimeout(() => {
      const element = document.querySelector('#pdf-surveys');
      DocumentsService.pdfGenerator(element).then(pdfObject => {
        DocumentsService.setPdfConfig(pdfObject);

        const blob = pdfObject.output('bloburl');

        this.stateService.app.pdf.emitPdfEvent(blob);

        const PDF = new File(
          [pdfObject.output('blob')],
          `${this.patient.patientInformation.patientId}-behavior.pdf`,
          {type: 'application/pdf'}
          );

        this.documentsService.uploadDocument('behavior', this.patient.patientInformation.patientId, PDF).subscribe();

        this.stateService.app.workers.rm();
      })
        .catch(err => {
          console.error('Error generating PDF:', err);
          this.stateService.app.workers.rm();
        })
        .finally(() => this.isPdfOpened = false);
    });
  }

  onIndexChange() {
    this.stateService.patient.tabs.setScreenings(this.selectedTab);
  }
}
