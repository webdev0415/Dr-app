import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  OnDestroy,
  ContentChild,
  ContentChildren, QueryList
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as R from 'ramda';

import { StateService } from 'services/state.service';
import { UserService } from 'user/user.service';
import { PhysicalExamsType } from '../../../common/types/physical-exams.type';
import { FindingsPanelComponent } from '../../../physical-exam/findings-panel/findings-panel.component';
import { SystemsPanelComponent } from '../../../physical-exam/systems-panel/systems-panel.component';
import { Media } from 'static/static.vitals';


@Component({
  selector: 'pa-media-section',
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.scss']
})
export class MediaSectionComponent implements OnDestroy {
  @Input() examData: any;
  @Input() media: Media;
  @Input() type: PhysicalExamsType;
  @Input() reviewed: boolean;
  @Input() collapsed = true;
  @Input() showFindingsPanel: boolean;
  @Output() collapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reviewEmitted: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('collapse') panel;

  @ContentChildren(FindingsPanelComponent) template: QueryList<FindingsPanelComponent>;
  @ContentChild(SystemsPanelComponent) systemButtons;

  public viewOnly: boolean;
  public isAudioMedia = false;
  public isPhotoMedia = false;
  public sectionData = [];

  constructor(
    private stateService: StateService,
    private userService: UserService,
    private changeDetector: ChangeDetectorRef,
    private activeRoute: ActivatedRoute,
    private element: ElementRef
  ) {
    this.viewOnly = this.stateService.patient.getLastViewOnly() || (this.userService.getUserRole !== 'practitioner');
  }

  hasAnyData() {
    switch (this.type) {
      case 'Cardiovascular': this.sectionData = [this.media.heart]; this.isAudioMedia = true; break;
      case 'Respiratory': this.sectionData = [this.media.lungs]; this.isAudioMedia = true; break;
      case 'GI': this.sectionData = [this.media.abdomen]; this.isAudioMedia = true; break;
      case 'ENT': this.sectionData = [this.media.ears[0], this.media.ears[1], this.media.nose[0], this.media.nose[1], this.media.mouth[0]]; this.isPhotoMedia = true; break;
      case 'Skin': this.sectionData = [this.media.skin[0]]; this.isPhotoMedia = true; break;
    }
    return this.hasMediaData(this.sectionData);
  }

  hasMediaData(section) {
    let data = false;
    section.forEach(item => {
      if (
        (!R.isNil(item.data) && !R.isEmpty(item.data))
        || (item.video && item.video.length)
        || Object.keys(item).some(key => !R.isNil(item[key].data) && !R.isEmpty(item[key].data.raw))
      ) {
        data = true;
      }
    });
    return data;
  }

  review() {
    if (!this.reviewed) {
      this.reviewEmitted.emit();
      this.reviewed = true;
      this.changeDetector.detectChanges();
    }
  }

  getTypeFormatted(type) {
    return type === 'Cardiovascular' ? 'Heart' : type;
  }

  closeTab(): void {
    this.panel.hide();
    this.review();
  }

  openTabForReview() {
    this.panel.toggle();
    this.review();
    this.element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  public updateCollapsedState(state: boolean) {
    this.collapsedChange.emit(state);
  }

  ngOnDestroy() {
    this.changeDetector.detach();
  }

  openBar(event: Event) {
    const clickedElement = <HTMLInputElement>event.target;
    const isButton = clickedElement.tagName.includes('BUTTON');
    const isTextArea = clickedElement.tagName.includes('TEXTAREA');
    if (!(isButton || isTextArea) && this.collapsed) {
      this.systemButtons.onClick(false);
    }
  }

  trackByIndex(index: number, item) {
    return index;
  }
}
