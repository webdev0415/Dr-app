import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagnosticEngine, IllnessesInformation } from 'common/interfaces/diagnostic-engine.interface';
import { DocumentFinalizeFiles } from 'common/types/documents.type';
import {
  BottomButtonsControl,
  StateBottomButtons
} from 'components/app/workspace/patientspace/bottom-space/interfaces';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { isNil } from 'ramda';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { concatMap, filter, take, takeUntil } from 'rxjs/operators';
import { LazyService, NavigationService, StateService } from 'services';
import { TreatmentsService } from 'treatments/treatments.service';
import { UserService } from 'user/user.service';

@Component({
  selector: 'pa-base-documents-container',
  template: ''
})
export abstract class BaseDocumentsContainerComponent implements OnDestroy, BottomButtonsControl {
  public generatePdfView: EventEmitter<string> = new EventEmitter<string>();
  public userSignature$: Observable<string> = this.userService.signature$.pipe(concatMap(signature => isNil(signature) ? of(null) : this.lazyLoader.lazyLoadImageBase64(signature, 'image/jpeg').pipe(take(1))));

  protected pdfFiles: DocumentFinalizeFiles = {};
  protected _destroy$: Subject<void> = new Subject();

  protected constructor(
    protected patientDataService: PatientDataFacadeService,
    protected stateService: StateService,
    protected treatmentsService: TreatmentsService,
    protected activatedRoute: ActivatedRoute,
    protected navigationService: NavigationService,
    protected userService: UserService,
    protected lazyLoader: LazyService,
    protected generationLoader: BehaviorSubject<boolean>,
    protected DEInformation: BehaviorSubject<DiagnosticEngine[]>
  ) {
    this.DEInformation.next(this.activatedRoute.snapshot.data.diagnosisInformation);
    this.generationLoader.asObservable().pipe(
      takeUntil(this._destroy$),
      filter(loading => !isNil(loading))
    ).subscribe(loading => loading ? this.stateService.app.workers.add() : this.stateService.app.workers.rm());
  }

  public uploadForm(file: File): void {
    this.uploadDocument();
  }

  public showPdf(pdf: string): void {
    this.stateService.app.pdf.emitPdfEvent(pdf);
  }

  protected finalizeVisit(): void {
    const DE = this.DEInformation.getValue();
    const illnessesInformation: IllnessesInformation = {
      defined_illnesses: DE.filter(item => item.isSelected && item.icdGroup === 'Defined Illnesses').map(item => ({code: item.icd10})),
      is_edited_by_doctor: true,
      selected_illnesses: DE.filter(item => item.isSelected && item.icdGroup !== 'Defined Illnesses').map(item => ({
        icd10_code: item.icd10,
        icd10_name: item.icdName,
        is_primary: item.isPrimary,
        workup_planned: item.workupPlanned
      }))
    };
    this.patientDataService.finalizePatientVisit(this.pdfFiles, illnessesInformation, DE);
  }

  protected uploadDocument(): void {
    this.finalizeVisit();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      previous: true,
      finalize: true
    };
  }

  getDisabledBottomButtons(): StateBottomButtons {
    return {
      previous: this.generationLoader.getValue(),
      finalize: this.generationLoader.getValue()
    };
  }

  onClickBottomButton(nameButton: string): void {
    switch (nameButton) {
      case ('previous'):
        this.navigationService.goBack();
        break;
      case ('finalize'):
        this.generatePdfView.emit(`${this.patientDataService.patientId}-pharmacy-questions.pdf`);
        break;
    }
  }

}
