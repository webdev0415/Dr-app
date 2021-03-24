import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';

import { ConfirmCodeFormComponent } from './confirm-code-form.component';


describe('ConfirmCodeFormComponent', generateSpecs({
    componentType: ConfirmCodeFormComponent,
    declarations: [ConfirmCodeFormComponent],
    imports: [
      NetworkTestModule,
      NavigationTestModule,
      NotificationsTestModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      UserTestModule
    ],
    providers: []
  },
  (context: TestContext<ConfirmCodeFormComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
