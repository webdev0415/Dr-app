import { generateSpecs, TestContext } from 'tests/test-context';

import { SportsTableRowComponent } from '../../../provider-documents/src/lib/sports-physical-exam/sports-table-row/sports-table-row.component';


describe('SportsTableRowComponent', generateSpecs({
    componentType: SportsTableRowComponent,
    declarations: [
      SportsTableRowComponent
    ]
  },
  (context: TestContext<SportsTableRowComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  })
);
