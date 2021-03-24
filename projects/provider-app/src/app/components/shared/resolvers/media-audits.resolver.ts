import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { first, map } from 'rxjs/operators';
import { forkJoin, Observable} from 'rxjs';

import { Audit} from 'common/models/data.model';
import { MediaModel } from 'common/models/media.model';
import { MeasurementsMediaService } from 'services/measurements-media.service';
import { Measurement } from 'common/models/data.model';

@Injectable()
export class MediaAuditsResolver implements Resolve<Observable<MediaModel>> {
  constructor(private measurementsMediaService: MeasurementsMediaService) {}

  resolve(): Observable<MediaModel> {
    return forkJoin([
        this.measurementsMediaService.getAudit().pipe(
          first(audits => !!audits && Boolean(audits.results)),
          map(audits => this.measurementsMediaService.getAuditImages(audits.results))
        ),
        this.measurementsMediaService.getMeasurements().pipe(first(patient => !!patient))
      ]
    ).pipe(map(([audits, measurements]: [Audit[], Measurement[]]) => {
      const media = this.measurementsMediaService.getMedia(measurements);
      return new MediaModel(media.mediaArray, audits, media.specificMedia);
    }));
  }

}
