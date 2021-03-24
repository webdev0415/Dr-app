import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { of } from 'rxjs';


import { PpAddHealthHistoryComponent } from './pp-add-health-history.component';

import { PopupsModule } from '../../popups.module';
import { DialogsTestModule } from '@pa-tests/dialogs-test.module';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { TreatmentsService } from '../../../../../treatments/treatments.service';
import createSpyObj = jasmine.createSpyObj;

xdescribe('PpAddHealthHistoryItemComponent', generateSpecs({
  componentType: PpAddHealthHistoryComponent,
  imports: [PopupsModule, DialogsTestModule],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {list: []}},
    {provide: TreatmentsService, useValue: createSpyObj(['getDrugsByName'])}
  ],
}, (context: TestContext<PpAddHealthHistoryComponent>) => {
  let treatmentsService: jasmine.SpyObj<TreatmentsService>;
  beforeEach(() => {
    treatmentsService = TestBed.get(TreatmentsService);
  });

  beforeEach(() => {
    treatmentsService.getDrugsByName.and.returnValue(of(['1', '2']));
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
