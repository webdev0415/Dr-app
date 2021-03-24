import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { forkJoin, of, of as ObservableOf } from 'rxjs';

import { StateService } from './state.service';
import { NetworkService, RequestOptions } from './network';

import { Configuration } from 'app.config';
import { catchError, switchMap } from 'rxjs/operators';
import { CancerListItem, SymptomDictionaries, SymptomGroup } from '../common/interfaces/symptoms.interface';
import { IllnessSourceInfo } from '../common/interfaces/illness-source-info.interface';
import { NodeSearchTypeEnum } from '../common/enums/node-search-type.enum';

@Injectable()
export class ServicedataService extends NetworkService {

  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler
  ) {
    super(http, cfg, stateService, errorHandler);
  }

  getTreatmentTypesData() {
    return this.show('2070Services/treatment', null, 'types', {urlType: 'service', endSlash: false});
  }


  getSourceInfoData(icdCodeArray: string[], state: string = 'APPROVED'): Observable<IllnessSourceInfo[]> {
    if (!icdCodeArray.length) return of([]);
    let params: HttpParams = new HttpParams().append('state', state);
    icdCodeArray.forEach(code => { params = params.append('icd10Code', code); });
    return this.search(`2070Services/mica/api/sourceinfo/`, params, {urlType: 'service', endSlash: false, addWorker: true}, true).pipe(catchError(() => []));
  }

  getSymptomGroups(requestOptions: RequestOptions): Observable<{symptomGroups: SymptomGroup[]}> {
    return this.show<{symptomGroups: SymptomGroup[]}>('2070Services/template', null, 'symptomgroups', requestOptions).pipe(switchMap(
      result => {
        if (result.symptomGroups) {
          return of(result);
        }
        return this.getSymptomGroups(requestOptions);
      }
    ));
  }

  getSymptoms(): Observable<[{symptomGroups: SymptomGroup[]}, {cancerList: CancerListItem[]}]> {
    const requestOptions: RequestOptions = {urlType: 'service', endSlash: false};
    return forkJoin(
      this.getSymptomGroups(requestOptions),
      this.show<{cancerList: CancerListItem[]}>('RESTfulIllness', null, 'cancerlist', requestOptions)
    );
  }

  getBodyPartsData() {
    return this.show('2070Services/es/generic/bodyparts', null, 'all', {urlType: 'service', endSlash: false});
  }

  nodeSearch(value, type: NodeSearchTypeEnum, addWorker = false, isArray?: boolean): Observable<{nodes: {name: string; icd10Code: string}[]}> {
    const buildURLQuery = array => array.map(item => `icd10code=${item}`).join('&');

    let icd10codes;
    if (isArray) {
      icd10codes = buildURLQuery(value);
    }

    const params = new HttpParams().append(type, isArray ? icd10codes : value);

    return this.search<{nodes: {name: string; icd10Code: string}[]}>(`v2/icd10_search`, params, {
      urlType: 'api',
      endSlash: false,
      addWorker: addWorker
    }).pipe(catchError(err => ObservableOf({nodes: []})));
  }
}
