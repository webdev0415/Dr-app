import { async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';

import { LoginFormComponent } from './login-form.component';
import { ConfirmCodeFormComponent } from '../confirm-code-form/confirm-code-form.component';


describe('LoginFormComponent', generateSpecs({
    componentType: LoginFormComponent,
    declarations: [LoginFormComponent, ConfirmCodeFormComponent],
    imports: [
      NetworkTestModule,
      NavigationTestModule,
      NotificationsTestModule,
      BrowserAnimationsModule,
      UserTestModule,
      FormsModule,
      ReactiveFormsModule
    ]
  },
  (context: TestContext<LoginFormComponent>) => {
    it('should call login', async(() => {
      context.component.loginForm = new FormGroup({
        loginControl: new FormControl('', [Validators.required]),
        passwordControl: new FormControl(null, [Validators.required])
      });
      const spy = spyOn(context.debugComponent.userService, 'login').and.returnValue(Promise.resolve());
      context.component.doLogin();
      expect(spy).toHaveBeenCalled();
    }));
  }
));
