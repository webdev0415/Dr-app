import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { CustomOverlayRef, CUSTOM_OVERLAY_DATA, DialogService } from 'services/app/dialog.service';
import { LibImages } from 'static/body.constants';
import { PpviewmediaComponent } from '../ppviewmedia/ppviewmedia.component';
import { StateService } from 'services/state.service';
import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';

const fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('250ms ease-in', style({ opacity: 1 }))
]);

const fadeOutAnimation = animation([
  style({ opacity: 1 }),
  animate('250ms ease-out', style({ opacity: 0 }))
]);

@Component({
  selector: 'pa-ppreference',
  templateUrl: './ppreference.component.html',
  styleUrls: ['./ppreference.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', useAnimation(fadeInAnimation)),
      transition('* => void', useAnimation(fadeOutAnimation))
    ])
  ]
})
export class PpreferenceComponent implements OnInit {
  private readonly library = LibImages;
  public readonly cols = 8; // TODO: manage cols number depending on screen size
  private section: { name: string, file: string }[] = [];
  public shownSection = [];
  public title = '';
  public filter = '';

  constructor(
    public rc: CustomOverlayRef,
    @Inject(CUSTOM_OVERLAY_DATA) public data: any,
    public dialogService: DialogService,
    public stateService: StateService
  ) { }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Esc' || event.key === 'Escape') {
      if (this.stateService.app.dialog.getLastOverlayName() === 'reference') {
        this.stateService.app.dialog.popOverlayName();
        this.rc.close();
      }
    }
  }

  ngOnInit() {
    if (this.data.lib) {
      try {
        this.section = this.library[this.data.lib];
        this.section = this.section.map(sect => ({ name: sect.name, file: `assets/images/${this.data.lib}/${sect.file}` }));
        this.title = `${this.data.lib} Diseases Reference`;
        this.filterImages();
      } catch (e) {
        console.error('Error @ ppreference.component -> init', e);
      }

    }
  }

  filterImages() {
    this.shownSection = this.section.filter(section => section.name.includes(this.filter.toLowerCase()));
  }

  showImage(index: number) {
    const mappedForViewmedia = this.section.map(img => ({ name: img.name, url: img.file }));
    this.dialogService.custom(PpviewmediaComponent, { media: mappedForViewmedia, index: index }, null, 'viewmedia');
  }

  clearFilterField(): void {
    this.filter = '';
    this.filterImages();
  }

  close(event?, ref?) {
    if (event && ref && event.target === ref) {
      this.stateService.app.dialog.popOverlayName();
      this.rc.close();
    }
  }
}
