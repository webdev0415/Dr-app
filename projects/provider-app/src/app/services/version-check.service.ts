import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface Version {
  app: string;
}

const versionCheckPath = '/DoctorApp/assets/versions.json';

@Injectable({
  providedIn: 'root'
})
export class VersionCheckService {
  delayUpdate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  delayUpdate$ = this.delayUpdate.asObservable();
  private currentVersion: string;
  private newVersionAvailable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  newVersionAvailable$ = this.newVersionAvailable.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  initVersionCheck(): void {
    this.checkVersion(versionCheckPath);
    setInterval(() => this.checkVersion(versionCheckPath), 3600000);
  }

  private checkVersion(url): void {
    this.http
      .get(url + '?t=' + new Date().getTime())
      .pipe(first())
      .subscribe(
        (version: Version) => {
          if (this.hasVersionChanged(this.currentVersion, version.app)) {
            this.newVersionAvailable.next(true);
          }
          this.currentVersion = version.app;
        },
        err => console.error(err, 'Could not get version')
      );
  }

  private hasVersionChanged(currentVersion, newVersion): boolean {
    return currentVersion ? currentVersion !== newVersion : false;
  }

  updateVersion() {
    this.router.navigate(['/']);
    location.reload(true);
  }
}
