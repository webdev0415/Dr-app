import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject, Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import * as dragscroll from 'dragscroll';
import { Subject } from 'rxjs';


import { CUSTOM_OVERLAY_DATA, CustomOverlayRef } from 'services/app/dialog.service';
import { StateService } from 'services/state.service';
import { Utils } from 'utils/utils';

export interface MediaData {
  name: string;
  url: string | SafeUrl;
  url2?: string | SafeUrl;
}

@Component({
  selector: 'pa-ppviewmedia',
  templateUrl: './ppviewmedia.component.html',
  styleUrls: ['./ppviewmedia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PpviewmediaComponent implements OnInit, OnDestroy {
  @Input() public panelOpened = false;
  public urls: MediaData[] = [];
  public index = 0;
  public correspondingImageUrl: string | SafeUrl;
  public swapped: boolean;
  public imageFullsize: boolean;
  public imageLargerThanHost: boolean;
  public backSide = false;

  protected _destroy = new Subject<void>();

  constructor(
    protected rc: CustomOverlayRef,
    @Inject(CUSTOM_OVERLAY_DATA) public data: any,
    protected changeDetector: ChangeDetectorRef,
    protected sanitizer: DomSanitizer,
    protected stateService: StateService,
  ) { }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Esc' || event.key === 'Escape') {
      if (this.stateService.app.dialog.getLastOverlayName() === 'viewmedia' || 'patientcard') {
        this.stateService.app.dialog.popOverlayName();
        this.rc.close();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  checkOnResize(event: Event) {
    this.checkImageSizeRelation();
  }

  /**
   * check if image smaller or larger of viewport
   */
  checkImageSizeRelation() {
    const imageElement: HTMLImageElement = document.querySelector('#midimage');
    const imageHost: HTMLDivElement = document.querySelector('#viewmedia-mid');
    const imageIsSmaller = imageElement && (imageElement.naturalHeight > imageHost.clientHeight
    || imageElement.naturalWidth > imageHost.clientWidth - 100);

    this.imageLargerThanHost = imageIsSmaller;
    dragscroll.reset();
  }

  ngOnInit() {
    this.checkImageSizeRelation();

    if (this.data.media) {
      if (!Array.isArray(this.data.media)) this.urls.push(this.data.media);
      else this.urls = this.data.media;
      this.urls = this.urls.map(media => {
        if (typeof media.url === 'object') media.url = this.sanitizer.bypassSecurityTrustUrl(media.url['changingThisBreaksApplicationSecurity']);
        return media;
      });
    }

    if (this.data.index) this.index = this.data.index;
    if (this.data.switch) {
      const tempAuditObj = Utils.clone(this.data.switch);
      ('s3Blob' in tempAuditObj && tempAuditObj.s3Blob)
        ? this.correspondingImageUrl = this.sanitizer.bypassSecurityTrustUrl(tempAuditObj.s3Blob['changingThisBreaksApplicationSecurity'])
        : this.correspondingImageUrl = tempAuditObj.s3;
    }


  }

  /**
   * swap photo < - > audit pic
   */
  swap() {
    try {
      const temp = this.correspondingImageUrl;
      this.correspondingImageUrl = this.urls[this.index].url;
      this.urls[this.index].url = temp;
      this.checkImageSizeRelation();
      this.swapped = !this.swapped;
      this.changeDetector.detectChanges();
    } catch (e) {
      console.error('Error swapping images @ ppviewmedia.component -> swap:', e);
    }
  }

  /**
   * swap back from an audit (if audit pic shown) and show a next photo if available
   */
  next() {
    if (this.swapped) this.swap();
    if (this.index < this.urls.length - 1) this.index++;
    this.backSide = false;
    this.checkImageSizeRelation();
  }

  /**
   * swap back from an audit (if audit pic shown) and show a previous photo if available
   */
  prev() {
    if (this.swapped) this.swap();
    if (this.index > 0) this.index--;
    this.backSide = false;
    this.checkImageSizeRelation();
  }

  rotate() {
    this.backSide = !this.backSide;
  }


  close(event?, ref?) {
    if (event && ref && (event.target === ref || (event.target.id === 'viewmedia-right-controllers' && ref.id === 'viewmedia-right'))) {
      this.urls = [];
      this.index = 0;
      this.correspondingImageUrl = '';
      this.swapped = false;
      this.imageLargerThanHost = undefined;
      this.imageFullsize = undefined;
      this.stateService.app.dialog.popOverlayName();
      this.rc.close();
    }
  }

  ngOnDestroy(): void {
    this.urls = [];
    this.index = 0;
    this.correspondingImageUrl = '';
    this.swapped = false;
    this.imageLargerThanHost = undefined;
    this.imageFullsize = undefined;
    this._destroy.next();
    this.changeDetector.detach();
  }

  /**
   * switch photo size if photo is larger than the viewport (original size < - > fit)
   */
  switchFullSize() {
    this.imageFullsize = !this.imageFullsize;
    dragscroll.reset();
  }
}
