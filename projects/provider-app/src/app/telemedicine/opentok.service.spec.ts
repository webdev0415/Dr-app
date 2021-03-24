import { TestBed } from '@angular/core/testing';

import { OpentokService } from './opentok.service';

describe('OpentokService', () => {
  let service: OpentokService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [OpentokService] });
    service = TestBed.inject(OpentokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
