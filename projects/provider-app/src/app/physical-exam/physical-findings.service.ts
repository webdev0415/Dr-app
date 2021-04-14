import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { flatten } from 'ramda';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { API_URL } from '../../../../patient-profile/src/lib/services/providers';
import { PhysicalExam } from '../common/models/data.model';
import { NotificationsService, PatientdataService, StateService } from '../services';
import { UserService } from 'user/user.service';
import { FormattedTriageLab } from 'labs/interfaces/formatted-triage-lab.interface';
import { DateTime } from '../../../../shared-models/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class PhysicalFindingsService {
  telemedPatient: boolean;
  constructor(@Inject(API_URL) private apiUrl,
              private stateService: StateService,
              private http: HttpClient,
              private patientDataService: PatientdataService,
              private notificationsService: NotificationsService,
              private dateTimeUtils: DateTime) {
                this.patientDataService.isPICTelemedicinePatient().subscribe(value => {
                  this.telemedPatient = value;
                });
              }

  private get patientId(): number {
    return this.stateService.patient.getCurrentId();
  }

  private get baseUrl(): string {
    return this.apiUrl.buildUrl(this.patientId, 'physical_exam');
  }

  public get initialPhysicalExams(): PhysicalExam[] { return this.patientDataService.getInitialPhysicalExams(); }

  private postPE(physicalExams: PhysicalExam[]): Observable<any> {
    const addedExams = this.physicalExamsMap(physicalExams);
    return this.http.post(this.baseUrl, addedExams);
  }

  private patchPE(physicalExams: PhysicalExam[]): Observable<any> {
    const editedExams = this.physicalExamsMap(physicalExams);
    return this.http.patch(this.baseUrl, editedExams);
  }

  private deletePE(physicalExams: PhysicalExam[]): Observable<any> {
    const deletedExams = physicalExams.map(item => ({ examName: item.examName }));
    return this.http.request('delete', this.baseUrl, { body: deletedExams });
  }

  savePEChanges(physicalExams: PhysicalExam[]): Observable<boolean> {
    const peChanges = this.changedSystems(physicalExams);
    const { addedExams, deletedExams, editedExams } = peChanges;
    const updates: Observable<any>[] = [];

    if ((editedExams.length && deletedExams.length) || addedExams.length) updates.push(this.postPE(physicalExams));
    else {
      if (deletedExams.length) updates.push(this.deletePE(deletedExams));
      if (editedExams.length || (!addedExams.length && !deletedExams.length)) updates.push(this.patchPE(editedExams));
    }

    return forkJoin(...updates).pipe(
      map((): boolean => Boolean(flatten(Object.values(peChanges)).length)),
      tap((examsUpdated: boolean) => {
        this.setInitialPhysicalExams(physicalExams);
        if (examsUpdated) this.notificationsService.success('Your changes have been successfully uploaded', 'Successfully saved');
      }),
      catchError(err => {
      this.notificationsService.error(this.notificationsService.error('Unable to save changes', 'Network Error!'));
      return of(err);
    }));
  }

  public changedSystems(physicalExams: PhysicalExam[]) {
    const result: { [key in 'addedExams' | 'deletedExams' | 'editedExams']: PhysicalExam[] } = {
      addedExams: [],
      deletedExams: [],
      editedExams: []
    };

    const initialPhysicalExams = this.initialPhysicalExams;
    const initialExamsNames = initialPhysicalExams.map(item => item.examName);

    const examsNames = physicalExams.map(item => item.examName);
    const rawExamsStrings = initialPhysicalExams.map(item => JSON.stringify(item));

    result.deletedExams = initialPhysicalExams.filter(item => !examsNames.includes(item.examName));
    result.addedExams = physicalExams.filter(item => !initialExamsNames.includes(item.examName));
    result.editedExams = physicalExams.filter(item => !rawExamsStrings.includes(JSON.stringify(item)) && !result.addedExams.find(exam => exam.examName === item.examName));
    return result;
  }

  public physicalExamToSymptoms(physicalExams: PhysicalExam[]): FormattedTriageLab[] {
    const labs: { [key: string]: FormattedTriageLab } = {};

    physicalExams.forEach(physicalExam => physicalExam.addedExams.forEach(exam => {
      const symptomId = exam.modifier.symptomIds[0];
      const symptom = labs[symptomId];
      const value = [exam.modifier.listValues[0], null, null];
      let symptomName = '';
      if (exam.modifier.symptomName) {
        symptomName = exam.modifier.symptomName[0];
      }

      if (symptom) {
        symptom.Values.push(value);

      } else {
        labs[symptomId] = {
          Time: this.dateTimeUtils.currentDate(),
          SymptomSource: 'MA Added',
          Values: [value],
          Response: 'Yes',
          SymptomID: symptomId,
          SymptomName: symptomName ? symptomName : physicalExam.examName,
          Measurement: 0,
          Location: [physicalExam.examName],
          responseDetails: [{ description: exam.description, duration: '' }]
        };
      }
    }));

    return Object.values(labs);
  }

  setInitialPhysicalExams(physicalExams: PhysicalExam[]): void { this.patientDataService.setInitialPhysicalExams(physicalExams); }

  private physicalExamsMap(exams: PhysicalExam[]): { examName: string; examType: string; examResults: string; prevLength: number; addedExams: { description: string; modifier: string; edited: boolean; left: number; right: number; }[] }[] {
    let results: { examName: string; examType: string; examResults: string; prevLength: number; addedExams: { description: string; modifier: string; edited: boolean; left: number; right: number; }[] }[] = [];
    /*
    * According to the dispatch method of the exams array there is no mixed case with different types.
    */

    // let symptomsToRun: any[] = [];
    const examType = this.getExamType();
    exams.forEach(item => {



      const addedExamsArray: { examName: string; examType: string; examResults: string; prevLength: number; addedExams: { description: string; modifier: string; edited: boolean; left: number; right: number; }[] }[] = [];
      const examName = item.examName;
      item.addedExams.forEach(exam => {
        const examResults = exam.description;
        const modifier = exam.modifier;
        const newExam: { description: string; modifier: string; edited: boolean; left: number; right: number; } = {
          description: modifier.text,
          modifier: `${modifier.normal ? 'Normal' : 'Abnormal'}, ${modifier.key}`,
          edited: exam.edited,
          left: exam.left,
          right: exam.right
        };
        const existingExam = addedExamsArray.find(addedExam => addedExam.examResults === examResults);
        if (existingExam) {
          existingExam.addedExams.push(newExam);
        } else addedExamsArray.push({
          examName: examName,
          examType: examType,
          examResults: examResults,
          addedExams: [newExam],
          prevLength: newExam.modifier.length
        });
      });

      results = results.concat(addedExamsArray);
    });
    return results;
  }

  private getExamType(): 'physical' | 'virtual' {
    return this.telemedPatient ? 'virtual' : 'physical';
  }
}
