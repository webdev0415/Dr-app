import { Injectable } from '@angular/core';

import { clone, pick, isNil, isEmpty } from 'ramda';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { catchError, concatMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';


import { Media, mediaDefault, MediaItem, SpecificMedia, specificMediaAvailable } from 'static/static.vitals';
import { bodyPartSideIndex } from 'static/body.constants';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';
import { Helpers } from '../utils/helpers';
import { KludgesService } from './kludges.service';
import { LazyService } from './lazy.service';
import { Audits } from 'common/models/data.model';


@Injectable({
  providedIn: 'root'
})
export class MeasurementsMediaService {
  public mediaArrayCollection: BehaviorSubject<Media> = new BehaviorSubject<Media>(clone(mediaDefault));
  private Measurements: BehaviorSubject<Measurement[] | null | any> = new BehaviorSubject<Measurement | null | any>(null);
  private Audit: BehaviorSubject<Audits | null | any> = new BehaviorSubject<Audits | null | any>(null);
  private bodyPartSideIndex: { [bodyPart: string]: { [bodySide: string]: number } } = clone(bodyPartSideIndex);

  constructor(private kludgesService: KludgesService, private lazyLoader: LazyService) { }

  private static isMediaFileExist(measurement: Measurement): boolean {
    return Boolean(measurement.value.bodyPart && measurement.value.file && measurement.value.fileName && measurement.value.fileType);
  }

  private static isAudioFile(measurement: Measurement): boolean {
    return measurement.value.fileType.endsWith('wav');
  }

  private static createMediaItem(measurement: Measurement): MediaItem {
    return {
      bodyPart: measurement.value.bodyPart,
      bodySide: measurement.value.bodySide,
      measureType: measurement.measureType,
      data: measurement.value.status === 'AVAILABLE' || measurement.value.status === 'DELETED' ? [measurement] : []
    };
  }

  private isValidAudioMeasurement(measurement: Measurement): boolean {
    const bpMapping = this.bodyPartSideIndex[measurement.value.bodyPart];
    return bpMapping && bpMapping.hasOwnProperty(measurement.value.bodySide);
  }

  getMeasurements(): Observable<Measurement[]> { return this.Measurements.asObservable(); }
  setMeasurements(measurements: Measurement[]): void { this.Measurements.next(measurements); }

  getAudit(): Observable<Audits> { return this.Audit.asObservable(); }

  getAuditList(id: string | number) {
    this.kludgesService.getAuditList(String(id))
      .pipe(
        concatMap(audits => {
          if (!audits || isEmpty(audits.results)) return throwError(new Error('No audits'));
          this.Audit.next(audits);
          return this.lazyLoader.lazyLoadAudits(audits.results);
        }),
        catchError(() => of([]))
      )
      .subscribe(lazyLoadedAudits => this.Audit.next({ results: lazyLoadedAudits }));
  }

  getMediaByType(measurements: Measurement[], type: 'audio'|'images'): MediaItem[] {
    const result: MediaItem[] = [];
    const checkIsAudioOrImageFile = (measurement) => {
      return type === 'audio' ? MeasurementsMediaService.isAudioFile(measurement) && this.isValidAudioMeasurement(measurement) : !MeasurementsMediaService.isAudioFile(measurement);
    };

    measurements
      .filter(measurement => MeasurementsMediaService.isMediaFileExist(measurement) && checkIsAudioOrImageFile(measurement))
      .forEach(measurement => {
        const measurementIndex = result.findIndex((item) => {
          return type === 'audio'
            ? item.bodyPart === measurement.value.bodyPart
            : item.bodyPart === measurement.value.bodyPart && item.bodySide === measurement.value.bodySide;
        });

        if (measurementIndex === -1) {
          result.push(MeasurementsMediaService.createMediaItem(measurement));
          return;
        }

        if (measurement.value.status === 'AVAILABLE') {
          const mediaFileExistIndex = result[measurementIndex].data.findIndex((item) => {
            return item.value.fileName === measurement.value.fileName && item.value.createdAt === measurement.value.createdAt;
          });

          if (mediaFileExistIndex > -1) {
            result[measurementIndex].data[mediaFileExistIndex] = measurement;
          } else {
            result[measurementIndex].data.push(measurement);
          }

        }
      });
    return result;
  }

  getMedia(measurements: Measurement[]): { mediaArray: Media, specificMedia: SpecificMedia } {
    const [images, audio] = [this.getMediaByType(measurements, 'images'), this.getMediaByType(measurements, 'audio')];
    const mappedImages = this.mapImagesToMediaArray(images);
    const mappedAudio = this.mapAudioToMediaArray(audio);

    const mediaArray: Media = {
      ...mappedImages.mediaArray,
      ...mappedAudio.mediaArray
    };

    const specificMedia: SpecificMedia = {
      ...mappedImages.specificMedia,
      ...mappedAudio.specificMedia,
    };

    this.mediaArrayCollection.next(mediaArray);
    return { mediaArray: mediaArray, specificMedia: specificMedia };
  }

  getAuditImages(audits) {
    if (audits) {
      audits.filter(audit => audit['name']).forEach(audit => {
        const position = audit.description ? audit.description.split('|')[2] : null;

        if (position && position.split('-')[0] === 'Position') {
          const positionDesc = isNaN(position.split('-')[1])
            ? position.split('-')[1] === 'undefined'
              ? ''
              : position.split('-')[1]
            : Number(position.split('-')[1]);

          audit.label = positionDesc ? position.split('-')[0] + ' ' + positionDesc : '';
          audit.position = positionDesc ? positionDesc : null;
        } else if (position) {
          audit.label =  position[0].toUpperCase() + position.substring(1).replace(/-/g, ' ');
        } else {
          audit.label = audit.description ? audit.description.split('|')[0] : '';
          const bodySide = audit.description ? audit.description.split('|')[1] : null;

          audit.position = audit.label && bodySide
            ? audit.measurement_type === 'STETHOSCOPE'
              ? bodyPartSideIndex[audit.label][bodySide]
              : bodySide
            : null;
        }
        const group = audits.find((item) => {
          return item.measureType === audit['measurement_type'];
        });

        if (group === undefined) {
          audits.push({
            measureType: audit['measurement_type'],
            show: false,
            auditShow: false,
            libIndex: 0,
            data: audit['status'] === 'AVAILABLE' ? [audit] : []
          });
        } else if (audit['status'] === 'AVAILABLE' && group.data && !group.data.includes(audit)) {
          group.data.push(audit);
        }
      });
    }
    return audits;
  }

  private filterVideo(files: Measurement[]): Measurement[] {
    const webmVideo = /\.webm$/;
    const mp4Video = /\.mp4$/;
    const isiOS = Helpers.isPlatformiOS();
    const mp4Files = files.filter(item => item.value.fileType.match(mp4Video));
    const webmFiles = files.filter(item => item.value.fileType.match(webmVideo));
    return isiOS || isEmpty(webmFiles) ? mp4Files : webmFiles;
  }

  private mapImagesToMediaArray(images: MediaItem[]): {
    mediaArray: Omit<Media, 'heart' | 'lungs' | 'abdomen'>,
    specificMedia: Omit<SpecificMedia, 'heart' | 'lungs' | 'abdomen'>
  } {
    const getBodyPart = (measure: MediaItem): string => {
      return measure.bodySide ? measure.bodySide + '_' + measure.bodyPart : measure.bodyPart;
    };
    const mediaArray: Media = clone(mediaDefault);
    const specificMedia = clone(specificMediaAvailable);

    images.forEach(item => {
      const videoMatch = /^(?!.*[.](webm|mp4)$).*$/;
      switch (getBodyPart(item)) {
        case 'left_ear':
          mediaArray.ears[0].data = item.data.filter(image => image.value.fileType.match(videoMatch));
          mediaArray.ears[0].video = this.filterVideo(item.data);
          specificMedia.ears = true;
          break;
        case 'right_ear':
          mediaArray.ears[1].data = item.data.filter(image => image.value.fileType.match(videoMatch));
          mediaArray.ears[1].video = this.filterVideo(item.data);
          specificMedia.ears = true;
          break;
        case 'left_sinus':
          mediaArray.nose[0].data = item.data.filter(image => image.value.fileType.match(videoMatch));
          mediaArray.nose[0].video = this.filterVideo(item.data);
          specificMedia.nose = true;
          break;
        case 'right_sinus':
          mediaArray.nose[1].data = item.data.filter(image => image.value.fileType.match(videoMatch));
          mediaArray.nose[1].video = this.filterVideo(item.data);
          specificMedia.nose = true;
          break;
        case 'throat':
          mediaArray.mouth[0].data = item.data.filter(image => image.value.fileType.match(videoMatch));
          mediaArray.mouth[0].video = this.filterVideo(item.data);
          specificMedia.mouth = true;
          break;
        case 'skin':
          mediaArray.skin[0].data = item.data.filter(image => image.value.fileType.match(videoMatch));
          mediaArray.skin[0].video = this.filterVideo(item.data);
          specificMedia.skin = true;
          break;
      }
    });
    return {
      mediaArray: pick(['ears', 'mouth', 'nose', 'skin'], mediaArray),
      specificMedia: pick(['ears', 'mouth', 'nose', 'skin'], specificMedia)
    };
  }

  private mapAudioToMediaArray(audio: MediaItem[]): {
    mediaArray: Pick<Media, 'heart' | 'lungs' | 'abdomen'>,
    specificMedia: Pick<SpecificMedia, 'heart' | 'lungs' | 'abdomen'>,
  } {
    const mediaArray: Media = clone(mediaDefault);
    const specificMedia = clone(specificMediaAvailable);
    audio.forEach(item => {
      switch (item.bodyPart) {
        case 'heart':
          if (!isNil(item.data)) {
            item.data.forEach((measurement: Measurement) => {
              if (!measurement.value.bodySide) return;
              if (/.*_250Hz_.*/gi.test(measurement.value.fileName)) {
                mediaArray.heart[measurement.value.bodySide].data.low = measurement;
              } else if (/.*_500Hz_.*/gi.test(measurement.value.fileName)) {
                mediaArray.heart[measurement.value.bodySide].data.medium = measurement;
              } else if (/.*_1000Hz_.*/gi.test(measurement.value.fileName)) {
                mediaArray.heart[measurement.value.bodySide].data.high = measurement;
              } else {
                mediaArray.heart[measurement.value.bodySide].data.raw = measurement;
              }
              specificMedia.heart = true;
            });
          }
          break;
        case 'lung':
          if (!isNil(item.data)) {
            item.data.forEach((measurement: Measurement) => {
              if (!measurement.value.bodySide) return;
              if (/.*_250Hz_.*/gi.test(measurement.value.fileName)) {
                mediaArray.lungs[measurement.value.bodySide].data.low = measurement;
              } else {
                mediaArray.lungs[measurement.value.bodySide].data.raw = measurement;
              }
              specificMedia.lungs = true;
            });
          }
          break;
        case 'abdomen':
          if (!isNil(item.data)) {
            item.data.forEach((measurement: Measurement) => {
              if (!measurement.value.bodySide) return;
              mediaArray.abdomen[measurement.value.bodySide].data.raw = measurement;
              specificMedia.abdomen = true;
            });
          }
          break;
      }
    });
    return {
      mediaArray: pick(['heart', 'abdomen', 'lungs'], mediaArray),
      specificMedia: pick(['heart', 'abdomen', 'lungs'], specificMedia)
    };
  }
}
