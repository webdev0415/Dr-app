import { ClerkLabsComponent } from './clerk-labs.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { StoreTestModule } from '@pa-tests/ngxs-store-test.module';
import { MDBModule } from '../../mdb.module';
import { NavigationService, StateService } from '../../services';
import { Title } from '@angular/platform-browser';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { TestBed } from '@angular/core/testing';
import { BusinessLabsComponent } from '../business-labs/business-labs.component';
import { LabsService } from '../services/labs.service';
import { ChangeDetectorRef } from '@angular/core';
import SpyObj = jasmine.SpyObj;

describe('ClerkLabsComponent', generateSpecs({
  componentType: ClerkLabsComponent,
  imports: [
    StoreTestModule,
    MDBModule,
    NavigationTestModule
  ],
  providers: [
    StateService,
    Title,
    {
      provide: LabsService, useValue: {}
    },
    ChangeDetectorRef
  ],
  declarations: [
    ClerkLabsComponent,
    BusinessLabsComponent
  ],
  beforeEachDetectChanges: false
}, (context: TestContext<ClerkLabsComponent>) => {
  let component: ClerkLabsComponent;
  let navigationService: SpyObj<NavigationService>;

  beforeEach(() => {
    navigationService = TestBed.get(NavigationService);
    component = context.component;
    component.businessLabs = jasmine.createSpyObj('businessLabs', {'saveResults': () => {}, 'saveButtonDisabled': false});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return shown bottom buttons', () => {
    expect(component.getShownBottomButtons()).toEqual({
      saveLab: true,
      saveAndExit: true
    });
  });

  it('should return disabled bottom buttons', () => {
    expect(component.getDisabledBottomButtons()).toEqual({
      saveLab: true,
      saveAndExit: true
    });
  });

  it('should save on click bottom buttons', () => {
    component.onClickBottomButton('saveAndExit');
    component.onClickBottomButton('saveLab');
    expect(component.businessLabs.saveResults).toHaveBeenCalledTimes(2);
  });
}));
