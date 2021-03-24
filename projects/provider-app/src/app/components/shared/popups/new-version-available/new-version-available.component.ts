import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { VersionCheckService } from 'services/version-check.service';
import { Subject, timer } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

const initialTimeLeft = 30;

@Component({
  selector: 'pa-new-version-available',
  templateUrl: './new-version-available.component.html',
  styleUrls: ['./new-version-available.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewVersionAvailableComponent implements OnDestroy, OnChanges, OnInit {
  @Input() showTimer: boolean;

  private componentDestroy$: Subject<void> = new Subject();
  countdown: number = initialTimeLeft;

  constructor(
    private versionCheckService: VersionCheckService,
    private changeDetector: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnChanges(): void {
    if (!this.showTimer) this.countdown = 0;
  }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

  private startTimer(): void {
    this.ngZone.runOutsideAngular(() => {
      timer(50, 1000)
        .pipe(
          takeUntil(this.componentDestroy$),
          takeWhile(() => this.showTimer)
        )
        .subscribe(time => this.checkTimer(time));
    });
  }

  private checkTimer(time: number): void {
    if (time > initialTimeLeft) {
      this.updateNow();
    } else {
      this.countdown = initialTimeLeft - time;
    }
    this.changeDetector.detectChanges();
  }

  updateNow(): void {
    this.versionCheckService.updateVersion();
  }

  updateLater(): void {
    this.versionCheckService.delayUpdate.next(true);
  }

}
