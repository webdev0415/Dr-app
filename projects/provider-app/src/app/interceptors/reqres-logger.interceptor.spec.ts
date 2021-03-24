import { inject } from '@angular/core/testing';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { UserTestModule } from '@pa-tests/user-test.module';

import { ReqresLoggerInterceptor } from './reqres-logger.interceptor';


describe('ReqresLoggerService', generateSpecs({
    imports: [
      NetworkTestModule,
      UserTestModule
    ],
    providers: [
      ReqresLoggerInterceptor
    ]
  },
  () => {
    it('should be created', inject([ReqresLoggerInterceptor], (service: ReqresLoggerInterceptor) => {
      expect(service).toBeTruthy();
    }));
  }
));
