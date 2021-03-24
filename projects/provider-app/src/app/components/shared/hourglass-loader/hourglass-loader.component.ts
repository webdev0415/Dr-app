import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'pa-hourglass-loader',
  template: '<div id="loading-spinner" *ngIf="loading | async"><div id="loading-hourglass"></div></div>',
  styleUrls: ['./hourglass-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourglassLoaderComponent {
  @Input() loading: Observable<boolean>;
}
