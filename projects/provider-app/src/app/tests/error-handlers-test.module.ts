import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { SentryErrorHandler } from '../utils/sentryErrorHandler';

const sentryErrorHandlerSpy: jasmine.SpyObj<SentryErrorHandler> = jasmine.createSpyObj('SentryErrorHandler', [
  'handleError'
]);


@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: SentryErrorHandler,
      useValue: sentryErrorHandlerSpy
    },
    {
      provide: ErrorHandler,
      useValue: sentryErrorHandlerSpy
    }
  ]
})
export class ErrorHandlersTestModule {
  static withoutMock(): ModuleWithProviders<ErrorHandlersTestModule> {
    return {
      ngModule: ErrorHandlersTestModule,
      providers: [
        {
          provide: ErrorHandler,
          useValue: { handleError: (error, ...args) => console.error(error) }
        }
      ]
    };
  }
}
