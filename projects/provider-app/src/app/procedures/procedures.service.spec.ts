import { HttpErrorResponse } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { defer, of, throwError } from 'rxjs';
import { UserRolesEnum } from '../common/enums/user-roles.enum';
import { StateService } from '../services';
import { NetworkTestModule } from '../tests/network-test.module';
import { generateSpecs } from '../tests/test-context';
import { UserService } from '../user/user.service';

import { ProceduresService } from './procedures.service';

class MockUserService {
  get getUserRole() { return null; }
}

describe('ProceduresService', generateSpecs({
  imports: [NetworkTestModule],
  providers: [{ provide: UserService, useClass: MockUserService }, ProceduresService]
}, () => {
  let service: ProceduresService;
  let userService: jasmine.SpyObj<UserService>;
  let userRole;
  let getResult;

  beforeAll(() => {
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    userRole = spyOnProperty(userService, 'getUserRole');
    spyOnProperty(TestBed.inject(StateService), 'patient').and.returnValue({ getCurrentId: () => 1 });
  });

  beforeEach(() => {
    service = TestBed.inject(ProceduresService);
    userRole.and.returnValue(UserRolesEnum.PRACTITIONER);
    // @ts-ignore
    getResult = spyOn(service, 'show');
  });

  it('should obtain and return business procedures data', async(() => {
    let businessData = {injections: [{ id: 1, name: 'injection 1' }], medications: [{ id: 1, name: 'medication 1' }]};
    getResult.and.returnValue(defer(() => of(businessData)));
    service.getMedicationsData();
    service.getInjectionsData();
    expect(service.getBusinessMedications().length).toEqual(2);
    expect(service.getBusinessInjections().length).toEqual(2);
    businessData = {injections: null, medications: null};
    service.getMedicationsData();
    service.getInjectionsData();
    expect(service.getBusinessMedications()).toBeNull();
    expect(service.getBusinessInjections()).toBeNull();
    getResult.and.returnValue(throwError('network error'));
    userRole.and.returnValue(UserRolesEnum.OPERATIONS_MANAGER);
    service.getMedicationsData();
    service.getInjectionsData();
    expect(service.getBusinessMedications().length).toEqual(1);
    expect(service.getBusinessInjections().length).toEqual(1);
  }));

  it('should obtain patient\'s procedures', async(async() => {
    getResult.and.returnValue(defer(() => of([{id: 1, name: 'medication 1'}])));
    let data = await service.getProcedures('medications').toPromise();
    expect(data.length).toEqual(1);
    getResult.and.returnValue(throwError('network error'));
    data = await service.getProcedures('medications').toPromise();
    expect(data.length).toEqual(0);
  }));

  it('should update patient data', () => {
    // @ts-ignore
    const sendResult = spyOn(service, 'send');
    sendResult.and.returnValue(of({ message: 'OK' }));
    service.order('medications', []);
    service.update('medications', []);
    expect(sendResult).toHaveBeenCalledTimes(2);
  });
}));
