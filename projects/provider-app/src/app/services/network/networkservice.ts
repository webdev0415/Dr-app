import { ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, of as ObservableOf } from 'rxjs';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/publishLast';

import { Configuration } from 'app.config';
import { StateService } from 'services/state.service';
import { EndpointsType, RequestMethod, RequestOptions, RequestParams, UrlType } from './types';
import { isResponseEvent } from './httpEventsTypeGuards';
import { initialState } from '../state';
import { tap } from 'rxjs/operators';

class NetworkError extends Error {
  name = 'Network Error';

  constructor(m: string) {
    super(m);
  }
}


/**
 * Network service
 * @constructor
 * Sets current API and Service URLs from the state service.
 */
export class NetworkService {

  private _apiUrl = null;
  private _serviceUrl = null;
  private _utilityUrl = null;

  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler,
  ) {
    this.setUrls();
  }

  /**
   * Set all endpoints urls
   */
  private setUrls(): void {
    this.apiUrl = initialState.URLs.apiUrl;
    this.serviceUrl = initialState.URLs.serviceUrl;
    this.utilityUrl = initialState.URLs.utilityUrl;
  }

  /**
   * Optional response handler
   *
   * ```typescript
   Handler?<T>(url: string, response: HttpEvent<any>, caught: Observable<T>): any```
   * @param {string} url Handled URL
   * @param {HttpEvent<any>} response
   * @param {Observable} caught the source observable, in case you'd like to "retry" that observable by returning it again
   * @see catchError
   */
  protected Handler?<T>(url: string, response: HttpEvent<any>, caught: Observable<T>): any;


  /**
   * Check not empty or not null url
   * @param {string} url
   * @return boolean
   */
  private checkUrl(url: string | null): boolean {
    return url !== null && url !== '';
  }

  /**
   * Check and set URL for type
   * @param {string | null} url
   * @param {EndpointsType} type
   */
  private setUrl(url: string | null, type: EndpointsType): void {
    if (!this.checkUrl(url)) return;
    const normUrl = url.toLowerCase().trim();
    switch (type) {
      case 'api':
        this._apiUrl = normUrl;
        break;
      case 'service':
        this._serviceUrl = normUrl;
        break;
      case 'utility':
        this._utilityUrl = normUrl;
        break;
    }
  }

  /**
   * Check and get/set current API URL.
   * No need to use instead of using local mock api.
  */
  protected set apiUrl(url: string | null) {
    this.setUrl(url, 'api');
  }

  /**
   * @returns {string} API URL
   */
  protected get apiUrl(): string {
    return this._apiUrl;
  }

  /**
   * Check and get/set current API URL.
   * No need to use instead of using local mock api.
   * @param url
   */
  protected set serviceUrl(url: string | null) {
    this.setUrl(url, 'service');
  }

  /**
   * Check and get/set current utility URL.
   * @param url
   */
  protected set utilityUrl(url: string | null) {
    this.setUrl(url, 'utility');
  }

  /**
   * Check is set endpoints urls
   */
  protected get isSetUrls(): boolean {
    return this.checkUrl(this.apiUrl) && this.checkUrl(this.serviceUrl) && this.checkUrl(this.utilityUrl);
  }

  /**
   * Build url with endpoint
   * @param {string} url
   * @param {UrlType} urlType
   * @returns {string}
   */
  private buildUrl(url: string, urlType: UrlType): string {
    switch (urlType) {
      case 'api': return `${this._apiUrl}/api/${url}`;
      case 'service': return `${this._serviceUrl}/${url}`;
      case 'utility': return `${this._utilityUrl}/${url}`;
      case 'raw': default: return url;
    }
  }

  private raw<T>(
    method: RequestMethod,
    url: string,
    body: any = null,
    params: RequestParams = null,
    options: RequestOptions = {},
    header?: HttpHeaders
  ): Observable<T> {
    try {

      const isWorker = options.addWorker === undefined ? true : Boolean(options.addWorker);
      if (isWorker) this.stateService.app.workers.add();

      const headers = header || new HttpHeaders();
      const resultUrl = this.buildUrl(url, options.urlType);

      const requestOptions = {
        headers: headers,
        params: params,
        body: body,
        responseType: options.answerType || 'json',
        observe: 'response' as 'response',
        reportProgress: false
      };

      return this.http.request(method, resultUrl, requestOptions)
        .retry(this.cfg.NetworkConfiguration.retriesOnFail)
        .pipe(
          tap(response => this.hideLoader<T>(response, isWorker))
        )
        .shareReplay()
        .map(response => this.onSuccess<T>(response, resultUrl, isWorker));

    } catch (requestError) {
      const networkError = new NetworkError(requestError.message);
      this.errorHandler.handleError(networkError);
      this.stateService.app.workers.erase();

      return ObservableOf(null);
    }
  }

  /**
   * Hide loader once the request completes.
   * @param {HttpResponse} response HTTP Response (https://angular.io/api/common/http/HttpEvent)
   * @param {boolean} isWorker
   */
  private hideLoader<T>(response: HttpEvent<T>, isWorker: boolean): void {
    if (response.type === HttpEventType.Response && isWorker) {
      this.stateService.app.workers.rm();
    }
  }

  /**
   * Handle a successful (depending on a http code) response.
   * @param {HttpResponse} response HTTP Response (https://angular.io/api/common/http/HttpEvent)
   * @param {string} url
   * @param {boolean} isWorker
   */
  private onSuccess<T>(response: HttpEvent<T>, url: string, isWorker: boolean): T {
    if (isResponseEvent(response)) return response.body;
  }

  /**
   *
   * @param resource resource (ex: patients)
   * @param id id (ex: 12345)
   * @param action action (ex: assign)
   * @param endSlash url ending with slash
   * @param splitAction replace slashes in action string or not
   */
  private buildUrlFromResIdAction(resource: string, id?: string, action?: string, endSlash = true, splitAction = true): string {
    resource = resource.replace(/(\s+)|(\/+$)/g, '');
    const urlstr = [resource];

    if (id) {
      id = id.replace(/(\s+)|(\/+)/g, '');
      urlstr.push(id);
    }

    if (action) {
      action = splitAction ? action.replace(/(\/+)/g, '') : action;
      urlstr.push(action);
    }
    return encodeURI(urlstr.join('/').replace(/\/*$/, endSlash ? '/' : ''));
  }


  /**
   * Get single resource
   */
  protected show<T>(resource: string, id?: string, action?: string, options?: RequestOptions): Observable<T> {
    const endSlash = options && options.endSlash;
    const link = this.buildUrlFromResIdAction(resource, id, action, endSlash);
    return this.raw<T>('GET', link, null, null, options);
  }


  /**
   * 'Show' alias for endpoints with no response body
   */
  protected touch(resource: string, id?: string, action?: string, options?: RequestOptions): Observable<any> {
    return this.show(resource, id, action, options);
  }


  /**
   * Perform a search operation with url search parameters
   */
  protected search<T>(resource: string, query: HttpParams | { [param: string]: string | string[]; },
    options?: RequestOptions, caseSensitive = false): Observable<T> {
    const link = caseSensitive ? resource : resource.toLowerCase().replace(/\s+/g, '');
    return this.raw('GET', link, null, query, options);
  }


  /**
   * Perform a create/update operation basing on predicate which informs about
   * is any data already available
   */
  protected send<T>(resource: string, payload: any, updateData?: boolean | ((...any) => boolean),
    id?: string, action?: string, options?: RequestOptions, headers?: HttpHeaders, params: HttpParams = null): Observable<T> {
    let method = 'POST';
    if (updateData && id && !options.forcePut) method = 'PATCH';
    else if (updateData) method = 'PUT';
    const endSlash = options && options.endSlash;
    const splitAction = options && options.splitAction;
    const link = this.buildUrlFromResIdAction(resource, id, action, endSlash, splitAction);
    return this.raw(method as RequestMethod, link, payload, params, options, headers);
  }

  /**
   * Perform a delete operation
   */
  protected delete(resource: string, payload: any, id?: string, action?: string, options?: RequestOptions): Observable<any> {
    const endSlash = options && options.endSlash;
    const splitAction = options && options.splitAction;
    const link = this.buildUrlFromResIdAction(resource, id, action, endSlash, splitAction);
    return this.raw('DELETE', link, payload, null, options);
  }

  /**
   * Test HTTP Response
   * @param httpResponse response code
   * @summary http://httpstat.us/
   */
  public test(httpResponse: number | string) {
    const tempSub = this.show('http://httpstat.us', String(httpResponse), null, { urlType: 'raw' })
      .subscribe(result => {
        if (result && tempSub) tempSub.unsubscribe();
      });
  }

}
