import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { MediaType } from 'common/models/data.model';
import { DialogService } from 'services/app/dialog.service';
import { PpviewmediaComponent } from 'components/shared/popups/ppviewmedia/ppviewmedia.component';
import { bodyPartMapping, LibAudio } from 'static/body.constants';
import { WaveformComponent } from '../waveform/waveform.component';

import * as R from 'ramda';

@Component({
  selector: 'pa-audio-section',
  templateUrl: './audio-section.component.html',
  styleUrls: ['./audio-section.component.scss']
})
export class AudioSectionComponent implements OnChanges, OnInit {
  @Input() audio: any = {};
  @Input() audit: any[] = [];
  @Input() type: MediaType;
  @Input() examData: any;
  @ViewChild('audioWaveform') audioWaveform: WaveformComponent;

  public selectedLocation: string;
  public selectedLocationIndex = 0;
  public libIndex = -1;
  public libAudio = LibAudio;
  public locations = R.clone(bodyPartMapping);

  public audioLocations = [];

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
    const mapObjectToArray = R.pipe(
      R.toPairs,
      R.map(R.apply(R.objOf))
    );

    this.audio = R.omit(['audits'], this.audio);
    this.audioLocations = Object.getOwnPropertyNames(this.audio);

    this.selectedLocation = Object.getOwnPropertyNames(mapObjectToArray(this.audio).find((item, index) => {
      const bpData = item[this.audioLocations[index]].data;
      return Object.getOwnPropertyNames(bpData).some(quality => !R.isEmpty(bpData[quality]));
    }))[0];

    this.locations[this.type] = this.locations[this.type].filter((item, index) => {
      return !R.isEmpty(mapObjectToArray(this.audio)[index][this.audioLocations[index]].data.raw);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.audio && !changes.audio.firstChange) this.select(this.selectedLocation, this.selectedLocationIndex, false);
  }

  select(bodySide: string, index: number, autoplay = true) {
    this.selectedLocation = this.formatLocationName(bodySide);
    this.selectedLocationIndex = index;
    this.audioWaveform.setLocationName(bodySide, index);
    this.audioWaveform.selectTrack(this.selectedLocation, autoplay);
  }

  isSelected(bodySide: string) {
    return this.formatLocationName(bodySide) === this.selectedLocation;
  }

  getAudit() {
    const audit = this.audit.find(item => item.label.toLowerCase() === this.selectedLocation);
    return audit ? audit.s3Blob ? audit.s3Blob : audit.s3 : false;
  }

  onChange(location) {
    if (typeof location === 'string')
      if (this.audioLocations.some(loc => loc === this.formatLocationName(location))) {
        this.selectedLocation = this.formatLocationName(location);
      }
    if (typeof location === 'number')
        this.selectedLocationIndex = location;
  }

  onLibChange(event) {
    if (typeof event === 'number') {
      this.libIndex = event;
      return;
    }
    if (event === 'close') {
      this.libIndex = -1;
    }
  }

  viewAudit(imageUrl) {
    this.dialogService.custom(PpviewmediaComponent, {
      media: [{ name: this.type, url: imageUrl }]
    }, null, 'viewmedia');
  }

  typeLower() {
    return this.type ? this.type.toLowerCase() : '';
  }

  formatLocationName(location: string) {
    return location.toLowerCase().replace(/(\/|\s)/g, '_');
  }

}
