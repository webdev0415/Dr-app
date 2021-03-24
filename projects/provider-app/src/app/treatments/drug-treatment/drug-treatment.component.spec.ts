// import { async, TestBed } from '@angular/core/testing';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
// import { NotificationsTestModule } from '@pa-tests/notifications-test.module';

// import { generateSpecs, TestContext } from '@pa-tests/test-context';
// import { testDrugInformation } from 'static/test.constants';
// import { DialogService } from '../../services/app/dialog.service';

// import { DrugTreatmentComponent } from './drug-treatment.component';
import { Component, ContentChild, Input } from '@angular/core';
// import { TreatmentsService } from '../treatments.service';
// import { KludgesService, StateService } from '../../services';
// import { TreatmentsModule } from '../treatments.module';
// import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
// import { UserTestModule } from '@pa-tests/user-test.module';

@Component({
  selector: 'pa-mdb-wrapper',
  template: 'Mock Pa Mdb Wrapper Component'
})
export class MockPaMdbWrapperComponent {
  @Input() disabledRule;
  @ContentChild('mdbContent') mdbInstance;
  @ContentChild('disabledContent') inputInstance;
}


// describe('DrugTreatmentComponent', generateSpecs({
//     componentType: DrugTreatmentComponent,
//     imports: [
//       NotificationsTestModule,
//       DialogsTestModule,
//       BrowserAnimationsModule,
//       TreatmentsModule.forRoot(),
//       StoreTestModule.withoutMock([StateService]),
//       UserTestModule
//     ],
//     declarations: [
//       MockPaMdbWrapperComponent
//     ],
//     providers: [
//       TreatmentsService,
//       {
//         provide: KludgesService, useValue: jasmine.createSpyObj('KludgesService', ['getTreatments'])
//       },
//       StateService
//     ],
//     beforeEachDetectChanges: false,
//     noErrorsSchema: true,
//   },
//   (context: TestContext<DrugTreatmentComponent>) => {
//     let component: DrugTreatmentComponent;
//     let dialogService: DialogService;

//     beforeEach(async(() => {
//       dialogService = TestBed.get(DialogService);
//     }));

//     beforeEach(() => {
//       component = context.component;
//       component.drug = testDrugInformation[0];
//       context.detectChanges();
//     });

//     it('should create', () => {
//       expect(context.component).toBeTruthy();
//     });
//   }
// ));
