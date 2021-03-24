import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StateService } from 'services/state.service';
import { Configuration } from '../app.config';
import { NetworkService } from './network';


@Injectable()
export class OtherdataService extends NetworkService {

  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler,
  ) {
    super(http, cfg, stateService, errorHandler);
  }

  getCompletedPatientNotesPDF(sessionKey: string): Observable<any> {
    return this.show(`visits/${sessionKey}`, null, `notes/`, { urlType: 'api', splitAction: false });
  }

  getTriageValue(symptomId: string, triage: any) {
    const found = triage.find(item => item.symptomId === symptomId);

    if (!found) return '';
    const values = found.values[0];

    if (!values || !values.length) return '';
    const [verb, count, unit] = values;
    let ret = '';

    if (count && Number(count) > 0) {
      ret += ret !== '' ? `, ${count.toString()}` : count.toString();
    }
    if (unit) {
      ret += ret !== '' ? ` ${unit.toString()}` : unit.toString();
    }

    if (ret === '') return '';

    return `: ${ret}`;
  }

}
