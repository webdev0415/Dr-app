import {
  HttpEvent, HttpProgressEvent, HttpDownloadProgressEvent,
  HttpSentEvent, HttpResponse, HttpHeaderResponse, HttpUserEvent,
  HttpErrorResponse, HttpResponseBase, HttpEventType
} from '@angular/common/http';

// reexport because of importing errors
export interface HttpUploadProgressEvent extends HttpProgressEvent {
  type: HttpEventType.UploadProgress;
}

/**
 * If network event is HttpSentEvent
 * @param event HttpEvent
 */
export const isSentEvent = (event: HttpEvent<any>): event is HttpSentEvent => {
  return event.type === 0;
};

/**
 * If network event is HttpUploadProgressEvent
 * @param event HttpEvent
 */
export const isUploadProgressEvent = (event: HttpEvent<any>): event is HttpUploadProgressEvent => {
  return ((event.type === 1) && ('loaded' in event && typeof event['loaded'] === 'number'))
    && (('total' in event && typeof event['total'] === 'number') || true);
};

/**
 * If network event is HttpDownloadProgressEvent
 * @param event HttpEvent
 */
export const isDownloadProgressEvent = (event: HttpEvent<any>): event is HttpDownloadProgressEvent => {
  return ((event.type === 3) && ('loaded' in event && typeof event['loaded'] === 'number'))
    && (('total' in event && typeof event['total'] === 'number') ||
      ('partialText' in event && typeof event['partialText'] === 'string') || true);
};

/**
 * If network event is HttpProgressEvent
 * @param event HttpEvent
 */
export const isProgressEvent = (event: HttpEvent<any>): event is HttpProgressEvent => {
  return isUploadProgressEvent(event) || isDownloadProgressEvent(event);
};

/**
 * If network event is HttpResponse
 * @param event HttpEvent
 */
export const isResponseEvent = <T>(event: HttpEvent<T>): event is HttpResponse<T> => {
  return (event.type === 4) && (event instanceof HttpResponse);
};

/**
 * If network event is HttpHeaderResponse
 * @param event HttpEvent
 */
export const isResponseHeaderEvent = (event: HttpEvent<any>): event is HttpHeaderResponse => {
  return (event.type === 2) && (event instanceof HttpHeaderResponse);
};

/**
 * If network event is HttpUserEvent
 * @param event HttpEvent
 */
export const isUserEvent = <T>(event: HttpEvent<T>): event is HttpUserEvent<T> => {
  return (event.type === 5);
};

/**
 * If wrong response (a backend error code or a frontend error)
 * @param {HttpHeaderResponse | HttpResponse} event HttpHeaderResponse | HttpResponse
 */
export const isResponseError = (event: any): event is HttpErrorResponse => {
  return event instanceof HttpErrorResponse;
};

/**
 * If network error is NOT a frontend fault
 * @param {HttpErrorResponse} event HttpErrorResponse
 */
export const isBackendFault = (event: HttpErrorResponse): boolean => {
  return !(event.error instanceof ErrorEvent);
};
