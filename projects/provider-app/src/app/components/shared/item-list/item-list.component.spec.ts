import { Component, EventEmitter, Input, Output } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { of as ObservableOf } from 'rxjs';
import { DataService } from 'services';
import { SymptomsService } from '../../../services/symptoms.service';
import { ItemListComponent } from './item-list.component';

import { testVisitData } from 'static/test.constants';
import { PatientDataSectionNameEnum } from '../../../common/enums/patient-data-section.enum';


@Component({
  selector: 'pa-editable-text',
  template: 'Mock Editable Text Component'
})
class MockEditableTextComponent {
  @Input() data: string | undefined;
  @Input() maxLength: number;
  @Input() allowEmpty: boolean;
  @Input() disabled: boolean;
  @Input() prefix: string;
  @Output() renamed = new EventEmitter<string>();
  @Output() editing = new EventEmitter<boolean>();
}

describe('ItemListComponent', generateSpecs({
    componentType: ItemListComponent,
    imports: [
      DialogsTestModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [
      ItemListComponent,
      MockEditableTextComponent
    ],
    providers: [
      { provide: DataService, useValue: jasmine.createSpyObj('PatientService',
          [
            'updatePatient'
          ])
      },
      { provide: SymptomsService, useValue: jasmine.createSpyObj('SymptomsService',
          [
            'addSymptom',
            'removeSymptom',
            'getSymptomCategories'
          ])
      }
    ],
    beforeEachDetectChanges: false
  },
  (context: TestContext<ItemListComponent>) => {
    let dataServiceSpy: jasmine.SpyObj<DataService>;
    let symptomsServiceSpy: jasmine.SpyObj<SymptomsService>;

    beforeEach(async(() => {
      dataServiceSpy = TestBed.get(DataService);
      symptomsServiceSpy = TestBed.get(SymptomsService);
    }));

    beforeEach(() => {
      symptomsServiceSpy.removeSymptom.and.returnValue(ObservableOf({
        patientInformation: {
          patientId: '1000'
        }, treatmentEngine: []
      }));
      context.component.section = {
        name: PatientDataSectionNameEnum.personalHistory, data: [], list: [],
      };
      // @ts-ignore
      context.component.patient = testVisitData;
      context.detectChanges();
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });
  }
));
