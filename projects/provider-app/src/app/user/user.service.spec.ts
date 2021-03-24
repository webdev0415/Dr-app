import { inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';


describe('UserService', generateSpecs({
    imports: [UserTestModule],
    providers: []
  },
  () => {
    it('should be created', inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy();
    }));
  }
));
