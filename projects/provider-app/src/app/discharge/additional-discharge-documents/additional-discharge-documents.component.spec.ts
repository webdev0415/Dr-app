import { AdditionalDischargeDocumentsComponent } from './additional-discharge-documents.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { PopupsModule } from '../../components/shared/popups/popups.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { MDBModule } from '../../mdb.module';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { KludgesService, ServicedataService } from '../../services';
import { UserTestModule } from '@pa-tests/user-test.module';

class KludgesServiceMock {
  receiveDischargeArticles(icdCodes: string[], keyword: string, start = 0, companyName = 'advinow') {
    return of({
      data: [],
    recordsTotal: 0,
    error: null,
    start: start
    });
  }
}

class ServiceDataServiceMock {
  public nodeSearch(icdCodes: string[], type, addWorker, isArray) {
    return of({nodes: []});
  }
}

describe('AdditionalDischargeDocumentsComponent', generateSpecs({
    componentType: AdditionalDischargeDocumentsComponent,
    declarations: [AdditionalDischargeDocumentsComponent],
    imports: [
      PopupsModule,
      DialogsTestModule,
      MDBModule,
      FormsModule,
      UserTestModule
    ],
    providers: [{ provide: KludgesService, useClass: KludgesServiceMock }, { provide: ServicedataService, useClass: ServiceDataServiceMock }],
    beforeEachDetectChanges: false
  },
  (context: TestContext<AdditionalDischargeDocumentsComponent>) => {
    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
