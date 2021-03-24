import { NewVersionAvailableComponent } from './new-version-available.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { generateSpecs, TestContext } from '@pa-tests/test-context';

describe('NewVersionAvailableComponent', generateSpecs({
    componentType: NewVersionAvailableComponent,
    declarations: [NewVersionAvailableComponent],
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<NewVersionAvailableComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));

