import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input, NgZone,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { BehaviorSubject, iif, of, Subject } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  mapTo,
  take,
  takeUntil,
  tap,
  timeout
} from 'rxjs/operators';


import { DocumentGeneratorService } from '../document-generator.service';
import { GeneratorContext } from '../generator-context.model';
import { GENERATOR_CONTEXT, LOADER } from '../static';


@Component({
  selector: 'dg-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements AfterViewInit {
  @Input() fullWidth = true;
  @Input() userSignature: string;
  @Input() generate: EventEmitter<string>;
  @Output() blobUrl: EventEmitter<string> = new EventEmitter<string>();
  @Output() file: EventEmitter<File> = new EventEmitter<File>();
  @ViewChild('userSignatureTemplate') public userSignatureTemplate: TemplateRef<HTMLDivElement>;

  private generatorContext: GeneratorContext;
  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    @Inject(LOADER) private loading: BehaviorSubject<boolean>,
    @Inject(GENERATOR_CONTEXT) context: BehaviorSubject<GeneratorContext>,
    private readonly zone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {
    context.asObservable().pipe(takeUntil(this._destroy$), filter(data => !!data)).subscribe(generatorContext => this.generatorContext = generatorContext);
  }

  public get isPlatformiOS(): boolean {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }

  makePDF(fileName: string): void {
    this.loading.next(true);
    iif(
      () => !this.zone.isStable,
      this.zone.onStable,
      this.zone.onUnstable.pipe(timeout(2000), concatMap(() => this.zone.onStable), catchError(() => of(true)))
    ).pipe(mapTo(document.querySelector('#dischargedoc')), take(1)).subscribe((element) => {
      const textAreaElems = document.querySelectorAll('textarea');
      const checkboxElems = document.querySelectorAll('.check-label');
      const instructionsElement = element.querySelector('#instructions');
      const signatureElement = element.querySelector('#signature');
      if (instructionsElement && this.generatorContext.hideMedicationInstructions) instructionsElement['hidden'] = true;
      const brElements = document.querySelectorAll('br');
      if (this.generatorContext.hideBrElements) brElements.forEach(el => el['hidden'] = true);
      const editBtns = document.querySelectorAll('.link');
      editBtns.forEach(btn => btn['hidden'] = true);

      textAreaElems.forEach(elem => {
        const h = elem.scrollHeight;
        elem.style.cssText = `
        background-attachment: local;
        background-image: url(${ this.isPlatformiOS ? '' : this.generatorContext.textAreaBackgroundImage});
        height: ${h}px;
        `;
      });

      checkboxElems.forEach(elem => {
        elem.classList.add('pdf', 'd-flex', 'align-items-end');
      });

      if (signatureElement) signatureElement.classList.add('d-none');

      DocumentGeneratorService.pdfGenerator(element, this.generatorContext.pageBreakMethod).then(pdfObject => {
        if (this.generatorContext.multiPage) {
          pdfObject = DocumentGeneratorService.setPdfConfig(pdfObject);
          if (this.userSignature) pdfObject = DocumentGeneratorService.setSignature(pdfObject, this.userSignature);
        }

        if (instructionsElement) instructionsElement['hidden'] = false;
        if (signatureElement) signatureElement.classList.remove('d-none');

        if (this.generatorContext.hideBrElements) brElements.forEach(el => el['hidden'] = false);
        textAreaElems.forEach(elem => {
          const h = elem.scrollHeight;
          elem.style.cssText = `
        background-image: none;
        height: ${h}px;
      `;
        });

        checkboxElems.forEach(elem => {
          elem.classList.remove('pdf', 'd-flex', 'align-items-end');
        });
        editBtns.forEach(btn => btn['hidden'] = false);
        const blob = pdfObject.output('bloburl');
        this.blobUrl.emit(blob);
        this.file.emit(new File([pdfObject.output('blob')], fileName, {type: 'application/pdf'}));
        this.loading.next(false);
      })
        .catch(err => {
          console.error('Error generating PDF:', err);
          this.loading.next(false);
        });
    });
  }

  ngAfterViewInit(): void {
    this.generate.pipe(takeUntil(this._destroy$), filter(fileName => !!fileName), tap((fileName) => this.makePDF(fileName))).subscribe();
  }

}
