import { CommonModule } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';


import { StateService } from '../../services';
import { generateSpecs, TestContext } from '../../tests/test-context';
import { UserService } from '../../user/user.service';
import { BaseProceduresComponent } from '../base-procedures/base-procedures.component';

import { ProceduresComponent } from './procedures.component';

class MockStateService { get app() { return null; } }

describe('ProceduresComponent', generateSpecs({
  componentType: ProceduresComponent,
  imports: [CommonModule, RouterTestingModule],
  providers: [
    { provide: UserService, useValue: jasmine.createSpyObj('UserService', ['getUserRole']) },
    { provide: StateService, useClass: MockStateService },
    { provide: Title, useValue: jasmine.createSpyObj('Title', ['setTitle']) }
  ]
}, (context: TestContext<ProceduresComponent>) => {
  let component: ProceduresComponent;
  let stateService: jasmine.SpyObj<StateService>;
  let titleService;

  const activeComponent: jasmine.SpyObj<BaseProceduresComponent<any, any, any, any>> = jasmine.createSpyObj('BaseProceduresComponent', ['title', 'getDisabledBottomButtons', 'onClickBottomButton']);
  activeComponent.getDisabledBottomButtons.and.returnValue({ save: false });
  // @ts-ignore
  activeComponent.title = 'TITLE';

  beforeEach(async(() => {
    component = context.component;
    stateService = TestBed.get(StateService);
    titleService = TestBed.get(Title);
    spyOnProperty(stateService, 'app').and.returnValue({ header: { setData: (title: string) => {} } });
    component.onComponentActivate(activeComponent);
  }));

  it('should update title', () => {
    expect(titleService.setTitle).toHaveBeenCalledWith('TITLE');
  });

  it('should pass bottom button call to active component', () => {
    expect(component.getDisabledBottomButtons().save).toBeFalsy();
    expect(component.getShownBottomButtons().save).toBeTruthy();
    component.onClickBottomButton('save');
    expect(activeComponent.onClickBottomButton).toHaveBeenCalledWith('save');
    component.onComponentActivate(null);
    component.onClickBottomButton('save');
    expect(activeComponent.onClickBottomButton).toHaveBeenCalledTimes(1);
    expect(component.getDisabledBottomButtons()).toBeUndefined();
  });
}));
