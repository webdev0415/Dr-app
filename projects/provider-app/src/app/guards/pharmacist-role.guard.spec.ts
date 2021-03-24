import { TestBed, async, inject } from '@angular/core/testing';

import { PharmacistRoleGuard } from './pharmacist-role.guard';

xdescribe('PharmacistRoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmacistRoleGuard]
    });
  });

  it('should ...', inject([PharmacistRoleGuard], (guard: PharmacistRoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
