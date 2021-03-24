import { ModuleWithProviders, NgModule, Injectable } from '@angular/core';
import { NGXS_PLUGINS, NgxsModule } from '@ngxs/store';
import { DiagnosisAccordionState } from '../components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.state';
import { PhysicalExamPanelState } from '../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.state';
import { DataService, StateService, SymptomsService } from '../services';
import { ErrorHandlersTestModule } from '@pa-tests/error-handlers-test.module';
import { Observable, of } from 'rxjs';
import { PhysicalExamPanelPlugin } from '../components/app/workspace/patientspace/stores/physical-exam-panel/physical-exam-panel.plugin';
import { DiagnosisAccordionPlugin } from '../components/app/workspace/patientspace/stores/diagnosis-accordion/diagnosis-accordion.plugin';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';


@Injectable()
class MockStateService {
  private static isPrimary: boolean;
  private static hasIllness: boolean;
  private static viewOnly: boolean;

  public static get patient() {
    return {
      setIsPrimary: (isPrimary: boolean) => this.isPrimary = isPrimary,
      setHasIllness: (hasIllness: boolean) => this.hasIllness = hasIllness,
      setViewOnly: (viewOnly: boolean) => this.viewOnly = viewOnly,
      getViewOnly: (): Observable<boolean> => of(this.viewOnly)
    };
  }
}

const mockProviders = [
  {
    provide: StateService, useClass: MockStateService
  },
  {
    provide: SymptomsService, useValue: jasmine.createSpyObj('SymptomsService', ['searchParsedSymptom', 'loadGroupedSymptom'])
  },
  {
    provide: DataService, useValue: jasmine.createSpyObj('DataService', ['updatePatient'])
  },
  {
    provide: NGXS_PLUGINS,
    useClass: PhysicalExamPanelPlugin,
    multi: true
  }, {
    provide: NGXS_PLUGINS,
    useClass: DiagnosisAccordionPlugin,
    multi: true
  }
];

@NgModule({
  imports: [
    NgxsModule.forRoot([DiagnosisAccordionState, PhysicalExamPanelState]),
    NgxsResetPluginModule.forRoot(),
    ErrorHandlersTestModule,
    DialogsTestModule,
    NotificationsTestModule
  ],
  providers: mockProviders
})
export class StoreTestModule {
  static withoutMock(noMockList: any[]): ModuleWithProviders<StoreTestModule> {
    return {
      ngModule: StoreTestModule,
      providers: mockProviders.filter(item => noMockList.indexOf(item.provide) < 0).concat(noMockList)
    };
  }
}
