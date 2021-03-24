import { FormsModule } from '@angular/forms';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';

import { NotificationsService } from 'services';
import { PatientPanelComponent } from './patientpanel.component';
import { ReactionPipe } from 'utils/reaction.pipe';
import { FullNamePipe } from 'utils/full-name.pipe';

describe('PatientPanelComponent', generateSpecs({
    componentType: PatientPanelComponent,
    declarations: [PatientPanelComponent, ReactionPipe, FullNamePipe],
    providers: [{ provide: NotificationsService, useValue: { info: (msg: string): void => {} } }],
    imports: [DialogsTestModule, MDBBootstrapModulesPro.forRoot(), FormsModule],
    beforeEachDetectChanges: false
  },
  (context: TestContext<PatientPanelComponent>) => {
    beforeEach(() => {
      context.component.isOM = false;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
