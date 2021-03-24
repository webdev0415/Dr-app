import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class StorageService {
  private readonly app_prefix = environment.storagePrefix;

  constructor() {
    if (!localStorage.getItem(this.app_prefix)) {
      localStorage.setItem(this.app_prefix, '{}');
    }

    if (!sessionStorage.getItem(this.app_prefix)) {
      sessionStorage.setItem(this.app_prefix, '{}');
    }
  }

  private rawOrNot(raw: boolean, data: any) {
    if (data === undefined) {
      return undefined;
    }

    if (raw) {
      return data;
    } else {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Cannot parse string from storage');
        return {};
      }
    }
  }

  private getRawOrString(data: any) {
    switch (typeof (data)) {
      case 'string': case 'number':
        return data;
      case 'object':
        return JSON.stringify(data);
      case 'undefined':
        return undefined;
      default:
        throw new TypeError(`StorageService -> getRawOrString(): Unknown type: ${typeof (data)}`);
    }
  }

  private getData(storage: Storage) {
    let storageData;
    try {
      storageData = JSON.parse(storage.getItem(this.app_prefix));
    } catch (e) {
      console.error('Cannot parse event value');
      storageData = null;
    }
    if (storageData && typeof storageData === 'object' && storageData.constructor === Object) {
      return storageData;
    } else {
      storage.setItem(this.app_prefix, '{}');
      return {};
    }
  }

  private getItem(storage: Storage, key: string, raw = true): string | any {
    const fullData = this.getData(storage);
    if (key in fullData) {
      return this.rawOrNot(raw, fullData[key]);
    } else {
      return undefined;
    }
  }

  private setItem(storage: Storage, key: string, value: string | any): void {
    let fullData = this.getData(storage);
    const resultObject = {};
    resultObject[key] = this.getRawOrString(value);
    fullData = Object.assign({}, fullData, resultObject);
    storage.setItem(this.app_prefix, JSON.stringify(fullData));
  }

  private removeItem(storage: Storage, key: string, raw = true): string | any {
    const fullData = this.getData(storage);
    if (fullData && key in fullData) {
      const temp = fullData[key];
      delete fullData[key];
      storage.setItem(this.app_prefix, JSON.stringify(fullData));
      return this.rawOrNot(raw, temp);
    }
  }

  private clear(storage: Storage, raw = true): string | any {
    const temp = this.getData(storage);
    storage.removeItem(this.app_prefix);
    return this.rawOrNot(raw, temp);
  }

  private makeStorage(storage: Storage) {
    return {
      setItem: (key: string, value: string | any): void => this.setItem(storage, key, value),
      getItem: (key: string, raw = true): string | any => this.getItem(storage, key, raw),
      removeItem: (key: string, raw = true): string | any => this.removeItem(storage, key, raw),
      clear: (raw = true): string | any => this.clear(storage, raw)
    };
  }

  public get local() {
    return this.makeStorage(localStorage);
  }

  public get session() {
    return this.makeStorage(sessionStorage);
  }
}
