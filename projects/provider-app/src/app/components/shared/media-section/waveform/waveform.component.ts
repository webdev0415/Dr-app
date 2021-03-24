import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

import * as WaveSurfer from 'wavesurfer.js';
import { isEmpty } from 'ramda';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNil } from 'ramda';

import { DialogService } from 'services/app/dialog.service';
import { PpviewmediaComponent } from 'components/shared/popups/ppviewmedia/ppviewmedia.component';
import { LibAudio } from 'static/body.constants';
import { Utils } from 'utils/utils';
import { MeasurementsMediaService } from 'services/measurements-media.service';

@Component({
  selector: 'pa-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.scss']
})
export class WaveformComponent implements OnChanges, AfterViewInit, OnDestroy, OnInit {
  @Input() bodyPart;
  @Input() selectedLocation: any;
  @Input() audit;
  @Input() index = 0;
  @Input() locations;
  @Input() lib = false;
  @Output() change = new EventEmitter<string | number>();

  public fileURL: string;
  public name: string;
  public nameNext: string;

  public loading = true;
  public audio;
  public libAudio = LibAudio;

  public waveSurferInstance = null;
  public volume = 1;
  public prevVolume = 1;
  public time = '00:00';
  public duration = '00:00';
  public playing = false;
  public absFrequencyType = ['Raw'];
  public lungFrequencyType = ['Raw', 'Low'];
  public frequencyType = ['Raw', 'Low', 'Medium', 'High'];
  public frequency = this.frequencyType[0];

