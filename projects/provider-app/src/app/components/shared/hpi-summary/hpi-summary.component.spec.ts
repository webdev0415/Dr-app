import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable, of as ObservableOf } from 'rxjs';

import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { HpiSummaryComponent } from './hpi-summary.component';
import { DataService } from 'services';
import { Component, Input } from '@angular/core';

class MockDataService {
  constructor() {}
  public getSummary() {
    return ObservableOf([]);
  }
  public saveSummary(...items): Observable<any> {
    return ObservableOf();
  }
}

@Component({
  selector: 'pa-hourglass-loader',
  template: 'Mock hourglass'
})
class MockHourglassComponent {
  @Input() loading;
}

describe('HpiSummaryComponent', generateSpecs({
  componentType: HpiSummaryComponent,
  imports: [
    NavigationTestModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationsTestModule
  ],
  declarations: [
    HpiSummaryComponent,
    MockHourglassComponent
  ],
  providers: [
    {
      provide: DataService, useClass: MockDataService
    }
  ],
  beforeEachDetectChanges: false
}, (context: TestContext<HpiSummaryComponent>) => {
  beforeEach(() => {
    context.debugComponent.currentPatient = {};
    context.detectChanges();
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
