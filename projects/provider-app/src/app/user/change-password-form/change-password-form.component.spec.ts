import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DialogSubscribesService } from 'services/dialogsubscribes.service';

import { ChangePasswordFormComponent } from './change-password-form.component';
import { UserService } from '../user.service';


describe('ChangePasswordFormComponent', generateSpecs({
    componentType: ChangePasswordFormComponent,
    declarations: [ChangePasswordFormComponent],
    imports: [
      NetworkTestModule,
      NavigationTestModule,
      NotificationsTestModule,
      DialogsTestModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      UserTestModule
    ],
    providers: [
      { provide: DialogSubscribesService, useValue: {} },
      {
        provide: UserService,
        useValue: jasmine.createSpyObj('UserService', [
          'logout'
        ])
      },
    ]
  },
  (context: TestContext<ChangePasswordFormComponent>) => {
    it('should change password', async () => {
      const component = context.component;
      component.oldPassword = 'yo';
      component.newPassword = '12AZDAWDAS';
      component.newPasswordConfirm = '12AZDAWDAS';
      component.checkPasswd();
      expect(component.buttonDisabled).toBeFalsy();
    });
  }
));
