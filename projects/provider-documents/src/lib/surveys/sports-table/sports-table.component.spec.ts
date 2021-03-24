import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { generateSpecs, TestContext } from 'tests/test-context';

import { SportsTableComponent } from '../../../provider-documents/src/lib/surveys/sports-table/sports-table.component';
import { MockDataService } from 'components/app/workspace/patientspace/main/main.component.spec';
import { DataService } from 'services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('SportsTableComponent', generateSpecs({
    componentType: SportsTableComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
    ],
    declarations: [
      SportsTableComponent
    ],
    providers: [{
      provide: DataService,
      useClass: MockDataService
    }]
  },
  (context: TestContext<SportsTableComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
