import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { Utils } from 'utils/utils';
import { DialogService } from 'services/app/dialog.service';
import { PpviewmediaComponent } from 'components/shared/popups/ppviewmedia/ppviewmedia.component';
import { PpreferenceComponent } from '../../popups/ppreference/ppreference.component';
import { StateService } from 'services/state.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LibImages } from '../../../../static/body.constants';
import { UserService } from 'user/user.service';
import { FindingsPanelComponent } from '../../../../physical-exam/findings-panel/findings-panel.component';

@Component({
  selector: 'pa-images-section',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.scss']
})
export class ImagesSectionComponent implements OnDestroy {
  private readonly library = LibImages;
  @Input() images: any[] = [];
  @Input() showPanel: boolean;
  @Input() template: QueryList<FindingsPanelComponent>;
  public viewOnly: boolean;

  get findingPanels(): FindingsPanelComponent[] {
    return this.template.toArray();
  }

  constructor(
    public dialogService: DialogService,
    private stateService: StateService,
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {
    this.stateService.patient.getViewOnly().subscribe((viewOnly: boolean) => this.viewOnly = viewOnly || this.userService.getUserRole !== 'practitioner');
  }

  ngOnDestroy() {
    if ((document  as any).pictureInPictureEnabled && (document  as any).pictureInPictureElement) {
      (document  as any).exitPictureInPicture();
    }
  }

  /**
   * Show full image in Viewmedia overlay
   * @param bodyPart body part of a images data (ex. left ear)
   * @param itemidx current image index in bodyPart
   */
  showFullImg(bodyPart: any, itemidx: number) {
    let actualUrl = '';
    const name = bodyPart.bodyPart;
    const audits = Utils.clone(bodyPart.audits as any[]);
    const audit = audits[audits.length - 1];
    const data = [];

    try {
      for (const bp of bodyPart['data']) {
        if (bp.value.fileBlob) actualUrl = bp.value.fileBlob;
        else actualUrl = bp.value.file;
        data.push({ name: name, url: actualUrl });
      }
    } catch (e) {
      console.error('Cannot parse file url @ media-section.component -> showFullImg');
    }

    this.dialogService.custom(PpviewmediaComponent, {
      media: data,
      switch: audit,
      index: itemidx,
      bodyPart: name
    }, null, 'viewmedia');
  }

  cleanURL(oldURL: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  viewRef(lib) {
    this.dialogService.custom(PpreferenceComponent, { lib: lib }, null, 'reference');
  }

  hasRef(bodyPart) {
    return this.library[bodyPart];
  }

  hasMediaFiles(bodyPart) {
    return bodyPart.video.length || bodyPart.data.length;
  }

}
