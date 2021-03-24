import { ReturnToSchoolComponent } from './return-to-school.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pa-inline-datepicker',
  template: 'Mock Inline Date Picker'
})
export class MockInlineDatePickerComponent {
  @Input() date: string;
  @Input() disabled: boolean;
  @Input() dateOptions;
  @Input() closeEvent;
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
}

describe('ReturnToSchoolComponent', generateSpecs({
  componentType: ReturnToSchoolComponent,
  declarations: [ReturnToSchoolComponent, MockInlineDatePickerComponent],
  beforeEachDetectChanges: false
}, (context: TestContext<ReturnToSchoolComponent>) => {
  let component: ReturnToSchoolComponent;

  beforeEach(() => {
    component = context.component;
    context.detectChanges();
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
