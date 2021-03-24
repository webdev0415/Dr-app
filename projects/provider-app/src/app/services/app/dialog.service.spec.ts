import { OverlayModule } from '@angular/cdk/overlay';
import { inject } from '@angular/core/testing';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { DialogService } from './dialog.service';


describe('DialogService', generateSpecs({
    imports: [
      OverlayModule,
      NavigationTestModule,
      DialogsTestModule.withoutMock()
    ]
  },
  () => {
    it('should be created', inject([DialogService], (service: DialogService) => {
      expect(service).toBeTruthy();
    }));
  }
));
