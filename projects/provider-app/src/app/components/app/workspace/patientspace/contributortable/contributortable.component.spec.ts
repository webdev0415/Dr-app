import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { ContributorTableComponent } from './contributortable.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterSymptomName' })
class MockSymptomFilterPipe implements PipeTransform {
  public transform(value) {
    return value;
  }
}

describe('ContributorTableComponent', generateSpecs({
    componentType: ContributorTableComponent,
    imports: [
      BrowserAnimationsModule,
      DialogsTestModule
    ],
    declarations: [
      MockSymptomFilterPipe,
      ContributorTableComponent
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<ContributorTableComponent>) => {
  let service: MockSymptomFilterPipe;

    beforeEach(() => {
      service = new MockSymptomFilterPipe();
      context.component.source = [{symptomId: 'SYMP01', contribution: 0.25}, {symptomId: 'SYMP02', contribution: 0.81}];
      context.detectChanges();
    });

    it('should get columns', () => {
      expect(context.component.firstColumn).toBeDefined();
      expect(context.component.secondColumn).toBeDefined();
    });

    it('should toggle table', () => {
      const toggle = context.component.showMoreOrLess;
      context.component.toggleTable();
      expect(context.component.showMoreOrLess).toBe(!Boolean(toggle));
    });
  }
));
