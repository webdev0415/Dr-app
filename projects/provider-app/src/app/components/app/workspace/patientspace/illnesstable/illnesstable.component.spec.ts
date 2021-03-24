import { Component, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of as ObservableOf } from 'rxjs';
import { DataService } from 'services';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PopupsModule } from '../../../../shared/popups/popups.module';

import { IllnessTableComponent } from './illnesstable.component';


@Component({
  selector: 'pa-editable-text',
  template: 'Mock Editable Text Component'
})
class MockEditableTextComponent {
  @Input() data: string | undefined;
  @Input() subtext: string | undefined;
  @Input() reviewed: boolean | undefined;
  @Input() examReviewed: boolean | undefined;
  @Input() multiline: boolean | undefined;
  @Input() maxLength: number;
  @Input() disabled: boolean;
  @Output() renamed = new EventEmitter<string>();
  @Output() editing = new EventEmitter<boolean>();
  @Output() reviewDialog = new EventEmitter<boolean>();
  @Input() illnessPresentation: string;
}

@Pipe({ name: 'filterSymptomName' })
class MockSymptomFilterPipe implements PipeTransform {
  public transform(value) {
    return value;
  }
}


describe('IllnessTableComponent', generateSpecs({
    componentType: IllnessTableComponent,
    imports: [
      BrowserAnimationsModule,
      PopupsModule,
      NavigationTestModule // for PopupsModule
    ],
    declarations: [
      MockSymptomFilterPipe,
      MockEditableTextComponent,
      IllnessTableComponent
    ],
    providers: [
      {
        provide: DataService, useValue: jasmine.createSpyObj(
          'PatientService',
          [
            'getTriageValue'
          ]
        )
      }
    ]
  },
  (context: TestContext<IllnessTableComponent>) => {
    let servicespy: jasmine.SpyObj<DataService>;

    beforeEach(async(() => {
      servicespy = TestBed.get(DataService);
    }));

    it('should get triage value', () => {
      servicespy.getTriageValue.and.returnValue(ObservableOf([]));
      context.component.getTriageValue('123');
      expect(servicespy.getTriageValue).toHaveBeenCalled();
    });

    it('should toggle accordion', () => {
      const expanded = context.component.expanded;
      context.component.toggleAccordion({icdGroup: 'group'});
      expect(context.component.expanded).toBe(!Boolean(expanded));
    });

    it('should check index', () => {
      expect(context.component.checkIndex(2)).toBe(2 < context.component.topIllnessQuantity);
    });
  }
));