  private bodyPartMapping = {
    Heart: 'heart',
    Respiratory: 'lungs',
    GI: 'abdomen'
  };

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialogService: DialogService,
    public measurementsMediaService: MeasurementsMediaService
  ) { }

  ngOnInit(): void {
    this.setLocationName();
    if (!this.lib) {
      this.measurementsMediaService.mediaArrayCollection.pipe(takeUntil(this.destroy$)).subscribe(media => {
        if (isEmpty(media[this.bodyPartMapping[this.bodyPart]][this.selectedLocation].data[this.frequency.toLowerCase()])) {
          this.fileURL = null;
          return;
        }
        this.fileURL = media[this.bodyPartMapping[this.bodyPart]][this.selectedLocation].data[this.frequency.toLowerCase()].value.fileBlob || null;
        if (this.fileURL) this.loading = false;
        this.audio = media;
      });
    }
  }

  gageVolume(volume) {
    if (volume === 0) {
      return 'volume_off';
    } else if (volume < 0.3) {
      return 'volume_mute';
    } else if (volume < 0.7) {
      return 'volume_down';
    } else {
      return 'volume_up';
    }
  }

  buildWaveform(bodyPart, audio, autoplay?: boolean) {
    if (this.waveSurferInstance) {
      this.waveSurferInstance.destroy();
      this.playing = false;
    }
    this.waveSurferInstance = WaveSurfer.create({
      container: '#waveform' + bodyPart + (this.lib ? 'lib' : ''),
      waveColor: '#AFAFAF',
      progressColor: '#AFAFAF',
      cursorColor: '#FFD633',
      cursorWidth: 2,
      height: 100,
      normalize: true,
      fillParent: true
    });

    const missing = 'assets/audio/' + bodyPart.toLowerCase() + '/missing.flac';
    const audioURL = audio ? audio['changingThisBreaksApplicationSecurity'] || audio : missing;

    this.waveSurferInstance.on('error', (error) => {
      console.log('Cannot play provided file!', error);
      this.waveSurferInstance.load(missing);
    });

    this.waveSurferInstance.load(audioURL);

    if (this.volume) {
      this.waveSurferInstance.setVolume(this.volume);
    } else {
      this.waveSurferInstance.setMute(true);
    }

    this.waveSurferInstance.on('ready', () => {
      this.duration = this.formatTime(this.waveSurferInstance.getDuration());
      this.playing = false;
      if (audio && autoplay) this.waveSurferPlay();
    });
    this.waveSurferInstance.on('audioprocess', () => {
      this.time = this.formatTime(this.waveSurferInstance.getCurrentTime());
      this.changeDetector.detectChanges();
    });
    this.waveSurferInstance.on('finish', () => {
      this.playing = false;
      this.changeDetector.detectChanges();
    });
    this.waveSurferInstance.on('play', () => {
      this.playing = true;
    });
    this.waveSurferInstance.on('pause', () => {
      this.playing = false;
    });
  }

  waveSurferPlay() {
    this.waveSurferInstance.playPause();
  }

  formatTime (time) {
    return [
      Math.floor((time % 3600) / 60),
      ('00' + Math.floor(time % 60)).slice(-2)
    ].join(':');
  }

  changeVolume(event) {
    const volume = event.value;
    this.waveSurferInstance.setVolume(volume);
    this.volume = volume;
  }

  mute() {
    if (!this.waveSurferInstance) return;
    this.waveSurferInstance.setMute(!this.waveSurferInstance.getMute());
    if (this.waveSurferInstance.getMute()) {
      this.prevVolume = this.volume;
      this.volume = 0;
    } else {
      this.volume = this.prevVolume;
    }
  }

  selectLocation(location, index) {
    this.playing = false;
    this.index = index;
    this.change.emit(location);
    this.change.emit(index);
    this.setLocationName(location);
    this.selectTrack(this.locations[this.bodyPart][this.index]);
  }

  selectFrequency(index: number) {
    this.frequency = this.bodyPart === 'Heart' ? this.frequencyType[index] :
                                                this.bodyPart === 'Respiratory' ? this.lungFrequencyType[index] : this.absFrequencyType[index];
    this.playing = false;
    this.selectTrack(this.locations[this.bodyPart][this.index]);
  }

  changeTrack(state: 'prev'|'next') {
    this.playing = false;
    this.index = state === 'prev' ? this.prevTrack : this.nextTrack;
    this.change.emit(this.locations[this.bodyPart][this.index]);
    this.change.emit(this.index);
    this.setLocationName();
    this.selectTrack(this.locations[this.bodyPart][this.index]);
  }

  public get nextTrack(): number {
    const isCurrentElementLast = this.index === (this.locations[this.bodyPart].length - 1);
    return isCurrentElementLast ? 0 : (this.index + 1);
  }

  public get prevTrack(): number {
    return this.index - 1;
  }

  selectTrack(location, autoplay?: boolean) {
    if (this.lib) this.setLibAudio();
    else {
      if (isEmpty(this.audio[this.bodyPartMapping[this.bodyPart]][this.selectedLocation].data[this.frequency.toLowerCase()])) {
        this.fileURL = null;
        this.buildWaveform(this.bodyPart, this.fileURL);
        return;
      }
      this.selectedLocation = location.toLowerCase().replace(/(\/|\s)/g, '_');
      this.fileURL = this.audio[this.bodyPartMapping[this.bodyPart]][this.selectedLocation].data[this.frequency.toLowerCase()].value.fileBlob || null;
      this.buildWaveform(this.bodyPart, this.fileURL, autoplay);
    }
  }

  setLocationName(name?: string, index?: number) {
    if (!isNil(index)) this.index = index;
    if (this.lib) {
      this.name = this.locations[this.bodyPart][this.index].name;
      this.nameNext = this.locations[this.bodyPart][this.nextTrack] ? this.locations[this.bodyPart][this.nextTrack].name : null;
    } else {
      this.name = name || this.locations[this.bodyPart][this.index];
      this.nameNext = this.locations[this.bodyPart][this.nextTrack];
    }
  }

  setLibAudio() {
    const file = 'assets/audio/' + this.bodyPart.toLowerCase() + '/' + this.libAudio[this.bodyPart][this.index].file;
    this.setLocationName();
    this.buildWaveform(this.bodyPart, file);
    this.change.emit(this.index);
  }

  close() {
    this.waveSurferInstance.stop();
    this.change.emit('close');
  }

  getName(text) {
    return /^\w+/.exec(text)[0];
  }

  getLocations() {
    return this.locations && this.locations[this.bodyPart] ? this.locations[this.bodyPart] : [];
  }

  getFrequencies() {
    return this.bodyPart === 'Heart' ? this.frequencyType :
              this.bodyPart === 'Respiratory' ? this.lungFrequencyType : this.absFrequencyType;
  }

  ngAfterViewInit() {
    if (this.bodyPart) this.buildWaveform(this.bodyPart, this.fileURL);
    if (this.lib) this.setLibAudio();
    this.changeDetector.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.lib && !changes.index.firstChange) this.setLibAudio();
  }

  ngOnDestroy() {
    this.waveSurferInstance.stop();
    this.destroy$.next(true);
    this.destroy$.complete();
    this.changeDetector.detach();
  }

  @HostListener('window:resize', ['$event'])
  @Utils.debounce()
  onResize() {
    if (this.bodyPart) this.buildWaveform(this.bodyPart, this.fileURL);
  }

  viewAudit() {
    this.dialogService.custom(PpviewmediaComponent, {
      media: [{ name: this.name, url: this.audit }]
    }, null, 'viewmedia');
  }

  public get namePretty(): string {
    return this.name ? this.name.replace('_', ' ') : '';
  }

}
