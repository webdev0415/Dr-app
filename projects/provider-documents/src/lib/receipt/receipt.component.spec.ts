import { generateSpecs, TestContext } from 'tests/test-context';

import { ReceiptComponent } from '../../../provider-documents/src/lib/receipt/receipt.component';
import { testPaymentInfo } from 'static/test.constants';


describe('ReceiptComponent', generateSpecs({
    componentType: ReceiptComponent,
    declarations: [
      ReceiptComponent
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<ReceiptComponent>) => {
    beforeEach(() => {
      context.component.paymentInfo = testPaymentInfo;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
