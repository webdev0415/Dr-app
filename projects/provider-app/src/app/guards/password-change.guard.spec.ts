import { inject } from '@angular/core/testing';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs } from '@pa-tests/test-context';

import { PasswordChangeGuard } from './password-change.guard';


describe('PasswordChangeGuard', generateSpecs({
    imports: [
      NavigationTestModule
    ],
    providers: [
      PasswordChangeGuard
    ]
  },
  () => {
    it('should be created', inject([PasswordChangeGuard], (guard: PasswordChangeGuard) => {
      expect(guard).toBeTruthy();
    }));
  }
));
