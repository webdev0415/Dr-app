import { Injectable } from '@angular/core';

import JSEncrypt from 'jsencrypt';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptographicService {
  private jsEncrypt;
  private _encryptedCredentials: string;

  constructor() {
    this.jsEncrypt = new JSEncrypt({});
  }

  public criptify(data: string, key: string) {
    this.jsEncrypt.setPublicKey(key);
    this._encryptedCredentials = this.jsEncrypt.encrypt(data);
  }

  public get encryptedCredentials(): string | null {
    return this._encryptedCredentials || null;
  }

  public set encryptedCredentials(credentials: string | null) {
    this._encryptedCredentials = credentials;
  }
}
