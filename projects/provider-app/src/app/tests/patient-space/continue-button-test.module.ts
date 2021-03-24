import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonTestModule } from '@pa-tests/common-test.module';

import { NavigationTestModule } from '../navigation-test.module';


@Component({
  selector: 'pa-continue-button',
  template: 'Mock Continue Button Component'
})
export class MockContinueButtonComponent implements AfterViewInit {
  @Input() private class: string | undefined;
  @Input() private defaultOperation = true;
  @Input() public disabled = false;

  ngAfterViewInit(): void {
  }
}


@NgModule({
  imports: [
    CommonModule,
    CommonTestModule,
    NavigationTestModule
  ],
  declarations: [
    MockContinueButtonComponent
  ],
  exports: [
    MockContinueButtonComponent
  ],
  providers: [
    {
      provide: ActivatedRoute,
      useValue: {
        parent: {snapshot: {params: {id: 123}}},
        snapshot: {params: {id: 123}}
      }
    },
  ]
})
export class ContinueButtonTestModule {}
