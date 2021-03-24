import { TestBed } from '@angular/core/testing';

import { NewTreatmentsService } from './treatments.new.service';

xdescribe('Treatments.NewService', () => {
  let service: NewTreatmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTreatmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
