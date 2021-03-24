import { generateSpecs, TestContext } from 'tests/test-context';
import { UserTestModule } from 'tests/user-test.module';

import { DocumentsHeaderComponent } from '../../../provider-documents/src/lib/documents-header/documents-header.component';
import { FullNamePipe } from 'utils/full-name.pipe';
import { SanitizerPipe } from 'utils/sanitizer.pipe';


describe('DocumentsHeaderComponent', generateSpecs({
    componentType: DocumentsHeaderComponent,
    imports: [UserTestModule],
    declarations: [
      DocumentsHeaderComponent,
      FullNamePipe,
      SanitizerPipe
    ]
  },
  (context: TestContext<DocumentsHeaderComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
