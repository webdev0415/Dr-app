import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { StorageService } from './storage.service';
import { StateService } from './state.service';
import { UserService } from '../user/user.service';

@Injectable()
export class IWCService implements OnDestroy {
  private readonly AnyValue = Math.random();
  private eventListeners: Subscription[] = [];
  private eventObservable: Observable<StorageEvent>;
  private clearerInterval;

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private stateService: StateService) {
    this.eventObservable = fromEvent<StorageEvent>(window, 'storage');

    this.rmls('tokenTransferEmitter');
    this.rmls('logoutEmitter');
    this.mkls('tokenTransferEmitter', String(new Date()));

    this.registerHandler(this.clear_cache_event.bind(this));
    this.registerHandler(this.token_transfer_event.bind(this));
    this.registerHandler(this.logout_event.bind(this));
  }


  private handleEvent(eventObj: StorageEvent, handlerKey, handlerOld, handlerNew, callback) {
    let oldValObject, newValObject;
    try {
      oldValObject = JSON.parse(eventObj.oldValue);
      newValObject = JSON.parse(eventObj.newValue);
    } catch (e) {
      console.error('Cannot parse event value');
      oldValObject = null;
      newValObject = null;
    }

    if (eventObj !== null) {
      const oldKeyOk = (oldValObject && (oldValObject[handlerKey] === handlerOld || handlerOld !== undefined));
      const newKeyOk = (newValObject && (newValObject[handlerKey] === handlerNew || handlerNew !== undefined));
      const keyOk = newValObject && handlerKey in newValObject;

      if (keyOk && oldKeyOk && newKeyOk) {
        callback(eventObj);
        return;
      }
    }
  }

  private registerHandler(callback) {
    this.eventListeners.push(this.eventObservable.subscribe(event => { callback(event); }));
  }

  mkss(key: string, value?: string) { this.storageService.session.setItem(key, value ? value : ''); }
  rmss(key: string) { this.storageService.session.removeItem(key); }

  mkls(key: string, value?: string) { this.storageService.local.setItem(key, value ? value : ''); }
  rmls(key: string) { this.storageService.local.removeItem(key); }

  readss(key: string): string { return this.storageService.session.getItem(key, true); }
  readls(key: string): string { return this.storageService.local.getItem(key, true); }

  ngOnDestroy() {
    this.eventListeners.forEach(sub => sub.unsubscribe());
  }

  private clear_cache_event(event: StorageEvent) {
    const isValuesAreEmpty = event.oldValue === null && event.newValue === null;
    const isItEmptyEvent = event.key === null && event.url === '';
    if (isValuesAreEmpty && isItEmptyEvent && this.userService.isAuthenticated) {
      this.userService.logout(['Cache was changed', 'You are logged out because browser cache was cleared for this domain', 2], true);
    }
  }

  private token_transfer_event(event: StorageEvent) {
    this.handleEvent(event, 'tokenTransferEmitter', null, this.AnyValue, (evt) => {
      const token = this.readss('token');
      const server = this.readss('server');
      const role = this.readss('role');
      if (token) {
        this.mkls('tokenData', token);
        this.mkls('serverData', server);
        this.mkls('roleData', role);
        this.clearerInterval = setInterval(() => {
          this.rmls('tokenData');
          this.rmls('serverData');
          this.rmls('roleData');
        }, 1000);
      }
      this.rmls('tokenTransferEmitter');
    });

    this.handleEvent(event, 'tokenData' || 'serverData' || 'roleData', null, this.AnyValue, (evt) => {
      if (!this.readss('token')) {
        this.mkss('token', this.readls('tokenData'));
        this.mkss('server', this.readls('serverData'));
        this.mkss('role', this.readls('roleData'));
        this.rmls('tokenData');
        this.rmls('serverData');
        this.rmls('roleData');
        clearInterval(this.clearerInterval);
      }
    });
  }

  private logout_event(event: StorageEvent) {
    this.handleEvent(event, 'logoutEmitter', null, this.AnyValue, (evt) => {
      this.userService.logout(['Session changed', 'You have been logged out in a different window', 2]);
      this.rmls('logoutEmitter');
    });
  }
}
