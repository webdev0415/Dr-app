import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { from, Observable, of, zip } from 'rxjs';
import { Measurement } from '../../../../pharmacist/src/lib/side-models/common/interfaces/measurement/measurement.interface';

import { Audit} from '../common/models/data.model';
import { NotificationsService } from '../components/notifications/notifications.service';

@Injectable()
export class LazyService {

  private blobUrls = [];

  constructor(private DS: DomSanitizer, private notificationsService: NotificationsService) { }

  public lazyLoad(sourceLink: string): Promise<SafeResourceUrl> {
    let warnShown = false;
    if (!sourceLink || !sourceLink.length) {
      return Promise.resolve(this.DS.bypassSecurityTrustResourceUrl(''));
    }

    return fetch(sourceLink)
      .then(rawResponse => rawResponse.blob())
      .then(blobResponse => {
        const url = URL.createObjectURL(blobResponse);
        this.blobUrls.push(url);
        return this.DS.bypassSecurityTrustResourceUrl(url);
      })
      .catch(fault => {
        if (!warnShown) {
          this.notificationsService.error('Unable to load media files! Please try again later or contact the system administrator.', 'Connection error.');
          console.warn('Unable to fetch some resources. Look @ network tab in developer tools');
          warnShown = true;
        }
        return this.DS.bypassSecurityTrustResourceUrl('');
      });
  }

  private lazyLoadBase64(sourceLink: string): Promise<string | ArrayBuffer> {
    if (!sourceLink) return Promise.reject('');
    return new Promise((resolve, reject) => {
      fetch(sourceLink)
        .then(rawResponse => rawResponse.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onerror = () => reject('');
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(blob);
        });
    });
  }

  public lazyLoadMeasurements(measurements: Measurement[]): Observable<Measurement[]> {
    return zip(...measurements.map(measure => {
      const haveValue = 'value' in measure;
      const valueHaveFile = 'file' in measure['value'];
      const fileIsClassificationMedia = measure['value']['file'].includes('classification-media');
      if (haveValue && valueHaveFile && fileIsClassificationMedia) {
        const measureLink = measure['value']['file'];
        return from(this.lazyLoad(measureLink).then(blobbed => {
          // @ts-ignore
          measure.value = {...measure.value, fileBlob: blobbed};
          return measure;
        }));
      }
      return of(measure);
    }));
  }

  public lazyLoadAudits(audits: Audit[]): Observable<Audit[]> {
    return zip(...audits.map(audit => {
      if (audit.s3) {
        return from(
          this.lazyLoad(audit.s3).then((blobResult: SafeResourceUrl) => ({ ...audit, s3Blob: blobResult }))
        );
      }
      return of(audit);
    }));
  }

  public lazyLoadIdCards(cards: any) {
    const blobs: {card: string, side: string, file: any}[] = [];
    const data: {link: string, card: string, side: string}[] = [];
    Object.keys(cards).forEach(key => {
      const card = cards[key];
      if (card) {
        card.images.forEach(img => {
          data.push({ link: img.s3, card: key, side: img.side });
        });
      }
    });
    const promises = data.map(item => {
      return this.lazyLoad(item.link).then(blobbed => blobs.push({ card: item.card, side: item.side, file: blobbed }));
    });
    return Promise.all(promises).then(() => {
      return blobs;
    });
  }

  public lazyLoadImageBase64(link: string, type: string): Observable<string> {
    return from(
      this.lazyLoadBase64(link)
        .then((base64: string) => {
          return base64.replace('data:binary/octet-stream', `data:${type}`);
        })
        .catch(() => null)
    );
  }

  public revokeBlobURLs() {
    this.blobUrls.forEach(URL.revokeObjectURL);
    this.blobUrls = [];
  }
}
