import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { NotificationsService, StateService } from '../../services';
import { CUSTOM_OVERLAY_DATA, CustomOverlayRef } from '../../services/app/dialog.service';
import { StoreTestModule } from '../../tests/ngxs-store-test.module';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { PhysicalFindingsService } from '../physical-findings.service';
import { SplitToBodyPartsPipe } from '../split-to-body-parts.pipe';

import { PpPeMediaComponent } from './pp-pe-media.component';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

xdescribe('PpPeMediaComponent', generateSpecs({
    componentType: PpPeMediaComponent,
    providers: [
      {
        provide: CUSTOM_OVERLAY_DATA, useValue: {
          'media': [
            {
              'name': 'Left Ear',
              'url': {
                'changingThisBreaksApplicationSecurity': 'blob:http://localhost:4200/09f49d75-889b-4837-ad12-b2b5b0281df7'
              }
            },
            {
              'name': 'Left Ear',
              'url': {
                'changingThisBreaksApplicationSecurity': 'blob:http://localhost:4200/55337bb2-2e28-4607-90f0-b4ae25f24416'
              }
            }
          ],
          'index': 0,
          'showButtons': true,
          'bodyPart': 'Left Ear',
          'viewOnly': false
        }
      },
      {provide: CustomOverlayRef, useValue: createSpyObj('CustomOverlayRef', ['close'])},
      {provide: StateService, useValue: createSpyObj('StateService', ['patient'])},
      {provide: NotificationsService, useValue: createSpyObj('NotificationsService', ['info'])},
      {provide: PhysicalFindingsService, useValue: createSpyObj('PhysicalFindingsService', ['changedSystems', 'savePEChanges'])},
      SplitToBodyPartsPipe
    ],
    declarations: [
      PpPeMediaComponent
    ],
    imports: [
      StoreTestModule,
      NoopAnimationsModule
    ]
  }, (context: TestContext<PpPeMediaComponent>) => {
    let component: PpPeMediaComponent;
    let stateService: SpyObj<StateService>;
    let physicalFindingsService: SpyObj<PhysicalFindingsService>;

    beforeEach(() => {
      stateService = TestBed.get(StateService);
      physicalFindingsService = TestBed.get(PhysicalFindingsService);
      // todo: @types/jasmine update error
      // @ts-ignore
      spyOn(stateService, 'patient').and.returnValue({ getExamReviewed: () => of(false) });
      // todo: @types/jasmine update error
      // @ts-ignore
      spyOn(physicalFindingsService, 'changedSystems').and.returnValue([]);
      spyOn(physicalFindingsService, 'savePEChanges').and.returnValue(of(true));
      component = context.component;
      context.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  })
);
