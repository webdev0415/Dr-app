import { HttpParams } from '@angular/common/http';

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type EndpointsType = 'api' | 'service' | 'utility';

/**
 * @type UrlType
 * `api` - Use current API endpoints
 * `service` - Use current service endpoints
 * `utility` - Use current utility endpoints
 * `raw` - Use raw url address
 */
export type UrlType = 'raw' | EndpointsType;

export type AnswerType = 'json' | 'arraybuffer' | 'text' | 'blob';

export interface RequestOptions {
  urlType?: UrlType;
  answerType?: AnswerType;
  endSlash?: boolean;
  addWorker?: boolean;
  splitAction?: boolean;
  forcePut?: boolean;
}

interface CustomRequestParams {
  [param: string]: string | string[];
}

export type RequestParams = HttpParams | CustomRequestParams;
