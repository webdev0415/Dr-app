import { inject } from '@angular/core/testing';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { NetworkTestModule } from '@pa-tests/network-test.module';
import { NotificationsTestModule } from '@pa-tests/notifications-test.module';
import { generateSpecs } from '@pa-tests/test-context';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { UserTestModule } from '@pa-tests/user-test.module';

import { DateTime } from 'utils/dateTime';
import { DataService } from './data.service';
import { KludgesService } from './kludges.service';
import { LazyService } from './lazy.service';
import { OtherdataService } from './otherdata.service';
import { PatientdataService } from './patientdata.service';
import { PatientListService } from '../patient-list/services/patient-list.service';
import { ServicedataService } from './servicedata.service';
import { ProceduresService } from '../procedures/procedures.service';
import { StateService } from './state.service';
import { TreatmentsService } from '../treatments/treatments.service';
import { MeasurementsService } from './measurements.service';
import { PatientDataFacadeService } from '../patient-core/patient-data-facade.service';

describe('DataService', generateSpecs({
    imports: [
      StoreTestModule.withoutMock([DataService, StateService]),
      NetworkTestModule,
      NavigationTestModule,
      NotificationsTestModule,
      UserTestModule
    ],
    providers: [
      DataService,
      KludgesService,
      LazyService,
      OtherdataService,
      PatientdataService,
      PatientListService,
      ServicedataService,
      DateTime,
      ProceduresService,
      TreatmentsService,
      { provide: MeasurementsService, useValue: {} },
      { provide: PatientDataFacadeService, useValue: {} },
    ]
  },
  () => {
    it('should be created', inject([DataService], (service: DataService) => {
      expect(service).toBeTruthy();
    }));
  }
));
