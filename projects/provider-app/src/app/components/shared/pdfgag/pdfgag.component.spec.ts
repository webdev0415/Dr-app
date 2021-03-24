import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PdfgagComponent } from './pdfgag.component';


xdescribe('PdfgagComponent', generateSpecs({
    componentType: PdfgagComponent,
    imports: [
      NavigationTestModule
    ],
    declarations: [
      PdfgagComponent
    ]
  },
  (context: TestContext<PdfgagComponent>) => {
    xit('should emit close', () => {
      const spy = spyOnProperty(context.debugComponent.stateService, 'app').and.callThrough();
      context.component.closeComponent();
      expect(spy).toHaveBeenCalled();
    });
  }
));
