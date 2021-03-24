import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';
import { RemoteLogEvent } from 'common/models/data.model';
import { StateService } from 'services/state.service';
import { DateTime } from 'utils/dateTime';
import { NetworkService } from '../services/network';
import { Configuration } from 'app.config';
import { notLoggedUrls } from 'static/network';
import { UserService } from 'user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ReqresLoggerInterceptor extends NetworkService implements HttpInterceptor {
  private logSubscription: Subscription;
  constructor(
    protected http: HttpClient,
    protected cfg: Configuration,
    protected stateService: StateService,
    protected errorHandler: ErrorHandler,
    protected userService: UserService
  ) {
    super(http, cfg, stateService, errorHandler);
  }

  private sendRemoteRequest(req: HttpRequest<any>, event: HttpEvent<any> | any, error: boolean, startedAt: any, now: any) {
    const remoteMessage: RemoteLogEvent = {
      event_type: 'INFO',
      message: `(${event['status']}) ${req.method} ${req.urlWithParams} [${startedAt} -> ${now}]`
    };
    if (error) {
      remoteMessage.event_type = 'ERROR';
      remoteMessage.message = `(${event['status']}) ${req.method} ${req.urlWithParams} : ${event['statusText']} [${startedAt} -> ${now}]`;
    }
    this.logSubscription = this.send('dr_app', remoteMessage, false, null, 'log', {
      urlType: 'api',
      endSlash: false
    }).subscribe((body: any) => {
      if (!body) return;
      if (body.type === 4 && this.logSubscription) {
        this.logSubscription.unsubscribe();
      }
    });
  }

  private logLocal(req: HttpRequest<any>, event: HttpEvent<any> | any, error: boolean, startedAt: Date, now: Date) {
    const reqTimeLen = DateTime.diff(startedAt, now);
    let reqReadable = '<empty request>';
    let respReadable = '<empty response>';
    let errorReadable = '';

    const credentialsUrls = [
      'auth/user_login'
    ];

    const notesUrls = [
      'api/temp-notes',
      'api/doctor-notes'
    ];


    const credentials = credentialsUrls.some(val => req.urlWithParams.includes(val));
    const isNotes = notesUrls.some(val => req.urlWithParams.includes(val));

    if (req.body) {
      try {
        if (typeof (req.body) === 'string') reqReadable = JSON.stringify(JSON.parse(req.body), null, 2);
        else if (isNotes) {
          const notes = JSON.parse(req.body.notes);
          const temp = Object.assign({}, req.body, { notes: notes });
          reqReadable = JSON.stringify(temp, null, 2);
        } else reqReadable = JSON.stringify(req.body, null, 2);
      } catch (err) {
        console.error('Error parsing request:', err);
      }
    }

    if (event.body) {
      try {
        if (typeof (req.body) === 'string') respReadable = JSON.stringify(JSON.parse(event.body), null, 2);
        else respReadable = JSON.stringify(event.body, null, 2);
      } catch (err) {
        console.error('Error parsing response:', err);
      }
    }

    if (event.error) errorReadable = event.error;


    console.groupCollapsed(`%c[${reqTimeLen.seconds}s ${reqTimeLen.milliseconds}ms] %c${req.method} ${req.urlWithParams} ${event.status} ${event.statusText}`, 'color:#555', error ? 'color:#f00' : 'color:#0f0');
    console.log(`Request timing: ${startedAt.toISOString()} - ${now.toISOString()}`);

    console.groupCollapsed('Data sent:');
    console.log(credentials ? '<hidden>' : reqReadable);
    console.groupEnd();

    if (!errorReadable) {
      console.groupCollapsed('Data received:');
      console.log(respReadable);
      console.groupEnd();
    } else {
      console.groupCollapsed('Request failed:');
      console.log(errorReadable);
      console.groupEnd();
    }

    console.groupCollapsed('Raw data:');
    console.groupCollapsed('Request:');
    console.log(credentials ? Object.assign({}, req, { body: '<hidden>' }) : req);
    console.groupEnd();
    console.groupCollapsed('Response:');
    console.log(event);
    console.groupEnd();
    console.groupEnd();
    console.groupEnd();

  }

  private pass(req, event, error, startedAt) {
    const now = new Date();
    const logged = !notLoggedUrls.some(item => {
      const regExp = new RegExp(item, 'g');
      return req.url.match(regExp);
    });
    if (environment.forProd && this.userService.isAuthenticated && !this.stateService.app.getDebug() && logged) {
      this.sendRemoteRequest(req, event, error, startedAt, now);
    } else if (logged) {
      this.logLocal(req, event, error, startedAt, now);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startedAt = new Date();
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.pass(req, event, false, startedAt);
      }
    }, (error: any) => {
      if (error instanceof HttpErrorResponse) {
        this.pass(req, error, true, startedAt);
      }
    });
  }
}
