import { ChangeDetectorRef, Component, EventEmitter, Inject, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  BottomButtonsControl,
  StateBottomButtons
} from 'components/app/workspace/patientspace/bottom-space/interfaces';
import { ContinueButton } from 'components/app/workspace/patientspace/continue-button/continue-button';
import { PatientDataFacadeService } from 'patient-core/patient-data-facade.service';
import { PatientContactInformation, PatientProfile } from '../../../../../patient-profile/src/lib/interfaces';
import { PatientProfileService } from '../../../../../patient-profile/src/lib/services/patient-profile.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StateService } from 'services';
import { UserService } from 'user/user.service';
import { GENERATOR_CONTEXT, LOADER } from '../../../../../documents-generator/src/lib/static';
import { GeneratorContext } from '../../../../../documents-generator/src/lib/generator-context.model';
import { SurveysComponent } from '../../../../../provider-documents/src/lib/surveys/surveys.component';
import { DocumentsService } from '../../../../../provider-documents/src/lib/services/documents.service';

@Component({
  selector: 'pa-surveys-container',
  templateUrl: './surveys-container.component.html',
  styleUrls: ['./surveys-container.component.scss'],
  providers: [
    {provide: GENERATOR_CONTEXT, useFactory: () => new BehaviorSubject<GeneratorContext>(new GeneratorContext({}))},
    {provide: LOADER, useFactory: () => new BehaviorSubject<boolean>(false)}
  ]
})
export class SurveysContainerComponent extends ContinueButton implements BottomButtonsControl, OnDestroy {
  @ViewChild('surveys') surveys: SurveysComponent;
  public generatePdfView: EventEmitter<string> = new EventEmitter<string>();

  // @ts-ignore
  public patientProfile$: Observable<PatientProfile> = this.patientProfileService.patientProfileData$('patientProfile');
  // @ts-ignore
  public patientContactInformation$: Observable<PatientContactInformation> = this.patientProfileService.patientProfileData$('contactRecord');

  private _destroy$: Subject<void> = new Subject();
  constructor(
    protected userService: UserService,
    private stateService: StateService,
    private titleService: Title,
    private patientDataService: PatientDataFacadeService,
    private documentsService: DocumentsService,
    private changeDetectorRef: ChangeDetectorRef,
    private patientProfileService: PatientProfileService,
    @Inject(LOADER) loader: BehaviorSubject<boolean>
  ) {
    super(userService);
    this.titleService.setTitle(`Surveys`);
    this.stateService.app.header.setData(`Surveys`);
    loader.asObservable().pipe(takeUntil(this._destroy$)).subscribe(loading => loading ? this.stateService.app.workers.add() : this.stateService.app.workers.rm());
    this.stateService.app.pdf.watchPdfClosed().pipe(takeUntil(this._destroy$)).subscribe(() => this.surveys.isPdfOpened = false);
  }

  public showPdf(blobUrl: string): void {
    this.stateService.app.pdf.emitPdfEvent(blobUrl);
  }

  public uploadForm(file: File): void {
    this.documentsService.uploadDocument('behavior', String(this.patientDataService.patientId), file).subscribe();
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      generatePDF: true
    };
  }

  getDisabledBottomButtons(): StateBottomButtons {
    const isDisabled = !this.surveys.behavioralScreening.length;
    return {
      generatePDF: isDisabled
    };
  }

  onClickBottomButton(nameButton: string): void {
    if (nameButton === 'generatePDF') {
      this.surveys.isPdfOpened = true;
      this.changeDetectorRef.detectChanges();
      this.generatePdfView.emit(`${this.patientDataService.patientId}-behavior.pdf`);
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
