import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { DataService, NavigationService } from 'services';
import { DialogSubscribesService } from '../../../../services/dialogsubscribes.service';
import { PopupsModule } from '../popups.module';
import { PpselectComponent } from './ppselect.component';
import { TreatmentsService } from '../../../../treatments/treatments.service';


describe('PpselectComponent', generateSpecs({
    componentType: PpselectComponent,
    imports: [
      PopupsModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
    ],
    providers: [
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: DataService, useValue: {} },
      { provide: DialogSubscribesService, useValue: {} },
      { provide: TreatmentsService, useValue: jasmine.createSpyObj('TreatmentsService', ['dispatch']) },
      NavigationService
    ]
  },
  (context: TestContext<PpselectComponent>) => {
    it('should toggle', () => {
      const component: PpselectComponent = context.component;
      const count = component.selected.length;
      component.toggleItem('test');
      expect(component.selected.length).toEqual(count + 1);
      component.toggleItem('test');
      expect(component.selected.length).toEqual(count);
    });
  }
));
